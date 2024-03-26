let handler = async (m, { conn }) => {
let done = '🩶'; 
       m.react(done);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*هــلأ ⌊ ${name} ⌉ انا اسمي استا! • تحتاج الى مساعدة؟ ، اكتب﹙.اوامر﹚*\n\n*⚡╎ممنوع استخدام البوت في الدردشات الخاصة!*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/63ab2a160584fd3198189.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
