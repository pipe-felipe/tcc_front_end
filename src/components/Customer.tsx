import { useFetch } from "../hooks/useFetch"
import Url from "../apiUrls.json"

type ProfilePicture = {
  message: string
  status: string
}

type User = {
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

export default function Customer() {
  const { data: dogProfile } = useFetch<ProfilePicture>(Url.dogProfile)
  const { data: userData } = useFetch<User[]>(Url.user)

  return (
    <div>
      {userData?.map((user) => {
        return (
          <div className="h-72 w-72 mt-1">
            <div className="flex items-center justify-center">
              <div className="z-50 flex h-20 w-20 translate-y-1.5 rounded-3xl bg-amber-50">
                <img className="h-20 w-20 rounded-3xl border-2 object-fill" src={dogProfile?.message} alt="dogs" />
              </div>
            </div>

            <div className="-z-10 m-auto grid h-4/5 w-11/12 -translate-y-8 grid-cols-1 place-content-center rounded-2xl border-2">
              <div className="mt-5 text-center">
                <input
                  type="text"
                  readOnly={true}
                  className="ml-1 mr-1 w-11/12 rounded-md border p-1"
                  name="name"
                  value={user.name}
                />
                <input
                  type="text"
                  readOnly={true}
                  className="mt-1 ml-1 mr-1 w-11/12 rounded-md border p-1"
                  name="document"
                  value={user.document}
                />
                <input
                  type="text"
                  readOnly={true}
                  className="mt-1 ml-1 mr-1 w-11/12 rounded-md border p-1"
                  name="email"
                  value={user.email}
                />
                <input
                  type="text"
                  readOnly={true}
                  className="mt-1 ml-1 mr-1 w-11/12 rounded-md border p-1"
                  name="transactionCount"
                  value={user.transactionCount}
                />
              </div>
            </div>
          </div>
        )})}
    </div>
  )
}
