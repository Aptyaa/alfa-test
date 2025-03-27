'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store/store'
import { initializeProducts } from './lib/store/features/productSlice'
import { TProduct } from './lib/types'

export default function StoreProvider({
	products,
	children,
}: {
	products: TProduct[]
	children: React.ReactNode
}) {
	const storeRef = useRef<AppStore | null>(null)
	if (!storeRef.current) {
		storeRef.current = makeStore()
		storeRef.current.dispatch(initializeProducts(products))
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
