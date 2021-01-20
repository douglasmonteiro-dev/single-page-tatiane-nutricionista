const mailer = require('nodemailer');

 
module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //SSL/TLS
        auth: {
            user: 'tatianeribeiro.nutri@gmail.com',
            pass: 'xpmsaodbvidgqvtq'
        }
    })

    
    const mail = {
        from: "Tatiane Nutricionista <tatianeribeiro.nutri@gmail.com>",
        to: email,
        subject: `Promoção Desafio Sob Medidas`,
        text: mensagem,
        //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }
    
    if(anexo){
        mail.attachments = [];
        mail.attachments.push({
            filename: 'ebook.pdf',
            href: 'www.tatiane.ntr.br/livro.pdf',
            contentType: 'application/pdf'
        })
    }
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}