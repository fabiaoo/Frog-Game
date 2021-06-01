namespace FrogAPI.Models
{
    public class Resposta
    {
        public int Id { get; set; }
        public string resp { get; set; }
        public int IdPergunta { get; set; }
        public string correta { get; set; }
    }
}