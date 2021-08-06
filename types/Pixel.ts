export interface IPixels {
    pixels: IPixel[]
}

export interface IPixel {
    color: string;
    id: string;
    lastChangeBlock: string;
    owner: string;
}