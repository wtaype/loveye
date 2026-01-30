import * as memoria from '../memoria.js';

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const conversaciones = {
  ojo_seco: [
    { pregunta: '¿Qué tratamiento me recomiendas, amigo?', prompt: '¿Qué tratamiento me recomiendas?' },
    { pregunta: '¿En cuánto tiempo me recuperaré?', prompt: '¿Cuánto tiempo tardaré en recuperarme?' },
    { pregunta: '¿Qué alimentos me ayudarían?', prompt: '¿Qué alimentos me ayudan con el ojo seco?' },
    { pregunta: '¿Cuántas veces a la semana debo comerlos?', prompt: '¿Con qué frecuencia debo comerlos?' },
    { pregunta: '¿Debo usar lágrimas artificiales siempre?', prompt: '¿Siempre necesitaré lágrimas artificiales?' },
    { pregunta: '¿Cuándo debo ir al oftalmólogo?', prompt: '¿Cuándo debo visitar al oftalmólogo?' },
    { pregunta: 'Gracias por todo, amigo', prompt: 'Gracias por tu ayuda' }
  ],
  
  fatiga_visual: [
    { pregunta: '¿Qué me recomiendas hacer, amigo?', prompt: '¿Qué puedo hacer para mejorar?' },
    { pregunta: '¿Cada cuánto debo descansar?', prompt: '¿Con qué frecuencia debo descansar?' },
    { pregunta: '¿Los lentes con filtro ayudan?', prompt: '¿Sirven los lentes con filtro azul?' },
    { pregunta: '¿Qué ejercicios puedo hacer?', prompt: '¿Qué ejercicios me recomiendas?' },
    { pregunta: '¿En cuánto tiempo veré mejoría?', prompt: '¿Cuándo notaré mejoría?' },
    { pregunta: '¿Debo ir al oftalmólogo?', prompt: '¿Necesito ir al oftalmólogo?' },
    { pregunta: 'Gracias por todo, amigo', prompt: 'Muchas gracias por tu ayuda' }
  ],
  
  nutricion: [
    { pregunta: '¿Qué alimentos me recomiendas?', prompt: '¿Qué alimentos son buenos para mis ojos?' },
    { pregunta: '¿Cuántas veces a la semana debo comerlos?', prompt: '¿Con qué frecuencia debo comerlos?' },
    { pregunta: '¿Las vitaminas en pastillas funcionan igual?', prompt: '¿Sirven los suplementos en pastillas?' },
    { pregunta: '¿Qué más puedo hacer para mejorar mi vista?', prompt: '¿Qué más puedo hacer por mi vista?' },
    { pregunta: '¿En cuánto tiempo veré resultados?', prompt: '¿Cuándo veré resultados?' },
    { pregunta: '¿Hay alimentos que deba evitar?', prompt: '¿Qué alimentos debo evitar?' },
    { pregunta: 'Gracias por todo, amigo', prompt: 'Muchas gracias' }
  ],
  
  examenes: [
    { pregunta: '¿Cada cuánto debo ir al oftalmólogo?', prompt: '¿Con qué frecuencia debo ir?' },
    { pregunta: '¿Qué exámenes me harán?', prompt: '¿Qué tipo de exámenes me harán?' },
    { pregunta: '¿Duelen los exámenes?', prompt: '¿Los exámenes son dolorosos?' },
    { pregunta: '¿Cuánto tiempo toma la revisión?', prompt: '¿Cuánto dura la revisión?' },
    { pregunta: '¿Qué debo llevar a la cita?', prompt: '¿Qué necesito llevar a la cita?' },
    { pregunta: '¿Es caro el examen?', prompt: '¿Cuánto cuesta aproximadamente?' },
    { pregunta: 'Gracias por todo, amigo', prompt: 'Muchas gracias por la información' }
  ],
  
  dolor_ojos: [
    { pregunta: 'Siento que me duelen, ¿qué me recomiendas?', prompt: 'Me duelen los ojos, ¿qué hago?' },
    { pregunta: '¿Es grave el dolor?', prompt: '¿Es algo grave?' },
    { pregunta: '¿Qué puedo hacer para aliviar el dolor?', prompt: '¿Cómo alivio el dolor?' },
    { pregunta: '¿Debo ir al doctor inmediatamente?', prompt: '¿Debo ir al doctor ya?' },
    { pregunta: '¿Qué puede estar causando el dolor?', prompt: '¿Qué causa este dolor?' },
    { pregunta: '¿Puedo usar algo mientras tanto?', prompt: '¿Puedo usar algo para el dolor?' },
    { pregunta: 'Gracias por tu ayuda, amigo', prompt: 'Gracias por ayudarme' }
  ]
};

