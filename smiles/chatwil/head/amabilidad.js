
import * as memoria from '../memoria.js';

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Saludos con lógica de tiempo y empatía (max 80 palabras)
const saludos = {
  manana: [
    '¡Buenos días, amigo! ☀️ Que la luz de este día ilumine tu mirada. Estoy aquí para cuidar tus ojos. ¿En qué tema de salud visual te puedo ayudar hoy?',
    '¡Buen día! 🌅 Espero hayas amanecido muy bien. Tus ojos son tu ventana al mundo. Dime, ¿qué necesitas saber sobre el cuidado de tu visión?',
    '¡Muy buenos días! ☀️ Dios bendiga tu día. Estoy listo para ayudarte a tener una visión más saludable. ¿Tienes alguna molestia o duda específica?',
    '¡Hola, buen día! 🌄 Qué alegría saludarte. Recuerda parpadear seguido hoy. ¿Cómo puedo servirte con tu salud visual en este momento?',
    '¡Feliz día! ☀️ Empecemos con energía positiva. Cuéntame, ¿cómo sienten tus ojitos esta mañana? Estoy aquí para apoyarte en lo que necesites.',
    '¡Buenos días! 🌅 Un nuevo día para ver las maravillas de la creación. ¿Hay algo específico sobre tus ojos que te preocupe hoy?',
    '¡Lindo día! ☀️ Espero que tus ojos estén descansados. Si sientes fatiga o sequedad, dime y buscamos una solución juntos ahora mismo.',
    '¡Buen día! 🌄 Gracias por confiar en mí. Tu visión es mi prioridad. ¿Quieres consejos de alimentación o ejercicios visuales para hoy?',
    '¡Hola buenos días! ☀️ Que hoy veas todo con claridad y alegría. Estoy a tu disposición. ¿Sobre qué tema de los ojos quieres conversar?',
    '¡Bendecido día! 🌅 Recuerda que cuidar tus ojos es cuidar tu vida. ¿En qué tema de salud ocular puedo orientarte hoy, amigo?'
  ],
  tarde: [
    '¡Buenas tardes! ☀️ Espero que tu día vaya genial. Si tus ojos están cansados, es buen momento para una pausa. ¿Cómo te ayudo con tu visión?',
    '¡Hola, buenas tardes! 🌤️ Recuerda la regla 20-20-20 para descansar tu vista. ¿Tienes alguna pregunta sobre tu salud visual en este momento?',
    '¡Linda tarde! 🌞 Estoy aquí para acompañarte. Si has estado mucho tiempo frente a pantallas, tus ojos te agradecerán un descanso. ¿Qué necesitas?',
    '¡Buenas tardes amigo! 🌤️ Que la paz te acompañe. Cuéntame, ¿notas alguna molestia visual a esta hora del día? Estoy para ayudarte.',
    '¡Hola! ☀️ Espero que estés teniendo una tarde productiva. No olvides hidratar tus ojos. ¿En qué puedo asesorarte hoy sobre tu vista?',
    '¡Feliz tarde! 🌤️ Tus ojos trabajan mucho por ti, dales amor. Estoy listo para responder tus dudas sobre visión y cuidado ocular.',
    '¡Buenas tardes! 🌞 Un placer saludarte. ¿Cómo va esa visión hoy? Estoy aquí para darte los mejores consejos para tus ojos.',
    '¡Hola amigo, buenas tardes! 🌤️ Si sientes pesadez ocular, aquí estoy para darte soluciones rápidas. ¿Qué te gustaría saber ahora?',
    '¡Muy buenas tardes! ☀️ Espero que todo marche bien. Recuerda que la prevención es clave. ¿De qué tema visual te gustaría hablar?',
    '¡Buenas tardes! 🌤️ Qué alegría coincidir. Estoy disponible para resolver cualquier inquietud sobre el cuidado de tus ojos. Dime los temas.'
  ],
  noche: [
    '¡Buenas noches! 🌙 Tus ojos merecen un buen descanso. Trata de no usar pantallas antes de dormir. ¿Cómo te ayudo antes de tu descanso?',
    '¡Hola, buenas noches! 🌚 Espero que hayas tenido un gran día. Es hora de relajar tu vista. ¿Tienes alguna duda sobre tus ojos esta noche?',
    '¡Linda noche! ✨ Que Dios vele tu sueño. Si tus ojos arden, una compresa tibia puede ayudar. ¿En qué más puedo servirte hoy?',
    '¡Buenas noches amigo! 🌙 Gracias por consultarme. Descansar bien es vital para tu visión. ¿Qué inquietud tienes sobre tus ojos?',
    '¡Feliz noche! 🌚 Desconecta para reconectar mañana. Tus ojos necesitan oscuridad para regenerarse. ¿Cómo puedo ayudarte ahora con tu salud visual?',
    '¡Buenas noches! ✨ Un placer saludarte al final del día. ¿Sentiste fatiga visual hoy? Cuéntame para darte un consejo relajante.',
    '¡Hola! 🌙 Que tengas un descanso reparador. Recuerda retirar lentes de contacto si usas. ¿Hay algo que te preocupe de tu visión?',
    '¡Muy buenas noches! 🌚 La paz sea contigo. Estoy aquí si necesitas un último consejo de salud visual por hoy. ¿Dime en qué te ayudo?',
    '¡Buenas noches! ✨ Tus ojos han trabajado duro, dales gratitud. ¿Necesitas una oración o consejo antes de dormir para tus ojos?',
    '¡Descansa amigo! 🌙 Buenas noches. Mañana será un gran día para ver mejor. ¿Puedo ayudarte con alguna duda breve sobre tu vista?'
  ]
};

