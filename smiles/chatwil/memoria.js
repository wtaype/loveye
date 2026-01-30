const MAX_HISTORY = 20;
const STORAGE_KEY = 'chatwiil_history';
const TOPICS_KEY = 'chatwiil_topics';
let conversationHistory = [];
let topicsDiscussed = [];

// ========== TEMAS DE SALUD OCULAR ==========
const temasOculares = {
  ojo_seco: /ojo(s)? seco(s)?|sequedad|xeroftalm[ií]a|resequedad/i,
  conjuntivitis: /conjuntivitis|ojo(s)? rojo(s)?|infecci[oó]n/i,
  fatiga_visual: /fatiga|cansancio|vista cansada|ojos cansados/i,
  vision_borrosa: /borrosa?|desenfocad[oa]|no veo bien/i,
  dolor: /dolor|duele|adolorido/i,
  prevencion: /prevenci[oó]n|cuidado|proteger|evitar/i,
  nutricion: /alimento(s)?|comida|vitamina(s)?|dieta|omega/i,
  pantallas: /pantalla(s)?|computadora|celular|luz azul/i,
  examenes: /examen|revisi[oó]n|oftalm[oó]logo|chequeo/i,
  lentes: /lentes|anteojos|gafas|contacto/i,
  diabetes: /diabetes|diab[eé]tico|az[uú]car|glucosa/i,
  glaucoma: /glaucoma|presi[oó]n ocular/i,
  cataratas: /catarata(s)?|opacidad|nublad[oa]/i
};

// ========== AGREGAR MENSAJE ==========
export const add = (role, content) => {
  const mensaje = { 
    role, 
    content, 
    timestamp: Date.now(),
    topics: detectarTemas(content)
  };
  
  conversationHistory.push(mensaje);
  
  // Actualizar temas discutidos
  if (mensaje.topics.length > 0) {
    mensaje.topics.forEach(topic => {
      const existing = topicsDiscussed.find(t => t.name === topic);
      if (existing) {
        existing.count++;
        existing.lastMention = Date.now();
      } else {
        topicsDiscussed.push({ name: topic, count: 1, lastMention: Date.now() });
      }
    });
  }
  
  // Limitar historial
  if (conversationHistory.length > MAX_HISTORY) {
    conversationHistory = conversationHistory.slice(-MAX_HISTORY);
  }
  
  save();
};

// ========== DETECTAR TEMAS EN MENSAJE ==========
const detectarTemas = (texto) => {
  const temas = [];
  const textoNorm = texto.toLowerCase();
  
  for (const [tema, patron] of Object.entries(temasOculares)) {
    if (patron.test(textoNorm)) {
      temas.push(tema);
    }
  }
  
  return temas;
};

// ========== OBTENER HISTORIAL ==========
export const get = () => conversationHistory;

// ========== LIMPIAR HISTORIAL ==========
export const clear = () => {
  conversationHistory = [];
  topicsDiscussed = [];
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TOPICS_KEY);
};

// ========== GUARDAR EN LOCALSTORAGE ==========
const save = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversationHistory));
    localStorage.setItem(TOPICS_KEY, JSON.stringify(topicsDiscussed));
  } catch (err) {
    console.warn('⚠️ Error guardando historial:', err);
  }
};

// ========== CARGAR DESDE LOCALSTORAGE ==========
export const loadHistory = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const savedTopics = localStorage.getItem(TOPICS_KEY);
    
    if (saved) {
      conversationHistory = JSON.parse(saved);
      console.log(`📚 Historial cargado: ${conversationHistory.length} mensajes`);
    }
    
    if (savedTopics) {
      topicsDiscussed = JSON.parse(savedTopics);
      console.log(`🏷️ Temas detectados: ${topicsDiscussed.length}`);
    }
  } catch (err) {
    console.warn('⚠️ Error cargando historial:', err);
    conversationHistory = [];
    topicsDiscussed = [];
  }
};

// ========== OBTENER CONTEXTO RECIENTE ==========
export const getContext = (limit = 6) => {
  return conversationHistory.slice(-limit);
};

// ========== OBTENER TEMA ACTUAL ==========
export const getTemaActual = () => {
  // Analiza los últimos 3 mensajes para determinar el tema de conversación
  const recientes = conversationHistory.slice(-3);
  const temasRecientes = {};
  
  recientes.forEach(msg => {
    if (msg.topics) {
      msg.topics.forEach(topic => {
        temasRecientes[topic] = (temasRecientes[topic] || 0) + 1;
      });
    }
  });
  
  // Retorna el tema más mencionado recientemente
  const temaActual = Object.entries(temasRecientes)
    .sort((a, b) => b[1] - a[1])[0];
  
  return temaActual ? temaActual[0] : null;
};

// ========== OBTENER TEMAS FRECUENTES ==========
export const getTemasFrecuentes = () => {
  return topicsDiscussed
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(t => t.name);
};

// ========== DETECTAR SI ES SEGUIMIENTO ==========
export const esSeguimiento = (mensaje) => {
  // Detecta si el mensaje es continuación de tema anterior
  const palabrasSeguimiento = /^(y |pero |adem[aá]s|tambi[eé]n|ah |ok |s[ií]|entiendo|gracias)/i;
  return palabrasSeguimiento.test(mensaje.trim());
};

// ========== OBTENER ÚLTIMO MENSAJE DEL USUARIO ==========
export const getUltimoMensajeUsuario = () => {
  const mensajesUsuario = conversationHistory.filter(m => m.role === 'user');
  return mensajesUsuario.length > 0 ? mensajesUsuario[mensajesUsuario.length - 1] : null;
};

// ========== ANÁLISIS DE SENTIMIENTO SIMPLE ==========
export const analizarSentimiento = (texto) => {
  const textoNorm = texto.toLowerCase();
  
  // Palabras positivas
  const positivas = /gracias|excelente|genial|bien|bueno|perfecto|ayud[oó]|mejor|feliz|contento/i;
  // Palabras negativas
  const negativas = /mal|dolor|molest|problem|preocup|triste|dificil|no (puedo|veo|entiendo)/i;
  // Palabras de urgencia
  const urgentes = /urgente|r[aá]pido|ayuda|emergencia|grave|serio|inmediato/i;
  
  if (urgentes.test(textoNorm)) return 'urgente';
  if (positivas.test(textoNorm)) return 'positivo';
  if (negativas.test(textoNorm)) return 'negativo';
  return 'neutral';
};

// ========== ESTADÍSTICAS DE CONVERSACIÓN ==========
export const getEstadisticas = () => {
  return {
    totalMensajes: conversationHistory.length,
    mensajesUsuario: conversationHistory.filter(m => m.role === 'user').length,
    mensajesAsistente: conversationHistory.filter(m => m.role === 'assistant').length,
    temasDiscutidos: topicsDiscussed.length,
    temaActual: getTemaActual(),
    temasFrecuentes: getTemasFrecuentes()
  };
};