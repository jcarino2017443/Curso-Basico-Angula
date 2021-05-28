export class Usuario {
    constructor(
        public _id: String,
        public nombre: String,
        public username: String,
        public email: String,
        public password: string,
        public rol: String,
        public imagen: String 
    ) {
        
    }
}