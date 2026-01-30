import * as memoria from './memoria.js';
import * as ojitos from './head/ojitos.js';
import * as salud from './head/salud.js';
import * as amabilidad from './head/amabilidad.js';
import * as hope from './head/hope.js';
import * as estados from './head/estados.js';
import * as etica from './head/etica.js';

const modulos = [amabilidad, hope, estados, ojitos, salud, etica];

export const procesar = async (mensaje) => {
  memoria.add('user', mensaje);
  
  const tipoPregunta = salud.detectarPreguntaContextual(mensaje);
  const temaActual = memoria.getTemaActual();
  
  if (tipoPregunta && temaActual) {
    const respuestaContextual = salud.getRespuestaContextual(tipoPregunta, temaActual);
    if (respuestaContextual) {
      const conFe = respuestaContextual + '\n\n' + hope.getMensajeEsperanza();
      memoria.add('assistant', conFe);
      return conFe;
    }
  }
  
  for (const mod of modulos) {
    if (mod.generate) {
      const res = mod.generate(mensaje);
      if (res) {
        let respuestaFinal = res;
        if (mod === ojitos || mod === salud) {
          respuestaFinal = res + '\n\n' + hope.getMensajeEsperanza();
        }
        memoria.add('assistant', respuestaFinal);
        return respuestaFinal;
      }
    }
  }
  
  const fallback = '💙😊 Me gustaría ayudarte, amig@. ¿Puedes contarme más sobre lo que necesitas? Estoy aquí para ti con todo mi corazón. 💚✨';
  memoria.add('assistant', fallback);
  return fallback;
};