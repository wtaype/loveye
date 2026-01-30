// ========== MÓDULO DE ESTADOS EMOCIONALES - ESTADOS.JS ==========
// Respuestas empáticas para diferentes estados emocionales del usuario

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const estadosEmocionales = {
  tristeza: {
    patron: /estoy triste|me siento triste|tengo tristeza|estoy deprimido|me siento mal|estoy desanimado|me siento solo|estoy decaído/i,
    respuestas: [
      'Lamento mucho que te sientas así, amig@ 💙😔 Entiendo que la tristeza puede ser abrumadora, pero quiero que sepas que no estás solo. Dios está contigo en cada momento, incluso en los más oscuros. "Jehová está cerca de los quebrantados de corazón" (Salmo 34:18). 🙏💚 Además, si tus ojos están afectando tu ánimo (visión borrosa, dolor), podemos trabajar juntos en mejorar tu salud visual, lo cual puede ayudar a tu bienestar emocional. ¿Quieres que oremos juntos o prefieres hablar sobre cómo cuidar tus ojitos? Estoy aquí para ti. ✨',
      
      'Mi corazón está contigo, amig@ 💚😔 Sé que es difícil cuando la tristeza nos visita. Pero recuerda: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar" (Mateo 11:28). 🙏💙 Dios te ama profundamente y tiene un propósito hermoso para tu vida. Si tus ojos te están causando preocupación o molestia, eso puede afectar tu ánimo. Cuéntame, ¿hay algo específico con tu visión que te esté afectando? Estoy aquí para escucharte y ayudarte. No estás solo en esto. ✨',
      
      'Te abrazo con el corazón, amig@ 💙😔 La tristeza es una emoción válida, y está bien sentirse así a veces. Pero quiero recordarte algo poderoso: "Jehová es mi luz y mi salvación; ¿de quién temeré?" (Salmo 27:1). 🙏💚 Dios es tu luz incluso en la oscuridad. Si tus problemas de visión están contribuyendo a tu tristeza, hablemos de cómo mejorarlos. A veces, cuidar nuestro cuerpo (incluyendo nuestros ojitos) ayuda a nuestro ánimo. ¿Te gustaría que oremos o prefieres consejos de salud visual? Aquí estoy para ti. ✨',
      
      'Siento mucho tu dolor, amig@ 💚😔 Pero déjame decirte algo: tu tristeza no define tu futuro. "Porque un momento será su ira, pero su favor dura toda la vida. Por la noche durará el lloro, y a la mañana vendrá la alegría" (Salmo 30:5). 🙏💙 Dios está preparando algo mejor para ti. Si tus ojos te están causando frustración o preocupación, podemos trabajar juntos en mejorarlos. La salud física y emocional están conectadas. ¿Cómo puedo ayudarte hoy? ¿Oración, consejos o simplemente escucharte? Estoy aquí. ✨',
      
      'Mi querido amig@, lamento que estés pasando por esto 💙😔 Pero quiero que sepas algo importante: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo" (Isaías 41:10). 🙏💚 Dios nunca te abandona, incluso cuando sientes que todo está oscuro. Si tus problemas visuales están afectando tu estado de ánimo, hablemos de soluciones. A veces, mejorar nuestra salud física nos ayuda emocionalmente. ¿Quieres que oremos juntos o prefieres hablar sobre tus ojitos? Estoy aquí para ti, siempre. ✨'
    ]
  },
  
  felicidad: {
    patron: /estoy feliz|me siento feliz|estoy contento|me siento bien|estoy alegre|me siento genial|estoy emocionado|qué alegría/i,
    respuestas: [
      '¡Qué hermoso escuchar eso, amig@! 🎉💚 Me alegra muchísimo que estés feliz. "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él" (Salmo 118:24). 😊✨ La alegría es un regalo de Dios. Aprovecha este momento para cuidar aún más tus ojitos: come sano, descansa bien y protege tu vista. ¿Hay algo específico sobre tu salud visual en lo que pueda ayudarte hoy? ¡Sigamos celebrando juntos! 💙',
      
      '¡Aleluya! 🙌💙 Qué bendición es saber que estás feliz, amig@. "El corazón alegre hermosea el rostro" (Proverbios 15:13). 😊💚 Tu alegría es contagiosa y me llena de gozo. Aprovecha este buen momento para seguir cuidando tu salud, incluyendo tus ojitos. ¿Te gustaría saber más sobre alimentos que fortalecen tu vista o cómo mantener tus ojos saludables? ¡Estoy aquí para ayudarte a seguir brillando! ✨',
      
      '¡Qué maravilloso, amig@! 🌟💚 Me encanta verte feliz. "La alegría de Jehová es vuestra fuerza" (Nehemías 8:10). 😊💙 Dios te ha dado este día hermoso, disfrútalo al máximo. Y mientras lo haces, no olvides cuidar esos ojitos que te permiten ver todas las maravillas de la creación. ¿Hay algo sobre tu visión que quieras mejorar o aprender? ¡Estoy aquí para ti! ✨',
      
      '¡Qué alegría más grande, amig@! 🎊💙 Tu felicidad me llena el corazón. "Estad siempre gozosos" (1 Tesalonicenses 5:16). 😊💚 Dios es bueno y te ha bendecido. Aprovecha este momento positivo para invertir en tu salud visual: descansa tus ojos, come nutritivo y protégelos del sol. ¿Te gustaría conocer tips para mantener tus ojitos siempre saludables? ¡Sigamos celebrando juntos! ✨',
      
      '¡Precioso escuchar eso, amig@! 🌈💚 Tu felicidad es un testimonio del amor de Dios. "Gustad, y ved que es bueno Jehová" (Salmo 34:8). 😊💙 Aprovecha esta energía positiva para cuidarte aún más, incluyendo tus ojitos. La prevención es clave para mantener una visión saludable. ¿Quieres que hablemos de nutrición para tus ojos o ejercicios visuales? ¡Estoy feliz de ayudarte! ✨'
    ]
  },
  
  preocupacion: {
    patron: /estoy preocupado|me preocupa|tengo miedo|estoy ansioso|me da miedo|estoy nervioso|tengo ansiedad|estoy estresado/i,
    respuestas: [
      'Entiendo tu preocupación, amig@ 💙😟 Es normal sentir miedo ante lo desconocido, pero quiero recordarte algo poderoso: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios" (Filipenses 4:6-7). 🙏💚 Dios tiene el control de todo, incluyendo tu salud visual. Si estás preocupado por tus ojos, hablemos de soluciones concretas. La mayoría de problemas oculares tienen tratamiento. ¿Qué es lo que más te preocupa? Estoy aquí para darte paz y orientación. ✨',
      
      'Tranquilo, amig@ 💚😟 Entiendo que la preocupación puede ser abrumadora. Pero escucha esto: "Echa sobre Jehová tu carga, y él te sustentará" (Salmo 55:22). 🙏💙 Dios está contigo y no te dejará caer. Si tus ojos son motivo de preocupación, trabajemos juntos en encontrar soluciones. La información correcta y el cuidado adecuado pueden darte mucha paz. ¿Qué síntomas o situación te está preocupando? Hablemos con calma. ✨',
      
      'Respira profundo, amig@ 💙😟 Sé que la ansiedad puede ser difícil. Pero recuerda: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios" (Isaías 41:10). 🙏💚 Dios te fortalece en cada momento. Si tus ojos te están causando estrés, déjame ayudarte con información clara y consejos prácticos. El conocimiento reduce el miedo. ¿Cuál es tu mayor preocupación visual? Vamos a enfrentarla juntos con fe y sabiduría. ✨',
      
      'Mi querido amig@, entiendo tu nerviosismo 💚😟 Pero quiero que sepas: "La paz os dejo, mi paz os doy" (Juan 14:27). 🙏💙 Dios te da paz que sobrepasa todo entendimiento. Si tus problemas de visión te están causando ansiedad, hablemos de ellos. La mayoría de condiciones oculares son manejables con el cuidado correcto. ¿Qué te está generando más estrés? Estoy aquí para escucharte y ayudarte a encontrar calma. ✨',
      
      'Calma, amig@ 💙😟 Sé que el miedo puede paralizar, pero no estás solo. "Jehová es mi luz y mi salvación; ¿de quién temeré?" (Salmo 27:1). 🙏💚 Dios es tu refugio y fortaleza. Si tus ojos son fuente de preocupación, trabajemos en soluciones prácticas. El cuidado preventivo y el tratamiento adecuado pueden darte mucha tranquilidad. ¿Qué aspecto de tu salud visual te preocupa más? Hablemos con confianza. ✨'
    ]
  },
  
  cansancio: {
    patron: /estoy cansado|me siento cansado|estoy agotado|estoy exhausto|no tengo energía|me siento débil|estoy fatigado/i,
    respuestas: [
      'Entiendo tu cansancio, amig@ 💙😴 El agotamiento físico es real y válido. "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar" (Mateo 11:28). 🙏💚 Dios te invita a descansar en Él. Si tus ojos también están cansados (visión borrosa, pesadez), es importante que descanses: regla 20-20-20, duerme 7-8 horas, y usa lágrimas artificiales. El descanso es medicina. ¿Tus ojos están fatigados también? Hablemos de cómo recuperarte. ✨',
      
      'Siento que estés agotado, amig@ 💚😴 El cansancio puede afectar todo tu cuerpo, incluyendo tus ojos. "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas" (Isaías 40:29). 🙏💙 Dios te dará nuevas fuerzas. Para tus ojitos cansados: descansa de pantallas, duerme bien, y aplica compresas tibias. El sueño reparador es vital para tu visión. ¿Estás descansando lo suficiente? Hablemos de cómo mejorar tu energía y salud visual. ✨',
      
      'Mi querido amig@, el cansancio es señal de que necesitas parar 💙😴 "En lugares de delicados pastos me hará descansar" (Salmo 23:2). 🙏💚 Dios quiere que descanses. Tus ojos también necesitan ese descanso: evita pantallas antes de dormir, usa lágrimas artificiales, y cierra los ojos por 5 minutos cada hora. El descanso no es lujo, es necesidad. ¿Cómo están tus ojitos? ¿También fatigados? Trabajemos en tu recuperación completa. ✨',
      
      'Entiendo perfectamente, amig@ 💚😴 La fatiga puede ser abrumadora. "Los que esperan a Jehová tendrán nuevas fuerzas" (Isaías 40:31). 🙏💙 Confía en que Dios renovará tu energía. Si tus ojos están cansados por pantallas o falta de sueño, necesitas: descansos visuales frecuentes, 7-8 horas de sueño, y buena hidratación. Tu cuerpo y tus ojos necesitan recuperarse. ¿Qué está causando tu agotamiento? Hablemos de soluciones. ✨',
      
      'Siento mucho tu agotamiento, amig@ 💙😴 El cansancio extremo afecta todo, incluyendo tu visión. "Jehová es mi fortaleza y mi escudo" (Salmo 28:7). 🙏💚 Dios te dará la fuerza que necesitas. Para tus ojos fatigados: regla 20-20-20, lágrimas artificiales, y sueño de calidad. No ignores las señales de tu cuerpo. ¿Estás durmiendo bien? ¿Tus ojos también están cansados? Trabajemos en tu recuperación integral. ✨'
    ]
  },
  
  agradecimiento: {
    patron: /estoy agradecido|me siento agradecido|doy gracias|bendecido|afortunado|gracias a dios|dios es bueno/i,
    respuestas: [
      '¡Qué hermoso corazón tienes, amig@! 🙏💚 La gratitud es una de las actitudes más poderosas. "Dad gracias en todo, porque esta es la voluntad de Dios" (1 Tesalonicenses 5:18). 😊💙 Dios se alegra cuando reconocemos sus bendiciones. Aprovecha este momento de gratitud para seguir cuidando los regalos que Dios te ha dado, como tus ojitos. ¿Te gustaría saber cómo proteger y fortalecer tu vista? ¡Sigamos agradeciendo juntos! ✨',
      
      '¡Aleluya, amig@! 🙌💙 Tu gratitud es un testimonio hermoso. "Entrad por sus puertas con acción de gracias" (Salmo 100:4). 🙏💚 Dios es bueno todo el tiempo. Mientras agradeces, recuerda cuidar tu salud visual: come nutritivo, descansa tus ojos, y protégelos del sol. La gratitud y el cuidado van de la mano. ¿Hay algo sobre tus ojitos que quieras mejorar? ¡Estoy aquí para ayudarte! ✨',
      
      '¡Qué bendición escuchar eso, amig@! 💚😊 La gratitud transforma vidas. "Bueno es alabarte, oh Jehová" (Salmo 92:1). 🙏💙 Dios te ha bendecido abundantemente. Aprovecha este espíritu agradecido para invertir en tu salud, incluyendo tus ojitos. La prevención y el cuidado son formas de agradecer a Dios por el regalo de la vista. ¿Quieres consejos para mantener tus ojos saludables? ¡Sigamos dando gracias! ✨',
      
      '¡Precioso, amig@! 🌟💙 Tu corazón agradecido es inspirador. "Dad gracias al Señor, porque él es bueno" (Salmo 107:1). 🙏💚 Dios merece toda la gloria. Mientras agradeces, no olvides cuidar los dones que Dios te ha dado, como tus ojos. El cuidado preventivo es una forma de honrar a Dios. ¿Te gustaría saber más sobre nutrición o ejercicios para tus ojitos? ¡Estoy feliz de ayudarte! ✨',
      
      '¡Amén, amig@! 🙏💚 Tu gratitud es un aroma dulce para Dios. "Por lo cual, recibiendo nosotros un reino inconmovible, tengamos gratitud" (Hebreos 12:28). 😊💙 Dios te ha bendecido con la vista, con la vida, con todo. Aprovecha este momento para seguir cuidando tu salud visual: descanso, nutrición y protección. ¿Cómo puedo ayudarte a cuidar mejor tus ojitos? ¡Sigamos agradeciendo juntos! ✨'
    ]
  },
  
  esperanza: {
    patron: /tengo esperanza|confío en dios|sé que mejoraré|todo estará bien|dios está conmigo|tengo fe|creo que sanaré/i,
    respuestas: [
      '¡Qué fe tan hermosa, amig@! 💚🙏 Tu esperanza es poderosa. "La fe es la certeza de lo que se espera, la convicción de lo que no se ve" (Hebreos 11:1). 💙✨ Dios honra tu fe y está obrando en tu vida. Si estás confiando en Dios para la sanación de tus ojos, también cuida de ellos: tratamiento médico, nutrición adecuada, y descanso. La fe y la acción van juntas. ¿Cómo puedo apoyarte en tu proceso de sanación visual? ¡Sigamos creyendo juntos! 🌟',
      
      '¡Aleluya, amig@! 🙌💙 Tu confianza en Dios es inspiradora. "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis" (Jeremías 29:11). 🙏💚 Dios tiene un plan perfecto para ti. Mientras confías en Él, sigue cuidando tus ojitos: tratamiento, alimentación y descanso. La esperanza y el cuidado se complementan. ¿Qué necesitas para tu salud visual? ¡Estoy aquí para ayudarte! ✨',
      
      '¡Qué testimonio tan poderoso, amig@! 💚🌟 Tu esperanza en Dios es inquebrantable. "Mas los que esperan a Jehová tendrán nuevas fuerzas" (Isaías 40:31). 🙏💙 Dios te dará la sanación que necesitas. Mientras esperas, cuida activamente tus ojos: sigue el tratamiento, come sano, y descansa. La esperanza activa trae resultados. ¿Cómo van tus ojitos? ¿Qué puedo hacer para apoyarte? ¡Sigamos confiando juntos! ✨',
      
      '¡Amén, amig@! 🙏💙 Tu fe mueve montañas. "Todo lo puedo en Cristo que me fortalece" (Filipenses 4:13). 💚💪 Dios está contigo en cada paso de tu sanación. Mientras confías en Él, sigue cuidando tus ojitos: lágrimas artificiales, nutrición, y descanso visual. La fe sin obras está muerta, así que combina tu confianza en Dios con el cuidado práctico. ¿Qué necesitas hoy para tu salud visual? ¡Estoy aquí para ti! ✨',
      
      '¡Qué hermoso, amig@! 💚🙏 Tu esperanza en Dios es un faro de luz. "La esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones" (Romanos 5:5). 💙✨ Dios cumplirá sus promesas en tu vida. Mientras esperas tu sanación, cuida tus ojos con amor: tratamiento médico, alimentos nutritivos, y descanso adecuado. La esperanza y la acción son un equipo perfecto. ¿Cómo puedo ayudarte hoy? ¡Sigamos creyendo! 🌟'
    ]
  }
};

export const generate = (mensaje) => {
  const msg = mensaje.toLowerCase();
  
  for (const [key, estado] of Object.entries(estadosEmocionales)) {
    if (estado.patron.test(msg)) {
      return random(estado.respuestas);
    }
  }
  
  return null;
};
