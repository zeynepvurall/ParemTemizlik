import Link from 'next/link';

export default function OfisTemizligiOnemi() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Ana Sayfa</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-900">Ofis Temizliğinin Önemi</li>
          </ol>
        </nav>

        {/* Article */}
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">🏢</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Ofis Temizliğinin Önemi
                </h1>
                <p className="text-gray-600">12 Aralık 2024 • 4 dk okuma</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Çalışma ortamının temizliği, sadece görsel bir konu değil, aynı zamanda çalışan verimliliği, sağlığı ve işletme başarısı için kritik bir faktördür. Temiz bir ofis, profesyonel bir imaj yaratır ve çalışanların motivasyonunu artırır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Çalışan Verimliliğini Artırır</h2>
            <p className="text-gray-700 mb-6">
              Temiz ve düzenli bir çalışma ortamı, çalışanların odaklanmasını kolaylaştırır. Dağınık ve kirli bir ofis, dikkat dağıtıcı faktörler yaratır ve iş performansını düşürür. Düzenli temizlik, çalışanların daha verimli çalışmasını sağlar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sağlık ve Güvenlik</h2>
            <p className="text-gray-700 mb-6">
              Ofis ortamında biriken toz, bakteri ve alerjenler, çalışanların sağlığını olumsuz etkileyebilir. Düzenli temizlik, solunum yolu hastalıklarını önler ve genel sağlık durumunu iyileştirir. Özellikle pandemi sonrası dönemde hijyen daha da önem kazanmıştır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Profesyonel İmaj</h2>
            <p className="text-gray-700 mb-6">
              Müşteriler ve iş ortakları, ofisinizin temizliğine dikkat eder. Temiz bir ofis, şirketinizin profesyonelliğini ve kalite standartlarını yansıtır. Bu da güven oluşturur ve iş ilişkilerini güçlendirir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Ekipman Ömrünü Uzatır</h2>
            <p className="text-gray-700 mb-6">
              Bilgisayarlar, yazıcılar ve diğer ofis ekipmanları, düzenli temizlik ile daha uzun süre kullanılabilir. Toz birikimi, ekipmanların ısınmasına ve performans düşüşüne neden olur. Profesyonel temizlik, ekipman ömrünü uzatır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Çalışan Memnuniyeti</h2>
            <p className="text-gray-700 mb-6">
              Temiz bir çalışma ortamı, çalışanların iş tatminini artırır. Kimse kirli ve düzenli olmayan bir ortamda çalışmak istemez. Düzenli temizlik, çalışan bağlılığını artırır ve işten ayrılma oranlarını düşürür.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Maliyet Tasarrufu</h2>
            <p className="text-gray-700 mb-6">
              Düzenli temizlik, uzun vadede maliyet tasarrufu sağlar. Ekipman arızalarını önler, hastalık izinlerini azaltır ve ofis eşyalarının ömrünü uzatır. Profesyonel temizlik hizmeti, bu açıdan yatırım olarak görülmelidir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Yasal Yükümlülükler</h2>
            <p className="text-gray-700 mb-6">
              İş sağlığı ve güvenliği mevzuatı, işverenlere temiz ve sağlıklı bir çalışma ortamı sağlama yükümlülüğü getirir. Düzenli temizlik, bu yasal yükümlülükleri yerine getirmenin en etkili yoludur.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600">Bu yazıyı beğendiyseniz paylaşın:</p>
              </div>
              <div className="flex space-x-4">
                <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Ana Sayfaya Dön
                </Link>
                <Link href="/blog" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                  Diğer Yazılar
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
} 