export interface IColor {
    id: number,
    color: string,
    name_color: string
}

export interface ICategory {
    id: number,
    name_category: string,
    desc_category: string,
}

export interface ITag {
    id: number,
    name_tag: string,
    desc_tag: string,
}

export interface IPromo {
    id: number,
    name_promo: string,
    pass_promo: string,
    desc_promo: string,
    discount_promo: string,
    discount_deriod_promo: string,
}

export interface IProduct {
    id: number,
    name_product: string,
    desc_product: string,
    category: ICategory,
    tag: Array<ITag>
    display_tag: boolean,
    rating: string,
    color: IColor,
    list_url_to_image: Array<string>,
    price: string,
    price_with_discount_or_PROMO: string,
    display_price: boolean,
    discount: string,
    discount_period: string,
    display_discount: boolean,
    promo: IPromo,
    display_promo: boolean,
    display_reviews: boolean,
    remaining_goods: number,
    display_remaining_goods: boolean,
    count?: number,
    selected_color?: string
}

export interface IShop {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<IProduct>
}

export interface ICartItem {
    id: number,
    user_session: string,
    quantity: number,
    add_datetime: string,
    products: number,
    price_per_prod: number,
    total_price_per_position: number,
    total_price_of_customer_cart: number,
    name_product: string,
    product_images: Array<string>
}

export interface ICart {
    sessionid: string | null,
    products: Array<ICartItem>
}