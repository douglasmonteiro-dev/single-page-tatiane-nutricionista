const mailer = require('nodemailer');

 
module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //SSL/TLS
        auth: {
            user: 'tatianeribeiro.nutri@gmail.com',
            pass: '6370445422!!'
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
            href: 'http://189.28.128.100/nutricao/docs/taco/tab_bras_de_comp_de_alim_doc.pdf',
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