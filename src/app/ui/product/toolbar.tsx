'use client'
import { ChangeEvent, memo, useRef } from 'react'
import { useAppDispatch } from '../../lib/store/hooks'
import {
	searchProducts,
	setFilter,
	TFilter,
} from '../../lib/store/features/productSlice'
import { HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default memo(function ToolBar() {
	const dispatch = useAppDispatch()
	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleChange = () => {
		if (!inputRef.current) return
		dispatch(searchProducts(inputRef.current.value))
	}
	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch(setFilter(e.target.value as TFilter))
	}
	return (
		<div className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-col md:flex-row gap-3 items-stretch'>
					<div className='flex-grow'>
						<input
							type='text'
							ref={inputRef}
							onChange={handleChange}
							placeholder='Введите название...'
							className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
						/>
					</div>

					<div className='flex flex-row gap-3 items-center'>
						<select
							onChange={handleSelect}
							name='filter'
							id='filter'
							className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
						>
							<option value='all'>Все</option>
							<option value='favorites'>Избранное</option>
							<option value='popular'>Популярное</option>
						</select>

						<Link
							href='/products/create'
							className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors duration-300 whitespace-nowrap'
						>
							Добавить товар
						</Link>
						<Link href={'/'}>
							<HomeIcon width={30} height={30} className='text-blue-600' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
})
