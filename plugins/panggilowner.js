let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '6285742344873@s.whatsapp.net', '*Knp Tag2 Ajg:v*')
}
handler.customPrefix = /^(@6285742344873)$/i
handler.command = new RegExp

module.exports = handler
