using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace bitys_test.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUsuario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data_nasc = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Idioma = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Situacao = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                });

            migrationBuilder.InsertData(
       table: "Usuario",
       columns: new[] { "Id", "Name", "Cpf", "Email", "Data_nasc", "Idioma", "Senha", "Situacao" },
       values: new object[,]
       {
            { 1, "João Silva", "12345678900", "joao.silva@email.com", new DateTime(1990, 5, 20), "PT-BR", "Senha123", true },
            { 2, "Maria Oliveira", "98765432100", "maria.oliveira@email.com", new DateTime(1985, 8, 15), "PT-BR", "Senha456", true },
            { 3, "Carlos Santos", "56789012300", "carlos.santos@email.com", new DateTime(1995, 12, 10), "EN", "Senha789", false }
       });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DeleteData(
       table: "Usuario",
       keyColumn: "Id",
       keyValues: new object[] { 1, 2, 3 });
        }
    }
}
