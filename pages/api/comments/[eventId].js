import {
  connectDatabase,
  getDocument,
  insertDocument,
} from '../../../utils/db-util';

export default async function handler(req, res) {
  const { eventId } = req.query;

  let client;

  // Connecting to database
  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: 'Connection to database failed' });
    return;
  }

  if (req.method === 'POST') {
    const { name, email, comment } = req.body;

    if (
      !name ||
      !email ||
      !comment ||
      name.trim() === '' ||
      !email.includes('@') ||
      comment.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Inputs' });
      client.close();
      return;
    }

    const newComment = {
      name,
      email,
      comment,
      eventId,
    };

    // Inserting document to database
    try {
      await insertDocument(client, 'comments', newComment);
      res.status(201).json({ message: 'Comment added successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Adding comment failed' });
    }
  } else if (req.method === 'GET') {
    // Getting documents from database
    try {
      const commentList = await getDocument(
        client,
        { eventId: eventId },
        { _id: -1 }
      );
      res.status(200).json({ commentList });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Fetching comment failed', commentList: [] });
    }
  }

  client.close();
}
