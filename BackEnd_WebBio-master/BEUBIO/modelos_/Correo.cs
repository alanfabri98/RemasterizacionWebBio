using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUBIO.modelos_
{
    public class Correo
    {
        public string Para { get; set; }
        public string Asunto { get; set; }
        public bool isHtml { get; set; }
        public string Body { get; set; }

    }
}
