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

const flowExit = addKeyword(flow.exit.trigger).addAnswer(flow.exit.text);

const flowLevel7 = addKeyword(flow.level7.trigger).addAnswer(flow.level7.text);

const flowLevel6 = addKeyword(flow.level6.trigger).addAnswer(flow.level6.text);

const flowLevel5 = addKeyword(flow.level5.trigger)
  .addAnswer(flow.level5.text)
  .addAnswer(flow.options.text, null, null, [flowLevel6, flowLevel7]);

const flowLevel4 = addKeyword(flow.level4.trigger)
  .addAnswer(flow.level4.text)
  .addAnswer(flow.options.text, null, null, [flowLevel5, flowExit]);

const flowLevel3 = addKeyword(flow.level3.trigger)
  .addAnswer(flow.level3.text)
  .addAnswer(flow.options.text, null, null, [flowLevel4, flowExit]);

const flowLevel2 = addKeyword(flow.level2.trigger)
  .addAnswer(flow.level2.text)
  .addAnswer(flow.options.text, null, null, [flowLevel3, flowExit]);

const flowLevel1 = addKeyword(flow.level1.trigger).addAnswer(
  flow.level1.text,
  null,
  null,
  [flowLevel2]
);

const flowPrincipal = addKeyword(flow.main.trigger)
  .addAnswer(flow.main.text)
  .addAnswer(flow.options.text, null, null, [flowLevel1, flowExit]);

const main = async () => {
  const adapterDB = new JsonFileAdapter();
  const adapterFlow = createFlow([flowPrincipal]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
