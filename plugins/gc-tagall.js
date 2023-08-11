let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐧𝐢𝐠𝐭𝐡𝐦𝐚𝐫𝐞𝐬_𝐟𝐟: ${pesan}`
let teks = `✨🍄𝐀𝐂𝐓𝐈𝐕𝐄𝐍 𝐇𝐎𝐍𝐆𝐔𝐈𝐓𝐎𝐒🍄✨ \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `💕  @${mem.id.split('@')[0]}\n`}
teks += `🐾ᴺᴹ┊ʙᴏɴɴɪ💕`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
