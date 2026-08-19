export default defineAppConfig({
  title: 'Sink',
  email: 'dj@stomp.zone',
  github: 'https://github.com/DJStompZone/sink',
  twitter: 'https://stomp.zone',
  telegram: 'https://stomp.zone',
  mastodon: 'https://stomp.zone',
  discord: 'https://discord.stomp.zone',
  homeurl: 'https://link.stomp.zone',
  blog: 'https://stomp.zone',
  description: 'A quick, easy, and secure link shortener with analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
