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
                    { text: 'Pin', callback_data: '/pin'},
                    { text: 'Music', callback_data: '/music'},
                    { text: 'Member Only', callback_data:'/secure'}   
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

bot.sendAudio(chatID, "assets/music/I Feel Good (I Got You) - James Brown (320).mp3", {
    title: "I Feel Goo",
    caption: "James Brown (320)",
    thumb: "assets/pics/images.jpg"
})})

bot.onText(/\/ops_stikers/i, (msg) => {
    const chatID = msg.chat.id;

    const stickers = [
        "assets/stikers/7475866139/2.webm",
        "assets/stikers/7475866139/3.webm",
        "assets/stikers/7475866139/4.webm",
        "assets/stikers/7475866139/5.webm",
        "assets/stikers/7475866139/6.webm",
        "assets/stikers/7475866139/7.webm",
        "assets/stikers/7475866139/8.webm",
        "assets/stikers/7475866139/9.webm",
        "assets/stikers/7475866139/11.webm",
        "assets/stikers/7475866139/12.webm",
        "assets/stikers/7475866139/13.webm",
        "assets/stikers/7475866139/14.webm",
        "assets/stikers/7475866139/15.webm"
    ];

    stickers.forEach((stickerPath) => {
        bot.sendSticker(chatID, stickerPath).catch(err => {
            console.error("❌ Failed to send:", stickerPath, err.message);
        });
    });
});

bot.onText(/\/secure/i, (msg) => {
    const chatID = msg.chat.id;

    const keyboard = {
        reply_markup: {
            one_time_keyboard: true,
                keyboard: [
                    ["ops_Stikers📥", "ops_GIF📥"],
                    ["ops_Pics📥"]
                ]
        }
    }
    bot.sendMessage(chatID,"What you want from me, lil' homie?", keyboard)
})

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
                filePath: 'assets/music/I Feel Good (I Got You) - James Brown (320).mp3', 
                title: 'I Feel Good',  
                artist: 'James Brown', 
                coverPath: 'assets/pics/images.jpg' 
            },
            {
                //add
            },
        ];

       
        songs.forEach((song) => {
            bot.sendAudio(chatID, song.filePath, {
                caption: `${song.title} by ${song.artist}`,  //Song description
                title: song.title,  //Song title
                performer: song.artist,  //Artist
                thumb: song.coverPath  //Song cover
            }).then(() => {
                console.log(`${song.title} sent!`);
            }).catch((error) => {
                console.log('Error sending music:', error);
            });
        });
    }
});

bot.on('callback_query', (query) => {
    const chatID = query.message.chat.id;
    const data = query.data;

    if (data === '/secure') {
        
        const keyboard = {
            reply_markup: {
                one_time_keyboard: true,
                keyboard: [
                    ["ops_Stikers📥", "ops_GIF📥"],
                    ["ops_Pics📥"]
                ]
            }
        };

        bot.sendMessage(chatID, "What you want from me, lil' homie?", keyboard);
    }
});

//action button
bot.onText("ops_Stikers📥", (msg) => {
    const chatID = msg.chat.id;

    const stickers = [
        "assets/stikers/7475866139/2.webm",
        "assets/stikers/7475866139/3.webm",
        "assets/stikers/7475866139/4.webm",
        "assets/stikers/7475866139/5.webm",
        "assets/stikers/7475866139/6.webm",
        "assets/stikers/7475866139/7.webm",
        "assets/stikers/7475866139/8.webm",
        "assets/stikers/7475866139/9.webm",
        "assets/stikers/7475866139/11.webm",
        "assets/stikers/7475866139/12.webm",
        "assets/stikers/7475866139/13.webm",
        "assets/stikers/7475866139/14.webm",
        "assets/stikers/7475866139/15.webm"
    ];

    stickers.forEach((stickerPath) => {
        bot.sendSticker(chatID, stickerPath).catch(err => {
            console.error("❌ Failed to send:", stickerPath, err.message);
        });
    });
}); 

bot.onText("ops_GIF📥", (msg) => {
    const chatID = msg.chat.id;

    const videos = [
        { type: 'video', media: 'assets/stikers/7475866138/1.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/2.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/3.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/4.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/5.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/6.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/7.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/8.mp4' },
        { type: 'video', media: 'assets/stikers/7475866138/9.mp4' }
    ];

    bot.sendMediaGroup(chatID, videos).catch(err => {
        console.error("❌ Failed to send videos:", err.message);
    });
});

