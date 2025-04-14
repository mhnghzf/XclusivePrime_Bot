const TelegramBot = require('node-telegram-bot-api');
const token = '7731536567:AAFW_IHIXvXFDe9hlT5pswr9XoOakUfS4Mg';
const bot = new TelegramBot(token, { polling: true });

//Dashboard*
bot.onText(/\/start/i, (msg) => {
    const message = ".";
    const chatID = msg.chat.id;

    const keyboard = {
        reply_markup: {
            one_time_keyboard: true,
                keyboard: [
                    ["Latest Updates & Views👀", "Xclusive Premium Access💎"],
                    ["help🤓"]
                ]
        }
    };

    const inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                        { text: 'Pin📌', callback_data: '/pin'},
                        { text: 'Music🎧', callback_data: '/music'},
                        { text: 'Note🎇', callback_data: '/note'}
                ]
            ]
        }
    };
    bot.sendMessage(chatID,"Go Big or Go Home✨1#", keyboard).then(() => {
        bot.sendMessage(chatID, "Xclusive Dashboard – Your Control Center📈📊", inlineKeyboard);
    });

});

bot.onText(/\/pin/i, (msg) => {
    const chatID = msg.chat.id;
    const photos = [
        { type: 'photo', media: 'https://pin.it/6BG1NZF4K' },
        { type: 'photo', media: 'https://pin.it/2G7a4zyss' },
        { type: 'photo', media: 'https://pin.it/zoiNI5ePc' }
    ];
    bot.sendMediaGroup(chatID, photos);
});

bot.onText(/\/music/i, (msg) => {
    const chatID = msg.chat.id;
    
    const musicList = [
        {
            title: "Look At Me!",
            performer: "XXXTENTACION",
            file: "assets/public/music/1_1 - Look At Me! - XXXTENTACION (320).mp3",
            thumb: "assets/public/cover/Look At Me! .jpg",
            caption: ".GYM."
        },
        {
            title: "Mockingbird",
            performer: "Eminem",
            file: "assets/public/music/1_12 - Mockingbird - Eminem (320).mp3",
            thumb: "assets/public/cover/Mockingbird .jpg",
            caption: ".GYM."
        },
        {
            title: "MIDDLE CHILD",
            performer: "J. Cole",
            file: "assets/public/music/1_1 - MIDDLE CHILD - J. Cole (320).mp3",
            thumb: "assets/public/cover/MIDDLE CHILD .jpg",
            caption: ".GYM."
        },
        {
            title: "MOTTO",
            performer: "NF",
            file: "assets/public/music/1_2 - MOTTO - NF (320).mp3",
            thumb: "assets/public/cover/MOTTO .jpg",
            caption: ".GYM."
        },
        {
            title: "The Box",
            performer: "Roddy Ricch",
            file: "assets/public/music/1_2 - The Box - Roddy Ricch (320).mp3",
            thumb: "assets/public/cover/The Box .jpg",
            caption: ".GYM."
        },
        {
            title: "8 Mile",
            performer: "Eminem",
            file: "assets/public/music/1_3 - 8 Mile (From 8 Mile Soundtrack) - Eminem (320).mp3",
            thumb: "assets/public/cover/8 Mile.jpg",
            caption: ".GYM."
        },
        {
            title: "Kendrick Lamar",
            performer: "Alright",
            file: "assets/public/music/1_7 - Alright - Kendrick Lamar (320).mp3",
            thumb: "assets/public/cover/Alright .jpg",
            caption: ".GYM."
        },
        {
            title: "FreeStyle J.Cole & DaBaby...",
            performer: "J.Cole & DaBaby...",
            file: "assets/public/music/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.mp3",
            thumb: "assets/public/cover/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.jpg",
            caption: ".GYM."
        }
    ];

    
    musicList.forEach((music) => {
        bot.sendAudio(chatID, music.file, {
            title: music.title,
            performer: music.performer,
            thumb: music.thumb,
            caption: music.caption
        });
    });
});

//Query
bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/pin') {

        const photos = [
            'https://pin.it/6BG1NZF4K', 
            'https://pin.it/2G7a4zyss',
            'https://pin.it/zoiNI5ePc'  
        ];

      
        photos.forEach((photoURL) => {
            bot.sendPhoto(chatID, photoURL);
        });
    }
});

bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/music') {
        const songs = [
            {
                title: "Look At Me!",
                performer: "XXXTENTACION",
                file: "assets/public/music/1_1 - Look At Me! - XXXTENTACION (320).mp3",
                thumb: "assets/public/cover/Look At Me! .jpg",
                caption: ".GYM."
            },
            {
                title: "Mockingbird",
                performer: "Eminem",
                file: "assets/public/music/1_12 - Mockingbird - Eminem (320).mp3",
                thumb: "assets/public/cover/Mockingbird .jpg",
                caption: ".GYM."
            },
            {
                title: "MIDDLE CHILD",
                performer: "J. Cole",
                file: "assets/public/music/1_1 - MIDDLE CHILD - J. Cole (320).mp3",
                thumb: "assets/public/cover/MIDDLE CHILD .jpg",
                caption: ".GYM."
            },
            {
                title: "MOTTO",
                performer: "NF",
                file: "assets/public/music/1_2 - MOTTO - NF (320).mp3",
                thumb: "assets/public/cover/MOTTO .jpg",
                caption: ".GYM."
            },
            {
                title: "The Box",
                performer: "Roddy Ricch",
                file: "assets/public/music/1_2 - The Box - Roddy Ricch (320).mp3",
                thumb: "assets/public/cover/The Box .jpg",
                caption: ".GYM."
            },
            {
                title: "8 Mile",
                performer: "Eminem",
                file: "assets/public/music/1_3 - 8 Mile (From 8 Mile Soundtrack) - Eminem (320).mp3",
                thumb: "assets/public/cover/8 Mile.jpg",
                caption: ".GYM."
            },
            {
                title: "Kendrick Lamar",
                performer: "Alright",
                file: "assets/public/music/1_7 - Alright - Kendrick Lamar (320).mp3",
                thumb: "assets/public/cover/Alright .jpg",
                caption: ".GYM."
            },
            {
                title: "FreeStyle J.Cole & DaBaby...",
                performer: "J.Cole & DaBaby...",
                file: "assets/public/music/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.mp3",
                thumb: "assets/public/cover/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.jpg",
                caption: ".GYM."
            }
            
        ];

        songs.forEach((song) => {
            bot.sendAudio(chatID, song.file, {
                caption: `${song.title} by ${song.performer}`,  
                title: song.title,  
                performer: song.performer,  
                thumb: song.thumb  
            }).then(() => {
                console.log(`${song.title} sent!`);
            }).catch((error) => {
                console.log('Error sending music:', error);
            });
        });
    }
});


const fs = require('fs');

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === '/note') {
    fs.readFile('assets/public/note/note.txt', 'utf8', (err, content) => {
      if (err) {
        bot.sendMessage(chatId, '❌');
        console.error('Error:', err);
        return;
      }

      bot.sendMessage(chatId, content);
    });

    bot.answerCallbackQuery(query.id); 
  }
});
