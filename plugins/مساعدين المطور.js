const dir = [
'https://telegra.ph/file/3a268ae6b9aad8adc920a.jpg',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '*〄 ┇⑇〘مساعدين المطور〙⬂*\n\n*❏⸽↜༺غوجو༻*\n\n*✐ الـمـنـشـن┆⌫\n\n⦑❘https://wa.me/963959649663❘⦒*\n\n*🜺𐄣🜺𐄣⏣『⚙️』⏣𐄣🜺𐄣🜺*\n\n*❏⸽↜༺شينوبو༻*\n\n*✐ الـمـنـشـن┆⌫ \n\n⦑❘ https://wa.me/963959506910 ❘⦒*\n\n*🜺𐄣🜺𐄣⏣『⚙️』⏣𐄣🜺𐄣🜺*\n\n*❏⸽↜༺هيفين༻*\n\n*✐ الـمـنـشـن┆⌫ \n\n⦑❘https://wa.me/201094093360 ⦒*\n\n*🜺𐄣🜺𐄣⏣『⚙️』⏣𐄣🜺𐄣🜺*\n\n*❏⸽↜༺سابو༻*\n\n*✐ الـمـنـشـن┆⌫\n\n⦑❘ https://wa.me/201009138639 ❘⦒*\n\n*🜺𐄣🜺𐄣⏣『⚙️』⏣𐄣🜺𐄣🜺*\n\n*❏⸽↜༺ماكيما༻*\n\n*✐ الـمـنـشـن┆⌫\n\n⦑❘ https://wa.me/994408894460 ❘⦒*\n\n     *❀╼╼╾╅〘🚨〙╆╼╾╾❀* ❘⦒*\n\n  *❀╼╼╾╅〘🚨〙╆╼╾╾❀*', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['مساعدين', 'المساعدين'] 

export default handler