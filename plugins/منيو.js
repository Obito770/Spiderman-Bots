import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const totalreg = Object.keys(global.db.data.users).length;
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/fa4719bb6a39a3fb066b1.jpg','https://telegra.ph/file/fa4719bb6a39a3fb066b1.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*يـتـم تـجـهيـز الـقـائـمـه⏳*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝑆𝑃𝐼𝐷𝐸𝑅𝑀𝐴𝑁 𝐵𝑂𝑇 🕸️✨', body: '𝐵𝑌,𝛩𝐵𝐼𝑇𝛩', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📂');
    await conn.sendMessage(m.chat, { react: { text: '📃', key: m.key } })
  let txt = `
  *⚡✬⃝┇↵ مرحــبـا ⌊ ${taguser} ⌉*
── • ◈ • ──
*⚡✬⃝┇أنـا اسـمـــي "ᏚᏢᎥᎠᎬᎡᎷᎯᏁ"*
*⚡✬⃝┇الـبــوت لـجــروبـات الـواتـســاب*
*⚡✬⃝┇لـاتـنـســی قـبــل كــل امــر ﹙.﹚*
*⚡✬⃝┇هــا لــك أوامـــر الـبــوت ☟*

*〄━━┋ ★الـأوامــر★ ┋━━〄*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ ❁*

*┓─━✦❮🕷️❯✦━─┏*
‹🕋›┋قسـم الديـن┇⇩
*┛─━✦❮🕷️❯✦━─┗*
🌞┊⬅︎ اذكار الصباح
🌙┊⬅︎ اذكار المساء
🎤┊⬅︎ صوت 1
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹🗳️›┋قــسم التحمــيل┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*🔎┊⬅︎ بحث*
*🎧┊⬅︎ شغل*
*📽️┊⬅︎ فيديو*
*🎞️┊⬅︎ انستا*
*🎵┊⬅︎ تيك*
*🎛️┊⬅︎ بلاي*
*🖼️┊⬅︎ صوره*
*🎨┊⬅︎ فريبيك*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹♻️›┋قســم التحويــل┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*📝┊⬅︎ كود*
*🎈┊⬅︎ ملصق*
*🚨┊⬅︎ سرقه*
*🎭┊⬅︎ دمج*
*🌅┊⬅︎ لصوره*
*🖼┊⬅︎ لكرتون*
*♻️┊⬅︎ لانمي*
*🎥┊⬅︎ لفيديو*
*📷┊⬅︎ تليجراف*
*🎴┊⬅︎ جوده*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹👥›┋قســم الجــروبــات┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*👮┊⬅︎ المشرفين*
*🏘┊⬅︎ الجروب*
*👻┊⬅︎ مخفي*
*📣┊⬅︎ منشن*
*👻┊⬅︎ الاشباح*
*🔗┊⬅︎ لينك*
*🆙┊⬅︎ رفع*
*🔻┊⬅︎ خفض*
*🖇️┊⬅︎ رستر*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹📽️›┋قســم الصــور و الايــدت┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*🌆┊⬅︎ خلفيه*
*🧩┊⬅︎ مميز*
*👩‍❤️‍👨┊⬅︎ طقم*
*🧒┊⬅︎ طقم2*
*👧🏻┊⬅︎ طقمي*
*🐶┊⬅︎ كلب*
*🐱┊⬅︎ قط*
*📹┊⬅︎ايدت*
*🖼️┊⬅︎ تصميم*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹🙋‍♂️›┋قســم الاعــضــاء┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*💌┊⬅︎ بروفايل*
*👨🏻‍💻┊⬅︎ المطور*
*🩸┊⬅︎ الدعم*
*🗣️┊⬅︎ انطق*
*🔒┊⬅︎ الخصوصيه*
*🧿┊⬅︎ اقتباس*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹👑›┋قســم المــطــور┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*👑┊⬅︎ بريم*
*⛔┊⬅︎ حظر*
*💁┊⬅︎ الغاء-الحظر*
*⛔┊⬅︎ المحظورين*
*👑┊⬅︎ المميزين*
*📛┊⬅︎ البلوكات*
*🚷┊⬅︎ بان*
*🚪┊⬅︎ بلوك*
*🚪┊⬅︎ رفع-البلوك*
*🚀┊⬅︎ انضم*
*🚶┊⬅︎ اخرج*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹🎢›┋قســم الترفــيــه┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*❓┊⬅︎ لو*
*🔝┊⬅︎ توب*
*🤖┊⬅︎ بوت (حط قبل الكلمه نقطه! )*
*👾┊⬅︎ تحدث*
*❓┊⬅︎ سؤال*
*🎀┊⬅︎ زخرفه*
*🌃┊⬅︎ logo*
*┛─━✦❮🕷️❯✦━─┗*
*━ ── • ⟐ • ── ━*
*┓─━✦❮🕷️❯✦━─┏*
*‹🏦›┋قســم البــنــك┇⇩*
*┛─━✦❮🕷️❯✦━─┗*
*🏦┊⬅︎ البنك*
*🏦┊⬅︎ شراء*
*🏦┊⬅︎ يومي*
*🏦┊⬅︎ لفل*
*🏦┊⬅︎ تحويل*
*🏦┊⬅︎ تصنيف*
*┛─━✦❮🕷️❯✦━─┗*

✦𓌗𖩯𖩯𖩯𖩯𖩯𖩯𖩯𖩯𖩯𖩯𓌗✦
❮🗒️❯ مــلاحــــظــــة
✦𓌗𖩯𖩯𖩯𖩯𖩯𖩯𖩯𖩯𖩯𖩯𓌗✦

①- يمنع سب البوت
②- استخدم البوت ب شكل متوازن
③- لا تسوي سبام للبوت

✦͡𓌗𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𝀓͡𓌗✦`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🕷️ 𝑺𝑃𝐼𝐷𝛯𝑅𝑀𝐴𝑁-𝐵𝛩𝑇 🕷️', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '╰⊱❌⊱ *خطأ* ⊱❌⊱╮', m);
  }
}; 
handler.help = ['menuuu'];
handler.tags = ['mmmmenu'];
handler.command = /^(المنيو|اوامر|منيو|الاوامر|الأوامر|المهام|مهام|menu)$/i;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
