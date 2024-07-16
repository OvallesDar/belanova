/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ovarey2-0.s3.eu-west-3.amazonaws.com",
                pathname: "/belanova/**"
            }
        ],
        unoptimized: true
    }
};

export default nextConfig;
