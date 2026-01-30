// ========== MÓDULO EXPERTO EN SALUD OCULAR - OJITOS.JS ==========
// ========== PARTE 1: CONDICIONES OCULARES COMUNES ==========
const condicionesOculares = {
  ojo_seco: {
    patron: /ojo(s)? seco(s)?|xeroftalm[ií]a|sequedad (ocular|en (los )?ojos)|ojos resecos|resequedad/i,
    respuestas: [
      'Te comprendo perfectamente, amig@. Sé lo incómodo que es 💙 Pero NO te preocupes, para estos casos hay solución y vamos a recuperarte juntos. Como especialista te explico: el ojo seco (xeroftalmía) ocurre cuando tus ojitos no producen suficientes lágrimas o se evaporan muy rápido 💧👁️ Los síntomas típicos son: ardor, sensación de cuerpo extraño, enrojecimiento, y visión borrosa temporal. La BUENA NOTICIA es que tiene tratamiento muy efectivo 💚 Lo que puedes hacer es: usar lágrimas artificiales sin conservantes 4-6 veces al día, aplicar compresas tibias 10-15 min en tus párpados, consumir Omega-3 (pescado, nueces), parpadear conscientemente, y usar humidificador. Con estos cuidados constantes, verás mejoría notable en 1-2 semanas. Estoy seguro que vamos a recuperarte 💪',
      'Lamento que estés pasando por esto, amig@ 😔 Pero tranquilo, hay MUCHA esperanza y vamos a mejorar esto. Como especialista te digo: el ojo seco es súper común (afecta a millones) y responde muy bien al tratamiento 💙 Ocurre cuando las lágrimas se evaporan demasiado rápido o no produces suficientes. Los síntomas que probablemente sientes son: ardor, picazón, ojos rojos, sensibilidad a la luz, y esa molesta sensación de tener arena en los ojos. Pero escucha esto: la mayoría de pacientes mejoran significativamente con el tratamiento adecuado 💧✨ Te recomiendo: lágrimas artificiales frecuentemente (elige sin conservantes), geles lubricantes antes de dormir, evitar aire acondicionado directo en tu cara, beber mucha agua (2L diarios), y Omega-3 en tu dieta. Con constancia, en 2-3 semanas notarás una diferencia ENORME. Confía en mí, vamos a recuperarte 💚',
      'Entiendo perfectamente lo que estás pasando 💙 Sé que es molesto, pero quiero que sepas algo importante: el ojo seco tiene solución y NO estás solo en esto. Como especialista en salud ocular te comento: la xeroftalmía (ojo seco) es una de las condiciones más comunes que veo, y la buena noticia es que tiene tratamiento efectivo 💧👁️ Los síntomas típicos incluyen: sensación de cuerpo extraño (como si tuvieras algo en el ojo), ardor, sensibilidad a la luz, visión borrosa intermitente, y lagrimeo paradójico (sí, a veces el ojo seco causa lagrimeo). Las soluciones que FUNCIONAN son: lágrimas artificiales de calidad, compresas tibias en párpados, Omega-3, parpadear conscientemente cada 20 segundos, y evitar ambientes muy secos. Con estos cuidados constantes, verás mejoría notable. Estoy seguro que vamos a recuperarte completamente 💚💪'
    ],
    tratamiento: [
      '¡Perfecto! Me alegra que quieras saber más sobre el tratamiento 💚 Como tu especialista de confianza, te voy a dar un plan completo que SÍ funciona 💧👁️ TRATAMIENTO EFECTIVO: 1) Lágrimas artificiales SIN conservantes 4-6 veces al día (marcas recomendadas: Systane, Refresh, Hylo), 2) Compresas tibias en párpados 10-15 min, 2 veces al día (esto destapa las glándulas de Meibomio), 3) Omega-3: 2-3 porciones de pescado graso por semana o suplementos de 1000mg EPA+DHA, 4) Parpadear conscientemente cada 20 segundos (especialmente frente a pantallas), 5) Humidificador en tu habitación y oficina, 6) Beber 2L de agua diaria. IMPORTANTE: si usas lentes de contacto, reduce las horas de uso. Con este tratamiento constante, el 85% de pacientes mejoran significativamente. ¿Listo para empezar? 💪',
      'Me encanta que preguntes sobre el tratamiento 💙 Eso significa que estás comprometido con tu recuperación. Como especialista te doy un plan COMPLETO y EFECTIVO 💧✨ PASO A PASO: 1) LÁGRIMAS ARTIFICIALES: usa sin conservantes si las aplicas más de 4 veces al día. Aplica cada 3-4 horas mientras estés despierto. 2) COMPRESAS TIBIAS: calienta una toalla limpia con agua tibia (no caliente), escurre, coloca sobre párpados cerrados 10-15 min. Hazlo 2 veces al día. Esto mejora la calidad de tus lágrimas. 3) OMEGA-3: come salmón, atún, sardinas 2-3 veces/semana, o toma suplementos. Esto reduce inflamación y mejora lágrimas. 4) HIGIENE PALPEBRAL: limpia bordes de párpados con champú de bebé diluido. 5) AMBIENTE: usa humidificador, evita ventiladores directos, usa lentes de sol afuera. RESULTADOS: en 1-2 semanas sentirás alivio, en 4-6 semanas mejoría significativa. Confía en el proceso, vamos a recuperarte 💚💪',
      'Excelente pregunta, amig@ 💚 El tratamiento del ojo seco es muy efectivo si eres constante. Como especialista te doy el PROTOCOLO COMPLETO 👁️💧 TRATAMIENTO INMEDIATO (empiezas hoy): Lágrimas artificiales sin conservantes cada 3-4 horas. Compresas tibias 10-15 min en párpados, 2 veces al día. TRATAMIENTO A MEDIANO PLAZO (esta semana): Incorpora Omega-3 en tu dieta (pescado graso, nueces, semillas de chía). Usa humidificador en casa y oficina. Reduce tiempo de pantallas y aplica regla 20-20-20. TRATAMIENTO A LARGO PLAZO (este mes): Higiene palpebral diaria. Beber 2L agua diaria. Proteger ojos con lentes de sol. Evitar ambientes con humo o aire acondicionado directo. IMPORTANTE: si no mejoras en 2 semanas, consulta oftalmólogo para tratamientos avanzados (tapones lagrimales, suero autólogo). Pero confía en mí: el 80% mejora solo con estos cuidados básicos. ¡Vamos a recuperarte! 💪💙'
    ]
  },
  hemorragia_subconjuntival: {
    patron: /hemorragia (subconjuntival)?|sangre en (el|los) ojo(s)?|ojo(s)? rojo(s)? con sangre|mancha roja (en el ojo)?|derrame (ocular)?/i,
    respuestas: [
      'La hemorragia subconjuntival se ve impactante pero generalmente es inofensiva 😊💙 Es una mancha roja brillante causada por la ruptura de un vasito sanguíneo. Lo bueno: NO duele, NO afecta la visión, y desaparece sola en 1-2 semanas. Solo usa lágrimas artificiales para comodidad y evita frotarte el ojo. Si ocurre frecuentemente, consulta al médico para revisar tu presión arterial. ¿Te acabas de despertar así?',
      'Tranquilo, la sangre en el ojo (hemorragia subconjuntival) es común y benigna 💚 Puede aparecer al despertar, toser fuerte, o levantar peso. NO requiere tratamiento específico, solo paciencia. Desaparecerá gradualmente. Usa lágrimas artificiales si sientes molestia leve. Si pasa seguido, chequea tu presión arterial. ¿Hiciste algún esfuerzo físico?',
      'Esa mancha roja es una hemorragia subconjuntival 🩸👁️ Se ve peor de lo que es. Causas comunes: estornudar, toser, esfuerzo, o simplemente ocurre. Lo importante: sin dolor = sin problema grave. Se absorbe sola en 7-14 días. Evita frotarte, usa lágrimas artificiales, y si es recurrente, visita al doctor. ¿Tienes dolor o cambios en la visión?'
    ]
  },
  orzuelo: {
    patron: /orzuelo|perrilla|chalazi[oó]n|grano en (el )?p[aá]rpado|bulto (en el )?p[aá]rpado|infecci[oó]n (del|en el) p[aá]rpado/i,
    respuestas: [
      '¡Ay, el orzuelo (perrilla) es muy molesto! 😣 Es una infección bacteriana que forma un bulto rojo y doloroso en el párpado. Tratamiento efectivo: compresas TIBIAS (no calientes) por 10-15 min, 3-4 veces al día. NUNCA lo exprimas o revientes. Limpia suave con agua tibia, evita maquillaje, y si no mejora en 48 horas, ve al médico para antibiótico tópico. ¿Cuánto tiempo llevas con el bulto?',
      'El orzuelo es una infección de las glándulas del párpado 🦠 Síntomas: bulto doloroso, hinchazón, lagrimeo, sensibilidad. Lo más importante: compresas tibias varias veces al día para que drene naturalmente. NO lo toques ni lo revientes. Lava tus manos siempre. Si persiste más de 2 días o empeora, necesitas ver al oftalmólogo. ¿Está muy hinchado?',
      'La perrilla (orzuelo) es como un granito en el párpado 😔💙 Causas: bacterias, estrés, falta de higiene. Tratamiento casero: compresas tibias 10-15 min varias veces al día, limpieza suave, sin maquillaje. Si no drena solo en 48 horas, el médico puede recetar antibiótico. IMPORTANTE: nunca lo aprietes. ¿Es la primera vez que te sale?'
    ]
  },
  conjuntivitis: {
    patron: /conjuntivitis|ojo(s)? rojo(s)?( muy)?|infecci[oó]n (ocular|en (los )?ojos)|ojos pegados|secreci[oó]n (en (los )?ojos|ocular)|lagañas/i,
    respuestas: [
      'La conjuntivitis (ojo rojo) es muy contagiosa 😷👁️ Puede ser viral, bacteriana o alérgica. Síntomas: enrojecimiento intenso, secreción (clara, amarilla o verde), picazón, párpados pegados al despertar. Tratamiento: compresas frías, lágrimas artificiales, antibiótico SI es bacteriana (necesitas receta), antihistamínico si es alérgica. MUY IMPORTANTE: lava tus manos frecuentemente y no compartas toallas. ¿Tienes secreción amarilla o verde?',
      'El ojo rojo puede ser conjuntivitis 🔴 Hay 3 tipos: viral (la más común y contagiosa), bacteriana (secreción amarilla/verde), y alérgica (mucha picazón). Para todas: compresas frías alivian, lágrimas artificiales ayudan. Si es bacteriana, necesitas antibiótico del médico. Lávate las manos constantemente y aíslate un poco. ¿Tienes picazón o ardor?',
      'Conjuntivitis = inflamación de la conjuntiva 💙 Causas: virus (más común), bacterias, alergias. Señales: ojo muy rojo, lagrimeo excesivo, secreción, molestia. Tratamiento depende del tipo. Mientras tanto: compresas frías, lágrimas artificiales, higiene estricta. Si empeora o dura más de 3 días, ve al oftalmólogo. ¿Ambos ojos están afectados?'
    ]
  },
  blefaritis: {
    patron: /blefaritis|inflamaci[oó]n (del|de los) p[aá]rpado(s)?|p[aá]rpado(s)? (rojo(s)?|hinchado(s)?)|costras en (las )?pesta[ñn]as|p[aá]rpado(s)? irritado(s)?/i,
    respuestas: [
      'La blefaritis es inflamación crónica de los bordes de los párpados 😔 Síntomas: párpados rojos e hinchados, costras en las pestañas, picazón, ardor, pérdida de pestañas. Tratamiento diario: limpia tus párpados con champú suave diluido, compresas tibias 2 veces al día, masaje suave de párpados, lágrimas artificiales. Evita maquillaje durante el tratamiento. Es crónica pero manejable. ¿Tienes costras en las mañanas?',
      'Blefaritis = párpados inflamados constantemente 💙 Es molesta pero tratable. Rutina de limpieza: usa toallitas especiales para párpados o champú de bebé diluido, aplica compresas tibias, masajea suavemente. Si es severa, el médico puede recetar antibiótico tópico. La higiene diaria es clave. ¿Sientes ardor o picazón?',
      'La inflamación crónica de párpados (blefaritis) requiere cuidado constante 🧼👁️ Causas: bacterias, glándulas sebáceas bloqueadas, caspa. Tratamiento: limpieza diaria de párpados con productos especiales, compresas tibias, evitar maquillaje. Puede mejorar mucho con higiene adecuada. ¿Notas que pierdes pestañas?'
    ]
  },
  fatiga_visual: {
    patron: /fatiga (visual|ocular)|ojos cansados|vista cansada|cansancio (en (los )?ojos|ocular)|ojos pesados|dolor (de ojos|ocular) (por|de) (pantalla|computadora|celular)|vista borrosa (por|de) pantalla/i,
    respuestas: [
      'Te comprendo perfectamente, amig@ 😔 La fatiga visual digital es el mal de nuestra era, pero tiene solución y vamos a recuperarte. Como especialista te digo: es muy común y completamente reversible 💻👁️ Los síntomas típicos que probablemente sientes son: ojos cansados, visión borrosa temporal, dolor de cabeza, ojos secos, y esa sensación de pesadez en los párpados. Pero escucha esto: la solución MÁGICA existe y es la Regla 20-20-20 → Cada 20 minutos, mira algo a 20 pies (6 metros) por 20 segundos 💚 También: ajusta brillo de pantalla al nivel de luz ambiental, usa filtro de luz azul, parpadea conscientemente (normalmente parpadeamos 66% menos frente a pantallas), lágrimas artificiales, y posiciona tu pantalla a 50-60 cm. Con estos cambios simples, mejorarás en DÍAS. Confía en mí, vamos a recuperarte 💪',
      'Sé lo agotador que es, amig@ 💙 Pero tranquilo, vamos a recuperar tus ojitos juntos. Como especialista te comento: ojos cansados por pantallas = fatiga visual digital, súper común y 100% tratable 📱👁️ Lo que está pasando es que tus ojos están constantemente enfocados de cerca, parpadeamos menos, y la luz azul afecta. Pero hay ESPERANZA: el tratamiento es efectivo 💚 Aplica la regla 20-20-20 religiosamente (cada 20 min, mira 6 metros por 20 seg), ajusta el brillo y contraste de tu pantalla, usa lentes con filtro de luz azul si es necesario, parpadea más conscientemente, lágrimas artificiales cada 2-3 horas, y toma descansos cada hora. La mayoría mejora en 1 semana. Estoy seguro que vamos a recuperarte completamente 💪',
      'Lamento que estés pasando por esto 😔 Pero hay buenas noticias: la vista cansada por pantallas es 100% prevenible y reversible, amig@ 💻👁️ Como especialista te explico las causas: fijación prolongada (tus ojos no descansan), luz azul (altera ritmo circadiano), parpadeamos menos (ojo seco), mala postura (tensión). Soluciones que FUNCIONAN y verás resultados rápido 💚: regla 20-20-20 (cada 20 min, 20 seg, 20 pies de distancia), ajusta iluminación (evita reflejos), usa gotas lubricantes, filtro de luz azul en dispositivos, y descansa. Tu pantalla debe estar a la altura de tus ojos o ligeramente abajo. Con constancia, verás mejoría notable en días. Confía en el proceso, vamos a recuperarte 💪💙'
    ],
    tratamiento: [
      '¡Perfecto! Me alegra que quieras saber cómo proteger tus ojitos 💚 Como especialista te doy el PLAN COMPLETO que SÍ funciona 💻👁️ TRATAMIENTO INMEDIATO: 1) Regla 20-20-20 (cada 20 min, mira 6 metros por 20 seg) - configura alarma en tu teléfono, 2) Ajusta brillo de pantalla = nivel de luz ambiental, 3) Parpadea conscientemente 10 veces cada 20 min, 4) Lágrimas artificiales cada 2-3 horas. ERGONOMÍA: Pantalla a 50-60 cm de distancia, ligeramente abajo de nivel de ojos, sin reflejos de luz. PROTECCIÓN: Filtro de luz azul en lentes o modo nocturno en dispositivos, especialmente después de 6pm. DESCANSOS: Cada hora, levántate 5 min. Con estos cambios, el 90% mejora en 3-7 días. ¿Listo para empezar? 💪',
      'Me encanta que preguntes, amig@ 💙 Eso significa que estás comprometido con tu salud visual. Como especialista te doy el PROTOCOLO COMPLETO 💻✨ PASO A PASO: 1) REGLA 20-20-20: Cada 20 minutos de pantalla, descansa 20 segundos mirando algo a 6 metros. Esto relaja músculos oculares. 2) PARPADEO CONSCIENTE: Parpadea completo 10 veces cada 20 min. Esto lubrica tus ojos. 3) LÁGRIMAS ARTIFICIALES: Aplica cada 2-3 horas si sientes sequedad. 4) ERGONOMÍA: Pantalla a 50-60 cm, centro a nivel de ojos o ligeramente abajo. 5) ILUMINACIÓN: Luz ambiental suave, sin reflejos en pantalla. 6) FILTRO LUZ AZUL: Usa lentes o activa modo nocturno. 7) DESCANSOS: Cada hora, 5 min de descanso total. RESULTADOS: en 3-5 días sentirás alivio significativo. Confía en el proceso 💚💪',
      'Excelente pregunta, amig@ 💚 La fatiga visual se previene y trata fácilmente. Como especialista te doy el PLAN DEFINITIVO 👁️💻 PREVENCIÓN DIARIA: Regla 20-20-20 sin excepción (cada 20 min, 20 seg, 6 metros). Parpadeo consciente (10 veces cada 20 min). Lágrimas artificiales preventivas. CONFIGURACIÓN ÓPTIMA: Pantalla a 50-60 cm, ligeramente abajo de tus ojos. Brillo = luz ambiental. Contraste cómodo. Tamaño de letra grande. PROTECCIÓN: Filtro luz azul (lentes o software). Modo nocturno después de 6pm. Lentes de descanso si trabajas muchas horas. HÁBITOS: Descansos cada hora. Ejercicios oculares (mirar lejos, cerca, arriba, abajo). Dormir 7-8 horas. IMPORTANTE: si no mejoras en 1 semana, consulta oftalmólogo. Pero el 95% mejora con estos cuidados. ¡Vamos a recuperarte! 💪💙'
    ]
  },
};

