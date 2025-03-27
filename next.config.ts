import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: 'fakestoreapi.com',
			},
		],
	},
	allowedDevOrigins: ['local-origin.dev',  '*.local-origin.dev']
}

export default nextConfig
