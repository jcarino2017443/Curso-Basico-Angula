export class Hoteles {
    constructor(
        public _id: String,
        public nombre: String,
        public cuidad: String,
        public nombreTipoEvento: String,
        public nombreEvento: String,
        public nombreServicio: String,
        public habitaciones: String,
        public disponibilidad: {
            si: String,
            no: String,
            Ocupadas: []
        },
        public caracteristicas: [{
            nombreTipoEvento: String,
            nombreEvento: String,
            nombreServicio: String
        }],
        public hospedado: String,
    ) {}
}