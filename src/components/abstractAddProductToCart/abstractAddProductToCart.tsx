import Button from "../../pages/productPage/ui/button/button";
import "./abstractAddProductToCart.scss";

type PropsType = {
    id:number,
    children:React.ReactNode
}

export default function abstractAddProductToComparison({id,children}:PropsType) {
    return <Button className="cart-button">{children}</Button>
}