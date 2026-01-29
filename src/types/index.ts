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
    id: string;
    heading: string;
    image: string;
    title: string;
    description: string;
    role: string;
    year: string;
    link?: string;
    linkText?: string;
    images?: string[];
};

export type CaseStudyDetail = {
    purpose: string;
    problem: string;
    role: string;
    points: { title: string; desc: string }[];
    results: string[];
    insights: string[];
};

export type CaseStudy = {
    id: string;
    title: string;
    period: string;
    description: string;
    summary: string;
    tags: string[];
    color: string;
    details?: CaseStudyDetail;
};
