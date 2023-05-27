export type ProductDto  = {
    title: string,
    id: number,
    price: number,
    discountPrice: number,
    photos: string[],
    manufacturer: string,
    batch: string,
    guaranteeMonths: number,
    creditPriceInMonth:number
}