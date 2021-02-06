export interface IArticle {
    content: string;
    description: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    };
    title: string;
    url: string;
}
