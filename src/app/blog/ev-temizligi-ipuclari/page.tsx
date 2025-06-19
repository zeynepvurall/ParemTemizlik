import Link from 'next/link';

export default function EvTemizligiIpuclari() {
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
            <li className="text-gray-900">Ev Temizliğinde Dikkat Edilmesi Gerekenler</li>
          </ol>
        </nav>

        {/* Article */}
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">🧹</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Ev Temizliğinde Dikkat Edilmesi Gerekenler
                </h1>
                <p className="text-gray-600">15 Aralık 2024 • 5 dk okuma</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Günlük ev temizliği, sağlıklı bir yaşam için vazgeçilmez bir rutindir. Ancak etkili bir temizlik için belirli alanlara öncelik vermek ve doğru yöntemleri kullanmak önemlidir. İşte uzman tavsiyeleri:
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Öncelik Sırası Belirleyin</h2>
            <p className="text-gray-700 mb-6">
              Temizliğe en çok kirlenen alanlardan başlayın. Mutfak tezgahları, banyo lavaboları ve tuvaletler her zaman öncelikli olmalıdır. Bu alanlar bakteri üremesi için ideal ortamlardır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Doğru Temizlik Malzemeleri Kullanın</h2>
            <p className="text-gray-700 mb-6">
              Her yüzey için uygun temizlik malzemesi seçin. Ahşap mobilyalar için özel ürünler, cam yüzeyler için cam temizleyicileri kullanın. Klor içeren ürünleri metal yüzeylerde kullanmaktan kaçının.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Yüksekten Aşağıya Temizlik</h2>
            <p className="text-gray-700 mb-6">
              Temizliğe tavan ve duvarlardan başlayıp aşağıya doğru inin. Bu şekilde düşen tozlar zaten temizlenmiş alanları tekrar kirletmez.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Düzenli Rutin Oluşturun</h2>
            <p className="text-gray-700 mb-6">
              Günlük, haftalık ve aylık temizlik rutinleri oluşturun. Günlük olarak mutfak tezgahı ve banyo lavabosu, haftalık olarak yer temizliği, aylık olarak derin temizlik yapın.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Havalandırma Önemli</h2>
            <p className="text-gray-700 mb-6">
              Temizlik sırasında ve sonrasında evi iyice havalandırın. Bu, temizlik malzemelerinin kokularını giderir ve sağlıklı bir ortam sağlar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Elektronik Cihazları Unutmayın</h2>
            <p className="text-gray-700 mb-6">
              Televizyon, bilgisayar, telefon gibi elektronik cihazları düzenli olarak temizleyin. Bu cihazlar toz biriktirir ve bakteri üremesi için uygun ortam oluşturur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Profesyonel Yardım Alın</h2>
            <p className="text-gray-700 mb-6">
              Yoğun iş temponuz varsa veya derin temizlik gerekiyorsa, profesyonel temizlik hizmetlerinden yardım alın. Uzman ekipler daha etkili ve sağlıklı temizlik yapar.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Uzman Tavsiyesi</h3>
              <p className="text-blue-800">
                Ev temizliğinde en önemli kural tutarlılıktır. Küçük ama düzenli temizlik alışkanlıkları, büyük temizlik işlerinden daha etkilidir. Her gün 15-20 dakika ayırarak evinizi temiz tutabilirsiniz.
              </p>
            </div>
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