// ========== PARTE 2: PREVENCIÓN Y CUIDADO DIARIO ==========
const prevencionCuidado = {
  proteccion_solar: {
    patron: /protecci[oó]n solar|rayos uv|sol (en|para) (los )?ojos|lentes (de sol|oscuros)|da[ñn]o solar/i,
    respuestas: [
      '¡La protección solar para tus ojos es VITAL! ☀️👁️ Los rayos UV pueden causar cataratas, degeneración macular y cáncer ocular. SIEMPRE usa lentes con protección UV 100%, usa sombrero en días soleados, evita exposición directa al sol entre 10am-4pm. Tus ojos no tienen protector solar natural, ¡cuídalos! ¿Usas lentes de sol regularmente?',
      'El sol daña tus ojos permanentemente si no te proteges ☀️😎 Rayos UV causan problemas graves a largo plazo. Protección: lentes con UV 100% (no solo oscuros, deben tener filtro UV), sombrero de ala ancha, evitar sol directo en horas pico. Incluso en días nublados hay UV. ¿Sabías que los lentes baratos sin filtro UV son peores que no usar nada?',
      'Proteger tus ojos del sol es tan importante como proteger tu piel 💙☀️ Daños por UV: cataratas prematuras, pterigión, degeneración macular. Solución: lentes certificados con UV 400 o 100%, sombrero, sombra. Los niños son más vulnerables, protégelos desde pequeños. ¿Pasas mucho tiempo al aire libre?'
    ]
  },
  regla_20_20_20: {
    patron: /regla (20|veinte)|20-20-20|descanso (de|para) (la )?vista|pausas (para|de) (los )?ojos|c[oó]mo descansar (la vista|los ojos)/i,
    respuestas: [
      '¡La REGLA 20-20-20 es tu mejor amiga! ⏰👁️💚 Es súper simple: Cada 20 MINUTOS de pantalla → Descansa 20 SEGUNDOS → Mira algo a 20 PIES (6 metros) de distancia. Esto relaja los músculos oculares y previene fatiga visual. Configura una alarma en tu teléfono para recordarlo. ¡Tus ojos te lo agradecerán! ¿La conocías?',
      'La regla 20-20-20 salva tus ojos de la fatiga digital 💻✨ Funciona así: cada 20 min trabajando, toma 20 seg para mirar algo lejano (20 pies = 6 metros). Esto permite que tus ojos se relajen del enfoque cercano constante. Es simple pero SÚPER efectiva. Combínala con parpadear conscientemente. ¿Puedes implementarla en tu rutina?',
      '20-20-20 = La fórmula mágica contra ojos cansados 🎯👁️ Cada 20 minutos de pantalla, descansa 20 segundos mirando algo a 6 metros (20 pies). ¿Por qué funciona? Tus ojos están constantemente enfocados de cerca, esto los relaja. Bonus: parpadea 10 veces durante esos 20 segundos. ¿Trabajas frente a pantallas muchas horas?'
    ]
  },
  higiene_ocular: {
    patron: /higiene (ocular|de (los )?ojos)|limpiar (los )?ojos|lavarse (los )?ojos|c[oó]mo limpiar (los )?ojos|cuidado (de|para) (los )?ojos/i,
    respuestas: [
      'La higiene ocular previene el 80% de infecciones 🧼👁️ Reglas de oro: SIEMPRE lávate las manos antes de tocar tus ojos, no compartas toallas ni maquillaje, limpia tus lentes regularmente, retira el maquillaje antes de dormir, no uses agua de grifo para limpiar lentes de contacto. La prevención es más fácil que curar. ¿Usas lentes de contacto?',
      'Cuidar la higiene de tus ojos es fundamental 💙🧼 Tips: manos limpias siempre, no frotar con fuerza, toallas personales, cambiar fundas de almohada regularmente, no compartir maquillaje, limpiar lentes con solución adecuada. Las infecciones oculares son evitables con buenos hábitos. ¿Sabías que tus manos tocan tus ojos más de lo que crees?',
      'Higiene = prevención de infecciones oculares 👁️✨ Básicos: lavado de manos frecuente, no tocarse los ojos con manos sucias, productos de higiene personal (no compartir), limpieza de lentes, retirar maquillaje. Si tienes blefaritis o infecciones recurrentes, la higiene es aún más crítica. ¿Tienes alguna condición ocular crónica?'
    ]
  },
  hidratacion: {
    patron: /hidratar (los )?ojos|l[aá]grimas artificiales|gotas (para|de) (los )?ojos|lubricante ocular|ojos secos|resequedad/i,
    respuestas: [
      'Las lágrimas artificiales son amigas de tus ojos 💧👁️ Si usas pantallas mucho, úsalas 3-4 veces al día. IMPORTANTE: si las usas más de 4 veces al día, elige SIN conservantes (los conservantes pueden irritar). También: parpadea conscientemente, bebe 2L de agua diaria, humidificador en ambientes secos. ¿Sientes tus ojos secos frecuentemente?',
      'Mantener tus ojos hidratados es clave 💙💧 Lágrimas artificiales: elige sin conservantes si usas frecuentemente, aplica cuando sientas sequedad, también antes de dormir si despiertas con ojos secos. Complementa con: beber agua, Omega-3, parpadear más. La hidratación interna también afecta tus ojos. ¿Bebes suficiente agua al día?',
      'Lubricación ocular = confort y salud 👁️✨ Tipos de lágrimas artificiales: líquidas (uso frecuente), geles (más duraderos, antes de dormir), sin conservantes (uso intensivo). Úsalas preventivamente, no solo cuando sientas molestia. Combina con buena hidratación general. ¿Trabajas en ambientes con aire acondicionado?'
    ]
  },
  descanso_sueno: {
    patron: /dormir|sue[ñn]o|descanso (nocturno|de (los )?ojos)|horas (de )?sue[ñn]o|ojos cansados (por|de) (no|poco) dormir/i,
    respuestas: [
      'Tus ojos se recuperan mientras duermes 😴💙 Necesitas 7-8 horas de sueño de calidad. Durante el sueño, tus ojos se lubrican, reparan y descansan completamente. Tips: evita pantallas 1 hora antes de dormir (luz azul afecta el sueño), habitación oscura, máscara de dormir si hay luz. Dormir poco causa ojos rojos, secos y visión borrosa. ¿Duermes bien?',
      'El sueño es medicina para tus ojos 💤👁️ Mínimo 7 horas, ideal 8. Mientras duermes: tus ojos se lubrican naturalmente, se reparan tejidos, se eliminan toxinas. Falta de sueño = ojos rojos, secos, ojeras, visión borrosa. Mejora tu sueño: rutina constante, sin pantallas antes de dormir, oscuridad total. ¿Cuántas horas duermes normalmente?',
      'Dormir bien = ojos saludables 😴✨ 7-8 horas son esenciales. Durante el sueño profundo, tus ojos se regeneran. Problemas por falta de sueño: ojo seco, espasmos oculares, visión borrosa, mayor riesgo de infecciones. Mejora: horario regular, ambiente oscuro, sin luz azul 1 hora antes. ¿Tienes problemas para dormir?'
    ]
  }
};

