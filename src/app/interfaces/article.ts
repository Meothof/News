export interface IArticle {
    id: string;
    title: string;
    description: string;
    link: string;
    pubDate: string;
    source: {
        name: string;
        link: string;
    };
    image: string;
}
