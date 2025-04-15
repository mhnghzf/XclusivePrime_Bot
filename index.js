const TelegramBot = require('node-telegram-bot-api');
const token = '7731536567:AAFW_IHIXvXFDe9hlT5pswr9XoOakUfS4Mg';
const bot = new TelegramBot(token, { polling: true });

//Dashboard
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
            caption: "1#💎"
        },
        {
            title: "Mockingbird",
            performer: "Eminem",
            file: "assets/public/music/1_12 - Mockingbird - Eminem (320).mp3",
            thumb: "assets/public/cover/Mockingbird .jpg",
            caption: "1#💎"
        },
        {
            title: "MIDDLE CHILD",
            performer: "J. Cole",
            file: "assets/public/music/1_1 - MIDDLE CHILD - J. Cole (320).mp3",
            thumb: "assets/public/cover/MIDDLE CHILD .jpg",
            caption: "1#💎"
        },
        {
            title: "MOTTO",
            performer: "nf",
            file: "assets/public/music/1_2 - MOTTO - NF (320).mp3",
            thumb: "assets/public/cover/MOTTO .jpg",
            caption: "1#💎"
        },
        {
            title: "The Box",
            performer: "Roddy Ricch",
            file: "assets/public/music/1_2 - The Box - Roddy Ricch (320).mp3",
            thumb: "assets/public/cover/The Box .jpg",
            caption: "1#💎"
        },
        {
            title: "8 Mile",
            performer: "Eminem",
            file: "assets/public/music/1_3 - 8 Mile (From 8 Mile Soundtrack) - Eminem (320).mp3",
            thumb: "assets/public/cover/8 Mile.jpg",
            caption: "1#💎"
        },
        {
            title: "Alright",
            performer: "Kendrick Lamar",
            file: "assets/public/music/1_7 - Alright - Kendrick Lamar (320).mp3",
            thumb: "assets/public/cover/Alright .jpg",
            caption: "1#💎"
        },
        {
            title: "FreeStyles",
            performer: "J.Cole & DaBaby & Juice WRLD ",
            file: "assets/public/music/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.mp3",
            thumb: "assets/public/cover/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.jpg",
            caption: "1#💎"
        },
        {
            title: "BAND4BAND",
            performer: "Central Cee & Lil Baby",
            file: "assets/public/music/new/1_1 - BAND4BAND - Central Cee  Lil Baby (320).mp3",
            thumb: "assets/public/cover/new cover/BAND4BAND.jpg",
            caption: "1#💎"
        },
        {
            title: "No Pole",
            performer: "Don Toliver",
            file: "assets/public/music/new/1_1 - No Pole - Don Toliver (320).mp3",
            thumb: "assets/public/cover/new cover/No Pole.jpg",
            caption: "1#💎"
        },
        {
            title: "Poppin",
            performer: "Yeat",
            file: "assets/public/music/new/1_1 - Poppin - Yeat (320).mp3",
            thumb: "assets/public/cover/new cover/Poppin.jpg",
            caption: "1#💎"
        },
        {
            title: "The Search - Edit",
            performer: "nf",
            file: "assets/public/music/new/1_1 - The Search (Edit) - NF (320).mp3",
            thumb: "assets/public/cover/new cover/The Search - Edit.jpg",
            caption: "1#💎"
        },
        {
            title: "Overseas",
            performer: "D-Block & Central Cee",
            file: "assets/public/music/new/1_17 - Overseas - D-Block Europe  Central Cee (320).mp3",
            thumb: "assets/public/cover/new cover/Overseas.jpg",
            caption: "1#💎"
        },
        {
            title: "Dum,Dumb and Dumber",
            performer: "Lil Baby & Future & Young Thug",
            file: "assets/public/music/new/1_1_Dum,_Dumb,_and_Dumber_Lil_Baby_Young_Thug_Future_320.mp3",
            thumb: "assets/public/cover/new cover/Dumb.jpg",
            caption: "1#💎"
        },
        {
            title: "2024",
            performer: "Playboi Carti",
            file: "assets/public/music/new/1_32 - 2024 - Playboi Carti (320).mp3",
            thumb: "assets/public/cover/new cover/2024.jpg",
            caption: "1#💎"
        },
        {
            title: "First Person Shooter",
            performer: "Drake & J. Cole",
            file: "assets/public/music/new/1_6 - First Person Shooter - Drake  J. Cole (320).mp3",
            thumb: "assets/public/cover/new cover/First Person Shooter.jpg",
            caption: "1#💎"
        },
        {
            title: "No Role Modelz",
            performer: "J. Cole",
            file: "assets/public/music/new/1_9 - No Role Modelz - J. Cole (320).mp3",
            thumb: "assets/public/cover/new cover/No Role.jpg",
            caption: "1#💎"
        },
        {
            title: "33",
            performer: "Ho3ein & Epicure",
            file: "assets/public/music/new/Ho3ein & Epicure - 33.mp3",
            thumb: "assets/public/cover/new cover/33.jpg",
            caption: "1#💎"
        },
        {
            title: "Mia Az Man ar",
            performer: "Leito & Godpoori",
            file: "assets/public/music/new/Leito X Godpoori - Miad Az Man Bar.mp3",
            thumb: "assets/public/cover/new cover/Miad Az Man Bar.jpg",
            caption: "1#💎"
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
                caption: "1#💎"
            },
            {
                title: "Mockingbird",
                performer: "Eminem",
                file: "assets/public/music/1_12 - Mockingbird - Eminem (320).mp3",
                thumb: "assets/public/cover/Mockingbird .jpg",
                caption: "1#💎"
            },
            {
                title: "MIDDLE CHILD",
                performer: "J. Cole",
                file: "assets/public/music/1_1 - MIDDLE CHILD - J. Cole (320).mp3",
                thumb: "assets/public/cover/MIDDLE CHILD .jpg",
                caption: "1#💎"
            },
            {
                title: "MOTTO",
                performer: "nf",
                file: "assets/public/music/1_2 - MOTTO - NF (320).mp3",
                thumb: "assets/public/cover/MOTTO .jpg",
                caption: "1#💎"
            },
            {
                title: "The Box",
                performer: "Roddy Ricch",
                file: "assets/public/music/1_2 - The Box - Roddy Ricch (320).mp3",
                thumb: "assets/public/cover/The Box .jpg",
                caption: "1#💎"
            },
            {
                title: "8 Mile",
                performer: "Eminem",
                file: "assets/public/music/1_3 - 8 Mile (From 8 Mile Soundtrack) - Eminem (320).mp3",
                thumb: "assets/public/cover/8 Mile.jpg",
                caption: "1#💎"
            },
            {
                title: "Alright",
                performer: "Kendrick Lamar",
                file: "assets/public/music/1_7 - Alright - Kendrick Lamar (320).mp3",
                thumb: "assets/public/cover/Alright .jpg",
                caption: "1#💎"
            },
            {
                title: "FreeStyles",
                performer: "J.Cole & DaBaby & Juice WRLD ",
                file: "assets/public/music/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.mp3",
                thumb: "assets/public/cover/Best_Freestyle_J_Cole,_DaBaby,_Juice_WRLD,_Lil_Baby,_Tory_Lan.jpg",
                caption: "1#💎"
            },
            {
                title: "BAND4BAND",
                performer: "Central Cee & Lil Baby",
                file: "assets/public/music/new/1_1 - BAND4BAND - Central Cee  Lil Baby (320).mp3",
                thumb: "assets/public/cover/new cover/BAND4BAND.jpg",
                caption: "1#💎"
            },
            {
                title: "No Pole",
                performer: "Don Toliver",
                file: "assets/public/music/new/1_1 - No Pole - Don Toliver (320).mp3",
                thumb: "assets/public/cover/new cover/No Pole.jpg",
                caption: "1#💎"
            },
            {
                title: "Poppin",
                performer: "Yeat",
                file: "assets/public/music/new/1_1 - Poppin - Yeat (320).mp3",
                thumb: "assets/public/cover/new cover/Poppin.jpg",
                caption: "1#💎"
            },
            {
                title: "The Search - Edit",
                performer: "nf",
                file: "assets/public/music/new/1_1 - The Search (Edit) - NF (320).mp3",
                thumb: "assets/public/cover/new cover/The Search - Edit.jpg",
                caption: "1#💎"
            },
            {
                title: "Overseas",
                performer: "D-Block & Central Cee",
                file: "assets/public/music/new/1_17 - Overseas - D-Block Europe  Central Cee (320).mp3",
                thumb: "assets/public/cover/new cover/Overseas.jpg",
                caption: "1#💎"
            },
            {
                title: "Dum,Dumb and Dumber",
                performer: "Lil Baby & Future & Young Thug",
                file: "assets/public/music/new/1_1_Dum,_Dumb,_and_Dumber_Lil_Baby_Young_Thug_Future_320.mp3",
                thumb: "assets/public/cover/new cover/Dumb.jpg",
                caption: "1#💎"
            },
            {
                title: "2024",
                performer: "Playboi Carti",
                file: "assets/public/music/new/1_32 - 2024 - Playboi Carti (320).mp3",
                thumb: "assets/public/cover/new cover/2024.jpg",
                caption: "1#💎"
            },
            {
                title: "First Person Shooter",
                performer: "Drake & J. Cole",
                file: "assets/public/music/new/1_6 - First Person Shooter - Drake  J. Cole (320).mp3",
                thumb: "assets/public/cover/new cover/First Person Shooter.jpg",
                caption: "1#💎"
            },
            {
                title: "No Role Modelz",
                performer: "J. Cole",
                file: "assets/public/music/new/1_9 - No Role Modelz - J. Cole (320).mp3",
                thumb: "assets/public/cover/new cover/No Role.jpg",
                caption: "1#💎"
            },
            {
                title: "33",
                performer: "Ho3ein & Epicure",
                file: "assets/public/music/new/Ho3ein & Epicure - 33.mp3",
                thumb: "assets/public/cover/new cover/33.jpg",
                caption: "1#💎"
            },
            {
                title: "Mia Az Man ar",
                performer: "Leito & Godpoori",
                file: "assets/public/music/new/Leito X Godpoori - Miad Az Man Bar.mp3",
                thumb: "assets/public/cover/new cover/Miad Az Man Bar.jpg",
                caption: "1#💎"
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