// ========== PARTE 3: ALIMENTOS Y NUTRICIÓN ==========
const alimentosNutricion = {
  alimentos_saludables: {
    patron: /alimentos (para|buenos para|que ayudan a) (los |mis )?ojos|qu[eé] (comer|alimentos?)|dieta (para|de) (los )?ojos|vitaminas (para|de) (los )?ojos|nutrici[oó]n (ocular|para (los )?ojos)|qu[eé] (debo|puedo) comer/i,
    respuestas: [
      '¡Excelente pregunta, amig@! 💚 Me alegra que pienses en nutrición, es fundamental para la salud ocular. Como especialista te recomiendo estos alimentos TOP que SÍ funcionan 🥕👁️: ZANAHORIAS Y CAMOTE (vitamina A para visión nocturna - súper importante), VEGETALES VERDES como espinaca y kale (luteína y zeaxantina protegen la retina contra degeneración), PESCADO GRASO como salmón y atún (Omega-3 previene ojo seco y mejora lágrimas), HUEVOS (zinc y antioxidantes), CÍTRICOS como naranja y limón (vitamina C contra cataratas), FRUTOS SECOS como almendras y nueces (vitamina E). Incorpora 2-3 de estos diariamente y verás beneficios en 4-6 semanas. La nutrición es prevención 💪 ¿Cuál de estos comes regularmente?',
      'Me alegra que pienses en nutrición, amig@ 💙 Tus ojitos te lo agradecerán. Como especialista te digo: estos alimentos son medicina natural y prevención real 🍊🥬🐟 ZANAHORIAS Y CAMOTE (betacaroteno = vitamina A), VEGETALES DE HOJA VERDE (protegen contra degeneración macular - la principal causa de ceguera), SALMÓN Y ATÚN (Omega-3 mejora calidad de lágrimas), HUEVOS (luteína para retina), NARANJAS Y FRESAS (vitamina C antioxidante), ALMENDRAS Y NUECES (vitamina E protectora). Estos nutrientes previenen cataratas, degeneración macular y ojo seco. Una dieta rica en estos reduce riesgo de problemas oculares hasta 25%. ¿Te gustaría saber más sobre algún nutriente específico? 💚',
      '¡Perfecto, amig@! La nutrición es prevención y medicina 👁️🥗 Como especialista te comento: una dieta rica en estos nutrientes reduce el riesgo de problemas oculares hasta 25% - ¡es increíble! Te recomiendo: VITAMINA A (zanahorias, camote, mango - para visión nocturna), VITAMINA C (cítricos, pimientos, fresas - antioxidante poderoso), VITAMINA E (frutos secos, aguacate - protege células), OMEGA-3 (pescado graso, semillas de chía - antiinflamatorio), LUTEÍNA Y ZEAXANTINA (espinaca, kale, brócoli - protegen retina), ZINC (huevos, carne, legumbres - salud general del ojo). Intenta incluir al menos 3 de estos grupos diariamente. Con constancia, en 4-6 semanas notarás diferencia. ¿Llevas una dieta balanceada actualmente? 💚'
    ],
    tratamiento: [
      '¡Me encanta que quieras saber más sobre nutrición ocular! 💚 Como especialista te doy el PLAN NUTRICIONAL COMPLETO 🥕👁️ DIARIO: Desayuno con cítricos (naranja, mandarina - vitamina C). Almuerzo con vegetales verdes (espinaca, kale, brócoli - luteína). Cena con proteína (huevos, pescado - zinc y Omega-3). SNACKS: Zanahorias, almendras, nueces (vitaminas A y E). PESCADO: 2-3 veces por semana (salmón, atún, sardinas - Omega-3). SUPLEMENTOS: Si no comes pescado, considera Omega-3 1000mg diarios. EVITAR: Exceso de azúcar (daña vasos sanguíneos de retina), grasas trans, alcohol en exceso. HIDRATACIÓN: 2L agua diaria. RESULTADOS: en 4-6 semanas notarás mejoría en sequedad ocular, en 3-6 meses protección contra degeneración. ¡La nutrición es inversión en tu visión! 💪',
      'Perfecto, amig@ 💙 Te doy el PROTOCOLO NUTRICIONAL que recomiendo a mis pacientes 🥗👁️ DESAYUNO: Smoothie con espinaca, naranja, fresas (vitaminas A, C, luteína). Huevos revueltos (zinc, luteína). ALMUERZO: Ensalada verde con zanahoria, pimientos, nueces (vitaminas A, C, E). Salmón o atún 2-3 veces/semana (Omega-3). CENA: Vegetales al vapor (brócoli, kale), proteína magra. Camote horneado (betacaroteno). SNACKS: Almendras, nueces, arándanos (antioxidantes). SUPLEMENTACIÓN: Omega-3 si no comes pescado. Multivitamínico con luteína y zeaxantina. IMPORTANTE: la nutrición no es mágica instantánea, pero en 4-6 semanas verás beneficios reales. Previene cataratas, degeneración macular, ojo seco. ¡Invierte en tu visión! 💚💪',
      'Excelente, amig@ 💚 Como especialista te doy la GUÍA NUTRICIONAL DEFINITIVA para ojitos saludables 👁️🥕 ALIMENTOS ESTRELLA: Zanahorias (visión nocturna), Espinaca (protección retinal), Salmón (antiinflamatorio), Huevos (antioxidantes), Naranjas (vitamina C), Almendras (vitamina E). FRECUENCIA: Vegetales verdes DIARIOS. Pescado graso 2-3 veces/semana. Frutos secos como snack diario. Cítricos en desayuno. PREPARACIÓN: Vegetales al vapor (conservan nutrientes). Pescado a la plancha. Ensaladas frescas. SUPLEMENTOS: Omega-3 1000mg si no comes pescado. Luteína 10mg + Zeaxantina 2mg diarios. EVITAR: Azúcar excesiva, grasas trans, comida procesada. BENEFICIOS: Prevención de cataratas 25%, degeneración macular 30%, ojo seco 40%. ¡La nutrición es medicina preventiva! 💪💙'
    ]
  },
  omega3: {
    patron: /omega[ -]?3|pescado (para|de) (los )?ojos|aceite de pescado|[aá]cidos grasos/i,
    respuestas: [
      'Omega-3 es SÚPER importante para tus ojos 🐟💙 Beneficios: previene ojo seco, mejora calidad de lágrimas, protege la retina, reduce inflamación. Fuentes: salmón, atún, sardinas, semillas de chía, nueces. Si no comes pescado, considera suplementos de aceite de pescado. Dosis: 2-3 porciones de pescado graso por semana. ¿Comes pescado regularmente?',
      'Los ácidos grasos Omega-3 son medicina para tus ojos 👁️🐟 Ayudan con: ojo seco crónico, inflamación ocular, salud de la retina, prevención de degeneración macular. Mejores fuentes: salmón salvaje, sardinas, caballa, semillas de linaza. Si tienes ojo seco severo, suplementos pueden ayudar mucho. ¿Tienes síntomas de ojo seco?',
      'Omega-3 = lubricación natural para tus ojos 💧🐟 Mejora la calidad de tus lágrimas, reduce evaporación, antiinflamatorio natural. Consume: pescado graso 2-3 veces/semana, o suplementos de 1000mg EPA+DHA diarios. Resultados en 4-6 semanas. Especialmente útil para ojo seco. ¿Sabías que el 70% de personas con ojo seco tienen deficiencia de Omega-3?'
    ]
  },
  vitamina_a: {
    patron: /vitamina a|betacaroteno|zanahoria(s)?|camote|visi[oó]n nocturna/i,
    respuestas: [
      'Vitamina A es esencial para la visión 🥕👁️ Beneficios: visión nocturna, previene ceguera nocturna, protege la córnea, mantiene células oculares saludables. Fuentes: zanahorias, camote, espinaca, hígado, mango. Deficiencia causa: ceguera nocturna, ojo seco severo, mayor riesgo de infecciones. ¿Tienes problemas para ver en la oscuridad?',
      'La vitamina A (betacaroteno) es vital para tus ojos 🥕✨ Función: forma rodopsina (pigmento para visión nocturna), mantiene córnea saludable, previene xeroftalmía. Alimentos: zanahorias, camote, calabaza, vegetales de hoja verde. Dosis diaria: 700-900 mcg. Deficiencia es rara pero grave. ¿Comes suficientes vegetales naranjas y verdes?',
      'Betacaroteno (vitamina A) = visión nocturna 🌙🥕 Tu cuerpo lo convierte en vitamina A. Beneficios: adaptación a la oscuridad, salud de la retina, prevención de infecciones. Fuentes TOP: zanahoria, camote, espinaca, mango, melón. Un camote mediano = 400% de tu necesidad diaria. ¿Notas dificultad para adaptarte a la oscuridad?'
    ]
  }
};

