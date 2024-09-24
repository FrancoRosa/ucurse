const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const JsonFileAdapter = require("@bot-whatsapp/database/json");
const { flow } = require("./content");
const C3 = addKeyword(flow.C3.keyword).addAnswer(flow.C3.answers);
const C9 = addKeyword(flow.C9.keyword).addAnswer(flow.C9.answers);

const C11 = addKeyword(flow.C11.keyword).addAnswer(flow.C11.answers);
const C10 = addKeyword(flow.C10.keyword)
  .addAnswer(flow.C10.answers)
  .addAnswer(flow.options.answers, null, null, [C11, C3]);
const C8 = addKeyword(flow.C8.keyword)
  .addAnswer(flow.C8.answers)
  .addAnswer(flow.options.answers, null, null, [C10, C3]);
const C7 = addKeyword(flow.C7.keyword)
  .addAnswer(flow.C7.answers)
  .addAnswer(flow.options.answers, null, null, [C9, C3]);
const C6 = addKeyword(flow.C6.keyword)
  .addAnswer(flow.C6.answers)
  .addAnswer(flow.options.answers, null, null, [C8, C3]);
const C5 = addKeyword(flow.C5.keyword)
  .addAnswer(flow.C5.answers)
  .addAnswer(flow.options.answers, null, null, [C7, C3]);

const C2 = addKeyword(flow.C2.keyword)
  .addAnswer(
    flow.C2.answers,
    { capture: true },
    async (ctx, { flowDynamic, state }) => {
      let name = ctx.body;
      await flowDynamic(flow.C4i.answers.replace("[Nombre]", name));
    }
  )

  .addAnswer(flow.C4.answers)
  .addAnswer(flow.options.answers, null, null, [C5, C6]);

const C1 = addKeyword(flow.C1.keyword)
  .addAnswer(flow.C1.answers)
  .addAnswer(flow.options.answers, null, null, [C2, C3]);

const main = async () => {
  const adapterDB = new JsonFileAdapter();
  const adapterFlow = createFlow([C1]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
