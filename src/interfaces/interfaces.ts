export interface IColor {
    name: string;
    code: string
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    type?: string;
    details: string,
    img: string | null;
    color?: IColor[] | string,
    count?: number
};


// добавить colors
export interface IProductFromSRV {
    id: number,
    name_product: string,
    desc_product: string,
    display_price: boolean,
    price: number,
    price_with_discount_or_PROMO: number,
    display_discount: boolean,
    discount_period: string,
    display_remaining_goods: boolean,
    remaining_goods: number,
    display_tag: boolean,
    display_promo: boolean,
    display_reviews: boolean,
    rating: number,
    category: number,
    promo: number,
    tag: string[]
}