// ========== PARTE 4: SÍNTOMAS Y SEÑALES DE ALERTA ==========
const sintomasAlertas = {
  vision_borrosa: {
    patron: /visi[oó]n borrosa|veo borroso|vista borrosa|no veo bien|visi[oó]n desenfocada/i,
    respuestas: [
      'Entiendo tu preocupación 💙 Pero tranquilo, la mayoría de casos tienen solución. Como especialista te explico: la visión borrosa puede tener muchas causas 👁️💭 Temporal (reversible): fatiga visual, ojo seco, falta de sueño. Persistente (requiere atención): miopía, hipermetropía, astigmatismo, cataratas, diabetes. Si es SÚBITA o con dolor, ve al médico INMEDIATAMENTE. Si es gradual, agenda examen oftalmológico pronto. Vamos a identificar la causa. ¿Es constante o solo a veces? ¿Cuándo empezó?',
      'Lamento que no veas bien 😔 Pero hay esperanza, la mayoría de casos se corrigen. Como especialista te comento: ver borroso no es normal pero es muy común  Causas frecuentes: necesitas lentes (muy común), ojo seco, fatiga visual, cataratas (si eres mayor), diabetes (afecta la retina). URGENTE si: visión borrosa súbita, con dolor, con destellos de luz, con pérdida de visión. Si es gradual, necesitas examen de la vista. La buena noticia: la mayoría se resuelve con lentes o tratamiento simple. ¿Usas lentes o nunca has ido al oftalmólogo?',
      'Sé que es frustrante 💙 Pero vamos a resolver esto. Como especialista te digo: visión desenfocada = señal de que algo necesita atención, pero generalmente tiene solución 👁️ Temporal (mejora solo): cansancio, pantallas, ojo seco (usa lágrimas artificiales). Persistente (necesita tratamiento): error refractivo (necesitas lentes - muy común), cataratas, problemas de retina. Si aparece de repente, es EMERGENCIA. Si es progresivo, agenda cita. La mayoría mejora con lentes o tratamiento adecuado. ¿Mejora al parpadear o sigue borroso?'
    ]
  },
  dolor_ocular: {
    patron: /dolor (de|en|ocular) (los )?ojo(s)?|me duele(n)? (el|los) ojo(s)?|ojo(s)? adolorido(s)?/i,
    respuestas: [
      'Lamento que tengas dolor 💙 Como especialista te digo: el dolor ocular NO debe ignorarse, pero no te alarmes 🚨👁️ Dolor leve: puede ser fatiga, ojo seco, tensión (manejable). Dolor intenso: puede ser glaucoma agudo, úlcera corneal, infección grave (requiere atención). URGENCIA si: dolor intenso, con visión borrosa, con náuseas, con enrojecimiento severo. Dolor leve: lágrimas artificiales, descanso, compresas frías. Si persiste más de 24 horas, consulta médico. Vamos a identificar la causa. ¿Qué tan intenso es el dolor del 1-10?',
      'Entiendo que el dolor es preocupante 😔 Pero tranquilo, vamos a orientarte. Como especialista te comento: el dolor en los ojos requiere evaluación según intensidad 💙 Leve: fatiga visual (descansa), ojo seco (lágrimas artificiales), tensión (masaje suave). Moderado-Severo: puede ser glaucoma, infección, trauma. VE AL MÉDICO si: dolor intenso, pérdida de visión, sensibilidad extrema a la luz, vómitos. La mayoría de dolores leves se resuelven con descanso. ¿El dolor es constante o solo al mover los ojos?',
      'Sé que es molesto 💙 Pero vamos a encontrar la causa. Como especialista te digo: los ojos no deben doler normalmente, así que hay que investigar 👁️⚠️ Causas comunes: fatiga visual (muy común y benigna), ojo seco, migraña ocular, glaucoma (grave), infección. Dolor + visión borrosa + náuseas = EMERGENCIA (posible glaucoma agudo). Dolor leve persistente = consulta oftalmológica pronto. Nunca ignores dolor ocular, pero la mayoría tiene solución. ¿Tienes otros síntomas como enrojecimiento o lagrimeo?'
    ]
  },
  enrojecimiento: {
    patron: /ojo(s)? rojo(s)?|enrojecimiento|ojos irritados|ojos inyectados/i,
    respuestas: [
      'Ojos rojos = señal de irritación o infección 🔴👁️ Causas leves: falta de sueño, ojo seco, alergias, irritación. Causas serias: conjuntivitis, uveítis, glaucoma. Tratamiento leve: lágrimas artificiales, compresas frías, descanso. VE AL MÉDICO si: dolor intenso, visión borrosa, secreción, sensibilidad a la luz, no mejora en 24 horas. ¿Tienes secreción o solo enrojecimiento?',
      'Enrojecimiento ocular tiene muchas causas 💙🔴 Común: ojo seco, alergias, falta de sueño, irritación por humo/viento. Serio: infección (conjuntivitis), inflamación (uveítis), glaucoma. Alivio: lágrimas artificiales, compresas frías, evitar frotarse. Si persiste, empeora, o hay dolor/secreción, consulta médico. ¿Ambos ojos o solo uno?',
      'Ojos inyectados de sangre = vasos sanguíneos dilatados 👁️ Causas: cansancio, ojo seco, alergias, alcohol, marihuana, infección. Tratamiento: descanso, lágrimas artificiales, compresas frías. ALERTA si: dolor, visión afectada, secreción, fotofobia (sensibilidad a luz). Enrojecimiento simple mejora en 1-2 días. ¿Hay picazón o ardor?'
    ]
  },
  moscas_volantes: {
    patron: /moscas volantes|puntos (negros|flotantes)|manchas (en la vista|flotantes)|destellos (de luz)?|rel[aá]mpagos/i,
    respuestas: [
      'Moscas volantes (miodesopsias) son comunes 🦟👁️ Son sombras de partículas en el vítreo. Normal: pocas, estables, sin destellos. URGENCIA: aumento súbito, con destellos de luz, con pérdida de visión lateral (puede ser desprendimiento de retina). Si son nuevas o aumentan, ve al oftalmólogo EN 24 HORAS. Si son de siempre y estables, generalmente benignas. ¿Son nuevas o las has tenido siempre?',
      'Puntos flotantes son sombras en tu campo visual 💭👁️ Causas: envejecimiento del vítreo (normal), desprendimiento vítreo (común después de 50 años), desprendimiento de retina (GRAVE). EMERGENCIA si: muchas nuevas de repente, destellos de luz, cortina oscura en visión. Si son pocas y estables, observa. ¿Ves destellos de luz también?',
      'Destellos y moscas volantes pueden ser serios ⚡👁️ Moscas solas: generalmente benignas. Moscas + destellos + pérdida de visión = POSIBLE DESPRENDIMIENTO DE RETINA (emergencia). Destellos solos: migraña ocular o desprendimiento vítreo. Si aparecen súbitamente, ve al oftalmólogo URGENTE. El desprendimiento de retina es tratable si se detecta a tiempo. ¿Cuándo empezaste a notarlos?'
    ]
  },
  sensibilidad_luz: {
    patron: /sensibilidad (a la )?luz|fotofobia|luz (me )?molesta|ojos sensibles (a la luz)?/i,
    respuestas: [
      'Sensibilidad a la luz (fotofobia) tiene varias causas 💡😣 Leve: migraña, ojo seco, fatiga. Moderada-Severa: infección (conjuntivitis, uveítis), abrasión corneal, glaucoma agudo. Alivio temporal: lentes oscuros, ambientes con luz tenue. Si es severa, con dolor o visión borrosa, ve al médico. ¿Es nueva o siempre has sido sensible?',
      'Fotofobia = intolerancia a la luz 👁️💡 Causas: migraña (muy común), infecciones oculares, inflamación (uveítis), abrasión corneal, dilatación pupilar, albinismo. Manejo: lentes con filtro, evitar luz brillante. Si aparece súbitamente con dolor, es URGENTE. Si es crónica, puede ser condición neurológica. ¿Tienes dolores de cabeza también?',
      'La luz no debería molestar tanto 😔💙 Sensibilidad leve: normal con migrañas, resaca, fatiga. Sensibilidad severa: infección, inflamación, trauma ocular. Protección: lentes polarizados, sombreros, ambientes con luz controlada. Si es nueva e intensa, consulta oftalmólogo. Puede indicar problema serio. ¿Solo con luz brillante o con cualquier luz?'
    ]
  }
};

