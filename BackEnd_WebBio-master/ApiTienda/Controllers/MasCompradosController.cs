using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BEUBIO;
using BEUBIO.StorageProcedure;

namespace ApiTienda.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MasCompradosController : ApiController
    {
        /*
        // GET: api/Articulos
        [ResponseType(typeof(rptArticulosMasComprados_Result))]
        public IHttpActionResult Get(int id)
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                //List<rptArticulosMasComprados_Result> todos = MasCompradosBLL.GetMasComprados(id);
                return Content(HttpStatusCode.OK, MasCompradosBLL.GetMasComprados(id));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        */
    }
}