// Respuestas para "Cómo estás"
const como_estas = [
  '¡Estoy muy bien, gracias! 💚 Feliz de poder ayudarte a cuidar el regalo de tu vista. ¿Tú cómo te sientes hoy? ¿Tus ojos están bien?',
  '¡Excelente y con muchas ganas de ayudar! 👁️ Ver que te preocupas por tu salud me motiva. ¿Cómo estás tú y tu visión hoy?',
  '¡Muy contento de saludarte! ✨ Mi misión es que veas el mundo con alegría. ¿Cómo te encuentras? ¿Hay alguna molestia visual?',
  '¡Bendecido y feliz! 🙏 Gracias por preguntar. Estoy listo para darte mis mejores consejos. ¿Cómo están tus ánimos y tus ojos hoy?',
  '¡Me siento genial, amigo! 💚 Gracias a Dios. Espero que tú también estés bien. ¿Cómo sientes tu vista el día de hoy? Cuéntame.',
  '¡Todo marcha de maravilla! 🌟 Con energía para cuidar esos ojitos. ¿Y tú qué tal? ¿Cómo te ha tratado el día visualmente?',
  '¡Muy bien, amigo! 👁️ Agradecido por la oportunidad de servirte. ¿Cómo te sientes? ¿Has descansado tu vista hoy? Estoy aquí para ti.',
  '¡Excelente! 💪 Listo para compartir tips de salud contigo. ¿Tú cómo estás? ¿Sientes tus ojos descansados o fatigados estos días?',
  '¡Feliz y agradecido! 🙌 Qué bueno que estés aquí. ¿Cómo va tu día? Cuéntame si has notado algo en tu visión que quieras tratar.',
  '¡Estoy de lo mejor! 💚 Esperando ser de bendición para ti. ¿Cómo te encuentras? ¿Listo para aprender a cuidar tus ojos mejor?'
];

// Despedidas amables
const despedidas = [
  '¡Cuídate mucho! 💚 Que Dios proteja tu vista siempre. Recuerda descansar y parpadear. ¡Hasta pronto, amigo!',
  '¡Hasta luego amigo! 👋 Fue un placer ayudarte. No olvides tus pausas visuales. ¡Bendiciones para ti y tus ojos!',
  '¡Adiós! ✨ Espero haberte sido útil. Tus ojos son valiosos, cuídalos con amor. ¡Nos vemos pronto!',
  '¡Nos vemos pronto! 👁️ Aquí estaré si necesitas más consejos. Que tengas un día maravilloso y visualmente descansado.',
  '¡Hasta la próxima! 🙏 Gracias por confiar en mí. Sigue cuidando esos ojitos. ¡Un abrazo fuerte!',
  '¡Chao amigo! 💚 Recuerda comer sano para tu vista. Que Dios te guíe. ¡Hasta luego y cuídate!',
  '¡Bye bye! 👋 Descansa tu vista siempre que puedas. Estoy a un mensaje de distancia si me necesitas de nuevo.',
  '¡Hasta pronto! ✨ Fue lindo charlar. No dudes en volver si tienes dudas. ¡Cuídate mucho y a tus ojos!',
  '¡Nos vemos! 👁️ Que la luz de Dios ilumine tu camino. ¡Sigue los consejos y verás la diferencia en tu visión!',
  '¡Adiós amigo! 🙌 Tu salud visual es importante. Sé constante con los cuidados. ¡Bendiciones y buena vista!'
];

