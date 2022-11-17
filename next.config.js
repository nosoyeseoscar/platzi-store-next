/** @type {import('next').NextConfig} */
/* const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev',
        permanent: true,
      },
    ];
  },
};
 */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'cdn.pixabay.com', 'vuzoon.com', 'www.complementosdelcafe.com', 'images.pexels.com','res.cloudinary.com', 'http2.mlstatic.com'],
  },
};

/* const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'cdn.pixabay.com', 'vuzoon.com', 'www.complementosdelcafe.com'],
  },
};

module.exports = nextConfig;

module.exports = {
  reacStrictMode: true,
}; */

//module.exports = nextConfig;
