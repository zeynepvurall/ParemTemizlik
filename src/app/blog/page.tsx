import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: "Ev Temizliğinde Dikkat Edilmesi Gerekenler",
      excerpt: "Günlük ev temizliğinde hangi alanlara öncelik vermelisiniz? İşte uzman tavsiyeleri...",
      date: "15 Aralık 2024",
      icon: "🧹",
      link: "/blog/ev-temizligi-ipuclari",
      readTime: "5 dk"
    },
    {
      title: "Ofis Temizliğinin Önemi",
      excerpt: "Çalışma ortamının temizliği çalışan verimliliğini nasıl etkiler? Detayları bu yazımızda...",
      date: "12 Aralık 2024",
      icon: "🏢",
      link: "/blog/ofis-temizligi-onemi",
      readTime: "4 dk"
    },
    {
      title: "Dezenfeksiyon Hakkında Bilmeniz Gerekenler",
      excerpt: "Profesyonel dezenfeksiyon hizmetleri ve sağlığınız için önemi hakkında detaylı bilgi...",
      date: "10 Aralık 2024",
      icon: "🧬",
      link: "/blog/dezenfeksiyon-bilgileri",
      readTime: "6 dk"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Temizlik İpuçları ve Haberler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temizlik dünyasından en güncel bilgiler, pratik ipuçları ve uzman tavsiyeleri. 
            Sağlıklı yaşam alanları için ihtiyacınız olan tüm bilgiler burada.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">{post.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-blue-600 font-medium">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={post.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Devamını Oku
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Temizlik İpuçlarını Kaçırmayın!</h2>
          <p className="text-blue-100 mb-6">
            Yeni yazılarımızdan haberdar olmak için bültenimize abone olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
} 