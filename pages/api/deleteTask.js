import clientPromise from '../../utils/mongodb';
var mongodb = require('mongodb');
const handler = async (req, res) => {
  const id = req.body.id;
  // console.log('id in api:', id);
  try {
    const client = await clientPromise;
    const db = await client.db();

    db.collection('tasks').deleteOne({ _id: new mongodb.ObjectID(id) });

    res.status(200).json({ name: 'successfully connected to database' });
  } catch (err) {
    res.status(500).json({ message: `err: ${err}` });
  }
};

export default handler;
