import clientPromise from '../../utils/mongodb';

const handler = async (req, res) => {
  const data = req.body.data2;
  const { title, importance, importanceValue, description } = data;

  if (!title || !importance || !importanceValue) {
    res.status(422).json({ message: `Missing Value` });
    return;
  }
  if (title.trim() === '') {
    res.status(422).json({ message: `Invalid title or desc` });
    return;
  }
  if (
    !(importance === 'A') &&
    !(importance === 'B') &&
    !(importance === 'C') &&
    !(importance === 'D')
  ) {
    res.status(422).json({ message: `Invalid importance` });
    return;
  }
  if (
    !(importanceValue == 1) &&
    !(importanceValue == 2) &&
    !(importanceValue == 3) &&
    !(importanceValue == 4) &&
    !(importanceValue == 5)
  ) {
    res.status(422).json({ message: `Invalid importanceValue` });
    return;
  }

  try {
    const client = await clientPromise;
    const db = await client.db();

    db.collection('tasks').insertOne(data);
    res.status(200).json({ data, name: 'successfully connected to database' });
  } catch (err) {
    res.status(500).json({ message: `err: ${err}` });
  }
  res.status(200).json({ data, name: 'successfully connected to database' });
};

export default handler;
