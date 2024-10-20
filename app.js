const TelegramBot = require("node-telegram-bot-api");
const { callbackify } = require("util");

let bot = new TelegramBot("6632446323:AAH2cws8FFNyiaA6nwnWrKLpkQKLYTYnxws", {
  polling: true,
});

//// Kategoriyalarning tugmalari

bot.onText(/\/start/, (msg) => {
  let chatId = msg.chat.id;
  let firstName = msg.chat.first_name;
  bot.sendMessage(chatId, `Hello ${firstName}`, {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: "Comedy" }, { text: "Fantastic" }],
        [{ text: "Drama" }, { text: "Action" }],
      ],
      resize_keyboard: true,
    }),
  });
});

////// kategoriyani ichidagi tugmalar

bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;
  if (text === "Comedy") {
    bot.sendMessage(chatId, "Comedy", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "Гадкий я 4" }, { text: "Гарфилд" }],
          [{ text: "Родной 2" }, { text: "В духе Рождества" }],
          [{ text: "Назад" }],
        ],
        resize_keyboard: true,
      }),
    });
  }
});
bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;
  if (text === "Fantastic") {
    bot.sendMessage(chatId, "Fantastic tizimi ho'zircha ishlamaydi", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "Пришельцы" }, { text: "Годзилла: Минус один" }],
          [{ text: "Финч" }, { text: "Ghostbusters: Frozen Empire" }],
          [{ text: "Назад" }],
        ],
        resize_keyboard: true,
      }),
    });
  }
});

bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;
  if (text === "Назад") {
    bot.sendMessage(chatId, "Kategoriylardan birini tanlang", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "Comedy" }, { text: "Fantastic" }],
          [{ text: "Drama" }, { text: "Action" }],
        ],
        resize_keyboard: true,
      }),
    });
  }
});

bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;
  if (text === "Drama") {
    bot.sendMessage(chatId, "Drama kinolar tizimi ho'zircha ishlamaydi", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "Веном" }, { text: "Халк" }],
          [{ text: "Титаник" }, { text: "Форрест Гамп" }],
          [{ text: "Назад" }],
        ],
        resize_keyboard: true,
      }),
    });
  }
});
bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;
  if (text === "Action") {
    bot.sendMessage(chatId, "Action kinolar tizimi ho'zircha ishlamaydi", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "Джон Уик 3" }, { text: "Титаник" }],
          [{ text: "Гладиатор" }, { text: "Джон Уик 4" }],
          [{ text: "Назад" }],
        ],
        resize_keyboard: true,
      }),
    });
  }
});

///// kinolar qismi

bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;
  if (text === "Гадкий я 4") {
    bot.sendPhoto(
      chatId,
      "https://thumbs.filmix.biz/posters/4239/thumbs/w220/gadkiy-ya-4-2024_172475.jpg",
      {
        caption: `<b>Name:</b> Гадкий я 4\n<b>Year: </b> 2024\n<b>Genre: </b> Comedy\n<b>Country: </b>USA\n<b>Description: </b>Гадкий я 4 - это фильм о том, как умный и умный человек начинают жить вместе.`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tomosha qilish", callback_data: "gadkiy_ya_4" }],
          ],
        },
      }
    );
  }
  if (text === "Родной 2") {
    bot.sendPhoto(
      chatId,
      "https://st.kinovod.net/storage/360x534/posters/2024/06/3d326fbaa8f8ce67abf4.jpg",
      {
        caption: `<b>Name:</b> Родной 2\n<b>Year: </b> 2024\n<b>Genre: </b> Comedy\n<b>Country: </b>Kazakhstan\n<b>Description: </b>После неожиданного воссоединения со своим давно потерянным отцом — уличным котом Виком — Гарфилд вместе с другом-псом Оди вынужден отказаться от своей идеально тепличной жизни и присоединиться к весёлому и опасному приключению. `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tomosha qilish", callback_data: "rodnoy_2" }],
          ],
        },
      }
    );
  }
  if (text === "Гарфилд") {
    bot.sendPhoto(
      chatId,
      "https://st.kinovod.net/storage/360x534/posters/2024/05/9c282b5f163479707544.jpg",
      {
        caption: `<b>Name:</b> Гарфилд\n<b>Year:</b> 2024\n<b>Genre:</b> Comedy\n<b>Country:</b> USA, UK\n<b>Description:</b> Гадкий я 4 - это фильм о том, как умный и умный человек начинают жить вместе.`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tomosha qilish", callback_data: "garfild" }],
          ],
        },
      }
    );
  }
  if (text === "В духе Рождества") {
    bot.sendPhoto(
      chatId,
      "https://st.kinovod.net/storage/360x534/posters/2022/11/cb19d450c74a3e0193cf.jpg",
      {
        caption: `<b>Name:</b> В духе Рождества \n<b>Year:</b> 2022 \n<b>Genre:</b> Comedy \n<b>Country:</b> USA \n<b>Description:</b> Эбенезер Скрудж — скупой, эгоистичный, противный и одинокий старик. В канун очередного Рождества, особенно презираемого Скруджем праздника.`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tomosha qilish", callback_data: "duhe_rozhdeniya" }],
          ],
        },
      }
    );
  }
});

bot.on("callback_query", (msg) => {
  let chatId = msg.message.chat.id;
  let data = msg.data;
  if (data === "gadkiy_ya_4") {
    bot.sendMessage(chatId, "Film tomosha qilindi");
  }
  if (data === "rodnoy_2") {
    bot.sendMessage(chatId, "Film tomosha qilindi");
  }
  if (data === "garfild") {
    bot.sendMessage(chatId, "Film tomosha qilindi");
  }
  if (data === "duhe_rozhdeniya") {
    bot.sendMessage(chatId, "Film tomosha qilindi");
  }
  if (msg.data === "back") {
    sendMainMenu(chatId);
  }
});
