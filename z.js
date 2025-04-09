const TelegramBot = require('node-telegram-bot-api');
const token = '7731536567:AAGLt3A61DiPLtGnvm2k9vpOIJ7Cq4JV5Bw';
const bot = new TelegramBot(token, { polling: true });

//commands
bot.onText(/\/start/i, (msg) => {
    const chatID = msg.chat.id;

    
    const normalKeyboard = {
        reply_markup: {
            one_time_keyboard: true,
            keyboard: [
                ["💎 Premium Account", "📜 History"],
                ["/help"]
            ]
        }
    };

    // inline keyboard زیر پیام خوش‌آمد
    const inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '📌 Pin', callback_data: '/pin' },
                    { text: 'Music', callback_data: '/music' }
                ]
            ]
        }
    };

    // اول: فعال‌سازی کیبورد پایین
    bot.sendMessage(chatID, '.', normalKeyboard).then(() => {
        // بعد: پیام اصلی با دکمه Pin
        bot.sendMessage(chatID, '🌟 Welcome to Xclusive – Where extraordinary begins. ✨', inlineKeyboard);
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
    const song = 'james'; // فرض میکنیم که این رو از callback می‌گیرید

    const songs = {
        'james': {
            file: 'assets/music/I Feel Good (I Got You) - James Brown (320).mp3',
            title: 'I Feel Good',
            performer: 'James Brown',
            caption: '🎵 James Brown - 320kbps',
            thumb: 'assets/pics/images.jpg'
        }
    };

    const selected = songs[song];
    if (selected) {
        bot.sendAudio(chatID, selected.file, selected);
    }
});

bot.onText(/\/ops_stikers/i, (msg) => {
    const chatID = msg.chat.id;

    const stickers = [
        'assets/stickers/7475866139/1stiker.webm',
        'assets/stickers/7475866139/1.webm',
        'assets/stickers/7475866139/3.webm',
        'assets/stickers/7475866139/4.webm',
        'assets/stickers/7475866139/5.webm',
        'assets/stickers/7475866139/6.webm',
        'assets/stickers/7475866139/7.webm',
        'assets/stickers/7475866139/8.webm',
        'assets/stickers/7475866139/9.webm',
        'assets/stickers/7475866139/11.webm',
        'assets/stickers/7475866139/12.webm',
        'assets/stickers/7475866139/13.webm',
        'assets/stickers/7475866139/14.webm'
    ];

    stickers.forEach(sticker => {
        bot.sendSticker(chatID, sticker);
    });
});

bot.onText(/Premium Account/, (msg) => {
    const chatID = msg.chat.id;
    bot.sendMessage(chatID, "Your premium account is valid for one year.");
});

// Query handling
bot.on('callback_query', (callbackQuery) => {
    const data = callbackQuery.data;
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;

    if (data === '/pin') {
        const media = [
            { type: 'photo', media: 'https://pin.it/6BG1NZF4K' },
            { type: 'photo', media: 'https://pin.it/2G7a4zyss' },
            { type: 'photo', media: 'https://pin.it/zoiNI5ePc' }
        ];
        bot.sendMediaGroup(chatId, media);
        bot.answerCallbackQuery(callbackQuery.id, { text: 'Pinned images sent!' });
    }

    if (data.startsWith('music:')) {
        const song = data.split(':')[1];
        const songs = {
            'james': {
                file: 'assets/music/I Feel Good (I Got You) - James Brown (320).mp3',
                title: 'I Feel Good',
                performer: 'James Brown',
                caption: '🎵 James Brown - 320kbps',
                thumb: 'assets/pics/images.jpg'
            }
        };
        const selected = songs[song];
        if (selected) {
            bot.sendAudio(chatId, selected.file, selected);
        }
    }
});
