import { StaticImageData } from "next/image";

export interface producttype {
    id: string,
    name: string,
    price: number,
    category: string,
    image: string | StaticImageData
}