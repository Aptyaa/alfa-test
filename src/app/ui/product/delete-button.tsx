'use client'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useAppDispatch } from '../../lib/store/hooks'
import { deleteProduct } from '../../lib/store/features/productSlice'

interface IDeleteButton {
	productId: number | string
}

export default function DeleteButton({ productId }: IDeleteButton) {
	const dispatch = useAppDispatch()
	const handleDelete = () => {
		dispatch(deleteProduct(productId))
	}
	return (
		<div className='flex justify-end '>
			<button onClick={handleDelete} className='cursor-pointer'>
				<TrashIcon className='w-6 h-6 text-slate-900' />
			</button>
		</div>
	)
}
