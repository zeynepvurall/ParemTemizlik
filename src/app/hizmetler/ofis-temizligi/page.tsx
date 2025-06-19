'use client';
import Image from "next/image";
import { useState } from 'react';
import TeklifFormu from '@/components/TeklifFormu';

export default function OfisTemizligiPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/services/office-cleaning.jpg"
          alt="Ofis Temizliği"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ofis Temizliği Hizmetleri
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            İş yerinizin temizliği için profesyonel çözümler. 
            Çalışma ortamınızı daha sağlıklı ve verimli hale getiriyoruz.
          </p>
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Profesyonel Ofis Temizlik Hizmetlerimiz
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Parem Temizlik olarak, ofisinizin her köşesini profesyonel ekipmanlar 
                  ve uzman kadromuzla temizliyoruz. Çalışanlarınızın sağlığı ve 
                  konforunu düşünerek, en yüksek standartlarda hizmet sunuyoruz.
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
              Ofisinize özel temizlik planı ve fiyat teklifi için hemen iletişime geçin.
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
        hizmetTuru="Ofis Temizliği"
      />
    </div>
  );
}

const hizmetDetaylari = [
  {
    baslik: "Genel Ofis Temizliği",
    aciklama: "Ofisinizin tüm alanlarını kapsayan detaylı temizlik hizmeti.",
    maddeler: [
      "Çalışma alanları ve masaların temizliği",
      "Toplantı odaları ve ortak alanların temizliği",
      "Zemin temizliği ve cilalama",
      "Cam ve pencere temizliği",
      "Mobilya ve ekipman temizliği"
    ]
  },
  {
    baslik: "Mutfak ve Dinlenme Alanları",
    aciklama: "Çalışanlarınızın ortak kullanım alanlarının hijyenik temizliği.",
    maddeler: [
      "Mutfak tezgahı ve dolapların temizliği",
      "Elektrikli ev aletlerinin temizliği",
      "Yemek ve dinlenme alanlarının dezenfeksiyonu",
      "Çöp kovalarının temizliği ve değişimi",
      "Lavabo ve armatürlerin temizliği"
    ]
  },
  {
    baslik: "Tuvalet ve Islak Zemin",
    aciklama: "Ofis tuvaletleri ve ıslak zeminler için özel hijyen çözümleri.",
    maddeler: [
      "Profesyonel dezenfeksiyon işlemi",
      "Lavabo ve armatürlerin detaylı temizliği",
      "Sarf malzemelerinin kontrolü ve temini",
      "Koku giderme ve hijyen kontrolü",
      "Düzenli bakım ve kontrol"
    ]
  }
];

const avantajlar = [
  {
    baslik: "Esnek Çalışma Saatleri",
    aciklama: "İş akışınızı bozmadan, size özel programlanmış temizlik hizmeti"
  },
  {
    baslik: "Profesyonel Ekipman",
    aciklama: "En son teknoloji temizlik makineleri ve ekipmanları"
  },
  {
    baslik: "Çevre Dostu Ürünler",
    aciklama: "Sağlığa ve çevreye zarar vermeyen temizlik malzemeleri"
  },
  {
    baslik: "Düzenli Kontrol",
    aciklama: "Kalite kontrol sistemi ile düzenli denetim"
  },
  {
    baslik: "Özel Çözümler",
    aciklama: "Her ofise özel temizlik planı ve çözümler"
  }
];

const yorumlar = [
  {
    isim: "Mehmet Yılmaz",
    yorum: "Şirketimizin temizlik ihtiyaçlarını uzun süredir Parem ile çözüyoruz. Profesyonel yaklaşımları ve kaliteli hizmetleri için teşekkürler."
  },
  {
    isim: "Ayşe Kaya",
    yorum: "Çalışanlarımız temiz bir ortamda çalışmaktan çok memnun. Özellikle pandemi döneminde gösterdikleri özen takdire şayan."
  },
  {
    isim: "Ali Demir",
    yorum: "Düzenli ofis temizliği konusunda tam aradığımız firma. Güvenilir ve profesyonel bir ekibe sahipler."
  }
]; 