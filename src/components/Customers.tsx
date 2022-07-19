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
  }

  return (
    <>
      <ReactPaginate
        previousLabel={"Before"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={3}
        onPageChange={handlerPageClick}
      />

      {data.map((customer) => {
        return <Customer key={customer.id} {...customer} />
      })}
    </>
  )
}
