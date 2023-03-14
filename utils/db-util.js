import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db('events');
  await db.collection(collection).insertOne(document);
}

export async function getDocument(client, query, sort) {
  const db = client.db('events');
  const commentList = await db
    .collection('comments')
    .find(query)
    .sort(sort)
    .toArray();
  return commentList;
}
