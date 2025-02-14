using bitys_test.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NuGet.Protocol.Plugins;
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
                        Name = "Aparecida Andrea Pietra Porto",
                        Cpf = "802.134.198-07",
                        Email = "email1@email.com",
                        Data_nasc = new DateTime(1990, 1, 1),
                        Idioma = "pt-br",
                        Senha = "admin123",
                        Situacao = true,
                        Perfil = "Admin"
                    },
                    new Usuario
                    {
                        Name = "Bruno José Pietro Figueiredo",
                        Cpf = "877.583.618-11",
                        Email = "email2@email.com",
                        Data_nasc = new DateTime(1988, 5, 15),
                        Idioma = "pt-br",
                        Senha = "admin123",
                        Situacao = true,
                        Perfil = "Admin"
                    },
                    new Usuario
                    {
                        Name = "Eduardo Miguel Lima",
                        Cpf = "886.631.234-77",
                        Email = "email3@email.com",
                        Data_nasc = new DateTime(1992, 7, 20),
                        Idioma = "pt-br",
                        Senha = "admin123",
                        Situacao = false,
                        Perfil = "Admin"
                    },
                    new Usuario
                    {
                        Name = "Luna Emanuelly da Silva",
                        Cpf = "612.174.528-26",
                        Email = "email4@email.com",
                        Data_nasc = new DateTime(1995, 3, 12),
                        Idioma = "es",
                        Senha = "vendedor123",
                        Situacao = true,
                        Perfil = "Vendedor"
                    },
                    new Usuario
                    {
                        Name = "Anderson Bruno Antonio de Paula",
                        Cpf = "517.680.094-22",
                        Email = "email5@email.com",
                        Data_nasc = new DateTime(1985, 11, 5),
                        Idioma = "pt-br",
                        Senha = "admin123",
                        Situacao = true,
                        Perfil = "Admin"
                    },
                    new Usuario
                    {
                        Name = "Eduarda Cecília Novaes",
                        Cpf = "807.103.250-61",
                        Email = "email6@email.com",
                        Data_nasc = new DateTime(1993, 9, 25),
                        Idioma = "en",
                        Senha = "gerente123",
                        Situacao = true,
                        Perfil = "Gerente"
}
                );
                context.SaveChanges();
            }
        }
    }
}
