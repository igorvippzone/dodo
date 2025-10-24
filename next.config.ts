import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {

		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.dodostatic.net',
				port: '',
				pathname: '/**',
			},
		],
	},
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client'],
	},
}

export default nextConfig
