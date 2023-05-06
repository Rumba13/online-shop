import Button from "../productPage/button/button"
import "./abstractAddProductToComparison.scss"

type PropsType = {
    id:number,
    children:React.ReactNode
}

export default function AbstractAddProductToComparison({id,children}:PropsType) {
    return <Button className="comparison-button">{children}
    </Button> 
}