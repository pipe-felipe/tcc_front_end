import Customer from "./Customer"
import { CustomerType } from "../types/CustomerType"
import { useFetch } from "../hooks/useFetch"
import URL from "../apiUrls.json"
import ReactPaginate from "react-paginate"

export default function Customers() {
  const { data } = useFetch<CustomerType[]>(URL.tccRandom)
  const LIMIT = 3

  if (data === null) return <h1>There is no data</h1>

  const handlerPageClick = (data: any) => {
    console.log(data.selected)

    let currentPage = data.selected + 1

  }

  return (
    <>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={3}
        onPageChange={handlerPageClick}
        containerClassName={"ul-class"}
        pageClassName={"page-class"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-class"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-class"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

      {data.map((customer) => {
        return <Customer key={customer.id} {...customer} />
      })}
    </>
  )
}
