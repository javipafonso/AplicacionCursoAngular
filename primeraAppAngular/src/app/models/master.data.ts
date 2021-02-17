import { Curso, Turno } from "./students"

export const TURNOS: Array<Turno> = [
    {id: 'M', nombre: 'Mañana', info: '9:00-14:00'}, 
    {id: 'T', nombre: 'Tarde', info: '16:00-20:00'}, 
    {id: 'C', nombre: 'Completo', info: '9:00-18:00'}
]
export const CURSOS: Array<Curso> = [
    new Curso('01','Angular', 'Aprendiendo Angular ...'), 
    new Curso('02', 'React', 'Aprendiendo React ...'), 
    new Curso('03', 'Vue', 'Aprendiendo Vue ...') 
]