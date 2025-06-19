'use client';
import Image from "next/image";
import { useState } from 'react';
import TeklifFormu from '@/components/TeklifFormu';

export default function DezenfeksiyonPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/services/disinfection.jpg"
          alt="Dezenfeksiyon Hizmetleri"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Profesyonel Dezenfeksiyon Hizmetleri
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Yaşam ve çalışma alanlarınızı zararlı mikroorganizmalardan arındırıyoruz. 
            ULV ve sisleme yöntemleriyle etkili dezenfeksiyon çözümleri.
          </p>
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Dezenfeksiyon Hizmetlerimiz
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Parem Temizlik olarak, en son teknoloji dezenfeksiyon ekipmanları ve 
                  sertifikalı ürünlerle mekanlarınızı virüs, bakteri ve diğer zararlı 
                  mikroorganizmalardan arındırıyoruz. Sağlığınız için en etkili ve 
                  güvenli çözümleri sunuyoruz.
                </p>
              </div>
              
              <div className="space-y-6 mt-8">
                {hizmetDetaylari.map((detay, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      {detay.baslik}
                    </h3>
                    <p className="text-gray-600">{detay.aciklama}</p>
                    <ul className="mt-4 space-y-2">
                      {detay.maddeler.map((madde, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span className="text-gray-700">{madde}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Neden Bizi Seçmelisiniz */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Neden Bizi Seçmelisiniz?
                </h3>
                <ul className="space-y-4">
                  {avantajlar.map((avantaj, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">★</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{avantaj.baslik}</h4>
                        <p className="text-gray-600">{avantaj.aciklama}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Referanslarımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yorumlar.map((yorum, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{yorum.isim}</h3>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{yorum.yorum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat Teklifi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Ücretsiz Keşif ve Fiyat Teklifi
            </h3>
            <p className="mb-8 text-center text-lg">
              Mekanınıza özel dezenfeksiyon planı ve fiyat teklifi için hemen iletişime geçin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
              <a
                href="tel:+905011393032"
                className="block w-full bg-white text-blue-600 text-center py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Hemen Arayın
              </a>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="block w-full bg-transparent border-2 border-white text-white text-center py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Teklif Formu
              </button>
            </div>
          </div>
        </div>
      </section>

      <TeklifFormu 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        hizmetTuru="Dezenfeksiyon"
      />
    </div>
  );
}

const hizmetDetaylari = [
  {
    baslik: "ULV İle Dezenfeksiyon",
    aciklama: "Ultra düşük hacimli püskürtme teknolojisi ile etkili dezenfeksiyon.",
    maddeler: [
      "Tüm yüzeylere eşit dağılım",
      "Ulaşılması zor alanlarda bile etkili sonuç",
      "Hızlı ve etkili uygulama",
      "Kalıcı koruma sağlama",
      "Çevre dostu uygulama"
    ]
  },
  {
    baslik: "Sisleme Yöntemi",
    aciklama: "Geniş alanlar için ideal dezenfeksiyon çözümü.",
    maddeler: [
      "Büyük mekanlar için uygun yöntem",
      "Homojen dağılım sağlama",
      "Havadaki mikroorganizmaları etkisiz hale getirme",
      "Koku giderici özellik",
      "Uzun süreli koruma"
    ]
  },
  {
    baslik: "Yüzey Dezenfeksiyonu",
    aciklama: "Temas edilen yüzeylerin detaylı dezenfeksiyonu.",
    maddeler: [
      "Kapı kolları ve asansör düğmeleri",
      "Masa ve sandalyeler",
      "Elektronik cihazlar",
      "Ortak kullanım alanları",
      "Sık temas edilen yüzeyler"
    ]
  }
];

const avantajlar = [
  {
    baslik: "Sertifikalı Ürünler",
    aciklama: "Sağlık Bakanlığı onaylı, güvenli dezenfektan ürünleri"
  },
  {
    baslik: "Profesyonel Ekipman",
    aciklama: "Son teknoloji ULV ve sisleme makineleri"
  },
  {
    baslik: "Uzman Kadro",
    aciklama: "Dezenfeksiyon konusunda eğitimli ve deneyimli ekip"
  },
  {
    baslik: "Hızlı Hizmet",
    aciklama: "Aynı gün randevu ve hızlı uygulama imkanı"
  },
  {
    baslik: "Kapsamlı Çözüm",
    aciklama: "Her türlü mekan için özel dezenfeksiyon planları"
  }
];

const yorumlar = [
  {
    isim: "Murat Aydın",
    yorum: "Otelimizin düzenli dezenfeksiyonunu Parem'e yaptırıyoruz. Misafirlerimizin sağlığı için aldığımız en iyi karar."
  },
  {
    isim: "Zehra Yılmaz",
    yorum: "Kreşimizin dezenfeksiyonunda gösterdikleri özen ve kullandıkları güvenli ürünler için teşekkür ederiz."
  },
  {
    isim: "Kemal Özkan",
    yorum: "İş yerimizin pandemi döneminde dezenfeksiyonunu düzenli olarak yapıyorlar. Çalışanlarımız kendini güvende hissediyor."
  }
]; 