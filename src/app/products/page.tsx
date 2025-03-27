'use client'

import { useAppSelector } from '../lib/store/hooks'
import ProductsList from '../ui/product/product-list'
import ToolBar from '../ui/product/toolbar'
import { selectProducts } from '../lib/store/selectors'

export default function Products() {
	const products = useAppSelector(selectProducts)

	return (
		<div className='container mx-auto h-[100vh] flex flex-col justify-center px-4 py-8'>
			<ToolBar />
			<ProductsList products={products} />
		</div>
	)
}
