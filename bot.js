// => Chamando o gerador de QR code que acabamos de instalar

const qrcode = require('qrcode-terminal');

// => Chamando a lib que vai permitir criarmos o nosso chatbot

const { Client } = require('whatsapp-web.js');
const client = new Client();

// Gerando o qr code para acessar o nosso whatsapp
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('O Whatsapp já está conectado!');
});

client.initialize();
var nome = "xvx99*";

client.on('message', message => {
    if(message.body!==null && message.body === 'Olá') {
		message.reply('Olá, aqui é o robô da Nyckole!');
		client.sendMessage(message.from, 'Antes da gente começar, qual o seu nome?');
	}

    else if(message.body !== null && message.body !== 'Olá, Nyckole! Tudo bem com você?' && nome === "xvx99*"){
        nome = message.body;
        console.log(nome)
        client.sendMessage(message.from, 'Olá '+nome+', tudo bom com você?');
        client.sendMessage(message.from, 'A Nyck, responderá assim que possivel.');
        
    }
   
});
 
 