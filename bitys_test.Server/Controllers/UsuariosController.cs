using Microsoft.AspNetCore.Mvc;
using bitys_test.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace bitys_test.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private static List<Usuario> usuarios = new List<Usuario>();

        // GET: api/Usuarios
        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> GetUsuarios()
        {
            return usuarios;
        }

        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public ActionResult<Usuario> GetUsuario(int id)
        {
            var usuario = usuarios.FirstOrDefault(u => u.Id == id);
            if (usuario == null)
            {
                return NotFound();
            }
            return usuario;
        }

        // POST: api/Usuarios
        [HttpPost]
        public ActionResult<Usuario> PostUsuario(Usuario usuario)
        {
            usuario.Id = usuarios.Count > 0 ? usuarios.Max(u => u.Id) + 1 : 1;
            usuarios.Add(usuario);
            return CreatedAtAction(nameof(GetUsuario), new { id = usuario.Id }, usuario);
        }

        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public IActionResult PutUsuario(int id, Usuario usuario)
        {
            var existingUsuario = usuarios.FirstOrDefault(u => u.Id == id);
            if (existingUsuario == null)
            {
                return NotFound();
            }

            existingUsuario.Name = usuario.Name;
            existingUsuario.Cpf = usuario.Cpf;
            existingUsuario.Email = usuario.Email;
            existingUsuario.Data_nasc = usuario.Data_nasc;
            existingUsuario.Idioma = usuario.Idioma;
            existingUsuario.Senha = usuario.Senha;
            existingUsuario.Situacao = usuario.Situacao;

            return NoContent();
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        public IActionResult DeleteUsuario(int id)
        {
            var usuario = usuarios.FirstOrDefault(u => u.Id == id);
            if (usuario == null)
            {
                return NotFound();
            }

            usuarios.Remove(usuario);
            return NoContent();
        }
    }
}