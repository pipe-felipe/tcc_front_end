import { CustomerType } from "../types/CustomerType"

export default function Customer(props: CustomerType) {
  return (
    <div className="mt-1 h-72 w-72">
      <div className="flex items-center justify-center">
        <div className="z-50 flex h-20 w-20 translate-y-1.5 rounded-3xl bg-amber-50"></div>
      </div>

      <div className="-z-10 m-auto grid h-4/5 w-11/12 -translate-y-8 grid-cols-1 place-content-center rounded-2xl border-2">
        <div className="mt-5 text-center">
          <input
            type="text"
            readOnly={true}
            className="ml-1 mr-1 w-11/12 rounded-md border p-1"
            name="name"
            value={props.name}
          />
          <input
            type="text"
            readOnly={true}
            className="mt-1 ml-1 mr-1 w-11/12 rounded-md border p-1"
            name="document"
            value={props.document}
          />
          <input
            type="text"
            readOnly={true}
            className="mt-1 ml-1 mr-1 w-11/12 rounded-md border p-1"
            name="email"
            value={props.email}
          />
          <input
            type="text"
            readOnly={true}
            className="mt-1 ml-1 mr-1 w-11/12 rounded-md border p-1"
            name="transactionCount"
            value={props.transactionCount}
          />
        </div>
      </div>
    </div>
  )
}
