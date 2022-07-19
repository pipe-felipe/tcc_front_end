import { useState } from "react"
import Customers from "./components/Customers"
import CustomerPagination from "./components/CustomerPagination"

function App() {
  const [count, setCount] = useState(0)

  return <Customers />
}

export default App