// ========== PARTE 5: EXÁMENES Y REVISIONES ==========
const examenesRevisiones = {
  cuando_ir_oftalmologo: {
    patron: /cu[aá]ndo (ir|visitar) (al )?oftalm[oó]logo|cada cu[aá]nto (revisar|chequear) (los )?ojos|frecuencia (de )?ex[aá]menes|revisi[oó]n (ocular|de (los )?ojos)/i,
    respuestas: [
      'Frecuencia de exámenes oftalmológicos 👨‍⚕️👁️ 20-39 años: cada 2-3 años (si no hay problemas). 40-64 años: cada 2 años. 65+ años: ANUALMENTE. Con diabetes, glaucoma, o antecedentes familiares: ANUALMENTE sin importar edad. Niños: primera revisión a los 6 meses, luego a los 3 años, antes de entrar a la escuela, y cada 2 años. ¿Cuándo fue tu último examen?',
      'Visita al oftalmólogo según tu edad y riesgo 💙👁️ Adultos jóvenes sin problemas: cada 2-3 años. Mayores de 40: cada 2 años (riesgo de glaucoma aumenta). Mayores de 60: anualmente. Con factores de riesgo (diabetes, presión alta, antecedentes familiares): anualmente. Síntomas nuevos: INMEDIATAMENTE. La prevención salva tu visión. ¿Tienes factores de riesgo?',
      'Exámenes oculares regulares detectan problemas temprano 🔍👁️ Frecuencia recomendada: niños (6 meses, 3 años, antes de escuela, cada 2 años), adultos 20-40 (cada 2-3 años), 40-65 (cada 2 años), 65+ (anual). Diabéticos: ANUAL obligatorio. Glaucoma es silencioso, solo se detecta en examen. ¿Tienes diabetes o presión alta?'
    ]
  },
  tipos_examenes: {
    patron: /tipos (de )?ex[aá]menes|qu[eé] ex[aá]menes|pruebas (oculares|oftalmol[oó]gicas)|examen (de la vista|ocular|oftalmol[oó]gico)/i,
    respuestas: [
      'Exámenes oftalmológicos principales 🔬👁️ 1) Agudeza visual (leer letras), 2) Refracción (graduación para lentes), 3) Tonometría (presión ocular - glaucoma), 4) Fondo de ojo (retina, nervio óptico), 5) Campo visual (visión periférica), 6) Biomicroscopía (lámpara de hendidura). Un examen completo incluye todos. ¿Te han hecho alguno de estos?',
      'Pruebas oftalmológicas comunes 👨‍⚕️ Básicas: agudeza visual, refracción (lentes), presión ocular. Especializadas: campo visual (glaucoma), OCT (retina en 3D), angiografía (vasos sanguíneos), paquimetría (grosor corneal). Diabéticos necesitan: fondo de ojo con dilatación anualmente. Cada examen detecta problemas específicos. ¿Tienes alguna condición que requiera seguimiento?',
      'Exámenes según tu necesidad 🔍 Rutina: agudeza visual, presión ocular, fondo de ojo. Graduación de lentes: refracción, queratometría. Glaucoma: tonometría, campo visual, OCT nervio óptico. Diabetes: retinografía, fondo de ojo dilatado. Cataratas: biomicroscopía. Un examen completo evalúa todo. ¿Qué síntomas tienes?'
    ]
  }
};

