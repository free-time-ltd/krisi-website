/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'krisi-gallery.s3.eu-west-2.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
