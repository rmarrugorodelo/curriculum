import { JOBTITLES } from './jobtitles';
import { Developer } from './../interfaces/developer';
import { SKILLS } from './skills';

export const DEVELOPER:Developer = {
    name:"Richard Marrugo Rodelo",
    phone:4948566,
    cellphone:3116782736,
    email:"rmarrugodelo@gmail.com",
    birthdate:new Date(1991,1,14),
    language:"Español",
    addres:"Envigado, Antioquia, Colombia",
    about:"Desarrollador de Software competente en el ámbito técnico, tecnológico, profesional, social y participativo, con capacidad de analizar, diseñar, desarrollar e implementar software."+
    "\nBuen manejo de relaciones interpersonales y un fácil aprendizaje, dispuesto a desempeñar y contribuir de la mejor manera con las obligaciones que me sean asignadas, con permanente inquietud por adquirir nuevos conocimientos y actualización profesional.",
    Skills:SKILLS,
    jobTitles:JOBTITLES
}
