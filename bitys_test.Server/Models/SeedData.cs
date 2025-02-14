using bitys_test.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace bitys_test.Server.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<ApplicationDbContext>>()))
            {

                if (context.Usuarios.Any())
                {
                    return;   // DB has been seeded
                }
                context.Usuarios.AddRange(
                    new Usuario
                    {
                        Name = "André Santos",
                        Cpf = "012.345.678-99",
                        Email = "email1@email.com",
                        Data_nasc = new DateTime(1990, 5, 20),
                        Idioma = "pt-br",
                        Senha = "admin123",
                        Situacao = true,
                        Perfil = "Admin"
                    },
                    new Usuario
                    {
                        Name = "Maria Oliveira",
                        Cpf = "012.345.678-99",
                        Email = "email1@email.com",
                        Data_nasc = new DateTime(1996, 8, 10),
                        Idioma = "pt-br",
                        Senha = "gerente123",
                        Situacao = true,
                        Perfil = "Gerente"
                    },
                    new Usuario
                    {
                        Name = "João Silva",
                        Cpf = "012.345.678-99",
                        Email = "email1@email.com",
                        Data_nasc = new DateTime(1999, 12, 12),
                        Idioma = "pt-br",
                        Senha = "vendedor123",
                        Situacao = true,
                        Perfil = "Vendedor"
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
