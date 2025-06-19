import Link from 'next/link';

export default function DezenfeksiyonBilgileri() {
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
            <li className="text-gray-900">Dezenfeksiyon Hakkında Bilmeniz Gerekenler</li>
          </ol>
        </nav>

        {/* Article */}
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">🧬</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Dezenfeksiyon Hakkında Bilmeniz Gerekenler
                </h1>
                <p className="text-gray-600">10 Aralık 2024 • 6 dk okuma</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Dezenfeksiyon, özellikle pandemi sonrası dönemde sağlıklı yaşam alanları için vazgeçilmez bir ihtiyaç haline gelmiştir. Profesyonel dezenfeksiyon hizmetleri, sadece görünür kirleri değil, gözle görülmeyen mikroorganizmaları da yok eder.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Dezenfeksiyon Nedir?</h2>
            <p className="text-gray-700 mb-6">
              Dezenfeksiyon, yüzeylerdeki patojenik mikroorganizmaları (bakteri, virüs, mantar) yok etme veya etkisiz hale getirme işlemidir. Temizlikten farklı olarak, dezenfeksiyon sadece görünür kirleri değil, sağlığa zararlı mikroorganizmaları da hedefler.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dezenfeksiyon Yöntemleri</h2>
            <p className="text-gray-700 mb-6">
              <strong>ULV (Ultra Low Volume) Yöntemi:</strong> Çok küçük damlacıklar halinde dezenfektan püskürtülür. Bu yöntem, geniş alanlarda etkili ve ekonomiktir.<br/><br/>
              <strong>Sisleme Yöntemi:</strong> Dezenfektan sıvısı çok ince sis halinde püskürtülür. Bu yöntem, ulaşılması zor alanlara bile nüfuz eder.<br/><br/>
              <strong>Yüzey Dezenfeksiyonu:</strong> Elle veya makine ile yüzeylere dezenfektan uygulanır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hangi Alanlarda Gerekli?</h2>
            <p className="text-gray-700 mb-6">
              <strong>Ev Ortamları:</strong> Mutfak, banyo, tuvalet, yatak odaları<br/>
              <strong>İş Yerleri:</strong> Ofisler, mağazalar, restoranlar, oteller<br/>
              <strong>Sağlık Kuruluşları:</strong> Hastaneler, klinikler, diş hekimlikleri<br/>
              <strong>Eğitim Kurumları:</strong> Okullar, kreşler, üniversiteler<br/>
              <strong>Toplu Taşıma:</strong> Otobüsler, trenler, uçaklar
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Dezenfeksiyon Sıklığı</h2>
            <p className="text-gray-700 mb-6">
              Dezenfeksiyon sıklığı, alanın kullanım yoğunluğuna ve risk seviyesine göre belirlenir. Yüksek riskli alanlarda (hastaneler, toplu yaşam alanları) günlük, orta riskli alanlarda haftalık, düşük riskli alanlarda aylık dezenfeksiyon önerilir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kullanılan Dezenfektanlar</h2>
            <p className="text-gray-700 mb-6">
              <strong>Klorlu Bileşikler:</strong> Etkili ama aşındırıcı olabilir<br/>
              <strong>Alkol Bazlı:</strong> Hızlı etkili, uçucu<br/>
              <strong>Hidrojen Peroksit:</strong> Çevre dostu, güvenli<br/>
              <strong>Kuaterner Amonyum:</strong> Uzun süreli etki, güvenli<br/>
              <strong>Ozon:</strong> Doğal, etkili ama pahalı
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Profesyonel Dezenfeksiyonun Avantajları</h2>
            <p className="text-gray-700 mb-6">
              <strong>Uzman Ekip:</strong> Eğitimli personel ile doğru uygulama<br/>
              <strong>Profesyonel Ekipman:</strong> Endüstriyel dezenfeksiyon cihazları<br/>
              <strong>Güvenli Ürünler:</strong> Sağlık Bakanlığı onaylı dezenfektanlar<br/>
              <strong>Kapsamlı Raporlama:</strong> Detaylı dezenfeksiyon raporu<br/>
              <strong>Garantili Hizmet:</strong> Memnuniyet garantisi
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dezenfeksiyon Sonrası Dikkat Edilmesi Gerekenler</h2>
            <p className="text-gray-700 mb-6">
              <strong>Havalandırma:</strong> Dezenfeksiyon sonrası alanı iyice havalandırın<br/>
              <strong>Bekleme Süresi:</strong> Dezenfektanın etkili olması için gerekli süreyi bekleyin<br/>
              <strong>Kişisel Korunma:</strong> Dezenfeksiyon sırasında maske ve eldiven kullanın<br/>
              <strong>Çocuk ve Evcil Hayvan Güvenliği:</strong> Dezenfektanların kurumasını bekleyin
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🔬 Bilimsel Veri</h3>
              <p className="text-purple-800">
                Dünya Sağlık Örgütü (WHO) verilerine göre, düzenli dezenfeksiyon yapılan ortamlarda bulaşıcı hastalık oranları %40-60 oranında azalmaktadır. Özellikle çocukların bulunduğu ortamlarda dezenfeksiyon, sağlık açısından kritik öneme sahiptir.
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