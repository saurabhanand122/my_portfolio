export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
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
    // Here you would typically send the email using a service like SendGrid, Mailgun, etc.
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message });

    // In a real application, you'd send an email here
    // Example with a service:
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   subject: `New contact from ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`
    // });

    return res.status(200).json({
      message: 'Message sent successfully!',
      data: { name, email, timestamp: new Date().toISOString() }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}