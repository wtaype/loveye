import './alimentos.css';
import $ from 'jquery';
import { wiVista } from '../widev.js';

// Superalimentos para la visión
const superalimentos = [
  {
    emoji: '🥕',
    title: 'Zanahorias',
    desc: 'El superalimento clásico para los ojos. Rico en betacaroteno que el cuerpo convierte en vitamina A.',
    nutrientes: [
      'Vitamina A (betacaroteno) - Esencial para visión nocturna',
      'Luteína - Protege la retina',
      'Fibra - Mejora absorción de nutrientes',
      'Antioxidantes - Previenen degeneración macular'
    ]
  },
  {
    emoji: '🥬',
    title: 'Vegetales de Hoja Verde',
    desc: 'Espinaca, kale, col rizada. Los más ricos en luteína y zeaxantina para proteger la mácula.',
    nutrientes: [
      'Luteína y Zeaxantina - Filtran luz azul dañina',
      'Vitamina C - Antioxidante poderoso',
      'Vitamina E - Protege células oculares',
      'Hierro - Mejora oxigenación ocular'
    ]
  },
  {
    emoji: '🐟',
    title: 'Pescado Graso',
    desc: 'Salmón, atún, sardinas. Omega-3 DHA concentrado en la retina. Previene ojo seco.',
    nutrientes: [
      'Omega-3 (DHA y EPA) - Salud retinal',
      'Vitamina D - Reduce inflamación',
      'Proteína de alta calidad',
      'Previene degeneración macular y ojo seco'
    ]
  },
  {
    emoji: '🥚',
    title: 'Huevos',
    desc: 'Fuente completa de nutrientes oculares. La yema contiene luteína y zeaxantina altamente biodisponibles.',
    nutrientes: [
      'Luteína y Zeaxantina - Fácilmente absorbibles',
      'Zinc - Transporta vitamina A a la retina',
      'Vitamina A - Previene ceguera nocturna',
      'Proteína completa - Reparación celular'
    ]
  },
  {
    emoji: '🍊',
    title: 'Cítricos',
    desc: 'Naranjas, limones, toronjas. Vitamina C protege contra cataratas y degeneración macular.',
    nutrientes: [
      'Vitamina C - Antioxidante potente',
      'Flavonoides - Mejoran circulación ocular',
      'Previenen cataratas',
      'Fortalecen vasos sanguíneos del ojo'
    ]
  },
  {
    emoji: '🌰',
    title: 'Frutos Secos y Semillas',
    desc: 'Almendras, nueces, chía, linaza. Vitamina E y omega-3 vegetal para protección celular.',
    nutrientes: [
      'Vitamina E - Protege membranas celulares',
      'Omega-3 vegetal (ALA)',
      'Zinc - Salud retinal',
      'Previenen degeneración relacionada con edad'
    ]
  },
  {
    emoji: '🫐',
    title: 'Arándanos',
    desc: 'Antocianinas mejoran visión nocturna y circulación retinal. Usados por pilotos en WWII.',
    nutrientes: [
      'Antocianinas - Mejoran visión nocturna',
      'Vitamina C - Antioxidante',
      'Mejoran circulación retinal',
      'Reducen fatiga visual'
    ]
  },
  {
    emoji: '🍠',
    title: 'Camote (Batata)',
    desc: 'Altísimo en betacaroteno. Una porción cubre 400% de vitamina A diaria.',
    nutrientes: [
      'Betacaroteno - Precursor de vitamina A',
      'Vitamina C - Antioxidante',
      'Fibra - Salud digestiva',
      'Previene ceguera nocturna'
    ]
  },
  {
    emoji: '🫑',
    title: 'Pimientos',
    desc: 'Los más ricos en vitamina C. Rojos, amarillos y naranjas tienen más nutrientes que verdes.',
    nutrientes: [
      'Vitamina C - Más que cítricos',
      'Vitamina A - Salud corneal',
      'Luteína y Zeaxantina',
      'Previenen cataratas'
    ]
  }
];

// Alimentos para calculadora
const alimentosCalculadora = [
  { emoji: '🥕', name: 'Zanahorias', puntos: 10 },
  { emoji: '🥬', name: 'Espinaca', puntos: 10 },
  { emoji: '🐟', name: 'Salmón', puntos: 10 },
  { emoji: '🥚', name: 'Huevos', puntos: 8 },
  { emoji: '🍊', name: 'Naranja', puntos: 8 },
  { emoji: '🌰', name: 'Almendras', puntos: 8 },
  { emoji: '🫐', name: 'Arándanos', puntos: 9 },
  { emoji: '🍠', name: 'Camote', puntos: 9 }
];