// ========== PARTE 6: TECNOLOGÍA Y PANTALLAS ==========
const tecnologiaPantallas = {
  luz_azul: {
    patron: /luz azul|filtro (de )?luz azul|da[ñn]o (de|por) (la )?luz azul|lentes (con|de) filtro/i,
    respuestas: [
      'La luz azul de pantallas afecta tus ojos y sueño 💻💙 Efectos: fatiga visual, alteración del ritmo circadiano (dificulta dormir), posible daño retinal a largo plazo. Protección: filtros de luz azul en lentes, modo nocturno en dispositivos, apps como f.lux, evitar pantallas 1-2 horas antes de dormir. Los filtros ayudan pero no son mágicos. ¿Usas pantallas de noche?',
      'Luz azul = enemigo de tus ojos y sueño 📱😴 Fuentes: celulares, computadoras, tablets, TV LED. Problemas: suprime melatonina (hormona del sueño), fatiga ocular, posible daño acumulativo. Soluciones: lentes con filtro, modo nocturno (reduce azul, aumenta amarillo), apps bloqueadoras, limitar uso nocturno. ¿Tienes problemas para dormir?',
      'Filtros de luz azul: ¿valen la pena? 💡👁️ SÍ ayudan con: fatiga visual, calidad de sueño. NO previenen: miopía, daño si ya hay enfermedad. Opciones: lentes con filtro (mejor), protectores de pantalla, configuración de dispositivos. Combina con regla 20-20-20. No son cura mágica pero sí útiles. ¿Trabajas de noche con pantallas?'
    ]
  },
  ergonomia_visual: {
    patron: /ergonomia|postura|distancia (de la )?pantalla|altura (de la )?pantalla|c[oó]mo sentarse/i,
    respuestas: [
      'Ergonomía visual = menos fatiga 💻✨ Distancia: 50-70 cm de la pantalla (largo de tu brazo). Altura: parte superior de la pantalla a nivel de ojos o ligeramente abajo (10-15°). Iluminación: sin reflejos en pantalla, luz ambiental suave. Postura: espalda recta, pies en el suelo, antebrazos paralelos al suelo. Ajusta tu espacio de trabajo. ¿Trabajas muchas horas en computadora?',
      'Configura tu estación de trabajo correctamente 🖥️👁️ Pantalla: 50-60 cm de distancia, centro a la altura de tus ojos o un poco abajo. Silla: altura que permita pies en el suelo, espalda con soporte lumbar. Iluminación: evita reflejos, luz indirecta. Teclado: muñecas rectas. Esto previene fatiga visual y problemas posturales. ¿Tienes dolores de cuello o espalda también?',
      'Posición correcta previene fatiga visual 💙💻 Reglas: pantalla a 50-70 cm, ligeramente abajo de nivel de ojos, sin reflejos de luz. Parpadea conscientemente (normalmente parpadeamos 66% menos frente a pantallas). Descansa cada 20 min. Ajusta brillo y contraste. Tu setup afecta tus ojos más de lo que crees. ¿Puedes ajustar tu monitor?'
    ]
  }
};

// ========== PARTE 7: CONDICIONES ESPECÍFICAS ==========
const condicionesEspecificas = {
  diabetes_ojos: {
    patron: /diabetes|diab[eé]tico|retinopatía diab[eé]tica|az[uú]car (en la sangre|alta)|glucosa/i,
    respuestas: [
      'Diabetes y tus ojos: relación crítica 🩸👁️ La diabetes daña los vasos sanguíneos de la retina (retinopatía diabética) - principal causa de ceguera en adultos. ESENCIAL: examen oftalmológico ANUAL con dilatación, control estricto de glucosa, presión arterial controlada. Síntomas tardíos: visión borrosa, manchas, pérdida de visión. Detección temprana = tratamiento efectivo. ¿Tienes diabetes? ¿Cuándo fue tu último examen de fondo de ojo?',
      'Retinopatía diabética es prevenible 💙🩸 Si tienes diabetes, tus ojos están en riesgo. Daño: vasos sanguíneos de retina se debilitan, sangran, causan cicatrices. Prevención: control de glucosa (HbA1c \u003c7%), examen anual obligatorio, control de presión arterial. Tratamiento existe: láser, inyecciones, cirugía. La clave es detectar ANTES de síntomas. ¿Controlas bien tu azúcar?',
      'Diabetes = enemigo silencioso de tus ojos 👁️⚠️ Complicaciones: retinopatía (daño de retina), edema macular (visión central), glaucoma, cataratas prematuras. Protección: glucosa controlada, exámenes anuales, presión arterial normal, no fumar. Muchos diabéticos pierden visión por no hacerse exámenes regulares. ¿Tienes diabetes tipo 1 o 2?'
    ]
  },
  glaucoma: {
    patron: /glaucoma|presi[oó]n (ocular|intraocular|alta) (en (los )?ojos)?|nervio [oó]ptico/i,
    respuestas: [
      'Glaucoma: el ladrón silencioso de la visión 😔👁️ Es daño del nervio óptico por presión ocular alta. SIN SÍNTOMAS hasta etapas avanzadas. Pérdida de visión es IRREVERSIBLE. Detección: examen de presión ocular + fondo de ojo. Factores de riesgo: edad \u003e60, antecedentes familiares, diabetes, miopía alta. Tratamiento: gotas diarias, láser, cirugía. Exámenes regulares SALVAN tu visión. ¿Tienes antecedentes familiares?',
      'Presión ocular alta = riesgo de glaucoma 👁️💙 Normal: 10-21 mmHg. Alta: \u003e21 mmHg (pero no todos desarrollan glaucoma). El glaucoma daña el nervio óptico gradualmente, sin dolor. Síntomas tardíos: pérdida de visión periférica (efecto túnel). Prevención: exámenes regulares después de 40 años. Tratamiento: gotas para bajar presión. ¿Te han medido la presión ocular?',
      'Nervio óptico dañado = visión perdida para siempre 😔 El glaucoma es la 2da causa de ceguera mundial. Tipos: ángulo abierto (más común, lento), ángulo cerrado (agudo, emergencia). Síntomas de glaucoma agudo: dolor intenso, náuseas, visión borrosa, halos. Crónico: sin síntomas hasta daño avanzado. Exámenes regulares son tu única defensa. ¿Tienes más de 40 años?'
    ]
  },
  cataratas: {
    patron: /catarata(s)?|opacidad|lente (opaco|nublado)|visi[oó]n nublada|velo (en (los )?ojos)?/i,
    respuestas: [
      'Cataratas: opacidad del cristalino 👁️☁️ Síntomas: visión nublada/borrosa, halos alrededor de luces, colores apagados, dificultad nocturna, necesidad de más luz para leer. Causas: envejecimiento (principal), diabetes, trauma, esteroides. Tratamiento: CIRUGÍA (único efectivo) - reemplazar cristalino opaco con lente artificial. Cirugía es segura y efectiva. ¿Tienes visión nublada?',
      'Visión como a través de un vidrio empañado = cataratas 💙 Es el envejecimiento del cristalino (lente natural). Muy común después de 60 años. Progresión lenta. Síntomas: visión borrosa gradual, sensibilidad a luz, halos, colores menos vívidos. Tratamiento: cirugía cuando afecta calidad de vida. La cirugía es ambulatoria, rápida, muy exitosa. ¿Cuántos años tienes?',
      'Cataratas son tratables 100% ✨👁️ No hay gotas ni medicamentos que las curen. SOLO cirugía. Procedimiento: 15-20 min, anestesia local, reemplazo de cristalino opaco con lente artificial. Recuperación: días. Éxito: \u003e95%. Muchas personas ven mejor que antes. No esperes a estar "ciego" para operarte. ¿Te han diagnosticado cataratas?'
    ]
  }
};

// ========== PARTE 8: EMERGENCIAS OCULARES ==========
const emergencias = {
  emergencia_general: {
    patron: /emergencia|urgencia|grave|serio|p[eé]rdida (de|de la) visi[oó]n|trauma|golpe (en (el|los) ojo(s)?)?|qu[ií]mico/i,
    respuestas: [
      '🚨 EMERGENCIAS OCULARES - VE AL MÉDICO INMEDIATAMENTE si tienes: 1) Pérdida súbita de visión, 2) Dolor ocular intenso, 3) Trauma o golpe en el ojo, 4) Químico en el ojo (lava con agua 15 min PRIMERO), 5) Destellos de luz + muchas moscas volantes, 6) Cortina oscura en visión, 7) Pupila blanca. Tiempo = visión. NO esperes. ¿Cuál de estos síntomas tienes?',
      '⚠️ SEÑALES DE ALARMA OCULAR: Pérdida de visión (súbita o gradual rápida), dolor intenso con náuseas, trauma ocular, quemadura química, objeto incrustado, sangrado dentro del ojo, pupila irregular. Estas son EMERGENCIAS. Ve a urgencias oftalmológicas o ER. No uses remedios caseros. Cada minuto cuenta. ¿Qué te pasó exactamente?',
      '🆘 CUÁNDO IR A URGENCIAS: Visión borrosa súbita, dolor severo, trauma, químico (LAVA PRIMERO 15 min), objeto extraño que no sale, sangrado ocular interno, destellos + moscas + sombra, ojo que no se mueve. NO esperes cita. Ve a emergencias. La visión perdida puede ser irreversible. ¿Necesitas ayuda ahora?'
    ]
  }
};

