import { useState } from "react"
import Customers from "./components/Customers"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Customers />
  )
}

export default App
