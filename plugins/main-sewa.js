let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo User DaniBotz ð
â­ââã *SEWABOT* ã
â  1 Minggu : lDR 3.000 (3k)
â  1 BULAN : IDR 5.000 (5k)
â  5 BULAN : lDR 8.000 (8k) 
â°ââââ
â­â [ KELEBIHAN BOT ]
â  ï¼¯ï¼® 24 ï¼ªï¼¡ï¼­
â  FITUR BANYAK
â  FAST RESPOND
â°ââââ
â­â[ KEUNTUNGAN ]
â  ANTI LINK ( AUTO KICK )
â  WELCOME ( OTOMATIS )
â  DAN RATUSAN FITUR LAINYA
â°ââââ
â­â[ *PAYMENT* ]
â  DANA
â  GOPAY
â  OVO
â°ââââ
âââã  *PERHATIANâ ï¸*  ãâê¥
â¬¡ [â] *Dana yang sudah masuk tidak bisa di kembalikan*
âââââââââââê¥
Jika anda berminat hubungi nomor di bawah!!

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kakð¼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewadani']
handler.tags = ['info']
handler.command = /^(danisewa|sewadani|sewa|sewabot)$/i

module.exports = handler