// ========== PARTE 9: PREGUNTAS GENERALES ==========
const preguntasGenerales = {
  lentes_contacto: {
    patron: /lentes de contacto|lentillas|pupilentes|c[oó]mo usar lentes|cuidado (de )?lentes/i,
    respuestas: [
      'Lentes de contacto: cuidados esenciales 👁️💙 NUNCA: duermas con ellos (aumenta infección 10x), uses agua de grifo, los uses más tiempo del recomendado. SIEMPRE: lava manos antes de tocarlos, usa solución nueva, límpialo diariamente, reemplázalos según indicación. Síntomas de problema: enrojecimiento, dolor, visión borrosa → retíralos y ve al médico. ¿Usas lentes de contacto?',
      'Cuidado de lentes de contacto = prevención de infecciones 🦠👁️ Reglas de oro: higiene de manos, solución multipropósito nueva, estuche limpio (cambiar cada 3 meses), no dormir con ellos, no nadar con ellos, respetar tiempo de uso. Infecciones pueden causar úlceras corneales y ceguera. Tómalos en serio. ¿Cuántas horas al día los usas?',
      'Lentes de contacto seguros si se usan bien 💙 Tipos: diarios (desechables - más seguros), mensuales (requieren limpieza). Riesgos: infecciones, úlceras, hipoxia corneal. Prevención: higiene estricta, no exceder horas de uso, descansos con lentes, exámenes regulares. Si hay molestia, retíralos. ¿Tienes alguna molestia con tus lentes?'
    ]
  },
  cirugia_laser: {
    patron: /cirug[ií]a l[aá]ser|lasik|prk|cirug[ií]a refractiva|operaci[oó]n (de (los )?ojos|para no usar lentes)/i,
    respuestas: [
      'Cirugía láser ocular (LASIK/PRK) 👁️✨ Corrige: miopía, hipermetropía, astigmatismo. Procedimiento: remodelación de córnea con láser. Candidatos: \u003e18 años, graduación estable, córnea sana, sin enfermedades oculares. Éxito: \u003e90% logran 20/20 o mejor. Riesgos: ojo seco, halos nocturnos (temporales), infección (raro). Consulta con oftalmólogo especializado. ¿Estás considerando operarte?',
      'LASIK vs PRK: cirugías refractivas 💙 LASIK: recuperación rápida (días), menos dolor, más común. PRK: recuperación lenta (semanas), más dolor inicial, mejor para córneas delgadas. Ambas efectivas. Costo: $1000-3000 por ojo. No todos son candidatos. Evaluación completa necesaria. ¿Cuánta graduación tienes?',
      'Cirugía láser: ¿vale la pena? 👁️💭 Ventajas: sin lentes, visión inmediata, segura. Desventajas: costo, ojo seco temporal, no previene presbicia (vista cansada después de 40). Candidatos ideales: miopía leve-moderada, córnea gruesa, sin enfermedades. No es para todos. Consulta especialista. ¿Qué te motiva a considerarla?'
    ]
  },
  ninos_ojos: {
    patron: /ni[ñn]o(s)?|beb[eé](s)?|infante(s)?|hijo(s)?|vista (de|en) ni[ñn]os|ojos (de )?ni[ñn]os/i,
    respuestas: [
      'Salud ocular en niños 👶👁️ Exámenes: 6 meses (primera), 3 años, antes de escuela, cada 2 años. Señales de alerta: no sigue objetos, ojos desalineados, acercarse mucho a pantallas/libros, entrecerrar ojos, frotarse mucho. Problemas comunes: ambliopía (ojo perezoso), estrabismo, errores refractivos. Detección temprana = tratamiento exitoso. ¿Tienes hijos? ¿Qué edad?',
      'Cuidado de ojos en niños 💙👶 Protección: limitar pantallas (\u003c2 años: cero, 2-5 años: 1h/día), juego al aire libre (previene miopía), protección solar, dieta saludable. Señales de problema: ojos desviados, tropezarse mucho, dolores de cabeza, bajo rendimiento escolar. Exámenes regulares detectan problemas tratables. ¿Notas algo inusual en tu hijo?',
      'Desarrollo visual infantil 👁️✨ 0-6 meses: aprende a enfocar, seguir objetos. 6-12 meses: coordinación ojo-mano. 1-2 años: percepción de profundidad. 3-5 años: visión casi madura. Problemas tempranos afectan aprendizaje. Exámenes preventivos son cruciales. Ambliopía (ojo perezoso) solo se trata antes de 7-9 años. ¿Tu hijo ha tenido examen visual?'
    ]
  }
};

// ========== PARTE 10: SEGUIMIENTOS Y CONTEXTO ==========
const seguimientos = {
  afirmacion_sintomas: {
    patron: /^(s[ií]|si|yes|tengo|afirmativo|correcto|exacto|as[ií] es|me pasa)/i,
    respuestas: [
      'Entiendo 💙 Lamento que estés pasando por esto, pero tranquilo, hay solución. Si tienes varios de esos síntomas, es importante actuar pronto. Como especialista te recomiendo: si los síntomas son recientes (menos de 1 semana), empieza con lágrimas artificiales y compresas tibias. Si llevas más tiempo o empeoran, consulta a un oftalmólogo. ¿Los síntomas son recientes o llevas tiempo con ellos?',
      'Ya veo que presentas esos síntomas � Pero no te preocupes, vamos a mejorar esto. Como especialista te digo: la mayoría de estos casos responden bien al tratamiento. ¿Cuánto tiempo llevas así? ¿Los síntomas son constantes o van y vienen? ¿Has probado algún tratamiento? Con esta información puedo orientarte mejor.',
      'Comprendo tu situación 💚 Sé que es molesto, pero estoy seguro que vamos a recuperarte. Como especialista te comento: con esos síntomas, te recomiendo empezar con cuidados básicos (lágrimas artificiales, descanso visual, compresas). Si no mejoran en 48 horas, es importante que consultes a un oftalmólogo. ¿Hay algo específico que empeore los síntomas?'
    ]
  },
  afirmacion_sintomas: {
    patron: /^(s[ií]|si|yes|tengo (esos|estos) s[ií]ntomas|me pasa eso)/i,
    respuestas: [
      'Entiendo 💙 Si tienes varios de esos síntomas, es importante que tomes acción. ¿Los síntomas son recientes o llevas tiempo con ellos? ¿Han empeorado? Esto me ayuda a saber qué tan urgente es.',
      'Ya veo que presentas esos síntomas 👁️ ¿Cuánto tiempo llevas así? ¿Los síntomas son constantes o van y vienen? ¿Has probado algún tratamiento?',
      'Comprendo tu situación 💙 Con esos síntomas, te recomiendo que si no mejoran en 24-48 horas con los cuidados básicos, consultes a un oftalmólogo. ¿Hay algo específico que empeore los síntomas?'
    ]
  },
  mas_informacion: {
    patron: /dime m[aá]s|cu[eé]ntame m[aá]s|m[aá]s (informaci[oó]n|detalles)|expl[ií]came|qu[eé] m[aá]s|y qu[eé] m[aá]s/i,
    respuestas: [
      '¡Claro! 💙 ¿Sobre qué aspecto específico quieres saber más? Puedo darte más detalles sobre síntomas, tratamientos, prevención, o cualquier otro tema relacionado con salud ocular.',
      'Con gusto te amplío la información 👁️ ¿Qué parte te gustaría que profundice? ¿Tratamientos, causas, prevención, o algo más específico?',
      'Perfecto, te doy más detalles 💚 ¿Hay algún aspecto en particular que te interese más? Síntomas, cuidados, cuándo ir al médico, remedios caseros...'
    ]
  },
  dolor_general: {
    patron: /me duele(n)?|dolor|adolorido/i,
    respuestas: [
      '¿Te duelen los ojos específicamente? 👁️ El dolor ocular puede ser por varias razones: fatiga visual, ojo seco, infección, o algo más serio. ¿El dolor es en los ojos, alrededor de los ojos, o en la cabeza? ¿Qué tan intenso es del 1 al 10?',
      'Lamento que tengas dolor 💙 ¿Es dolor en los ojos o alrededor de ellos? ¿Cuándo empezó? ¿Tienes otros síntomas como enrojecimiento, visión borrosa o sensibilidad a la luz? Cuéntame más.',
      'El dolor puede indicar varias cosas 👁️ ¿Es un dolor constante o solo al mover los ojos? ¿Está acompañado de otros síntomas? Necesito más detalles para orientarte mejor.'
    ]
  },
  pregunta_generica_ojos: {
    patron: /^(dime|cu[eé]ntame|habl[aá]|qu[eé] sabes) (de|sobre|algo de) (los )?ojo(s|ito)?/i,
    respuestas: [
      '¡Claro! Puedo ayudarte con muchos temas de salud ocular 👁️💚 ¿Te interesa saber sobre: prevención y cuidado diario, condiciones comunes (ojo seco, conjuntivitis, etc.), nutrición para los ojos, protección de pantallas, o cuándo ir al oftalmólogo? ¿Qué tema te llama más la atención?',
      'Tengo mucha información sobre salud ocular 💙 Puedo hablarte de: cómo prevenir problemas, tratamientos para condiciones comunes, alimentos buenos para la vista, cuidado con pantallas, señales de alerta, y mucho más. ¿Qué te gustaría saber primero?',
      '¡Me encanta hablar de salud ocular! 👁️✨ Hay tantos temas: prevención, condiciones comunes, nutrición, tecnología y ojos, exámenes, emergencias... ¿Por dónde quieres empezar?'
    ]
  }
};

