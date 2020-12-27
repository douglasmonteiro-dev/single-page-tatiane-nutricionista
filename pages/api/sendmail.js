import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    const { data } = req.query;
    const dataModel = {name: '', email: '', sent: false}
    let doc = {}
    if(data){
        doc = await req.db.collection('ebook').findOne({email: date.email})
    } else {
        doc = dataModel
    }
    if(doc == null){
        doc = dataModel
    }
    res.json(doc)
});
handler.post(async (req, res) => {
    let doc = {}
    let data = req.body;
    const dataModel = {name: '', email: '', sent: false}

    if(data.email){
        doc = await req.db.collection('ebook').findOne({email: data.email})
    }
    if(doc == null){
        doc = await req.db.collection('ebook').updateOne({email: data.email}, {$set:data}, {upsert: true})
        res.json({message: 'Enviado'});
    }

  })
export default handler;