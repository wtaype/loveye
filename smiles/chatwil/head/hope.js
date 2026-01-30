import * as memoria from '../memoria.js';

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const versiculos = {
  sanacion: [
    { texto: 'Yo soy Jehová tu sanador', ref: 'Éxodo 15:26', emoji: '💚🙏' },
    { texto: 'Por sus llagas fuimos sanados', ref: 'Isaías 53:5', emoji: '💙✨' },
    { texto: 'Sanaré tu herida', ref: 'Jeremías 30:17', emoji: '💚🌟' }
  ],
  confianza: [
    { texto: 'Jehová es mi pastor; nada me faltará', ref: 'Salmo 23:1', emoji: '💙🙏' },
    { texto: 'Confía en Jehová de todo tu corazón', ref: 'Proverbios 3:5-6', emoji: '💚✨' }
  ],
  fortaleza: [
    { texto: 'Todo lo puedo en Cristo que me fortalece', ref: 'Filipenses 4:13', emoji: '💪💙' },
    { texto: 'Mi poder se perfecciona en la debilidad', ref: '2 Corintios 12:9', emoji: '💚🌟' }
  ],
  paz: [
    { texto: 'No temas, porque yo estoy contigo', ref: 'Isaías 41:10', emoji: '💙🙏' },
    { texto: 'La paz de Dios guardará vuestros corazones', ref: 'Filipenses 4:7', emoji: '💚✨' }
  ],
  victoria: [
    { texto: 'Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo', ref: '1 Corintios 15:57', emoji: '💙🎉' },
    { texto: 'En todas estas cosas somos más que vencedores', ref: 'Romanos 8:37', emoji: '💚💪' }
  ]
};

export const oraciones = {
  sanacion: [
    '🙏💚 Amado Padre Celestial, vengo ante Ti con mi amig@ que necesita Tu toque sanador. Tú dijiste "Yo soy Jehová tu sanador" (Éxodo 15:26), y creemos en Tu poder infinito. Te pedimos que sanes sus ojos, que restaures su visión, que quites toda molestia y dolor. 😔💙 Guía a los médicos, bendice cada tratamiento, y llena su corazón de paz y esperanza. "Todo lo puedo en Cristo que me fortalece" (Filipenses 4:13). 💪✨ En el nombre poderoso de Jesús, Amén. 💚🙏',
    
    '🙏💙 Señor Jesús, Tú que sanaste a los ciegos y diste vista a los que no veían, te pido por mi amig@. Toca sus ojos con Tu poder sanador. 💚✨ "No temas, porque yo estoy contigo" (Isaías 41:10). Que sienta Tu presencia amorosa en este proceso. Bendice cada medicamento, cada cuidado, cada lágrima. 😊💙 Llena su corazón de fe y esperanza. Gracias porque "nos das la victoria por medio de nuestro Señor Jesucristo" (1 Corintios 15:57). 💪🎉 En Tu nombre santo, Amén. 💚🙏'
  ],
  
  agradecimiento: [
    '🙏💚 Padre amado, gracias por este día. Gracias por la vida, por la salud, por los ojos que nos permiten ver Tu creación hermosa. 😊💙 Gracias por cuidar de nosotros, por sanar nuestras enfermedades, por estar siempre a nuestro lado. "Jehová es mi pastor; nada me faltará" (Salmo 23:1). 💚✨ Te alabamos y te bendecimos. En el nombre de Jesús, Amén. 🙏💙',
    
    '🙏💙 Señor, mi corazón está lleno de gratitud. Gracias por Tu amor incondicional, por Tu misericordia, por Tu poder sanador. 💚😊 Gracias por cada mejoría, por cada bendición, por cada nuevo día. "Mas gracias sean dadas a Dios, que nos da la victoria" (1 Corintios 15:57). 💪🎉 Te amo, Señor. Amén. 💚🙏'
  ],
  
  fortaleza: [
    '🙏💚 Dios todopoderoso, en este momento necesito Tu fortaleza. Dame fuerzas para seguir adelante, para ser constante con el tratamiento, para no rendirme. 💪💙 "Todo lo puedo en Cristo que me fortalece" (Filipenses 4:13). Llena mi corazón de esperanza y mi mente de paz. 😊✨ Confío en Ti, Señor. En el nombre de Jesús, Amén. 💚🙏',
    
    '🙏💙 Padre celestial, cuando me siento débil, Tú eres mi fuerza. Cuando tengo miedo, Tú eres mi refugio. 💚😔 "No temas, porque yo estoy contigo" (Isaías 41:10). Dame valentía para enfrentar este proceso, dame paciencia para esperar Tu tiempo perfecto. 💪✨ Gracias por Tu amor que nunca falla. Amén. 💚🙏'
  ]
};

