const wordStr =
  "Ephemeral, labyrinthine, serendipity, cacophony, mellifluous, ethereal, clandestine, juxtapose, indelible, verisimilitude, myriad, effervescent, mellifluous, quintessential, scintillating, mellifluous, esoteric, nebulous, peregrinate, vicissitude, idyllic, incandescent, obfuscate, ineffable, sonorous, ephemeral, eclectic, sonorous, ethereal, clandestine, serendipity, mellifluous, labyrinthine, effulgent, somnambulist, labyrinthine, evanescent, myriad, quintessential, serendipity, ethereal, perspicacious, reverie, nebulous, ineffable, verisimilitude, discombobulate, ephemeral, quixotic, mellifluous, sonorous, clandestine, vicissitude, evocative, ineffable, serendipity, mellifluous, ephemeral, labyrinthine, ethereal, peregrinate, scintillating, ineffable, serendipity, mellifluous, nebulous, esoteric, clandestine, labyrinthine.";
const word = wordStr.split(",")?.map((w) => w.trim());

const getRandomWord = () => {
  return word[Math.floor(Math.random() * word.length)];
};
const getRandomMessage = () => {
  // each message that have 5 to 10 words
  const wordCount = Math.floor(Math.random() * 5) + 5;
  let message = "";
  for (let i = 0; i < wordCount; i++) {
    message += getRandomWord() + " ";
  }
  return message;
};
const stringUtil = {
  getRandomWord,
  getRandomMessage,
};

module.exports = stringUtil;