// ========== PARTE 11: HELPERS ==========
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const normalizar = (texto) => {
  // Normaliza el texto para búsqueda: minúsculas, sin tildes extras
  return texto.toLowerCase().trim();
};

const buscarRespuesta = (categoria) => {
  return (texto) => {
    const textoNormalizado = normalizar(texto);
    for (const [key, item] of Object.entries(categoria)) {
      if (item.patron.test(textoNormalizado)) {
        return random(item.respuestas);
      }
    }
    return null;
  };
};

// 🆕 Buscar respuesta de tratamiento contextual
const buscarTratamiento = (categoria, texto) => {
  const textoNormalizado = normalizar(texto);
  for (const [key, item] of Object.entries(categoria)) {
    if (item.tratamiento && item.patron.test(textoNormalizado)) {
      return random(item.tratamiento);
    }
  }
  return null;
};

// 🆕 Variable para guardar último tema detectado
let ultimoTemaDetectado = null;

// ========== PARTE 12: PROCESAMIENTO PRINCIPAL ==========
export const generate = (userMessage) => {
  const msg = normalizar(userMessage);
  
  // Prioridad 0: Seguimientos (mensajes cortos de continuación)
  if (msg.length < 30) { // Mensajes cortos probablemente son seguimientos
    let respuesta = buscarRespuesta(seguimientos)(msg);
    if (respuesta) return respuesta;
  }
  
  // Prioridad 1: Emergencias (CRÍTICO)
  let respuesta = buscarRespuesta(emergencias)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 2: Condiciones oculares comunes
  respuesta = buscarRespuesta(condicionesOculares)(msg);
  if (respuesta) {
    // Guardar tema detectado para seguimiento contextual
    for (const [key, item] of Object.entries(condicionesOculares)) {
      if (item.patron.test(msg)) {
        ultimoTemaDetectado = key;
        break;
      }
    }
    return respuesta;
  }
  
  // 🆕 SEGUIMIENTO CONTEXTUAL DE TRATAMIENTO
  // Si pregunta sobre tratamiento/recomendaciones y hay tema activo
  if (/tratamiento|qu[eé] (me |puedo |debo )?(hacer|tomar|usar|recomiend)|c[oó]mo (me )?(cur|mejor|ayud)/i.test(msg)) {
    if (ultimoTemaDetectado && condicionesOculares[ultimoTemaDetectado]?.tratamiento) {
      return random(condicionesOculares[ultimoTemaDetectado].tratamiento);
    }
  }
  
  // 🆕 SEGUIMIENTO CONTEXTUAL - TIEMPO DE RECUPERACIÓN
  if (/cu[aá]nto tiempo|cu[aá]ndo (me |voy a )?recuper|en cu[aá]nto|tiempo (de |para )?recuper|cu[aá]ndo (me |voy a )?mejor/i.test(msg)) {
    if (ultimoTemaDetectado === 'ojo_seco') {
      const respuestas = [
        '¡Excelente pregunta, amig@! 💚 El tiempo de recuperación varía según la severidad, pero te voy a dar tiempos REALES basados en mi experiencia 👁️⏰ ALIVIO INICIAL: En 3-5 días sentirás menos molestia con el tratamiento (lágrimas artificiales + compresas). MEJORÍA NOTABLE: En 1-2 semanas verás una diferencia significativa si eres constante. RECUPERACIÓN COMPLETA: En 4-6 semanas la mayoría de pacientes están mucho mejor. IMPORTANTE: el 85% mejora con tratamiento básico, pero debes ser CONSTANTE. Si no mejoras en 2 semanas, consulta oftalmólogo para tratamientos avanzados. La clave es la constancia, amig@. ¿Estás listo para comprometerte con el tratamiento? 💪',
        'Me alegra que preguntes sobre tiempos, amig@ 💙 Eso significa que estás pensando en tu recuperación. Como especialista te doy tiempos REALISTAS 💧⏰ FASE 1 (3-7 días): Alivio inicial, menos ardor y molestia. FASE 2 (1-2 semanas): Mejoría notable, menos sequedad durante el día. FASE 3 (4-6 semanas): Recuperación significativa, síntomas mínimos. FASE 4 (2-3 meses): Estabilización completa. IMPORTANTE: cada persona es diferente. Factores que aceleran: constancia en tratamiento, evitar ambientes secos, buena hidratación. Factores que retrasan: no ser constante, seguir en ambientes secos, no usar lágrimas. Confía en el proceso, vamos a recuperarte 💚💪'
      ];
      return random(respuestas);
    } else if (ultimoTemaDetectado === 'fatiga_visual') {
      const respuestas = [
        '¡Perfecto, amig@! 💚 La fatiga visual se recupera RÁPIDO si aplicas los cuidados 💻⏰ ALIVIO INMEDIATO: En 1-2 días con regla 20-20-20 y descansos. MEJORÍA NOTABLE: En 3-5 días aplicando todos los consejos. RECUPERACIÓN COMPLETA: En 1 semana estarás mucho mejor. IMPORTANTE: la fatiga visual es 100% reversible y responde rápido al tratamiento. La clave es ser constante con la regla 20-20-20 y los descansos. El 90% mejora en menos de 1 semana. ¿Listo para aplicar los consejos? 💪'
      ];
      return random(respuestas);
    }
  }
  
  // 🆕 SEGUIMIENTO CONTEXTUAL - ALIMENTOS
  if (/qu[eé] alimentos?|qu[eé] (debo |puedo )?comer|qu[eé] comida|alimentos? (me |que )?(ayud|recomiend)/i.test(msg)) {
    if (ultimoTemaDetectado === 'ojo_seco') {
      const respuestas = [
        '¡Me encanta que pienses en nutrición, amig@! 💚 Los alimentos SÍ ayudan con el ojo seco. Como especialista te recomiendo 🥕👁️ OMEGA-3 (lo MÁS importante): Salmón, atún, sardinas 2-3 veces/semana. Nueces, semillas de chía diarias. Esto mejora la CALIDAD de tus lágrimas. VITAMINA A: Zanahorias, camote, espinaca (salud general del ojo). AGUA: 2L diarios (hidratación interna = mejor lágrimas). EVITAR: Alcohol excesivo (deshidrata), cafeína en exceso, comida muy salada. RESULTADOS: en 4-6 semanas notarás mejoría en sequedad. El Omega-3 es CLAVE, amig@. ¿Comes pescado regularmente? 💧',
        'Perfecto, amig@ 💙 La nutrición es parte del tratamiento. Como especialista te digo qué alimentos AYUDAN 🐟💧 PESCADO GRASO (Omega-3): Salmón, atún, sardinas, caballa. Come 2-3 veces/semana. Esto reduce inflamación y mejora lágrimas. FRUTOS SECOS: Nueces, almendras (Omega-3 y vitamina E). SEMILLAS: Chía, linaza (Omega-3 vegetal). VEGETALES VERDES: Espinaca, kale (antioxidantes). AGUA: 2L diarios (fundamental). SUPLEMENTOS: Si no comes pescado, Omega-3 1000mg EPA+DHA diarios. EVITAR: Alcohol, cafeína excesiva, sal excesiva. El Omega-3 mejora el ojo seco en 70% de casos. ¿Puedes incorporar pescado en tu dieta? 💚'
      ];
      return random(respuestas);
    }
  }
  
  // Prioridad 3: Síntomas y señales de alerta
  respuesta = buscarRespuesta(sintomasAlertas)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 4: Condiciones específicas (diabetes, glaucoma, cataratas)
  respuesta = buscarRespuesta(condicionesEspecificas)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 5: Prevención y cuidado diario
  respuesta = buscarRespuesta(prevencionCuidado)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 6: Alimentos y nutrición
  respuesta = buscarRespuesta(alimentosNutricion)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 7: Tecnología y pantallas
  respuesta = buscarRespuesta(tecnologiaPantallas)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 8: Exámenes y revisiones
  respuesta = buscarRespuesta(examenesRevisiones)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 9: Preguntas generales
  respuesta = buscarRespuesta(preguntasGenerales)(msg);
  if (respuesta) return respuesta;
  
  // No encontró respuesta específica de salud ocular
  return null;
};
