using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BEUBIO;
using BEUBIO.modelos_;
using BEUBIO.StorageProcedure;

namespace ApiTienda.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StockController : ApiController
    {        
        /*
        // GET: api/Articulos
        [ResponseType(typeof(rptStockArticulos_Result))]
        public IHttpActionResult Get(int id)
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptStockArticulos_Result> todos = StockBLL.GetStock(id);
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // GET: api/Articulos
        [HttpGet]
        [ResponseType(typeof(rptComprasUsuarioCategoria_id_Result))]
        public IHttpActionResult CompraCategoriaID(int id)
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptComprasUsuarioCategoria_id_Result> todos = Reportes.GetCategoria_Id_Compras(id);
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        // GET: api/Articulos
        [HttpGet]
        [ResponseType(typeof(rptComprasUsuarioCategoria_Result))]
        public IHttpActionResult CompraCategoria()
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptComprasUsuarioCategoria_Result> todos = Reportes.GetCategoria_Compras();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // GET: api/Articulos
        [HttpGet]
        [ResponseType(typeof(rptStockArticulosUsuarios_Result))]
        public IHttpActionResult StockUsuario()
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptStockArticulosUsuarios_Result> todos = Reportes.GetStock_CategoriasArticulos();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        // GET: api/Articulos
        [HttpGet]
        [ResponseType(typeof(rptStocProductoUsuariosID_Result))]
        public IHttpActionResult StockUsuarioID(int id)
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptStocProductoUsuariosID_Result> todos = Reportes.GetStockUsuario_Id(id);
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }


        // GET: api/Articulos
        [HttpGet]
        [ResponseType(typeof(rptStockUnidadArticulosCategorias_Result))]
        public IHttpActionResult CantidadUsuario()
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptStockUnidadArticulosCategorias_Result> todos = Reportes.GetCantidadUsuario_();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        // GET: api/Articulos
        [HttpGet]
        [ResponseType(typeof(rptStockUnidadArticulosCategorias_ID_Result))]
        public IHttpActionResult CantidadUsuarioID(int id)
        {
            try
            {
                //List<rptStockArticulos_Result> todos = ArticuloBLL.GetList(criterio);
                List<rptStockUnidadArticulosCategorias_ID_Result> todos = Reportes.GetCantidadUsuario_ID(id);
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