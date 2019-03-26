import { JobTitle } from './jobtitle';
import { Skill } from './skill';
export interface Developer {
    name:string;
    phone:number;
    cellphone:number;
    email:string;
    birthdate:Date;
    language:string;
    addres:string;
    about:string;
    Skills:Skill[];
    jobTitles:any;
}
