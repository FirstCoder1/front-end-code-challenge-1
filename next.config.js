module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    WS_URL: process.env.WS_URL,
  },
  async rewrites() {
    return [
      {
        source: "/prod/:path*",
        destination:
          "https://pkqanvsp76.execute-api.us-east-1.amazonaws.com/prod/:path*", // Proxy to Backend
      },
    ];
  },
};
