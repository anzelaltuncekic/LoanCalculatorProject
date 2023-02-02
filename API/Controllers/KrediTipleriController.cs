#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyProjectAPI;
using MyProjectAPI.Data;

namespace MyProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KrediTipleriController : ControllerBase
    {
        
        private readonly DataContext _context;
   
        private readonly ILogger<KrediTipleriController>_logger;

        public KrediTipleriController(ILogger<KrediTipleriController> logger , DataContext context)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/KrediTipleri
        [HttpGet]
        public async Task<ActionResult<IEnumerable<KrediTipi>>> GetKrediTipleri()
        {
            _logger.LogInformation("Kredi hesaplama başlatıldı.");
            return await _context.KrediTipleri.ToListAsync();
        }

        // GET: api/KrediTipleri/5
        [HttpGet("{id}")]
        public async Task<ActionResult<KrediTipi>> GetKrediTipi(int id)
        {
            var krediTipi = await _context.KrediTipleri.FindAsync(id);

            if (krediTipi == null)
            {
                return NotFound();
            }

            return krediTipi;
        }

        // PUT: api/KrediTipleri/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKrediTipi(int id, KrediTipi krediTipi)
        {
            if (id != krediTipi.Id)
            {
                return BadRequest();
            }

            _context.Entry(krediTipi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KrediTipiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/KrediTipleri
        [HttpPost]
        public async Task<ActionResult<KrediTipi>> PostKrediTipi(KrediTipi krediTipi)
        {
            _context.KrediTipleri.Add(krediTipi);
            await _context.SaveChangesAsync();
            _logger.LogInformation("Yeni Hesaplama Eklendi. Bilgiler => | kredi Tipi: " + krediTipi.kredi + " | kredi tutarı: " + krediTipi.tutar + " | vade: " + krediTipi.vade + " | faiz: "+ krediTipi.faiz);
            return CreatedAtAction("GetKrediTipi", new { id = krediTipi.Id }, krediTipi);

        }

        // DELETE: api/KrediTipleri/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKrediTipi(int id)
        {
            var krediTipi = await _context.KrediTipleri.FindAsync(id);
            if (krediTipi == null)
            {
                return NotFound();
            }

            _context.KrediTipleri.Remove(krediTipi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KrediTipiExists(int id)
        {
            return _context.KrediTipleri.Any(e => e.Id == id);
        }
    }
}
