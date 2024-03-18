/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode:false,
    images:{
        domains:['ap-south-1.graphassets.com',
                'media.graphassets.com',
            'lh3.googleusercontent.com']
    }
};

export default nextConfig;
