let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo User DaniBotz π
       
β­ββγ *_JADI BOT + OWNER_* γ
β Β  RP : IDR 25.000 (25k)
β°ββββ
β­β [ FASILITAS ]
β  CUMA SCAN QR DOANG JADI BOT + OWNERΒ Β Β Β Β Β Β Β Β Β Β Β Β Β Β  
β  RUN DI HEROKU BUKAN TERMUX + FAST RESPOND
β  FITUR BOT NYA BANYAK
β  BUKAN BOT WIBUSOFT
β°ββββ
β­β[ KEUNTUNGAN ]
β  BISA OPEN SEWA BOT
β  NAMA BOT, NAMA OWNER, OWNER,Β DLL DI GANTI JADI TERSERAH LU
β°ββββ
β­β[ *PAYMENT* ]
β  DANA
β  GOPAY
β  PULSA
β°ββββ

βββγ PERHATIAN: γβκ₯
-KALAU BOT YANG INI CUMA
CONTOH FITUR/MENU NYA SAJA

-KECEPATAN RESPON DI BOT INI
JUGA DELAY KARNA CUMA CONTOH SAJA

-KALAU BOT YANG KALIAN SEWA
ATAU KALIAN JADI BOT
RESPON BOTNYA LEBIH CEPAT
KARNA RUN NYA BEDASOFTWARE
βββββββββββκ₯

Jika Anda Berminat Hubungi Nomor Di Bawah!!

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kakπΌ*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewadani', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
