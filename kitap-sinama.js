// Kitap Fiyat — Site sınaması / Sistem kontrolü (Scriptable) · sürüm 22.0
// BU DOSYA OTOMATİK BİRLEŞTİRİLDİ: kaynak/kurallar.json + kaynak/motor.js + kaynak/scriptable-kabuk.js
// Sürüm 21.9 · Ana 10 (13 Kasım 2026) · Kitantik sıralama tıklama teşhisi + yükleyici
//  - Kitantik: Sırala düğmesine basılır, açılan seçenekler rapora yazılır, fiyata göre artan olan tıklanır; yeni adres ve ilk fiyatlar yazılır.
//  - Yükleyici (kod/yukleyici.js): iPad'e bir kez kurulur, güncel betiği GitHub'dan alır; rapor başlığında "betik:" kaynağı görünür.
// Sürüm 21.8 · Ana 10 (13 Kasım 2026) · Kitantik teşhisi + n11 açıldı
//  - n11 (mağazalar) açıldı; n11 Sahaflar Çarşısı da açık. n11 teşhisi bir tur daha açık (kart kuralı için ham kart).
//  - Kitantik: sıralama menüsü (div.item) ve sayfalama adayları rapora yazılır; yeni "adresDene" kuralıyla sayfa/sıralama adresi
//    tahminleri tek turda denenir (ürün sayısı, ilk fiyatlar, artan sıralı mı, ilk sayfadan farklı ilan sayısı).
// Sürüm 21.7 · Ana 9 (13 Kasım 2026) · ilk kez GERÇEK sitelerde bulutta da sınandı (okunabilen 8 sitede)
//  - Trendyol: siteye özel kart kuralı (gerçek kart yapısından): ad ve fiyat doğru kutudan okunur; rozet şeridi
//    ("Çok Al Az Öde", kupon) ve satıcı vitrin şeridi fiyat sanılmaz.
//  - Sahafta: ürün sayfasındaki takip düğmesi ("Gelince Haber Ver") satıştaki ilanları "stokta yok" diye gizletiyordu.
//    Siteye özel "stokVar" kuralı: sayfada "1 sahafta var / son 1 adet" yazıyorsa ilan stokta sayılır.
//  - Halk Kitabevi açıldı (gerçek sitede doğrulandı: 6 ilan, 65 TL, stokta).
//  - n11 Sahaflar Çarşısı: kartta kondisyon yazmadığı bilindiği için gereksiz uyarı kalktı.
//  - Kitantik: üç sayfaya kadar okuma denenir; sıralama seçenekleri teşhis olarak rapora yazılır (fiyata göre sıralı
//    adres bulunursa 21.8'de kurallar dosyasına yazılacak).
//  - n11 ana sitesi (mağazalar) aday olarak eklendi: asıl uygulamada kapalı, sınamada denenir ve teşhis yazar.
//  - Teşhis açık sitelerde "SIRALAMA SEÇENEKLERİ" satırı rapora eklendi.
// Sürüm 21.6 · iPad 21.5 "Kürk Mantolu Madonna" raporuna göre düzeltmeler (13 Kasım 2026)
//  - Fiyatın hemen ardından (aynı ya da bitişik kutuda) "kupon/indirim/kazanç" geliyorsa o sayı fiyat sayılmaz
//    ("10 TL" + ayrı kutuda "Kupon", "Sepette 150 TL İndirim"). Kart kuralıyla okunan fiyattan da bu tutarlar silinir.
//  - Fiyat ürün bağlantısının dışında ve ortak kap çok büyükse (4000+ harf) fiyat "şüpheli" sayılır (Trendyol 10,00 TL hatası).
//  - "Oy ver / yorum / puan" bağlantıları ürün bağlantısı sayılmaz (Halk Kitabevi kitabı listeliyordu ama eleniyordu).
//  - Akakçe: satıcı satırlarından biri "Stokta" diyorsa ürün stokta sayılır (yanlış "STOĞU DOĞRULANMADI" uyarısı kalktı).
//  - Kitantik: satıcı adı "İkinci El - <satıcı>" yazımından okunur; kartta kondisyon olmadığı bilindiği için uyarı yazılmaz.
//  - Kurallar: Letgo ve n11 Sahaflar Çarşısı açık; Trendyol teşhisi gerçek sonuç kartını alır; Akakçe teşhisi kapandı.
// Sürüm 21.5 · iPad "Kürk Mantolu Madonna" raporuna göre düzeltmeler (13 Kasım 2026)
//  - "10 TL Kupon" gibi etiketler fiyat sayılmaz (Trendyol'da 10,00 TL hatası).
//  - "Ücretsiz kargo / kargo bedava" etiketi fiyatı kargo ücreti yapmaz (n11'de bütün fiyatlar şüpheli sayılıyordu).
//  - Nadir'in boşluklu yıldızları ("★ ★ ☆ ☆ ☆ İdare Eder") kondisyon olarak okunur.
//  - Ad başındaki rozetler ("Bugün Kargoda", "Kargo Bedava"...) addan silinir.
//  - Letgo: kart kuralı (ad, fiyat, ŞEHİR); ilan sayfasında stok bilgisi yok, yayındaki ilan var sayılır (35 sn → kısa).
//  - Teşhis istenen site (Trendyol, Akakçe) "çalıştı" olsa da ayrıntıda yazılır (ham kart görünsün).
//  - Kurallar: Pazarama yeniden açık; SahafPazar (3 sayfa) ve Sahafta açık; n11 aday, hataları kayıtlı.
// Sürüm 21.4 · iPad "Gündeste" raporuna göre düzeltmeler (13 Kasım 2026)
//  - Siteye özel kart kuralı (kurallar.json "kart"): SahafPazar ve Sahafta'da ad, fiyat, kondisyon, satıcı doğru yerden okunur
//    (eskiden SahafPazar'da kitap adı yerine satıcı adı okunuyordu). Kap bulunamazsa genel okuyucuya düşülür.
//  - "Sonuç yok" yazısı daha geniş alanda ve yeni kalıplarla aranır (BKM, n11 "Aradığını bulamadık", "0 kitap bulundu").
//  - Sayfa üst üste iki yoklamada "sonuç yok" deyip fiyatlı ürün göstermiyorsa bekleme erken biter (Kitapseç 55 sn bekliyordu).
//  - Trendyol ve Akakçe için her sınamada teşhis dökümü ve ham kart HTML'i (bağlantının nerede durduğunu görmek için).
//  - Sahaf ilanında kondisyon okunamazsa kısa raporda kartın yazısı gösterilir (Nadir/Kitantik gerçek yazımı için).
//  - Rapor özeti: "süre sınırında kesildi" ile "yavaş (45 sn üstü)" ayrı sayılır.
//  - Kurallar: sahaf.com ve Kolekton çıkarıldı (gerekçe kurallar.json "cikarilanlar"da).
// Sürüm 21.3 · 2. ve 3. dilim (13 Kasım 2026)
//  - Sıralı stok kontrolü: en ucuz ilandan başlayarak ürün sayfası açılır; stokta olan ilk ilana kadar, en çok 3 sayfa.
//    Stokta olmadığı görülen ilan gizlenir. Stoğu doğrulanmamış en ucuz ilan artık "ÇALIŞTI" sayılmaz.
//  - Kanıt kuralı: kartın içinden türetilen ad aranan adın kendisiyse (ör. sayfa başlığı) bağlantının adresi ya da başlığı
//    aranan kelimeleri olumlu olarak taşımalı; taşımıyorsa ilan elenir (Trendyol başlık çubuğu, Pazarama örneği).
//  - İlan alanları: tür, kondisyon, satıcı, şehir, kargo (şehir ve kargo şimdilik boş). Sahaf ilanında kondisyon ve satıcı okunmaya çalışılır.
//  - Kısa rapor: önce çalışan siteler tek satır (kanıtıyla), sonra yalnız sorunlu, kısmen çalışan ve aday sitelerin ayrıntısı.
//  - Kurallar (C kararı): Pazarama ve Halk Kitabevi asıl uygulamada kapalı. Yeni aday sahaf siteleri: n11 Sahaflar Çarşısı,
//    SahafPazar, sahaf.com, Kolekton, Sahafta. Aday sitelerin kart yapısı ve HTML parçası her zaman rapora yazılır.
// Sürüm 21 · 1. dilim: kod üç parçaya ayrıldı (kurallar.json, motor.js, Scriptable kabuğu); davranış sürüm 20 ile aynı.

const GOMULU_KURALLAR = {
  "surum": "22.0",
  "tarih": "2026-11-13",
  "aciklama": "Kitap Fiyat site kuralları. tur: yeni|sahaf|ikinciel|karsilastirma · acik: asıl uygulamada aranır mı · durum: calisan|duzeltiliyor|aday · url içinde {q} normal, {q5} eski Türkçe kodlama (ISO-8859-9), {qa} Türkçe harfsiz · sayfaGez: sonuç birden çok sayfaysa en çok bu sayfaya kadar okunur · sure: site süre sınırı (sn) · detay: özel ürün sayfası okuyucusu · aday siteler sınamada her zaman denenir ve teşhis dökümü yazar; acik:false olanlar asıl uygulamada aranmaz · kart: siteye özel kart kuralı (CSS seçicileri: kap, ad, fiyat, link, kondisyon, satici); kap bulunamazsa genel okuyucu · teshis: true ise kart yapısı, HTML parçası ve ham kart her sınamada yazılır (teshisSecici: ham kart seçicisi) · stokSayfasi: false ise ilan sayfası açılmaz, yayındaki ilan var sayılır (kişiden satış siteleri) · kart.sehir: satıcının şehri · kondisyonKartta: false ise arama kartında kondisyon yazmadığı bilinir, rapor uyarısı yazılmaz · stokVar: (21.7) ürün sayfasında bu düzenli ifade geçerse ürün stokta sayılır (siteye özel; ör. Sahafta takip düğmesi \"Gelince Haber Ver\" her sayfada yazar)",
  "ayarlar": {
    "ayniAnda": 4,
    "siteSureSiniri": 90,
    "yavasEsik": 45,
    "stokDeneme": 3
  },
  "kitapDisi": [
    "kupur",
    "reklam",
    "fotograf",
    "afis",
    "kartpostal",
    "dergi",
    "gazete",
    "plak",
    "kaset",
    "dvd",
    "vcd",
    "poster",
    "brosur",
    "bilet",
    "davetiye",
    "efemera",
    "kartvizit",
    "takvim",
    "kitap ayraci",
    "ayrac",
    "magnet",
    "rozet",
    "kitap kilifi",
    "sticker",
    "cikartma",
    "defter",
    "ajanda",
    "kupa",
    "bardak",
    "tisort",
    "canta",
    "kalem",
    "yapboz",
    "puzzle",
    "anahtarlik",
    "bileklik",
    "kolye",
    "mousepad",
    "mouse pad",
    "yastik",
    "maske"
  ],
  "siteler": [
    {
      "id": "kitapyurdu",
      "ad": "Kitapyurdu",
      "tur": "yeni",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.kitapyurdu.com/index.php?route=product/search&filter_name={q}"
      ],
      "ana": "https://www.kitapyurdu.com/"
    },
    {
      "id": "bkm",
      "ad": "BKM Kitap",
      "tur": "yeni",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.bkmkitap.com/arama?q={q}"
      ],
      "ana": "https://www.bkmkitap.com/",
      "not": "21.7 bulut: sayfa boş görünüyor çünkü yardımcı dosyaları bkmcdn03.witcdn.net adresinden geliyor ve bulut izin listesinde yok; motor hatası değil (iPad çalışıyor)."
    },
    {
      "id": "dr",
      "ad": "D&R",
      "tur": "yeni",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://www.dr.com.tr/search?q={q}"
      ],
      "ana": "https://www.dr.com.tr/"
    },
    {
      "id": "amazon",
      "ad": "Amazon",
      "tur": "yeni",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.amazon.com.tr/s?k={q}&i=stripbooks"
      ],
      "ana": "https://www.amazon.com.tr/"
    },
    {
      "id": "nadir",
      "ad": "Nadir Kitap",
      "tur": "sahaf",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.nadirkitap.com/kitapara_sonuc.php?kelime={q}"
      ],
      "ana": "https://www.nadirkitap.com/",
      "sayfaGez": 4,
      "sure": 120
    },
    {
      "id": "kitantik",
      "ad": "Kitantik",
      "tur": "sahaf",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.kitantik.com/search/ps?st={q}&sort=salePrice;asc;L"
      ],
      "ana": "https://www.kitantik.com/",
      "kondisyonKartta": false,
      "not": "Arama kartında kondisyon yok (yalnız ürün sayfasında); satıcı kartta \"İkinci El - <satıcı>\" diye yazıyor (21.6). 21.8 [KANITLI, iPad]: sayfa adresi &page=N çalışıyor (page=2 ilk sayfadan tamamen farklı 20 ilan); sıralama adresi tahmini boşa gitti. 21.9 [KANITLI, iPad]: Sırala düğmesi + \"Fiyat Artan\" tıklanınca adres şuna döndü: &sort=salePrice;asc;L (ilk fiyatlar 20 / 19,99 / 20 TL: varsayılan sıralamada en ucuz 27-50 TL çıkıyordu). 22.0: arama adresine bu sıralama yazıldı; sonraki sayfalar adresle (&page=N) okunur, en çok 3 sayfa. Tamamen sınanmadı: sıralı sayfada alakasız ucuz ilan çıkıyor mu, iPad raporuyla bakılacak. Bulut buradan engelli (Cloudflare), yalnız iPad.",
      "sayfaGez": 3,
      "teshis": true,
      "sure": 120,
      "sayfaUrl": "&page={n}"
    },
    {
      "id": "hepsiburada",
      "ad": "Hepsiburada",
      "tur": "yeni",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://www.hepsiburada.com/ara?q={q}"
      ],
      "ana": "https://www.hepsiburada.com/"
    },
    {
      "id": "halk",
      "ad": "Halk Kitabevi",
      "tur": "yeni",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.halkkitabevi.com/arama?q={q}"
      ],
      "ana": "https://www.halkkitabevi.com/",
      "not": "21.7: açıldı (Fatih onayı, 13.11.2026). Gerçek sitede bulutta sınandı (Kürk Mantolu Madonna): 6 ilan, en ucuz 65 TL, stokta; iPad 21.6 ile aynı. Önceki sorun: ürün yerine \"oy ver\" bağlantısı (/p/Votes) seçiliyordu, 21.6 düzeltti."
    },
    {
      "id": "akakce",
      "ad": "Akakçe",
      "tur": "karsilastirma",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://www.akakce.com/arama/?q={q}"
      ],
      "ana": "https://www.akakce.com/",
      "detay": "akakce",
      "teshis": false,
      "teshisSecici": "ul.pl_v9 > li",
      "not": "Ham kart alındı (21.5 iPad): li[data-pr] > a.pw_v8 (href, title) > h3.pn_v8 ad, span.pt_v9 fiyat, '+N FİYAT', yayınevi listesi. Arama kartındaki 'En Ucuz' (53,20) ürün sayfasının ilk satırından (41,73 + kargo) farklı çıktı; nedeni bilinmiyor. 21.6: satıcı satırı 'Stokta' diyorsa stok var sayılır."
    },
    {
      "id": "trendyol",
      "ad": "Trendyol",
      "tur": "yeni",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://www.trendyol.com/sr?q={q}"
      ],
      "ana": "https://www.trendyol.com/",
      "teshis": false,
      "teshisSecici": "a:has(.info-wrapper), .info-wrapper .product-card-price",
      "not": "21.7: kart kuralı gerçek kart yapısından yazıldı [KANITLI, iPad 21.6 ham kartı]: a.product-card > .info-wrapper > h2.title (yayınevi + ad); fiyat .product-card-price içinde (.single-price > .price-section). Rozet şeridi (badges-wrapper: \"Çok Al Az Öde\", kupon) fiyat kutusunun dışında kalır. Vitrin şeridi (a.seller-store-product-card) okunmaz. Teşhis bir sınama daha açık kalır. Önceki: 21.5 iPad kupon tutarı 10,00 TL fiyat sanılmıştı; 21.6 bunu şüpheli sayıyordu ama 42,05 ve 106,23 TL ilanları da şüpheli kalıyordu.",
      "kart": {
        "kap": "a.product-card",
        "ad": ".info-wrapper .title",
        "fiyat": ".product-card-price .single-price, .product-card-price .price-section, .product-card-price .discounted-price"
      }
    },
    {
      "id": "pandora",
      "ad": "Pandora",
      "tur": "yeni",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://www.pandora.com.tr/Arama?type=9&kitapadi={q}"
      ],
      "ana": "https://www.pandora.com.tr/",
      "not": "21.7 bulut: başsız tarayıcıyı Cloudflare engelliyor (\"Attention Required\"); sonuçlar sayfa açıldıktan sonra JavaScript ile yükleniyor (Next.js). Yalnız iPad teşhisi."
    },
    {
      "id": "kitapsec",
      "ad": "Kitapseç",
      "tur": "yeni",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.kitapsec.com/mobil/arama/?a={q5}",
        "https://www.kitapsec.com/Arama/index.php?a={q5}"
      ],
      "ana": "https://www.kitapsec.com/"
    },
    {
      "id": "pazarama",
      "ad": "Pazarama",
      "tur": "yeni",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://www.pazarama.com/arama?q={q}"
      ],
      "ana": "https://www.pazarama.com/",
      "not": "Kürk Mantolu Madonna (13.11.2026, 21.4): 7 sn, doğru sonuç; Gündeste'deki yanlış ilanı kanıt kuralı eliyor. Yeniden açıldı (21.5)."
    },
    {
      "id": "letgo",
      "ad": "Letgo",
      "tur": "ikinciel",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.letgo.com/arama?query_text={q}"
      ],
      "ana": "https://www.letgo.com/",
      "stokSayfasi": false,
      "kart": {
        "kap": ".search-result-wrapper .grid > div.relative",
        "ad": "a[href*='/item/'] .sr-only",
        "link": "a[href*='/item/']",
        "fiyat": "p",
        "sehir": ".text-secondary-600 span"
      },
      "not": "Kişiden ikinci el ilan. 21.5 iPad (Kürk Mantolu Madonna): 24 kart, 24 ilgili, şehir okundu, 5 sn. Fatih'in kararıyla açıldı (21.6). Bilinenler: ilan sayfasında stok bilgisi yok (yayındaki ilan var sayılır; satılmış ilan listede kalıyor mu bilinmiyor); kargo/elden kartta yazmıyor; adında iki kitap adı geçen ilan takım sayılmıyor. Arayüzde 'kişiden ilan · şehir' etiketiyle ayrı gösterilecek."
    },
    {
      "id": "n11",
      "ad": "n11 (mağazalar)",
      "tur": "yeni",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.n11.com/arama?q={q}"
      ],
      "ana": "https://www.n11.com/",
      "teshis": false,
      "not": "21.7 aday (Fatih sordu, Ana 8): n11 ana sitesinde mağazaların yeni kitap ilanları. 21.8: Fatih onayıyla AÇILDI (n11 Sahaflar Çarşısı da açık kalır; aynı ilan iki yerden gelirse tekrar ayıklanacak). Kart yapısı henüz kuralda yok; teşhis bir tur daha açık kalır, ham kart rapordan alınıp kart kuralı yazılacak. Bulut buradan engelli (Cloudflare), yalnız iPad."
    },
    {
      "id": "n11sahaf",
      "ad": "n11 Sahaflar Çarşısı",
      "tur": "sahaf",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.n11.com/kitap/sahaflar-carsisi?q={q}"
      ],
      "ana": "https://www.n11.com/",
      "not": "Fatih şans verilsin dedi; 21.6'da açıldı. 21.5 iPad (Kürk Mantolu Madonna): 3 ilan, 7 sn, fiyat okundu, stok kontrolü çalıştı. Kanıtlanmayan: üç ilan da tam 990 TL ve yorumsuz (gerçek fiyat mı, yer tutucu mu?). Asıl değeri başka yerde olmayan kitapta sınanacak.",
      "kondisyonKartta": false
    },
    {
      "id": "sahafpazar",
      "ad": "SahafPazar",
      "tur": "sahaf",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.sahafpazar.com/arama?q={q}"
      ],
      "ana": "https://www.sahafpazar.com/",
      "not": "Kart kuralı gerçek sayfada doğrulandı (Kürk Mantolu Madonna, 21.4). Açıldı (21.5). Sonuçlar birden çok sayfa: 3 sayfaya kadar okunur.",
      "kart": {
        "kap": "article.sp-pcard",
        "ad": ".sp-pcard__title",
        "fiyat": ".sp-pcard__price",
        "kondisyon": ".sp-pcard__cond",
        "satici": ".sp-pcard__vendor"
      },
      "sayfaGez": 3,
      "teshis": false
    },
    {
      "id": "sahafta",
      "ad": "Sahafta",
      "tur": "sahaf",
      "acik": true,
      "durum": "calisan",
      "url": [
        "https://www.sahafta.com/ara?q={q}"
      ],
      "ana": "https://www.sahafta.com/",
      "not": "Kart kuralı gerçek sayfada doğrulandı (Kürk Mantolu Madonna, 21.4: 3 ilan, kondisyon okundu). Açıldı (21.5). 21.7: ürün sayfasında takip düğmesi \"Gelince Haber Ver\" her zaman \"Sepete Ekle\"den önce yazıyor; motor satıştaki ilanları stokta yok sanıp gizliyordu (bulut, gerçek site, 13.11.2026: 3 ilanın 3ü). stokVar kuralı eklendi. Site sahafta.com adresine yönlendiriyor.",
      "kart": {
        "kap": "a.e-book",
        "ad": ".title",
        "fiyat": ".price",
        "kondisyon": ".e-badge-cond"
      },
      "stokVar": "[1-9]\\d* sahafta var|son \\d+ adet"
    }
  ],
  "cikarilanlar": [
    {
      "id": "sahafcom",
      "ad": "sahaf.com",
      "tarih": "2026-11-13",
      "neden": "iPad sınamasında 500 Internal Server Error; arama adresi tahmindi; site otomatik okumaya kapalı (robots). Doğru arama adresi bulunamadı."
    },
    {
      "id": "kolekton",
      "ad": "Kolekton",
      "tarih": "2026-11-13",
      "neden": "Yeni açılmış ('ilk rafları diziliyor'); Gündeste için 0 kitap. Birkaç ay sonra yeniden bakılır. Adres: kolekton.com/search?q="
    }
  ]
};

