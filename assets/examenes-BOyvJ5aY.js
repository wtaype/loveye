import{j as s}from"./vendor-gzd0YkcT.js";import{w as i}from"./main-D-HI7k_o.js";import"./firebase-xYuwcABI.js";const o=[{icon:"fa-eye-dropper",color:"--info",title:"Examen de Agudeza Visual",desc:"Mide qué tan bien puedes ver detalles a diferentes distancias usando la tabla de Snellen (letras) o Landolt (círculos).",procedimiento:"Te sientas a 6 metros de una tabla con letras de diferentes tamaños. Cubres un ojo y lees las letras más pequeñas que puedas ver. Luego repites con el otro ojo.",detecta:["Miopía (dificultad para ver de lejos)","Hipermetropía (dificultad para ver de cerca)","Astigmatismo (visión distorsionada)","Necesidad de lentes correctivos"]},{icon:"fa-gauge-high",color:"--error",title:"Tonometría (Presión Intraocular)",desc:"Mide la presión dentro del ojo para detectar glaucoma. Es rápido, indoloro y crucial para prevenir ceguera.",procedimiento:"Se aplican gotas anestésicas. Un tonómetro toca suavemente la córnea o usa un soplo de aire para medir la presión. Toma solo segundos.",detecta:["Glaucoma (presión elevada)","Riesgo de daño al nervio óptico","Hipertensión ocular","Efectividad del tratamiento de glaucoma"]},{icon:"fa-microscope",color:"--Cielo",title:"Lámpara de Hendidura (Biomicroscopía)",desc:"Examen detallado de las estructuras del ojo usando un microscopio especial con luz intensa.",procedimiento:"Apoyas tu mentón y frente en el equipo. El oftalmólogo examina la córnea, iris, cristalino y retina con luz magnificada. No duele.",detecta:["Cataratas","Úlceras o rasguños en la córnea","Degeneración macular","Infecciones o inflamaciones","Cuerpos extraños en el ojo"]},{icon:"fa-circle-dot",color:"--warning",title:"Fondo de Ojo (Oftalmoscopía)",desc:"Examina la retina, nervio óptico y vasos sanguíneos en la parte posterior del ojo.",procedimiento:"Se dilatan las pupilas con gotas. El doctor usa un oftalmoscopio para ver dentro del ojo. Tu visión estará borrosa por 4-6 horas después.",detecta:["Retinopatía diabética","Degeneración macular","Desprendimiento de retina","Daño al nervio óptico (glaucoma)","Hipertensión arterial (cambios en vasos)"]},{icon:"fa-chart-area",color:"--success",title:"Campimetría (Campo Visual)",desc:"Evalúa tu visión periférica (lateral) para detectar pérdida de campo visual causada por glaucoma u otras condiciones.",procedimiento:"Miras un punto central mientras aparecen luces en tu visión periférica. Presionas un botón cada vez que ves una luz. Dura 10-15 minutos.",detecta:["Glaucoma (pérdida de visión periférica)","Daño al nervio óptico","Problemas neurológicos","Desprendimiento de retina","Tumores cerebrales"]},{icon:"fa-glasses",color:"--Mora",title:"Refracción (Graduación)",desc:"Determina la prescripción exacta de lentes que necesitas para corregir tu visión.",procedimiento:'Miras a través de un foróptero (aparato con muchos lentes) mientras el doctor cambia lentes preguntando "¿mejor 1 o 2?". Toma 15-20 minutos.',detecta:["Graduación exacta de miopía","Graduación de hipermetropía","Grado de astigmatismo","Presbicia (vista cansada)","Necesidad de lentes bifocales o progresivos"]},{icon:"fa-brain",color:"--Dulce",title:"OCT (Tomografía de Coherencia Óptica)",desc:"Tecnología avanzada que crea imágenes 3D de alta resolución de la retina y nervio óptico.",procedimiento:"Apoyas tu cabeza en el equipo y miras una luz. El escáner toma imágenes en segundos. No requiere contacto ni dilatación.",detecta:["Degeneración macular temprana","Edema macular diabético","Glaucoma (daño al nervio óptico)","Agujeros maculares","Membranas epirretinianas"]},{icon:"fa-palette",color:"--Paz",title:"Test de Daltonismo (Ishihara)",desc:"Evalúa tu capacidad para distinguir colores, especialmente rojo-verde.",procedimiento:"Miras láminas con círculos de colores que forman números. Debes identificar los números que ves. Toma 5 minutos.",detecta:["Daltonismo rojo-verde","Daltonismo azul-amarillo","Acromatopsia (ceguera total al color)","Deficiencias de visión cromática"]}],c=[{edad:"0-5",titulo:"Bebés y Preescolares",desc:"Examen al nacer, 6 meses, 3 años y antes del colegio. Detección temprana de ambliopía."},{edad:"6-17",titulo:"Niños y Adolescentes",desc:"Cada 1-2 años. Periodo crítico de desarrollo visual y aparición de miopía."},{edad:"18-39",titulo:"Adultos Jóvenes",desc:"Cada 2-4 años si no hay problemas. Anual si usas lentes o tienes antecedentes."},{edad:"40-64",titulo:"Adultos Medios",desc:"Cada 2-4 años. Inicio de presbicia y mayor riesgo de glaucoma."},{edad:"65+",titulo:"Adultos Mayores",desc:"Examen anual obligatorio. Alto riesgo de cataratas, glaucoma y degeneración macular."}],r=[{icon:"fa-list-check",title:"Lista de Síntomas",desc:"Anota cualquier cambio en tu visión, dolores de cabeza, visión borrosa o molestias. Ayuda al diagnóstico."},{icon:"fa-pills",title:"Medicamentos Actuales",desc:"Lleva lista de todos tus medicamentos. Algunos afectan la visión o presión ocular."},{icon:"fa-glasses",title:"Lentes y Recetas Previas",desc:"Lleva tus lentes actuales y recetas anteriores para comparar cambios en tu graduación."},{icon:"fa-car",title:"Transporte Planificado",desc:"Si te dilatan las pupilas, no podrás conducir por 4-6 horas. Planifica transporte."},{icon:"fa-clock",title:"Llega Temprano",desc:"Llega 10-15 minutos antes para llenar formularios y relajarte antes del examen."},{icon:"fa-question-circle",title:"Prepara Preguntas",desc:"Anota dudas sobre tu salud visual, lentes de contacto, cirugías o tratamientos."}],d=()=>`
  <div class="examenes_container">
    <!-- HERO SECTION -->
    <section class="exam_hero">
      <div class="exam_hero_content">
        <h1>
          <span class="highlight">Exámenes:</span> Pruebas Oftalmológicas Esenciales
        </h1>
        <p>
          Los exámenes oculares regulares son fundamentales para detectar problemas temprano, 
          cuando son más tratables. Muchas enfermedades oculares no presentan síntomas hasta 
          etapas avanzadas.
        </p>
        <p>
          <strong>Importante:</strong> La detección temprana puede salvar tu visión. 
          No esperes a tener síntomas para hacerte un examen completo. 👨‍⚕️💙
        </p>
      </div>
      <div class="exam_hero_visual">
        <img src="/loveye/examenes.png" alt="Exámenes Oftalmológicos" class="exam_hero_img" loading="lazy">
      </div>
    </section>

    <!-- EXÁMENES PRINCIPALES -->
    <section class="examenes_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-clipboard-list"></i>
          Exámenes Oftalmológicos Principales
        </h2>
        <p class="section_subtitle">
          Conoce los exámenes más comunes, cómo se realizan y qué condiciones detectan
        </p>
        <div class="section_line"></div>
      </div>
      <div class="examenes_grid">
        ${o.map(e=>`
          <div class="examen_card">
            <div class="examen_header">
              <div class="examen_icon" style="background: linear-gradient(135deg, var(${e.color}) 0%, var(--hv) 100%); color: var(--txa);">
                <i class="fas ${e.icon}"></i>
              </div>
              <h3 class="examen_title">${e.title}</h3>
            </div>
            <p class="examen_desc">${e.desc}</p>
            
            <div class="examen_info">
              <h4><i class="fas fa-stethoscope"></i> Procedimiento:</h4>
              <p>${e.procedimiento}</p>
            </div>

            <div class="examen_detecta">
              <h4><i class="fas fa-magnifying-glass"></i> Qué Detecta:</h4>
              <ul>
                ${e.detecta.map(a=>`
                  <li><i class="fas fa-check-circle"></i> ${a}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- FRECUENCIA RECOMENDADA -->
    <section class="frecuencia_section">
      <div class="frecuencia_header">
        <h2>📅 ¿Con Qué Frecuencia Debo Hacerme Exámenes?</h2>
        <p>
          La frecuencia de los exámenes varía según tu edad, salud y factores de riesgo. 
          Aquí están las recomendaciones generales de la Academia Americana de Oftalmología.
        </p>
      </div>
      <div class="frecuencia_grid">
        ${c.map(e=>`
          <div class="frecuencia_card">
            <div class="frecuencia_edad">${e.edad} años</div>
            <div class="frecuencia_titulo">${e.titulo}</div>
            <p class="frecuencia_desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- PREPARACIÓN -->
    <section class="preparacion_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-clipboard-check"></i>
          Cómo Prepararte para tu Examen
        </h2>
        <p class="section_subtitle">
          Sigue estos consejos para aprovechar al máximo tu visita al oftalmólogo
        </p>
        <div class="section_line"></div>
      </div>
      <div class="preparacion_grid">
        ${r.map(e=>`
          <div class="preparacion_card">
            <div class="preparacion_header">
              <div class="preparacion_icon">
                <i class="fas ${e.icon}"></i>
              </div>
              <h3 class="preparacion_title">${e.title}</h3>
            </div>
            <p class="preparacion_desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
`,m=()=>{console.log("✅ Exámenes completado"),i(".examen_card",()=>{s(".examen_card").each((e,a)=>{setTimeout(()=>{s(a).css({opacity:"0",transform:"translateY(30px)"}),setTimeout(()=>{s(a).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateY(0)"})},50)},e*100)})}),i(".frecuencia_card",()=>{s(".frecuencia_card").each((e,a)=>{setTimeout(()=>{s(a).css({opacity:"0",transform:"scale(0.8)"}),setTimeout(()=>{s(a).css({transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"scale(1)"})},50)},e*150)})}),i(".preparacion_card",()=>{s(".preparacion_card").each((e,a)=>{setTimeout(()=>{s(a).css({opacity:"0",transform:"translateX(-30px)"}),setTimeout(()=>{s(a).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateX(0)"})},50)},e*120)})})},p=()=>{console.log("🧹 Exámenes limpiado")};export{p as cleanup,m as init,d as render};
