'use client'
import { useEffect } from 'react'
import CustomLink from './ui/product/custom-link'
	declare global {
		interface Window {
			onTelegramAuth: (user: any) => void
		}
	}

interface User {
	id: number
	first_name: string
	last_name?: string
	username?: string
	photo_url?: string
}

export default function Home() {
	
	const onTelegramAuth = (user: User): void => {
		alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')')
	}

	useEffect(() => {
		window.onTelegramAuth = onTelegramAuth

		const script = document.createElement('script')
		script.src = 'https://telegram.org/js/telegram-widget.js?22'
		script.async = true
		script.setAttribute('data-telegram-login', 'aDatingService_bot')
		script.setAttribute('data-size', 'large')
		script.setAttribute('data-userpic', 'false')
		script.setAttribute('data-onauth', 'onTelegramAuth(user)')
		script.setAttribute('data-request-access', 'write')

		document.body.appendChild(script)
	}, [])

	return (
		<>
			<div className='bg-white flex mx-2 items-center justify-center min-h-120 rounded-xl shadow-2xl p-8 max-w-2xl w-full text-center'>
				<div>
					<h1 className='text-2xl sm:text-5xl font-bold text-gray-900 mb-4'>
						Добро пожаловать на барахолку!
					</h1>
					<h3 className='text-l sm:text-2xl text-gray-700 mb-8'>Здесь вы найдете самые разные вещи!!!</h3>
					<CustomLink size='large' href='/products'>
						Смотреть
					</CustomLink>
				</div>
			</div>
		</>
	)
}

