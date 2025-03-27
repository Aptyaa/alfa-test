'use client'
import ProductCard from './product-card'
import { TProduct } from '../../lib/types'
import { useState, useEffect, useCallback } from 'react'
import Pagination from './pagination'

interface ProductListProp {
	products: TProduct[]
}

export default function ProductsList({ products }: ProductListProp) {
	const [currentItems, setCurrentItems] = useState<TProduct[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	const itemsPerPage = 4
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		const newCurrentItems = products.slice(itemOffset, endOffset)
		const newPageCount = Math.ceil(products.length / itemsPerPage)

		setCurrentItems(newCurrentItems)
		setPageCount(newPageCount)

		if (newCurrentItems.length === 0 && currentPage > 0) {
			const prevPage = Math.max(0, newPageCount - 1)
			const newOffset = (prevPage * itemsPerPage) % Math.max(1, products.length)
			setCurrentPage(prevPage)
			setItemOffset(newOffset)
		}
	}, [itemOffset, itemsPerPage, products, currentPage])

	const handlePageClick = useCallback((event: { selected: number }) => {
		const newPage = event.selected
		const newOffset = (newPage * itemsPerPage) % products.length
		setCurrentPage(newPage)
		setItemOffset(newOffset)
	}, [])

	return (
		<div className='container mt-50 md:mt-0 mx-auto px-4 py-8 flex flex-col min-h-screen'>
			{products.length === 0 ? (
				<div className='flex items-center justify-center h-64'>
					<p className='text-3xl text-gray-400'>Похоже вещей не осталось!!!</p>
				</div>
			) : (
				<div className='flex flex-col items-center justify-center flex-grow'>
					<ul className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full auto-rows-fr'>
						{currentItems.map(product => {
							return (
								<li
									key={product.id}
									className='mx-auto sm:w-11/12 md:w-full flex flex-grow'
								>
									<ProductCard product={product} />
								</li>
							)
						})}
					</ul>
					<div className='mt-12 w-full'>
						<Pagination
							currentPage={currentPage}
							handlePageClick={handlePageClick}
							pageCount={pageCount}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
