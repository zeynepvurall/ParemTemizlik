import Image from 'next/image'

const services = [
  {
    id: 'ev-temizligi',
    title: 'Ev Temizliği',
    image: '/services/home-cleaning.jpg',
    description: 'Evinizin her köşesi pırıl pırıl',
    content: `Ev temizliği konusunda uzman ekibimiz, evinizin her noktasını detaylı bir şekilde temizler. 
    Kullandığımız son teknoloji ekipmanlar ve çevre dostu temizlik ürünleriyle:

    • Tüm odaların detaylı temizliği
    • Mutfak ve banyo hijyeni
    • Pencere ve cam temizliği
    • Halı ve koltuk yıkama
    • Toz alma ve süpürme
    • Yerler ve fayansların temizliği

    Düzenli temizlik hizmetlerimizle eviniz her zaman misafir ağırlamaya hazır olacak.`,
    features: [
      'Deneyimli ve güvenilir personel',
      'Çevre dostu temizlik ürünleri',
      'Detaylı ve titiz çalışma',
      'Esnek programlama',
      'Uygun fiyat garantisi'
    ]
  },
  {
    id: 'ofis-temizligi',
    title: 'Ofis Temizliği',
    image: '/services/office-cleaning.jpg',
    description: 'Profesyonel çalışma ortamı için kusursuz temizlik',
    content: `İş yerinizin temizliği verimliliği ve profesyonelliği yansıtır. Ofis temizlik hizmetlerimiz:

    • Genel alan temizliği
    • Çalışma masaları ve mobilyaların temizliği
    • Toplantı odaları düzenlemesi
    • Mutfak ve dinlenme alanları hijyeni
    • Tuvalet ve lavabo dezenfeksiyonu
    • Zemin temizliği ve cilalama

    Düzenli veya tek seferlik ofis temizlik hizmetlerimizle, çalışma alanınız her zaman temiz ve düzenli kalır.`,
    features: [
      'Mesai dışı saatlerde hizmet',
      'Profesyonel ekipman kullanımı',
      'Düzenli kontrol ve denetim',
      'Özel temizlik planları',
      'Rekabetçi fiyatlar'
    ]
  },
  {
    id: 'insaat-sonrasi-temizlik',
    title: 'İnşaat Sonrası Temizlik',
    image: '/services/construction-cleaning.jpg',
    description: 'İnşaat sonrası detaylı temizlik hizmeti',
    content: `İnşaat ve tadilat sonrası oluşan kirlerin temizlenmesi uzmanlık gerektirir. 
    Özel ekipmanlarımız ve tecrübeli kadromuzla:

    • Kaba ve ince inşaat atıklarının temizlenmesi
    • Pencere ve cam temizliği
    • Duvar ve fayans temizliği
    • Zemin temizliği ve cilalama
    • Toz ve kir giderme
    • Detaylı son temizlik

    İnşaat sonrası temizlik hizmetimizle mekanınız kullanıma hazır hale gelir.`,
    features: [
      'Özel ekipman kullanımı',
      'Tecrübeli ekip',
      'Hızlı ve etkili çözüm',
      'Detaylı temizlik garantisi',
      'Uygun fiyatlandırma'
    ]
  },
  {
    id: 'dezenfeksiyon',
    title: 'Dezenfeksiyon',
    image: '/services/disinfection.jpg',
    description: 'ULV ve püskürtme sistemi ile tam koruma',
    content: `Sağlığınız için profesyonel dezenfeksiyon hizmetleri sunuyoruz. 
    Modern ekipmanlar ve sertifikalı ürünlerle:

    • Virüs ve bakterilere karşı koruma
    • ULV sistemli dezenfeksiyon
    • Ortam ve yüzey dezenfeksiyonu
    • Düzenli bakteri kontrolü
    • Koku giderme
    • Hijyen sertifikası

    İş yeri, ev veya toplu kullanım alanları için özel dezenfeksiyon çözümleri sunuyoruz.`,
    features: [
      'Sertifikalı ürün kullanımı',
      'ULV teknolojisi',
      'Kokusuz uygulamalar',
      'Hızlı etki',
      'Sağlık Bakanlığı onaylı'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-blue-100">
        <div className="absolute inset-0 bg-blue-500/10 z-10" />
        <Image
          src="/anasayfa.jpeg"
          alt="Parem Temizlik Hizmetleri"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-blue-700">
            Profesyonel Temizlik Çözümleri
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    {service.title}
                  </h2>
                  <p className="text-xl text-blue-700">{service.description}</p>
                  <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                    {service.content}
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">
                      Hizmet Özellikleri
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="text-blue-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white p-8 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Profesyonel Temizlik Hizmeti Almak İster Misiniz?
            </h3>
            <p className="mb-6">
              Ücretsiz keşif ve fiyat teklifi için hemen bizi arayın.
            </p>
            <a
              href="tel:+905011393032"
              className="inline-block bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 