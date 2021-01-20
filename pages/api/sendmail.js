import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import mailer from '../../middleware/mailer';
const handler = nextConnect();

handler.get(async (req, res) => {
    const { data } = req.query;
    const dataModel = { name: '', email: '', sent: false }
    let doc = {}
    // if (data) {
    //     doc = await req.db.collection('ebook').findOne({ email: date.email })
    // } else {
    //     doc = dataModel
    // }
    if (doc == null) {
        doc = dataModel
    }

    res.json(doc)
});
handler.post(async (req, res) => {
    // let doc = {}
    let data = req.body;
    // const dataModel = { name: '', email: '', sent: false }

    if (data.email) {
        // doc = await req.db.collection('ebook').findOne({ email: data.email })
        const nome = req.body.nome;
        const email = req.body.email;
        const mensagem = `Olá, para garantir a promoção, clique no link e faça sua inscrição https://forms.gle/NWtC4mr9darGcXoA8`;
        const anexo = false;
        mailer(email, nome, mensagem, anexo)
            .then(response => res.json(response))
            .catch(error => res.json(error));
    }
    if (data.friendEmail) {
        // doc = await req.db.collection('ebook').findOne({ email: data.email })
        const nome = req.body.friendNome;
        const email = req.body.friendEmail;
        const mensagem = `Olá, para garantir a promoção, clique no link e faça sua inscrição https://forms.gle/NWtC4mr9darGcXoA8`;
        const anexo = false;
        mailer(email, nome, mensagem, anexo)
            .then(response => res.json(response))
            .catch(error => res.json(error));
    }
    // if (doc == null) {
    //     doc = await req.db.collection('ebook').updateOne({ email: data.email }, { $set: data }, { upsert: true })
    //     res.json({ message: 'Enviado' });
    // }

})
export default handler;