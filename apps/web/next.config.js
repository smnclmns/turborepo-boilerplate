/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        appDir: true,
        serverActions: true,
        // deaktiviert die Host/Origin-Validierung
        serverActionsSkipHostCheck: true,
    },
}

export default nextConfig;
