export interface Project {
    id: number;
    title: string;
    description: string;
    emoji: string;
    gradient: string;
    tags: string[];
    tagColor: string;
    liveDemo: string;
    github: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export interface Skill {
    category: string;
    items: string[];
}
