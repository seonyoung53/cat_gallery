export interface Cat {
    id: string;
    name: string;
    image: CatImg
}

export interface CatImg {
    id: string;
    width: number;
    height: number;
    url: string;
}