/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/external/whatsapp',
        destination: 'https://chat.whatsapp.com/JWrJAkUXPNi11hsGbgNFx0',
        permanent: true,
      },
      {
        source: '/external/cardmarket/:game',
        destination: 'https://www.cardmarket.com/es/:game/Users/SimonVtcg',
        permanent: true,
      },
      {
        source: '/external/instagram',
        destination: 'https://www.instagram.com/simonvtcg/profilecard',
        permanent: false,
      },
    ]
  }
};

module.exports = nextConfig;