export const respuestasContextuales = {
  frecuencia_alimentos: {
    ojo_seco: [
      '¡Perfecto, amig@! 💚😊 Te doy la FRECUENCIA EXACTA 🥕⏰ PESCADO GRASO (Omega-3): 2-3 veces por semana (salmón, atún, sardinas). NUECES: Puñado diario (7-10 nueces). SEMILLAS DE CHÍA: 1 cucharada diaria en yogurt o smoothie. VEGETALES VERDES: DIARIOS (espinaca, kale en ensaladas). ZANAHORIAS: 3-4 veces por semana. AGUA: 2L DIARIOS (fundamental). 💙💧 IMPORTANTE: la constancia es clave. No esperes resultados en 3 días, pero en 4-6 semanas notarás mejoría significativa. El Omega-3 es el más importante para ojo seco. ¿Puedes comprometerte con esta frecuencia? 💪✨',
      'Excelente pregunta, amig@ 💙😊 Como especialista te doy el PLAN SEMANAL 🐟📅 LUNES-MIÉRCOLES-VIERNES: Pescado graso (salmón, atún, sardinas) - 1 porción. TODOS LOS DÍAS: Nueces (7-10 unidades), semillas de chía (1 cucharada), vegetales verdes (espinaca, kale). 3-4 VECES/SEMANA: Zanahorias, camote, huevos. AGUA: 2L diarios sin falta. 💚💧 EVITAR: Alcohol más de 2 veces/semana, cafeína excesiva, comida muy salada. RESULTADOS: en 4-6 semanas notarás menos sequedad. La clave es CONSTANCIA, no perfección. ¿Listo para empezar? 💪�'
    ],
    nutricion: [
      '¡Me encanta tu compromiso, amig@! 💚😊 Te doy la FRECUENCIA ÓPTIMA 🥗📅 PESCADO GRASO: 2-3 veces/semana (salmón, atún, sardinas - Omega-3). VEGETALES VERDES: DIARIOS (espinaca, kale, brócoli - luteína). ZANAHORIAS/CAMOTE: 3-4 veces/semana (vitamina A). CÍTRICOS: DIARIOS (naranja, mandarina - vitamina C). FRUTOS SECOS: DIARIOS (almendras, nueces - vitamina E). HUEVOS: 3-4 veces/semana (zinc, luteína). AGUA: 2L DIARIOS. 💙✨ IMPORTANTE: con esta frecuencia, reduces riesgo de cataratas 25%, degeneración macular 30%, ojo seco 40%. ¿Puedes seguir este plan? 💪🙏',
      'Perfecto, amig@ 💙😊 Como especialista te doy el CALENDARIO SEMANAL 📅👁️ LUNES-MIÉRCOLES-VIERNES: Pescado graso (salmón, atún). MARTES-JUEVES-SÁBADO: Huevos (desayuno o almuerzo). TODOS LOS DÍAS: Vegetales verdes (ensalada), cítricos (desayuno), frutos secos (snack), 2L agua. DOMINGO: Día libre pero mantén vegetales y agua. 💚💧 IMPORTANTE: no necesitas ser perfecto, 80% de constancia = 100% de resultados. En 4-6 semanas notarás mejoría. ¿Te parece factible este plan? 💪�✨'
    ]
  },
  
  vitaminas_suplementos: {
    nutricion: [
      '¡Buena pregunta, amig@! 💚😊 Te explico la VERDAD sobre suplementos 💊👁️ ALIMENTOS > SUPLEMENTOS siempre. Los alimentos tienen nutrientes en forma natural, mejor absorción, y otros compuestos beneficiosos. 💙✨ PERO: si NO comes pescado, Omega-3 en cápsulas SÍ funciona (1000mg EPA+DHA diarios). Si NO comes vegetales, luteína + zeaxantina en pastillas ayudan (10mg + 2mg). IMPORTANTE: suplementos NO reemplazan mala dieta. Son COMPLEMENTO, no sustituto. 💚💪 RECOMENDACIÓN: intenta primero con alimentos 4-6 semanas. Si no puedes, entonces suplementos. ¿Tienes dificultad para comer estos alimentos? �',
      'Perfecto que preguntes, amig@ 💙😊 Como especialista te digo 💊🥗 ALIMENTOS REALES: Mejor absorción, más nutrientes, más beneficios. SUPLEMENTOS: Funcionan pero son segunda opción. 💚✨ CUÁNDO USAR SUPLEMENTOS: No comes pescado (Omega-3 1000mg), no comes vegetales (luteína 10mg), deficiencia comprobada (análisis de sangre). MARCAS RECOMENDADAS: Omega-3 (Nordic Naturals, Carlson), Luteína (Jarrow, NOW Foods). 💙💪 IMPORTANTE: consulta médico antes de suplementos si tomas medicamentos. Los suplementos ayudan, pero la dieta real es mejor. ¿Prefieres intentar con alimentos primero? �✨'
    ]
  },
  
  que_mas_hacer: {
    nutricion: [
      '¡Excelente, amig@! 💚😊 Además de la nutrición, hay MUCHO más que puedes hacer 👁️✨ PROTECCIÓN: Usa lentes de sol con UV400, evita luz azul excesiva. DESCANSO: Duerme 7-8 horas (tus ojos se regeneran). HIDRATACIÓN: 2L agua diarios (fundamental). EJERCICIO: Actividad física mejora circulación ocular. 💙💪 PANTALLAS: Regla 20-20-20 (cada 20 min, mira 6 metros por 20 seg). EXÁMENES: Oftalmólogo cada 1-2 años. EVITAR: Fumar (daña retina), alcohol excesivo, estrés crónico. 💚✨ IMPORTANTE: combina nutrición + hábitos saludables = visión óptima. ¿Listo para implementar todo esto? 🙏💪',
      'Perfecto, amig@ 💙😊 Como especialista te doy el PLAN COMPLETO 🥗👁️ NUTRICIÓN: Ya la tienes (pescado, vegetales, agua). PROTECCIÓN SOLAR: Lentes UV400 siempre afuera. PANTALLAS: Regla 20-20-20, filtro luz azul. SUEÑO: 7-8 horas (regeneración ocular). EJERCICIO: 30 min diarios (mejora circulación). 💚💪 ESTRÉS: Meditación, yoga (reduce presión ocular). NO FUMAR: Fumar aumenta riesgo de cataratas 2x, degeneración macular 3x. EXÁMENES: Oftalmólogo cada 1-2 años. 💙✨ IMPORTANTE: esto es un ESTILO DE VIDA, no una dieta temporal. ¿Te comprometes? 🙏💚'
    ]
  },
  
  alimentos_evitar: {
    nutricion: [
      '¡Buena pregunta, amig@! 💚😊 Sí hay alimentos que DAÑAN tu visión 🚫👁️ EVITAR O REDUCIR: 1) AZÚCAR REFINADA: Aumenta riesgo de retinopatía diabética. 2) GRASAS TRANS: Dañan vasos sanguíneos oculares (comida frita, procesada). 3) SAL EXCESIVA: Aumenta presión ocular. 4) ALCOHOL: Deshidrata y daña nervio óptico. 5) CAFEÍNA EXCESIVA: Más de 3 cafés/día aumenta presión ocular. 6) COMIDA PROCESADA: Baja en nutrientes, alta en químicos. 💙😔 IMPORTANTE: no necesitas eliminar 100%, pero SÍ reducir significativamente. ¿Consumes mucho de estos alimentos? 💚�',
      'Perfecto, amig@ 💙😊 Como especialista te digo qué EVITAR 🚫🥗 AZÚCAR: Refrescos, dulces, postres (aumenta inflamación ocular). GRASAS TRANS: Comida frita, margarina, procesados (dañan retina). SAL: Más de 5g/día (aumenta presión ocular). ALCOHOL: Más de 2 copas/día (deshidrata, daña nervio óptico). CAFEÍNA: Más de 3 cafés/día (presión ocular). CARBOHIDRATOS REFINADOS: Pan blanco, pasta blanca (picos de azúcar). 💚😔 IMPORTANTE: estos alimentos aumentan riesgo de cataratas, glaucoma, degeneración macular. Reduce gradualmente, no necesitas perfección. ¿Cuál es tu mayor debilidad? 💙�✨'
    ]
  },
  
  otros_consejos: {
    nutricion: [
      '¡Claro, amig@! 💚😊 Te doy CONSEJOS FINALES que marcan diferencia 👁️💪 CONSTANCIA: El secreto es ser constante, no perfecto. 80% de adherencia = 100% resultados. PACIENCIA: Cambios toman 4-6 semanas, no te desanimes. HIDRATACIÓN: 2L agua diarios (muchos olvidan esto). SUEÑO: 7-8 horas (regeneración ocular). 💙✨ ESTRÉS: Maneja estrés (afecta presión ocular). COMUNIDAD: Comparte tu progreso con familia/amigos. SEGUIMIENTO: Toma fotos de tus comidas para ver progreso. 💚🙏 IMPORTANTE: esto es INVERSIÓN en tu visión futura. A los 60 años agradecerás haber empezado hoy. ¿Listo para comenzar este viaje? �',
      'Perfecto, amig@ 💙😊 Como especialista te doy los ÚLTIMOS TIPS 🥗✨ PLANIFICACIÓN: Prepara comidas el domingo para toda la semana. VARIEDAD: Rota alimentos para no aburrirte. FAMILIA: Involucra a tu familia en estos hábitos. PRESUPUESTO: Pescado congelado es más barato y igual de nutritivo. 💚💧 SNACKS: Ten nueces/almendras siempre a mano. HIDRATACIÓN: Pon alarmas para beber agua. CELEBRA: Cada semana que completes, celébralo. 💙🙏 IMPORTANTE: pequeños cambios sostenibles > cambios drásticos temporales. Confía en el proceso, vamos a mejorar tu visión juntos. ¿Tienes alguna duda final? 💚✨'
    ]
  },
  
  ejercicios: {
    fatiga_visual: [
      '¡Excelente pregunta, amig@! 💚😊 Los ejercicios oculares SÍ ayudan con la fatiga visual. Aquí te doy los MÁS EFECTIVOS 👁️💪 1) REGLA 20-20-20: Cada 20 min, mira algo a 6 metros por 20 seg (fundamental) 2) PARPADEO CONSCIENTE: Parpadea 10 veces lentamente cada hora 3) PALMING: Frota tus manos, cúbrelas sobre ojos cerrados 2 min (relaja) 4) ENFOQUE CERCA-LEJOS: Mira tu dedo cerca 10 seg, luego algo lejos 10 seg (repite 10 veces) 5) OJOS EN CÍRCULO: Mueve ojos en círculos 5 veces cada dirección 6) MASAJE DE SIENES: Masajea suavemente tus sienes 1 min. 💙✨ Hazlos 2-3 veces al día y verás mejoría en 1 semana. ¿Listo para empezar? 💪�',
      'Perfecto, amig@! 💙😊 Te doy la RUTINA COMPLETA de ejercicios 👁️� MAÑANA (5 min): Palming 2 min + Parpadeo 20 veces + Enfoque cerca-lejos 10 repeticiones. DURANTE EL DÍA: Regla 20-20-20 cada 20 minutos (lo más importante). TARDE (5 min): Ojos en círculo 10 veces + Masaje de sienes 2 min + Parpadeo 20 veces. NOCHE: Compresas tibias 5 min antes de dormir. 💚✨ IMPORTANTE: La constancia es clave. En 1-2 semanas notarás menos fatiga, menos ardor, mejor enfoque. Dios te da la disciplina para ser constante. ¿Empezamos hoy? ��💪🙏'
    ]
  },
  
  tiempo_mejoria: {
    fatiga_visual: [
      '¡Me alegra que preguntes sobre tiempos, amig@! 💚😊 Eso significa que estás comprometido con tu recuperación. Te doy tiempos REALES 👁️⏰ ALIVIO INMEDIATO: Con la regla 20-20-20 sentirás alivio el MISMO DÍA. MEJORÍA NOTABLE: En 3-5 días con ejercicios + descansos verás gran diferencia. RECUPERACIÓN COMPLETA: En 1-2 semanas de constancia, tus ojos estarán mucho mejor. MANTENIMIENTO: Continúa con buenos hábitos para prevenir recaídas. 💙💪 IMPORTANTE: El 90% mejora en 1 semana siendo constante. La clave es DISCIPLINA diaria. Dios te fortalece en el proceso. ¿Listo para comprometerte? �🙏✨'
    ]
  },
  
  cuando_doctor: {
    fatiga_visual: [
      'Excelente pregunta, amig@! 💚😊 Como especialista te digo CUÁNDO ir al oftalmólogo 👁️🩺 DEBES IR SI: 1) Fatiga NO mejora en 2 semanas con descansos 2) Visión borrosa que persiste 3) Dolor de cabeza constante 4) Ojos rojos frecuentemente 5) Sensibilidad extrema a la luz 6) Visión doble. 💙😔 PREVENCIÓN: Examen cada 1-2 años aunque te sientas bien. URGENTE: Si pierdes visión súbitamente, ve YA. 💚💪 IMPORTANTE: La mayoría de fatiga visual mejora con descansos y ejercicios, pero si persiste, el oftalmólogo puede descartar problemas serios. Confía en el proceso, Dios guía a los médicos. 💙🙏✨'
    ]
  }
};

