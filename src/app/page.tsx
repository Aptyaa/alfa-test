import CustomLink from './ui/product/custom-link'

export default function Home() {
	return (
		<>
			<div className='bg-white flex mx-2 items-center justify-center min-h-120 rounded-xl shadow-2xl p-8 max-w-2xl w-full text-center'>
				<div>
					<h1 className='text-2xl sm:text-5xl font-bold text-gray-900 mb-4'>
						Добро пожаловать на барахолку!
					</h1>
					<h3 className='text-l sm:text-2xl text-gray-700 mb-8'>
						Здесь вы найдете самые разные вещи!!!
					</h3>
					<CustomLink size='large' href='/products'>
						Смотреть
					</CustomLink>
				</div>
			</div>
		</>
	)
}
