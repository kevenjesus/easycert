import { useEffect, useLayoutEffect, useState } from "react"


interface TestTypes {
    name: string
    age: number
}

interface ElementsType {
    data: number[]
}

function Test({name, age}: TestTypes) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

const func = () => console.log('rodou')

function Elements({data}: ElementsType) {
    useEffect(() => {
        console.log('sofreu alteração')
    }, [data])
    return (
        <>
            {
                data.map((element, index) => (
                    <Test key={index} name="keven" age={30} />
                ))
            }
        </>
    ) 
}

interface LoadingType {
    hideLoadding: () => void
}

function Loading({hideLoadding}: LoadingType) {
    useEffect(() => {
        console.log('iniciou')
        return () => {
            console.log('morreu loading')
        }
    }, [])
    return (
        <>
            <h1>loading...</h1>
        <   button onClick={() => hideLoadding()}>start</button>
        </>
    )
}

export default function Playground() {
    const [loading, setLoading] = useState(true)
    const [data, setdata] = useState<number[]>([])

    const hideLoadding = (data = [1]) => {
        setLoading(false)
        setdata(data)
    }
    // chama antes do layout carregar porem só interpreta informaçoes do navegador
    useLayoutEffect(() => {
        console.log('chamou antes')
    }, [])

    // chama depois que o html esta pronto e caso tenha dependencia [] executa quando a dependencia sofre alteração
    useEffect(() => {
        console.log('chamou')
    }, [])

    if(loading) {
        console.log('html pronto')
        return <Loading hideLoadding={hideLoadding} />
    } 
    return (
        <>
        <Elements data={data}  />
        <h2>teste</h2>
        <button onClick={() => hideLoadding([1,2,3,4])}>alterar data</button>
        </>
    )
}