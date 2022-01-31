import clientPromise from '../../utils/mongodb';

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = await client.db();
    const data = await db.collection('tasks').find({}).toArray();
    // db.collection('tasks').insertOne({ hello: 20 });
    res.status(200).json({ data, name: 'successfully connected to database' });
  } catch (err) {
    res.status(500).json({ message: `err: ${err}` });
  }
};

export default handler;