// =====================================================================
// Kitap Fiyat — ARAMA MOTORU · motor sürümü 21
// Kitap adını sitelerde arar; fiyatı, stoğu ve eşleşmeyi denetler; sonuçları ve sınama raporunu üretir.
// Ekrandan (arayüzden) ve cihazdan bağımsızdır: iPad'de Scriptable, Android'de uygulama kabuğu aynı motoru kullanır.
//
// KULLANIM
//   const motor = MotorKur(T, KURAL);
//   const sonuclar = await motor.siteleriSina("Gündeste", { bildir: r => { /* her site bitince */ } });
//   const metin = motor.raporMetni(sorgu, sonuclar, sureSn, cihazYazisi);
//
// KURAL: kurallar.json içeriği ({ surum, ayarlar, kitapDisi, siteler }).
//
// T — TARAYICI SÖZLEŞMESİ (her cihaz kendi kabuğunda bunu sağlar):
//   T.yeni()      → görünmez yeni bir sekme döndürür: { ac(url), calistir(jsIfadesi), kapat() }
//     ac(url)            : Promise. Sayfa yüklenince çözülür; açılamazsa hata verir (reject).
//     calistir(ifade)    : Promise. Verilen JavaScript ifadesini sayfanın içinde çalıştırır ve sonucunu
//                          (JSON'a çevrilebilir düz nesne/metin/sayı) döndürür. Sayfa değişirken hata verebilir.
//     kapat()            : Sekmeyi kapatır, belleği boşaltır. Kapalı sekmeye sonra çağrı gelmez.
//   T.bekle(ms)   → Promise; ms milisaniye sonra çözülür.
//   Sayfaların cihazın KENDİ internetiyle, gerçek bir tarayıcı motoruyla (iPad: WKWebView, Android: Chrome WebView)
//   açılması şarttır; siteler sunucudan gelen istekleri engelliyor.
//
// Not: Aşağıdaki gövde sürüm 20'den taşındı; girinti bilerek değiştirilmedi (satırlar sürüm 20 ile karşılaştırılabilsin).
// =====================================================================
function MotorKur(T, KURAL) {
const MOTOR_SURUMU = "22.0";
const AYAR = KURAL.ayarlar || {};
const SITE_SURE_SINIRI = AYAR.siteSureSiniri || 90; // saniye; her site için en çok süre (kural kendi "sure" değerini taşıyabilir)
const YAVAS_ESIK = AYAR.yavasEsik || 45; // saniye; süre bitmese de bunu aşan site "yavaş" diye işaretlenir
const STOK_DENEME = AYAR.stokDeneme || 3; // sürüm 21: en ucuzdan başlayarak stoğu denetlenecek en çok ürün sayfası
const SURUM = MOTOR_SURUMU + " · kurallar " + (KURAL.surum || "?");

// Her site kaydına (r) ait açık sekmeler; site bitince ya da süre dolunca kapatılır.
const acikSekmeler = new Map();
// Süresi dolup kapatılan site kayıtları: arkada süren iş bunlar için yeni sekme açarsa sekme hemen kapatılır (bellek sızmasın).
const kapananlar = new WeakSet();
function yeniSekme(r) {
  const s = T.yeni();
  if (r && kapananlar.has(r)) { try { s.kapat(); } catch (e) { } return s; }
  if (r) { if (!acikSekmeler.has(r)) acikSekmeler.set(r, []); acikSekmeler.get(r).push(s); }
  return s;
}
function sekmeleriKapat(r) {
  kapananlar.add(r);
  const liste = acikSekmeler.get(r) || [];
  acikSekmeler.delete(r);
  liste.forEach(s => { try { s.kapat(); } catch (e) { } });
}

// ---------------------------------------------------------------
// Arama sayfasında çalışır: ürün adı, fiyat ve bağlantıları toplar.
// ---------------------------------------------------------------
function aramaSayfasiniOku(sorgu, tur, kartKural) {
  try {
    function sadeYap(x) { return String(x || '').toLocaleLowerCase('tr').replace(/ı/g, 'i').normalize('NFD').replace(/[̀-ͯ]/g, ''); }
    var arananlar = sadeYap(sorgu).split(/[^a-z0-9]+/).filter(function (w) { return w.length >= 3; });
    var out = { title: document.title || '', url: location.href, blocked: '', priceCount: 0, sonucYazisi: '', sonucSayisi: -1, sonucYok: false, benzerSonuc: false, items: [] };
    var body = document.body;
    if (!body) return out;
    var txt = body.innerText || '';
    var low = (out.title + ' ' + txt.slice(0, 4000)).toLowerCase();
    var marks = ['captcha', 'robot musunuz', 'not a robot', 'just a moment', 'checking your browser',
      'access denied', 'erişim engellendi', 'attention required', 'are you a human', 'unusual traffic',
      'verify you are human', 'güvenlik kontrolü',
      // Sürüm 21.7: Amazon'un otomatik erişim engeli sayfası (bulut, 13.11.2026): "Üzgünüz · İsteğinizi işlemeye çalıştığımızda bir hata oluştu"
      'steğinizi işlemeye çalıştığımızda bir hata'];
    for (var i = 0; i < marks.length; i++) { if (low.indexOf(marks[i]) >= 0) { out.blocked = marks[i]; break; } }
    var tek = /(?<![\d%.,])(\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?)\s*(?:TL|₺)|₺\s*(\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?)/i;
    var hepsi = /(?<![\d%.,])\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?\s*(?:TL|₺)|₺\s*\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?/gi;
    var genel = /^(sepete|ekle|incele|detay|satın|hemen al|favori|karşılaştır|haber ver|tümü|daha fazla|hızlı bakış|ücretsiz kargo|kargo|indirim|kampanya|yorum|kağıt kapak|karton kapak|ciltli|ciltsiz|sert kapak|kindle|sesli kitap|e-kitap|diğer formatlar|diğer seçenekler|yeni ve ikinci el|ikinci el|tüm formatlar|daha fazla seçenek|fiyatlar|teslimat|\d[\d,.]* yıldız|5 yıldız|yıldız üzerinden|out of 5|değerlendirme|puan)/i;
    // Türkçe büyük harfler (İ) için önce küçültülür: "İncele" -> "incele"
    function genelMi(x) { return genel.test(String(x).toLocaleLowerCase('tr')); }
    function temiz(x) { return String(x || '').replace(/\s+/g, ' ').trim(); }
    // Sürüm 17: arama sayfasının kendi başlığı ya da sonuç sayısı yazısı kitap adı olamaz.
    // Sürüm 20: sonu "125+ Ürün" ya da "24 ürün" ile biten sayfa başlıkları da (Trendyol) kitap adı değildir.
    function aramaBasligiMi(x) { return /arama sonu[çc]|listelenmektedir|araması|için arama|sonuç bulundu|sonuç listelendi|\d\+?\s*ürün\s*$/.test(String(x).toLocaleLowerCase('tr')); }
    // Sürüm 17: fiyata yapışık indirim oranını ayırır: "%201.599,92 TL" -> "% 1.599,92 TL", "%3645.00 TL" -> "% 45.00 TL"
    var yapisik = /%\s?\d{1,2}(?=[1-9]\d{0,2}(?:[.,]\d{1,3})*\s*(?:TL|₺))/g;
    // Sürüm 20: boşlukla ayrılmış indirim oranı: "% 20 250,00 TL" -> "% 250,00 TL" (aksi halde "20 250,00 TL" tek fiyat sanılırdı)
    var bosluklu = /%\s*\d{1,2}\s+(?=\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?\s*(?:TL|₺))/g;
    // Sürüm 18: ayrıca görünmez/benzer karakterleri sadeleştirir (birleşik harfler, Kiril "х" ve "×" gibi x benzerleri).
    function pcn(x) { return String(x || '').normalize('NFC').replace(/[×хХ✕✖]/g, 'x').replace(yapisik, '% ').replace(bosluklu, '% '); }
    // Sürüm 21.6: fiyatın ardından gelen etiket sözleri ("10 TL Kupon", "150 TL İndirim", "25 TL kazanç")
    var etiketSozu = /^\s*(kupon|indirim|kazanç|kazan|puan|hediye çeki|para puan)/i;
    function etiketTutariMi(el, t, fiyatYazi) {
      var ard = t.slice(t.indexOf(fiyatYazi) + fiyatYazi.length);
      if (etiketSozu.test(ard)) return true;
      if (ard.replace(/\s/g, '') === '') {
        // Fiyat kutunun sonundaysa: bitişik kutuya (ya da en çok 2 üst elemanın bitişiğine) bak
        var x = el;
        for (var d = 0; d < 3 && x && x !== body; d++) {
          var sonraki = x.nextElementSibling;
          if (sonraki) { var sy = temiz(sonraki.textContent).slice(0, 30); if (sy) return etiketSozu.test(sy); }
          x = x.parentElement;
          if (x && temiz(x.textContent).length > 60) break;
        }
      }
      var once = t.slice(0, t.indexOf(fiyatYazi));
      if (/kupon\s*:?\s*$/i.test(once)) return true;
      if (!once.trim() && el.previousElementSibling && /^\s*kupon\s*:?\s*$/i.test(el.previousElementSibling.textContent || '')) return true;
      return false;
    }
    // Sürüm 21.6: kart kuralıyla okunan fiyat yazısından etiket tutarlarını siler
    var etiketTutari = /(?<![\d%.,])\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?\s*(?:TL|₺)\s*(?:kupon|indirim|kazanç|kazan|puan)|kupon\s*:?\s*\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?\s*(?:TL|₺)/gi;
    // Sürüm 17: taksit satırı ("Peşin fiyatına 3 x 533 TL") fiyat değildir.
    var taksitSatiri = /\d\s*[x×]\s*[\d.,]+\s*(?:TL|₺)|peşin fiyat/i;

    // Kartın tamamı tek bağlantıysa (bağlantı yazısında fiyat da varsa) kitap adını kartın içinden bulur:
    // başlık etiketleri, "name/title" sınıfları, title/aria-label, resim açıklaması. Aranan kelimeleri en çok içereni seçer.
    function adBul(a) {
      var adaylar = [a.getAttribute('title'), a.getAttribute('aria-label')];
      var ic = a.querySelectorAll('h1,h2,h3,h4,h5,[itemprop=name],[class*="name"],[class*="Name"],[class*="title"],[class*="Title"],[class*="baslik"],[class*="desc"]');
      for (var i = 0; i < ic.length && i < 30; i++) adaylar.push(ic[i].textContent);
      var img = a.querySelector('img[alt]');
      if (img) adaylar.push(img.getAttribute('alt'));
      // Son çare: kartın içindeki yalın yazılar (içinde başka etiket olmayan kısa metinler)
      var yapraklar = a.querySelectorAll('div,span,p,b,strong,td,li');
      for (var y = 0, n = 0; y < yapraklar.length && n < 40; y++) {
        if (yapraklar[y].children.length) continue;
        n++;
        adaylar.push(yapraklar[y].textContent);
      }
      var enIyiAd = '', enIyiPuan = -1;
      for (var j = 0; j < adaylar.length; j++) {
        var c = temiz(adaylar[j]);
        if (c.length < 4 || c.length > 220 || tek.test(c) || genelMi(c) || aramaBasligiMi(c)) continue;
        var p = Math.min(c.length, 80) / 10, sc = sadeYap(c);
        for (var w = 0; w < arananlar.length; w++) { if (sc.indexOf(arananlar[w]) >= 0) p += 100; }
        if (p > enIyiPuan) { enIyiPuan = p; enIyiAd = c; }
      }
      // Aranan kelimelerden hiçbirini içermeyen yazı (yayınevi, "90 günün en düşük fiyatı" gibi) kitap adı sayılmaz
      if (arananlar.length && enIyiPuan < 100) return '';
      return enIyiAd;
    }
    // Sürüm 17: ad kartın içinden tahmin edildiyse bağlantının kendi kimliği (adres, başlık) bu kitabı doğrulamalı.
    // Doğrulayacak bir şey yoksa (adres yalnız numara) ürün kabul edilir; adres ya da başlık BAŞKA bir kitabı söylüyorsa elenir.
    // Sürüm 21 · 3. dilim: türetilen ad aranan adın KENDİSİYSE (ör. sayfa başlığı "Gündeste") bu ad hiçbir şey kanıtlamaz;
    // o zaman bağlantının adresi ya da başlığı aranan kelimeleri OLUMLU olarak taşımalı. Kanıt yoksa ürün elenir.
    function kanitla(a, turetildi, ad) {
      if (!turetildi || !arananlar.length) return true;
      var tamAyni = sadeYap(ad).replace(/[^a-z0-9]+/g, ' ').trim() === sadeYap(sorgu).replace(/[^a-z0-9]+/g, ' ').trim();
      var kaynak = [];
      var ti = a.getAttribute('title');
      if (ti && ti.length >= 8 && !genelMi(ti)) kaynak.push(ti);
      var al = a.getAttribute('aria-label');
      if (al && al.length >= 8 && !genelMi(al)) kaynak.push(al);
      var yol = a.getAttribute('href') || '';
      yol = yol.split('?')[0].split('#')[0];
      try { yol = decodeURIComponent(yol); } catch (e) { }
      var yolYazi = yol.replace(/[^A-Za-zÇĞİÖŞÜçğıöşü]+/g, ' ').trim();
      if (yolYazi.replace(/\s/g, '').length >= 15) kaynak.push(yolYazi);
      if (!kaynak.length) return !tamAyni;
      var s = sadeYap(kaynak.join(' ')), tut = 0;
      for (var w = 0; w < arananlar.length; w++) { if (s.indexOf(arananlar[w]) >= 0) tut++; }
      return tut >= Math.ceil(arananlar.length * 0.6);
    }
    // Sayfanın yazdığı sonuç sayısı ve "sonuç yok" yazısı
    var ilkMetin = txt.slice(0, 6000);
    var ilkKucuk = ilkMetin.toLocaleLowerCase('tr');
    var sm = ilkMetin.match(/(\d[\d.]*)\s*(?:adet\s*)?(?:sonuç|ürün)\s*(?:bulundu|listelendi|listelenmektedir|bulunmaktadır)/i) ||
      ilkMetin.match(/toplam sonuç\s*:?\s*(\d[\d.]*)/i);
    if (sm) { out.sonucYazisi = sm[0].slice(0, 60); out.sonucSayisi = parseInt(sm[1].replace(/\./g, ''), 10); }
    // Sürüm 21.4: "sonuç yok" yazısı daha geniş alanda aranır (BKM'de uzun menü ve çerez yazısı yazıyı ilk 6000 harfin dışına itiyor [TAHMİN]);
    // n11 ("Aradığını bulamadık") ve "0 kitap bulundu / kitap bulunamadı" kalıpları eklendi.
    var yokKucuk = txt.slice(0, 15000).toLocaleLowerCase('tr');
    if (/(?<![\d.,])0\s*sonuç|(?<![\d.,])0\s*ilan bulundu|(?<![\d.,])0\s*kitap bulundu|listelenecek ürün bulunamadı|sonuç bulunamadı|ürün bulunamadı|eşleşen ürün bulunamadı|ilan bulunamadı|kitap bulunamadı|aradığını bulamadık|aradığınızı bulamadık|sonuç yok/.test(yokKucuk)) out.sonucYok = true;
    // Sürüm 20: sayfa "bu arama için sonuç yok, benzer bir arama için şunlar listeleniyor" diyorsa listelenenler bu aramanın sonucu değildir (Pazarama).
    if (/araması için sonuç bulunamadı|için sonuçlar listeleniyor/.test(ilkKucuk)) out.benzerSonuc = true;

    // Bazı siteler ürünleri sayfa kaydırılınca yükler: bir kez yarıya kadar kaydır.
    try { if (!window.__kaydirildi) { window.__kaydirildi = 1; window.scrollTo(0, Math.floor(document.body.scrollHeight / 2)); } } catch (e) { }
    // Sürüm 19: fiyatı arama kartında olmayan siteler (Pandora): adı bu kitapla eşleşen başlıklı bağlantıları topla.
    function fiyatsizKartlar() {
      var lis = [], gor = {};
      var hs = body.querySelectorAll('h2,h3,h4,[itemprop=name]');
      for (var hi = 0; hi < hs.length && hi < 400 && lis.length < 5; hi++) {
        var ht = temiz(hs[hi].textContent);
        if (ht.length < 3 || ht.length > 220 || genelMi(ht) || aramaBasligiMi(ht)) continue;
        var hs_ = sadeYap(ht), hut = 0;
        for (var hw = 0; hw < arananlar.length; hw++) { if (hs_.indexOf(arananlar[hw]) >= 0) hut++; }
        if (!arananlar.length || hut < Math.ceil(arananlar.length * 0.6)) continue;
        var ha = hs[hi].closest('a[href]');
        if (!ha) continue;
        var hh = ha.href;
        if (gor[hh] || /^\s*(javascript:|#)|sepet|cart|favori/i.test(ha.getAttribute('href') || '')) continue;
        gor[hh] = 1;
        lis.push({ title: ht.slice(0, 140), href: hh, extra: temiz(ha.textContent).slice(0, 160) });
      }
      return lis;
    }
    var tum = pcn(txt).match(hepsi);
    out.priceCount = tum ? tum.length : 0;
    if (!out.priceCount) { out.fiyatsiz = fiyatsizKartlar(); return out; }
    var onceYeni = /kindle|e-kitap|e-book|ebook|dijital|sesli|audible|mp3|kargo|teslimat|taksit|aylık|ikinci el|kullanılmış|başlayan|kazanç|kazancınız|tasarruf|indirim tutarı|peşin fiyat|x\s*$/;
    var onceSahaf = /kindle|e-kitap|e-book|ebook|dijital|sesli|audible|mp3|kargo|teslimat|taksit|aylık|başlayan|kazanç|kazancınız|tasarruf|indirim tutarı|peşin fiyat|x\s*$/;
    var seen = {};
    var yokListesi = ['tükendi', 'tükenmiştir', 'stokta yok', 'stok yok', 'stokta bulunmuyor',
      'stokta kalmadı', 'temin edilemiyor', 'tedarik edilemiyor', 'satışta değil', 'satışa kapalı',
      'gelince haber ver', 'stoğa girince', 'şu anda mevcut değil', 'currently unavailable',
      'out of stock', 'sold out', 'satıldı', 'tedarik bekleniyor', 'haber ver', 'temin edilemedi'];
    // Sürüm 21.4 · SİTEYE ÖZEL KART KURALI (kurallar.json'da sitenin "kart" alanı): kartın kabı, adı, fiyatı, kondisyonu ve
    // satıcısı seçicilerle (CSS) okunur. Böylece ad yerine satıcı adı ya da sayfa başlığı okunmaz. Sayfada kap hiç yoksa
    // (site görünümünü değiştirdiyse) genel okuyucuya düşülür; arama tamamen ölmez. Kural uzaktan (GitHub) güncellenebilir.
    function kartSec(kp, s) { if (!s) return null; try { return kp.querySelector(s); } catch (e) { return null; } }
    if (kartKural && kartKural.kap) {
      var kaplar = [];
      try { kaplar = body.querySelectorAll(kartKural.kap); } catch (e) { kaplar = []; }
      if (kaplar.length) out.kartKurali = kaplar.length;
      for (var kx = 0; kx < kaplar.length && out.items.length < 120; kx++) {
        var kp = kaplar[kx];
        var adEl = kartSec(kp, kartKural.ad);
        var kad = temiz(adEl ? adEl.textContent : '');
        if (kad.length < 2 || kad.length > 220) continue;
        var fEl = kartSec(kp, kartKural.fiyat);
        var fYazi = pcn(temiz((fEl || kp).textContent));
        if (taksitSatiri.test(fYazi) && fEl) fYazi = fYazi.replace(taksitSatiri, ' ');
        fYazi = fYazi.replace(etiketTutari, ' ');
        var kfiy = fYazi.match(hepsi) || [];
        if (!kfiy.length) continue;
        var kl2 = kartSec(kp, kartKural.link) || (adEl && (adEl.closest('a[href]') || adEl.querySelector('a[href]'))) ||
          (kp.tagName === 'A' && kp.getAttribute('href') ? kp : null) || kp.querySelector('a[href]');
        var kYazi = pcn(temiz(kp.textContent));
        var kKucuk = kYazi.toLocaleLowerCase('tr');
        var kStokYok = false;
        for (var ky2 = 0; ky2 < yokListesi.length; ky2++) { if (kKucuk.indexOf(yokListesi[ky2]) >= 0) { kStokYok = true; break; } }
        var kdEl = kartSec(kp, kartKural.kondisyon), stEl = kartSec(kp, kartKural.satici), seEl = kartSec(kp, kartKural.sehir);
        var kKond = kdEl ? temiz(kdEl.textContent.replace(/[★☆✩✪⭐]/g, '')).toLocaleLowerCase('tr') : '';
        var kSat = stEl ? temiz(stEl.textContent) : '';
        var kHref = kl2 ? kl2.href : location.href;
        var kAnahtar = 'kural|' + kHref + '|' + kfiy[0];
        if (seen[kAnahtar]) continue;
        seen[kAnahtar] = 1;
        out.items.push({ title: kad.slice(0, 140), prices: kfiy, href: kHref, extra: kYazi.slice(0, 200), stokYok: kStokYok,
          ekitap: /e-kitap|e-book|ebook|kindle|sesli kitap|audible/.test(kKucuk), kanit: true, turetildi: false, linksiz: !kl2,
          supheli: false, ctx: '', kondisyon: kKond.slice(0, 30), satici: kSat.slice(0, 60), sehir: seEl ? temiz(seEl.textContent).slice(0, 60) : '' });
      }
    }
    var els = body.querySelectorAll('span,div,p,strong,b,ins,em,small,td,li,a');
    var limit = Math.min(els.length, 15000);
    for (var j = 0; !out.kartKurali && j < limit && out.items.length < 120; j++) {
      var el = els[j];
      if (el.children.length > 3) continue;
      var t = pcn((el.textContent || '').replace(/\s+/g, ' ').trim());
      if (t.length < 3 || t.length > 45) continue;
      if (taksitSatiri.test(t)) continue;
      // Sürüm 21.5: "10 TL Kupon", "40 TL kupon" gibi etiketler fiyat değildir (Trendyol'da 10,00 TL hatası).
      if (/kupon|indirim kodu|puan kazan/i.test(t)) continue;
      var m = t.match(tek);
      if (!m) continue;
      // Sürüm 21.6: fiyatın hemen ardından (aynı kutuda ya da bitişik kutuda) "kupon/indirim" geliyorsa bu bir etiket tutarıdır, fiyat değil
      // ("10 TL" + ayrı kutuda "Kupon", "Sepette 150 TL İndirim"). Fiyattan hemen önce yalnız "Kupon" yazan kutu da aynı anlama gelir.
      if (etiketTutariMi(el, t, m[0])) continue;
      var kart = el, link = null, linkYazi = '', enIyi = -1, linkTur = false;
      for (var k = 0; k < 9 && kart && kart !== body; k++) {
        if (k > 0) kart = kart.parentElement;
        if (!kart || kart === body) break;
        var as = kart.tagName === 'A' ? [kart] : kart.querySelectorAll('a[href]');
        for (var a = 0; a < as.length; a++) {
          var at = temiz(as[a].textContent);
          if (at.length < 4) at = temiz(as[a].getAttribute('title') || at);
          var ah = as[a].getAttribute('href') || '';
          // Bağlantı yazısı kitap adı olamıyorsa (fiyat içeriyor, çok uzun, "İncele" gibi düğme yazısı ya da arama başlığı) adı kartın içinden al
          var turetildi = false;
          if (at.length < 4 || at.length > 220 || tek.test(at) || genelMi(at) || aramaBasligiMi(at)) { at = adBul(kart); turetildi = true; }
          if (at.length < 4 || at.length > 220 || tek.test(at) || genelMi(at) || aramaBasligiMi(at)) continue;
          if (/^\s*(javascript:|#)|sepet|cart|basket|favori|wishlist|karsilastir/i.test(ah)) continue;
          // Sürüm 21.6: "oy ver", yorum ve puan bağlantıları ürün bağlantısı değildir (Halk Kitabevi: /p/Votes?...&item_id=...)
          if (/\/votes?\b|vote_value|\/oy[-_]?ver|yorum[-_]?yaz|write[-_]?review|\/rating\b/i.test(ah)) continue;
          if (/yazar|author|writer|yayinevi|yayinci|publisher|marka|brand|kategori|category|field-author|\/e\//i.test(ah)) continue;
          if (/sahaf\d+|magaza|mağaza|satici|satıcı|seller|store|dukkan|dükkan|\/shop\//i.test(ah)) continue;
          var puan = Math.min(at.length, 80) / 10;
          var sadeAt = sadeYap(at);
          for (var w = 0; w < arananlar.length; w++) { if (sadeAt.indexOf(arananlar[w]) >= 0) puan += 100; }
          if (/kitap\d+|urun|product|\/dp\/|-p-\d+|\d{5,}/i.test(ah)) puan += 10;
          if (turetildi) puan -= 5; // gerçek kitap adı bağlantısı varsa o tercih edilir
          if (puan > enIyi) { enIyi = puan; link = as[a]; linkYazi = at; linkTur = turetildi; }
        }
        if (link) break;
      }
      // Sürüm 18: bazı kartlarda (Akakçe, tek satıcılı ürün) hiç bağlantı yoktur; ad kartın başlığından alınır.
      var linksizAd = '';
      if (!link) {
        var kk = el;
        for (var lv = 0; lv < 6 && kk; lv++) {
          kk = kk.parentElement;
          if (!kk || kk === body) break;
          var kt = pcn(kk.textContent || '');
          if (kt.length > 1500 || (kt.match(hepsi) || []).length > 3) break; // listeye çıktık
          var bs = kk.querySelectorAll('h2,h3,h4,h5,[itemprop=name]');
          for (var bi = 0; bi < bs.length && bi < 5; bi++) {
            var bad = temiz(bs[bi].textContent);
            if (bad.length < 4 || bad.length > 220 || tek.test(bad) || genelMi(bad) || aramaBasligiMi(bad)) continue;
            var sb = sadeYap(bad), tutB = 0;
            for (var wb = 0; wb < arananlar.length; wb++) { if (sb.indexOf(arananlar[wb]) >= 0) tutB++; }
            if (arananlar.length && tutB < Math.ceil(arananlar.length * 0.6)) continue;
            linksizAd = bad; break;
          }
          if (linksizAd) { kart = kk; break; }
        }
        if (!linksizAd) continue;
      }
      var anahtar = link ? link.href : 'linksiz|' + linksizAd + '|' + m[0];
      var kanit = link ? kanitla(link, linkTur, linkYazi) : true;
      var fiyatlar = [m[0]], ekitap = false, supheli = false, ctx = '';
      var kartYazi = pcn((kart.textContent || '').replace(/\s+/g, ' '));
      if (kartYazi.length < 4000) {
        var kf = [], re = new RegExp(hepsi.source, 'gi'), mm, sonBitis = 0, kartFiyatSay = 0, ilkIdx = -1;
        var kl = kartYazi.toLocaleLowerCase('tr');
        while ((mm = re.exec(kartYazi))) {
          kartFiyatSay++;
          if (ilkIdx < 0) ilkIdx = mm.index;
          // Sürüm 21.5: "ücretsiz kargo / kargo bedava" etiketi fiyatı kargo ücreti yapmaz; önce bu sözler silinir (n11 hatası).
          var once = kl.slice(Math.max(sonBitis, mm.index - 120), mm.index).replace(/ücretsiz kargo|kargo bedava|bedava kargo|kargo ücretsiz|bugün kargoda|yarın kargoda|hızlı kargo/g, ' ');
          var sonra = kl.slice(mm.index + mm[0].length, mm.index + mm[0].length + 20);
          sonBitis = mm.index + mm[0].length;
          // Sürüm 19: sahaf sitelerinde her ilanda "İkinci El" yazar; orada bu kelime fiyat atlama sebebi değildir.
          if ((tur === 'sahaf' ? onceSahaf : onceYeni).test(once)) continue;
          if (/^\s*(kargo|teslimat|taksit|'?den başlayan|x\s|kupon|indirim|kazanç|kazan|puan)/.test(sonra)) continue;
          kf.push(mm[0]);
        }
        // Teşhis: kartta ilk fiyatın önündeki 6 karakter ve kodları (gizli/benzer karakter var mı?)
        if (ilkIdx >= 0) { var onceki6 = kartYazi.slice(Math.max(0, ilkIdx - 6), ilkIdx); ctx = onceki6 + ' [' + Array.prototype.map.call(onceki6, function (ch) { return ch.charCodeAt(0).toString(16); }).join(' ') + ']'; }
        if (kf.length) fiyatlar = kf;
        // Karttaki bütün fiyatlar e-kitap/sesli kitap sayıldıysa bu ürün basılı kitap değildir
        else if (/e-kitap|e-book|ebook|kindle|dijital|sesli kitap|audible/.test(kl)) ekitap = true;
        // Sürüm 18: kartın bütün fiyatları taksit/kargo vb. sayıldıysa elimizdeki fiyat güvenilmez (Hepsiburada "3 x 533 TL" hatası):
        // ürün şüpheli işaretlenir, fiyat gösterilmez; aynı ürünün asıl fiyat alanı sonra bulunursa şüpheli kayıt onunla değişir.
        else if (kartFiyatSay > 0) supheli = true;
      } else if (link && !link.contains(el)) {
        // Sürüm 21.6: fiyat ürün bağlantısının dışında ve ortak kap çok büyük (4000+ harf): bu fiyatın bu ürüne ait olduğu
        // denetlenemez (Trendyol'da kupon tutarı böyle ürüne yapıştı). Şüpheli sayılır; aynı ürünün asıl fiyatı bulunursa onunla değişir.
        supheli = true; ctx = 'büyük kap, fiyat bağlantı dışında';
      }
      var ek = kartYazi.length < 700 ? kartYazi.trim().slice(0, 200) : '';
      var stokYok = false;
      var kartFiyatSayisi = (kartYazi.match(hepsi) || []).length;
      if (kartYazi.length < 1500 && kartFiyatSayisi <= 4) {
        var ky = kartYazi.toLocaleLowerCase('tr');
        var yokIsaret = ['tükendi', 'tükenmiştir', 'stokta yok', 'stok yok', 'stokta bulunmuyor',
          'stokta kalmadı', 'temin edilemiyor', 'tedarik edilemiyor', 'satışta değil', 'satışa kapalı',
          'gelince haber ver', 'stoğa girince', 'şu anda mevcut değil', 'currently unavailable',
          'out of stock', 'sold out', 'satıldı', 'tedarik bekleniyor', 'haber ver', 'temin edilemedi'];
        for (var y = 0; y < yokIsaret.length; y++) { if (ky.indexOf(yokIsaret[y]) >= 0) { stokYok = true; break; } }
        if (/stok aded[iı]\s*:?\s*0(?!\d)/.test(ky)) stokYok = true;
      }
      // Sürüm 21 · ilan alanları: sahaf ilanında kondisyon ("★★★★☆ Çok İyi" ya da "Kondisyon: İyi") ve satıcı adı (satıcı/mağaza bağlantısı).
      // Okunamazsa boş kalır. Şehir ve kargo henüz okunmuyor (alanları sonuç kaydında boş durur).
      var kondisyon = '', satici = '';
      if (kartYazi.length < 1500) {
        var kdl = kartYazi.toLocaleLowerCase('tr');
        // Yıldızların hemen ardından gelen söz kondisyondur (ardından boşluksuz satıcı adı gelebilir: "Çok İyiÖrnek Sahaf").
        var kdKal = '(yeni gibi|çok iyi|iyi|orta|idare eder|yıpranmış|kötü|yeni)';
        var kd = kdl.match(new RegExp('(?:[★☆✩✪⭐]\\s*){2,}' + kdKal)) || kdl.match(new RegExp('kondisyon(?:u)?\\s*:?\\s*' + kdKal + '(?![a-zçğıöşü])'));
        if (kd) kondisyon = kd[1];
        var sa = kart.querySelectorAll ? kart.querySelectorAll('a[href]') : [];
        for (var si2 = 0; si2 < sa.length && si2 < 20; si2++) {
          if (!/sahaf\d+|magaza|mağaza|satici|satıcı|seller|\/store\/|dukkan|dükkan|\/shop\//i.test(sa[si2].getAttribute('href') || '')) continue;
          var sad = temiz(sa[si2].textContent || sa[si2].getAttribute('title') || '');
          if (sad.length >= 2 && sad.length <= 60 && !tek.test(sad) && !genelMi(sad)) { satici = sad; break; }
        }
        // Sürüm 21.6: Kitantik kartı satıcıyı "İkinci El - <satıcı> <fiyat>" diye yazıyor
        // (Türkçe "İ" yüzünden eşleştirme küçük harfli yazıda yapılır, ad özgün yazıdan alınır.)
        if (!satici) {
          var ie = kdl.match(/ikinci el\s*-\s*([^\d₺|]{2,60}?)\s*(?=\d|₺|$)/);
          if (ie && kdl.length === kartYazi.length) { var ieBas = ie.index + ie[0].indexOf(ie[1]); satici = temiz(kartYazi.substr(ieBas, ie[1].length)); }
        }
      }
      var yeni = { title: (link ? linkYazi : linksizAd).slice(0, 140), prices: fiyatlar, href: link ? link.href : location.href, extra: ek, stokYok: stokYok, ekitap: ekitap,
        kanit: kanit, turetildi: link ? linkTur : false, linksiz: !link, supheli: supheli, ctx: ctx, kondisyon: kondisyon, satici: satici };
      var eski = seen[anahtar];
      if (eski) { if (eski.supheli && !yeni.supheli) { for (var an in yeni) { eski[an] = yeni[an]; } } continue; }
      seen[anahtar] = yeni;
      out.items.push(yeni);
    }
    // Sürüm 20: bu kitapla eşleşen adlı bir ürün okunamadıysa (başka kitapların fiyatlı kartları okunmuş olsa bile) fiyatsız kartlara bakılır.
    var eslesenVar = false;
    for (var ii = 0; ii < out.items.length && !eslesenVar; ii++) {
      var si = sadeYap(out.items[ii].title), tutI = 0;
      for (var wi = 0; wi < arananlar.length; wi++) { if (si.indexOf(arananlar[wi]) >= 0) tutI++; }
      if (arananlar.length && tutI >= Math.ceil(arananlar.length * 0.6)) eslesenVar = true;
    }
    if (!eslesenVar) out.fiyatsiz = fiyatsizKartlar();
    return out;
  } catch (e) { return { error: String(e) }; }
}

// ---------------------------------------------------------------
// Ürünün kendi sayfasında çalışır: satın alınabilir mi? (sürüm 13'teki ile aynı mantık)
// ---------------------------------------------------------------
// Sürüm 21.7: varKalip (kurallar.json "stokVar", siteye özel): sayfada bu kalıp geçiyorsa ürün stokta sayılır.
// Gerekçe: Sahafta'nın her ürün sayfasında bir takip düğmesi ("Gelince Haber Ver") var ve "Sepete Ekle"den önce yazıyor;
// genel kural bunu "stokta yok" sanıp satıştaki ilanları gizliyordu. Kalıp siteye özel olduğu için başka siteleri etkilemez.
function urunSayfasiniOku(varKalip) {
  try {
    var body = document.body;
    if (!body) return { durum: 'bilinmiyor', neden: 'sayfa boş' };
    var t = (body.innerText || '').toLocaleLowerCase('tr').replace(/\s+/g, ' ');
    if (t.length < 200) return { durum: 'bilinmiyor', neden: 'sayfa çok kısa' };
    if (varKalip) {
      var vk = null;
      try { vk = t.match(new RegExp(varKalip, 'i')); } catch (e) { }
      if (vk) return { durum: 'var', neden: 'site kuralı: ' + vk[0], title: document.title || '' };
    }
    var yok = ['tükendi', 'tükenmiştir', 'stokta yok', 'stok yok', 'stokta bulunmuyor', 'stokta kalmadı',
      'temin edilemiyor', 'tedarik edilemiyor', 'tedarik bekleniyor', 'satışta değil', 'satışa kapalı',
      'haber ver', 'stoğa girince', 'şu anda mevcut değil', 'currently unavailable', 'out of stock',
      'sold out', 'satıldı', 'temin edilemedi', 'ürün satıştan kaldırıldı'];
    var var_ = ['sepete ekle', 'sepete at', 'hemen al', 'add to cart', 'buy now', 'sepete git'];
    function ilk(liste) {
      var en = -1, kelime = '';
      for (var i = 0; i < liste.length; i++) {
        var k = t.indexOf(liste[i]);
        if (k >= 0 && (en < 0 || k < en)) { en = k; kelime = liste[i]; }
      }
      return { yer: en, kelime: kelime };
    }
    var yi = ilk(yok), vi = ilk(var_);
    var sifir = t.search(/stok aded[iı]\s*:?\s*0(?!\d)/);
    if (sifir >= 0 && (yi.yer < 0 || sifir < yi.yer)) yi = { yer: sifir, kelime: 'stok adedi 0' };
    var durum = 'bilinmiyor';
    if (vi.yer < 0 && yi.yer >= 0) durum = 'yok';
    else if (yi.yer < 0 && vi.yer >= 0) durum = 'var';
    else if (yi.yer >= 0 && vi.yer >= 0) durum = yi.yer < vi.yer ? 'yok' : 'var';
    var neden = durum === 'var' ? vi.kelime : (durum === 'yok' ? yi.kelime : 'işaret bulunamadı');
    return { durum: durum, neden: neden, title: document.title || '' };
  } catch (e) { return { durum: 'bilinmiyor', neden: String(e) }; }
}

// ---------------------------------------------------------------
// Ana sayfada çalışır: sitenin kendi arama kutusunu bulur, yazar ve aratır. (sürüm 13'teki ile aynı)
// ---------------------------------------------------------------
function aramaKutusunaYaz(sorgu) {
  try {
    var kutu = null, skor = 0;
    var girdiler = document.querySelectorAll('input');
    for (var i = 0; i < girdiler.length; i++) {
      var g = girdiler[i];
      var tip = (g.getAttribute('type') || 'text').toLowerCase();
      if (['text', 'search', ''].indexOf(tip) < 0) continue;
      var bilgi = ((g.name || '') + ' ' + (g.id || '') + ' ' + (g.placeholder || '') + ' ' +
        (g.className || '') + ' ' + (g.getAttribute('aria-label') || '')).toLowerCase();
      var s = 0;
      if (tip === 'search') s += 3;
      if (/search|arama|ara|query|keyword|kelime|filter_name|field-keywords|(^|\s)q(\s|$)/.test(bilgi)) s += 2;
      if (s > skor) { skor = s; kutu = g; }
    }
    if (!kutu) return 'kutu-yok';
    var yazici = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    kutu.focus();
    yazici.call(kutu, sorgu);
    kutu.dispatchEvent(new Event('input', { bubbles: true }));
    kutu.dispatchEvent(new Event('change', { bubbles: true }));
    var form = kutu.form;
    if (form) {
      var dugme = form.querySelector('button[type=submit], input[type=submit], button');
      if (dugme) { dugme.click(); return 'dugme'; }
      if (form.requestSubmit) form.requestSubmit(); else form.submit();
      return 'form';
    }
    var ust = kutu.parentElement;
    for (var d = 0; d < 5 && ust; d++) {
      var adaylar = Array.prototype.slice.call(ust.querySelectorAll('button, input[type=submit], input[type=button], [role=button], a'))
        .concat(Array.prototype.slice.call(ust.querySelectorAll('span, div, i')));
      for (var c = 0; c < adaylar.length; c++) {
        var b = adaylar[c];
        if (b === kutu || b.contains(kutu)) continue;
        var bt = ((b.textContent || '') + ' ' + (b.getAttribute('aria-label') || '') + ' ' + (b.getAttribute('title') || '') + ' ' +
          (b.getAttribute('class') || '') + ' ' + (b.getAttribute('id') || '') + ' ' + (b.value || '')).toLowerCase().trim();
        if ((b.textContent || '').trim().length > 20) continue;
        if (/(^|\s|-)(ara|search|bul|arama)(\s|-|$)|search-?(btn|button|icon)|btn-?search|fa-search/.test(bt)) { b.click(); return 'yakin-dugme'; }
      }
      ust = ust.parentElement;
    }
    ['keydown', 'keypress', 'keyup'].forEach(function (t) {
      kutu.dispatchEvent(new KeyboardEvent(t, { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
    });
    return 'enter';
  } catch (e) { return 'hata: ' + e; }
}

// ---------------------------------------------------------------
// Sonuç okunamazsa: sayfada ne göründüğünü kısaca alır (teşhis için).
// ---------------------------------------------------------------
function sayfaOzeti() {
  try {
    var t = ((document.body && document.body.innerText) || '').replace(/\s+/g, ' ').trim();
    return { title: document.title || '', url: location.href, metin: t.slice(0, 600) };
  } catch (e) { return { hata: String(e) }; }
}

// ---------------------------------------------------------------
// Akakçe ürün sayfasında çalışır: satıcı satırlarını ve "N satıcı" yazısını okur.
// ---------------------------------------------------------------
function akakceSaticilar() {
  try {
    var fiyat = /\d{1,3}(?:[.\s]\d{3})*(?:,\d{1,2})?\s*(?:TL|₺)/;
    var satirlar = [];
    var lis = Array.prototype.slice.call(document.querySelectorAll('li')).filter(function (x) { return /satıcıya git/i.test(x.innerText || ''); });
    if (!lis.length) lis = document.querySelectorAll('li');
    for (var i = 0; i < lis.length && satirlar.length < 12; i++) {
      if (lis[i].querySelector('li')) continue;
      var t = (lis[i].innerText || '').replace(/\s+/g, ' ').trim();
      if (t.length < 10 || t.length > 300 || !fiyat.test(t)) continue;
      satirlar.push(t.slice(0, 160));
    }
    var m = ((document.body && document.body.innerText) || '').match(/(\d[\d.]*)\s*satıcı/i);
    return { satir: satirlar, saticiYazisi: m ? m[0] : '', title: document.title || '', url: location.href };
  } catch (e) { return { satir: [], hata: String(e) }; }
}

// ---------------------------------------------------------------
// Teşhis: ürünler ayrılamadıysa ilk 3 fiyatın çevresindeki yapıyı (etiket.sınıf) ve en yakın bağlantıyı döker.
// Siteye özel kural yazmak için kullanılır.
// ---------------------------------------------------------------
function kartYapisi() {
  try {
    var tek = /(?<![\d%.,])(\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?)\s*(?:TL|₺)|₺\s*(\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?)/i;
    var out = { kartlar: [], fiyatSinifi: [] };
    var gorulen = {};
    var els = document.body.querySelectorAll('span,div,p,strong,b,ins,em,small,td,li,a');
    for (var i = 0; i < els.length && out.kartlar.length < 3; i++) {
      var el = els[i];
      if (el.children.length > 3) continue;
      var t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (t.length < 3 || t.length > 45 || !tek.test(t)) continue;
      var yol = [], x = el;
      for (var k = 0; k < 7 && x && x !== document.body; k++) {
        var c = (x.getAttribute('class') || '').trim().split(/\s+/).slice(0, 2).join('.').slice(0, 40);
        yol.push(x.tagName.toLowerCase() + (c ? '.' + c : '') + '(' + (x.textContent || '').length + ')');
        x = x.parentElement;
      }
      var a = el.closest('a'), y = el;
      for (var m = 0; m < 7 && y && !a; m++) { y = y.parentElement; if (y) a = y.querySelector('a[href]'); }
      var bilgi = a ? ('href=' + (a.getAttribute('href') || '').slice(0, 70) + ' | yazı=' + (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 90) +
        ' | title=' + (a.getAttribute('title') || '').slice(0, 50)) : 'bağlantı yok';
      if (gorulen[bilgi]) continue;
      gorulen[bilgi] = 1;
      out.kartlar.push({ fiyat: t, yol: yol.join(' < '), baglanti: bilgi });
    }
    var ps = document.querySelectorAll('[class*="price"],[class*="Price"],[class*="fiyat"],[class*="Fiyat"]');
    for (var j = 0; j < ps.length && out.fiyatSinifi.length < 4; j++) {
      var z = (ps[j].textContent || '').replace(/\s+/g, ' ').trim();
      if (z) out.fiyatSinifi.push(z.slice(0, 50));
    }
    return out;
  } catch (e) { return { hata: String(e) }; }
}

// ---------------------------------------------------------------
// Sürüm 17 teşhisi: ürünler hiç ayrılamayan sayfanın sadeleştirilmiş HTML parçası
// (yalnız class, href, title, alt, id; script/stil/üst-alt menü atılır). Siteye özel kural yazmak için.
// ---------------------------------------------------------------
function htmlDokum(sorgu) {
  try {
    function sadeY(x) { return String(x || '').toLocaleLowerCase('tr').replace(/ı/g, 'i').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }
    var klon = document.body.cloneNode(true);
    var cop = klon.querySelectorAll('script,style,svg,noscript,iframe,link,meta,path,picture,source');
    for (var i = 0; i < cop.length; i++) { if (cop[i].parentNode) cop[i].parentNode.removeChild(cop[i]); }
    var hepsi = klon.querySelectorAll('*');
    var tut = { 'class': 1, href: 1, title: 1, alt: 1, id: 1 };
    for (var j = 0; j < hepsi.length; j++) {
      var at = Array.prototype.slice.call(hepsi[j].attributes);
      for (var k = 0; k < at.length; k++) {
        var ad = at[k].name;
        if (!tut[ad]) hepsi[j].removeAttribute(ad);
        else if (at[k].value.length > 60) hepsi[j].setAttribute(ad, at[k].value.slice(0, 60));
      }
    }
    var parcalar = [];
    // 1) Sayfa numaraları (sonuç birden çok sayfaya bölünmüşse sonraki sayfanın adresi için)
    var sg = klon.querySelectorAll('[class*="pagina"],[class*="Pagina"],[class*="pager"],[class*="Pager"],[class*="sayfala"],[class*="paging"]');
    for (var s = 0, n = 0; s < sg.length && n < 2; s++) {
      var sh = sg[s].outerHTML.replace(/\s+/g, ' ');
      if (sh.length > 3000) continue;
      parcalar.push('SAYFA NUMARALARI: ' + sh.slice(0, 900));
      n++;
    }
    // 2) Aranan adın tam olarak yazıldığı en küçük elemanlar (ürün başlığı olabilir): ilk ve son, 3 üst elemanıyla
    var hedef = sadeY(sorgu), bulunan = [];
    var adaylar = klon.querySelectorAll('h1,h2,h3,h4,h5,a,span,p,div,b,strong');
    for (var a = 0; a < adaylar.length && bulunan.length < 40; a++) {
      if (adaylar[a].children.length <= 2 && sadeY(adaylar[a].textContent) === hedef) bulunan.push(adaylar[a]);
    }
    var secilen = bulunan.length > 1 ? [bulunan[0], bulunan[bulunan.length - 1]] : bulunan;
    for (var c = 0; c < secilen.length; c++) {
      var u = secilen[c];
      for (var y = 0; y < 3; y++) { if (u.parentElement && u.parentElement !== klon) u = u.parentElement; }
      parcalar.push('BAŞLIK ÜST ELEMANI: ' + u.outerHTML.replace(/\s+/g, ' ').slice(0, 1800));
    }
    // 3) Hiçbiri yoksa: ilk fiyat ya da sonuç yazısı çevresi
    if (!bulunan.length) {
      var h = klon.innerHTML.replace(/\s+/g, ' ');
      var yer = h.search(/\d[\d.,]*\s*(?:TL|₺)|toplam sonuç|sonuç/i);
      if (yer < 0) yer = 0;
      parcalar.push('İLK FİYAT ÇEVRESİ: ' + h.slice(Math.max(0, yer - 200), yer + 2000));
    }
    return parcalar.join(' ||| ');
  } catch (e) { return 'hata: ' + e; }
}

// ---------------------------------------------------------------
// Sürüm 19 · sayfa numarasına dokunur (sayfa bağlantıları düz adres değilse). Yalnız sayfalama bloğunun içinde arar.
// ---------------------------------------------------------------
function sayfayaGec(no) {
  try {
    var bloklar = document.querySelectorAll('[class*="pagina"],[class*="Pagina"],[class*="pager"],[class*="Pager"],[class*="sayfala"],[class*="paging"]');
    for (var i = 0; i < bloklar.length; i++) {
      var adaylar = bloklar[i].querySelectorAll('a,button,li,span,[role=button]');
      for (var j = 0; j < adaylar.length; j++) {
        var t = (adaylar[j].textContent || '').replace(/\s+/g, ' ').trim();
        if (t !== String(no)) continue;
        var tik = adaylar[j].closest('a,button') || adaylar[j].querySelector('a,button') || adaylar[j];
        tik.click();
        return 'tıklandı: ' + tik.tagName.toLowerCase();
      }
    }
    return 'sayfa ' + no + ' düğmesi yok';
  } catch (e) { return 'hata: ' + e; }
}

// Sürüm 21.4 teşhisi: ilk 2 ürün kartının TÜM nitelikleriyle (data-*, onclick dahil) ham HTML'i. Bağlantısı görünmeyen kartta
// (Akakçe) ürünün nereye gittiğini, kart yapısı bilinmeyen sitede (Trendyol) adın nerede durduğunu görmek için.
// secici verilirse onu kullanır; verilmezse içinde fiyat yazan ilk bağlantıları (kartın kendisi bağlantıysa), o da yoksa ilk fiyatın 4. üst elemanını alır.
function kartHam(secici) {
  try {
    var fiyat = /\d{1,3}(?:[.\s]\d{3})*(?:[,.]\d{1,2})?\s*(?:TL|₺)/;
    var secilen = [];
    if (secici) { try { secilen = Array.prototype.slice.call(document.querySelectorAll(secici), 0, 2); } catch (e) { } }
    if (!secilen.length) {
      var as = document.querySelectorAll('a[href]');
      for (var i = 0; i < as.length && secilen.length < 2; i++) {
        var t = as[i].textContent || '';
        if (t.length < 400 && fiyat.test(t)) secilen.push(as[i]);
      }
    }
    if (!secilen.length) {
      var els = document.body.querySelectorAll('span,div,p,strong,b');
      for (var j = 0; j < els.length; j++) {
        if (els[j].children.length > 2 || !fiyat.test(els[j].textContent || '') || (els[j].textContent || '').length > 45) continue;
        var u = els[j];
        for (var k = 0; k < 4 && u.parentElement && u.parentElement !== document.body; k++) u = u.parentElement;
        secilen.push(u);
        break;
      }
    }
    return secilen.map(function (x) {
      var h = x.outerHTML.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, '').replace(/\s+/g, ' ');
      return h.slice(0, 1500);
    }).join(' ||| ');
  } catch (e) { return 'hata: ' + e; }
}

// Sürüm 21.7 teşhisi: sayfadaki sıralama seçenekleri (açılır listedeki seçenekler ve "sırala / fiyat / ucuz" geçen bağlantılar).
// Fiyata göre sıralı sonuç adresini bulup kurallar.json'a yazmak için (Kitantik: en ucuz her açılışta farklı çıkıyor).
function siralamaSecenekleri() {
  try {
    var out = [];
    var sel = document.querySelectorAll('select');
    for (var i = 0; i < sel.length && out.length < 12; i++) {
      var ops = Array.prototype.map.call(sel[i].options || [], function (o) { return (o.textContent || '').trim().slice(0, 30) + '=' + String(o.value).slice(0, 60); });
      var ad = (sel[i].name || sel[i].id || sel[i].className || '').toString().slice(0, 30);
      if (ops.join(' ').search(/sırala|fiyat|ucuz|artan|azalan|price|sort/i) >= 0) out.push('LİSTE ' + ad + ': ' + ops.slice(0, 8).join(' | '));
    }
    var as = document.querySelectorAll('a[href],button,[data-sort],[data-value]');
    for (var j = 0; j < as.length && out.length < 12; j++) {
      var t = (as[j].textContent || '').replace(/\s+/g, ' ').trim();
      var h = as[j].getAttribute('href') || as[j].getAttribute('data-sort') || as[j].getAttribute('data-value') || '';
      if (t.length > 40) continue;
      if (/sırala|fiyat|ucuz|artan|azalan/i.test(t) || /sort|order|sirala|siralama/i.test(h)) out.push('BAĞLANTI "' + t + '" → ' + h.slice(0, 120));
    }
    return out.join(' ;; ');
  } catch (e) { return 'hata: ' + e; }
}

// Sürüm 21.8 teşhisi: açılır "Sırala" menüsünün öğeleri (div.item gibi; JavaScript ile açılan menüler) ve "Sırala" yazan kutunun ham HTML'i.
// Neden: 21.7'de siralamaSecenekleri() yalnız select ve bağlantı arıyordu; Kitantik menüsü div.item ile yapılmış ve adres taşımıyor.
function siralamaMenusu() {
  try {
    var out = [];
    var kalip = /fiyat|ucuz|pahal|artan|azalan|sırala|yeni|eski|alfabe/i;
    var adaylar = document.querySelectorAll('.item,[class*="dropdown"] *,[class*="sort"] *,[class*="Sort"] *,[class*="siral"] *,[role=option],[role=menuitem],li');
    for (var i = 0; i < adaylar.length && out.length < 14; i++) {
      var e = adaylar[i];
      if (e.children.length > 2) continue;
      var t = (e.textContent || '').replace(/\s+/g, ' ').trim();
      if (t.length < 3 || t.length > 40 || !kalip.test(t)) continue;
      var nit = [];
      for (var k = 0; k < e.attributes.length && nit.length < 5; k++) {
        var a = e.attributes[k];
        if (a.name === 'class' || a.name === 'style') continue;
        nit.push(a.name + '=' + String(a.value).slice(0, 50));
      }
      var ust = e.closest('a[href]');
      out.push(e.tagName.toLowerCase() + '.' + String(e.getAttribute('class') || '').trim().split(/\s+/).slice(0, 2).join('.') + ' "' + t + '"' + (nit.length ? ' [' + nit.join(' ') + ']' : '') + (ust ? ' href=' + String(ust.getAttribute('href') || '').slice(0, 80) : ''));
    }
    var ham = '';
    var tum = document.querySelectorAll('div,span,button,a,label');
    for (var j = 0; j < tum.length; j++) {
      var tt = (tum[j].textContent || '').replace(/\s+/g, ' ').trim();
      if (/^sırala/i.test(tt) && tt.length < 40 && tum[j].children.length < 4) {
        var u = tum[j];
        for (var d = 0; d < 2 && u.parentElement && u.parentElement !== document.body; d++) u = u.parentElement;
        ham = u.outerHTML.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, '').replace(/\s+/g, ' ').slice(0, 1200);
        break;
      }
    }
    return out.join(' ;; ') + (ham ? ' ;; SIRALA KUTUSU HAM: ' + ham : '');
  } catch (e) { return 'hata: ' + e; }
}

// Sürüm 21.8 teşhisi: "sonraki sayfa" mekanizmasının adayları: sayfa parametreli bağlantılar, "daha fazla / sonraki / yükle" düğmeleri,
// rakam yazan sayfa kutuları ve sayfanın kaydırma boyu (sonsuz kaydırma izi). Kitantik: 637 sonuç, 20 ilan, sayfa düğmesi bulunamadı.
function sayfalamaAdaylari() {
  try {
    var out = [];
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length && out.length < 8; i++) {
      var h = as[i].getAttribute('href') || '';
      if (/[?&](page|p|sayfa|pg|sp|start|offset|pn)=\d|\/page\/\d|\/sayfa[-\/]?\d|\/p\d+/i.test(h)) out.push('BAĞLANTI "' + (as[i].textContent || '').replace(/\s+/g, ' ').trim().slice(0, 15) + '" → ' + h.slice(0, 110));
    }
    var dugmeler = document.querySelectorAll('a,button,div,span,li');
    var n = 0;
    for (var j = 0; j < dugmeler.length && n < 8; j++) {
      var e = dugmeler[j];
      if (e.children.length > 2) continue;
      var t = (e.textContent || '').replace(/\s+/g, ' ').trim();
      if (!t || t.length > 25) continue;
      if (/^(daha fazla|devam|sonraki|ileri|yükle|tümünü göster|more|next|›|»|>)/i.test(t) || (/^\d{1,2}$/.test(t) && /page|pagin|sayfa|pager|paging/i.test(String(e.className) + ' ' + String((e.parentElement && e.parentElement.className) || '')))) {
        out.push(e.tagName.toLowerCase() + '.' + String(e.getAttribute('class') || '').trim().split(/\s+/).slice(0, 2).join('.') + ' "' + t + '"' + (e.getAttribute('href') ? ' href=' + e.getAttribute('href').slice(0, 80) : '') + (e.getAttribute('onclick') ? ' onclick=' + e.getAttribute('onclick').slice(0, 60) : ''));
        n++;
      }
    }
    out.push('sayfa boyu ' + document.body.scrollHeight + ' px · bağlantı sayısı ' + as.length);
    return out.join(' ;; ');
  } catch (e) { return 'hata: ' + e; }
}

// Sürüm 21.9 · "SIRALA" DÜĞMESİNE TIKLAMA (Kitantik: menü sayfada hazır durmuyor, düğmeye basınca açılıyor; adres parametresi tahmin edilemedi).
// Üç adım, her biri sayfada ayrı çalışır: siralamaAc (düğmeye bas) → siralamaGorunen (açılan seçenekleri yaz) → siralamaSec (fiyata göre artan olanı seç).
function siralamaAc() {
  function gorunurMu(e) { var st = window.getComputedStyle(e); return st.display !== 'none' && st.visibility !== 'hidden' && e.getClientRects().length > 0; }
  try {
    var d = document.getElementById('sort-result-btn');
    if (!d) {
      var adaylar = document.querySelectorAll('button,a,div,span');
      for (var i = 0; i < adaylar.length; i++) {
        var t = (adaylar[i].textContent || '').replace(/\s+/g, ' ').trim();
        if (/^sırala$/i.test(t) && adaylar[i].children.length < 3 && gorunurMu(adaylar[i])) { d = adaylar[i]; break; }
      }
    }
    if (!d) return 'düğme bulunamadı';
    d.click();
    return 'tıklandı: ' + d.tagName.toLowerCase() + (d.id ? '#' + d.id : '') + ' "' + (d.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 20) + '"';
  } catch (e) { return 'hata: ' + e; }
}
function siralamaGorunen() {
  function gorunurMu(e) { var st = window.getComputedStyle(e); return st.display !== 'none' && st.visibility !== 'hidden' && e.getClientRects().length > 0; }
  try {
    var kaplar = document.querySelectorAll('.modal,[role=dialog],.ui.dimmer,.menu,.dropdown,.popup,[class*=sort],[class*=Sort],[class*=siral]');
    var out = [], ham = '';
    for (var i = 0; i < kaplar.length && out.length < 20; i++) {
      var kap = kaplar[i];
      if (!gorunurMu(kap)) continue;
      var alt = kap.querySelectorAll('a,button,li,label,option,.item,input,span,div');
      for (var j = 0; j < alt.length && out.length < 20; j++) {
        var e = alt[j];
        if (e.children.length > 2 || !gorunurMu(e)) continue;
        var t = (e.textContent || e.value || '').replace(/\s+/g, ' ').trim();
        if (!t || t.length > 40) continue;
        var nit = [];
        for (var k = 0; k < e.attributes.length && nit.length < 5; k++) {
          var a = e.attributes[k];
          if (a.name === 'class' || a.name === 'style') continue;
          nit.push(a.name + '=' + String(a.value).slice(0, 60));
        }
        out.push(e.tagName.toLowerCase() + '.' + String(e.getAttribute('class') || '').trim().split(/\s+/).slice(0, 2).join('.') + ' "' + t + '"' + (nit.length ? ' [' + nit.join(' ') + ']' : ''));
      }
      if (!ham && out.length) ham = kap.outerHTML.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, '').replace(/\s+/g, ' ').slice(0, 1500);
    }
    return (out.join(' ;; ') || 'görünen seçenek yok') + (ham ? ' ;; KAP HAM: ' + ham : '');
  } catch (e) { return 'hata: ' + e; }
}
function siralamaSec() {
  function gorunurMu(e) { var st = window.getComputedStyle(e); return st.display !== 'none' && st.visibility !== 'hidden' && e.getClientRects().length > 0; }
  try {
    var kalip = /fiyat.{0,14}(artan|düşükten|ucuzdan)|(en düşük|en ucuz|düşük)\s*fiyat|ucuzdan pahalıya|artan fiyat/i;
    var alt = document.querySelectorAll('a,button,li,label,option,.item,span,div');
    for (var i = 0; i < alt.length; i++) {
      var e = alt[i];
      if (e.children.length > 2 || !gorunurMu(e)) continue;
      var t = (e.textContent || '').replace(/\s+/g, ' ').trim();
      if (t.length > 40 || !kalip.test(t)) continue;
      var icte = false;
      for (var c = 0; c < e.children.length; c++) { if (kalip.test(e.children[c].textContent || '')) icte = true; }
      if (icte) continue; // kap kutusu değil, en içteki eşleşen öğe tıklanır
      e.click();
      return 'tıklandı: ' + e.tagName.toLowerCase() + ' "' + t + '"';
    }
    return 'eşleşen seçenek yok';
  } catch (e) { return 'hata: ' + e; }
}

// Teşhis: sayfalama bloğunun TÜM nitelikleriyle (data-*, onclick dahil) ham HTML'i.
function sayfaHam() {
  try {
    var b = document.querySelector('[class*="pagina"],[class*="Pagina"],[class*="pager"],[class*="Pager"],[class*="sayfala"],[class*="paging"]');
    if (!b) return '';
    return b.outerHTML.replace(/\s+/g, ' ').slice(0, 1800);
  } catch (e) { return 'hata: ' + e; }
}

// Kitap olmayan ilanlar (sürüm 13'teki liste) — aranan adda bu kelime yoksa elenir.
const KITAP_DISI = (KURAL.kitapDisi || []);
function kitapDisi(baslik, sorgu) {
  const b = " " + kelimeler(baslik).join(" ");
  const q = " " + kelimeler(sorgu).join(" ");
  return KITAP_DISI.some(k => b.includes(" " + k) && !q.includes(" " + k));
}

// Takım / set / çok ciltli ürün mü? ("3 Kitap Set", "Takım", "5 Cilt") — tek kitap sayılmaz, ayrı gösterilir.
function takimMi(baslik) {
  const s = " " + kelimeler(baslik).join(" ") + " ";
  return /\s(takim|takimi|set|seti)\s/.test(s) || /\s([2-9]|\d{2,})\s(kitap|cilt|kitaplik)\s/.test(s);
}

// Kartta e-kitap / sesli kitap izi var mı? (yalnız rapor için)
function ekitapIzi(metin) {
  return /e-kitap|ekitap|e-book|ebook|dijital kitap|kindle|sesli kitap|audible|pdf|epub/i.test(sade(metin));
}

// ---------------------------------------------------------------
// Yardımcılar
// ---------------------------------------------------------------
function aramaJS(sorgu, tur, kart) { return "(" + aramaSayfasiniOku.toString() + ")(" + JSON.stringify(sorgu) + "," + JSON.stringify(tur || "") + "," + JSON.stringify(kart || null) + ")"; }

function bekle(ms) {
  return T.bekle(ms);
}

// "42,00 TL", "1.234,50 TL", "157.50 TL", "1.234 TL" hepsini doğru okur:
// son ayraçtan (nokta ya da virgül) sonra 1-2 hane varsa o ayraç ondalıktır, 3 hane varsa binliktir.
function sayi(p) {
  const s = String(p).replace(/[^\d.,]/g, "").replace(/[.,]+$/, "");
  const m = s.match(/^(.*)[.,](\d{1,2})$/);
  if (m) return parseFloat(m[1].replace(/[.,]/g, "") + "." + m[2]);
  return parseFloat(s.replace(/[.,]/g, ""));
}

function sade(s) {
  return String(s || "").toLocaleLowerCase("tr").replace(/ı/g, "i")
    .normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function kelimeler(metin) {
  return sade(metin).split(/[^a-z0-9]+/).filter(Boolean);
}

function ilgili(baslik, sorgu) {
  const aranan = kelimeler(sorgu).filter(w => w.length >= 2);
  if (!aranan.length) return true;
  const var_ = new Set(kelimeler(baslik));
  const tutan = aranan.filter(w => var_.has(w)).length;
  const onemli = aranan.filter(w => w.length >= 3);
  const onemliTutan = onemli.filter(w => var_.has(w)).length;
  return tutan >= Math.ceil(aranan.length * 0.6) && (!onemli.length || onemliTutan >= 1);
}

function latin5(metin) {
  const tablo = { "ç": "%E7", "Ç": "%C7", "ğ": "%F0", "Ğ": "%D0", "ı": "%FD", "İ": "%DD", "ö": "%F6", "Ö": "%D6", "ş": "%FE", "Ş": "%DE", "ü": "%FC", "Ü": "%DC" };
  let sonuc = "";
  for (const h of metin) {
    if (h === " ") sonuc += "+";
    else if (tablo[h]) sonuc += tablo[h];
    else sonuc += encodeURIComponent(h);
  }
  return sonuc;
}

function harfsiz(metin) {
  return encodeURIComponent(sade(metin)).replace(/%20/g, "+");
}

function adresYap(kalip, sorgu) {
  return kalip.replace("{q5}", latin5(sorgu)).replace("{qa}", harfsiz(sorgu)).replace("{q}", encodeURIComponent(sorgu));
}

function kacis(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function duzelt(s) {
  s = String(s || "").replace(/\s+/g, " ").trim();
  if (!/[a-zçğıöşü]/i.test(s) || s !== s.toLocaleUpperCase("tr")) return s;
  return s.toLocaleLowerCase("tr").replace(/(^|[\s\-\/\(\[\"“'.])([a-zçğıöşüâîû])/g, (m, a, b) => a + b.toLocaleUpperCase("tr"));
}

function tl(x) {
  return x.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL";
}

// Sayfadan okunan ürünleri işler: ilgili olanları, takımları, elenenleri ayırır. (Saf işlev: tarayıcı gerekmez, sınanabilir.)
function sonucuIsle(son, k, sorgu) {
  // Sürüm 20: sayfa "bu arama için sonuç yok, benzer arama listeleniyor" diyorsa listelenen ürünlerin hiçbiri bu aramanın sonucu değildir.
  const benzer = !!(son && son.benzerSonuc);
  const items = benzer ? [] : ((son && son.items) || []);
  const benzerElenen = benzer ? ((son && son.items) || []).length : 0;
  const eslesenHepsi = items.filter(u => ilgili(u.title + " " + (u.extra || ""), sorgu));
  const kanitsiz = eslesenHepsi.filter(u => u.kanit === false);
  // Sürüm 18: fiyatı güvenilmez (kartın bütün fiyatları taksit/kargo sayıldı) ürünler gösterilmez, ayrıca sayılır
  const supheli = eslesenHepsi.filter(u => u.kanit !== false && u.supheli);
  const eslesen = eslesenHepsi.filter(u => u.kanit !== false && !u.supheli);
  const kitapDisiSayisi = eslesen.filter(u => kitapDisi(u.title, sorgu)).length;
  const ekitapElenen = eslesen.filter(u => u.ekitap && !kitapDisi(u.title, sorgu)).length;
  const alt = k.tur === "sahaf" ? 0.5 : 5; // sahafta çok ucuz ilan olabilir
  const hazir = eslesen
    .filter(u => !kitapDisi(u.title, sorgu) && !u.ekitap)
    .map(u => {
      const rak = (u.prices || []).map(sayi).filter(x => x >= alt);
      return { baslik: duzelt(String(u.title || "").replace(/^((bugün|yarın) kargoda|kargo bedava|ücretsiz kargo|hızlı teslimat|başarılı satıcı|yetkili satıcı|süper|avantajlı ürün)\s*/gi, "")), fiyat: rak.length ? Math.min(...rak) : 0, href: u.href, stokYok: !!u.stokYok,
        kart: String(u.extra || "").replace(/\s+/g, " ").trim(), ekitap: ekitapIzi(u.extra || ""),
        tum: (u.prices || []).slice(0, 6).join(" ; "), ctx: String(u.ctx || ""), linksiz: !!u.linksiz,
        // Sürüm 21 · ilan alanları (arayüz bunlara göre sıralayıp süzecek). Okunamayan alan boş kalır.
        // tur: yeni | sahaf | ikinciel | karsilastirma · stok: "var" | "yok" | "bilinmiyor" | "" (denetlenmedi)
        tur: k.tur || "", kondisyon: String(u.kondisyon || ""), satici: String(u.satici || ""), sehir: String(u.sehir || ""), kargo: "",
        stok: u.stokYok ? "yok" : "", stokNeden: u.stokYok ? "arama kartında" : "" };
    })
    .filter(x => x.fiyat > 0)
    .sort((a, b) => a.fiyat - b.fiyat);
  return {
    ilgililer: hazir.filter(x => !takimMi(x.baslik)),
    takimlar: hazir.filter(x => takimMi(x.baslik)),
    kitapDisiSayisi, ekitapElenen, benzerElenen,
    kanitsizSayisi: kanitsiz.length,
    suphelSayisi: supheli.length,
    suphelOrnek: supheli.slice(0, 2).map(u => duzelt(u.title).slice(0, 40) + " → fiyatlar " + (u.prices || []).slice(0, 4).join(" ; ") + " · önceki karakterler: " + String(u.ctx || "")),
    kanitsizOrnek: kanitsiz.slice(0, 3).map(u => duzelt(u.title).slice(0, 40) + " → " + String(u.href || "").replace(/^https?:\/\/[^\/]+/, "").slice(0, 60))
  };
}

async function sayfaYukle(wv, adres, sure) {
  let hata = null;
  const yukle = Promise.resolve().then(() => wv.ac(adres)).catch(e => { hata = String(e); });
  await Promise.race([yukle, bekle(sure)]);
  return hata;
}

// Sayfayı yoklar; bu kitapla ilgili ürün görünene kadar (en fazla "sure" ms) bekler. "r.iptal" doğruysa (site süre sınırını aştı) hemen çıkar.
async function sonucBekle(wv, sorgu, sure, tur, r, kart) {
  const bitis = Date.now() + sure;
  let son = null, hata = null, onceki = -1, sabit = 0, yokSay = 0;
  await bekle(2500);
  while (true) {
    try { son = await wv.calistir(aramaJS(sorgu, tur, kart)); } catch (e) { hata = String(e); }
    const ilgiliVar = son && !son.benzerSonuc && (son.items || []).some(u => u.kanit !== false && !u.supheli && ilgili(u.title + " " + (u.extra || ""), sorgu));
    const sayi_ = son && son.items ? son.items.length : 0;
    sabit = (sayi_ > 0 && sayi_ === onceki) ? sabit + 1 : 0;
    onceki = sayi_;
    // Sürüm 21.4: sayfa üst üste iki yoklamada "sonuç yok" diyor ve hiç fiyatlı ürün yoksa beklemeyi bitir (Kitapseç 55 sn bekliyordu).
    yokSay = (son && son.sonucYok && sayi_ === 0) ? yokSay + 1 : 0;
    if (ilgiliVar || (son && son.blocked) || (son && son.benzerSonuc) || sabit >= 3 || yokSay >= 2 || Date.now() > bitis || (r && r.iptal)) break;
    await bekle(2000);
  }
  return { son: son || {}, hata };
}

function ilgiliSayisi(sonuc, sorgu) {
  if (sonuc && sonuc.benzerSonuc) return 0;
  return ((sonuc && sonuc.items) || []).filter(u => u.kanit !== false && !u.supheli && ilgili(u.title + " " + (u.extra || ""), sorgu)).length;
}

async function stokOku(href, r, varKalip) {
  const wv = yeniSekme(r);
  const yh = await sayfaYukle(wv, href, 20000);
  let s = { durum: "bilinmiyor", neden: yh ? "sayfa açılmadı: " + yh : "işaret bulunamadı" };
  for (let i = 0; i < 6; i++) {
    await bekle(1500);
    try { s = (await wv.calistir("(" + urunSayfasiniOku.toString() + ")(" + JSON.stringify(varKalip || "") + ")")) || s; } catch (e) { s.neden = String(e); }
    if (s.durum !== "bilinmiyor") break;
  }
  return s;
}

async function akakceDetay(href, r) {
  const wv = yeniSekme(r);
  await sayfaYukle(wv, href, 20000);
  let d = { satir: [] };
  for (let i = 0; i < 5; i++) {
    await bekle(1500);
    try { d = (await wv.calistir("(" + akakceSaticilar.toString() + ")()")) || d; } catch (e) { d.hata = String(e); }
    if (d.satir && d.satir.length >= 3) break;
  }
  d.adres = href;
  return d;
}

// ---------------------------------------------------------------
// Bir sitenin sonuç kaydı (süre sınırı dolsa bile o ana kadar doldurulan kısmı rapora girer)
// ---------------------------------------------------------------
function yeniSonuc(k) {
  return { k, yol: "", kutu: "", adres: "", sonUrl: "", baslik: "", engel: "", fiyatSayisi: 0, urunSayisi: 0,
    sonucYazisi: "", sonucSayisi: -1, sonucYok: false, benzer: false, benzerElenen: 0, okunanlar: [],
    ilgililer: [], takimlar: [], kitapDisiSayisi: 0, ekitapSayisi: 0, ekitapElenen: 0, kanitsizSayisi: 0, kanitsizOrnek: [], suphelSayisi: 0, suphelOrnek: [],
    fiyatsizGizlenen: [], fiyatsizVar: [], fiyatsizBelirsiz: [],
    stokKontrol: [], ozet: null, yapi: null, dom: "", ham: "", hata: "", akakce: null, sure: 0, gezi: [], sayfaHam: "", detayRapor: [], adresDeneme: [], siralaTikla: [], siralamaMenusu: "", sayfalama: "",
    yavas: false, iptal: false, sinir: 0 };
}

// Okunan sayfa verisini sonuç kaydına işler (sayfa gezisinde her yeni sayfadan sonra yeniden çağrılır).
function sonucuYaz(r, son, k, sorgu) {
  r.sonUrl = son.url || "";
  r.baslik = son.title || "";
  r.engel = son.blocked || "";
  r.fiyatSayisi = son.priceCount || 0;
  r.urunSayisi = (son.items || []).length;
  r.sonucYazisi = son.sonucYazisi || "";
  r.sonucSayisi = (typeof son.sonucSayisi === "number") ? son.sonucSayisi : -1;
  r.sonucYok = !!son.sonucYok;
  r.benzer = !!son.benzerSonuc;
  r.kartKap = son.kartKurali || 0;
  r.okunanlar = (son.items || []).slice(0, 5).map(u => duzelt(u.title).slice(0, 45) + " " + ((u.prices || [])[0] || ""));
  if (son.error && String(r.hata).indexOf(son.error) < 0) r.hata = (r.hata ? r.hata + " · " : "") + son.error;
  const sy = sonucuIsle(son, k, sorgu);
  r.ilgililer = sy.ilgililer;
  r.takimlar = sy.takimlar;
  r.kitapDisiSayisi = sy.kitapDisiSayisi;
  r.ekitapElenen = sy.ekitapElenen;
  r.benzerElenen = sy.benzerElenen;
  r.kanitsizSayisi = sy.kanitsizSayisi;
  r.kanitsizOrnek = sy.kanitsizOrnek;
  r.suphelSayisi = sy.suphelSayisi;
  r.suphelOrnek = sy.suphelOrnek;
  r.ekitapSayisi = r.ilgililer.filter(x => x.ekitap).length;
}

// ---------------------------------------------------------------
// Bir siteyi sınar (sonuçları "r" kaydına yazar)
// ---------------------------------------------------------------
async function siteyiSina(k, sorgu, r) {
  let son = {}, sonWv = null;
  try {
    // 1. yol: arama adresi
    for (const kalip of k.url) {
      if (r.iptal) return;
      const wv = yeniSekme(r);
      const adres = adresYap(kalip, sorgu);
      const yh = await sayfaYukle(wv, adres, 20000);
      const b = await sonucBekle(wv, sorgu, 15000, k.tur, r, k.kart);
      if (r.iptal) return;
      if (!r.adres || ilgiliSayisi(b.son, sorgu) > ilgiliSayisi(son, sorgu) || (!son.priceCount && b.son.priceCount)) {
        son = b.son; sonWv = wv; r.adres = adres; r.yol = "adres"; r.hata = yh || b.hata || "";
      }
      if (ilgiliSayisi(son, sorgu)) break;
    }
    sonucuYaz(r, son, k, sorgu);
    // 2. yol: ana sayfadaki arama kutusu (adı eşleşen fiyatsız kart bulunduysa gerekmez)
    if (!r.iptal && !ilgiliSayisi(son, sorgu) && k.ana && !(son.fiyatsiz || []).length) {
      const wv2 = yeniSekme(r);
      await sayfaYukle(wv2, k.ana, 20000);
      await bekle(2000);
      let durum = "";
      try { durum = await wv2.calistir("(" + aramaKutusunaYaz.toString() + ")(" + JSON.stringify(sorgu) + ")"); } catch (e) { durum = "hata: " + e; }
      r.kutu = String(durum || "");
      if (!r.iptal && durum && String(durum).indexOf("hata") < 0 && durum !== "kutu-yok") {
        await bekle(1500);
        const b2 = await sonucBekle(wv2, sorgu, 16000, k.tur, r, k.kart);
        if (!r.iptal && ilgiliSayisi(b2.son, sorgu) > ilgiliSayisi(son, sorgu)) {
          son = b2.son; sonWv = wv2; r.yol = "arama kutusu"; r.hata = b2.hata || "";
          sonucuYaz(r, son, k, sorgu);
        }
      }
    }
  } catch (e) { r.hata = String(e); }
  if (r.iptal) return;

  // Sayfa sayfa gezme: sonuç sayısı okunandan çoksa. Sürüm 20: sayfaGez kuralı olan sitede (Nadir) bu kitap bulunsa da 4. sayfaya kadar okunur;
  // diğer sitelerde yalnız bu kitap henüz görünmüyorsa gezilir (en çok 4. sayfa).
  try {
    // Sürüm 21.7: sayfaGez kuralı olan sitede sayfa toplam sonuç sayısını yazmıyorsa (Kitantik) da sonraki sayfalar denenir;
    // sayfa düğmesi bulunamazsa gezi zararsızca durur ve nedeni rapora yazılır.
    const sayiBilinmez = !!k.sayfaGez && son.sonucSayisi === -1;
    const gerek = sonWv && typeof son.sonucSayisi === "number" && (son.items || []).length && !son.benzerSonuc &&
      ((son.sonucSayisi > (son.items || []).length && (k.sayfaGez || !ilgiliSayisi(son, sorgu))) || sayiBilinmez);
    if (gerek) {
      const enSon = k.sayfaGez || 4;
      for (let no = 2; no <= enSon; no++) {
        if (r.iptal) return;
        // Sürüm 22.0 · "sayfaUrl" kuralı (Kitantik: "&page={n}"): sonraki sayfa düğmeye tıklanmadan, aynı arama adresine sayfa eki konarak ayrı sekmede açılır.
        // Neden: Kitantik'te sayfa düğmesi yok ama adres çalışıyor (21.8 iPad: page=2 ilk sayfadan tamamen farklı 20 ilan).
        if (k.sayfaUrl && r.adres) {
          const wvS = yeniSekme(r);
          const yhS = await sayfaYukle(wvS, r.adres + k.sayfaUrl.replace("{n}", no), 20000);
          const bS = await sonucBekle(wvS, sorgu, 10000, k.tur, r, k.kart);
          if (r.iptal) return;
          const itS = (bS.son && bS.son.items) || [];
          const varS = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
          const ekS = itS.filter(u => !varS.has(u.href + "|" + (u.prices || [])[0]));
          if (!ekS.length) { r.gezi.push("sayfa " + no + " (adresle): yeni ilan yok" + (yhS ? " · hata: " + String(yhS).slice(0, 60) : "") + (bS.son && bS.son.blocked ? " · ENGEL: " + bS.son.blocked : "")); break; }
          son.items = (son.items || []).concat(ekS);
          r.gezi.push("sayfa " + no + " (adresle): " + itS.length + " ürün okundu, " + ekS.length + " yeni");
          sonucuYaz(r, son, k, sorgu);
          continue;
        }
        const imzaOnce = (son.items || []).length ? (son.items || []).map(u => u.href + "|" + (u.prices || [])[0]).join("§") : "";
        let g = "";
        try { g = String(await sonWv.calistir("(" + sayfayaGec.toString() + ")(" + no + ")")); } catch (e) { g = "hata: " + e; }
        if (g.indexOf("tıklandı") !== 0) { r.gezi.push("sayfa " + no + ": " + g); break; }
        let yeniSon = null, degisti = false;
        const bit = Date.now() + 12000;
        while (Date.now() < bit && !r.iptal) {
          await bekle(1500);
          try { yeniSon = await sonWv.calistir(aramaJS(sorgu, k.tur, k.kart)); } catch (e) { yeniSon = null; }
          if (yeniSon && yeniSon.items && yeniSon.items.length) {
            // Sayfa içeriği ilk sayfanın bu sayfadaki hâlinden farklı mı? (ilk sayfada okunanlardan en az biri yeni olmalı)
            const var2 = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
            const yeniVar = yeniSon.items.some(u => !var2.has(u.href + "|" + (u.prices || [])[0]));
            if (yeniVar && yeniSon.items.map(u => u.href + "|" + (u.prices || [])[0]).join("§") !== imzaOnce) { degisti = true; break; }
          }
        }
        if (r.iptal) return;
        if (!degisti) { r.gezi.push("sayfa " + no + ": " + g + " ama sayfa değişmedi"); break; }
        const var_ = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
        const eklenecek = yeniSon.items.filter(u => !var_.has(u.href + "|" + (u.prices || [])[0]));
        son.items = (son.items || []).concat(eklenecek);
        r.gezi.push("sayfa " + no + ": " + g + " · " + yeniSon.items.length + " ürün okundu, " + eklenecek.length + " yeni");
        sonucuYaz(r, son, k, sorgu);
        if (!k.sayfaGez && ilgiliSayisi(son, sorgu)) break;
      }
      try { r.sayfaHam = String(await sonWv.calistir("(" + sayfaHam.toString() + ")()") || ""); } catch (e) { }
    }
  } catch (e) { r.gezi.push("gezi hatası: " + e); }
  if (r.iptal) return;
  sonucuYaz(r, son, k, sorgu);

  // Sürüm 20 · fiyatı kartta olmayan site (Pandora): adı eşleşen kartın ürün sayfasından yalnız STOK okunur. Fiyat bu sayfadan ASLA alınmaz
  // (sayfadaki "benzer ürünler"in fiyatı karışıyor). Stok yok → gizlenir; stok var → "fiyat okunamadı"; belirsiz → ayrıca yazılır.
  if (!r.ilgililer.length && !r.takimlar.length && !son.benzerSonuc && (son.fiyatsiz || []).length) {
    const adaylar = son.fiyatsiz.filter(c => ilgili(c.title + " " + (c.extra || ""), sorgu)).slice(0, 2);
    for (const c of adaylar) {
      if (r.iptal) return;
      let s;
      try { s = await stokOku(c.href, r, k.stokVar); } catch (e) { s = { durum: "bilinmiyor", neden: "hata: " + e }; }
      const ad = duzelt(c.title);
      r.detayRapor.push("fiyatsız kart \"" + ad.slice(0, 60) + "\" · ürün sayfasında stok: " + s.durum + " (" + (s.neden || "") + ") · sayfa başlığı: " + (s.title || ""));
      if (s.durum === "yok") r.fiyatsizGizlenen.push(ad);
      else if (s.durum === "var") r.fiyatsizVar.push({ baslik: ad, href: c.href, neden: s.neden || "" });
      else r.fiyatsizBelirsiz.push(ad);
    }
  }
  if (r.iptal) return;

  if (!r.ilgililer.length && sonWv) {
    try { r.ozet = await sonWv.calistir("(" + sayfaOzeti.toString() + ")()"); } catch (e) { }
  }
  // Az ürün ayrılabildiyse (3'ten az) kart yapısını teşhis için dök
  // Sürüm 21: "aday" sitelerde (yeni eklenen, yapısı bilinmeyen) kart yapısı ve HTML parçası her zaman dökülür.
  // Sürüm 21.4: kuralında "teshis": true olan sitede de (Trendyol, Akakçe) döküm her zaman yazılır; ayrıca kartların ham HTML'i alınır.
  const aday = k.durum === "aday" || !!k.teshis;
  if ((r.ilgililer.length < 3 || aday) && sonWv) {
    try { r.yapi = await sonWv.calistir("(" + kartYapisi.toString() + ")()"); } catch (e) { }
  }
  if (k.teshis && sonWv) {
    try { r.ham = String(await sonWv.calistir("(" + kartHam.toString() + ")(" + JSON.stringify(k.teshisSecici || "") + ")") || ""); } catch (e) { }
    try { r.siralama = String(await sonWv.calistir("(" + siralamaSecenekleri.toString() + ")()") || ""); } catch (e) { }
    // Sürüm 21.8: açılır menü öğeleri, "Sırala" kutusunun ham HTML'i ve sayfalama adayları
    try { r.siralamaMenusu = String(await sonWv.calistir("(" + siralamaMenusu.toString() + ")()") || ""); } catch (e) { }
    try { r.sayfalama = String(await sonWv.calistir("(" + sayfalamaAdaylari.toString() + ")()") || ""); } catch (e) { }
  }
  // Sürüm 21.8 · ADRES DENEMELERİ (kurallar.json "adresDene": ilk arama adresine eklenecek parçaların listesi). Sıralama ve sayfa adresini
  // tahmin ederek tek turda dener; her biri için ürün sayısı, ilk fiyatlar, fiyatın artan sıralı olup olmadığı ve ilk sayfadan farklı ilan sayısı yazılır.
  // Doğru adres bulununca kural silinir ve gerçek adres kurallar.json'a yazılır. Bot korumasını aşmaya çalışmaz: yalnız sitenin kendi adresleri denenir.
  if (k.adresDene && k.adresDene.length && k.url && k.url.length && !r.iptal) {
    const temel = adresYap(k.url[0], sorgu);
    const tabanKume = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
    r.adresDeneme = await sirayla(k.adresDene, 2, async ek => {
      const wv = yeniSekme(r);
      const adres = temel + ek;
      const yh = await sayfaYukle(wv, adres, 20000);
      const b = await sonucBekle(wv, sorgu, 10000, k.tur, r, k.kart);
      const it = (b.son && b.son.items) || [];
      const fiy = it.map(u => sayi((u.prices || [])[0] || "0")).filter(x => x > 0);
      const artan = fiy.length > 1 && fiy.every((x, i) => i === 0 || x >= fiy[i - 1]);
      const yeniSay = it.filter(u => !tabanKume.has(u.href + "|" + (u.prices || [])[0])).length;
      return ek + " → " + it.length + " ürün · ilk fiyatlar " + fiy.slice(0, 6).join(" ") + " · artan sıralı: " + (artan ? "EVET" : "hayır") +
        " · ilk sayfadan farklı ilan: " + yeniSay + (b.son && b.son.blocked ? " · ENGEL: " + b.son.blocked : "") + (yh ? " · hata: " + String(yh).slice(0, 60) : "") +
        " · son adres: " + String((b.son && b.son.url) || "").slice(0, 120);
    });
  }
  // Ürünler hiç (ya da çok az) ayrılamadıysa ve sayfa "sonuç yok" demiyorsa: sayfanın HTML parçasını dök
  const okunamadi = !r.ilgililer.length && !r.takimlar.length && !r.sonucYok && !r.fiyatsizVar.length && !r.fiyatsizGizlenen.length && !r.fiyatsizBelirsiz.length && sonWv &&
    (r.urunSayisi === 0 || r.sonucSayisi > r.urunSayisi || (r.fiyatSayisi >= 10 && r.urunSayisi <= 2));
  if (okunamadi || (aday && sonWv)) {
    try { r.dom = String(await sonWv.calistir("(" + htmlDokum.toString() + ")(" + JSON.stringify(sorgu) + ")") || ""); } catch (e) { }
  }
  // Sürüm 21.9 · "siralaTikla": true olan sitede (Kitantik) Sırala düğmesine basılır, açılan seçenekler yazılır, fiyata göre artan olan seçilir;
  // sonra sayfanın yeni adresi (parametre adı!) ve ilk fiyatların artan sıralı olup olmadığı yazılır. En sonda çalışır: sayfayı değiştirir.
  if (k.siralaTikla && sonWv && !r.iptal) {
    r.siralaTikla = await siralamaTiklaDene(sonWv, k, sorgu, r);
  }
  if (r.iptal) return;

  // 3. adım · Sürüm 21, 2. dilim: SIRALI STOK KONTROLÜ. En ucuzdan başlayarak ürün sayfaları açılır; stokta olan ilk ürüne
  // kadar, en çok STOK_DENEME sayfa. Arama kartında "tükendi" yazan ilan sayfası açılmadan atlanır (sayıya girmez).
  // Ürün sayfası "yok" derse ilan gizlenir (stokYok). Stoğu doğrulanmamış en ucuz ilan "çalıştı" sayılmaz (bkz. renk()).
  if (k.detay === "akakce") {
    const ilk = r.ilgililer.find(x => !x.stokYok) || r.ilgililer[0];
    if (ilk) {
      try { r.akakce = await akakceDetay(ilk.href, r); } catch (e) { r.hata = (r.hata ? r.hata + " · " : "") + String(e); }
      // Sürüm 21.6: Akakçe'de ürün sayfası yerine satıcı satırları okunur; satırlardan biri "Stokta" diyorsa ürün stokta sayılır.
      const stoklu = r.akakce && (r.akakce.satir || []).filter(x => /stokta(?! yok)/i.test(x)).length;
      if (r.akakce && !r.iptal) {
        ilk.stok = stoklu ? "var" : "bilinmiyor";
        ilk.stokNeden = stoklu ? "Akakçe satıcı satırı: Stokta (" + stoklu + "/" + r.akakce.satir.length + " satır)" : "satıcı satırında stok yazmıyor";
        r.stokKontrol.push({ baslik: ilk.baslik, fiyat: ilk.fiyat, durum: ilk.stok, neden: ilk.stokNeden });
      }
    }
    return;
  }
  // Sürüm 21.5: kuralında "stokSayfasi": false olan sitede (Letgo) ilan sayfasında stok işareti yok; yayındaki ilan var sayılır.
  if (k.stokSayfasi === false) {
    const x = r.ilgililer.find(y => !y.stokYok);
    if (x) { x.stok = "var"; x.stokNeden = "ilan yayında (sitede stok bilgisi yok)"; r.stokKontrol.push({ baslik: x.baslik, fiyat: x.fiyat, durum: "var", neden: x.stokNeden }); }
    return;
  }
  let denenen = 0;
  for (const x of r.ilgililer) {
    if (r.iptal) return;
    if (x.stokYok) continue;
    if (denenen >= STOK_DENEME) break;
    denenen++;
    let s;
    try { s = await stokOku(x.href, r, k.stokVar); } catch (e) { s = { durum: "bilinmiyor", neden: "hata: " + e }; }
    if (r.iptal) return;
    x.stok = s.durum; x.stokNeden = s.neden || "";
    if (s.durum === "yok") x.stokYok = true;
    r.stokKontrol.push({ baslik: x.baslik, fiyat: x.fiyat, durum: s.durum, neden: s.neden || "" });
    if (s.durum === "var") break;
  }
}

// Gösterilecek ilanlar: stokta olmadığı bilinenler (kartta ya da ürün sayfasında) çıkarılır. En ucuz = bunların ilki.
function gorunenler(r) { return (r.ilgililer || []).filter(x => !x.stokYok); }
function enUcuz(r) { return gorunenler(r)[0] || null; }
function stokSirasi(r) {
  return (r.stokKontrol || []).map(x => tl(x.fiyat) + " " + x.durum + " (" + x.neden + ")").join(" → ");
}

// Süre sınırıyla çalıştırır. Sınır dolarsa site "yavaş" sayılır; o ana kadar doldurulan kayıt (kopyası) döner, arkadaki iş "iptal" bayrağıyla durdurulur.
async function siteSinirli(k, sorgu) {
  const r = yeniSonuc(k);
  const sinir = k.sure || SITE_SURE_SINIRI;
  const bas = Date.now();
  const is = siteyiSina(k, sorgu, r).catch(e => { r.hata = (r.hata ? r.hata + " · " : "") + String(e); });
  const kim = await Promise.race([is.then(() => "bitti"), bekle(sinir * 1000).then(() => "zaman")]);
  if (kim === "zaman") {
    r.iptal = true;
    sekmeleriKapat(r);
    const kopya = JSON.parse(JSON.stringify(r));
    kopya.yavas = true; kopya.sinir = sinir; kopya.sure = sinir;
    return kopya;
  }
  r.sure = Math.round((Date.now() - bas) / 1000);
  sekmeleriKapat(r);
  return r;
}

// yesil: en az 3 ürün ayrıldı + ikinci adım okundu · sari: kısmen (az ürün, ikinci adım okunamadı, yalnız takım, fiyatsız ama stokta, ya da sayfada okunandan çok sonuç var)
// kirmizi: okunamadı · yok: sayfa "0 sonuç" diyor · gorunmuyor: ürünler okundu, hiçbiri bu kitap değil (ya da kitap var ama stokta yok, gizlendi)
// yavas: süre sınırı doldu, o ana kadar bu kitap bulunamadı (sonuç yok DEMEK DEĞİL)
// Sürüm 21: "yesil" için gösterilen en ucuz ilanın stoğu ürün sayfasında "var" diye DOĞRULANMIŞ olmalı.
// Bu kitabın bütün ilanları stokta yoksa: takım varsa "sari", yoksa "gorunmuyor".
function renk(r) {
  if (r.ilgililer.length) {
    const g = gorunenler(r);
    if (!g.length) return r.takimlar.length ? "sari" : "gorunmuyor";
    const ikinci = r.k.detay === "akakce" ? (r.akakce && r.akakce.satir && r.akakce.satir.length) : g[0].stok === "var";
    return (ikinci && r.ilgililer.length >= 3) ? "yesil" : "sari";
  }
  if (r.takimlar.length) return "sari";
  if (r.fiyatsizVar.length) return "sari"; // ürün stokta görünüyor ama fiyat okunamadı
  if (r.suphelSayisi) return "sari"; // ürün var ama fiyatı güvenilmez
  if (r.sonucYok || r.sonucSayisi === 0) return "yok";
  if (r.yavas) return "yavas";
  if (r.fiyatsizGizlenen.length) return "gorunmuyor"; // kitap sayfası var ama stokta yok
  if (r.fiyatsizBelirsiz.length) return "sari"; // kitap sayfası var, stok belirsiz
  if (!r.urunSayisi) return "kirmizi";
  if (r.sonucSayisi > r.urunSayisi) return "sari";
  return "gorunmuyor";
}

const RENK_ADI = { yesil: "ÇALIŞTI", sari: "KISMEN", kirmizi: "ÇALIŞMADI", yok: "SONUÇ YOK", gorunmuyor: "GÖRÜNMÜYOR", yavas: "YAVAŞ" };
const DURUM_ADI = { calisan: "çalışan", duzeltiliyor: "düzeltiliyor", aday: "aday" };
function etiket(k) { return DURUM_ADI[k.durum] + (k.acik ? "" : " · KAPALI"); }

function sayacYap(sonuclar) {
  const sayac = { yesil: 0, sari: 0, kirmizi: 0, yok: 0, gorunmuyor: 0, yavas: 0 };
  sonuclar.forEach(r => sayac[renk(r)]++);
  return sayac;
}

async function siralamaTiklaDene(wv, k, sorgu, r) {
  const out = [];
  try {
    out.push("1) basma: " + String(await wv.calistir("(" + siralamaAc.toString() + ")()")));
    await bekle(1500);
    out.push("2) açılan seçenekler: " + String(await wv.calistir("(" + siralamaGorunen.toString() + ")()")));
    const sec = String(await wv.calistir("(" + siralamaSec.toString() + ")()"));
    out.push("3) seçim: " + sec);
    if (/^tıklandı/.test(sec)) {
      await bekle(3000);
      const b = await sonucBekle(wv, sorgu, 10000, k.tur, r, k.kart);
      const it = (b.son && b.son.items) || [];
      const fiy = it.map(u => sayi((u.prices || [])[0] || "0")).filter(x => x > 0);
      const artan = fiy.length > 1 && fiy.every((x, i) => i === 0 || x >= fiy[i - 1]);
      out.push("4) sonuç: " + it.length + " ürün · ilk fiyatlar " + fiy.slice(0, 8).join(" ") + " · artan sıralı: " + (artan ? "EVET" : "hayır") +
        " · yeni adres: " + String((b.son && b.son.url) || "").slice(0, 160) + (b.hata ? " · hata: " + String(b.hata).slice(0, 60) : ""));
    }
  } catch (e) { out.push("hata: " + e); }
  return out;
}

async function sirayla(isler, esZaman, fn) {
  const sonuc = new Array(isler.length);
  let sira = 0;
  async function isci() {
    while (sira < isler.length) { const k = sira++; sonuc[k] = await fn(isler[k]); }
  }
  const iscilier = [];
  for (let n = 0; n < Math.min(esZaman, isler.length); n++) iscilier.push(isci());
  await Promise.all(iscilier);
  return sonuc;
}

// Sürüm 21: ilanın kondisyon/satıcı bilgisi (okunduysa)
function ilanEk(x) {
  const p = [];
  if (x.kondisyon) p.push("kondisyon: " + x.kondisyon);
  if (x.satici) p.push("satıcı: " + x.satici);
  if (x.sehir) p.push("şehir: " + x.sehir);
  return p.length ? " (" + p.join(", ") + ")" : "";
}
// Sürüm 21 · kısa rapor: çalışan site tek satır; "çalıştı" kararının kanıtı (ilan sayısı, en ucuz stoklu ilan, stok sırası) bu satırda.
function kisaSatir(r) {
  const ilk = enUcuz(r);
  let s = "[ÇALIŞTI] " + r.k.ad + " · " + r.sure + " sn · ilgili " + r.ilgililer.length;
  const gizli = r.ilgililer.length - gorunenler(r).length;
  if (gizli) s += " (stokta yok, gizlenen " + gizli + ")";
  if (r.takimlar.length) s += " · takım " + r.takimlar.length;
  if (r.kanitsizSayisi) s += " · kanıtsız elenen " + r.kanitsizSayisi;
  if (ilk) s += " · en ucuz " + tl(ilk.fiyat) + " \"" + ilk.baslik.slice(0, 50) + "\"" + ilanEk(ilk);
  if (r.stokKontrol.length) s += " · stok sırası: " + stokSirasi(r);
  if (r.akakce) s += " · Akakçe ürün sayfası " + (r.akakce.satir || []).length + " satıcı satırı";
  if (r.gezi.length) s += " · " + r.gezi.length + " ek sayfa okundu";
  // Sürüm 21.4: sahaf ilanında kondisyon okunamadıysa kartın yazısı eklenir (gerçek sitede kondisyonun nasıl yazıldığını görmek için).
  // Sürüm 21.6: kuralında "kondisyonKartta": false olan sitede (Kitantik: kondisyon yalnız ürün sayfasında) bu uyarı yazılmaz.
  if (ilk && r.k.tur === "sahaf" && !ilk.kondisyon && r.k.kondisyonKartta !== false) s += " · KONDİSYON OKUNAMADI, kart: " + String(ilk.kart || "").slice(0, 180);
  return s;
}

// ---------------------------------------------------------------
// Rapor: panoya kopyalanacak düz metin. Sürüm 21: önce çalışanlar (tek satır), sonra yalnız sorunlu/kısmen/aday sitelerin ayrıntısı.
// ---------------------------------------------------------------
function raporMetni(sorgu, sonuclar, sure, cihaz) {
  const sayac = sayacYap(sonuclar);
  const satirlar = [];
  satirlar.push("KİTAP SINAMA · sürüm " + SURUM + " · " + new Date().toLocaleString("tr-TR"));
  satirlar.push("Arama: " + sorgu + " · toplam " + sure + " sn · " + cihaz + " · süre sınırı " + SITE_SURE_SINIRI + " sn (Nadir 120) · yavaş eşiği " + YAVAS_ESIK + " sn");
  // Sürüm 21.4: "süre sınırında kesildi" ile "yavaş (eşiği aştı ama bitti)" ayrı sayılır; eskiden özet ile site satırları çelişiyordu.
  const esikAsan = sonuclar.filter(r => !r.yavas && r.sure > YAVAS_ESIK).length;
  satirlar.push("Özet: " + sayac.yesil + " çalıştı · " + sayac.sari + " kısmen · " + sayac.kirmizi + " çalışmadı · " + sayac.yok + " sonuç yok · " + sayac.gorunmuyor + " görünmüyor · " + sayac.yavas + " süre sınırında kesildi · " + esikAsan + " yavaş (" + YAVAS_ESIK + " sn üstü, bitti)");
  satirlar.push("Süreler: " + sonuclar.map(r => r.k.ad + " " + r.sure + (r.yavas ? " (KESİLDİ)" : "")).join(" · "));
  const iyiMi = r => renk(r) === "yesil" && r.k.durum !== "aday" && !r.k.teshis;
  const iyi = sonuclar.filter(iyiMi), sorunlu = sonuclar.filter(r => !iyiMi(r));
  satirlar.push("");
  satirlar.push("ÇALIŞANLAR (" + iyi.length + ") — kanıt: ilgili ilan sayısı, stokta olduğu doğrulanan en ucuz ilan, stok kontrol sırası");
  iyi.forEach(r => satirlar.push(kisaSatir(r)));
  satirlar.push("");
  satirlar.push("SORUNLU, KISMEN ÇALIŞAN VE ADAY SİTELER (" + sorunlu.length + ") — ayrıntı");
  for (const r of sorunlu) {
    const ilk = enUcuz(r);
    // "Sonuç yok" ya da "görünmüyor" olan, aday olmayan sitede teşhis dökümü (yapı, HTML) yazılmaz; neden satırı (sayfada görünen) kalır.
    const kisa = (renk(r) === "yok" || renk(r) === "gorunmuyor") && r.k.durum !== "aday" && !r.k.teshis;
    let s = "[" + RENK_ADI[renk(r)] + "] " + r.k.ad + " (" + etiket(r.k) + ") · " + r.sure + " sn" +
      (r.yavas ? " (SÜRE SINIRINDA KESİLDİ: " + r.sinir + " sn)" : (r.sure > YAVAS_ESIK ? " (yavaş)" : "")) +
      " · yol: " + (r.yol || "-") +
      " · fiyat " + r.fiyatSayisi + " · ürün " + r.urunSayisi + " · ilgili " + r.ilgililer.length;
    if (r.sonucYazisi) s += " · sayfa yazıyor: \"" + r.sonucYazisi + "\"";
    if (r.takimlar.length) s += " · takım " + r.takimlar.length;
    if (r.kanitsizSayisi) s += " · kanıtsız elenen " + r.kanitsizSayisi;
    if (r.suphelSayisi) s += " · fiyatı şüpheli " + r.suphelSayisi;
    if (r.benzerElenen) s += " · \"benzer arama\" modunda elenen " + r.benzerElenen;
    if (r.kitapDisiSayisi) s += " · kitap dışı elenen " + r.kitapDisiSayisi;
    if (r.ekitapElenen) s += " · e-kitap elenen " + r.ekitapElenen;
    if (r.ekitapSayisi) s += " · e-kitap izi " + r.ekitapSayisi;
    const gizli = r.ilgililer.length - gorunenler(r).length;
    if (gizli) s += " · stokta yok (gizlendi) " + gizli;
    if (ilk) s += " · en ucuz " + tl(ilk.fiyat) + " \"" + ilk.baslik.slice(0, 60) + "\"" + ilanEk(ilk) + (ilk.stok === "var" ? "" : " · STOĞU DOĞRULANMADI");
    if (r.stokKontrol.length) s += " · stok sırası: " + stokSirasi(r);
    if (r.engel) s += " · ENGEL: " + r.engel;
    if (r.hata) s += " · hata: " + String(r.hata).slice(0, 120);
    if (r.kutu) s += " · kutu: " + r.kutu;
    satirlar.push(s);
    if (ilk && ilk.kart) satirlar.push("   en ucuzun kartı: " + ilk.kart.slice(0, r.k.tur === "sahaf" ? 250 : 150));
    const gosterilen = ilk || r.takimlar[0];
    if (gosterilen) satirlar.push("   okunan fiyatlar: " + (gosterilen.tum || "-") + " · ilk fiyattan önceki karakterler: " + (gosterilen.ctx || "-") + (gosterilen.linksiz ? " · bağlantısız kart" : ""));
    if (r.suphelOrnek.length) satirlar.push("   fiyatı şüpheli (gösterilmedi): " + r.suphelOrnek.join(" | "));
    const gl = gorunenler(r);
    if (gl.length > 1) satirlar.push("   örnek: " + gl.slice(1, 4).map(x => tl(x.fiyat) + " " + x.baslik.slice(0, 45) + ilanEk(x)).join(" | "));
    if (r.takimlar.length) satirlar.push("   takımlar: " + r.takimlar.slice(0, 3).map(x => tl(x.fiyat) + " " + x.baslik.slice(0, 55)).join(" | "));
    if (r.kanitsizOrnek.length) satirlar.push("   kanıtsız elenenler: " + r.kanitsizOrnek.join(" | "));
    if (r.fiyatsizGizlenen.length || r.fiyatsizVar.length || r.fiyatsizBelirsiz.length) {
      satirlar.push("   fiyatsız kart (adı eşleşti, arama kartında fiyat yok; fiyat ürün sayfasından OKUNMAZ): stokta yok → gizlendi " + r.fiyatsizGizlenen.length +
        " · stokta var → FİYAT OKUNAMADI " + r.fiyatsizVar.length + " · stok belirsiz " + r.fiyatsizBelirsiz.length);
      r.fiyatsizVar.forEach(x => satirlar.push("   FİYAT OKUNAMADI (stokta görünüyor): " + x.baslik.slice(0, 70) + " → " + String(x.href).slice(0, 120) + " (" + x.neden + ")"));
    }
    if (r.benzer) satirlar.push("   sayfa \"bu arama için sonuç yok, benzer arama listeleniyor\" diyor; listelenen ürünler bu aramanın sonucu sayılmadı");
    if (!r.ilgililer.length && r.okunanlar.length) satirlar.push("   okunan ilk ürünler: " + r.okunanlar.join(" | "));
    if (r.yapi && !kisa) {
      (r.yapi.kartlar || []).forEach((x, i) => {
        satirlar.push("   yapı " + (i + 1) + ") fiyat " + x.fiyat + " · " + String(x.yol).slice(0, 230));
        satirlar.push("      bağlantı: " + String(x.baglanti).slice(0, 200));
      });
      if ((r.yapi.fiyatSinifi || []).length) satirlar.push("   fiyat sınıfları: " + r.yapi.fiyatSinifi.join(" | "));
      if (r.yapi.hata) satirlar.push("   yapı hatası: " + r.yapi.hata);
    }
    if (r.akakce) {
      satirlar.push("   Akakçe ürün sayfası: " + (r.akakce.saticiYazisi || "satıcı sayısı okunamadı") + " · " + (r.akakce.satir || []).length + " satır okundu" + (r.akakce.hata ? " · hata: " + r.akakce.hata : ""));
      (r.akakce.satir || []).slice(0, 8).forEach((x, i) => satirlar.push("   " + (i + 1) + ") " + x.slice(0, 120)));
    }
    if (r.ozet) satirlar.push("   sayfada görünen: \"" + (r.ozet.title || "") + "\" — " + String(r.ozet.metin || r.ozet.hata || "").slice(0, 400));
    if (r.gezi.length) satirlar.push("   sayfa gezisi: " + r.gezi.join(" ; "));
    if (r.sayfaHam) satirlar.push("   SAYFA NUMARALARI (ham): " + r.sayfaHam);
    r.detayRapor.forEach(x => satirlar.push("   " + x));
    if (r.dom && !kisa) satirlar.push("   HTML PARÇASI: " + r.dom);
    if (r.ham) satirlar.push("   HAM KART (bütün nitelikleriyle): " + r.ham);
    if (r.k.teshis) satirlar.push("   SIRALAMA SEÇENEKLERİ: " + (r.siralama || "bulunamadı"));
    if (r.k.teshis) satirlar.push("   SIRALAMA MENÜSÜ (açılır liste): " + (r.siralamaMenusu || "bulunamadı"));
    if (r.k.teshis) satirlar.push("   SAYFALAMA ADAYLARI: " + (r.sayfalama || "bulunamadı"));
    (r.adresDeneme || []).forEach((x, i) => satirlar.push("   ADRES DENEMESİ " + (i + 1) + ") " + x));
    (r.siralaTikla || []).forEach(x => satirlar.push("   SIRALA TIKLA " + x));
    if (r.k.kart) satirlar.push("   kart kuralı: " + (r.kartKap ? r.kartKap + " kart bulundu" : "SAYFADA KAP BULUNAMADI, genel okuyucu kullanıldı") + " (" + r.k.kart.kap + ")");
    satirlar.push("   son adres: " + (r.sonUrl || r.adres || "-").slice(0, 160));
  }
  return satirlar.join("\n");
}

// ---------------------------------------------------------------
// Rapor: ekranda gösterilecek sayfa
// ---------------------------------------------------------------
function raporSayfasi(sorgu, sonuclar, sure, dosyaYeri) {
  const sayac = sayacYap(sonuclar);
  const kartlar = sonuclar.map(r => {
    const rk = renk(r);
    const ilk = enUcuz(r);
    const satir = [];
    satir.push("Yol: " + kacis(r.yol || "-") + " · " + r.sure + " sn" + (r.yavas ? " · <span class=\"kir\">süre sınırında kesildi (" + r.sinir + " sn)</span>" : (r.sure > YAVAS_ESIK ? " · yavaş" : "")));
    satir.push("Okunan fiyat: " + r.fiyatSayisi + " · ürün: " + r.urunSayisi + " · bu kitapla ilgili: " + r.ilgililer.length + (r.takimlar.length ? " · takım: " + r.takimlar.length : ""));
    if (r.sonucYazisi) satir.push("Sayfa şunu yazıyor: " + kacis(r.sonucYazisi));
    if (r.kanitsizSayisi) satir.push("Başka kitap olduğu anlaşılıp elenen: " + r.kanitsizSayisi);
    if (r.benzer) satir.push("Sayfa \"benzer arama\" listeliyor; ürünler elendi: " + r.benzerElenen);
    if (r.kitapDisiSayisi || r.ekitapElenen || r.ekitapSayisi) satir.push("Kitap olmayan ilan elendi: " + r.kitapDisiSayisi + " · e-kitap elendi: " + (r.ekitapElenen || 0) + " · e-kitap izi: " + r.ekitapSayisi);
    if (ilk) satir.push("En ucuz: <b>" + tl(ilk.fiyat) + "</b> · " + kacis(ilk.baslik.slice(0, 70)) + (ilk.ekitap ? " <span class=\"kir\">(e-kitap olabilir)</span>" : ""));
    if (!ilk && r.takimlar.length) satir.push("Yalnız takım var: <b>" + tl(r.takimlar[0].fiyat) + "</b> · " + kacis(r.takimlar[0].baslik.slice(0, 60)));
    if (r.fiyatsizVar.length) satir.push("Stokta görünüyor ama <b>fiyat okunamadı</b>: " + kacis(r.fiyatsizVar[0].baslik.slice(0, 60)));
    if (r.fiyatsizGizlenen.length) satir.push("Kitap sayfası var ama stokta yok (gizlendi): " + r.fiyatsizGizlenen.length);
    if (r.fiyatsizBelirsiz.length) satir.push("Kitap sayfası var, stok belirsiz: " + r.fiyatsizBelirsiz.length);
    if (r.yapi && (r.yapi.kartlar || []).length) satir.push("Teşhis: " + r.yapi.kartlar.length + " kartın yapısı rapora yazıldı");
    if (r.dom) satir.push("Teşhis: sayfanın HTML parçası rapora yazıldı");
    if (r.stokKontrol.length) satir.push("Stok sırası (ucuzdan pahalıya): " + kacis(stokSirasi(r)));
    if (r.ilgililer.length - gorunenler(r).length) satir.push("Stokta olmadığı için gizlenen: " + (r.ilgililer.length - gorunenler(r).length));
    if (r.akakce) satir.push("Akakçe ürün sayfası: " + kacis(r.akakce.saticiYazisi || "satıcı sayısı okunamadı") + " · " + (r.akakce.satir || []).length + " satıcı satırı okundu");
    if (r.engel) satir.push("<span class=\"kir\">Robot doğrulaması: " + kacis(r.engel) + "</span>");
    if (r.hata) satir.push("<span class=\"kir\">Hata: " + kacis(String(r.hata).slice(0, 120)) + "</span>");
    if (r.ozet) satir.push("Sayfada görünen: " + kacis((r.ozet.title || "") + " — " + String(r.ozet.metin || "").slice(0, 140)));
    return '<a class="k ' + rk + '" href="' + kacis(r.sonUrl || r.adres) + '"><div class="ust"><span class="ad">' + kacis(r.k.ad) +
      '</span><span class="rozet ' + rk + '">' + RENK_ADI[rk] + "</span></div>" +
      '<div class="tur">' + kacis(etiket(r.k)) + " · " + kacis(r.k.tur) + "</div>" +
      satir.map(x => '<div class="s">' + x + "</div>").join("") + "</a>";
  }).join("");
  return `<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{margin:0;background:#F6F1E7;color:#1E2A28;font-family:-apple-system,sans-serif}
.w{padding:22px 18px 60px;max-width:760px;margin:0 auto}
h1{font-family:Georgia,serif;font-size:28px;margin:0 0 6px}
.alt{color:#6B6A63;font-size:17px;margin-bottom:8px;line-height:1.4}
.bilgi{background:#1F4E46;color:#fff;border-radius:12px;padding:12px 14px;font-size:16px;margin:12px 0 18px;line-height:1.5}
.ozet{display:flex;gap:6px;margin-bottom:18px}
.ozet div{flex:1;text-align:center;border-radius:12px;padding:10px 2px;font-weight:700;font-size:20px}
.ozet span{display:block;font-weight:500;font-size:12px}
.k{display:block;text-decoration:none;color:inherit;background:#FFFDF8;border:1px solid #E3D9C6;border-left:8px solid #ccc;border-radius:14px;padding:14px;margin-bottom:10px}
.k.yesil{border-left-color:#2E7D4F}.k.sari{border-left-color:#C99A1E}.k.kirmizi{border-left-color:#B5432F}.k.yok,.k.gorunmuyor{border-left-color:#8C8A82}.k.yavas{border-left-color:#6B4E9B}
.ust{display:flex;justify-content:space-between;align-items:center;gap:10px}
.ad{font-family:Georgia,serif;font-size:21px;font-weight:700}
.rozet{font-size:13px;font-weight:700;color:#fff;border-radius:99px;padding:3px 10px;white-space:nowrap}
.rozet.yesil,.ozet .yesil{background:#2E7D4F;color:#fff}.rozet.sari,.ozet .sari{background:#C99A1E;color:#fff}.rozet.kirmizi,.ozet .kirmizi{background:#B5432F;color:#fff}.rozet.yok,.ozet .yok,.rozet.gorunmuyor,.ozet .gorunmuyor{background:#8C8A82;color:#fff}.rozet.yavas,.ozet .yavas{background:#6B4E9B;color:#fff}
.tur{font-size:13px;color:#8C8A82;margin:2px 0 6px}
.s{font-size:15px;line-height:1.4;margin-top:3px}
.kir{color:#8A3A2C}
</style></head><body><div class="w">
<h1>Site sınaması</h1>
<div class="alt">Arama: <b>${kacis(sorgu)}</b> · ${sonuclar.length} kaynak · ${sure} saniye · sürüm ${kacis(SURUM)}</div>
<div class="bilgi">${dosyaYeri ? "Rapor dosyaya kaydedildi:<br><b>" + kacis(dosyaYeri) + "</b><br>Bu dosyayı sohbete ek olarak ekle." : "Rapor dosyaya kaydedilemedi; panoya kopyalandı."}</div>
<div class="ozet"><div class="yesil">${sayac.yesil}<span>çalıştı</span></div><div class="sari">${sayac.sari}<span>kısmen</span></div><div class="kirmizi">${sayac.kirmizi}<span>çalışmadı</span></div><div class="yok">${sayac.yok}<span>sonuç yok</span></div><div class="gorunmuyor">${sayac.gorunmuyor}<span>görünmüyor</span></div><div class="yavas">${sayac.yavas}<span>yavaş</span></div></div>
<div class="alt">Bir kutuya dokunursan o sitenin sonuç sayfası Safari'de açılır.</div>
${kartlar}
</div></body></html>`;
}


// ---------------------------------------------------------------
// Dışarıya açılan kapı: bütün siteleri (ya da secenek.siteler'i) sınar.
// secenek.bildir(r): her site bitince çağrılır (asıl uygulamada sonuçları geldikçe göstermek için).
// ---------------------------------------------------------------
async function siteleriSina(sorgu, secenek) {
  secenek = secenek || {};
  const siteler = secenek.siteler || KURAL.siteler || [];
  const ayniAnda = secenek.ayniAnda || AYAR.ayniAnda || 4;
  return sirayla(siteler, ayniAnda, async k => {
    const r = await siteSinirli(k, sorgu);
    if (secenek.bildir) { try { secenek.bildir(r); } catch (e) { } }
    return r;
  });
}

return { SURUM, siteleriSina, raporMetni, raporSayfasi, renk, RENK_ADI, sayacYap };
}
if (typeof module !== "undefined" && module) module.exports = MotorKur;

// =====================================================================
// SCRIPTABLE KABUĞU (iPad sınaması). Motoru Scriptable'ın görünmez tarayıcısıyla çalıştırır,
// raporu ekranda gösterir ve iCloud Drive › Scriptable › kitap-sinama-raporu.txt dosyasına yazar.
// =====================================================================
const VARSAYILAN_KITAP = "Kürk Mantolu Madonna";
// GitHub'daki kurallar.json adresi. Boşsa ya da alınamazsa betiğin içine gömülü kurallar kullanılır.
const KURAL_ADRESI = "";

// Tarayıcı sözleşmesinin Scriptable karşılığı (ayrıntı: motorun başındaki açıklama)
const TARAYICI = {
  ad: "scriptable",
  yeni() {
    const wv = new WebView();
    return {
      ac: url => wv.loadURL(url),
      calistir: ifade => wv.evaluateJavaScript(ifade, false),
      kapat() { } // Scriptable'da görünmez sekmeyi kapatmaya gerek yok
    };
  },
  bekle: ms => new Promise(r => Timer.schedule(ms, false, r))
};

async function kurallariYukle() {
  if (KURAL_ADRESI) {
    try {
      const istek = new Request(KURAL_ADRESI);
      istek.timeoutInterval = 15;
      const k = await istek.loadJSON();
      if (k && Array.isArray(k.siteler) && k.siteler.length) return { kural: k, kaynak: "uzak" };
    } catch (e) { }
    return { kural: GOMULU_KURALLAR, kaynak: "gömülü (uzaktaki alınamadı)" };
  }
  return { kural: GOMULU_KURALLAR, kaynak: "gömülü" };
}

async function calis() {
  const { kural, kaynak } = await kurallariYukle();
  const motor = MotorKur(TARAYICI, kural);
  const giris = new Alert();
  giris.title = "Site sınaması";
  giris.message = "Denenecek kitabın adı. " + kural.siteler.length + " site denenecek; 4–8 dakika sürebilir. Bu sırada Scriptable açık kalsın, ekran kapanmasın.";
  giris.addTextField("Kitap adı", VARSAYILAN_KITAP);
  giris.addAction("Başlat");
  giris.addCancelAction("Vazgeç");
  if (await giris.presentAlert() === -1) return;
  const sorgu = giris.textFieldValue(0).trim() || VARSAYILAN_KITAP;

  const bas = Date.now();
  const sonuclar = await motor.siteleriSina(sorgu);
  const sure = Math.round((Date.now() - bas) / 1000);

  let cihaz = "";
  try { cihaz = Device.model() + " " + Device.systemName() + " " + Device.systemVersion(); } catch (e) { }
  cihaz += " · kurallar: " + kaynak + " (sürüm " + (kural.surum || "?") + ")";
  if (typeof YUKLEYICI_KAYNAK !== "undefined") cihaz += " · betik: " + YUKLEYICI_KAYNAK;
  const metin = motor.raporMetni(sorgu, sonuclar, sure, cihaz);
  try { Pasteboard.copy(metin); } catch (e) { }
  const dosyaYeri = raporuKaydet(metin);

  const sayfa = new WebView();
  sayfa.shouldAllowRequest = istek => {
    if (istek.url.startsWith("http")) { Safari.open(istek.url); return false; }
    return true;
  };
  await sayfa.loadHTML(motor.raporSayfasi(sorgu, sonuclar, sure, dosyaYeri));
  await sayfa.present(true);
}

// Raporu Dosyalar uygulamasından görülebilen bir dosyaya yazar (pano güvenilir olmadığı için).
// Önce iCloud Drive › Scriptable, olmazsa iPad'imde › Scriptable. Her sınamada aynı dosyanın üzerine yazar.
function raporuKaydet(metin) {
  const ad = "kitap-sinama-raporu.txt";
  try {
    const fm = FileManager.iCloud();
    fm.writeString(fm.joinPath(fm.documentsDirectory(), ad), metin);
    return "iCloud Drive › Scriptable › " + ad;
  } catch (e) {
    try {
      const fm = FileManager.local();
      fm.writeString(fm.joinPath(fm.documentsDirectory(), ad), metin);
      return "iPad'imde › Scriptable › " + ad;
    } catch (e2) { return ""; }
  }
}

await calis();
Script.complete();
