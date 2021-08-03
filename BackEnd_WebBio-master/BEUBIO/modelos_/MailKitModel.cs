using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;

namespace BEUBIO.modelos_
{
    public class MailKitModel
    {

        public void gmailRecuperar(Usuario GmailUser, String encrypt, int opc)
        {
            string Servidor = "smtp.gmail.com";
            //int Puerto = 587;
            int Puerto = 465;

            MimeMessage mensaje = new MimeMessage();
            mensaje.From.Add(new MailboxAddress("WebBio Corp", GmailUser.email));
            mensaje.To.Add(new MailboxAddress("Destino", GmailUser.email));

            BodyBuilder CuerpoMensaje = new BodyBuilder();
            CuerpoMensaje.TextBody = "Hola";
            CuerpoMensaje.HtmlBody = "Hola Mundo";

            if (opc == 1)
            {
                /*
                mensaje.Subject = "Ecommerce online WebBio: Solicitud de restablecimiento de contraseña";

                CuerpoMensaje.TextBody = "Hola " + GmailUser.nombres + " " + GmailUser.apellidos;
                CuerpoMensaje.HtmlBody = "<br>Usted solicitó un restablecimiento de contraseña para su cuenta 'alanfabricio' en Academia Online KCPACITEC."+
                "<br><br>Para confirmar esta petición, y establecer una nueva contraseña para su cuenta, por favor vaya a la siguiente dirección de Internet: "+ encrypt +" (Este enlace es válido durante 30 minutos desde el momento en que hizo la solicitud por primera vez ." +
                "<br><br>Si usted no ha solicitado este restablecimiento de contraseña, no necesita realizar ninguna acción."+
                "<br><br>Si necesita ayuda, por favor póngase en contacto con el administrador del sitio,<br>Admin User"; 
                */
            }
            if(opc == 2)
            {

            }
            else
            {

            }
            

            mensaje.Body = CuerpoMensaje.ToMessageBody();

            SmtpClient ClienteSmtp = new SmtpClient();
            //ClienteSmtp.CheckCertificateRevocation = false;
            //ClienteSmtp.Connect(Servidor, Puerto, true);
            ClienteSmtp.CheckCertificateRevocation = false;
            ClienteSmtp.Connect(Servidor, Puerto, MailKit.Security.SecureSocketOptions.StartTls);
            ClienteSmtp.Authenticate("alanfabri64@gmail.com", "comercomida");
            ClienteSmtp.Send(mensaje);
            ClienteSmtp.Disconnect(true);
        }

        public string Encriptar(string _cadenaAencriptar)
        {
            string result = string.Empty;
            byte[] encryted =
            System.Text.Encoding.Unicode.GetBytes(_cadenaAencriptar);
            result = Convert.ToBase64String(encryted);
            return result;
        }

    }
}
