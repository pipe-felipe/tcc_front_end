import Customer from "./Customer"
import { CustomerType } from "../types/CustomerType"
import { useFetch } from "../hooks/useFetch"
import URL from "../apiUrls.json"

export default function Customers() {
  const { data } = useFetch<CustomerType[]>(URL.tccRandom)
  const LIMIT = 3

  if (data === null) return <h1>There is no data</h1>

  return (
    <>
      {data.map((customer) => {
        return <Customer key={customer.id} {...customer} />
      })}
    </>
  )
}
