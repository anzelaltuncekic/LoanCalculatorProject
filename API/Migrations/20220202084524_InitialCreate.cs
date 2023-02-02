using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyProjectAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KrediTipleri",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kredi = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    tutar = table.Column<int>(type: "int", nullable: false),
                    vade = table.Column<int>(type: "int", nullable: false),
                    faiz = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KrediTipleri", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KrediTipleri");
        }
    }
}
