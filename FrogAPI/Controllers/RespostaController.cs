using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FrogAPI.Data;
using FrogAPI.Models;

namespace FrogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class RespostaController : Controller
    {
        private readonly JogoContext _context;
        public RespostaController(JogoContext context)
        {
            // construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Resposta>> GetAll()
        {
            return _context.Resposta.ToList();
        }

        [HttpGet("{RespostaId}")]
        public ActionResult<List<Resposta>> Get(int RespostaId)
        {
            try
            {
                var result = _context.Resposta.Find(RespostaId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}