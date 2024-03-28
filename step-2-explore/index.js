const chatDb = require("../utils/chat-db");
const timer = require("../utils/timer");

const TABLE = "messages";
const getTotalCount = async () => {
  const res = await chatDb.table(TABLE).count();
  console.log(`table=${TABLE}`, { count: res });
};

const getMessageById = async (id) => {
  const res = await chatDb.table(TABLE).select().where("id", id).first();
  console.log(res);
};

const main = async () => {
  await timer("get total count", getTotalCount);
  await timer("get message by id", async () => {
    await getMessageById(2000);
  });
};

main();
