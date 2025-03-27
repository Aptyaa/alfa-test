'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { addProduct } from '../../lib/store/features/productSlice'
import { useAppDispatch } from '../../lib/store/hooks'
import { nanoid } from '@reduxjs/toolkit'
import { Button } from '../../ui/product/button'
import CustomLink from '../../ui/product/custom-link'

type Category = 'men`s clother' | 'women`s clother' | 'electronics' | 'jewerly'

type Inputs = {
	title: string
	price: number
	description: string
	category: Category
	image: string
}

export default function CreatePage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Inputs>()
	const dispatch = useAppDispatch()

	const onSubmit: SubmitHandler<Inputs> = data => {
		dispatch(
			addProduct({ ...data, id: nanoid(), rating: { count: 0, rate: 0 } })
		)
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full sm:w-xl mx-3 p-6 bg-white rounded-lg shadow-md'
		>
			<div className='mb-4'>
				<label htmlFor='title' className='block text-gray-700 mb-2'>
					Название товара
				</label>
				<input
					id='title'
					{...register('title', {
						required: 'Обязательное поле',
						minLength: {
							value: 3,
							message: 'Минимум 3 символа',
						},
					})}
					className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				{errors.title && (
					<span className='text-red-500 text-sm'>{errors.title.message}</span>
				)}
			</div>

			<div className='mb-4'>
				<label htmlFor='price' className='block text-gray-700 mb-2'>
					Цена
				</label>
				<input
					id='price'
					type='number'
					{...register('price', {
						required: 'Обязательное поле',
						min: {
							value: 1,
							message: 'Цена должна быть больше 0',
						},
					})}
					className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				{errors.price && (
					<span className='text-red-500 text-sm'>{errors.price.message}</span>
				)}
			</div>

			<div className='mb-4'>
				<label htmlFor='description' className='block text-gray-700 mb-2'>
					Описание
				</label>
				<textarea
					id='description'
					{...register('description', {
						required: 'Обязательное поле',
						maxLength: {
							value: 500,
							message: 'Максимум 500 символов',
						},
					})}
					className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					rows={4}
				/>
				{errors.description && (
					<span className='text-red-500 text-sm'>
						{errors.description.message}
					</span>
				)}
			</div>

			<div className='mb-4'>
				<label htmlFor='category' className='block text-gray-700 mb-2'>
					Категория
				</label>
				<select
					id='category'
					{...register('category', { required: 'Выберите категорию' })}
					className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					<option value=''>Выберите...</option>
					<option value='electronics'>Электроника</option>
					<option value='jewerly'>Украшения</option>
					<option value='men`s clother'>Мужская одежда</option>
					<option value='women`s clother'>Женская одежда</option>
				</select>
				{errors.category && (
					<span className='text-red-500 text-sm'>
						{errors.category.message}
					</span>
				)}
			</div>

			<div className='mb-6'>
				<label htmlFor='image' className='block text-gray-700 mb-2'>
					URL изображения
				</label>
				<input
					id='image'
					type='url'
					{...register('image', {
						required: 'Обязательное поле',
						pattern: {
							value: /^(https?:\/\/).+\.(jpg|jpeg|png|webp)$/i,
							message: 'Введите корректный URL изображения',
						},
					})}
					className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				{errors.image && (
					<span className='text-red-500 text-sm'>{errors.image.message}</span>
				)}
			</div>
			<div className='flex justify-between'>
				<CustomLink variant='secondary' href='/products'>
					Вернуться к товарам
				</CustomLink>
				<Button type='submit'> Добавить товар</Button>
			</div>
		</form>
	)
}
