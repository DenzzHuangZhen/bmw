let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo User DaniBotz 👋
       
╭──「 *_JADI BOT + OWNER_* 」
├   RP : IDR 25.000 (25k)
╰────
╭─ [ FASILITAS ]
├  CUMA SCAN QR DOANG JADI BOT + OWNER                
├  RUN DI HEROKU BUKAN TERMUX + FAST RESPOND
├  FITUR BOT NYA BANYAK
├  BUKAN BOT WIBUSOFT
╰────
╭─[ KEUNTUNGAN ]
├  BISA OPEN SEWA BOT
├  NAMA BOT, NAMA OWNER, OWNER, DLL DI GANTI JADI TERSERAH LU
╰────
╭─[ *PAYMENT* ]
├  DANA
├  GOPAY
├  PULSA
╰────

┏━━〔 PERHATIAN: 〕━ꕥ
-KALAU BOT YANG INI CUMA
CONTOH FITUR/MENU NYA SAJA

-KECEPATAN RESPON DI BOT INI
JUGA DELAY KARNA CUMA CONTOH SAJA

-KALAU BOT YANG KALIAN SEWA
ATAU KALIAN JADI BOT
RESPON BOTNYA LEBIH CEPAT
KARNA RUN NYA BEDASOFTWARE
┗━━━━━━━━━━ꕥ

Jika Anda Berminat Hubungi Nomor Di Bawah!!

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewadani', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
