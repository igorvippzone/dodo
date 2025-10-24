import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client'],
	},
}

export default nextConfig