// Gratitud
const gratitud = [
  '¡De nada! 💚 Es un placer ayudarte. Tu salud visual es lo más importante. ¡Sigue cuidándote mucho!',
  '¡Con gusto! 😊 Para eso estoy aquí. Cualquier otra duda sobre tus ojos, solo dime que aquí estaré.',
  '¡A ti amigo! 🙏 Me alegra ser útil. Recuerda que la constancia trae resultados. ¡Bendiciones en tu recuperación!',
  '¡No hay de qué! ✨ Estoy feliz de apoyarte. Cuida mucho esa mirada tan especial que tienes.',
  '¡Por nada! 👁️ Gracias a ti por confiar. Aquí estaré siempre para tus consultas visuales. ¡Adelante!'
];

// Empatía (generales)
export const empatia = {
  dolor: [
    'Siento que te duela 😔 Pero ánimo, esto pasará. Descansa tus ojos y confía en que mejorarán. ¡Estoy contigo!',
    'Lamento tu dolor 💙 Descansa un poco y verás que alivia. Dios te da fortaleza. ¡Vamos a salir de esta!'
  ],
  preocupacion: [
    'Tranquilo amigo 💚 Todo tiene solución. Confía en el proceso y en Dios. Estamos juntos en esto.',
    'No te preocupes de más 💙 Ocúpate en cuidarte y verás resultados. ¡Ánimo, todo estará bien!'
  ],
  mejoria: [
    '¡Qué gran noticia! 🎉 Me alegra mucho tu mejoría. Sigue así, vas por excelente camino. ¡Felicidades!',
    '¡Excelente! 🌟 Ver que mejoras es mi mayor alegría. Dios sigue obrando en ti. ¡Sigue cuidándote!'
  ],
  animo: [
    '¡Tú puedes! 💪 Eres fuerte y valiente. Cuida tus ojos y verás la recompensa. ¡Adelante con fe!',
    '¡Ánimo amigo! ✨ Cada pequeño cuidado cuenta. Dios está contigo en cada paso. ¡No te rindas!'
  ]
};

export const detectarSaludo = (mensaje) => {
  const msg = mensaje.toLowerCase();
  const hora = new Date().getHours();
  
  if (/^(hola|hey|hi|buenas|saludos|qu[eé] tal)/i.test(msg)) {
    if (hora >= 5 && hora < 12) return random(saludos.manana);
    if (hora >= 12 && hora < 19) return random(saludos.tarde);
    return random(saludos.noche);
  }
  
  if (/c[oó]mo est[aá]s|qu[eé] tal est[aá]s|todo bien/i.test(msg)) {
    return random(como_estas);
  }
  
  return null;
};

export const detectarDespedida = (mensaje) => {
  if (/^(adi[oó]s|chao|hasta luego|nos vemos|bye|hasta pronto)/i.test(mensaje.toLowerCase())) {
    return random(despedidas);
  }
  return null;
};

export const detectarGratitud = (mensaje) => {
  if (/^(muchas )?gracias|te agradezco|mil gracias|grax/i.test(mensaje.trim().toLowerCase())) {
    return random(gratitud);
  }
  return null;
};

export const getEmpatia = (tipo) => {
  if (empatia[tipo]) return random(empatia[tipo]);
  return null;
};

export const generate = (mensaje) => {
  let respuesta = detectarSaludo(mensaje);
  if (respuesta) return respuesta;
  
  respuesta = detectarDespedida(mensaje);
  if (respuesta) return respuesta;
  
  respuesta = detectarGratitud(mensaje);
  if (respuesta) return respuesta;
  
  return null;
};
