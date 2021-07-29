export class User {
  idUsuario   : number;
  nombres     : string;
  apellidos   : string;
  direccion   : string;
  telefono    : string;
  email       : string;
  estado      : string = "a"; //a = activo; d = desactivo
  contrasena  : string;
}
