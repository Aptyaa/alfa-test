import { RootState } from './store'

export const selectProducts = (state: RootState) => {
	console.log(state)
	if (state.isSearch && !state.filteredProducts.length) return []
	const baseProducts = state.filteredProducts.length
		? state.filteredProducts
		: state.products
	switch (state.filter) {
		case 'popular':
			return baseProducts.filter(p => p.rating.rate > 4.3)
		case 'favorites':
			return baseProducts.filter(p => p.liked)
		default:
			return baseProducts
	}
}
