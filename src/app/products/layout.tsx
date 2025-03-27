import StoreProvider from '../StoreProvider'
export default async function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const data = await fetch(`${process.env.BASE_URL}/products`)
	const products = await data.json()
	return <StoreProvider products={products}>{children}</StoreProvider>
}
