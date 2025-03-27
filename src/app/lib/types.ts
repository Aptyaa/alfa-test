export type TProduct = {
	id: string
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
	liked?: boolean
}

export type FormData = Omit<TProduct, 'liked'>
