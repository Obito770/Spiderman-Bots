export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, command, usedPrefix }) {
    if (m.isBaileys && m.fromMe) return !0
    if (m.isGroup) return !1
    if (!m.message) return !0

    if (m.text.includes('المطور') || m.text.includes('الدعم') || m.text.includes('المالك') || m.text.includes('مطور') || m.text.includes('owner')) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[this.user.jid] || {}

    if (bot.gconly && !isOwner) {
        await m.reply(`┏━━〘 🆆🅴🅻🅲🅾🅼🅴 〙━━
┃ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒
┃📢 *ممنوع دخول البوت في الخاص* 📢
┃——————«•»———————
┃ ~*لذلك سيتم حظرك الان بسبب دخولك للبوت في الخاص وهذا السبب . . .*~
┃——————«•»———————
┃ *اذا كنت تريد تجربه البوت ادخل جروب البوت『 https://chat.whatsapp.com/FZrtNMezysq24t3GPt6oxE 』*
┖━─━─━─━─━─━─━─━━`, false, { mentions: [m.sender] })
        await conn.updateBlockStatus(m.sender, "block")
        return !1
    }
}
