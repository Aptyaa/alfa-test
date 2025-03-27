import { memo } from 'react'
import ReactPaginate from 'react-paginate'

type PaginationProps = {
	currentPage: number
	handlePageClick: (event: { selected: number }) => void
	pageCount: number
}

export default memo(function Pagination({
	currentPage,
	handlePageClick,
	pageCount,
}: PaginationProps) {
	return (
		<ReactPaginate
			forcePage={currentPage}
			breakLabel='...'
			nextLabel='>'
			onPageChange={handlePageClick}
			pageRangeDisplayed={3}
			pageCount={pageCount}
			previousLabel='<'
			renderOnZeroPageCount={null}
			containerClassName='flex justify-center gap-2 items-center'
			pageLinkClassName={`
                  w-10 h-10 flex items-center justify-center border rounded 
                  hover:bg-gray-100 transition-colors cursor-pointer
                  `}
			activeLinkClassName='!bg-blue-600 text-white cursor-pointer'
			previousLinkClassName='w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100 cursor-pointer'
			nextLinkClassName='w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100 cursor-pointer'
			breakClassName='px-2 cursor-pointer'
			disabledClassName='opacity-50'
			disabledLinkClassName='cursor-not-allowed'
		/>
	)
})
