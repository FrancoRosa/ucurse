const flow = {
  C1: {
    //
    keyword: ["Curso pallaqueras", "pallaqueras"],
    answers: [
      "¡Hola! 🎯 En este Módulo 0: *Buscando tus Pepitas de Oro*, aprenderemos algunos conceptos básicos sobre finanzas personales de una manera sencilla y divertida.",
      "💰✨¿Quieres continuar?",
    ],
    flows: ["C2", "C5"],
  },
  C3: {
    //
    keyword: ["no"],
    answers: [
      "Ok! Entiendo. Sin embargo, recuerda que estaré aqui para ayudarte a tener más pepitas de oro 😇",
      "Recuerda que en cualquier momento puedes animarte a retomar el curso",
    ],
  },

  C2: {
    //
    keyword: ["si", "sí", "sì"],
    answers: [
      "📍 ¡Perfecto! Para empezar, me encantaría saber tu nombre. A partir de ahora, lo usaré para dirigirme a ti durante nuestras conversaciones.",
      "😊 ¿Cómo te llamas?",
    ],
  },

  C4: {
    //
    answers: [
      "🏆 Primero, hablemos de algo muy importante: ¿qué son las finanzas personales?",
      "*Las finanzas personales son simplemente la forma en que administras tu dinero.*",
      "💸 Algunas de estas cosas ya las haces y otras las aprenderemos juntas:",
      "1. 🏦 Ahorrar. Guardar un poquito de lo que ganas para el futuro.",
      "2. 🛍️ Gastar. Usar tu dinero para comprar lo que necesitas (o deseas). ",
      "3. 💼 Ganar. Recibir dinero por tu trabajo o actividades. ",
      "4. 📈 Invertir. Hacer que tu dinero crezca, por ejemplo, poniendo una parte en un negocio o proyecto.",
      " 🤔 Ahora dime, ¿has pensado alguna vez en cuánto ahorras o gastas al mes?",
    ],
  },

  C4i: {
    //
    answers:
      "🌟 Hola *[Nombre]*, me alegra mucho conocerte. ¡Ahora vamos por tus pepitas de oro!",
  },

  C5: {
    //
    keyword: ["si", "sí", "sì"],
    answers: [
      "📝 ¡Genial! Tener una idea clara de tus gastos es el primer paso.",
      "¿Te gustaría aprender a hacer un presupuesto sencillo para organizar mejor tu dinero?",
    ],
  },

  C7: {
    //
    keyword: ["si", "sí", "sì"],
    answers: [
      "📊 ¡Perfecto! Un presupuesto es como un mapa que te guía hacia tus metas financieras.",
      "Toma un lápiz y un papel. Te voy a enseñar cómo hacerlo en tres pasos simples:",
      "1. ✍🏾Registra tus ingresos. Anota todo lo que ganas.",
      "2. 📝Registra todo lo que gastas. Separa tus gastos en esenciales (comida, vivienda) y no esenciales (ropa, entretenimiento). ",
      "3. 🌱 Ahorra. Guarda al menos un poquito de tus ingresos como pallaquera. ¡Aunque sea un poquito! ",
      "💰 Con un presupuesto podrás tener control sobre tu dinero.",
      "🤑 🤑 🤑",
      "¿Te gustaría recibir más tips sobre cómo hacer tu primer presupuesto?",
    ],
  },

  C9: {
    //
    answers: [
      "*Pepitas de oro* adicionales sobre presupuesto",
      "🎯 Tip 1: Dividir tu dinero según lo que necesitas (comida, transporte, ahorro). 📲",
      "🎯 Tip 2: Establece metas claras, como *Ahorrar para una emergencia S/.5 al día*. 🏦",
      "🎯 Tip 3: Revisa tu presupuesto cada semana o mes para hacer ajustes. 🔄",
      "🤑 🤑 🤑",
      "Espero que estos consejos te sean útiles, para lograr obtener tus tesoros más deseados.",
      "Nos vemos en un siguiente módulo 😁",
    ],
    keyword: ["si", "sí", "sì"],
  },

  C6: {
    //
    keyword: ["no"],
    answers: [
      "¡No te preocupes!",
      " Es normal no tenerlo claro al principio😥. Muchas personas no nos damos cuenta de cuánto gastamos o ahorramos cada mes.",
      "¿Te gustaria que te dé “una pepita de oro” para aprender hacerlo? 🤓",
    ],
  },

  C8: {
    //
    keyword: ["si", "sí", "sì"],
    answers: [
      "¡Te voy a enseñar tips para hacerlo:",

      "1: 🤓 Si cada día compras algo de más en la tienda, intenta ver si puedes guardar este pequeño gasto.",
      "2: 🤑 Separa una pequeña parte de tu pago como pallaquera y guardala.",
      "¡Con eso puedes empezar tu ahorro! ¿Te gustaria saber más?",
    ],
  },
  C10: {
    //
    keyword: ["si", "sí", "sì"],
    answers: [
      "¡Es totalmente normal que al principio parezca difícil! aprender  conceptos como ingresos y gastos",
      "¿Te gustaria saber más?",
      "💰 *Ingresos:* Es el dinero que recibes. Puede ser por el trabajo que haces como pallaquera o cualquier otra actividad que te paguen.",
      "💸 *Gastos:* Es el dinero que usas para comprar lo que necesitas, como comida, ropa o transporte.",
      "¿Te gustaria seguir aprendiendo?",
    ],
  },

  C11: {
    //
    keyword: ["si", "sí", "sì"],
    answers:
      "Felicitaciones por finalizar este primer módulo, ahora sabes más acerca de finanzas y tomaras mejores decisiones. Nos vemos en un siguiente módulo 🤑",
  },
  options: {
    //
    answers: ["👉 Sí", "😕 No"],
  },
};
exports.flow = flow;
