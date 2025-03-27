'use client'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks'
import { StarIcon } from '@heroicons/react/24/solid'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { updateProduct } from '../../lib/store/features/productSlice'
import { useForm } from 'react-hook-form'
import { Button } from '../../ui/product/button'
import CustomLink from '../../ui/product/custom-link'
import { FormData } from '../../lib/types'

export default function ProductDetail() {
	const { id } = useParams()
	const product = useAppSelector(state =>
		state.products.find(p => p.id === Number(id))
	)
	const dispatch = useAppDispatch()
	const [isEditing, setIsEditing] = useState(false)

	const { register, handleSubmit, reset } = useForm<FormData>({
		defaultValues: product || {},
	})

	const onSubmit = (data: FormData) => {
		if (!product) return

		dispatch(
			updateProduct({
				...product,
				...data,
			})
		)

		setIsEditing(false)
	}

	const handleEditClick = () => {
		setIsEditing(true)
	}

	const handleCancel = () => {
		reset()
		setIsEditing(false)
	}

	if (!product) {
		return <div className='text-center'>Loading...</div>
	}

	const inputStyles = isEditing
		? 'w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
		: 'border-none bg-transparent p-0 focus:outline-none'

	return (
		<div className='flex flex-col items-center'>
			<div className='max-w-md mx-[10px]  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
				<form onSubmit={handleSubmit(onSubmit)} className='p-8'>
					<div className='mb-6'>
						<input
							{...register('title')}
							className={`text-l sm:text-3xl font-bold text-center text-gray-900 w-full ${inputStyles}`}
							readOnly={!isEditing}
						/>
					</div>
					<div className='flex justify-center mb-6'>
						<Image
							src={product.image}
							alt={product.title}
							width={250}
							height={250}
							className='rounded-lg w-50 md:w-56'
						/>
					</div>
					<div className='mt-6 space-y-4'>
						<div>
							<span className='font-semibold'>Категория:</span>
							<input
								{...register('category')}
								className={`ml-1 text-sm sm:text-lg text-gray-700 ${inputStyles}`}
								readOnly={!isEditing}
							/>
						</div>
						<div>
							<span className='font-semibold'>Цена:</span>
							<input
								type='number'
								step='0.01'
								{...register('price', { valueAsNumber: true })}
								className={`ml-1 text-sm sm:text-lg text-gray-700 ${inputStyles}`}
								readOnly={!isEditing}
							/>
						</div>
						<div className='flex items-center gap-1'>
							<span className='font-semibold'>Рейтинг:</span>
							<input
								type='number'
								step='0.1'
								min='0'
								max='5'
								{...register('rating.rate', { valueAsNumber: true })}
								className={`text-sm sm:text-lg text-gray-700 w-12 ${inputStyles}`}
								readOnly={!isEditing}
							/>
							<StarIcon color='yellow' width={20} />
							<span>(</span>
							<input
								type='number'
								{...register('rating.count', { valueAsNumber: true })}
								className={`text-sm sm:text-lg text-gray-700 w-12 ${inputStyles}`}
								readOnly={!isEditing}
							/>
							<span>отзывов)</span>
						</div>
					</div>
					<div className='mt-6'>
						<h2 className='text-l sm:text-2xl font-bold text-gray-900 mb-4'>
							Описание
						</h2>
						<textarea
							{...register('description')}
							rows={4}
							className={`text-xs sm:text-lg text-gray-700 italic w-full ${inputStyles}`}
							readOnly={!isEditing}
						/>
					</div>
					<div className='mt-6 flex gap-2 justify-between'>
						<CustomLink variant='secondary' href='/products'>
							Вернуться к товарам
						</CustomLink>
						{isEditing ? (
							<>
								<Button variant='secondary' onClick={handleCancel}>
									Отмена
								</Button>
								<Button variant='primary' onClick={handleEditClick}>
									Сохранить
								</Button>
							</>
						) : (
							<Button onClick={handleEditClick}>Редактировать</Button>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}
