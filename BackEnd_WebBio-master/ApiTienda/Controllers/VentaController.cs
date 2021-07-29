using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BEUBIO;
using BEUBIO.Transaction;

namespace ApiTienda.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class VentaController : ApiController
    {

        // GET: api/Venta
        public IHttpActionResult GetVentas()
        {
            try
            {
                List<Venta> todos = VentaBLL.GetList();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // GET: api/Venta/5
        [ResponseType(typeof(Venta))]
        public IHttpActionResult GetVenta(int id)
        {
            try
            {
                Venta result = VentaBLL.Get(id);
                if (result == null)
                {
                    return NotFound();
                }
                return Content(HttpStatusCode.OK, result);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        [ResponseType(typeof(Venta))]
        public IHttpActionResult GetUltimaVenta(string dato, string edato)
        {
            try
            {
                int result = VentaBLL.Get();
                if (result == 0)
                {
                    return NotFound();
                }
                return Content(HttpStatusCode.OK, result);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        //// PUT: api/Venta/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutVenta(int id, Venta venta)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != venta.idVenta)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(venta).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!VentaExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Venta
        [ResponseType(typeof(Venta))]
        public IHttpActionResult Post(Venta venta)
        {
            try
            {
                VentaBLL.Create(venta);
                return Content(HttpStatusCode.Created, "Venta creado correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Venta/5
        [ResponseType(typeof(Venta))]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                VentaBLL.Delete(id);
                return Ok("Venta eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}