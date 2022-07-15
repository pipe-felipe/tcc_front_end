import {useFetch} from "../hooks/useFetch";
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

    const {data: dogProfile} = useFetch<ProfilePicture>(Url.dogProfile)
    const {data: userData} = useFetch<User[]>(Url.user)

    return (
        <div className="bg-amber-800 w-72 h-72">

            {userData?.map(user => {
                return (
                    <div>

                        <div className="flex justify-center items-center">
                            <div className="z-50 translate-y-1.5 bg-amber-50 w-20 h-20 rounded-3xl flex">
                                <img className="object-fill border-2 w-20 h-20 rounded-3xl" src={dogProfile?.message} alt="dog"/>
                            </div>
                        </div>

                        <div
                            className="-z-10 m-auto -translate-y-8 border-2 rounded-2xl w-11/12 h-4/5 grid grid-cols-1 place-content-center">

                            <div className="text-center mt-5">
                                <input
                                    type="text"
                                    readOnly={true}
                                    className="border w-11/12 ml-1 mr-1 rounded-md p-1"
                                    name="document"
                                    value={user.document}
                                />
                                <input
                                    type="text"
                                    readOnly={true}
                                    className="mt-1 border w-11/12 ml-1 mr-1 rounded-md p-1"
                                    name="document"
                                    value="55448487569"
                                />
                                <input
                                    type="text"
                                    readOnly={true}
                                    className="mt-1 border w-11/12 ml-1 mr-1 rounded-md p-1"
                                    name="document"
                                    value="55448487569"
                                />
                                <input
                                    type="text"
                                    readOnly={true}
                                    className="mt-1 border w-11/12 ml-1 mr-1 rounded-md p-1"
                                    name="document"
                                    value="55448487569"
                                />
                            </div>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}