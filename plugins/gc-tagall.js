let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}*✦━━━━━━[ 𝐃𝐚𝐳𝐚𝐢 ]━━━━━━✦*
*⤹⚜⊰⚡⊱⚜⤸*
*✦━━─━━━⌠♠️⌡━━━─━━✦*
*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*
\n` + users.map(v => '│◦❈↲ المعلم@' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ 𝐃𝐚𝐳𝐚𝐢 ]━━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