export const detectarTema = (mensaje) => {
  const msg = mensaje.toLowerCase();
  
  if (/ojo(s)? seco(s)?|sequedad|xeroftalm/i.test(msg)) return 'ojo_seco';
  if (/fatiga|cansancio|pantalla|proteger (mis )?ojos|lentes con filtro/i.test(msg)) return 'fatiga_visual';
  if (/alimento(s)?|comida|vitamina(s)?|nutrici[oó]n|qu[eé] (debo |puedo )?comer/i.test(msg)) return 'nutricion';
  if (/cada cu[aá]nto (debo )?ir|oftalm[oó]logo|examen|revisi[oó]n|qu[eé] examen|qu[eé] debo llevar|es caro/i.test(msg)) return 'examenes';
  if (/duele(n)?|dolor|me duele(n)?|siento dolor/i.test(msg)) return 'dolor_ojos';
  
  return memoria.getTemaActual();
};

export const getSiguientePregunta = () => {
  const tema = memoria.getTemaActual();
  const contador = memoria.getContadorPregunta();
  
  if (tema && conversaciones[tema] && contador < conversaciones[tema].length) {
    return conversaciones[tema][contador].prompt;
  }
  
  return null;
};

export const detectarPreguntaContextual = (mensaje) => {
  const msg = mensaje.toLowerCase();
  
  if (/cu[aá]ntas veces|frecuencia|cada cu[aá]nto (debo |puedo )?comer/i.test(msg)) return 'frecuencia_alimentos';
  if (/vitaminas? (en )?pastillas?|suplementos?|c[aá]psulas?|funcionan igual/i.test(msg)) return 'vitaminas_suplementos';
  if (/qu[eé] m[aá]s (puedo |debo )?hacer|qu[eé] otra cosa|adem[aá]s de|aparte de/i.test(msg)) return 'que_mas_hacer';
  if (/alimentos? (que |debo )?evitar|qu[eé] no (debo |puedo )?comer|alimentos? malos/i.test(msg)) return 'alimentos_evitar';
  if (/alg[uú]n otro consejo|otro tip|m[aá]s consejos|[uú]ltimo consejo|algo m[aá]s que/i.test(msg)) return 'otros_consejos';
  if (/ejercicios?|qu[eé] ejercicios|c[oó]mo ejercitar|actividades/i.test(msg)) return 'ejercicios';
  if (/cu[aá]nto tiempo|cu[aá]ndo (ver[eé]|notar[eé])|mejor[ií]a|resultados|cu[aá]ndo me|tiempo (de |para )/i.test(msg)) return 'tiempo_mejoria';
  if (/debo ir|necesito ir|cu[aá]ndo ir|oftalm[oó]logo|doctor|m[eé]dico/i.test(msg)) return 'cuando_doctor';
  
  return null;
};

