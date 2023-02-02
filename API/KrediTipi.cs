using System.ComponentModel.DataAnnotations;
namespace MyProjectAPI
{
    public class KrediTipi
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string kredi { get; set; } = String.Empty;

        public int tutar { get; set; }

        public int vade { get; set; }

        public int faiz { get; set; }



    }
}
