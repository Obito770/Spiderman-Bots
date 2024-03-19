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
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/7f7873bf77159093a1655.jpg','https://telegra.ph/file/7f7873bf77159093a1655.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*[■■■■■■■■■□] 90%*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝑰𝒕𝒂𝒄𝒉𝒊 𝑩𝒐𝒕🛡️', body: '𝑩𝒚,𝑴𝒐𝒉𝒂𝒎𝒆𝒅 𝑲𝒖𝒏', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📂');
    await conn.sendMessage(m.chat, { react: { text: '📃', key: m.key } })
  let txt = `┈┈┈┈┈┈𝑰𝒕𝒂𝒄𝒉𝒊 𝑩𝒐𝒕┈┈┈┈┈┈
 *منشنك✒️*  : ${taguser}
 *وقت التشغيل📟* : ${uptime}
 *التاريخ🍧* : ${date}
 *يوم💨*   : ${dia}
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *¹.🌊نـقـطه قـبـل كـل امـر*
 *²لـو الـرسـايـل مـش ظـاهـره اسـتـخـدم (نظف🌺)*
 *³اذا هـنـاك امر لا يـعـمل اسـتـخـدم (.رساله🗽)*
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *⬇️اقرأ الاوامر جيداً⬇️*
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.1 *الـبـنـك*
*{يـعـرض لـك اوامـر الـبـ🏦ـنـك}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.2 *العاب*
*{يـعـرض لـك يـعـرض اوامـر العـ🎮ـاب و تـرفـيه الـبـوت}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.3 *المجموعات و الاعضاء*
*{يـعـرض لـك اوامـر الاعـ🧞ـضاء و الـمجـموعـات}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.4 *البحث*
*{يـعـرض لـك اوامـر البــ🕵️‍♂️حـث}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.5 *التحويل و الملصقات و الصور*
*{يـعـرض لـك اوامـر الـملصقات و الـصـ💽ـور و التحـويـل}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.6 *المطور*
*{يـعـرض لـك اوامـر الــمـ👑طـور}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.7 *الذكاء الاصطناعي*
*{يـعـرض لك اوامـر الذكاء الاصــ🤖طناعي}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
.8 *اصوات*
*{يـعـرض لـك اوامر الأصـ🔊ـوات}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*لـا تـنـسـي الـصـلـاه عـلـي الـنـبـي صـلـي الـلـه عـلـيـه وسـلـم🤍✨*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🛡️ 𝑰𝒕𝒂𝒄𝒉𝒊 𝑩𝒐𝒕 🛡️', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '╰⊱❌⊱ *خطأ* ⊱❌⊱╮', m);
  }
}; 
handler.help = ['menuuu'];
handler.tags = ['mmmmenu'];
handler.command = /^(المنيو)$/i;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
