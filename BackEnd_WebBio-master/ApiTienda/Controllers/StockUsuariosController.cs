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
    public class StockUsuariosController : ApiController
    {
        // GET: api/Articulos
        /*
        [ResponseType(typeof(rtpStockUsuarios_Result))]
        public IHttpActionResult Get()
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rtpStockUsuarios_Result> todos = StockUsuariosBLL.GetStockUsuarios();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        */
    }
}