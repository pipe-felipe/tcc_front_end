export type CustomerType = {
  id: string
  name: string
  email: string
  document: string
  creditCard: {
    flag: string
    holderName: string
    number: string
    validThru: string
    cvv: number
  }
  address: {
    street: string
    number: number
    city: string
    state: string
    country: string
    zipCode: number
  }
  birthDate: string
  age: number
  createdAt: string
  transactionValue: number
  transactionCount: number
  allTransactions: number[]
}