import { useState } from 'react';

interface TeklifFormuProps {
  isOpen: boolean;
  onClose: () => void;
  hizmetTuru: string;
}

export default function TeklifFormu({ isOpen, onClose, hizmetTuru }: TeklifFormuProps) {
  const [formData, setFormData] = useState({
    isim: '',
    telefon: '',
    email: '',
    adres: '',
    mesaj: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // API'ye form verilerini gönder
      const response = await fetch('/api/teklif', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          hizmetTuru: hizmetTuru || 'Genel'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        
        // 3 saniye sonra formu kapat
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            isim: '',
            telefon: '',
            email: '',
            adres: '',
            mesaj: '',
          });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Ücretsiz Teklif Formu
        </h3>

        {hizmetTuru && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Seçilen Hizmet:</strong> {hizmetTuru}
            </p>
          </div>
        )}
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              ✅ Teklif talebiniz başarıyla alındı! En kısa sürede size dönüş yapacağız.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-50 rounded-lg">
            <p className="text-sm text-red-800">
              ❌ Bir hata oluştu. Lütfen tekrar deneyin veya telefonla iletişime geçin.
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="hizmetTuru" value={hizmetTuru} />
          
          <div>
            <label htmlFor="isim" className="block text-sm font-medium text-gray-700 mb-1">
              Adınız Soyadınız *
            </label>
            <input
              type="text"
              id="isim"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.isim}
              onChange={(e) => setFormData({ ...formData, isim: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon Numaranız *
            </label>
            <input
              type="tel"
              id="telefon"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.telefon}
              onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="adres" className="block text-sm font-medium text-gray-700 mb-1">
              Adres *
            </label>
            <input
              type="text"
              id="adres"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.adres}
              onChange={(e) => setFormData({ ...formData, adres: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-1">
              Mesajınız
            </label>
            <textarea
              id="mesaj"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.mesaj}
              onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
              placeholder="Hizmet almak istediğiniz alan, metrekare bilgisi, özel istekleriniz..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="spinner mr-2"></div>
                Gönderiliyor...
              </span>
            ) : (
              'Teklif İste'
            )}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Veya direkt arayın: <a href="tel:+905011393032" className="text-blue-600 hover:underline">0501 139 30 32</a></p>
        </div>
      </div>
    </div>
  );
} 