const flow = {
  main: {
    text: [
      "🎯 En este Módulo 0: *Buscando tus Pepitas de Oro*, aprenderemos algunos conceptos básicos sobre finanzas personales de una manera sencilla y divertida.",
      "💰✨¿Quieres continuar?",
    ],

    trigger: ["ucurso"],
  },
  options: {
    text: ["👉 Sí", "😕 No"],
  },
  level1: {
    text: [
      "📍 ¡Perfecto! Comencemos, me gustaría saber tu nombre. A partir de ahora, usaré ese nombre para conversar contigo.",
      "😊 ¿Cómo te llamas?",
    ],
    trigger: ["si"],
  },

  level2: {
    text: [
      "🌟 Hola [Nombre], me alegra mucho conocerte. ¡Ahora vamos por tus pepitas de oro!",
      "🏆 Primero, hablemos de algo muy importante: ¿qué son las finanzas personales?",
      "Las finanzas personales son simplemente la forma en que administras tu dinero.",
      "💸 Incluye cosas como:",
      "Ahorrar. Guardar un poquito de lo que ganas para el futuro.",
      "🏦 Gastar. Usar tu dinero para comprar lo que necesitas (o deseas).",
      "🛍️ Ganar. Recibir dinero por tu trabajo o actividades. ",
      "💼 Invertir. Hacer que tu dinero crezca, por ejemplo, poniendo una parte en un negocio o proyecto.",
      " 📈 Ahora dime, ¿has pensado alguna vez en cuánto ahorras o gastas al mes?",
    ],
    trigger: ["si"],
  },

  level3: {
    text: [
      "📝 ¡Genial! Tener una idea clara de tus gastos es el primer paso.",
      "¿Te gustaría aprender a hacer un presupuesto sencillo para organizar mejor tu dinero?",
    ],
    trigger: ["si"],
  },

  level4: {
    text: [
      "📊 ¡Perfecto! Un presupuesto es como un mapa que te guía hacia tus metas financieras.",
      "Te voy a enseñar cómo hacerlo en tres pasos simples:",
      "Registra tus ingresos y gastos. Anota todo lo que ganas y todo lo que gastas.",
      "📝 Divide tus gastos en esenciales (comida, vivienda) y no esenciales (compras, entretenimiento).",
      "🔍 Ahorra al menos un pequeño porcentaje de tus ingresos. ¡Aunque sea un poquito! ",
      "🌱 Con un presupuesto podrás tener control sobre tu dinero.",
      "¿Te gustaría recibir más tips sobre cómo hacer tu primer presupuesto?`",
    ],
    trigger: ["si"],
  },

  level5: {
    text: [
      "Tips adicionales sobre presupuesto",
      "🎯 Tip 1: Dividir tu dinero según lo que necesitas (comida, transporte, ahorro). 📲",
      "🎯 Tip 2: Establece metas claras, como *Ahorrar para una emergencia S/.5 al día*. 🏦",
      "🎯 Tip 3: Revisa tu presupuesto cada semana o mes para hacer ajustes. 🔄",
      "Espero que estos consejos te sean útiles, [Nombre]. Ahora, dime, ¿qué área te gustaría mejorar más en tus finanzas: Ahorro o Gastos?",
    ],
    trigger: ["si"],
  },

  level6: {
    text: `Fin del curso, puedes buscar como *Ahorro* en google`,
    trigger: ["ahorro"],
  },

  level7: {
    text: `Fin del curso, puedes buscar como *google* en google`,
    trigger: ["gastos"],
  },

  exit: {
    text: `Entendemos que por ahora no puedas llevar el curso, sin embargo estaré aqui cuando desees regresar 😇`,
    trigger: ["no"],
  },
};
exports.flow = flow;
