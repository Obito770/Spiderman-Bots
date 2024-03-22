const dir = [
    'https://telegra.ph/file/c27336861c59f66618022.mp4',
    'https://telegra.ph/file/36ef61721756142c5aa73.mp4',
    'https://telegra.ph/file/8976c46bb07c59738e001.mp4',
    'https://telegra.ph/file/65582d93dfdf228efc82c.mp4',
    'https://telegra.ph/file/9f73e4ee991e70d9b510a.mp4',
    'https://telegra.ph/file/176c961f1dcba4587f15d.mp4',
    'https://telegra.ph/file/6f37730936fa378beb60d.mp4',
    'https://telegra.ph/file/7aee7ba01fe34b43ba6f6.mp4',
];

let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    const videoUrl = pickRandom(dir);
    const tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const more = String.fromCharCode(8206);
    const teks = `${pickRandom([`اهلا بيك`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['اوامر'،'menu'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
