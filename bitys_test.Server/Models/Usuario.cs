using System.ComponentModel.DataAnnotations;

namespace bitys_test.Server.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Cpf { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime Data_nasc { get; set; }
        public string? Idioma { get; set; }
        public string? Senha { get; set; }
        [Required]
        public bool Situacao { get; set; }

    }
}
