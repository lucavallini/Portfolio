export type TechLevel = "basic" | "intermediate" |"intermediate/advanced"| "advanced";
export type TechCategory = "Frontend" | "Backend" | "Database";
export type TitleState = "in progress" | "completed";


export interface Contact{
    icon:string;
    url: string;
}

export interface Hero{
    name: string;
    lastName: string;
    info:string[];
    contact: Contact[];
    img: string;
}

export interface About{
    description:string[];
}

export interface ProjectTechnology {
    name: string;
    category: TechCategory;
    icon : string;
}


export interface Project{
    name: string;
    description: string;
    technologies: ProjectTechnology[];
    repo: string;
    img: string;
}

export interface Technology{
    name:string;
    level: TechLevel;
    category: TechCategory;
    icon : string;
}

export interface Title{
    name:string;
    institution:string;
    status:TitleState;
}


export interface PortfolioData{
    hero: Hero;
    about: About;
    projects: Project[];
    technologies: Technology[];
    titles: Title[];
}