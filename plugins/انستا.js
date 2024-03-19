import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import {fileTypeFromBuffer} from 'file-type';
const handler = async (m, {conn, args, command, usedPrefix}) => {
const fkontak = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": {"contactMessage": {"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat,  `${lenguajeGB['smsAvisoMG']()}أدخل رابط الانستا لتنزيل الفيديو\n* *على سبيل المثال :*\n* *${usedPrefix + command} https://www.instagram.com/tv/Cd8U99IloVA/?igshid=YmMyMTA2M2Y=*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, body: wm, previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
try {
const img = await instagramDl(args[0]);
for (let i = 0; i < img.length; i++) {
const bufferInfo = await getBuffer(img[i].download_link);
if (bufferInfo.detectedType.mime.startsWith('image/')) {
await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
} else if (bufferInfo.detectedType.mime.startsWith('video/')) {
await conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
handler.limit = 2            
}}} catch {   
try {
const datTa = await instagram.download(args[0]);
for (const urRRl of datTa) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const tXXxt = `⛱️ *الرابط:* ${shortUrRRl}\n\n${wm}`.trim();
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
await new Promise((resolve) => setTimeout(resolve, 10000));
handler.limit = 2      
}} catch {
try {
const resultss = await instagramGetUrl(args[0]).url_list[0];
const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt2 = `⛱️ *الرابط:* ${shortUrl2}\n\n${wm}`.trim();
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
handler.limit = 2        
} catch {
try {
const resultssss = await instagramdl(args[0]);
const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt4 = `⛱️ *الرابط:* ${shortUrl3}\n\n${wm}`.trim();
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
handler.limit = 2          
} catch {
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt1 = `⛱️ *الرابط:* ${shortUrl1}\n\n${wm}`.trim();
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
handler.limit = 2            
} catch {
console.log('خطأ في المحاولة 4، لا توجد نتائج')  
conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()} خطأ يرجى المحاولة مرة أخرى🚩`, edit: key});
handler.limit = 0
}}}}}};
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|انستا)$/i
handler.limit = 2
export default handler;

const getBuffer = async (url, options) => {
options = options || {};
const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'});
const buffer = Buffer.from(res.data, 'binary');
const detectedType = await fileTypeFromBuffer(buffer);
if (!detectedType || (detectedType.mime !== 'image/jpeg' && detectedType.mime !== 'image/png' && detectedType.mime !== 'video/mp4')) {
return null;
}
return { buffer, detectedType };
};
