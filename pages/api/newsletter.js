import fs from 'fs';
import path from 'path';

export function buildNewsletterPath() {
  const filePath = path.join(process.cwd(), 'data', 'newsletter.json');
  return filePath;
}

export function getData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email || email.trim() === '' || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid Email Address' });
      return;
    }

    const filePath = buildNewsletterPath();
    const data = getData(filePath);
    data.push(email);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'subscribed' });
  }
}
