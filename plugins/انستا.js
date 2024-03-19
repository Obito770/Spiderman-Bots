import igdl from '@sasmeee/igdl';
import { instagram } from "@xct007/frieren-scraper";

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `اين الرابط؟`;
//        "@bochilteam/scraper": "github:DK3MK/scraper",
  try {
    m.react('📥');

    const dataList = await igdl(text);
    const vid = dataList[0].download_link;
    conn.sendFile(m.chat, vid, 'ig.mp4', `*✅ ها هو طلبك*`, m);
    m.react('✅');
  } catch (error) {
    console.error(error);

    try {
      const Obj = await instagram.download(text);
      const vid = Obj[0].url;
      conn.sendFile(m.chat, vid, 'ig.mp4', `*✅ ها هو طلبك*`, m);
      m.react('✅');
    } catch (error) {
      console.error(error);
      m.reply('❌ خطأ!');
      m.react('❗');
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|igdl|ig|instagramdl|انستا)$/i;

export default handler;
