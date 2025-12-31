export type Book = {
    id: number;
    title: string;
    image: string;
    description: string;
    slug: string;
};

export type Scene = {
    id: number;
    action: string;
    text: string;
};

export type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    color: string;
};
