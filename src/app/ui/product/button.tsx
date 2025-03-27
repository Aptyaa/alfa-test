import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	onClick,
	variant = 'primary',
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				'px-4 cursor-pointer py-2 transition-colors duration-200 text-sm font-medium',
				{
					'bg-blue-600 text-white rounded-lg hover:bg-blue-700':
						variant === 'primary',
					'border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 ':
						variant === 'secondary',
				}
			)}
		>
			{children}
		</button>
	)
}