export const mensajes_esperanza = [
  '💚😊 Dios tiene un plan perfecto para tu sanación, amig@. Confía en Él. "Yo soy Jehová tu sanador" (Éxodo 15:26). Cada día es una oportunidad para ver Su gloria en tu vida. 💙✨🙏',
  
  '💙😊 Tu fe mueve montañas, amig@. Dios está contigo en este proceso de sanación. "Todo lo puedo en Cristo que me fortalece" (Filipenses 4:13). No estás solo, Él te sostiene. 💚💪🙏',
  
  '💚😊 Mientras cuidas tus ojos con el tratamiento, recuerda que Dios también cuida de ti con amor infinito. "Jehová es mi pastor; nada me faltará" (Salmo 23:1). Confía en Su plan. 💙✨🙏',
  
  '💙😊 El tratamiento médico + la fe en Dios = sanación completa, amig@. Dios guía las manos de los médicos y bendice cada medicamento. Confía en el proceso. 💚🙏💪',
  
  '💚😊 "No temas, porque yo estoy contigo" (Isaías 41:10). Dios está en cada paso de tu recuperación, amig@. Él te fortalece, te sana, te ama. 💙✨🙏'
];

export const confiar_en_dios = [
  '¡Qué hermosa pregunta, amig@! 💙😊 Confiar en Dios durante la enfermedad es un acto de fe profundo. Recuerda: "Yo soy Jehová tu sanador" (Éxodo 15:26). 💚🙏 Dios no solo conoce tu dolor, sino que está trabajando en tu sanación con amor infinito. Aquí hay algunos pasos: 1) ORA diariamente, comparte tus miedos con Él 🙏 2) LEE Su Palabra, especialmente Salmo 23 y Isaías 41:10 📖💙 3) CONFÍA en el proceso, Dios tiene un plan perfecto ✨ 4) AGRADECE, incluso en la prueba, porque Él está contigo 💚😊 ¿Te gustaría que oremos juntos por tu sanación? 🙏💙',
  
  'Amig@, entiendo que es difícil confiar cuando estamos enfermos 💙😔 Pero déjame recordarte algo poderoso: "Todo lo puedo en Cristo que me fortalece" (Filipenses 4:13). 💪💚 Tu enfermedad NO define tu destino. Dios está contigo en cada momento, sosteniéndote con Su amor. 🙏😊 Pasos prácticos: 1) Habla con Dios como con un amigo, dile tus miedos 💙 2) Rodéate de personas de fe que oren contigo 🙏 3) Busca tratamiento médico (Dios obra a través de médicos también) 💚 4) Descansa en Su promesa: "Jehová es mi pastor; nada me faltará" (Salmo 23:1) ✨ ¿Quieres que oremos juntos ahora? 🙏💙😊'
];

export const ofrecer_oracion = [
  '💙😊 Amig@, ¿te gustaría que oremos juntos por tu sanación? Dios escucha nuestras oraciones con amor. 🙏💚✨',
  '💚😊 ¿Quieres que elevemos una oración a Dios por tus ojitos? Él es nuestro sanador. 🙏💙✨',
  '💙😊 Amig@, la oración tiene poder. ¿Te gustaría que oremos juntos en este momento? Dios te ama. 🙏💚✨'
];

export const detectarPeticionOracion = (mensaje) => {
  const msg = mensaje.toLowerCase();
  if (/ora(r|ci[oó]n)|reza(r)?|pide a dios|ruega/i.test(msg)) {
    return random(oraciones.sanacion);
  }
  return null;
};

export const detectarConfiarDios = (mensaje) => {
  const msg = mensaje.toLowerCase();
  if (/c[oó]mo confiar|confiar en dios|fe en dios|creer en dios|dios (me |te )?ayud/i.test(msg)) {
    return random(confiar_en_dios);
  }
  return null;
};

export const getMensajeEsperanza = () => random(mensajes_esperanza);

export const getOracion = (tipo = 'sanacion') => {
  if (oraciones[tipo]) return random(oraciones[tipo]);
  return random(oraciones.sanacion);
};

export const getVersiculo = (contexto = 'sanacion') => {
  if (versiculos[contexto]) {
    const v = random(versiculos[contexto]);
    return `📖 "${v.texto}" - ${v.ref} ${v.emoji}`;
  }
  return null;
};

export const generate = (mensaje) => {
  let respuesta = detectarPeticionOracion(mensaje);
  if (respuesta) return respuesta;
  
  respuesta = detectarConfiarDios(mensaje);
  if (respuesta) return respuesta;
  
  return null;
};
