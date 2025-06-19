import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-blue-100">
        <div className="absolute inset-0 bg-blue-500/10 z-10" />
        <Image
          src="/about-hero.jpg"
          alt="Parem Temizlik Ekibi"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">Hakkımızda</h1>
          <p className="text-xl text-blue-700">Güvenilir ve Profesyonel Temizlik Hizmetleri</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Temizlikte Güvenilir Çözüm Ortağınız
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                2014 yılından bu yana Elazığ ve çevresinde profesyonel temizlik hizmetleri sunan Parem Temizlik olarak, 
                müşterilerimizin yaşam ve çalışma alanlarını en üst düzeyde hijyenik standartlara ulaştırıyoruz.
              </p>

              <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Neden Parem Temizlik?
                </h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-blue-700">Deneyimli Ekip:</strong> Tüm personelimiz kapsamlı eğitimlerden geçirilmiş, 
                    alanında uzman profesyonellerden oluşmaktadır.
                  </li>
                  <li>
                    <strong className="text-blue-700">Güvenlik ve Sigorta:</strong> Tüm çalışanlarımız sigortalı olup, 
                    hizmet sürecinde oluşabilecek her türlü hasara karşı tam güvence sağlıyoruz.
                  </li>
                  <li>
                    <strong className="text-blue-700">Çevre Dostu Ürünler:</strong> İnsan ve çevre sağlığını gözeterek, 
                    yüksek kaliteli, çevre dostu temizlik ürünleri kullanıyoruz.
                  </li>
                  <li>
                    <strong className="text-blue-700">Modern Ekipman:</strong> En son teknoloji temizlik ekipmanlarıyla 
                    hızlı ve etkili sonuçlar elde ediyoruz.
                  </li>
                </ul>
              </div>

              <p>
                Ev temizliğinden ofis temizliğine, inşaat sonrası temizlikten dezenfeksiyon 
                hizmetlerine kadar geniş bir yelpazede hizmet sunuyoruz. Her müşterimizin özel 
                ihtiyaçlarını dinliyor, kişiye özel çözümler üretiyoruz.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100/30 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Kalite Politikamız
                </h3>
                <p>
                  Parem Temizlik olarak, kaliteli hizmet anlayışımızı şu temeller üzerine inşa ettik:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Müşteri memnuniyetini ön planda tutmak</li>
                  <li>Sürekli gelişim ve yenilikçi çözümler</li>
                  <li>Zamanında ve eksiksiz hizmet sunumu</li>
                  <li>Şeffaf ve dürüst iş anlayışı</li>
                  <li>Çevre ve insan sağlığına saygı</li>
                </ul>
              </div>

              <p>
                Sizin için en iyisini hedefliyor, yaşam ve çalışma alanlarınızı 
                pırıl pırıl bir hale getiriyoruz. Temizlik ihtiyaçlarınız için 
                bize ulaşın, ücretsiz keşif ve fiyat teklifi ile yanınızda olalım.
              </p>

              <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-8 rounded-lg text-center mt-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Profesyonel Temizlik Hizmeti Mi Arıyorsunuz?
                </h3>
                <p className="mb-6">
                  Hemen bize ulaşın, ücretsiz keşif ve fiyat teklifi ile yanınızda olalım.
                </p>
                <a
                  href="tel:+905011393032"
                  className="inline-block bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
                >
                  Hemen Arayın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 