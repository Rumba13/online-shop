import Banner from "../banner/banner";
import BannerSlider from "../bannerSlider/bannerSlider";
import Product, { ProductType } from "../product/product";
import ProductSelection from "../productSelection/productSelection";
import "./mainPage.css";
import autoZeonBanner from "../../images/avtoZeonBanner.jpg"
import heatingImage from "../../images/heating.png"
import holtImage from "../../images/holt.png"

const products: ProductType[] = [
    { id: 1, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "dakdjsid jaildjiadjaisdjai jdiaida diadiaiddj iadjada" },
    { id: 2, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 3, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 4, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 5, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 6, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 7, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 8, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 9, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },
    { id: 10, previewSrc: "https://clck.ru/33XVQd", price: 10000, title: "Dildo Deluxe" },

]

export default function MainPage() {
    return <div className="content">
        <Banner imageSrc={autoZeonBanner} href={"https://avtozeon.by/"} />
        <BannerSlider />
        <ProductSelection href="#" title="Техника Holt" imageSrc={holtImage} />
        <ProductSelection href="#" title="Обогреватели" imageSrc={heatingImage} />

        <div className="products">{products.map(product => <Product {...product} />)}</div>
    </div>
}