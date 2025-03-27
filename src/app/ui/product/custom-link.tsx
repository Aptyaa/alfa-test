import clsx from 'clsx'
import Link from 'next/link'
import { LinkHTMLAttributes, ReactNode } from 'react'

type CustomLinkProps = {
	children: ReactNode
	variant?: 'primary' | 'secondary'
	size?: 'small' | 'large'
} & LinkHTMLAttributes<HTMLLinkElement>

export default function CustomLink({
	children,
	href,
	size = 'small',
	variant = 'primary',
}: CustomLinkProps) {
	return (
		<Link
			href={href || ''}
			className={clsx(
				'px-4 cursor-pointer py-2 transition-colors duration-200 text-sm font-medium',
				{
					'bg-blue-600 text-white rounded-lg hover:bg-blue-700':
						variant === 'primary',
					'border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 ':
						variant === 'secondary',
					'text-xl px-10 py-4': size === 'large',
				}
			)}
		>
			{children}
		</Link>
	)
}
