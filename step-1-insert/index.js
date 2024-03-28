const chatDb = require("../utils/chat-db");
const stringUtil = require("../utils/string.util");

const main = async () => {
  await chatDb.schema.hasTable("messages").then(function (exists) {
    if (!exists) {
      return chatDb.schema.createTable("messages", function (t) {
        t.increments("id").primary();
        t.string("message", 500);
        t.string("created_time", 100);
      });
    }
  });

  // insert 1 millions messages
  // insert 1 million messages
  for (let i = 0; i < 1000; i++) {
    const tempMessages = [];
    const totalRowPerBatch = 5000;
    for (let j = 0; j < totalRowPerBatch; j++) {
      const message = stringUtil.getRandomMessage();
      const createdTime = new Date().toISOString();
      tempMessages.push({ message, created_time: createdTime });
    }
    await chatDb("messages").insert(tempMessages);
    // batch insert
    console.log(
      "batch insert",
      i,
      tempMessages.length,
      "total inserted",
      i * totalRowPerBatch
    );
  }
};

main();