// Plan semanal
const planSemanal = [
  {
    dia: 'Lunes',
    icon: '🌅',
    comidas: [
      '<strong>Desayuno:</strong> Omelette con espinaca + naranja',
      '<strong>Almuerzo:</strong> Salmón al horno + ensalada verde',
      '<strong>Cena:</strong> Sopa de zanahoria + pan integral'
    ]
  },
  {
    dia: 'Martes',
    icon: '🌤️',
    comidas: [
      '<strong>Desayuno:</strong> Yogurt con arándanos y almendras',
      '<strong>Almuerzo:</strong> Pollo con camote asado + brócoli',
      '<strong>Cena:</strong> Ensalada de atún con pimientos'
    ]
  },
  {
    dia: 'Miércoles',
    icon: '☀️',
    comidas: [
      '<strong>Desayuno:</strong> Smoothie verde (espinaca, plátano, chía)',
      '<strong>Almuerzo:</strong> Pescado con vegetales al vapor',
      '<strong>Cena:</strong> Tortilla de huevo con aguacate'
    ]
  },
  {
    dia: 'Jueves',
    icon: '🌈',
    comidas: [
      '<strong>Desayuno:</strong> Avena con nueces y arándanos',
      '<strong>Almuerzo:</strong> Ensalada de kale con salmón',
      '<strong>Cena:</strong> Crema de zanahoria + huevo duro'
    ]
  },
  {
    dia: 'Viernes',
    icon: '🎉',
    comidas: [
      '<strong>Desayuno:</strong> Tostada integral con aguacate + huevo',
      '<strong>Almuerzo:</strong> Atún con ensalada de col',
      '<strong>Cena:</strong> Camote relleno con vegetales'
    ]
  },
  {
    dia: 'Sábado',
    icon: '🌻',
    comidas: [
      '<strong>Desayuno:</strong> Pancakes de camote + arándanos',
      '<strong>Almuerzo:</strong> Salmón con quinoa y espinaca',
      '<strong>Cena:</strong> Sopa de vegetales verdes'
    ]
  },
  {
    dia: 'Domingo',
    icon: '🌙',
    comidas: [
      '<strong>Desayuno:</strong> Huevos revueltos + jugo de naranja',
      '<strong>Almuerzo:</strong> Pollo con ensalada arcoíris',
      '<strong>Cena:</strong> Smoothie de arándanos + almendras'
    ]
  }
];

