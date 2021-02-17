interface iTask {
    nombre: string,
    responsable: string, 
    isCompleted: boolean
}

export class Task implements iTask { 
    constructor(
        public nombre: string = '',
        public responsable: string = 'Alejandro', 
        public isCompleted: boolean = false
        ) {} 
}



