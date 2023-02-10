import "./counter.css"

type PropsType = {
    count?:number
}


export default function Counter({count}:PropsType) {
   return <span className="counter">{count}</span>
}