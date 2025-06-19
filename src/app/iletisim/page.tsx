import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-blue-100">
        <div className="absolute inset-0 bg-blue-500/10 z-10" />
        <Image
          src="/anasayfa.jpeg"
          alt="Parem Temizlik İletişim"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">
            İletişim
          </h1>
          <p className="text-xl text-blue-700">
            Size Bir Telefon Kadar Yakınız
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Telefon</h3>
                <p className="text-gray-600 mb-2">7/24 Hizmetinizdeyiz</p>
                <a
                  href="tel:+905011393032"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  0501 139 30 32
                </a>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Adres</h3>
                <p className="text-gray-600">
                  Abdullahpaşa Mahallesi Malatya Caddesi 1.Sokak No26/C Merkez/Elazığ
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">E-posta</h3>
                <p className="text-gray-600 mb-2">Bize yazın, 24 saat içinde dönüş yapalım</p>
                <a
                  href="mailto:info@parem.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  info@parem.com
                </a>
              </div>
            </div>

            {/* About Contact */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  2014 yılından bu yana Elazığ ve çevresinde profesyonel temizlik hizmetleri sunan 
                  Parem Temizlik olarak, müşteri memnuniyetini her zaman ön planda tutuyoruz. 
                  Deneyimli ekibimiz ve modern ekipmanlarımızla, en kaliteli hizmeti en uygun 
                  fiyatlarla sunmaya devam ediyoruz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">
                      Hızlı Teklif ve Keşif
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        Ücretsiz keşif hizmeti
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        Aynı gün fiyat teklifi
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        Esnek çalışma saatleri
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">
                      Müşteri Memnuniyeti
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        %100 Memnuniyet garantisi
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        Profesyonel ekip
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        7/24 müşteri desteği
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-8 rounded-lg text-center mb-16">
              <h2 className="text-2xl font-bold mb-6">Çalışma Saatleri</h2>
              <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
                <div className="border-r border-blue-300">
                  <h3 className="font-semibold mb-2">Hafta İçi</h3>
                  <p>08:00 - 20:00</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hafta Sonu</h3>
                  <p>09:00 - 18:00</p>
                </div>
              </div>
              <p className="mt-6 text-sm">
                * Acil durumlar için 7/24 hizmet vermekteyiz.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Bize Ulaşın
              </h2>
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0500 000 00 00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="service">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Hizmet Seçiniz</option>
                    <option value="ev">Ev Temizliği</option>
                    <option value="ofis">Ofis Temizliği</option>
                    <option value="insaat">İnşaat Sonrası Temizlik</option>
                    <option value="dezenfeksiyon">Dezenfeksiyon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Mesaj Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 