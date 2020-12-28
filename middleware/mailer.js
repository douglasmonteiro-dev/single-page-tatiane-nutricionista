const mailer = require('nodemailer');

 
module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //SSL/TLS
        type: 'OAuth2',
        auth: {
            user: 'tatianeribeiro.nutri@gmail.com',
            pass: '6370445422!!',
            type: 'OAuth2',

        }
    })

    
    const mail = {
        from: "Tatiane Nutricionista <tatianeribeiro.nutri@gmail.com>",
        to: email,
        subject: `Aqui está seu Ebook`,
        text: mensagem,
        //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }
    
    if(anexo){
        mail.attachments = [];
        mail.attachments.push({
            filename: 'ebook.pdf',
            href: 'https://www.saoluis.org/feira-do-conhecimento/wp-content/uploads/2020/11/63-BANNER-A-DESIGUALDADE-DE-ACESSO-%C3%80-UMA-ALIMENTA%C3%87%C3%83O-SAUD%C3%81VEL-NO-BRASIL_compressed.pdf',
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