import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { isim, telefon, email, adres, mesaj, hizmetTuru } = body;

    // Email gönderme işlemi burada yapılacak
    // Şimdilik sadece console'a yazdırıyoruz
    console.log('Yeni teklif talebi:', {
      isim,
      telefon,
      email,
      adres,
      mesaj,
      hizmetTuru,
      tarih: new Date().toISOString()
    });

    // Başarılı yanıt
    return NextResponse.json({ 
      success: true, 
      message: 'Teklif talebiniz başarıyla alındı!' 
    });

  } catch (error) {
    console.error('API hatası:', error);
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
} 