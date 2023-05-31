import "./productsItem.scss";
import Characteristics from "./characteristics/characteristics";
import DeliveryDate from "./deliveryDate/deliveryDate";
import ProductItemAddProductToCart from "./addProductToCart/addProductToCart";
import ShadowOnHover from "../../../shadowOnHover/shadowOnHover";
import { ProductPrice } from "../../../../entities/productPrice";

export type ProductType = {
    type: string,
    manufacturer: string,
    batchNumber: string
    code: number,
    characteristics?: ProductCharacteristicsType
    discountPrice?: number,
    price: number,
    previewImage?: string,
    deliveryDate?: Date,
}

export type ProductCharacteristicsType = Object

export default function ProductItem({ type, manufacturer, batchNumber, code, characteristics, discountPrice, price, previewImage, deliveryDate }: ProductType) {

    return <ShadowOnHover className="product">
        <a href={`product/${code}`} className="product-preview-wrapper">
            <img className="product__preview" src={previewImage} alt="" />
        </a>
        <div className="product-information">
            <span className="product-information__title">{type} {manufacturer} {batchNumber}</span>
            <DeliveryDate date={deliveryDate} />
            <span className="product-information__code"> Код товара: {code}</span>
            <Characteristics characteristics={characteristics} />
        </div>
        <div className="product-price">
            <ProductPrice className="product-price__price" price={price} />
            {/* TODO refuck, add DTOs */}
            <ProductPrice className="product-price__discount-price" price={discountPrice ?? 0} />


            <span className="product-price__hint">*цена с клубной картой</span>
            <ProductItemAddProductToCart id={code} />
            {/* <AddProductToComparison id={code} /> */}
        </div>
    </ShadowOnHover>
}