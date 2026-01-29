import{j as s}from"./vendor-gzd0YkcT.js";import{w as i}from"./main-dt-sCvLz.js";import"./main-R33uzj5h.js";import"./firebase-xYuwcABI.js";const o=[{icon:"fa-eye-low-vision",color:"--info",title:"Miopía (Vista Corta)",desc:"Dificultad para ver objetos lejanos con claridad. Los objetos cercanos se ven bien, pero los distantes aparecen borrosos.",caracteristicas:["Visión borrosa de lejos","Entrecerrar los ojos para ver mejor","Dolores de cabeza frecuentes","Fatiga visual al conducir","Dificultad para ver la pizarra o TV"],factores:["Genética familiar","Uso excesivo de pantallas","Poco tiempo al aire libre","Lectura prolongada en distancias cortas"]},{icon:"fa-glasses",color:"--success",title:"Hipermetropía (Vista Larga)",desc:"Dificultad para ver objetos cercanos. Los objetos lejanos se ven bien, pero leer o trabajar de cerca causa fatiga.",caracteristicas:["Visión borrosa de cerca","Fatiga ocular al leer","Dolores de cabeza después de leer","Dificultad para enfocar objetos cercanos","Ardor en los ojos"],factores:["Herencia genética","Forma del globo ocular","Edad (empeora con el tiempo)","Desarrollo ocular en la infancia"]},{icon:"fa-circle-half-stroke",color:"--Mora",title:"Astigmatismo",desc:"Curvatura irregular de la córnea que causa visión borrosa o distorsionada a todas las distancias.",caracteristicas:["Visión borrosa o distorsionada","Dificultad para ver detalles finos","Fatiga ocular","Dolores de cabeza","Dificultad para ver de noche"],factores:["Forma irregular de la córnea","Genética","Presente desde el nacimiento","Puede combinarse con miopía o hipermetropía"]},{icon:"fa-cloud",color:"--warning",title:"Cataratas",desc:"Opacidad del cristalino que causa visión nublada. Común en personas mayores de 60 años.",caracteristicas:["Visión nublada o borrosa","Colores apagados o amarillentos","Sensibilidad a la luz y deslumbramiento","Halos alrededor de las luces","Visión doble en un ojo"],factores:["Edad avanzada (principal factor)","Diabetes","Exposición prolongada al sol","Tabaquismo","Uso prolongado de corticosteroides"]},{icon:"fa-gauge-high",color:"--error",title:"Glaucoma",desc:"Daño al nervio óptico causado por presión intraocular elevada. Puede causar ceguera si no se trata.",caracteristicas:["Pérdida gradual de visión periférica","Visión de túnel en etapas avanzadas","Dolor ocular intenso (glaucoma agudo)","Náuseas y vómitos (glaucoma agudo)","Halos alrededor de las luces"],factores:["Presión intraocular elevada","Edad mayor de 60 años","Antecedentes familiares","Diabetes","Miopía alta"]},{icon:"fa-circle-dot",color:"--Dulce",title:"Degeneración Macular",desc:"Deterioro de la mácula (centro de la retina) que afecta la visión central. Común en mayores de 50 años.",caracteristicas:["Visión central borrosa o distorsionada","Líneas rectas que parecen onduladas","Dificultad para reconocer rostros","Necesidad de más luz para leer","Punto ciego en el centro de la visión"],factores:["Edad avanzada","Tabaquismo","Antecedentes familiares","Obesidad","Hipertensión arterial"]}],c=[{icon:"⚡",title:"Pérdida Súbita de Visión",desc:"Pérdida repentina de visión en uno o ambos ojos requiere atención inmediata."},{icon:"💥",title:"Dolor Ocular Intenso",desc:"Dolor severo acompañado de náuseas puede indicar glaucoma agudo."},{icon:"✨",title:"Destellos de Luz",desc:"Destellos repentinos o aumento de moscas volantes pueden indicar desprendimiento de retina."},{icon:"🎯",title:"Visión Doble",desc:"Ver doble repentinamente puede ser señal de problemas neurológicos graves."},{icon:"🔴",title:"Ojo Rojo con Dolor",desc:"Enrojecimiento intenso con dolor y visión borrosa requiere evaluación urgente."},{icon:"🌑",title:"Sombra o Cortina",desc:"Sensación de sombra o cortina cubriendo parte de la visión es una emergencia."}],r=[{edad:"0-5",titulo:"Primera Infancia",desc:"Examen visual completo al nacer, a los 6 meses y antes de entrar al colegio. Detección temprana de ambliopía (ojo perezoso) y estrabismo."},{edad:"6-18",titulo:"Niñez y Adolescencia",desc:"Examen anual o cada 2 años. Detección de miopía, astigmatismo y problemas de aprendizaje relacionados con la visión."},{edad:"20-39",titulo:"Adulto Joven",desc:"Examen cada 2-4 años si no hay problemas. Anual si usas lentes o tienes antecedentes familiares de enfermedades oculares."},{edad:"40-64",titulo:"Adulto Medio",desc:"Examen cada 2-4 años. A partir de los 40, revisar presión intraocular para detectar glaucoma temprano. Inicio de presbicia."},{edad:"65+",titulo:"Adulto Mayor",desc:"Examen anual obligatorio. Mayor riesgo de cataratas, glaucoma y degeneración macular. Detección temprana es crucial."}],u=()=>`
  <div class="diagnostico_container">
    <!-- HERO SECTION -->
    <section class="diag_hero">
      <div class="diag_hero_content">
        <h1>
          <span class="highlight">Diagnóstico:</span> Conoce las Condiciones Oculares
        </h1>
        <p>
          Entender las condiciones oculares más comunes te ayuda a reconocer síntomas tempranos 
          y buscar atención médica oportuna. La detección temprana puede salvar tu visión.
        </p>
        <p>
          <strong>Recuerda:</strong> Solo un oftalmólogo puede dar un diagnóstico preciso. 
          Esta información es educativa y no reemplaza la consulta médica. 👨‍⚕️💙
        </p>
      </div>
      <div class="diag_hero_visual">
        <img src="/loveye/v11/diagnostico.png" alt="Diagnóstico Ocular" class="diag_hero_img" loading="lazy">
      </div>
    </section>

    <!-- CONDICIONES PRINCIPALES -->
    <section class="condiciones_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-stethoscope"></i>
          Principales Condiciones Oculares
        </h2>
        <p class="section_subtitle">
          Conoce las condiciones más comunes, sus características y factores de riesgo
        </p>
        <div class="section_line"></div>
      </div>
      <div class="condiciones_grid">
        ${o.map(a=>`
          <div class="condicion_card">
            <div class="condicion_header">
              <div class="condicion_icon" style="background: linear-gradient(135deg, var(${a.color}) 0%, var(--hv) 100%); color: var(--txa);">
                <i class="fas ${a.icon}"></i>
              </div>
              <h3 class="condicion_title">${a.title}</h3>
            </div>
            <p class="condicion_desc">${a.desc}</p>
            
            <div class="condicion_info">
              <h4><i class="fas fa-list-check"></i> Características:</h4>
              <ul>
                ${a.caracteristicas.map(e=>`
                  <li><i class="fas fa-circle-check"></i> ${e}</li>
                `).join("")}
              </ul>
            </div>

            <div class="condicion_factores">
              <h4><i class="fas fa-triangle-exclamation"></i> Factores de Riesgo:</h4>
              <ul>
                ${a.factores.map(e=>`
                  <li><i class="fas fa-circle"></i> ${e}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- SEÑALES DE ALERTA -->
    <section class="alertas_section">
      <div class="alertas_header">
        <h2>🚨 Señales de Alerta - Acude Inmediatamente</h2>
        <p>
          Estas señales requieren atención médica urgente. No esperes, tu visión está en riesgo.
        </p>
      </div>
      <div class="alertas_grid">
        ${c.map(a=>`
          <div class="alerta_card">
            <div class="alerta_icon">${a.icon}</div>
            <h3 class="alerta_title">${a.title}</h3>
            <p class="alerta_desc">${a.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- EXÁMENES POR EDAD -->
    <section class="examenes_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-calendar-check"></i>
          Exámenes Recomendados por Edad
        </h2>
        <p class="section_subtitle">
          La prevención y detección temprana son clave para mantener una visión saludable
        </p>
        <div class="section_line"></div>
      </div>
      <div class="examenes_timeline">
        ${r.map(a=>`
          <div class="examen_item">
            <div class="examen_edad">
              <div class="examen_edad_number">${a.edad}</div>
              <div class="examen_edad_label">años</div>
            </div>
            <div class="examen_content">
              <h3>${a.titulo}</h3>
              <p>${a.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
`,m=()=>{console.log("✅ Diagnóstico completado"),i(".condicion_card",()=>{s(".condicion_card").each((a,e)=>{setTimeout(()=>{s(e).css({opacity:"0",transform:"translateY(30px)"}),setTimeout(()=>{s(e).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateY(0)"})},50)},a*100)})}),i(".alerta_card",()=>{s(".alerta_card").each((a,e)=>{setTimeout(()=>{s(e).css({opacity:"0",transform:"scale(0.8)"}),setTimeout(()=>{s(e).css({transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"scale(1)"})},50)},a*120)})}),i(".examenes_timeline",()=>{s(".examen_item").each((a,e)=>{setTimeout(()=>{s(e).css({opacity:"0",transform:"translateX(-30px)"}),setTimeout(()=>{s(e).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateX(0)"})},50)},a*200)})})},p=()=>{console.log("🧹 Diagnóstico limpiado")};export{p as cleanup,m as init,u as render};