// Niveles de aporte según preparación
const nivelesAporte = [
  {
    alimento: '🥕 Jugo de Zanahoria',
    preparaciones: [
      {
        metodo: 'Jugo Fresco (Agua Fría)',
        nivel: 95,
        color: '--success',
        desc: 'Máxima absorción de betacaroteno. El agua fría preserva vitaminas. Consumir inmediatamente.',
        tips: 'Agregar 1 cucharadita de aceite de oliva mejora absorción de vitamina A (liposoluble) hasta 300%'
      },
      {
        metodo: 'Jugo con Agua Caliente',
        nivel: 60,
        color: '--warning',
        desc: 'El calor destruye 30-40% de vitamina C. Betacaroteno se mantiene estable.',
        tips: 'No recomendado. Si lo haces, no exceder 60°C y consumir inmediatamente'
      },
      {
        metodo: 'Zanahoria Cruda',
        nivel: 85,
        color: '--success',
        desc: 'Excelente fuente de fibra y nutrientes. Masticar bien para mejor absorción.',
        tips: 'Rallar o picar fino aumenta biodisponibilidad. Combinar con grasa saludable'
      },
      {
        metodo: 'Zanahoria Cocida al Vapor',
        nivel: 90,
        color: '--success',
        desc: 'Cocción rompe paredes celulares, aumentando absorción de betacaroteno hasta 14%.',
        tips: 'Método ideal. 5-7 minutos al vapor. No sobrecocinar'
      }
    ]
  },
  {
    alimento: '🍊 Jugo de Cítricos',
    preparaciones: [
      {
        metodo: 'Jugo Recién Exprimido',
        nivel: 100,
        color: '--success',
        desc: 'Vitamina C al máximo. Consumir en 15 minutos. Luz y aire la degradan rápidamente.',
        tips: 'No colar para mantener flavonoides. Beber con pajilla para proteger esmalte dental'
      },
      {
        metodo: 'Jugo Refrigerado (24h)',
        nivel: 70,
        color: '--warning',
        desc: 'Pierde 30% de vitamina C en 24 horas. Oxidación por contacto con aire.',
        tips: 'Guardar en recipiente hermético lleno hasta el tope. Minimiza contacto con aire'
      },
      {
        metodo: 'Fruta Entera',
        nivel: 95,
        color: '--success',
        desc: 'Fibra + vitamina C + flavonoides. Absorción más lenta y sostenida.',
        tips: 'Opción superior al jugo. Incluye la parte blanca (albedo) rica en flavonoides'
      }
    ]
  },
  {
    alimento: '🐟 Pescado Graso',
    preparaciones: [
      {
        metodo: 'Al Horno (180°C)',
        nivel: 95,
        color: '--success',
        desc: 'Preserva 95% de omega-3. Método ideal que mantiene jugosidad y nutrientes.',
        tips: '15-20 min a 180°C. Envolver en papel aluminio con limón y hierbas'
      },
      {
        metodo: 'Al Vapor',
        nivel: 98,
        color: '--success',
        desc: 'Mejor método. Preserva casi 100% de omega-3 DHA y EPA.',
        tips: '10-12 minutos. Agregar jengibre y limón para sabor sin perder nutrientes'
      },
      {
        metodo: 'Frito en Aceite',
        nivel: 50,
        color: '--error',
        desc: 'Destruye 40-50% de omega-3. Altas temperaturas oxidan grasas saludables.',
        tips: 'EVITAR. Si es necesario, usar aceite de coco a temperatura baja (<160°C)'
      },
      {
        metodo: 'A la Parrilla',
        nivel: 85,
        color: '--Cielo',
        desc: 'Pierde 10-15% de omega-3. Aceptable si se cocina a temperatura moderada.',
        tips: 'No carbonizar. Marinar previamente con limón protege nutrientes'
      }
    ]
  },
  {
    alimento: '🍠 Camote (Batata)',
    preparaciones: [
      {
        metodo: 'Horneado con Piel',
        nivel: 100,
        color: '--success',
        desc: 'Método óptimo. La piel retiene nutrientes. Betacaroteno aumenta con cocción.',
        tips: '45 min a 200°C. La piel contiene fibra adicional. Comer con piel bien lavada'
      },
      {
        metodo: 'Hervido (Sin Piel)',
        nivel: 70,
        color: '--warning',
        desc: 'Pierde 25-30% de vitaminas hidrosolubles (C, B) en el agua.',
        tips: 'Si hierves, usa el agua para sopas. Contiene nutrientes lixiviados'
      },
      {
        metodo: 'Al Vapor',
        nivel: 95,
        color: '--success',
        desc: 'Excelente opción. Retiene vitaminas y hace betacaroteno más biodisponible.',
        tips: '20-25 minutos. Mantiene textura y dulzor natural'
      },
      {
        metodo: 'Frito (Papas Fritas)',
        nivel: 40,
        color: '--error',
        desc: 'Destruye vitamina C. Absorbe grasas trans. Pierde la mayoría de beneficios.',
        tips: 'EVITAR. Si deseas crocante, hornea en rodajas finas con aceite de oliva'
      }
    ]
  },
  {
    alimento: '🥬 Espinaca',
    preparaciones: [
      {
        metodo: 'Cruda en Ensalada',
        nivel: 85,
        color: '--success',
        desc: 'Máxima vitamina C. Luteína y zeaxantina se absorben mejor con grasa.',
        tips: 'Agregar aceite de oliva o aguacate. Masticar bien para romper células'
      },
      {
        metodo: 'Salteada (2-3 min)',
        nivel: 95,
        color: '--success',
        desc: 'Cocción ligera aumenta biodisponibilidad de luteína hasta 11%. Reduce volumen.',
        tips: 'Saltear brevemente con ajo y aceite de oliva. No sobrecocinar'
      },
      {
        metodo: 'Hervida (5+ min)',
        nivel: 60,
        color: '--warning',
        desc: 'Pierde 50% de vitamina C y folato. Nutrientes se van al agua.',
        tips: 'No recomendado. Si hierves, usa agua mínima y aprovéchala'
      },
      {
        metodo: 'En Smoothie',
        nivel: 90,
        color: '--success',
        desc: 'Excelente absorción. Combinar con frutas cítricas aumenta absorción de hierro.',
        tips: 'Agregar plátano, manzana y limón. Consumir inmediatamente'
      }
    ]
  },
  {
    alimento: '🥚 Huevos',
    preparaciones: [
      {
        metodo: 'Cocido (Yema Líquida)',
        nivel: 100,
        color: '--success',
        desc: 'Óptimo. Luteína y zeaxantina se absorben mejor con yema líquida. Proteína completa.',
        tips: '6 min en agua hirviendo. Yema cremosa = máxima biodisponibilidad'
      },
      {
        metodo: 'Cocido (Yema Dura)',
        nivel: 85,
        color: '--Cielo',
        desc: 'Bueno pero yema dura reduce absorción de carotenoides en 15-20%.',
        tips: 'Aceptable. Más seguro para personas con sistema inmune débil'
      },
      {
        metodo: 'Revueltos con Aceite',
        nivel: 90,
        color: '--success',
        desc: 'Muy bueno. Grasa del aceite mejora absorción de luteína y zeaxantina.',
        tips: 'Usar aceite de oliva. Cocinar a fuego medio-bajo. No sobrecocinar'
      },
      {
        metodo: 'Frito en Exceso de Aceite',
        nivel: 65,
        color: '--warning',
        desc: 'Altas temperaturas oxidan colesterol. Absorbe grasas innecesarias.',
        tips: 'Usar mínimo aceite. Temperatura media. Mejor opción: al horno'
      }
    ]
  }
];

