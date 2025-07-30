export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Bilinçli Farkındalık (Mindfulness) Nedir ve Nasıl Uygulanır?",
    slug: "bilincli-farkindalik-nedir",
    excerpt:
      "Mindfulness, anda kalmayı öğrenerek stresi azaltmanın ve iç huzuru artırmanın etkili bir yoludur.",
    date: "2025-07-22",
    image: "/images/resim14.png",
    content: `
## Bilinçli Farkındalık Nedir?

Bilinçli farkındalık, kişinin şu an içinde bulunduğu anı yargılamadan ve değiştirmeye çalışmadan, tüm duyularıyla fark etmesidir.

Zihin çoğunlukla ya geçmişte yaşar ya da geleceği düşünür. Ancak **gerçek yaşam sadece "şu an"da gerçekleşir**.

> “Şu anın farkında olmak, kendine verebileceğin en büyük hediyedir.” — Thich Nhat Hanh

## Mindfulness'ın Faydaları

- Stres seviyesini azaltır
- Odaklanmayı artırır
- Uyku kalitesini iyileştirir
- Anksiyete ve depresyon belirtilerini hafifletir

## Uygulama Yöntemleri

### 1. Nefese Odaklanmak

Gözlerini kapat, derin bir nefes al ve sadece nefes alışverişini izle. Zihnin dağılırsa, fark et ve tekrar nefesine dön.

### 2. Duyusal Farkındalık

Bir nesneye odaklan. Dokusu, kokusu, rengi… Tüm duyularını devreye sokarak sadece onu gözlemle.

### 3. Yargılamadan Gözlem

Duyguların ve düşüncelerin geldikçe onları bastırma veya değiştirmeye çalışma. Sadece gözlemle.

## Mindfulness ile Yaşam

Mindfulness bir uygulama değil, bir yaşam biçimidir. Her gün 5 dakikalık pratikle başlayabilir, zamanla içsel huzurunu artırabilirsin.
`,
  },

  {
    title: "EMDR Terapisi Nedir?",
    slug: "emdr-terapisi-nedir",
    excerpt:
      "EMDR, travma sonrası stres bozukluklarının tedavisinde kullanılan etkili bir terapi yöntemidir.",
    content: `## EMDR Nasıl Çalışır?\n\nEMDR göz hareketleriyle travmatik anıların işlenmesini sağlar...`,
    date: "2025-07-18",
    image: "/images/resim13.png",
  },
  {
    title: "İletişim Problemleri ve Çözüm Yolları",
    slug: "iletisim-problemleri-cozumleri",
    excerpt:
      "Sağlıklı ilişkilerin temeli etkili iletişimdir. Bu yazıda iletişimde yapılan hataları ve çözüm yollarını ele alıyoruz.",
    date: "2025-07-26",
    image: "/images/resim11.png",
    content: `
## Neden İletişim Kuramıyoruz?

İletişim yalnızca konuşmak değildir; aynı zamanda anlamak, dinlemek ve empati kurmaktır. Ancak birçok kişi bu becerileri kullanmakta zorlanır.

## Yaygın İletişim Hataları

- Karşı tarafı dinlememek
- Sürekli savunmaya geçmek
- Genel geçer yargılarla konuşmak (“Sen hep…”, “Sen hiç…”)
- Pasif-agresif davranışlar

> “İletişimde en büyük problem, dinlemek için değil cevap vermek için dinlememizdir.” — Stephen R. Covey

## Etkili İletişim İçin Öneriler

### 1. Etkin Dinleme

Sadece sessiz olmak değil; göz teması kurmak, kafa sallamak, karşı tarafın duygusunu anlamaya çalışmak.

### 2. “Ben” Dili Kullanmak

Suçlayıcı bir dil yerine, duygular üzerinden konuşmak:  
“Sen beni hiç anlamıyorsun!” yerine  
🟢 “Anlaşılmadığımı hissediyorum.”

### 3. Açık ve Net Olmak

İma etmek yerine açık ve dürüst olmak:  
🟢 “Şu anda biraz yalnız kalmaya ihtiyacım var.”

## Sağlıklı İlişkiler İçin Anahtar

Etkili iletişim, bireylerin ihtiyaçlarını ifade etmesini ve karşısındakini anlamasını sağlar. Bu da hem romantik ilişkilerde hem arkadaşlıklarda daha güçlü bağlar oluşturur.
`,
  },
];
