import {AppTokenAuthProvider, StaticAuthProvider} from '@twurple/auth';
import { ApiClient } from '@twurple/api';
import { promises as fs } from 'fs';
import path from 'path';

let authProvider;

export const getAuthProvider = () => {
  if (!authProvider) {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;
    const redirectUri = process.env.TWITCH_REDIRECT_URI;

    authProvider = new AppTokenAuthProvider(
      clientId, clientSecret
    );
  }
  return authProvider;
};

export const getApiClient = async () => {
  const authProvider = getAuthProvider();
  return new ApiClient({ authProvider });
};
