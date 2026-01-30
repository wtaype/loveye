// ========== MÓDULO EXPERTO EN SALUD OCULAR - OJITOS.JS ==========
// Conocimiento completo sobre cuidado, prevención y tratamiento de los ojos
// Soporte total para tildes, mayúsculas, minúsculas - comprende todo tipo de escritura

// ========== PARTE 1: CONDICIONES OCULARES COMUNES ==========
const condicionesOculares = {
  ojo_seco: {
    patron: /ojo(s)? seco(s)?|xeroftalm[ií]a|sequedad (ocular|en (los )?ojos)|ojos resecos|resequedad/i,
    respuestas: [
      '¡Entiendo! El ojo seco (xeroftalmía) es muy común 💧👁️ Es cuando tus ojos no producen suficientes lágrimas. Los síntomas incluyen ardor, picazón, enrojecimiento y visión borrosa. Te recomiendo: usar lágrimas artificiales sin conservantes 4-6 veces al día, aplicar compresas tibias 10-15 min, aumentar Omega-3 en tu dieta, y usar humidificador. ¿Tienes estos síntomas?',
      'El ojo seco es una condición crónica muy molesta 😔💙 Ocurre cuando las lágrimas se evaporan muy rápido o no produces suficientes. Tratamiento: lágrimas artificiales frecuentemente, geles lubricantes antes de dormir, evitar aire acondicionado directo, y beber mucha agua. ¿Cuánto tiempo llevas con esto?',
      'La xeroftalmía (ojo seco) afecta a millones de personas 💧 Síntomas: sensación de cuerpo extraño, ardor, sensibilidad a la luz, y visión borrosa intermitente. Soluciones: lágrimas artificiales, compresas tibias en párpados, Omega-3, y parpadear más seguido. ¿Trabajas mucho frente a pantallas?'
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
      '¡La fatiga visual digital es el mal de nuestra era! 💻😫 Síntomas: ojos cansados, visión borrosa temporal, dolor de cabeza, ojos secos. La solución MÁGICA: Regla 20-20-20 → Cada 20 minutos, mira algo a 20 pies (6 metros) por 20 segundos. También: ajusta brillo de pantalla, usa filtro de luz azul, parpadea conscientemente, lágrimas artificiales, y posiciona tu pantalla a 50-60 cm. ¿Cuántas horas pasas frente a pantallas?',
      'Ojos cansados por pantallas = fatiga visual digital 📱💙 Es súper común. Tratamiento: aplica la regla 20-20-20 religiosamente, ajusta el brillo y contraste, usa lentes con filtro de luz azul si es necesario, parpadea más (normalmente parpadeamos 50% menos frente a pantallas), lágrimas artificiales, y toma descansos. ¿Trabajas todo el día en computadora?',
      'La vista cansada por pantallas es prevenible 💻👁️ Causas: fijación prolongada, luz azul, parpadeamos menos, mala postura. Soluciones: regla 20-20-20 (cada 20 min, 20 seg, 20 pies de distancia), ajusta iluminación, usa gotas lubricantes, filtro de luz azul, y descansa. Tu pantalla debe estar a la altura de tus ojos o ligeramente abajo. ¿Tienes dolores de cabeza frecuentes?'
    ]
  }
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
    patron: /alimentos (para|buenos para) (los )?ojos|qu[eé] comer|dieta (para|de) (los )?ojos|vitaminas (para|de) (los )?ojos|nutrici[oó]n (ocular|para (los )?ojos)/i,
    respuestas: [
      '¡La nutrición es clave para tus ojos! 🥕👁️💚 Alimentos TOP: Zanahorias (vitamina A para visión nocturna), vegetales verdes como espinaca (luteína y zeaxantina), pescado graso (Omega-3 previene ojo seco), huevos (zinc y antioxidantes), cítricos (vitamina C contra cataratas), frutos secos (vitamina E). Una dieta balanceada = ojos saludables. ¿Comes estos alimentos regularmente?',
      'Tus ojos aman estos alimentos 🍊🥬🐟 Zanahorias y camote (betacaroteno), kale y espinaca (protegen la retina), salmón y atún (Omega-3), huevos (luteína), naranjas y fresas (vitamina C), almendras y nueces (vitamina E). Estos nutrientes previenen degeneración macular, cataratas y ojo seco. ¿Quieres saber más sobre algún nutriente específico?',
      'Nutrición ocular = prevención de enfermedades 👁️🥗 Vitamina A (zanahorias, camote), Vitamina C (cítricos, pimientos), Vitamina E (frutos secos), Omega-3 (pescado), Luteína y Zeaxantina (vegetales verdes), Zinc (huevos, carne). Una dieta rica en estos nutrientes reduce riesgo de cataratas y degeneración macular hasta 25%. ¿Llevas una dieta balanceada?'
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
      'La visión borrosa puede tener muchas causas 👁️💭 Temporal: fatiga visual, ojo seco, falta de sueño. Persistente: miopía, hipermetropía, astigmatismo, cataratas, diabetes. Si es SÚBITA o con dolor, ve al médico INMEDIATAMENTE. Si es gradual, agenda examen oftalmológico. ¿Es constante o solo a veces? ¿Cuándo empezó?',
      'Ver borroso no es normal 😔💙 Causas comunes: necesitas lentes, ojo seco, fatiga visual, cataratas (si eres mayor), diabetes (afecta la retina). URGENTE si: visión borrosa súbita, con dolor, con destellos de luz, con pérdida de visión. Si es gradual, necesitas examen de la vista. ¿Usas lentes o nunca has ido al oftalmólogo?',
      'Visión desenfocada = señal de que algo necesita atención 👁️ Temporal: cansancio, pantallas, ojo seco (usa lágrimas artificiales). Persistente: error refractivo (necesitas lentes), cataratas, problemas de retina. Si aparece de repente, es EMERGENCIA. Si es progresivo, agenda cita. ¿Mejora al parpadear o sigue borroso?'
    ]
  },
  dolor_ocular: {
    patron: /dolor (de|en|ocular) (los )?ojo(s)?|me duele(n)? (el|los) ojo(s)?|ojo(s)? adolorido(s)?/i,
    respuestas: [
      '¡El dolor ocular NO debe ignorarse! 🚨👁️ Dolor leve: puede ser fatiga, ojo seco, tensión. Dolor intenso: puede ser glaucoma agudo, úlcera corneal, infección grave. URGENCIA si: dolor intenso, con visión borrosa, con náuseas, con enrojecimiento severo. Dolor leve: lágrimas artificiales, descanso, compresas. Si persiste más de 24 horas, ve al médico. ¿Qué tan intenso es el dolor del 1-10?',
      'Dolor en los ojos requiere evaluación 😔💙 Leve: fatiga visual (descansa), ojo seco (lágrimas artificiales), tensión (masaje suave). Moderado-Severo: puede ser glaucoma, infección, trauma. VE AL MÉDICO si: dolor intenso, pérdida de visión, sensibilidad extrema a la luz, vómitos. ¿El dolor es constante o solo al mover los ojos?',
      'Los ojos no deben doler normalmente 👁️⚠️ Causas: fatiga visual (muy común), ojo seco, migraña ocular, glaucoma (grave), infección. Dolor + visión borrosa + náuseas = EMERGENCIA (posible glaucoma agudo). Dolor leve persistente = consulta oftalmológica. Nunca ignores dolor ocular. ¿Tienes otros síntomas como enrojecimiento o lagrimeo?'
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

// ========== PARTE 10: HELPERS ==========
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

// ========== PARTE 11: PROCESAMIENTO PRINCIPAL ==========
export const generate = (userMessage) => {
  const msg = normalizar(userMessage);
  
  // Prioridad 1: Emergencias (CRÍTICO)
  let respuesta = buscarRespuesta(emergencias)(msg);
  if (respuesta) return respuesta;
  
  // Prioridad 2: Condiciones oculares comunes
  respuesta = buscarRespuesta(condicionesOculares)(msg);
  if (respuesta) return respuesta;
  
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
