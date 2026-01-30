import './chatwil.css';
import $ from 'jquery';
import { version } from '../wii.js';
import * as brain from './brain.js';
import * as memoria from './memoria.js';
import * as salud from './head/salud.js';

export const render = () => `
<div class="miia">
  <div class="miia_messages" id="miiaMessages">
    <div class="miia_empty">
      <div class="miia_welcome_icon">
        <img src="/smile.avif" alt="ChatWil" class="welcome_avatar">
      </div>
      <h2 class="miia_welcome_title">¡Hola! Soy ChatWil 👁️💚</h2>
      <p class="miia_welcome_text">
        Tu asistente especializado en <strong>salud ocular</strong>. Puedo ayudarte con 
        <strong>cuidado de tus ojitos</strong>, <strong>prevención</strong>, 
        <strong>tratamientos</strong>, <strong>nutrición</strong> y mucho más. 
        Háblame con confianza, estoy aquí para cuidar tu visión.
      </p>
      <div class="miia_suggestions">
        <div class="suggestion_card" data-prompt="¿Cómo estás, amigo?">
          <i class="fas fa-heart"></i><span>¿Cómo estás, amigo?</span>
        </div>
        <div class="suggestion_card" data-prompt="Tengo ojo seco, ¿qué hago amigo?">
          <i class="fas fa-droplet"></i><span>Tengo ojo seco</span>
        </div>
        <div class="suggestion_card" data-prompt="Ora por mi sanación">
          <i class="fas fa-hands-praying"></i><span>Ora por mi sanación</span>
        </div>
        <div class="suggestion_card" data-prompt="Alimentos para mi vista">
          <i class="fas fa-apple-whole"></i><span>Alimentos para mi vista</span>
        </div>
      </div>
    </div>
  </div>
  <div class="miia_input_area">
    <div class="miia_input_wrapper">
      <textarea class="miia_input" id="miiaInput" placeholder="Pregúntame sobre salud ocular... 👁️💚" rows="1"></textarea>
      <button class="miia_send" id="miiaSend" disabled>
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
    <div class="miia_input_info">
      <span><i class="fas fa-info-circle"></i> Presiona <kbd>Enter</kbd> para enviar <i class="fas fa-info-circle"></i> Al usar ChatWil aceptas los <a href="https://chatwiil.web.app/terminos.html" target="_blank">Términos y Condiciones</a></span>
    </div>
  </div>
</div>`;

// ==================== PARTE 1: ESTADO Y UTILIDADES ====================
let escribiendo = false, contador = 0;
const obtenerEl = () => ({ $msg: $('#miiaMessages'), $inp: $('#miiaInput'), $btn: $('#miiaSend') });
const desplazar = (suave = false) => {
  const { $msg } = obtenerEl();
  if (!$msg.length) return;
  const c = $msg[0];
  suave ? c.scrollTo({ top: c.scrollHeight, behavior: 'smooth' }) : c.scrollTop = c.scrollHeight;
};

// ==================== PARTE 2: MENSAJES Y EFECTOS ====================
const agregarMsg = (texto, tipo) => {
  const { $msg } = obtenerEl();
  const hora = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
  const avatar = tipo === 'user' ? '<i class="fas fa-user-circle"></i>' : '<img src="/smile.avif" alt="ChatWil" class="message_avatar_img">';
  const nombre = tipo === 'user' ? 'Tú' : 'ChatWil';
  
  const $m = $(`
    <div class="miia_message ${tipo}" data-time="${hora}">
      <div class="message_avatar">${avatar}</div>
      <div class="message_content">
        <div class="message_header">
          <span class="message_name">${nombre}</span>
          <span class="message_time">${hora}</span>
        </div>
        <div class="message_text"></div>
      </div>
    </div>
  `);
  
  $m.find('.message_text').text(texto);
  $msg.append($m);
  desplazar();
};

