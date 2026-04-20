import{j as i}from"./vendor-gzd0YkcT.js";import{w as s}from"./main-aeTy8pS8.js";import"./firebase-xYuwcABI.js";const o=[{icon:"fa-droplet-slash",color:"--Cielo",title:"Ojo Seco (Xeroftalmía)",desc:"Condición crónica donde los ojos no producen suficientes lágrimas o las lágrimas se evaporan demasiado rápido, causando incomodidad y problemas de visión.",sintomas:["Sensación de ardor o picazón","Enrojecimiento ocular","Sensibilidad a la luz","Visión borrosa intermitente","Sensación de cuerpo extraño"],tratamiento:["Lágrimas artificiales sin conservantes (4-6 veces al día)","Geles lubricantes antes de dormir","Compresas tibias en los párpados (10-15 min)","Aumentar consumo de Omega-3","Humidificador en ambientes secos","Evitar aire acondicionado directo"]},{icon:"fa-eye-dropper",color:"--error",title:"Hemorragia Subconjuntival (Sangre en el Ojo)",desc:"Ruptura de un vaso sanguíneo pequeño debajo de la conjuntiva, causando una mancha roja brillante en la parte blanca del ojo. Generalmente inofensiva.",sintomas:["Mancha roja brillante en el ojo","Sin dolor (usualmente)","Sin cambios en la visión","Puede aparecer al despertar","Sensación leve de cuerpo extraño"],tratamiento:["No requiere tratamiento específico","Desaparece sola en 1-2 semanas","Lágrimas artificiales para comodidad","Evitar frotarse el ojo","Consultar si ocurre frecuentemente","Controlar presión arterial si es recurrente"]},{icon:"fa-bacteria",color:"--warning",title:"Orzuelo (Perrilla)",desc:"Infección bacteriana de las glándulas sebáceas del párpado, formando un bulto doloroso y rojo similar a un grano.",sintomas:["Bulto rojo y doloroso en el párpado","Hinchazón del párpado","Sensibilidad al tacto","Lagrimeo excesivo","Sensación de cuerpo extraño"],tratamiento:["Compresas tibias (10-15 min, 3-4 veces al día)","NO exprimir ni reventar","Limpieza suave con agua tibia","Evitar maquillaje hasta que sane","Antibiótico tópico si lo receta el médico","Consultar si no mejora en 48 horas"]},{icon:"fa-virus",color:"--Dulce",title:"Conjuntivitis (Ojo Rojo)",desc:"Inflamación de la conjuntiva causada por virus, bacterias o alergias. Muy contagiosa en casos virales y bacterianos.",sintomas:["Enrojecimiento intenso","Secreción (clara, amarilla o verde)","Picazón o ardor","Lagrimeo excesivo","Párpados pegados al despertar"],tratamiento:["Compresas frías para alivio","Lágrimas artificiales","Antibiótico si es bacteriana (receta médica)","Antihistamínico si es alérgica","Lavar manos frecuentemente","No compartir toallas ni almohadas"]},{icon:"fa-eye-slash",color:"--Mora",title:"Blefaritis (Inflamación del Párpado)",desc:"Inflamación crónica de los bordes de los párpados, causando irritación, enrojecimiento y formación de costras.",sintomas:["Párpados rojos e hinchados","Costras en las pestañas","Picazón en los párpados","Sensación de ardor","Pérdida de pestañas"],tratamiento:["Limpieza diaria de párpados con champú suave","Compresas tibias (2 veces al día)","Masaje suave de párpados","Lágrimas artificiales","Antibiótico tópico si lo receta el médico","Evitar maquillaje durante el tratamiento"]},{icon:"fa-bolt",color:"--success",title:"Fatiga Visual Digital",desc:"Cansancio ocular causado por uso prolongado de pantallas digitales, muy común en la era moderna.",sintomas:["Ojos cansados o pesados","Visión borrosa temporal","Dolor de cabeza","Ojos secos","Dificultad para enfocar"],tratamiento:["Regla 20-20-20 (cada 20 min, 20 seg, 20 pies)","Ajustar brillo y contraste de pantalla","Usar filtro de luz azul","Parpadear conscientemente","Lágrimas artificiales","Posicionar pantalla a 50-60 cm"]}],n=[{emoji:"🧊",name:"Compresas Frías",desc:"Reduce inflamación y alivia ojos cansados. Aplica por 10-15 minutos."},{emoji:"♨️",name:"Compresas Tibias",desc:"Ayuda con orzuelos y blefaritis. Desbloquea glándulas sebáceas."},{emoji:"💧",name:"Lágrimas Artificiales",desc:"Lubrica y alivia ojos secos. Usa sin conservantes si es frecuente."},{emoji:"🥒",name:"Rodajas de Pepino",desc:"Efecto refrescante y descongestivo. Ideal para ojos cansados."},{emoji:"🍵",name:"Bolsitas de Té Verde",desc:"Propiedades antiinflamatorias. Aplicar frías sobre párpados cerrados."},{emoji:"💤",name:"Descanso Adecuado",desc:"Dormir 7-8 horas permite que tus ojos se recuperen completamente."}],l=()=>`
  <div class="tratamiento_container">
    <!-- HERO SECTION -->
    <section class="trat_hero">
      <div class="trat_hero_content">
        <h1>
          <span class="highlight">Tratamiento:</span> Soluciones para tus Ojitos
        </h1>
        <p>
          Cada condición ocular tiene su tratamiento específico. Aquí encontrarás información 
          profesional sobre las condiciones más comunes y cómo tratarlas adecuadamente.
        </p>
        <p>
          <strong>Importante:</strong> Esta información es educativa. Siempre consulta con un 
          oftalmólogo para un diagnóstico y tratamiento personalizado. 👨‍⚕️💙
        </p>
      </div>
      <div class="trat_hero_visual">
        <img src="/loveye/tratamiento.jpg" alt="Tratamiento Ocular" class="trat_hero_img" loading="lazy">
      </div>
    </section>

    <!-- CONDICIONES COMUNES -->
    <section class="condiciones_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-pills"></i>
          Condiciones Comunes y sus Tratamientos
        </h2>
        <p class="section_subtitle">
          Conoce las condiciones oculares más frecuentes, sus síntomas y opciones de tratamiento
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
            
            <div class="condicion_sintomas">
              <h4><i class="fas fa-exclamation-triangle"></i> Síntomas:</h4>
              <ul>
                ${a.sintomas.map(e=>`
                  <li><i class="fas fa-circle"></i> ${e}</li>
                `).join("")}
              </ul>
            </div>

            <div class="condicion_tratamiento">
              <h4><i class="fas fa-heart-pulse"></i> Tratamiento:</h4>
              <ul>
                ${a.tratamiento.map(e=>`
                  <li><i class="fas fa-check-circle"></i> ${e}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- REMEDIOS CASEROS -->
    <section class="remedios_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-house-medical"></i>
          Remedios Caseros Seguros
        </h2>
        <p class="section_subtitle">
          Complementa tu tratamiento médico con estos remedios naturales y seguros
        </p>
        <div class="section_line"></div>
      </div>
      <div class="remedios_grid">
        ${n.map(a=>`
          <div class="remedio_card">
            <span class="remedio_emoji">${a.emoji}</span>
            <h3 class="remedio_name">${a.name}</h3>
            <p class="remedio_desc">${a.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- ADVERTENCIA MÉDICA -->
    <section class="advertencia_section">
      <div class="advertencia_icon">⚠️</div>
      <h2 class="advertencia_title">¡IMPORTANTE! Cuándo Acudir al Oftalmólogo</h2>
      <p class="advertencia_text">
        Algunos síntomas requieren atención médica inmediata. No esperes si experimentas:
      </p>
      <ul class="advertencia_list">
        <li><i class="fas fa-circle-exclamation"></i> Pérdida súbita de visión</li>
        <li><i class="fas fa-circle-exclamation"></i> Dolor ocular intenso</li>
        <li><i class="fas fa-circle-exclamation"></i> Destellos de luz o moscas volantes repentinas</li>
        <li><i class="fas fa-circle-exclamation"></i> Trauma o lesión ocular</li>
        <li><i class="fas fa-circle-exclamation"></i> Enrojecimiento con dolor y visión borrosa</li>
        <li><i class="fas fa-circle-exclamation"></i> Síntomas que empeoran o no mejoran en 48 horas</li>
      </ul>
      <p class="advertencia_text" style="margin-top: 3vh;">
        <strong>Recuerda:</strong> La detección y tratamiento temprano pueden salvar tu visión. 
        Ante la duda, siempre consulta con un profesional. 💙👁️
      </p>
    </section>
  </div>
`,d=()=>{console.log("✅ Tratamiento completado"),s(".condicion_card",()=>{i(".condicion_card").each((a,e)=>{setTimeout(()=>{i(e).css({opacity:"0",transform:"translateY(30px)"}),setTimeout(()=>{i(e).css({transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"translateY(0)"})},50)},a*100)})}),s(".remedio_card",()=>{i(".remedio_card").each((a,e)=>{setTimeout(()=>{i(e).css({opacity:"0",transform:"scale(0.8)"}),setTimeout(()=>{i(e).css({transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",opacity:"1",transform:"scale(1)"})},50)},a*150)})})},m=()=>{console.log("🧹 Tratamiento limpiado")};export{m as cleanup,d as init,l as render};