export const render = () => `
  <div class="alimentos_container">
    <!-- HERO SECTION -->
    <section class="alim_hero">
      <div class="alim_hero_content">
        <h1>
          <span class="highlight">Alimentos:</span> Nutrición para tu Visión
        </h1>
        <p>
          "Que tu alimento sea tu medicina". Una dieta rica en nutrientes específicos puede 
          mejorar tu visión, prevenir enfermedades oculares y hasta revertir deficiencias nutricionales.
        </p>
        <p>
          <strong>Dato Importante:</strong> La degeneración macular y cataratas pueden prevenirse 
          hasta en 25% con una dieta adecuada rica en antioxidantes. 🥕👁️
        </p>
      </div>
      <div class="alim_hero_visual">
        <img src="/alimentos.png" alt="Alimentos Saludables" class="alim_hero_img" loading="lazy">
      </div>
    </section>

    <!-- CALCULADORA NUTRICIONAL -->
    <section class="calculadora_section">
      <div class="calculadora_header">
        <h2>🧮 Calculadora Nutricional Ocular</h2>
        <p>
          Selecciona los alimentos que consumiste hoy y descubre qué tan bien estás nutriendo tus ojos.
        </p>
      </div>
      <div class="calculadora_content">
        <div class="calculadora_grid">
          ${alimentosCalculadora.map((alimento, index) => `
            <label class="alimento_checkbox" data-puntos="${alimento.puntos}">
              <input type="checkbox" id="alimento${index}">
              <span class="alimento_emoji">${alimento.emoji}</span>
              <span class="alimento_name">${alimento.name}</span>
            </label>
          `).join('')}
        </div>
        <div class="calculadora_resultado">
          <div class="resultado_score" id="puntajeTotal">0</div>
          <div class="resultado_label">Puntos de Salud Ocular</div>
          <p class="resultado_mensaje" id="mensajeResultado">
            Selecciona los alimentos que consumiste hoy para calcular tu puntuación.
          </p>
        </div>
      </div>
    </section>

    <!-- SUPERALIMENTOS -->
    <section class="superalimentos_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-star"></i>
          9 Superalimentos para tus Ojos
        </h2>
        <p class="section_subtitle">
          Alimentos científicamente probados que mejoran y protegen tu visión
        </p>
        <div class="section_line"></div>
      </div>
      <div class="superalimentos_grid">
        ${superalimentos.map(alimento => `
          <div class="superalimento_card">
            <span class="superalimento_emoji">${alimento.emoji}</span>
            <h3 class="superalimento_title">${alimento.title}</h3>
            <p class="superalimento_desc">${alimento.desc}</p>
            
            <div class="superalimento_nutrientes">
              <h4><i class="fas fa-leaf"></i> Nutrientes Clave:</h4>
              <ul>
                ${alimento.nutrientes.map(nutriente => `
                  <li><i class="fas fa-check-circle"></i> ${nutriente}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- PLAN SEMANAL -->
    <section class="plan_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-calendar-week"></i>
          Plan Semanal de Alimentación
        </h2>
        <p class="section_subtitle">
          Menú balanceado rico en nutrientes para mejorar tu visión día a día
        </p>
        <div class="section_line"></div>
      </div>
      <div class="plan_grid">
        ${planSemanal.map(dia => `
          <div class="dia_card">
            <div class="dia_header">
              <span class="dia_icon">${dia.icon}</span>
              <h3 class="dia_nombre">${dia.dia}</h3>
            </div>
            <ul class="dia_comidas">
              ${dia.comidas.map(comida => `
                <li>${comida}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- NIVEL DE APORTE -->
    <section class="niveles_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-chart-line"></i>
          Nivel de Aporte Según Preparación
        </h2>
        <p class="section_subtitle">
          Descubre cómo la forma de preparar tus alimentos afecta su valor nutricional para tus ojos
        </p>
        <div class="section_line"></div>
      </div>
      <div class="niveles_grid">
        ${nivelesAporte.map(item => `
          <div class="nivel_alimento_card">
            <h3 class="nivel_alimento_title">${item.alimento}</h3>
            <div class="preparaciones_list">
              ${item.preparaciones.map(prep => `
                <div class="preparacion_item">
                  <div class="preparacion_header">
                    <h4 class="preparacion_metodo">${prep.metodo}</h4>
                    <div class="preparacion_nivel">
                      <div class="nivel_bar">
                        <div class="nivel_fill" style="width: ${prep.nivel}%; background: var(${prep.color});"></div>
                      </div>
                      <span class="nivel_porcentaje" style="color: var(${prep.color});">${prep.nivel}%</span>
                    </div>
                  </div>
                  <p class="preparacion_desc">${prep.desc}</p>
                  <div class="preparacion_tip">
                    <i class="fas fa-lightbulb"></i>
                    <span>${prep.tips}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Alimentos completado`);

  // Calculadora nutricional interactiva
  let puntajeActual = 0;

  $('.alimento_checkbox').on('click', function() {
    const $checkbox = $(this).find('input');
    const puntos = parseInt($(this).data('puntos'));
    
    // Toggle checkbox
    $checkbox.prop('checked', !$checkbox.prop('checked'));
    $(this).toggleClass('selected');
    
    // Calcular puntaje
    if ($checkbox.prop('checked')) {
      puntajeActual += puntos;
    } else {
      puntajeActual -= puntos;
    }
    
    // Actualizar visualización
    $('#puntajeTotal').text(puntajeActual);
    
    // Mensaje según puntaje
    let mensaje = '';
    if (puntajeActual === 0) {
      mensaje = 'Selecciona los alimentos que consumiste hoy para calcular tu puntuación.';
    } else if (puntajeActual < 20) {
      mensaje = '😟 Necesitas mejorar tu dieta. Incluye más alimentos ricos en vitaminas A, C, E y Omega-3.';
    } else if (puntajeActual < 40) {
      mensaje = '😊 Vas por buen camino. Intenta agregar más vegetales de hoja verde y pescado graso.';
    } else if (puntajeActual < 60) {
      mensaje = '🎉 ¡Excelente! Tu dieta es muy buena para tus ojos. Sigue así y mantén la constancia.';
    } else {
      mensaje = '🌟 ¡INCREÍBLE! Eres un campeón de la nutrición ocular. Tus ojos te lo agradecen.';
    }
    
    $('#mensajeResultado').text(mensaje);
  });

  // Animación de entrada para superalimentos
  wiVista('.superalimento_card', () => {
    $('.superalimento_card').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'translateY(30px)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'translateY(0)'
          });
        }, 50);
      }, i * 80);
    });
  });

  // Animación para plan semanal
  wiVista('.dia_card', () => {
    $('.dia_card').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'translateX(-30px)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'translateX(0)'
          });
        }, 50);
      }, i * 100);
    });
  });

  // Animación para niveles de aporte
  wiVista('.nivel_alimento_card', () => {
    $('.nivel_alimento_card').each((i, el) => {
      setTimeout(() => {
        $(el).css({
          opacity: '0',
          transform: 'translateY(30px)'
        });
        setTimeout(() => {
          $(el).css({
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: '1',
            transform: 'translateY(0)'
          });
          
          // Animar barras de progreso
          $(el).find('.nivel_fill').each(function() {
            const width = $(this).css('width');
            $(this).css('width', '0');
            setTimeout(() => {
              $(this).css({
                transition: 'width 1s ease-out',
                width: width
              });
            }, 200);
          });
        }, 50);
      }, i * 150);
    });
  });
};

export const cleanup = () => {
  console.log('🧹 Alimentos limpiado');
  $('.alimento_checkbox').off('click');
};
