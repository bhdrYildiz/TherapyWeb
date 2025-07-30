// data/workingAreasData.ts
import { GiBrain, GiNightSleep, GiHeartInside } from "react-icons/gi";
import { MdOutlinePsychology, MdOutlinePsychologyAlt } from "react-icons/md";
import { FaRegSadCry, FaHeartbeat } from "react-icons/fa";
import { PiExamBold } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";

export const workingAreasData = [
  {
    slug: "anksiyete-bozukluklari",
    title: "Anksiyete Bozuklukları",
    image: "/images/anxiety.png",
    shortDescription:
      "Sürekli endişe, huzursuzluk ve panik haliyle baş etmekte zorlanan bireyler için kişiye özel terapi yaklaşımları sunuyorum.",
    longContent: `
### Anksiyete Nedir?

Anksiyete, kişinin kendisini tehdit altında hissettiği durumlarda yaşadığı yoğun kaygı ve korku hissidir. Günlük hayatın olağan bir parçası olabilir, ancak yoğunlaştığında bireyin yaşam kalitesini düşürebilir.

### Belirtiler

- Sürekli kaygı ve huzursuzluk
- Kalp çarpıntısı, terleme, titreme
- Uyku problemleri
- Kas gerginliği

### Terapi Yaklaşımım

Bilişsel Davranışçı Terapi (BDT), EMDR ve gevşeme tekniklerini içeren bütüncül bir yaklaşımla, kaygının kökenini birlikte keşfederek başa çıkma becerileri geliştiriyoruz.
    `,
    icon: MdOutlinePsychology,
  },
  {
    slug: "obsesif-kompulsif-bozukluk",
    title: "Obsesif Kompulsif Bozukluk (OKB)",
    image: "/images/OKB.png",
    shortDescription:
      "Zihni sürekli meşgul eden takıntılı düşünceler ve tekrar eden davranışlarla başa çıkmanıza yardımcı oluyorum.",
    longContent: `
### OKB Nedir?

Obsesif Kompulsif Bozukluk, kişide istemsiz ve yineleyici düşünceler (obsesyonlar) ile bu düşünceleri azaltmak için yapılan davranışlar (kompulsiyonlar) ile karakterizedir.

### Yaygın Belirtiler

- Sürekli el yıkama, kontrol etme
- Kirlenme, düzen veya simetri takıntıları
- Sayma veya tekrar etme ritüelleri

### Terapi Süreci

Bilişsel Davranışçı Terapi'nin yanı sıra maruz bırakma teknikleri ile OKB semptomlarını azaltmaya yönelik yapılandırılmış bir tedavi planı izliyoruz.
    `,
    icon: MdOutlinePsychologyAlt,
  },
  {
    slug: "depresyon-ve-duygu-durum-bozukluklari",
    title: "Depresyon ve Duygu Durum Bozuklukları",
    image: "/images/Depression.png",
    shortDescription:
      "Çöküntü hali, isteksizlik ve umutsuzluk gibi duygularla baş edebilmek için profesyonel destek sunuyorum.",
    longContent: `
### Depresyon Nedir?

Depresyon, sürekli bir mutsuzluk, ilgi kaybı, enerjisizlik ve çaresizlik hali ile kendini gösteren ciddi bir ruhsal bozukluktur.

### Belirtileri

- Sabahları uyanmakta zorluk
- İştahta azalma veya artış
- Hayattan keyif alamama
- Kendine zarar verme düşünceleri

### Terapi Yöntemleri

Terapi sürecinde, kişinin yaşam öyküsü ve düşünce kalıpları üzerinden çalışarak duygu durumunun dengelenmesini sağlamak için bilişsel davranışçı teknikler ve destekleyici yaklaşımlar kullanıyorum.
    `,
    icon: FaRegSadCry,
  },
  {
    slug: "panik-atak-ve-panik-bozukluk",
    title: "Panik Atak ve Panik Bozukluk",
    image: "/images/PanicAttack.png",
    shortDescription:
      "Aniden ortaya çıkan yoğun kaygı nöbetleri ve panik ataklara karşı etkili psikoterapi yaklaşımları uyguluyorum.",
    longContent: `
### Panik Bozukluk Nedir?

Panik bozukluk, kişinin beklenmedik anlarda yoğun bir korku ve fizyolojik tepki yaşadığı, tekrar eden panik ataklarla karakterizedir.

### Atak Belirtileri

- Göğüs ağrısı, nefes darlığı
- Baş dönmesi, bayılacakmış gibi hissetme
- Kontrolü kaybetme korkusu
- Ölüm korkusu

### Tedavi Yaklaşımı

Panik atakların altında yatan düşünce kalıplarını fark ederek, tetikleyici durumlarla yüzleşmeyi kolaylaştıran terapiler uygulanır. BDT ve nefes çalışmaları sıklıkla kullanılır.
    `,
    icon: GiBrain,
  },
  {
    slug: "travma-sonrasi-stres-bozuklugu",
    title: "Travma Sonrası Stres Bozukluğu (TSSB)",
    image: "/images/Travma.png",
    shortDescription:
      "Geçmiş travmaların bugünkü yaşamınıza etkilerini azaltmak için EMDR ve diğer terapötik tekniklerle çalışıyorum.",
    longContent: `
### TSSB Nedir?

TSSB, kişinin yaşadığı veya tanık olduğu travmatik bir olay sonrası oluşan aşırı korku, kaygı ve tetiklenme tepkileridir.

### Belirtiler

- Kabuslar ve flashbackler
- Sosyal geri çekilme
- Aşırı irkilme, tetikte olma hali

### Terapi Yöntemleri

EMDR, travma odaklı bilişsel terapi ve beden farkındalığı teknikleri ile yaşanan olayın etkilerini hafifletmeye odaklanıyoruz.
    `,
    icon: GiHeartInside,
  },
  {
    slug: "yeme-bozukluklari",
    title: "Yeme Bozuklukları",
    image: "/images/eatingDisorders.png",
    shortDescription:
      "Yeme davranışlarındaki bozulmaların arkasındaki psikolojik nedenleri birlikte keşfedip çözüm odaklı ilerliyoruz.",
    longContent: `
### Yeme Bozukluğu Türleri

- Anoreksiya Nervoza
- Bulimiya Nervoza
- Tıkınırcasına Yeme Bozukluğu

### Belirtiler

- Aşırı kilo kaygısı
- Yemekten sonra kusma
- Kontrolsüz yeme nöbetleri

### Yaklaşımım

Yeme bozuklukları sadece fiziksel değil, psikolojik bir temele de sahiptir. Bu süreçte kişinin beden algısı, özsaygısı ve yeme davranışına yönelik inançları üzerinde çalışılır.
    `,
    icon: FaHeartbeat,
  },
  {
    slug: "iliski-ve-evlilik-problemleri",
    title: "İlişki ve Evlilik Problemleri",
    image: "/images/deneme123.png",
    shortDescription:
      "Çiftler arasında yaşanan iletişim sorunları, çatışmalar ve duygusal kopukluklarla ilgili destek sağlıyorum.",
    longContent: `
### Yaygın Problemler

- İletişim kopukluğu
- Güven sorunları
- Ebeveynlik çatışmaları
- Duygusal mesafe

### Danışmanlık Süreci

Bireysel ve çift terapisi yöntemleriyle, ilişkideki temel dinamikleri anlamaya ve sağlıklı bir iletişim kurmaya odaklanıyoruz.
    `,
    icon: IoPeopleOutline,
  },
  {
    slug: "uyku-bozukluklari",
    title: "Uyku Bozuklukları",
    image: "/images/uykuBozukluklari.png",
    shortDescription:
      "Uyumakta güçlük, sık uyanma ya da kabuslarla ilgili sorunlara karşı bireysel terapi uygulamaları yapıyorum.",
    longContent: `
### Uyku Sorunları

- Uykusuzluk (İnsomnia)
- Kabus ve gece terörü
- Sık uyanma veya erken uyanma

### Terapi Yaklaşımı

Uyku hijyeni düzenlemeleri, gevşeme egzersizleri ve altta yatan psikolojik nedenlerin ele alındığı bireysel terapi süreci izlenir.
    `,
    icon: GiNightSleep,
  },
  {
    slug: "sinav-kaygisi-ve-performans",
    title: "Sınav Kaygısı ve Performans Problemleri",
    image: "/images/textAnxiety.png",
    shortDescription:
      "Sınav anında yaşanan kaygı, odaklanma sorunları ve düşük performans için destekleyici teknikler sunuyorum.",
    longContent: `
### Sınav Kaygısı Nedir?

Sınav öncesi ya da sırasında yoğun stres, dikkat dağınıklığı ve başarısızlık korkusu gibi durumlarla karakterizedir.

### Terapi Yaklaşımım

Zihinsel odaklanma egzersizleri, nefes teknikleri ve olumlu düşünce kalıpları geliştirme üzerine kurulu terapi süreçleriyle destek sağlanır.
    `,
    icon: PiExamBold,
  },
  {
    slug: "ozguven-ve-ozsaygi-problemleri",
    title: "Özgüven Problemleri ve Özsaygı Sorunları",
    image: "/images/selfConfidence.png",
    shortDescription:
      "Kendine güven eksikliği ve değersizlik hissiyle baş etme süreçlerinde terapötik destek sunuyorum.",
    longContent: `
### Belirtiler

- Kendini yetersiz hissetme
- Sosyal ortamlardan kaçınma
- Onaylanma ihtiyacı
- Başarısızlık korkusu

### Terapi Süreci

Bireyin kendilik algısını güçlendiren, öz değer farkındalığını artıran terapötik tekniklerle özgüveni yeniden inşa etmeye odaklanıyoruz.
    `,
    icon: HiOutlineUserGroup,
  },
];