const mostrarEscribiendo = (mostrar) => {
  const { $msg } = obtenerEl();
  $('.miia_message.typing').remove();
  if (mostrar) {
    $msg.append(`
      <div class="miia_message ai typing">
        <div class="message_avatar"><img src="/smile.avif" alt="ChatWil" class="message_avatar_img"></div>
        <div class="message_content">
          <div class="message_text"><div class="typing_dots"><span></span><span></span><span></span></div></div>
        </div>
      </div>
    `);
    desplazar();
  }
};

const escribirTexto = (contenido, callback) => {
  const { $msg } = obtenerEl();
  const hora = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
  const id = `tw_${Date.now()}_${++contador}`;
  
  $msg.append(`
    <div class="miia_message ai" data-time="${hora}">
      <div class="message_avatar"><img src="/smile.avif" alt="ChatWil" class="message_avatar_img"></div>
      <div class="message_content">
        <div class="message_header">
          <span class="message_name">ChatWil</span>
          <span class="message_time">${hora}</span>
        </div>
        <div class="message_text" id="${id}"></div>
      </div>
    </div>
  `);
  
  desplazar();
  
  const $el = $(`#${id}`);
  const texto = contenido.replace(/\n/g, ' ');
  
  let idx = 0, ultimoScroll = 0;
  const velocidad = 15, intervaloScroll = 100;
  
  const escribir = () => {
    if (idx < texto.length) {
      $el.text(texto.substring(0, idx + 1));
      idx++;
      
      const ahora = Date.now();
      if (ahora - ultimoScroll > intervaloScroll) {
        desplazar();
        ultimoScroll = ahora;
      }
      
      setTimeout(escribir, velocidad);
    } else {
      $el.removeAttr('id');
      desplazar(true);
      callback && callback();
    }
  };
  
  escribir();
};

// ==================== PARTE 3: EVENTOS Y CONTROL ====================
const enviarMsg = async () => {
  const { $inp } = obtenerEl();
  const msg = $inp.val().trim();
  
  if (!msg || escribiendo) return;
  
  $('.miia_empty').fadeOut(200, function() { $(this).remove(); });
  agregarMsg(msg, 'user');
  $inp.val('').css('height', 'auto').trigger('input');
  
  escribiendo = true;
  mostrarEscribiendo(true);
  
  try {
    const res = await brain.procesar(msg);
    mostrarEscribiendo(false);
    if (!res || typeof res !== 'string') throw new Error('Respuesta inválida');
    escribirTexto(res, () => {
      escribiendo = false;
      actualizarSiguientePregunta(msg, res); // 🆕 Actualizar siguiente pregunta según contexto
    });
  } catch (err) {
    console.error('❌ Error:', err);
    mostrarEscribiendo(false);
    agregarMsg('😔 Disculpa, tuve un problema. Por favor, intenta de nuevo. 💚', 'ai');
    escribiendo = false;
  }
};

const actualizarSiguientePregunta = (pregunta) => {
  const { $inp } = obtenerEl();
  
  const tema = salud.detectarTema(pregunta);
  if (tema) memoria.setTemaActual(tema);
  
  const siguientePregunta = salud.getSiguientePregunta();
  if (siguientePregunta) {
    memoria.incrementarContador();
    $inp.val(siguientePregunta);
    $inp.trigger('input');
  } else {
    memoria.resetearConversacion();
    $inp.val('');
    $inp.attr('placeholder', 'Pregúntame sobre salud ocular... 👁️💚');
  }
};

export const init = () => {
  const { $inp, $btn } = obtenerEl();
  
  $inp.on('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    const tieneTxt = $(this).val().trim().length > 0;
    $btn.prop('disabled', !tieneTxt).toggleClass('active', tieneTxt);
  });
  
  $inp.on('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviarMsg(); } });
  $btn.on('click', enviarMsg);
  $(document).on('click', '.suggestion_card', function() {
    $inp.val($(this).data('prompt')).css('height', 'auto').trigger('input').focus();
  });
  
  memoria.loadHistory();
  console.log(`✅ ChatWil IA ${version} iniciado`);
};

export const cleanup = () => {
  $('#miiaInput, #miiaSend').off();
  $(document).off('click', '.suggestion_card');
  memoria.clear();
  console.log('🧹 ChatWil IA limpiado');
};