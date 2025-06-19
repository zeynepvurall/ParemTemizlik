'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TeklifFormu from "@/components/TeklifFormu";

export default function Home() {
  const [isTeklifFormOpen, setIsTeklifFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openTeklifForm = (service: string = '') => {
    setSelectedService(service);
    setIsTeklifFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center overflow-hidden">
        {/* Decorative Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/about-hero.jpg" 
            alt="Temizlik Hero" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover" 
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white animate-fade-in">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-slide-up">
              Parem Temizlik Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-100">
              Profesyonel ve güvenilir temizlik hizmetleri ile yaşam alanlarınız pırıl pırıl olsun
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => openTeklifForm()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 animate-pop-in"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Hemen Teklif Alın
              </button>
              <Link
                href="/hizmetler"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-center flex items-center gap-2 animate-pop-in delay-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                Hizmetlerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200 animate-fade-in-up">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ev, ofis ve işyeri temizliğinden dezenfeksiyona kadar tüm temizlik ihtiyaçlarınız için profesyonel çözümler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="flex flex-col gap-2">
                  <Link 
                    href={service.link || '#'} 
                    className="block text-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Detaylı Bilgi →
                  </Link>
                  <button
                    onClick={() => openTeklifForm(service.title)}
                    className="block text-center text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Teklif Al →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              10 yılı aşkın tecrübemiz ve müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Memnun müşterilerimizin deneyimleri ve yorumları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Teklif Alın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin. Size en uygun temizlik çözümünü sunalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905011393032"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              📞 0501 139 30 32
            </a>
            <button
              onClick={() => openTeklifForm()}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Teklif Formu
            </button>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Temizlik İpuçları ve Haberler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temizlik dünyasından en güncel bilgiler ve pratik ipuçları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-4xl">{post.icon}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={post.link} 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teklif Formu Modal */}
      <TeklifFormu
        isOpen={isTeklifFormOpen}
        onClose={() => setIsTeklifFormOpen(false)}
        hizmetTuru={selectedService}
      />
    </div>
  );
}

const stats = [
  { value: "1000+", label: "Mutlu Müşteri" },
  { value: "10+", label: "Yıllık Tecrübe" },
  { value: "24/7", label: "Hizmet" },
  { value: "100%", label: "Memnuniyet" },
];

const services = [
  {
    title: 'Ev Temizliği',
    description: 'Detaylı ev temizliği hizmetleri ile eviniz pırıl pırıl olsun.',
    icon: <span className="text-white text-2xl">🏠</span>,
    link: '/hizmetler/ev-temizligi'
  },
  {
    title: 'Ofis Temizliği',
    description: 'İş yeriniz için profesyonel temizlik çözümleri.',
    icon: <span className="text-white text-2xl">🏢</span>,
    link: '/hizmetler/ofis-temizligi'
  },
  {
    title: 'İnşaat Sonrası Temizlik',
    description: 'İnşaat ve tadilat sonrası detaylı temizlik hizmetleri.',
    icon: <span className="text-white text-2xl">🏗️</span>,
    link: '/hizmetler/insaat-sonrasi-temizlik'
  },
  {
    title: 'Dezenfeksiyon',
    description: 'ULV ve sisleme yöntemiyle profesyonel dezenfeksiyon hizmetleri.',
    icon: <span className="text-white text-2xl">🧬</span>,
    link: '/hizmetler/dezenfeksiyon'
  },
]

const features = [
  {
    title: 'Deneyimli Ekip',
    description: 'Uzman ve profesyonel temizlik ekibi',
    icon: <span className="text-white text-xl">👥</span>,
  },
  {
    title: 'Güvenilir Hizmet',
    description: 'Güvenlik kontrolünden geçmiş personel',
    icon: <span className="text-white text-xl">🔒</span>,
  },
  {
    title: 'Uygun Fiyat',
    description: 'Rekabetçi ve şeffaf fiyatlandırma',
    icon: <span className="text-white text-xl">💰</span>,
  },
  {
    title: '7/24 Hizmet',
    description: 'Her zaman ulaşılabilir müşteri desteği',
    icon: <span className="text-white text-xl">⏰</span>,
  },
]

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    location: "Elazığ, Merkez",
    comment: "Parem Temizlik ile tanıştığımızdan beri evimiz hiç bu kadar temiz olmamıştı. Çok profesyonel ve güvenilir bir ekip."
  },
  {
    name: "Mehmet Kaya",
    location: "Elazığ, Merkez",
    comment: "Ofisimiz için düzenli temizlik hizmeti alıyoruz. Çok memnunuz, fiyatları da uygun."
  },
  {
    name: "Fatma Demir",
    location: "Elazığ, Merkez",
    comment: "İnşaat sonrası temizlik hizmeti aldık. Mükemmel bir iş çıkardılar. Kesinlikle tavsiye ederim."
  }
];

const blogPosts = [
  {
    title: "Ev Temizliğinde Dikkat Edilmesi Gerekenler",
    excerpt: "Günlük ev temizliğinde hangi alanlara öncelik vermelisiniz? İşte uzman tavsiyeleri...",
    date: "15 Aralık 2024",
    icon: "🧹",
    link: "/blog/ev-temizligi-ipuclari"
  },
  {
    title: "Ofis Temizliğinin Önemi",
    excerpt: "Çalışma ortamının temizliği çalışan verimliliğini nasıl etkiler? Detayları bu yazımızda...",
    date: "12 Aralık 2024",
    icon: "🏢",
    link: "/blog/ofis-temizligi-onemi"
  },
  {
    title: "Dezenfeksiyon Hakkında Bilmeniz Gerekenler",
    excerpt: "Profesyonel dezenfeksiyon hizmetleri ve sağlığınız için önemi hakkında detaylı bilgi...",
    date: "10 Aralık 2024",
    icon: "🧬",
    link: "/blog/dezenfeksiyon-bilgileri"
  }
];
