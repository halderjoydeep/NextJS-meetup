import { connectDatabase, insertDocument } from '../../utils/db-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email || email.trim() === '' || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid Email Address' });
      return;
    }

    let client;
    // Connecting to Database
    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to Database failed' });
      return;
    }

    // Inserting Document
    try {
      await insertDocument(client, 'newsletter', { email });
      client.close();
      res.status(201).json({ message: 'Newsletter subscribed' });
    } catch (err) {
      res.status(500).json({ message: 'Subcription failed.' });
      return;
    }
  }
}
