using System;
using System.Collections.Generic;
using System.Linq;
using BEUBIO.modelos_;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using BEUBIO.Data;

namespace BEUBIO.Transaction
{
    public class UsuarioBLL
    {
        //BLL Bussiness Logic Layer
        //Capa de Logica del Negocio
        
        public static Boolean Create(Usuario a)
        {
            using (Entities_Bio db = new Entities_Bio())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        var lst = db.Usuarios.Where(d => d.email == a.email);
                        //var lst = db.Usuarios.Where(d => d.email == email && d.contrasena == email && d.estado == "a");
                        if (lst.Count() > 0)
                        {
                            return true;
                        }
                        else
                        {
                            Correo m = new Correo();
                            CorreoData cd = new CorreoData();
                            Random r = new Random();
                            int codeConfirm = r.Next(1000, 9999);
                            string en = cd.Encriptar(a.contrasena);

                            //Codigo para encriptar la contraseña
                            a.tipoImgLogin = "" + codeConfirm;
                            a.contrasena = en;

                            m.Para = a.email;
                            m.Asunto = "Ecommerce online WebBio: Solicitud de confirmación de contraseña";
                            m.isHtml = true;
                            m.Body = "Bienvenido " + a.nombres + " " + a.apellidos + " usted solicitó una confirmacion para su cuenta <strong>" + a.email + "</strong> en Web Bio Corp Online." +
                            "<br><br>Para confirmar esta petición, y establecer una nueva contraseña para su cuenta, por favor copie y pegue la siguiente contraseña en nuestra página web: <strong><u>" + codeConfirm +
                            "</u></strong> (Este código es válido durante 30 minutos) desde el momento en que hizo la solicitud por primera vez ." +
                            "<br><br>Si usted no ha solicitado esta confirmación de cuenta, no necesita realizar ninguna acción." +
                            "<br><br>Si necesita ayuda, por favor póngase en contacto con el administrador del sitio,<br>Admin User";

                            cd.Enviar(m);

                            //Console.Write("mira el dato: " + a.contrasena);

                            db.Usuarios.Add(a);
                            db.SaveChanges();
                            transaction.Commit();

                            return false;
                        }
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        public static Usuario Get(int? id)
        {
            Entities_Bio db = new Entities_Bio();
            return db.Usuarios.Find(id);
        }

        public static void Update(Usuario usuario)
        {
            using (Entities_Bio db = new Entities_Bio())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        CorreoData cd = new CorreoData();
                        string con = cd.Encriptar(usuario.contrasena);
                        usuario.contrasena = con;
                        db.Usuarios.Attach(usuario);
                        db.Entry(usuario).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        public static void Delete(int? id)
        {
            using (Entities_Bio db = new Entities_Bio())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Usuario usuario = db.Usuarios.Find(id);
                        var articulos = usuario.Articuloes.Where(t => t.idUsuario == id);
                        Venta venta = db.Ventas.Find(usuario.idUsuario);
                        var ventas = usuario.Ventas.Where(t => t.idUsuario == id);
                        if (articulos != null)
                        {
                            db.Articuloes.RemoveRange(articulos);
                        }
                        if (venta != null)
                        {
                            db.Ventas.RemoveRange(ventas);
                        }

                        db.Entry(usuario).State = System.Data.Entity.EntityState.Deleted;

                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }


        public static List<Usuario> GetList()
        {
            Entities_Bio db = new Entities_Bio();
            return db.Usuarios.ToList();
        }

        public static List<Usuario> ListToNames()
        {
            Entities_Bio db = new Entities_Bio();
            List<Usuario> result = new List<Usuario>();
            db.Usuarios.ToList().ForEach(x =>
                result.Add(
                    new Usuario
                    {
                        nombres = x.nombres,
                        idUsuario = x.idUsuario
                    }));
            return result;
        }

        public static List<Usuario> GetUsuario(string criterio)
        {

            Entities_Bio db = new Entities_Bio();
            return db.Usuarios.Where(x => x.nombres.ToLower().Contains(criterio)).ToList();
        }

        public static SegurityViewModel Login(string email, string password)
        {
            //se crea una instancia o un iniverso dentro de otro universo
            //esta instancia se termina aqui
            using (Entities_Bio db = new Entities_Bio())
            {
                SegurityViewModel token = new SegurityViewModel();
                try
                {
                    CorreoData c = new CorreoData();
                    string pass = c.Encriptar(password);
                    var lst = db.Usuarios.Where(d => d.email == email && d.contrasena == pass);
                    //var lst = db.Usuarios.Where(d => d.email == email && d.contrasena == email && d.estado == "a");
                    if (lst.Count() > 0)
                    {
                        using (var transaction = db.Database.BeginTransaction())
                        {
                            Usuario userLogin = lst.First();
                            if (userLogin.token_temp == null)
                                userLogin.token_temp = Guid.NewGuid().ToString();
                            db.Usuarios.Attach(userLogin);
                            db.Entry(userLogin).State = System.Data.Entity.EntityState.Modified;
                            db.SaveChanges();
                            transaction.Commit();

                            token.token = userLogin.token_temp;
                            token.id_logueado = userLogin.idUsuario;
                            token.nombre = userLogin.nombres + " " + userLogin.apellidos;
                            token.usuario = userLogin;
                            //token.pathIMG = userLogin.imgPath;
                            return token;
                        }
                    }
                    else
                        return token;
                }
                catch (Exception ex)
                {

                    throw;
                }

            }
        }//end

        public static Usuario Verificacion(string email, int confirmacion)
        {
            //se crea una instancia o un iniverso dentro de otro universo
            //esta instancia se termina aqui
            using (Entities_Bio db = new Entities_Bio())
            {
                SegurityViewModel token = new SegurityViewModel();
                try
                {
                    var lst = db.Usuarios.Where(d => d.email == email && d.tipoImgLogin == ""+confirmacion);
                    Usuario userLogin = lst.First();
                    //var lst = db.Usuarios.Where(d => d.email == email && d.contrasena == email && d.estado == "a");
                    if (lst.Count() > 0)
                    {
                        using (var transaction = db.Database.BeginTransaction())
                        {
                            if (confirmacion == 0)
                            {
                                Correo m = new Correo();
                                CorreoData cd = new CorreoData();
                                Random r = new Random();
                                int codeConfirm = r.Next(1000, 9999);

                                m.Para = email;
                                m.Asunto = "Ecommerce online WebBio: Solicitud de confirmación de cuenta";
                                m.isHtml = true;
                                m.Body = "Bienvenido " + userLogin.nombres + " " + userLogin.apellidos + " usted solicitó una confirmacion para su cuenta <strong>" + userLogin.email + "</strong> en Web Bio Corp Online." +
                                "<br><br>Para confirmar esta petición y verificar su cuenta, por favor copie y pegue la siguiente contraseña en nuestra página web: <strong><u>" + codeConfirm +
                                "</u></strong> (Este código es válido durante 30 minutos) desde el momento en que hizo la solicitud por primera vez ." +
                                "<br><br>Si usted no ha solicitado esta confirmación de cuenta, no necesita realizar ninguna acción." +
                                "<br><br>Si necesita ayuda, por favor póngase en contacto con el administrador del sitio,<br>Admin User";
                                cd.Enviar(m);
                                // guardando codigo de verificacion en la base de datos del usuario
                                try
                                {
                                    userLogin.tipoImgLogin = ""+codeConfirm;
                                    db.Usuarios.Attach(userLogin);
                                    db.Entry(userLogin).State = System.Data.Entity.EntityState.Modified;
                                    db.SaveChanges();
                                    transaction.Commit();
                                }
                                catch (Exception ex)
                                {
                                    transaction.Rollback();
                                    throw ex;
                                }
                                return userLogin;
                            }
                            else
                            {
                                var dato = db.Usuarios.Where(d => d.tipoImgLogin == ""+confirmacion);
                                Usuario usuario = lst.First();
                                if (dato.Count() > 0)
                                {
                                    try
                                    {
                                        userLogin.tipoImgLogin = "";
                                        db.Usuarios.Attach(userLogin);
                                        db.Entry(userLogin).State = System.Data.Entity.EntityState.Modified;
                                        db.SaveChanges();
                                        transaction.Commit();
                                    }
                                    catch (Exception ex)
                                    {
                                        transaction.Rollback();
                                        throw ex;
                                    }
                                    return userLogin;
                                }
                                else
                                {
                                    return null;
                                }
                            }
                        }
                    }
                    else
                    {
                        return null;
                    }
                        
                }
                catch (Exception ex)
                {
                    return null;
                    throw;
                }

            }
        }//end

        public static bool LogOut(int? id)
        {
            //se crea una instancia o un iniverso dentro de otro universo
            //esta instancia se termina aqui
            using (Entities_Bio db = new Entities_Bio())
            {
                try
                {
                    using (var transaction = db.Database.BeginTransaction())
                    {
                        Usuario userLogin = db.Usuarios.Find(id);
                        if (userLogin.token_temp == null)
                        {
                            return false;
                        }
                        //userLogin.token_temp = null;
                        db.Usuarios.Attach(userLogin);
                        db.Entry(userLogin).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        transaction.Commit();
                        return true;
                    }
                }
                catch (Exception ex)
                {

                    throw;
                }

            }
        }//end
        public static bool Verify(string token)
        {
            using (Entities_Bio db = new Entities_Bio())
            {
                try
                {
                    if (db.Usuarios.Where(x => x.token_temp.Equals(token)).Count() > 0)
                    {
                        return true;//existe
                    }
                    else
                        return false;//no exite

                }
                catch (Exception)
                {

                    throw;
                }
            }
        }//end
    }
}
