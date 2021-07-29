import { User } from '../user/user';

export class Articulo {
    idArticulo : number;
    nombre : string;
    precio : number;
    categoria : string;
    detalle : string;
    estado : string;
    idUsuario : number;
    fecha : string;
    src : string;
    nombreImagen : string;
    imagen : string;
    cantidad : number;
    usuario:User;
}
