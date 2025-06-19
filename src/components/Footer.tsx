import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">PAREM</h3>
            <p className="text-gray-400">
              Profesyonel temizlik hizmetlerinde 10 yılı aşkın tecrübe
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-white">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/ev-temizligi" className="text-gray-400 hover:text-white">
                  Ev Temizliği
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ofis-temizligi" className="text-gray-400 hover:text-white">
                  Ofis Temizliği
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/insaat-sonrasi-temizlik" className="text-gray-400 hover:text-white">
                  İnşaat Sonrası Temizlik
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/dezenfeksiyon" className="text-gray-400 hover:text-white">
                  Dezenfeksiyon
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Abdullahpaşa Mahallesi Malatya Caddesi 1.Sokak No26/C Merkez/Elazığ</li>
              <li>
                <a href="tel:+905011393032" className="hover:text-white">
                  📞 0501 139 30 32
                </a>
              </li>
              <li>
                <a href="mailto:zeynepvural53@gmail.com" className="hover:text-white">
                  ✉️ zeynepvural53@gmail.com
                </a>
              </li>
              <li>⏰ 7/24 Hizmet</li>
              <li>
                <a 
                  href="https://www.instagram.com/elazigparemtemizlik?igsh=Ym5ydGNyMmhicWlk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center"
                >
                  📷 Instagram'da Takip Edin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Parem Temizlik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
} 