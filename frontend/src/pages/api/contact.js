import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const client = await clientPromise();
    const dbName = process.env.MONGODB_DB || 'portfolio-messages';
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    console.log('Contact form submission saved:', result.insertedId);

    return res.status(200).json({
      message: 'Message saved successfully!',
      data: { name, email, timestamp: new Date().toISOString() },
    });
  } catch (error) {
    console.error('Contact form error:', error.message || error);
    return res.status(500).json({
      message: 'Failed to save message. Please try again later.',
    });
  }
}
