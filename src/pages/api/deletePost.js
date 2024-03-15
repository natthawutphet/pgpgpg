import { MongoClient, ObjectId } from 'mongodb';


export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db('yourDatabase'); // Replace 'yourDatabase' with your actual database name
      const result = await db.collection('posts').deleteOne({ _id: new ObjectId(id) });

      client.close();

      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
