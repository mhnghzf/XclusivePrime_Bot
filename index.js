const TelegramBot = require('node-telegram-bot-api');
const token = '7731536567:AAGLt3A61DiPLtGnvm2k9vpOIJ7Cq4JV5Bw';
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



//ooops_area-------------------------------------------------------------------------------------------------------

//command_ooops
bot.onText(/\/member_only/i, (msg) => {
    const message = 'welcome!';
    const chatID = msg.chat.id;

    const inlinekeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Gifs(.mp4)📥', callback_data: '/gifs' },
                    { text: 'stikers📥', callback_data: '/stikers' },
                    { text: 'Vids📥', callback_data: '/vids' },
                    { text: 'pics📥', callback_data: '/ops_pics' }
                ]
            ]
        }
    };

    bot.sendMessage(chatID, message, inlinekeyboard);
});

//action_ooops
bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/stikers') {
        const stickers = [
            "assets/private/stikers/1.webm",
            "assets/private/stikers/12.webm",
            "assets/private/stikers/13.webm",
            "assets/private/stikers/14.webm",
            "assets/private/stikers/15.webm",
            "assets/private/stikers/16.webm",
            "assets/private/stikers/17.webm",
            "assets/private/stikers/18.webm",
            "assets/private/stikers/2.webm",
            "assets/private/stikers/21.webm",
            "assets/private/stikers/22.webm",
            "assets/private/stikers/23.webm",
            "assets/private/stikers/24.webm"
        ];

        stickers.forEach((stickerPath) => {
            bot.sendSticker(chatID, stickerPath).catch(err => {
                console.error("❌ Failed to send:", stickerPath, err.message);
            });
        });
    }

    bot.answerCallbackQuery(query.id);
});

bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/gifs') {
        const videos = [
            { type: 'video', media: 'assets/private/gifs/1.mp4' },
            { type: 'video', media: 'assets/private/gifs/2.mp4' },
            { type: 'video', media: 'assets/private/gifs/3.mp4' },
            { type: 'video', media: 'assets/private/gifs/4.mp4' },
            { type: 'video', media: 'assets/private/gifs/5.mp4' },
            { type: 'video', media: 'assets/private/gifs/6.mp4' },
            { type: 'video', media: 'assets/private/gifs/7.mp4' },
            { type: 'video', media: 'assets/private/gifs/8.mp4' },
            { type: 'video', media: 'assets/private/gifs/9.mp4' }
        ];

        bot.sendMediaGroup(chatID, videos).catch(err => {
            console.error("❌ Error sending videos:", err);
        });
    }

    bot.answerCallbackQuery(query.id);
});

bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/vids') {
        const message = 'Comming Soon... https://mega.nz/folder/iV8lUJQR#1IYa2qew_AyrpOMTAbdfsg .';
        bot.sendMessage(chatID, message);
    }

    bot.answerCallbackQuery(query.id);
});

bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/ops_pics') {
        const photos = [
            { type: 'photo', media: 'https://cdni.pornpics.com/1280/7/302/22438799/22438799_037_daaf.jpg' },
            { type: 'photo', media: 'https://cdni.pornpics.com/1280/7/180/86543980/86543980_095_ea9b.jpg' },
            { type: 'photo', media: 'https://cdni.pornpics.com/1280/7/693/24590130/24590130_081_2ecb.jpg' },
            { type: 'photo', media: 'https://cdni.pornpics.com/1280/7/581/47193408/47193408_080_fc7d.jpg' }
        ];

        bot.sendMediaGroup(chatID, photos).catch(err => {
            console.error("❌ Failed to send photos:", err.message);
        });
    }

    bot.answerCallbackQuery(query.id);
});

//ooops_area-------------------------------------------------------------------------------------------------------