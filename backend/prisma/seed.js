const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create categories with specific IDs
  const categories = await Promise.all([
    prisma.feedbackCategory.create({
      data: { name: 'Sales' }
    }),
    prisma.feedbackCategory.create({
      data: { name: 'Product/License' }
    }),
    prisma.feedbackCategory.create({
      data: { name: 'Project Manager' }
    }),
    prisma.feedbackCategory.create({
      data: { name: 'Engineer' }
    }),
    prisma.feedbackCategory.create({
      data: { name: 'Implementation & Maintenance' }
    })
  ]);

  // Create feedback descriptions for each category
  await prisma.feedbackDesc.createMany({
    data: [
      // Sales (categoryId: 1)
      { label: 'salesPenguasaanProduk', description: 'Penguasaan Produk', categoryId: categories[0].id },
      { label: 'salesPenampilan', description: 'Penampilan', categoryId: categories[0].id },
      { label: 'salesKomunikasi', description: 'Komunikasi', categoryId: categories[0].id },
      { label: 'salesRespon', description: 'Respon', categoryId: categories[0].id },
      
      // Product (categoryId: 2)
      { label: 'kesesuaianBarang', description: 'Kesesuaian barang/lisensi yang diterima', categoryId: categories[1].id },
      { label: 'ketepatanWaktu', description: 'Ketepatan waktu pengiriman', categoryId: categories[1].id },
      { label: 'kondisiBarang', description: 'Kondisi barang/lisensi', categoryId: categories[1].id },
      { label: 'kesesuaianJumlah', description: 'Kesesuaian jumlah barang/lisensi', categoryId: categories[1].id },
      
      // Project Manager (categoryId: 3)
      { label: 'pelaksanaanProject', description: 'Pelaksanaan Project', categoryId: categories[2].id },
      { label: 'pmKoordinasi', description: 'Koordinasi', categoryId: categories[2].id },
      { label: 'pmPenampilan', description: 'Penampilan', categoryId: categories[2].id },
      { label: 'pmKomunikasi', description: 'Komunikasi', categoryId: categories[2].id },
      { label: 'pmRespon', description: 'Respon', categoryId: categories[2].id },
      { label: 'pmLaporan', description: 'Laporan', categoryId: categories[2].id },
      
      // Engineer (categoryId: 4)
      { label: 'kesesuaianKualifikasi', description: 'Kesesuaian Kualifikasi', categoryId: categories[3].id },
      { label: 'kemampuanTeknis', description: 'Kemampuan Teknis', categoryId: categories[3].id },
      { label: 'engineerPenampilan', description: 'Penampilan', categoryId: categories[3].id },
      { label: 'engineerKomunikasi', description: 'Komunikasi', categoryId: categories[3].id },
      { label: 'engineerRespon', description: 'Respon', categoryId: categories[3].id },
      { label: 'engineerLaporan', description: 'Laporan', categoryId: categories[3].id },
      { label: 'personilBackup', description: 'Personil Backup', categoryId: categories[3].id },
      
      // Implementation (categoryId: 5)
      { label: 'pelaksanaanImplementasi', description: 'Pelaksanaan Implementasi', categoryId: categories[4].id },
      { label: 'responServiceDesk', description: 'Respon Service Desk', categoryId: categories[4].id },
      { label: 'pemenuhanSLA', description: 'Pemenuhan SLA', categoryId: categories[4].id },
      { label: 'layananBantuan', description: 'Layanan Bantuan', categoryId: categories[4].id },
      { label: 'implLaporan', description: 'Laporan', categoryId: categories[4].id }
    ]
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
