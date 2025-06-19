# Parem Temizlik Hizmetleri - Website

Modern ve profesyonel temizlik hizmetleri websitesi. Next.js 14, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **SEO Optimizasyonu**: Meta tags, Open Graph, Twitter Cards
- **Performans**: Next.js 14 ile optimize edilmiş performans
- **Teklif Formu**: Entegre teklif alma sistemi
- **Müşteri Yorumları**: Sosyal kanıt bölümü
- **Blog/Haberler**: İçerik yönetimi
- **İletişim Entegrasyonu**: Telefon ve sosyal medya bağlantıları

## 🛠️ Teknolojiler

- **Framework**: Next.js 14 (App Router)
- **Dil**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (önerilen)

## 📁 Proje Yapısı

```
parem/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── hizmetler/
│   │   ├── hakkimizda/
│   │   └── iletisim/
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── TeklifFormu.tsx
├── public/
├── package.json
└── README.md
```

## 🚀 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd parem
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📝 Kullanım

### Ana Sayfa
- Hero section ile etkileyici giriş
- İstatistikler bölümü
- Hizmetler kartları
- Müşteri yorumları
- Call-to-action bölümü
- Blog/Haberler

### Teklif Formu
- Modal popup olarak açılır
- Hizmet türü seçimi
- İletişim bilgileri
- Adres ve mesaj alanları

### Responsive Tasarım
- Mobil uyumlu
- Tablet optimizasyonu
- Desktop deneyimi

## 🎨 Özelleştirme

### Renkler
Ana renk paleti `tailwind.config.js` dosyasında tanımlanmıştır:
- Primary: Blue (#3b82f6)
- Secondary: Gray (#6b7280)

### Fontlar
- Inter font ailesi kullanılmıştır
- Google Fonts'tan otomatik yüklenir

### Animasyonlar
- CSS animasyonları `globals.css` dosyasında tanımlanmıştır
- Hover efektleri
- Fade-in animasyonları

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Geliştirme

### Yeni Sayfa Ekleme
1. `src/app/` altında yeni klasör oluşturun
2. `page.tsx` dosyası ekleyin
3. Layout'ta navigation'a ekleyin

### Yeni Component Ekleme
1. `src/components/` altında yeni dosya oluşturun
2. TypeScript interface'leri tanımlayın
3. Export edin

### Styling
- Tailwind CSS utility classes kullanın
- Custom CSS `globals.css` dosyasına ekleyin
- Component-specific styles için CSS modules kullanabilirsiniz

## 🚀 Deployment

### Vercel (Önerilen)
1. Vercel hesabı oluşturun
2. GitHub repository'yi bağlayın
3. Otomatik deployment

### Diğer Platformlar
- Netlify
- Railway
- DigitalOcean App Platform

## 📊 SEO

### Meta Tags
- Title ve description optimize edilmiş
- Open Graph tags
- Twitter Cards
- Canonical URLs

### Performance
- Next.js Image optimization
- Font optimization
- CSS minification
- JavaScript bundling

## 🔒 Güvenlik

- TypeScript ile tip güvenliği
- Input validation
- XSS koruması
- CSRF koruması

## 📞 İletişim

- **Telefon**: 0501 139 30 32
- **Adres**: Abdullahpaşa Mahallesi Malatya Caddesi 1.Sokak No26/C Merkez/Elazığ
- **Email**: zeynepvural53@gmail.com

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Changelog

### v1.0.0 (2024-12-15)
- İlk sürüm
- Ana sayfa tasarımı
- Teklif formu
- Responsive tasarım
- SEO optimizasyonu

---

**Parem Temizlik Hizmetleri** - Profesyonel temizlik çözümleri
