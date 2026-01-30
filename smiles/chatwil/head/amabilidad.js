import * as memoria from '../memoria.js';

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const saludos = {
  buenos_dias: [
    '¡Buenos días, amig@! 🌅💚 Que Dios bendiga tu día y cuide tus ojitos. ¿Cómo amaneciste hoy? 😊',
    '¡Buen día! ☀️💙 Espero que hayas descansado bien. ¿Cómo están tus ojos esta mañana? 👁️✨',
    '¡Hola amig@! 🌄💚 Que tengas un día lleno de bendiciones. ¿En qué puedo ayudarte hoy? 😊💙'
  ],
  buenas_tardes: [
    '¡Buenas tardes, amig@! 🌤️💚 ¿Cómo van tus ojitos en este día? Estoy aquí para ti 😊👁️',
    '¡Hola! 🌞💙 Que tengas una tarde bendecida. ¿Cómo te sientes? 💚✨',
    '¡Buenas tardes! ☀️💚 Espero que estés teniendo un día maravilloso. ¿Necesitas ayuda? 😊💙'
  ],
  buenas_noches: [
    '¡Buenas noches, amig@! 🌙💚 Espero que tus ojos hayan descansado hoy. ¿Cómo te siento? 😊✨',
    '¡Buenas noches! ✨💙 Que Dios te bendiga y cuide tu descanso. ¿En qué puedo ayudarte? 🌟💚',
    '¡Hola amig@! 🌛💚 Que tengas una noche tranquila. ¿Cómo están tus ojitos? 😊👁️'
  ]
};

export const como_estas = [
  '¡Hola amig@! 💚😊 Estoy muy bien, gracias por preguntar. Me alegra mucho verte por aquí. ¿Y tú cómo estás? ¿Cómo están tus ojitos? 👁️💙✨',
  '¡Qué alegría saludarte, amig@! 💙😊 Estoy excelente, listo para ayudarte con todo mi corazón. ¿Cómo te sientes hoy? ¿Hay algo que te preocupe sobre tu salud ocular? 💚👁️',
  '¡Hola! 💚✨ Me alegra muchísimo que estés aquí. Estoy muy bien, con muchas ganas de ayudarte. ¿Cómo están tus ojos hoy, amig@? ¿Sientes alguna molestia? 😊💙',
  '¡Hola querido amig@! 💙😊 Estoy de maravilla, gracias por tu amabilidad al preguntar. ¿Y tú? ¿Cómo te va? ¿Tus ojitos están bien o sientes algo? 💚👁️✨'
];

export const gratitud = [
  '¡De nada, amig@! 💚😊 Me alegra muchísimo haberte ayudado. Recuerda: la constancia es la clave del éxito. Si tienes más dudas sobre tu salud ocular, aquí estaré siempre para ti con todo mi corazón. Cuida esos ojitos, son tu ventana al mundo. ¡Mucho éxito en tu recuperación! 💪💙✨',
  '¡Con mucho gusto, amig@! 💙😊 Para eso estoy aquí, para cuidar tu visión con amor y dedicación. Recuerda ser constante con el tratamiento y verás resultados increíbles. Si necesitas algo más sobre salud ocular, no dudes en preguntarme. ¡Que tus ojitos se recuperen pronto! 💪💚🌟',
  '¡Un placer ayudarte, amig@! 💚😊 Me encanta que te comprometas con tu salud ocular. Recuerda: pequeños pasos diarios = grandes resultados. Si tienes más preguntas sobre tus ojos, aquí estaré con los brazos abiertos. ¡Cuídate mucho y que tengas una excelente recuperación! 💪💙✨',
  '¡Es un honor ayudarte, amig@! 💙😊 Tu salud ocular es muy importante para mí. Recuerda que Dios y yo estamos contigo en este proceso. Si necesitas más apoyo, aquí estoy siempre. ¡Que Dios bendiga tu recuperación! 💚🙏✨'
];

export const despedidas = [
  '¡Cuídate mucho, amig@! 💚😊 Que Dios bendiga tus ojitos y te llene de salud. Recuerda aplicar todo lo que hablamos. ¡Hasta pronto! 💙✨🙏',
  '¡Hasta luego, amig@! 💙😊 Que tengas un día maravilloso. Recuerda cuidar tu visión con amor. ¡Nos vemos pronto! 💚🌟',
  '¡Adiós, querido amig@! 💚😊 Que Dios te acompañe siempre. Cuida esos ojitos con dedicación. ¡Hasta la próxima! 💙✨🙏',
  '¡Nos vemos, amig@! 💙😊 Que la bendición de Dios esté contigo. Recuerda: tus ojos son un regalo precioso. ¡Cuídalos! 💚👁️✨'
];