export const getRespuestaContextual = (tipoPregunta, tema) => {
  if (respuestasContextuales[tipoPregunta] && respuestasContextuales[tipoPregunta][tema]) {
    return random(respuestasContextuales[tipoPregunta][tema]);
  }
  return null;
};

export const esAgradecimiento = (mensaje) => {
  return /^(muchas )?gracias|te agradezco|mil gracias|thank you|thx|grax/i.test(mensaje.trim());
};

export const getAgradecimiento = () => {
  const agradecimientos = [
    '¡De nada, amig@! 💚😊 Me alegra muchísimo haberte ayudado. Recuerda: la constancia es la clave del éxito. Si tienes más dudas sobre tu salud ocular, aquí estaré siempre para ti con todo mi corazón. Cuida esos ojitos, son tu ventana al mundo. ¡Mucho éxito en tu recuperación! 💪💙✨ Dios te bendice. 🙏',
    '¡Con mucho gusto, amig@! 💙😊 Para eso estoy aquí, para cuidar tu visión con amor y dedicación. Recuerda ser constante con el tratamiento y verás resultados increíbles. Si necesitas algo más sobre salud ocular, no dudes en preguntarme. ¡Que tus ojitos se recuperen pronto! 💪💚🌟 Dios está contigo. 🙏',
    '¡Un placer ayudarte, amig@! 💚😊 Me encanta que te comprometas con tu salud ocular. Recuerda: pequeños pasos diarios = grandes resultados. Si tienes más preguntas sobre tus ojos, aquí estaré con los brazos abiertos. ¡Cuídate mucho y que tengas una excelente recuperación! 💪💙✨ Dios te ama. 🙏'
  ];
  return random(agradecimientos);
};
