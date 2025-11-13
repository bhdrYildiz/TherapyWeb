// data/workingAreasData.ts
import { GiHeartInside } from "react-icons/gi";
import { MdOutlinePsychology, MdOutlinePsychologyAlt } from "react-icons/md";
import { FaRegSadCry, FaHeartbeat } from "react-icons/fa";
import { PiExamBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";

export const workingAreasData = [
  {
    slug: "anksiyete-bozukluklari",
    title: "Anksiyete Bozuklukları",
    image: "/images/anxiety.png",
    shortDescription:
      "Sürekli endişe, huzursuzluk ve panik haliyle baş etmekte zorlanan bireyler için kişiye özel terapi yaklaşımları sunuyorum.",
    longContent: `
-Panik Bozukluk

-Agorafobi (Mekandan Korkma)

-Sosyal Anksiyete Bozukluğu

-Yaygın Anksiyete Bozukluğu

-Özgül Fobiler`,
    icon: MdOutlinePsychology,
  },
  {
    slug: "kisilik-bozukluklari",
    title: "Kişilik Bozuklukları",
    image: "/images/selfConfidence.png",
    shortDescription:
      "Kişilik bozuklukları ile ilgili terapötik destek sunuyorum.",
    longContent: `
-Borderline Kişilik Bozukluğu

-Narsisistik Kişilik Bozukluğu

-Antisosyal Kişilik Bozukluğu

-Obsesif Kompulsif Kişilik Bozukluğu

-Şizoid Kişilik Bozukluğu
    `,
    icon: HiOutlineUserGroup,
  },
  {
    slug: "depresyon-ve-duygu-durum-bozukluklari",
    title: "Duygudurum Bozuklukları",
    image: "/images/Depression.png",
    shortDescription:
      "Çöküntü hali, isteksizlik ve umutsuzluk gibi duygularla baş edebilmek için profesyonel destek sunuyorum.",
    longContent: `
-Depresyon

-Bipolar Bozukluk

-Distimik Bozukluk
    `,
    icon: FaRegSadCry,
  },
  {
    slug: "travma-sonrasi-stres-bozuklugu",
    title: "Travma ve Stres Bozuklukları",
    image: "/images/Travma.png",
    shortDescription:
      "Geçmiş travmaların bugünkü yaşamınıza etkilerini azaltmak için EMDR ve diğer terapötik tekniklerle çalışıyorum.",
    longContent: `
-Travma Sonrası Stres Bozukluğu (TSSB)

-Akut Stres Bozukluğu

-Karmaşık Travma
`,
    icon: GiHeartInside,
  },
  {
    slug: "iliskivebaglanma-problemleri",
    title: "İlişki ve Bağlanma Problemleri",
    image: "/images/OKB.png",
    shortDescription:
      "Zihni sürekli meşgul eden takıntılı düşünceler ve tekrar eden davranışlarla başa çıkmanıza yardımcı oluyorum.",
    longContent: `
-Yakın ilişkilerde tekrarlayan çatışmalar, mesafe veya bağımlılık döngüleri.

-Kaçıngan, kaygılı veya kararsız bağlanma örüntüleri.

-İlişkilerde duygusal ihtiyaçları fark etmekte ve ifade etmekte zorlanma.

-Terk edilme korkusu, aşırı uyum sağlama ya da kontrol etme eğilimleri.`,
    icon: MdOutlinePsychologyAlt,
  },
  {
    slug: "kayip-ayrilik-ve-yas-surecleri",
    title: "Kayıp, Ayrılık ve Yas Süreçleri",
    image: "/images/eatingDisorders.png",
    shortDescription:
      "",
    longContent: ``,
    icon: FaHeartbeat,
  },
  {
    slug: "duygusal-duzenleme-ve-ofke-problemleri",
    title: "Duygusal Düzenleme ve Öfke Problemleri",
    image: "/images/textAnxiety.png",
    shortDescription:
      "",
    longContent: ``,
    icon: PiExamBold,
  },
  {
    slug: "stres-yonetimi",
    title: "Stres Yönetimi",
    image: "/images/textAnxiety.png",
    shortDescription:
      "",
    longContent: ``,
    icon: PiExamBold,
  },
  {
    slug: "ergenlik-donemi-sorunlari",
    title: "Ergenlik Dönemi Sorunları",
    image: "/images/textAnxiety.png",
    shortDescription:
      "",
    longContent: `
-Kimlik gelişimi, arkadaş ilişkileri, okul uyumu ve sınav kaygısı.

-Aileyle iletişim sorunları, öfke, içe kapanma veya riskli davranışlar.

-Kendini ifade etmede güçlük, özgüven problemleri, sosyal çekilme.

-Sınır koyabilme, sınırları koruyabilme
`,
    icon: PiExamBold,
  },
];
