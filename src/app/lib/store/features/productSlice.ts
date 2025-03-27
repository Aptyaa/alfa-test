import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { TProduct } from '../../types'
import { escapeRegExp } from '../../utils'
export type TFilter = 'all' | 'popular' | 'favorites'

export type ProductsState = {
	products: TProduct[]
	filteredProducts: TProduct[]
	isSearch: boolean
	filter: TFilter
}

export const initialState: ProductsState = {
	products: [],
	filteredProducts: [],
	isSearch: false,
	filter: 'all',
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		initializeProducts: (state, action: PayloadAction<TProduct[]>) => {
			state.products = action.payload
		},
		likeProduct: (state, action: PayloadAction<number | string>) => {
			const product = state.products.find(
				product => product.id === action.payload
			) as TProduct
			if (!product) return
			product.liked = !product.liked
		},

		addProduct: (state, action: PayloadAction<TProduct>) => {
			state.products.push({ ...action.payload, id: nanoid() })
		},
		searchProducts: (state, action: PayloadAction<string>) => {
			state.isSearch = true
			if (state.products.length === 0 || action.payload === '') {
				state.isSearch = false
				state.filteredProducts = []
				return
			}
			const regex = new RegExp(`${escapeRegExp(action.payload)}`, 'i')
			state.filteredProducts = state.products.filter(p => regex.test(p.title))
		},
		setFilter: (state, action: PayloadAction<TFilter>) => {
			state.filter = action.payload
		},
		updateProduct: (state, action: PayloadAction<Partial<TProduct>>) => {
			state.products = state.products.map(p => {
				if (p.id === action.payload.id) {
					return {
						...p,
						...action.payload,
						rating: { ...p.rating, ...action.payload.rating },
					}
				} else return p
			})
		},
		deleteProduct: (state, action: PayloadAction<number | string>) => {
			state.products = state.products.filter(p => p.id !== action.payload)
			if (state.filteredProducts.length)
				state.filteredProducts = state.filteredProducts.filter(
					p => p.id !== action.payload
				)
		},
	},
})

export default productSlice.reducer
export const {
	initializeProducts,
	likeProduct,
	addProduct,
	searchProducts,
	deleteProduct,
	updateProduct,
	setFilter,
} = productSlice.actions
