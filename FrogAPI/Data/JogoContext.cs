using Microsoft.EntityFrameworkCore;
using FrogAPI.Models;

namespace FrogAPI.Data
{
    public class JogoContext : DbContext
    {
        public JogoContext(DbContextOptions<JogoContext> options): base (options)
        {

        }
        public DbSet<Pergunta> Pergunta { get; set; }

        public DbSet<Resposta> Resposta { get; set; }
    }
}