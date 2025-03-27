import Image from 'next/image'
import Link from 'next/link'
import LikeButton from './like-button'
import { TProduct } from '../../lib/types'
import DeleteButton from './delete-button'
import { StarIcon } from '@heroicons/react/24/solid'
import { memo } from 'react'

type ProductCardProps = {
	product: TProduct
}

export default memo(function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='max-h-[250px] min-w-[275px] max-w-[80vw] h-full flex-grow  bg-white rounded-lg w-full p-5 shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 cursor-pointer'>
			<LikeButton productId={product.id} />
			<Link
				href={`/products/${product.id}`}
				className='flex justify-center items-center'
			>
				<div className='relative flex items-center justify-center'>
					<Image
						src={product.image}
						alt={product.title}
						width={80}
						height={80}
						objectFit='cover'
						className='rounded-l-lg'
					/>
				</div>

				<div className='flex-1 p-4 flex flex-col justify-between'>
					<div>
						<h3 className='text-sm md:text-lg font-semibold text-gray-800 line-clamp-2'>
							{product.title}
						</h3>
						<p className='text-sm text-gray-600 line-clamp-1 mt-1'>
							{product.description}
						</p>
					</div>

					<div className='mt-4 flex items-center justify-between'>
						<div className='text-sm md:text-xl font-bold text-indigo-600'>
							${Number(product.price).toFixed(2)}
						</div>
						<div className='flex items-center space-x-1 text-yellow-500'>
							<span className='text-l text-gray-700 flex items-center'>
								{product.rating.rate}{' '}
								<StarIcon width={26} height={26} color='yellow' />
							</span>
						</div>
					</div>
				</div>
			</Link>
			<DeleteButton productId={product.id} />
		</div>
	)
})
