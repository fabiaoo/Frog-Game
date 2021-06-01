using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FrogAPI.Data;
using FrogAPI.Models;

namespace FrogAPI
{
    [Route("api/[controller]")]
    [ApiController]

    public class PerguntaController : Controller
    {
        private readonly JogoContext _context;

        public PerguntaController(JogoContext context)
        {
            // construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Pergunta>> GetAll()
        {
            return _context.Pergunta.ToList();
        }

        [HttpGet("{PerguntaId}")]
        public ActionResult<List<Pergunta>> Get(int PerguntaId)
        {
            try
            {
                var result = _context.Pergunta.Find(PerguntaId);
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