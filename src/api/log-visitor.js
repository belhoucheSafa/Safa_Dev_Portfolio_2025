// /api/log-visitor.js
export default function handler(req, res) {
  const visitorIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();
  const path = req.headers.referer || 'unknown';
  const userAgent = req.headers['user-agent'] || 'unknown';

  // Logs will appear in Vercel dashboard
  console.log({ visitorIP, timestamp, path, userAgent });

  // Optional: Here you can save to database

  res.status(200).json({ success: true });
}
