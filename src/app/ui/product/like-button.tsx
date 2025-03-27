'use client'
import { useCallback } from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks'
import { likeProduct } from '../../lib/store/features/productSlice'
import { shallowEqual } from 'react-redux'

interface ILikeButtonProps {
	productId: number | string
}

export default function LikeButton({ productId }: ILikeButtonProps) {
	const dispatch = useAppDispatch()
	const { liked } = useAppSelector(
		state => ({
			liked: state.products.find(p => p.id === productId)?.liked,
		}),
		shallowEqual
	)
	const toggleLike = useCallback(() => {
		dispatch(likeProduct(productId))
	}, [])
	return (
		<div className='flex justify-end'>
			<button className='cursor-pointer' onClick={toggleLike}>
				<HeartIcon
					className={clsx('w-6 h-6', {
						'text-red-500': liked,
						'text-slate-200': !liked,
					})}
				/>
			</button>
		</div>
	)
}
