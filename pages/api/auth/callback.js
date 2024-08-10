import { getAuthProvider } from '../../../utils/twitchAuth';

export default async function handler(req, res) {
  const authProvider = getAuthProvider();
  const { code } = req.query;

  try {
    const tokenInfo = await authProvider.getAccessTokenFromCode(code);
    const accessToken = tokenInfo.accessToken;
    const refreshToken = tokenInfo.refreshToken;

    // Here, store tokens securely, e.g., in a database or a session.
    // For now, we'll store them in a cookie for demonstration purposes.
    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; Path=/; HttpOnly`,
      `refreshToken=${refreshToken}; Path=/; HttpOnly`,
    ]);

    res.redirect('/dashboard'); // Redirect to the dashboard or another page after authentication
  } catch (error) {
    console.error('Error fetching access token:', error);
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
}
