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