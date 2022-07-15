import {useFetch} from "../hooks/useFetch";

type ProfilePicture  = {
    message: string
    status: string
}

export default function Customer() {

    const { data } = useFetch<ProfilePicture>("https://dog.ceo/api/breeds/image/random")

    return (

        <div className="bg-amber-800 w-72 h-72">
            <div className="flex justify-center items-center">
                <div className="
                        z-50
                        translate-y-1.5
                        bg-blue-300
                        w-20 h-20
                        rounded-3xl
                        flex
                        ">
                    <img className="object-fill w-20 h-20 p-1 rounded-3xl" src={data?.message} alt="dog"/>
                </div>
            </div>

            <div className="
                    -z-10
                    m-auto
                    -translate-y-8
                    border-2
                    rounded-2xl
                    w-11/12
                    h-4/5
                    grid
                    grid-cols-1
                    place-content-center
                    ">

                <div className="text-center mt-5">
                    <input
                        type="text"
                        readOnly={true}
                        className="border w-11/12 ml-1 mr-1 rounded-md p-1"
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
}