export const empatia = {
  dolor: [
    'Entiendo que es difícil, amig@ 💙😔 El dolor puede ser muy incómodo. Pero confía en mí: hay solución y vamos a mejorar esto juntos. Dios está contigo en este proceso. 💚🙏✨',
    'Sé que duele, amig@ 💚😔 Y lamento mucho que estés pasando por esto. Pero quiero que sepas que NO estás solo. Vamos a encontrar alivio juntos. Dios te fortalece. 💙🙏💪'
  ],
  preocupacion: [
    'Sé que te preocupa, pero hay esperanza 💚😊 Como especialista te digo: la mayoría de condiciones oculares tienen tratamiento efectivo. Confía en el proceso y en Dios. 💙🙏✨',
    'Entiendo tu preocupación, amig@ 💙😔 Es normal sentirse así. Pero déjame decirte: con el tratamiento adecuado y la fe en Dios, verás mejoría. No estás solo en esto. 💚🙏💪'
  ],
  mejoria: [
    '¡Qué alegría que estés mejor, amig@! 💚😊 Me llena el corazón saber que el tratamiento está funcionando. Sigue así, Dios está bendiciendo tu recuperación. ¡Eres increíble! 💙✨🙏',
    '¡Excelente noticia, amig@! 💙😊 Me emociona mucho tu mejoría. Sigue siendo constante, Dios te está sanando. ¡Estoy muy orgulloso de ti! 💚💪✨'
  ],
  animo: [
    '¡Ánimo, amig@! 💚😊 Sé que a veces es difícil, pero estás haciendo un trabajo increíble. Dios te da fuerzas. ¡Sigue adelante! 💙💪🙏',
    '¡No te rindas, amig@! 💙😊 Cada día que cuidas tus ojos es una victoria. Dios está contigo. ¡Tú puedes! 💚✨🙏'
  ]
};

export const detectarSaludo = (mensaje) => {
  const msg = mensaje.toLowerCase();
  const hora = new Date().getHours();
  
  if (/^(hola|hey|hi|buenas|saludos|qu[eé] tal)/i.test(msg)) {
    if (hora >= 5 && hora < 12) return random(saludos.buenos_dias);
    if (hora >= 12 && hora < 19) return random(saludos.buenas_tardes);
    return random(saludos.buenas_noches);
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

const empatiaEmocional = {
  tristeza: [
    'Oh amig@, lamento mucho que te sientas triste 😔💙 Entiendo que a veces la vida puede ser difícil. Pero quiero que sepas algo importante: NO estás solo en esto. Estoy aquí para ti con todo mi corazón. 💚🙏 ¿Quieres contarme qué te tiene triste? ¿Tiene que ver con tus ojitos o es algo más? Puedes confiar en mí, amig@. Dios te ama y yo también estoy aquí para apoyarte. 😊✨',
    'Amig@, mi corazón se entristece al saber que te sientes así 😔💚 La tristeza es una emoción válida y está bien sentirla. Pero recuerda: "Jehová está cerca de los quebrantados de corazón" (Salmo 34:18). 💙🙏 Estoy aquí para escucharte y ayudarte en lo que necesites. ¿Hay algo específico que te preocupa sobre tu salud ocular o es otra cosa? Cuéntame, amig@, confía en mí. 😊✨'
  ],
  preocupado: [
    'Entiendo tu preocupación, amig@ 😔💙 Es completamente normal sentirse así cuando algo nos inquieta. Pero déjame decirte algo: la mayoría de las cosas que nos preocupan tienen solución. 💚✨ Estoy aquí para ayudarte a encontrarla. ¿Qué es lo que te preocupa específicamente? ¿Tus ojitos? ¿Algún síntoma? Cuéntame con confianza, vamos a resolverlo juntos. 💪🙏'
  ]
};

const detectarEmocion = (mensaje) => {
  const msg = mensaje.toLowerCase();
  
  if (/triste|tristeza|deprimido|un poco triste/i.test(msg)) {
    return { tipo: 'tristeza', respuesta: random(empatiaEmocional.tristeza) };
  }
  if (/preocupado|preocupaci[oó]n|inquieto|nervioso/i.test(msg)) {
    return { tipo: 'preocupado', respuesta: random(empatiaEmocional.preocupado) };
  }
  
  return null;
};

export const generate = (mensaje) => {
  let emocion = detectarEmocion(mensaje);
  if (emocion) return emocion.respuesta;
  
  let respuesta = detectarSaludo(mensaje);
  if (respuesta) return respuesta;
  
  respuesta = detectarDespedida(mensaje);
  if (respuesta) return respuesta;
  
  respuesta = detectarGratitud(mensaje);
  if (respuesta) return respuesta;
  
  return null;
};
