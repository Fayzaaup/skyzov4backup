require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285313776434"
global.namaowner = "Fayyy's"
global.namaowner2 = "Fayyy's"

//======== Setting Bot & Link ========//
global.namabot = "Fayyy V4" 
global.namabot2 = "Fayyy V4"
global.version = "v4.0.0"
global.foother = "F A Y Y - S T A R X | StarX Team LLC - 2024"
global.footer = "Fayyy V4 - WhatsApp Bot LLC"
global.waowner = "https://wa.me/message/6FPPGJUOJXITD1"
global.idsaluran = "120363185304033911@newsletter"
global.idsaluran2 = "120363318563176002@newsletter"
global.idsaluran3 = ["120363300218728105@newsletter", "120363318563176002@newsletter"]
global.linkgc = 'https://shortlurl.com/l2vG'
global.linkgc2 = "https://chat.whatsapp.com/ILmjDLxoakg3VdSzh615A2"
global.linksaluran = "https://whatsapp.com/channel/0029VaB5oS4EquiYCsgUQs0t"
global.linkyt = 'https://youtube.com/@skyoffc?si=jmV2HnB9OTMFIAjg'
global.linktele = "https://t.me/fayyshop10"
global.linkqris = "https://telegra.ph/file/b64cc7158d69ae49768cd.png"
global.lann = "digibot"
global.packname = "Fayyy's"
global.author = "@andinii"

//========== Setting Event ==========//
global.autoread = true
global.anticall = true
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 12000
global.delayjpm = 5500

//========== Setting Foto ===========//
global.imgreply = fs.readFileSync("./media/Reply.jpg")
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = fs.readFileSync("./media/Slide.jpg")
global.imgpanel = fs.readFileSync("./media/Panel.jpg")


//========== Setting Panell ==========//
global.egg = "16"
global.loc = "1"
global.domain = "https://danzxreza.fayzaafx.my.id"
global.apikey = "ptla_kwGThP3hSfx1HmH0SPgwEjSxjTlRWrucLGGPxO5rP6O"
global.capikey = "ptlc_acB23Ep1uKB3FLjepVo56mcO77q1lnamIh0lXdSQM0b" 

//https://panelllkm.fayzaafx.tech
//ptla_TxejzRabV707kn7dXX6FAuASoeicd8Hk5ppCIpnSQl6
//ptlc_cpFmUl2vbu3

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "081212211650"
global.gopay = "081295169487"
global.ovo = "081212211650"
global.qris = fs.readFileSync("./media/Qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "76ea1a6c7aeb4f3640f83e665795d72c"
global.apitoken1 = "K3bxkibG5_QulQqR7QTIm4tWgLlOOPcUPy3SQY-w"
global.tld1 = "fayzaafx.tech"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})