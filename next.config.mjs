/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // This will allow production builds to succeed even if ESLint errors are present
      },
      typescript: {
        ignoreBuildErrors: true, // This will ignore TypeScript errors during the build process
      },
};

export default nextConfig;
