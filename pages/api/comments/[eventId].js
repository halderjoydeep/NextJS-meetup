import fs from 'fs';
import path from 'path';

export function buildCommentsPath() {
  const filePath = path.join(process.cwd(), 'data', 'comments.json');
  return filePath;
}

export function getData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req, res) {
  const { eventId } = req.query;

  if (req.method === 'GET') {
    const filePath = buildCommentsPath();
    const data = getData(filePath);
    const commentList = data[eventId] || [];

    res.status(200).json({ commentList });
  } else if (req.method === 'POST') {
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
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      name,
      email,
      comment,
    };

    const filePath = buildCommentsPath();
    const data = getData(filePath);

    const commentList = data[eventId] || [];
    commentList.push(newComment);

    data[eventId] = commentList;

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Added comment' });
  }
}
