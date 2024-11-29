import { sprintf } from '@/lib/str.ts';

const githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID;

const oauthRedirectUrl = import.meta.env.VITE_OAUTH_REDIRECT_URL;

export async function redirectGithubOauth() {
  window.location.href = sprintf(
    'https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s',
    githubClientId,
    oauthRedirectUrl,
    'repo,user',
  );
}
