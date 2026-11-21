// Kitap Fiyat — Site sınaması / Sistem kontrolü (Scriptable) · sürüm 22.37
// BU DOSYA OTOMATİK BİRLEŞTİRİLDİ: kaynak/kurallar.json + kaynak/motor.js + kaynak/scriptable-kabuk.js
// icon-color: orange; icon-glyph: magic;
// Kitap Fiyat — Site sınaması / Sistem kontrolü (Scriptable) · sürüm 22.38
// Sürüm 22.38 · Ana 48 · [FİYAT ŞÜPHELİ] düzeltmesi (Fatih: seçenek A). Kitapyurdu 24,90 TL gerçek ilan (Kapra, stok 10+; iPad 21.11 12:51) siteler arası denetimde şüpheli sayılıp 'en ucuz' gösterilmiyordu. Stok için açılan ürün sayfasında kart fiyatı artık ARANIR (fiyat sayfadan alınmaz): öneri bölümünden ('benzer ürünler' vb.) önce, stok işaretinin yanında ve taksit/üyelik (Plus, Platin)/kargo/eşik satırı dışında görülürse 'aynı'. Stoğu 'var' ve sayfada 'aynı' olan ilan şüpheli sayılmaz ('[düşük fiyat ürün sayfasında doğrulandı]'). Doğrulanamazsa eski davranış (şüpheli, aşağıda) sürer ve kısa satırda 'DAHA UCUZ AMA FİYATI DOĞRULANAMADI N: ... (neden)' yazılır. Stok satırında her açılan sayfa için 'sayfada kart fiyatı: aynı/görülmedi/...' yazılır (Kural 11: iPad turunda ilk denetlenecek). Ek istek yok. Sınama: sayfa-fiyat 15 senaryo (gerçek D&R ve Halk ürün sayfası dahil), fiyat-denetle 10, tum-kayitlar 22.37↔22.38 AYNI, eski setler geçti.
// Sürüm 22.37 · Ana 47 · (1) Halk Kitabevi kart kuralı: indirimsiz liste fiyatı yerine satış fiyatı okunur (bulut ham sayfa: 65,00 → 48,75 TL; 95 → 90,25; 160 → 139,20; 170 → 109,56); ayrı yazar kutusu okunur. Kartın ayrı yazar alanı girilen yazarı taşıyorsa yazar kanıtıdır (bütün siteler). (2) Önek: marka + yazar adı ('Yapı Kredi Yayınları Sabahattin Ali Kürk …') ve dizi adıyla biten önek ('Bilir Kitap Klasik Seri: …') yayınevi sayılır; '&' ve '+' ayraç sayılır. (3) Pazarama 'Plus ile N TL' üyelik fiyatı fiyat sayılmaz. Android'de denenmedi.
// Sürüm 22.36 · Ana 47 · (1) 'Başka kitap olabilir' kuralı başlığın başındaki yayınevi/marka adını başka başlık sanıyordu (iPad 22.35: Trendyol'da 40–50, Hepsiburada'da 8 gerçek basım alta indi). Önek artık ad listesinden değil yapıdan tanınır: Trendyol kartının ayrı marka kutusu, '… Kitap/Yayınları/Kitabevi' ekiyle biten önek, başlıkta yayınevi olarak yinelenen ad, yazarın adı ('Sabahattin Ali'nin …'). Hepsiburada, Trendyol ve n11'de bağlaçsız 1–2 sözcüklük önek başka başlık kanıtı sayılmaz ama [C] kalır. 've/ile' bağlaçlı başka adlar (Kir ve Kefaret, Yemin Adak ve Keffaret) eskisi gibi taşınır/elenir. 'hırka' kitap dışı. (2) Amazon 'Seçenekleri gör' düğmesi ürün adı sanılmaz (Kefaret McEwan teklif kartı). (3) Raporda site başına 'en ucuz 5' satırı ve 'ÖNEK yayınevi/marka sayıldı N' sayısı. Android'de denenmedi.
// Sürüm 22.35 · Ana 45 · (1) Sahafta: her eser kartının sayfası açılır, satan her sahaf ayrı ilan (ad, kondisyon, kargo, fiyat); 'sonuç yok' kod devreye girdikten ≥3 sn sonra; sayfa hiç hazır olmazsa ikinci arama yok. (2) Başka yazar/başka ad: güçlü kanıt (ayrı yazar alanı + başlık farkı) elenir, tek kanıt 'BAŞKA KİTAP OLABİLİR' bölümüne (en ucuz sayılmaz); adresteki yazar ve ISBN yazar kanıtıdır. (3) Sayfa: Trendyol &pi, n11 &pg, Pandora &page, BKM &ps; iki ardışık ilgisiz sayfada durulur; adres denemeleri kaldırıldı; aynı anda 6 site. (4) Okuyucu: Amazon 'öne çıkan teklif yok' kartı, n11 mağaza adlı ürün adresi, Trendyol/Pazarama sayı kalıbı, Pazarama kaydırma, Halk BİLİNMİYOR. Android'de denenmedi.
// Sürüm 22.34 · Ana 43 · (1) SAHAFTA yanlış 'SONUÇ YOK': site sayfayı önce boş hâliyle ('0 sonuç · Sonuç bulunamadı') gönderip ilanları sonra kendi koduyla yüklüyor; motor ilk 4,5 sn'de boş hâli görüp duruyordu (iPad 21.11 Kefaret). Artık 'yok' yalnız sayfanın kodu devreye girince (React işareti) ve 'Aranıyor' kalkınca kabul edilir; sayfa hiç hazır olmazsa 'SAYFA HAZIR OLMADI · BİLİNMİYOR' yazılır ve ana sayfa yolu denenmez. Sitenin yazdığı sayı (.e-ara-meta) ve kart yazarı (.author) okunur. (2) SAYFA KURALLARI (iPad teşhisindeki gerçek bağlantılarla): Kitapyurdu, Hepsiburada, Akakçe, Amazon (en çok 2 ek sayfa); sayı kalıbı Letgo, Hepsiburada. (3) ÖLÇÜM (yalnız rapor): Trendyol, Pazarama, n11, Pandora, BKM için aday sayfa adresi bir kez denenir (21.8 adresDene; taban artık 1. sayfanın gerçek adresi). (4) HIZ: ağır siteler kuyruğa önce girer (onceSiteler); sonraki sayfalar ikişer açılır (gerçek bağlantı ya da kanıtlı sayfa eki, sitenin gösterdiği son sayfayı aşmadan; Amazon tek). (5) RAPOR: 'N ek sayfa okundu' yalnız yeni ilan getiren sayfaları sayar; site 0 sonuç yazarken öneri kartı okunan sayılmaz. Nadir ve Kitantik DEĞİŞMEDİ. Derece, puan, eleme kuralları aynı.
// BU DOSYA OTOMATİK BİRLEŞTİRİLDİ: kaynak/kurallar.json + kaynak/motor.js + kaynak/scriptable-kabuk.js
// Sürüm 22.33 · Ana 42 · SONUNA KADAR OKUMA ve KAPSAM SATIRI. (1) Sayfa kuralı olan sitelerde (D&R, SahafPazar, Kitapseç, Dost Kitabevi; kurallar.json 'sayfaBag') aranan kitap ilk sayfada görünse de sonraki sayfalar okunur; sonraki sayfanın adresi sayfadaki gerçek bağlantıdan alınır. Durma: son sayfa, yeni ilan yok, ilk ENGEL (ısrar yok), en çok 12 ek sayfa, sitenin başından 40 sn süre bütçesi (site 90 sn sınırına çarpıp 'yavaş' sayılmasın); sayfalar arası yavaş başlayan aralık 2 → 1,5 → 1 → 0,8 sn; okunan sayfanın sekmesi hemen kapatılır. Sahafta ('sayfaTikla') tıklamayla aynı sınırlarla. Nadir ve Kitantik DEĞİŞMEDİ. (2) Raporda her site için KAPSAM satırı: okunan ilan / sitenin yazdığı · sayfa / son sayfa · durma nedeni · TAM ya da EKSİK OLABİLİR. Sayfa kuralı olmayan sitede yalnız rapor için teşhis: sonuç yazıları, sayfalama adayları ve sitenin kendi 2. sayfa bağlantısı varsa bir kez açılıp kaç yeni ilan verdiği (sonuçlara karışmaz; site başına en çok 1 ek istek). (3) D&R kart kuralı: öneri şeridi (ütü, tava vb.) okunmaz; ilk kartın fiyatı süzgeçteki '0 TL - 200 TL' yazısından alınmaz (kayıt: okunan 32→17 = sitenin yazdığı 17; ilgili ilanlar 22.32 ile aynı). (4) Dost Kitabevi eklendi (kart kuralı; kayıtlı sayfada 16/16, 'Stokta yok' 4 ilan gizlenir). Derece, puan, sıralama, eleme kuralları aynı.
// Sürüm 22.32 · Ana 39 · (1) D&R «Kefaret»: en ucuz ilan (N. İpek Gökdel, DEX, 75,14 TL) 'fiyatı şüpheli' diye gizleniyordu: fiyattan önceki metnin 'x' ile bitmesi taksit ('3 x 533 TL') sayılıyordu, yayınevi 'DEX' de x ile bitiyor. Artık 'x' yalnız rakamdan sonra ('3 x', '3x') taksit sayılır; 'DEX', 'Karl Marx', 'Malcolm X', 'Redux' fiyatı atlatmaz (bütün siteler). Kayıtlı D&R sayfasında Gökdel ilanı ilgililere girdi (10→11); yazarsız aramada en ucuz o. (2) Kitapyurdu ve BKM: 'en ucuz' ilanın stoğu doğrulanmıyor, stok sırasında daha ucuz ilan 'var' çıkıyordu. Neden: stok sırası her sitede o anki sıraya göre yapılır; siteler bitince siteler arası fiyat denetimi ([FİYAT ŞÜPHELİ] +5) ve yazarsız [C] (+2) listeyi yeniden sıralar; stoğu doğrulanan ucuz ilan aşağı iner, sınanmamış ilan başa geçer. Artık yeniden sıralama sonrası en üstteki ilan sınanmamışsa ya da doğrulanan ilanın üstüne sınanmamış ilan çıktıysa stok sırası kaldığı yerden sürdürülür (sınanmış ilan yeniden açılmaz, en çok 3 sayfa, site başına en çok 30 sn, en çok 4 site birlikte). Akakçe'de satıcı satırları yeni en üstteki ilan için yeniden okunur; Letgo'da yeni en üstteki ilan 'ilan yayında' sayılır. Raporda 'sıralama sonrası' ve süreye '(+N sn sıralama sonrası)' yazılır. Sıralama değişmediyse sayfa açılmaz. Bağımsız denetim (Opus yüksek): YAYINLANABİLİR; gösterdiği 5 küçük madde kapatıldı. Derece, puan, sıralama ve eleme kuralları aynı.
// Sürüm 22.31 · Ana 38 · Kitapseç'te sayfadaki 20 kartın 4'ü atlanıyordu (Dorlion, Kırmızı Kedi, Koridor, İskele): ürün adresinde yayınevi adı geçtiği için ('...-dorlion-yayinevi_urn...', '...-iskele-yayincilik_urn...') genel okuyucu bu bağlantıyı yayınevi sayfası sanıyordu. Artık adresin son parçası aranan kitabın adını taşıyorsa ve 'yazar/yayınevi/marka' sözcüğü klasör adında ya da sorgu kısmında değilse bağlantı ürün sayılır; /yazar/…, /yayinevi/…, ?publisher=…, kategori ve Amazon yazar bağlantısı yine atlanır; eşleşme tam sözcükle yapılır (bağımsız denetim: 'Ana' araması 'kanat-yayinevi' adresini ürün saymasın). Kayıtlı sayfada 16/20 → 20/20; D&R aynı. Derece, puan, sıralama, eleme aynı. (Sürüm 22.27–22.30: ana sayfa yolu kararı; ayrıntı surumler/ ve arsiv/.)
// Sürüm 22.26 · Ana 18 · iPad'in Türkçe çevrimdışı hata yazısı ('İnternet bağlantısı çevrimdışı gözüküyor.', kod numarasız) artık tanınır; 22.24 yalnız 'görünüyor' biçimini arıyordu. Asıl kanıt yoklama olduğu için 22.24 sonucu etkilenmemişti. (Sürüm 22.25 · Ana 18 · iPad 22.24 testinde Wi-Fi kapalıyken arama 1 dakikadan uzun sürdü, ekranda bir şey çıkmadı. Artık bağlantı sitelerden ÖNCE yoklanır; iki adres de iki kez (3 sn arayla) açılmazsa siteler hiç açılmaz, hepsi ÇALIŞMADI [BAĞLANTI] döner ve raporda 'ÇEVRİMDIŞI (22.25)' satırı çıkar (birkaç saniye). Aynı satırda tek bir site adresiyle teşhis: iPad'de sayfa açılışı internetsizken reddediyor mu, askıda mı kalıyor. iPad kabuğunda yoklama, adreslerden biri 'var' deyince öteki beklenmeden döner. Yalnız 'yok' (iki adres de hata) bu yola girer; internet varken davranış 22.24 ile aynı. (Sürüm 22.24 · Ana 18 · İnternet kesintisi site sorunundan ayrılır ve site düzeni değişikliği işaretlenir (yalnız rapor bilgisi). (1) Çalışmayan ya da süre sınırında kesilen sitede motor bağlantıyı yoklar (iki bağımsız adres: Google generate_204 ve Apple hotspot-detect); ikisi de açılmıyorsa ya da sayfa hatası 'cihaz çevrimdışı' diyorsa site [BAĞLANTI] alır ve raporun başına 'BAĞLANTI SORUNU' satırı yazılır; arama başında da bir yoklama yapılır. (2) Sayfa 'cihaz çevrimdışı' hatasıyla hiç açılmadıysa 15 sn bekleme atlanır (internetsiz arama ~100 sn yerine ~10 sn). (3) Sayfa açıldı, site sonuç olduğunu yazıyor ya da sayfada fiyat var ama hiç ilan ayrılamadıysa [YAPI?] işareti: site düzeni değişmiş olabilir (tek arama kanıt değildir). Renk/etiket, sayaç, derece, puan, sıralama, eleme aynı. (Sürüm 22.23 · Ana 17 · Letgo'nun asıl nedeni bulundu (iPad 22.22 teşhisi): yazarlı aramada motor önce 'ad + yazar' sayfasını tutuyordu; Letgo bu sayfada '6 ilan bulundu' deyip kart göstermedi, daha geniş 'yalnız ad' sayfası ise '0 ilan bulundu' dedi ama dikkate alınmadı. Artık tutulan sayfada hiç ürün yoksa ve 'yalnız ad' sayfası kendisi 'sonuç yok' diyorsa SONUÇ YOK yazılır (bütün siteler; okunan ürün varsa etiket değişmez; 0 ürün tek başına 'yok' sayılmaz). Derece, puan, sıralama, eleme aynı. (Sürüm 22.22 · Ana 17 · Letgo teşhisi ve olası düzeltme: Letgo'da ürün yoksa ve 'yok' yazısı da yoksa sayfa sonuna kaydırılır, 3 sn sonra yeniden okunur (boş sonuç iletisi ancak görünür olunca çiziliyor olabilir); yazı çıkarsa SONUÇ YOK. Liste raporunda Letgo ÇALIŞMADI ise 'TEŞHİS (22.22)' satırları: tarayıcı genişliği ve kimliği (UA), sayfa kodunda (HTML) 'yok' izleri, sayfanın görünen metninin tamamı. Neden: Fatih'in Safari ekranı (masaüstü görünüm) 'aramanızda 0 ilan bulundu' ve 'İlan bulunamadı' gösteriyor; motorun sayfası 'Uygulamada Aç' ile başlıyor (telefon görünümü olabilir) ve 2603 harflik metinde bu yazılar yok. Derece, puan, sıralama, eleme aynı. (Sürüm 22.21 · Ana 17 · Letgo'da ilan olmayan kitap ÇALIŞMADI yerine SONUÇ YOK çıkar: sayfa hiç ürün vermediyse ve sitenin kendi "sonuç bulunamadı" yazısı ilk 15.000 harfte değil de sayfanın devamında geçiyorsa (kurallar.json "yokTumMetin", yalnız Letgo). Ürün yoksa ve yazı da yoksa ÇALIŞMADI kalır (0 ürün tek başına "yok" sayılmaz). Liste raporunda ÇALIŞMADI satırına sayfanın tamamındaki 'yok' yazısı ve ipuçları da yazılır (teşhis). Derece, puan, sıralama ve eleme aynı. (Sürüm 22.20 · Ana 16 · Rapordaki 'ilan yok' satırında ÇALIŞMADI olan sitenin nedeni artık kısa yazılır (ENGEL, sayfada görünen ilk metin, hata, yol, ürün sayısı). Letgo Şeyh Bedreddin Destanı'nda iki iPad raporunda nedensiz ÇALIŞMADI çıkmıştı; bulutta Letgo bot korumasına (Access Denied) takıldığı için neden ancak iPad'de görülebilir. Yalnız rapor metni; derece, puan, sıralama ve eleme aynı. (Sürüm 22.19 · Ana 16 · (1) 'EK YAZAR ADAYLARI' satırında ana listede karşılığı olan adayın yazımı kullanılır ("Ian Mcewan" yerine "Ian McEwan"). (2) 'Yazar adayı başına en ucuz ilan' bölümü ilk 10 adayla sınırlıydı; 10'un dışında kalan ama EK listede en az 2 siteyle desteklenen aday da artık en ucuz ilan satırı alır (22.18 iPad raporunda Ian McEwan 12. sıradaydı ve 80 TL'lik ilanı görünmedi). Yalnız rapor metni değişti; derece, puan, sıralama ve eleme aynı. (Sürüm 22.18 · Ana 16 · Yazarsız aramada Hepsiburada/Kitapseç/Trendyol/n11/Akakçe başlığındaki "Başlık - Yazar" deseni (örnek: "Yapı Kredi Yayınları Kefaret - Ian McEwan", ayraçsız Kitapseç: "Kefaret Ian McEwan Yapı Kredi Yayınları") rapora "EK YAZAR ADAYLARI (yalnız bilgi)" satırı olarak yazılır. Bu oylar AYRI alanda tutulur; derece, puan, sıralama, eleme ve "YAZAR SEÇİMİ GEREK" kararı değişmedi. Sayı, dizi adı, yayınevi ve baskı sözcüğü taşıyan parçalar aday sayılmaz. (Sürüm 22.17 · Ana 15 · Yazarsız aramada 'yazar adayı başına en ucuz ilan' bölümü artık 1 oylu adayları da kapsar (Ian McEwan gibi); yazar sanılan seri adı 'Solomon Creed' adayın yanında '(seri adı olabilir)' etiketi alır (aday silinmez, gerçek yazar tahmin edilmez). Sıralama ve elemeler değişmedi. (Sürüm 22.16 · Ana 15 · '+N aday daha' notunun yanına kalan yazar adaylarının adları ve oyları yazılır (22.15 iPad raporunda McEwan görünen 10 adayın içinde değildi; gizli 4 adayın içinde olup olmadığı bilinemiyordu). Sıralama ve elemeler değişmedi. (Sürüm 22.15 · Ana 15 · Yazarsız aramada yazar adayı satırı 6 yerine en çok 10 aday gösterir; fazlası "+N aday daha" notuyla bildirilir (adaya göre en ucuz ilan satırlarında da aynı). Sıralama ve elemeler değişmedi. (Sürüm 22.14 · Ana 14 · Yazarsız aramada aynı adla birden çok yazar varsa her yazar adayının en ucuz ilanı ayrı satırda (en çok 6 aday); gizlenen [ad eksik] ilanların başlıkları denetim satırı olarak; Hepsiburada kartı raporda 200 karaktere kadar; 'haber sayfası' kitap dışı. Sıralama ve elemeler değişmedi (yazarlı akış 22.11 ile aynı). (Sürüm 22.13 · Ana 14 · iPad 22.12 raporundan: Nadir/Kitantik'te 'Film Kartı/Sinema Kartı' kitap dışı elenir; Hepsiburada'da 'üzeri/kupon/indirim/kazanç/puan' sayıları fiyat sayılmaz (450 TL üzeri eşiği fiyat sanılıyordu); kart metnindeki yarım HTML etiketi de temizlenir; aynı yazarın farklı yazımları (H. R. Lenormand, Ian Mc Ewan) tek adayda birleşir; BKM ve Amazon kartından da yazar adayı oylanır. Yazarlı akış 22.11 ile aynı (48 akış, fark 0). (Sürüm 22.12 · Ana 14 · Yazarsız aramada yazar adayları: Nadir/Kitantik/yazar alanından yazar okunur, ilan satırına [yazar: …] yazılır, başlığı aynen uyan ilanlardan oylanıp raporda "YAZAR ADAYLARI" (+ "YAZAR SEÇİMİ GEREK") satırı çıkar; yazar ASLA tahminle uygulanmaz. Aranan addan ÖNCE gelen ve hiçbir yazar adayı/yayınevi ile açıklanmayan sözcüğü olan ilan [C] olur (+2, elenmez). Site başına bir örnek kart yazılır. (Sürüm 22.11 · Ana 14 · Yazar girilmediğinde ilan satırlarına kart metni de yazılır (otomatik yazar bulma için hangi sitede yazar nasıl görünüyor incelemesi); başka davranış değişmedi. (Sürüm 22.10 · Ana 14 · Hepsiburada kartında en küçük sayı en büyüğün %15'inden azsa (indirim/kampanya tutarı fiyat sanılıyordu) ilan elenmez, [kart içi fiyat şüpheli] işareti + 5 puan; kart metnindeki <img> etiketi temizlenir. (Sürüm 22.9 · Ana 14 · Bağımsız denetim düzeltmesi: [başka yazar] işareti yalnız yüksek güvenle (≥2 kişi-adı sözcüğü, yayınevi/rozet/Kolektif atılır, girilen yazarın hiçbir sözcüğü bitişik yazımda ya da yazım farkıyla bile yoksa); baş harf, Mc/De, Edip/Edib sorunları giderildi; bitişik yazarlı BKM kartı A olur; [CD/ses] yalnız başlık sonunda/+ ile/sesli kitap. (Sürüm 22.8 · Ana 14 · BKM ve Pandora kartında yazar metni yedeği ([başka yazar] iPad'de de çalışsın), "kanıtı zayıf" listesinde [ad eksik] ilanlar gösterilmez. (22.7: BKM yazar alanı okunur, girilen yazarla uyuşmuyorsa [başka yazar: …] (3 puan, elenmez), ilk 5'te yazar kanıtı yoksa UYARI, "kanıtı zayıf" için en ucuz 3 ilan + kart metni. (22.6: BKM kart kuralı (güncel fiyat), [CD/ses] işareti (2 puan), ham fiyat bağlamı 60 karakter, kompakt raporda "KİTAP YOK" nedeni. (22.5: 22.4'ün yanlış elemeleri düzeltildi (sadece kapak durum notu, üzerinde, sayı N yayın numarası, satıcı notu), inceleme/kılavuz/analiz süzgeci, fiyat denetimi yalnız yazarlı aramada ve A dereceli referansla, yazar kanıtında yazım toleransı, çevirmen/yayınevi/tarih/cilt biçimleri, [başka dil] işareti, ham fiyat tanısı. (22.4: uyum derecesi; 22.3: liste modu; 22.2: yazar ayrı alan.))))))))))))))))))))

const GOMULU_KURALLAR = {
  "surum": "22.37",
  "tarih": "2026-11-21",
  "aciklama": "Kitap Fiyat site kuralları. tur: yeni|sahaf|ikinciel|karsilastirma · acik: asıl uygulamada aranır mı · durum: calisan|duzeltiliyor|aday · url içinde {q} normal, {q5} eski Türkçe kodlama (ISO-8859-9), {qa} Türkçe harfsiz · sayfaGez: sonuç birden çok sayfaysa en çok bu sayfaya kadar okunur · sure: site süre sınırı (sn) · detay: özel ürün sayfası okuyucusu · aday siteler sınamada her zaman denenir ve teşhis dökümü yazar; acik:false olanlar asıl uygulamada aranmaz · kart: siteye özel kart kuralı (CSS seçicileri: kap, ad, fiyat, link, kondisyon, satici); kap bulunamazsa genel okuyucu · teshis: true ise kart yapısı, HTML parçası ve ham kart her sınamada yazılır (teshisSecici: ham kart seçicisi) · stokSayfasi: false ise ilan sayfası açılmaz, yayındaki ilan var sayılır (kişiden satış siteleri) · kart.sehir: satıcının şehri · kondisyonKartta: false ise arama kartında kondisyon yazmadığı bilinir, rapor uyarısı yazılmaz · stokVar: (21.7) ürün sayfasında bu düzenli ifade geçerse ürün stokta sayılır (siteye özel; ör. Sahafta takip düğmesi \"Gelince Haber Ver\" her sayfada yazar)",
  "ayarlar": {
    "ayniAnda": 6,
    "siteSureSiniri": 90,
    "yavasEsik": 45,
    "stokDeneme": 3,
    "sayfaUst": 12,
    "sayfaSure": 40,
    "sayfaAralik": [
      2000,
      1500,
      1000,
      800
    ],
    "sayfaParalel": 2,
    "onceSiteler": [
      "dostkitabevi",
      "dr",
      "kitapyurdu",
      "hepsiburada",
      "akakce",
      "pandora",
      "amazon",
      "letgo",
      "halk"
    ],
    "yokHazirMs": 3000,
    "ayniAndaNot": "22.35 (Ana 45, YÖN KARARI 1 4. yol): 4 → 6. Eski iPad'de bellek/çökme görülürse 4'e dönülür (tek sayı)."
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
    "maske",
    "kanvas",
    "muzikal",
    "film karti",
    "haber sayfasi",
    "sinema karti",
    "hirka"
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
      "ana": "https://www.kitapyurdu.com/",
      "sayfaBag": "route=product/list(?=(?:[^#]*&)?filter_name=)(?:[^#]*&)?page=(\\d+)",
      "not": " 22.34 (Ana 43): sayfaBag (route=product/list…&page=N; arama adresi bu adrese yönlenir). Sitenin yazdığı sayı ('205 ürün', '33 ürün') okunan ilanla çelişti → KULLANILMAZ. Kanıt: iPad 22.33 kapsam teşhisi 21.11.2026 06:34/06:36 (2. sayfa bağlantısı gerçek sayfada görüldü ve yeni ilan verdi)."
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
      "yazarKartMetni": true,
      "not": "21.7 bulut: sayfa boş görünüyor çünkü yardımcı dosyaları bkmcdn03.witcdn.net adresinden geliyor ve bulut izin listesinde yok; motor hatası değil (iPad çalışıyor). 22.6 (14.11.2026): *.witcdn.net izin listesine eklendi, bulutta okunuyor. iPad raporunda 3 kitapta tam 100,00 TL çıkmıştı (okunan fiyatlar 100;200;300;400;500;500, önünde \"0 - \"): kart kuralı olmadan genel okuyucu büyük bir kabı okuyordu; bulutta aynı hata üretilemedi. Kart kuralı gerçek sayfadan: kart div.product-item, ad a.product-title, güncel fiyat .current-price (üstü çizili eski fiyat .product-price-not-discounted okunmaz). 22.34 (Ana 43): adresDene yalnız ölçüm (sayfada 2. sayfa bağlantısı yok; iPad 22.33 teşhisi); sonuç kural değildir.",
      "kart": {
        "kap": "div.product-item",
        "ad": "a.product-title",
        "fiyat": ".current-price",
        "yazar": ".model-title"
      },
      "sayfaEk": "&ps={n}",
      "sayfaEkSurekli": true,
      "not45": "22.35 (Ana 45, K8): bulut gerçek site 21.11: sayfa aşağı kaydırılınca adres &ps=2, &ps=3 oluyor; doğrudan &ps=2..4 → 32+32+32+26 = 122 farklı ilan = sitenin yazdığı \"Toplam 122 ürün bulunmaktadır\" [KANITLI bulut]; &ps=5 boş. iPad'de sayfa 20'lik ve javascript:void(0) numaralı görünüyor; &ps iPad'de DENENMEDİ (çalışmazsa 2. sayfa yeni ilan vermez, durur). &pg/&page iPad'de 1. sayfayı veriyordu."
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
      "ana": "https://www.dr.com.tr/",
      "kart": {
        "kap": ".js-prd-item",
        "ad": ".prd-infos h3 a",
        "link": ".prd-infos h3 a",
        "fiyat": ".prd-actions",
        "yazar": ".prd-infos a.who"
      },
      "sayfaBag": "/search/?\\?[^#]*\\bPage=(\\d+)",
      "sayfaEk": "&Page={n}",
      "not42": "22.33 (Ana 42): kart kuralı kayıtlı gerçek sayfadan (Kefaret 17/17, roman 40/40 kart); sayfanın altındaki öneri şeridi (sgf-dr-card: Tefal, ütü vb.) artık okunmaz; ilk kartın fiyatı süzgeçteki '0 TL - 200 TL' yazısından alınıyordu (Günahların Kefaretine… 200 TL), artık kartın kendi fiyat alanından. Sayfa: ?Page=N [KANITLI Ölçüm 6], sayfa bağlantısı sayfadan okunur."
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
      "ana": "https://www.amazon.com.tr/",
      "sayfaBag": "/s\\?(?=(?:[^#]*&)?k=)(?:[^#]*&)?page=(\\d+)",
      "sayfaUst": 2,
      "not": " 22.34 (Ana 43): sayfaBag &page=N, en çok 2 ek sayfa (Fatih 21.11 05:39: 'Genelde 4-5 tane çıkıyor', küçük sınır). Sitenin yazdığı sayı ('20 sonuç' ↔ 14+19 okunan) çelişti → KULLANILMAZ. Kanıt: iPad 22.33 kapsam teşhisi 21.11.2026 06:34/06:36 (2. sayfa bağlantısı gerçek sayfada görüldü ve yeni ilan verdi).",
      "sayfaParalel": 1
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
      "not": "Arama kartında kondisyon yok (yalnız ürün sayfasında); satıcı kartta \"İkinci El - <satıcı>\" diye yazıyor (21.6). 21.8 [KANITLI, iPad]: sayfa adresi &page=N çalışıyor (page=2 ilk sayfadan tamamen farklı 20 ilan); sıralama adresi tahmini boşa gitti. 21.9 [KANITLI, iPad]: Sırala düğmesi + \"Fiyat Artan\" tıklanınca adres şuna döndü: &sort=salePrice;asc;L (ilk fiyatlar 20 / 19,99 / 20 TL: varsayılan sıralamada en ucuz 27-50 TL çıkıyordu). 22.0 [KANITLI, iPad, Kürk Mantolu Madonna]: arama adresine sıralama yazıldı, sonraki sayfalar adresle (&page=N) okunur (en çok 3 sayfa): 60 ilan, 58 ilgili, en ucuz 14,64 TL (sıralamasız okumada 27-50 TL çıkıyordu). 22.1: teşhis kapatıldı. Bulut buradan engelli (Cloudflare), yalnız iPad.",
      "sayfaGez": 3,
      "teshis": false,
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
      "ana": "https://www.hepsiburada.com/",
      "sayfaBag": "/ara\\?(?=(?:[^#]*&)?q=)(?:[^#]*&)?sayfa=(\\d+)",
      "sayfaEk": "&sayfa={n}",
      "sonucKalip": "ile ilgili\\s*(\\d[\\d.]*)\\s*ürün bulduk",
      "not": " 22.34 (Ana 43): sayfaBag &sayfa=N (sayfa=0 bağlantısı da var; motor 0'ı atlar), sonucKalip 'ile ilgili N ürün bulduk' (Kefaret 18 = okunan 18). Kanıt: iPad 22.33 kapsam teşhisi 21.11.2026 06:34/06:36 (2. sayfa bağlantısı gerçek sayfada görüldü ve yeni ilan verdi).",
      "markaOnde": true,
      "notMarka": "22.36 (Ana 47): başlık 'marka/yayınevi + kitap adı' biçiminde gelir [KANITLI: iPad 22.34/22.35 raporlarındaki ilan adları, örn. 'Yediveren Hayvan Çiftliği', 'Genel Markalar Hayvan Çiftliği', 'Sipariskitap Kürk Mantolu Madonna']. Bağlaçsız 1–2 sözcüklük önek 'başka başlık' kanıtı sayılmaz (motor onekSinifla, zayıf sınıf)."
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
      "not": "21.7: açıldı (Fatih onayı, 13.11.2026). Gerçek sitede bulutta sınandı (Kürk Mantolu Madonna): 6 ilan, en ucuz 65 TL, stokta; iPad 21.6 ile aynı. Önceki sorun: ürün yerine \"oy ver\" bağlantısı (/p/Votes) seçiliyordu, 21.6 düzeltti.",
      "kapsamBilinmez": "site sayfalama ve sonuç sayısı göstermiyor; bulut 21.11: &page/&pg/&sayfa/&limit aynı ürünleri, &p başka bir liste veriyor (kanıtlı sayfa yolu yok) · BİLİNMİYOR",
      "kart": {
        "kap": "div.home_item_prd",
        "ad": ".prd_info .name a",
        "fiyat": ".price_sale",
        "yazar": ".writer"
      },
      "notKart": "22.37 (Ana 47): kart kuralı [KANITLI, bulut ham sayfa 21.11 12:25, Kürk Mantolu Madonna]: div.home_item_prd > .prd_info > .name a (ad); .price_box içinde span.price_list (üstü çizili liste fiyatı) + span.price_sale (satış fiyatı). Eski genel okuyucu liste fiyatını alıyordu (65,00 ↔ satış 48,75 TL; 95→90,25; 160→139,20; 170→109,56). price_sale yoksa kartın bütün fiyatları okunur, en küçüğü alınır. Yazar: .writer (kartın ayrı yazar kutusu). Kart yazısının ilk 200 harfini <noscript> içindeki görsel kodu dolduruyor, yazar oraya sığmıyordu (yazar kartta 6 → 1)."
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
      "not": "Ham kart alındı (21.5 iPad): li[data-pr] > a.pw_v8 (href, title) > h3.pn_v8 ad, span.pt_v9 fiyat, '+N FİYAT', yayınevi listesi. Arama kartındaki 'En Ucuz' (53,20) ürün sayfasının ilk satırından (41,73 + kargo) farklı çıktı; nedeni bilinmiyor. 21.6: satıcı satırı 'Stokta' diyorsa stok var sayılır. 22.34 (Ana 43): sayfaBag &p=N (Hayvan Çiftliği son sayfa 6). Kanıt: iPad 22.33 kapsam teşhisi 21.11.2026 06:34/06:36 (2. sayfa bağlantısı gerçek sayfada görüldü ve yeni ilan verdi).",
      "sayfaBag": "/arama/\\?(?=(?:[^#]*&)?q=)(?:[^#]*&)?p=(\\d+)"
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
      "not": "21.7: kart kuralı gerçek kart yapısından yazıldı [KANITLI, iPad 21.6 ham kartı]: a.product-card > .info-wrapper > h2.title (yayınevi + ad); fiyat .product-card-price içinde (.single-price > .price-section). Rozet şeridi (badges-wrapper: \"Çok Al Az Öde\", kupon) fiyat kutusunun dışında kalır. Vitrin şeridi (a.seller-store-product-card) okunmaz. Teşhis bir sınama daha açık kalır. Önceki: 21.5 iPad kupon tutarı 10,00 TL fiyat sanılmıştı; 21.6 bunu şüpheli sayıyordu ama 42,05 ve 106,23 TL ilanları da şüpheli kalıyordu. 22.34 (Ana 43): adresDene yalnız ölçüm (sayfada 2. sayfa bağlantısı yok; iPad 22.33 teşhisi); sonuç kural değildir.",
      "kart": {
        "kap": "a.product-card",
        "ad": ".info-wrapper .title",
        "fiyat": ".product-card-price .single-price, .product-card-price .price-section, .product-card-price .discounted-price",
        "marka": ".product-brand"
      },
      "sayfaEk": "&pi={n}",
      "sayfaEkSurekli": true,
      "sonucKalip": "(\\d[\\d.]*)\\+\\s*Ürün|(?:^|\\n)\\s*(\\d[\\d.]*)\\s*Ürün\\s*(?:\\n|$)",
      "not45": "22.35 (Ana 45, K5/K12): iPad 22.34 adres denemesi &pi=2 → Hayvan Çiftliği 36 ürün, 36'sı ilk sayfadan farklı; Kefaret 0 ürün (son sayfa). Sayfa sonsuz kaydırmalı, bağlantı yok → sayfaEkSurekli. \"1032+ Ürün\" / \"3+ Ürün\" alt sınırdır (sonucEnAz).",
      "markaOnde": true,
      "notMarka": "22.36 (Ana 47): başlık 'marka/yayınevi + kitap adı' biçiminde gelir [KANITLI: iPad 22.34/22.35 raporlarındaki ilan adları, örn. 'Yediveren Hayvan Çiftliği', 'Genel Markalar Hayvan Çiftliği', 'Sipariskitap Kürk Mantolu Madonna']. Bağlaçsız 1–2 sözcüklük önek 'başka başlık' kanıtı sayılmaz (motor onekSinifla, zayıf sınıf)."
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
      "yazarKartMetni": true,
      "not": "21.7 bulut: başsız tarayıcıyı Cloudflare engelliyor (\"Attention Required\"); sonuçlar sayfa açıldıktan sonra JavaScript ile yükleniyor (Next.js). Yalnız iPad teşhisi. 22.34 (Ana 43): adresDene yalnız ölçüm (sayfada 2. sayfa bağlantısı yok; iPad 22.33 teşhisi); sonuç kural değildir.",
      "sayfaEk": "&page={n}",
      "sayfaEkSurekli": true,
      "not45": "22.35 (Ana 45, K6): iPad 22.34 &page=2 → Hayvan Çiftliği 20 yeni, Kefaret 7 yeni; &sayfa=2 1. sayfanın aynısı (yok sayılıyor). Kefaret 10+7=17 ↔ sitenin yazdığı 35: neden BİLİNMİYOR (fiyatsız/stoksuz kart olabilir [TAHMİN]); 3. sayfa iPad'de görülecek."
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
      "ana": "https://www.kitapsec.com/",
      "sayfaBag": "/arama/[^#]*[?&]arama=(\\d+)-6-0a0-0-0-0-0-0"
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
      "not": "Kürk Mantolu Madonna (13.11.2026, 21.4): 7 sn, doğru sonuç; Gündeste'deki yanlış ilanı kanıt kuralı eliyor. Yeniden açıldı (21.5). 22.34 (Ana 43): adresDene yalnız ölçüm (sayfada 2. sayfa bağlantısı yok; iPad 22.33 teşhisi); sonuç kural değildir.",
      "sonucKalip": "Toplam\\s*\\d[\\d.]*\\s*/\\s*(\\d[\\d.]*)\\s*ürün|(?:^|\\n)\\s*(\\d[\\d.]*)\\s*Ürün\\s*(?:\\n|$)",
      "kaydirOku": 3,
      "not45": "22.35 (Ana 45, K9/K12): adres denemesi kaldırıldı (&page=2 ana sayfaya yönleniyor, iPad 22.34). Sayı kalıbı \"Toplam 2 / 2 ürün\", \"137 Ürün\". Sonraki sayfa yolu KANITLANMADI; aynı sayfa en çok 3 kez aşağı kaydırılır, yeni kart gelirse okunur, sonuç kapsam satırında (kaydırma: a → b ürün). Buluttan 403."
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
      "yokTumMetin": true,
      "kart": {
        "kap": ".search-result-wrapper .grid > div.relative",
        "ad": "a[href*='/item/'] .sr-only",
        "link": "a[href*='/item/']",
        "fiyat": "p",
        "sehir": ".text-secondary-600 span"
      },
      "not": "Kişiden ikinci el ilan. 21.5 iPad (Kürk Mantolu Madonna): 24 kart, 24 ilgili, şehir okundu, 5 sn. Fatih'in kararıyla açıldı (21.6). Bilinenler: ilan sayfasında stok bilgisi yok (yayındaki ilan var sayılır; satılmış ilan listede kalıyor mu bilinmiyor); kargo/elden kartta yazmıyor; adında iki kitap adı geçen ilan takım sayılmıyor. Arayüzde 'kişiden ilan · şehir' etiketiyle ayrı gösterilecek. 22.21: yokTumMetin — boş sonuç sayfasında 'sonuç bulunamadı' yazısı ilk 15.000 harfte bulunamadı (Şeyh Bedreddin Destanı, 22.15/22.18/22.20 ÇALIŞMADI); ürün hiç yoksa sayfanın tamamına bakılır. 22.34 (Ana 43): sonucKalip 'aramanızda N ilan bulundu' (23 = okunan 23, 11 = 11; sayfalama yok). Kanıt: iPad 22.33 kapsam teşhisi 21.11.2026 06:34/06:36 (2. sayfa bağlantısı gerçek sayfada görüldü ve yeni ilan verdi).",
      "sonucKalip": "aramanızda\\s*(\\d[\\d.]*)\\s*ilan bulundu"
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
      "not": "21.7 aday (Fatih sordu, Ana 8): n11 ana sitesinde mağazaların yeni kitap ilanları. 21.8: Fatih onayıyla AÇILDI (n11 Sahaflar Çarşısı da açık kalır; aynı ilan iki yerden gelirse tekrar ayıklanacak). Kart yapısı henüz kuralda yok; teşhis bir tur daha açık kalır, ham kart rapordan alınıp kart kuralı yazılacak. Bulut buradan engelli (Cloudflare), yalnız iPad. 22.34 (Ana 43): adresDene yalnız ölçüm (sayfada 2. sayfa bağlantısı yok; iPad 22.33 teşhisi); sonuç kural değildir.",
      "sayfaEk": "&pg={n}",
      "sayfaEkSurekli": true,
      "not45": "22.35 (Ana 45, K7): iPad 22.34 &pg=2 → Hayvan Çiftliği 20 ürün, 20'si farklı; Kefaret 1 ilgisiz ürün (son sayfadan sonra; artık okunan sayılmaz). Mağaza adı adreste geçen ürün (\"/urun/kitapstore-…\") artık okunur.",
      "markaOnde": true,
      "notMarka": "22.36 (Ana 47): başlık 'marka/yayınevi + kitap adı' biçiminde gelir [KANITLI: iPad 22.34/22.35 raporlarındaki ilan adları, örn. 'Yediveren Hayvan Çiftliği', 'Genel Markalar Hayvan Çiftliği', 'Sipariskitap Kürk Mantolu Madonna']. Bağlaçsız 1–2 sözcüklük önek 'başka başlık' kanıtı sayılmaz (motor onekSinifla, zayıf sınıf)."
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
      "not": "Kart kuralı gerçek sayfada doğrulandı (Kürk Mantolu Madonna, 21.4). Açıldı (21.5). Sonuçlar birden çok sayfa: 22.33'ten itibaren sayfa bağlantısıyla sonuna kadar okunur (istek ve süre sınırıyla).",
      "kart": {
        "kap": "article.sp-pcard",
        "ad": ".sp-pcard__title",
        "fiyat": ".sp-pcard__price",
        "kondisyon": ".sp-pcard__cond",
        "satici": ".sp-pcard__vendor"
      },
      "teshis": false,
      "sayfaBag": "/arama\\?[^#]*\\bpage=(\\d+)",
      "sayfaEk": "&page={n}"
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
      "not": "Kart kuralı gerçek sayfada doğrulandı (Kürk Mantolu Madonna, 21.4: 3 ilan, kondisyon okundu). Açıldı (21.5). 21.7: ürün sayfasında takip düğmesi \"Gelince Haber Ver\" her zaman \"Sepete Ekle\"den önce yazıyor; motor satıştaki ilanları stokta yok sanıp gizliyordu (bulut, gerçek site, 13.11.2026: 3 ilanın 3ü). stokVar kuralı eklendi. Site sahafta.com adresine yönlendiriyor. 22.34 (Ana 43): sayfa önce boş hâliyle (\"0 sonuç · Sonuç bulunamadı\") gelir, ilanlar sitenin koduyla yüklenir; \"sonuç yok\" yalnız sayfanın kodu devreye girince (React işareti, hazirReact) ve \"Aranıyor\" kalkınca kabul edilir. Sitenin yazdığı sayı üst kutudan (.e-ara-meta b; yalnız sonuç varken görünür). Kanıt: gerçek sayfa ve sitenin kendi kodu, bulut Chrome, 21.11.2026. Kart yazarı .author (sitenin kodunda ayrı alan; 22.34).",
      "kart": {
        "kap": "a.e-book",
        "ad": ".title",
        "fiyat": ".price",
        "kondisyon": ".e-badge-cond",
        "yazar": ".author"
      },
      "stokVar": "[1-9]\\d* sahafta var|son \\d+ adet",
      "sayfaTikla": true,
      "hazirReact": "input[name=q]",
      "yukleniyor": "Aranıyor",
      "yukleniyorSec": ".e-ara-toolbar .left",
      "sonucSec": ".e-ara-meta b",
      "eserSayfasi": true,
      "eserParalel": 2,
      "not45": "22.35 (Ana 45, S-d, YÖN KARARI 3 A): her eser kartının sayfası açılır, \"Satan sahaflar\" tablosunun her satırı ayrı ilan (sahaf, kondisyon, kargo, fiyat, ?v= ilan bağlantısı). Bulut 21.11 Hayvan Çiftliği: 4 kart → 2 eser sayfası → 3 ilan. Typesense KULLANILMAZ."
    },
    {
      "id": "dostkitabevi",
      "ad": "Dost Kitabevi",
      "tur": "yeni",
      "acik": true,
      "durum": "duzeltiliyor",
      "url": [
        "https://dostkitabevi.com/search?q={q}"
      ],
      "ana": "https://dostkitabevi.com/",
      "kart": {
        "kap": "article.product-item",
        "ad": "h2.product-title a",
        "link": "h2.product-title a",
        "fiyat": ".prices",
        "yazar": ".product-box-authors"
      },
      "sayfaBag": "/search\\?[^#]*\\bpagenumber=(\\d+)",
      "sayfaEk": "&pagenumber={n}",
      "not": "22.33 (Ana 42): eklendi (Fatih 21.11 05:37: 'o da artık bu uygulamada çalışacak bir kaynak site olacak'). Kart kuralı kayıtlı gerçek sayfadan (Hayvan Çiftliği: 16 kart, 16 okunur; 4'ü 'Stokta yok'). Ölçüm 6'daki çift sayım ölçüm betiğinin kendi okuyucusundaydı (aynı kartta görsel ve başlık bağlantısı). Yavaş site: sayfa başına ≈9 sn, ≈2,7 MB [KANITLI iPad Ölçüm 6]. Açık: aynı sonuçta 'Can Dükkan' bez çanta ilanları kitap gibi görünebilir (başlıkta 'çanta' yok, yalnız açıklamada)."
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
//   T.baglanti()  → (İSTEĞE BAĞLI, 22.24) Promise<{ durum, ms, ayrinti }>. Cihazın internete çıkıp çıkamadığını yoklar:
//                   iki bağımsız küçük adres (https://www.google.com/generate_204 → 204 beklenir; https://captive.apple.com/hotspot-detect.html
//                   → içinde "Success" beklenir). Biri beklendiği gibi yanıtlarsa "var"; ikisi de hata verirse "yok"; yanıt gelip
//                   beklenen gibi değilse "portal" (Wi-Fi giriş sayfası vb.). ms: yoklamanın süresi. Android'de ConnectivityManager
//                   (NET_CAPABILITY_VALIDATED) bilgisi "ayrinti"ye eklenebilir. Yoksa motor yalnız sayfa hata kodlarına bakar.
//   Sayfaların cihazın KENDİ internetiyle, gerçek bir tarayıcı motoruyla (iPad: WKWebView, Android: Chrome WebView)
//   açılması şarttır; siteler sunucudan gelen istekleri engelliyor.
//
// Not: Aşağıdaki gövde sürüm 20'den taşındı; girinti bilerek değiştirilmedi (satırlar sürüm 20 ile karşılaştırılabilsin).
// =====================================================================
function MotorKur(T, KURAL) {
const MOTOR_SURUMU = "22.38";
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
function aramaSayfasiniOku(sorgu, tur, kartKural, ek) {
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
    var etiketSozu = /^\s*(kupon|indirim|kazanç|kazan|puan|hediye çeki|para puan|üzeri|ve üzeri)/i;
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
    // Sürüm 22.31: ürün adresinin son parçasında (kitabın adlı adresinde) yayınevinin adı geçebilir:
    // Kitapseç "hayvan-ciftligi-dorlion-yayinevi_urn569342.html", "...-iskele-yayincilik_urn569345.html".
    // Eskiden "yayinevi/yayinci" sözcüğü yüzünden bu kartlar yayınevi sayfası sanılıp atlanıyordu (20 kartın 4'ü).
    // Ürün adresi sayılması için: (1) "yazar/yayınevi/marka" sözcüğü klasör adında ya da sorgu (?…) kısmında GEÇMEZ
    // (/yazar/…, /yayinevi/…, ?publisher=… yine atlanır), (2) son parça aranan kitabın adının en az %60'ını taşır.
    function urunAdresiMi(ah) {
      if (!arananlar.length) return false;
      var yol = String(ah || '').split('#')[0], sk = yol.indexOf('?'), sorguKismi = sk >= 0 ? yol.slice(sk) : '';
      if (sk >= 0) yol = yol.slice(0, sk);
      var parcalar = yol.replace(/\/+$/, '').split('/'), son = parcalar.pop() || '';
      if (/yazar|author|writer|yayinev|yayinci|publisher|marka|brand/i.test(parcalar.join('/') + sorguKismi)) return false;
      try { son = decodeURIComponent(son); } catch (e) { }
      // Tam sözcük eşleşmesi (bağımsız denetim, Ana 38): "Ana" araması "kanat-yayinevi" adresini ürün saymasın.
      var ss = ' ' + sadeYap(son).replace(/[^a-z0-9]+/g, ' ') + ' ', tut = 0;
      for (var w = 0; w < arananlar.length; w++) { if (ss.indexOf(' ' + arananlar[w] + ' ') >= 0) tut++; }
      return tut >= Math.ceil(arananlar.length * 0.6);
    }
    function magazaAdresiMi(ah) {
      var MG = /sahaf\d+|magaza|mağaza|satici|satıcı|seller|store|dukkan|dükkan|\/shop\//i;
      var tamA = String(ah || '').split('#')[0], soru = tamA.indexOf('?');
      var yol = (soru >= 0 ? tamA.slice(0, soru) : tamA).replace(/^[a-z][a-z0-9+.-]*:\/\/[^\/]+/i, '').replace(/\/+$/, '');
      var i = yol.lastIndexOf('/'), klasor = i >= 0 ? yol.slice(0, i) : '', son = i >= 0 ? yol.slice(i + 1) : yol;
      if (MG.test(klasor) || (soru >= 0 && MG.test(tamA.slice(soru)))) return true;
      return MG.test(son) && !urunAdresiMi(ah);
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
    // 22.34 (Ana 43) · SAYFA HAZIR MI + SİTENİN YAZDIĞI SAYI (kurallar.json'daki site kuralından; kuralı olmayan siteye dokunmaz).
    // Neden [KANITLI, gerçek site, 21.11.2026]: Sahafta sayfayı önce boş hâliyle gönderir ("0 sonuç · Sonuç bulunamadı"), ilanları sonra
    // sayfanın kendi koduyla yükler ("Aranıyor…" → kartlar). Gerçekten sonuç yoksa son hâl ilk hâlin aynısıdır; bu yüzden "sonuç yok"
    // yalnız sayfanın kodu devreye girdikten (React işareti) ve "Aranıyor" yazısı kalktıktan sonra kabul edilir.
    // iPad 21.11 06:36: «Kefaret Ian McEwan» sayfada 2 sonuç varken motor ilk 4,5 sn'de boş hâli görüp SONUÇ YOK demişti.
    if (ek) {
      try {
        if (ek.sonucSec) {
          var se = document.querySelector(ek.sonucSec), sn = se ? String(se.innerText || se.textContent || '').replace(/[^\d]/g, '') : '';
          if (sn) { out.sonucSayisi = parseInt(sn, 10); out.sonucYazisi = String((se.parentNode && se.parentNode.innerText) || sn).replace(/\s+/g, ' ').slice(0, 60); }
        }
        if (ek.sonucKalip) {
          var km = txt.slice(0, 20000).match(new RegExp(ek.sonucKalip, 'i')); // menüsü uzun sitede yazı ilk 6000 harfin dışında kalabilir
          // 22.35 (K12): kalıpta iki seçenek olabilir (ilk dolu grup alınır); sayı "+" ile yazılmışsa ("1032+ Ürün", "3+ Ürün") yalnız ALT SINIRDIR.
          var kg = km ? (km[1] || km[2] || km[3] || '') : '';
          if (km && kg) { out.sonucSayisi = parseInt(String(kg).replace(/[^\d]/g, ''), 10); out.sonucYazisi = km[0].replace(/\s+/g, ' ').slice(0, 60); out.sonucEnAz = /\+/.test(km[0]); }
        }
        if (ek.hazirReact) {
          var he = document.querySelector(ek.hazirReact), hz = false;
          if (he) { for (var hk in he) { if (hk.indexOf('__react') === 0) { hz = true; break; } } }
          out.hazir = hz;
        }
        if (ek.yukleniyor) {
          var ye = ek.yukleniyorSec ? document.querySelector(ek.yukleniyorSec) : body;
          if (ye && String(ye.innerText || '').slice(0, 15000).indexOf(ek.yukleniyor) >= 0) out.hazir = false;
        }
        if (out.hazir === false) out.sonucYok = false;
      } catch (e) { out.ekHata = String(e).slice(0, 80); }
    }

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
    // Sürüm 22.32: taksit işareti "x" yalnız rakamdan sonra ("3 x 533 TL", "3x533 TL") sayılır; "DEX", "Marx", "Malcolm X" fiyatı atlatmaz.
    // D&R «Kefaret»: "… N. İpek Gökdel DEX 75,14 TL" kartında yayınevi "DEX" taksit sanıldı, en ucuz ilan "fiyatı şüpheli" diye gizlendi.
    var onceYeni = /plus ile|plus'a özel|plus üyelere|kindle|e-kitap|e-book|ebook|dijital|sesli|audible|mp3|kargo|teslimat|taksit|aylık|ikinci el|kullanılmış|başlayan|kazanç|kazancınız|tasarruf|indirim tutarı|peşin fiyat|\d\s*x\s*$/;
    var onceSahaf = /plus ile|plus'a özel|plus üyelere|kindle|e-kitap|e-book|ebook|dijital|sesli|audible|mp3|kargo|teslimat|taksit|aylık|başlayan|kazanç|kazancınız|tasarruf|indirim tutarı|peşin fiyat|\d\s*x\s*$/;
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
        var kdEl = kartSec(kp, kartKural.kondisyon), stEl = kartSec(kp, kartKural.satici), seEl = kartSec(kp, kartKural.sehir), yzEl = kartSec(kp, kartKural.yazar), mkEl = kartSec(kp, kartKural.marka);
        var kKond = kdEl ? temiz(kdEl.textContent.replace(/[★☆✩✪⭐]/g, '')).toLocaleLowerCase('tr') : '';
        var kSat = stEl ? temiz(stEl.textContent) : '';
        var kHref = kl2 ? kl2.href : location.href;
        var kAnahtar = 'kural|' + kHref + '|' + kfiy[0];
        if (seen[kAnahtar]) continue;
        seen[kAnahtar] = 1;
        out.items.push({ title: kad.slice(0, 140), prices: kfiy, href: kHref, extra: kYazi.slice(0, 200), stokYok: kStokYok,
          ekitap: /e-kitap|e-book|ebook|kindle|sesli kitap|audible/.test(kKucuk), kanit: true, turetildi: false, linksiz: !kl2,
          supheli: false, ctx: '', kondisyon: kKond.slice(0, 30), satici: kSat.slice(0, 60), sehir: seEl ? temiz(seEl.textContent).slice(0, 60) : '', yazarAlani: yzEl ? temiz(yzEl.textContent).slice(0, 80) : '',
          // 22.36 (Ana 47): kartın AYRI marka/yayınevi kutusu (Trendyol .product-brand); başlığın başındaki marka "başka başlık" sayılmasın diye
          marka: mkEl ? temiz(mkEl.textContent).slice(0, 60) : '' });
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
          // 22.35 (Ana 45, K4): Amazon "Öne çıkan teklif yok · 300,00 TL (14 yeni ürün)" kartında fiyatın yanındaki tek bağlantı teklif listesidir
          // (/gp/offer-listing/…); ürün bağlantısı sanılınca adı "(14 yeni ürün)" okunuyor, McEwan'ın kitabı ilgili sayılmıyordu (iPad 22.34 Kefaret).
          if (/\/gp\/offer-listing\//i.test(ah)) continue;
          // 22.36 (Ana 47, K4 ikinci adım): aynı kartta "Seçenekleri gör" düğmesi de bir bağlantıdır; ürün adı sanılınca McEwan ilanının adı
          // "Seçenekleri gör" okunuyordu (iPad 22.35 Kefaret: okunan ilk ürün "Seçenekleri gör 300,00 TL"). Düğme yazısı ad olamaz: atlanır, kart bir üst kutuya büyür.
          if (/^(seçenekleri gör|tüm seçenekleri gör|satın alma seçenekleri|see options|see all buying options)\b/i.test(at)) continue;
          // Sürüm 21.6: "oy ver", yorum ve puan bağlantıları ürün bağlantısı değildir (Halk Kitabevi: /p/Votes?...&item_id=...)
          if (/\/votes?\b|vote_value|\/oy[-_]?ver|yorum[-_]?yaz|write[-_]?review|\/rating\b/i.test(ah)) continue;
          if (/kategori|category|field-author|\/e\//i.test(ah)) continue;
          if (/yazar|author|writer|yayinevi|yayinci|publisher|marka|brand/i.test(ah) && !urunAdresiMi(ah)) continue; // 22.31: bkz. urunAdresiMi
          // 22.35 (Ana 45, K7): mağaza sözcüğü yalnız KLASÖRDE ya da kitabın adını taşımayan son parçada eler. n11'de ürün adresinin kendisi
          // "/urun/kitapstore-kefaret-ian-mcewan-17179413" ("store" mağazanın adında) diye geçiyor; eskiden bu kart hiç okunmuyordu (sepette 368,55 TL).
          if (magazaAdresiMi(ah)) continue;
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
          // 22.37 (Ana 47): Pazarama "56,00 TL · Plus ile 53,20 TL": üyelik (Plus) fiyatı herkesin ödeyeceği fiyat değildir (iPad ekran görüntüsü 21.11 12:39; motor 53,20 okuyordu)
          if ((tur === 'sahaf' ? onceSahaf : onceYeni).test(once)) continue;
          if (/^\s*(kargo|teslimat|taksit|'?den başlayan|x\s|kupon|indirim|kazanç|kazan|puan|üzeri|ve üzeri)/.test(sonra)) continue; // 22.13: "450 TL üzeri %10 indirim" kampanya eşiğidir, fiyat değil (Hepsiburada)
          kf.push(mm[0]);
        }
        // Teşhis: kartta ilk fiyatın önündeki 6 karakter ve kodları (gizli/benzer karakter var mı?)
        if (ilkIdx >= 0) { var onceki6 = kartYazi.slice(Math.max(0, ilkIdx - 60), ilkIdx); ctx = onceki6 + ' [' + Array.prototype.map.call(onceki6.slice(-6), function (ch) { return ch.charCodeAt(0).toString(16); }).join(' ') + ']'; }
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
        kanit: kanit, turetildi: link ? linkTur : false, linksiz: !link, supheli: supheli, ctx: ctx, kondisyon: kondisyon, satici: satici,
        // 22.35 (K4): Amazon "Öne çıkan teklif yok · N yeni ürün" kartı: fiyat sitenin kendi satışı değil, öteki satıcıların en düşük teklifidir (işaretlenir)
        teklif: kartYazi.length < 1500 && /öne çıkan teklif yok|no featured offers/i.test(kartYazi) ? (kartYazi.match(/\((\d+)\s*yeni ürün\)/i) || [])[1] || '?' : '' };
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
// 22.38 (Ana 48): kartFiyat verilirse ürün sayfasında kart fiyatı ARANIR (fiyat buradan ALINMAZ). Sonuç fiyatDurum:
// "aynı" = kart fiyatı, ilk öneri bölümü başlığından ("benzer ürünler" vb.) ÖNCE ve stok işaretinin (Sepete Ekle / site kuralı)
// 2500 karakter öncesi ile 1000 karakter sonrası arasında, para birimiyle (TL/₺) yazıyor · "öneri bölümünde" = yalnız öneri başlığından sonra
// · "uzakta" = öneri bölümünden önce ama stok işaretinden uzakta · "görülmedi" · "" (kart fiyatı verilmedi ya da stok işareti yok).
// Neden: Kitapyurdu 24,90 TL gerçek ilan (iPad, 21.11 12:51) siteler arası denetimde [FİYAT ŞÜPHELİ] sayılıp "en ucuz" gösterilmiyordu.
// Şüpheli yönü güvenli: doğrulanamayan her durumda eski davranış (şüpheli) sürer.
function urunSayfasiniOku(varKalip, kartFiyat) {
  try {
    var body = document.body;
    if (!body) return { durum: 'bilinmiyor', neden: 'sayfa boş' };
    var t = (body.innerText || '').toLocaleLowerCase('tr').replace(/\s+/g, ' ');
    if (t.length < 200) return { durum: 'bilinmiyor', neden: 'sayfa çok kısa' };
    function fiyatBak(yer) {
      if (!(kartFiyat > 0) || yer < 0) return { fiyatDurum: '', sayfaFiyatlari: '' };
      var basliklar = ['benzer ürün', 'benzer kitap', 'bunlar da ilgini', 'ilginizi çekebilir', 'birlikte al', 'önerilen ürün', 'son incelenen',
        'son gezdiğin', 'müşteriler bunları', 'bu ürünü alanlar', 'beğenebileceğin', 'customers who', 'sponsorlu ürün'];
      var kes = -1;
      for (var b = 0; b < basliklar.length; b++) { var bi = t.indexOf(basliklar[b]); if (bi >= 0 && (kes < 0 || bi < kes)) kes = bi; }
      var re = /₺\s?(\d{1,3}(?:\.\d{3})+|\d+)(?:[.,]\s?(\d{2}))?|(\d{1,3}(?:\.\d{3})+|\d+)(?:[.,]\s?(\d{2}))?\s?(?:tl(?![a-zçğıöşü])|₺)/g;
      // Taksit ("9 x 5,96 TL"), üyelik ("Plus ile", "Platin üyelere"), kargo/puan satırı ve eşik ("150 TL üzeri") fiyatı DOĞRULAMA sayılmaz:
      // kart yanlışlıkla bu fiyatlardan birini okuduysa (Pazarama Plus, Ana 47) aynı sayı sayfada da geçer, şüphe yanlışlıkla kalkmasın.
      var ozelOnce = /(taksit|üye|plus|platin|prime|premium|kulüp|kargo|puan|kazan|kart ile|ile öde)/;
      var m, ana = [], oneri = 0, uzak = 0, ozel = 0, yakin = [];
      while ((m = re.exec(t)) !== null) {
        var tam = m[1] || m[3], kur = m[2] || m[4];
        var v = parseInt(tam.replace(/\./g, ''), 10) + (kur ? parseInt(kur, 10) / 100 : 0);
        var esit = Math.abs(v - kartFiyat) < 0.005;
        var yakinda = m.index >= yer - 2500 && m.index <= yer + 1000;
        if (kes >= 0 && m.index > kes) { if (esit) oneri++; continue; }
        if (yakinda && yakin.length < 6) yakin.push(m[0].trim());
        if (!esit) continue;
        // Bağlam yalnız bu fiyata ait kısa parça: önceki fiyatta ya da cümle sonunda kesilir (açıklamadaki "kargo" sözü 56,00 TL'yi bozmasın)
        var once = t.slice(Math.max(0, m.index - 30), m.index).split(/[.!?·|]|tl(?![a-zçğıöşü])|₺/).pop(), sonra = t.slice(m.index + m[0].length, m.index + m[0].length + 15);
        if (/\d\s?[x×]\s?$/.test(once) || ozelOnce.test(once) || /^\s?('?(den|dan|ten|tan)|ve üzeri|üzeri|üstü)/.test(sonra)) { ozel++; continue; }
        if (yakinda) ana.push(m.index); else uzak++;
      }
      var fd = ana.length ? 'aynı' : (uzak ? 'uzakta' : (ozel ? 'yalnız taksit/üyelik/kargo satırında' : (oneri ? 'öneri bölümünde' : 'görülmedi')));
      return { fiyatDurum: fd, sayfaFiyatlari: yakin.join(' ; ') };
    }
    function don(o, yer) { var f = fiyatBak(yer); o.fiyatDurum = f.fiyatDurum; o.sayfaFiyatlari = f.sayfaFiyatlari; return o; }
    if (varKalip) {
      var vk = null;
      try { vk = t.match(new RegExp(varKalip, 'i')); } catch (e) { }
      if (vk) return don({ durum: 'var', neden: 'site kuralı: ' + vk[0], title: document.title || '' }, vk.index);
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
    return don({ durum: durum, neden: neden, title: document.title || '' }, durum === 'var' ? vi.yer : -1);
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
// 22.21: sayfanın TAMAMINDA "sonuç yok" yazısı aranır (yok: arama sayfasındaki kalıp listesinin aynısı; ipucu: daha geniş sözcükler, yalnız teşhis için).
// Neden: Letgo boş sonuç sayfası "sonuç bulunamadı" diyor (Fatih Safari'de gördü) ama motor ilk 15.000 harfte bulamadı.
function sayfaOzeti() {
  try {
    var ham = (document.body && document.body.innerText) || '';
    var t = ham.replace(/\s+/g, ' ').trim();
    var k = t.toLocaleLowerCase('tr');
    function parcalar(re, en) {
      var o = [], m; re.lastIndex = 0;
      while ((m = re.exec(k)) && o.length < en) { o.push({ i: m.index, s: t.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40) }); if (!m[0].length) re.lastIndex++; }
      return o;
    }
    var yok = parcalar(/(?<![\d.,])0\s*sonuç|(?<![\d.,])0\s*ilan bulundu|(?<![\d.,])0\s*kitap bulundu|listelenecek ürün bulunamadı|sonuç bulunamadı|ürün bulunamadı|eşleşen ürün bulunamadı|ilan bulunamadı|kitap bulunamadı|aradığını bulamadık|aradığınızı bulamadık|sonuç yok/g, 2);
    var ipucu = parcalar(/bulunamad|bulamad|ilan yok|eşleşen|hiç sonuç|sonuç çıkmadı/g, 3);
    // 22.22 teşhis: sayfa kodunda (HTML; görünmeyen yazı, görsel açıklaması, sayfa verisi dahil) 'yok' izleri, tarayıcı genişliği ve kimliği.
    var html = '', hp = [];
    try { html = document.documentElement.outerHTML || ''; } catch (e) { }
    var hk = html.toLocaleLowerCase('tr'), hre = /bulunamad|ilan bulundu|aramanızda|sonuç bulun|"total[a-z_]*"\s*:\s*\d+|"count"\s*:\s*\d+|__next_data__/g, hm;
    while ((hm = hre.exec(hk)) && hp.length < 8) hp.push(hm.index + ": " + html.slice(Math.max(0, hm.index - 60), hm.index + hm[0].length + 60).replace(/\s+/g, ' '));
    return { title: document.title || '', url: location.href, metin: t.slice(0, 600), uzunluk: t.length, hamUzunluk: ham.length, yok: yok, ipucu: ipucu,
      tamMetin: t.slice(0, 4000), htmlUzunluk: html.length, htmlParca: hp, gen: window.innerWidth, ua: String(navigator.userAgent || '').slice(0, 160) };
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
// 22.33 · Sayfadaki sayfalama bağlantıları: kalip (kurallar.json "sayfaBag") bağlantının TAM adresine uygulanır, (\d+) sayfa numarasıdır.
// Döner: { enBuyuk: görülen en büyük sayfa no, baglar: { no: tam adres } }. Yalnız sitenin kendi bağlantıları; adres tahmini yok.
function sayfaBaglari(kalip) {
  try {
    var re = new RegExp(kalip), out = { enBuyuk: 0, baglar: {} };
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length; i++) {
      var h = as[i].href || '', m = h.match(re);
      if (!m) continue;
      var n = parseInt(m[1], 10);
      if (!(n > 0) || n > 5000) continue;
      if (!out.baglar[n]) out.baglar[n] = h;
      if (n > out.enBuyuk) out.enBuyuk = n;
    }
    return out;
  } catch (e) { return { enBuyuk: 0, baglar: {}, hata: String(e) }; }
}

// 22.33 · Kapsam teşhisi (yalnız rapor): sayfanın "sonuç" sayı izleri ve AYNI arama yolundaki 2. sayfa bağlantısı (sitenin kendi bağlantısı; tahmin yok).
function kapsamIzleri() {
  try {
    var txt = (document.body && document.body.innerText) || '';
    var re = /[^\n]{0,25}\d[\d.,]*\+?\s*(?:'?den fazla\s*)?(?:adet\s*)?(?:sonuç|ürün|kitap|ilan)[^\n]{0,25}/gi, m, izler = [];
    while ((m = re.exec(txt)) && izler.length < 3) izler.push(m[0].replace(/\s+/g, ' ').trim().slice(0, 70));
    var yol = location.pathname, ikinci = '';
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length; i++) {
      var h = as[i].href || '';
      if (h.indexOf(location.host) < 0) continue;
      var y = h.replace(/^https?:\/\/[^\/]+/, '').split(/[?#]/)[0];
      if (y !== yol) continue;
      if (/[?&](page|p|sayfa|pg|pagenumber|pi|pn|currentPage|sf)=2(&|$)/i.test(h)) { ikinci = h; break; }
    }
    return { izler: izler, ikinci: ikinci };
  } catch (e) { return { izler: [], ikinci: '', hata: String(e) }; }
}

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
// Sürüm 22.2 · YAZAR AYRI ALAN: "sorgu" yalnız KİTAP ADIDIR (eşleştirme hep ad üzerinden yapılır); yazar yalnız arama adresine eklenir ve kartta görülüp görülmediği işaretlenir.
// Neden: yazar adı sorguya karışınca (22.1 iPad sınaması, "Çankaya Falih Rıfkı Atay") gerçek "Çankaya" ilanları 6 sitede "ilgili 0" sayıldı,
// yazarın başka kitapları ise "ilgili" sayılıp en ucuz diye gösterildi.
let AKTIF_YAZAR = "";
// 22.5: yazım toleransı. Apostrofsuz okuma ("Vüs'at" = "Vüsat"), iyelik eki ("Atatürk'ün"), ≥5 harfli adda tek harf farkı ("Edib"/"Edip", "Dostoyevski"/"Dostoyevskiy").
// Kural: (1) yazarın bütün adları kartta var → kanıt; (2) 2+ adlı yazarda ≥6 harfli SOYADI kartta var → kanıt ("Dostoyevski İş Bankası");
// (3) 3+ adlı yazarda adların biri hariç hepsi var → kanıt ("Gazi Mustafa Kemal Paşa" ↔ Mustafa Kemal Atatürk). Kısa soyadlar (Atay, Hugo, Ali) tek başına kanıt sayılmaz: başka yazar olabilir.
function yazarAdlari(m) { return sade(m).replace(/['’‘`´ʼ]/g, "").split(/[^a-z0-9]+/).filter(Boolean); }
function yazarKartta(metin) {
  const w = yazarAdlari(AKTIF_YAZAR).filter(x => x.length >= 3);
  if (!w.length) return false;
  const tum = new Set([...kelimeler(metin), ...yazarAdlari(metin)]);
  const liste = [...tum];
  const var_ = x => tum.has(x) || (x.length >= 5 && liste.some(t => (t.startsWith(x) && t.length <= x.length + 4) || birFark(t, x)));
  const tutan = w.filter(var_).length;
  if (tutan === w.length) return true;
  const soyad = w[w.length - 1];
  if (w.length >= 2 && soyad.length >= 6 && var_(soyad)) return true;
  if (w.length >= 3 && tutan >= w.length - 1) return true;
  return false;
}
// 22.8: kartın AYRI yazar alanı yoksa (iPad'de BKM'nin .model-title sınıfı bulunamadı) ama kart metni yazarı başlığın hemen ardından yazıyorsa
// (BKM: "Şeyh Bedreddin DestanıZeki Büyüktanır260,00 TL…", Pandora: "…DestanıZeki BüyüktanırCan (…)260,00 TL"), başlık ile ilk fiyat arası metin yazar adayıdır.
// Yalnız kurallar.json'da "yazarKartMetni": true olan sitelerde kullanılır (kartında yazar yazmayan sitede yanlış işaret çıkmasın).
function yazarMetniBul(baslik, kart) {
  const duz = x => String(x || "").normalize("NFC").replace(/[\u2013\u2014\u2212]/g, "-").replace(/[“”„]/g, '"').replace(/[‘’`´]/g, "'").replace(/\s+/g, " ").trim();
  const t = duz(kart);
  const b = duz(baslik).toLocaleLowerCase("tr");
  if (b.length < 3) return "";
  const i = t.toLocaleLowerCase("tr").indexOf(b);
  if (i < 0 || i > 40) return "";
  let rest = t.slice(i + b.length);
  const f = rest.search(/₺|\d[\d.]*(?:,\d+)?\s*TL/i);
  if (f >= 0) rest = rest.slice(0, f);
  rest = rest.replace(/([a-zçğıöşü])([A-ZÇĞİÖŞÜ])/g, "$1 $2").replace(/%|sepete ekle|stokta|tükendi/gi, " ").replace(/\s+/g, " ").trim();
  return rest.length >= 5 && /[a-zçğıöşü]{3}/i.test(rest) ? rest : "";
}
// 22.9 · YAZAR İŞARETİ YÜKSEK GÜVENLE: bağımsız denetim (14 Kasım, ~1.840 sınama) gerçek baskıların ~%16'sının yanlış "[başka yazar]" sayıldığını gösterdi
// (baş harfli "O. Pamuk", bitişik "McEwan", yazım farkı "Edip/Edib", yayınevi/rozet/"Kolektif", BÜYÜK harfli ad). İlke: şüphede İŞARETLEME (yanlış işaret, yanlış eleme kadar kötüdür).
// Yalnız şu hâlde işaretlenir: aday metin ≥2 kişi-adı sözcüğü taşıyor (yayınevi/rozet sözcükleri atıldıktan sonra), yayınevi eki yok ve girilen yazarın HİÇBİR sözcüğü adayda
// (bitişik yazımda ya da yazım farkıyla bile) bulunamıyor.
const ADAY_ATILAN = new Set(["kolektif", "cok", "satan", "on", "siparis", "yeni", "indirim", "kampanya", "firsat", "kargo", "bedava", "favoriledi", "kisi", "tukendi", "stokta", "sepete", "ekle", "ozel", "baski", "basim", "ciltli", "ciltsiz", "kutulu", "set", "takim", "cilt", "urun", "gun", "teslimat", "ucretsiz", "hizli", "avantajli", "super", "kitap"]);
function adayAdSozcukleri(g) {
  let a = String(g || "").replace(/\(.*$/, " ");
  const ham = a.split(/\s+/).filter(Boolean);
  if (ham.some(x => YAYINEVI_SON.has(sade(x)))) return []; // yayınevi eki varsa aday bir yayınevi adıdır: işaretlenmez
  return ham.filter(x => /^(?:\p{Lu}[\p{L}'’.-]*|\p{Lu}\.)$/u.test(x) && !ADAY_ATILAN.has(sade(x)));
}
function adayYazarVar(g) {
  const w = yazarAdlari(AKTIF_YAZAR).filter(x => x.length >= 3);
  const j = sade(g).replace(/[^a-z0-9]/g, "");
  const tk = yazarAdlari(g);
  return w.some(x => (x.length >= 4 && j.includes(x)) || tk.includes(x) || (x.length >= 4 && tk.some(y => y.length >= 4 && birFark(y, x))) || (x.length >= 5 && tk.some(y => birFark2(y, x))));
}
function birFark2(a, b) { // en çok 2 harf farkı (Atilla/Attila, Edip/Edib+a)
  if (Math.abs(a.length - b.length) > 2) return false;
  const d = []; for (let i = 0; i <= a.length; i++) { d[i] = [i]; } for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length] <= 2;
}
// Aday metin girilen yazarla örtüşüyor mu (A derecesi için kanıt): girilen yazarın BÜTÜN sözcükleri adayda var (bitişik yazım dâhil).
function adayYazarTam(g) {
  const w = yazarAdlari(AKTIF_YAZAR).filter(x => x.length >= 3);
  if (!w.length) return false;
  const j = sade(g).replace(/[^a-z0-9]/g, "");
  return w.every(x => j.includes(x));
}
// null = işaret yok; metin = işaretlenecek (başka yazar adayı)
function baskaYazarKarari(g) {
  if (!g || !AKTIF_YAZAR) return "";
  if (yazarKartta(g) || adayYazarVar(g)) return "";
  const ad = adayAdSozcukleri(g);
  if (ad.length < 2 || ad.length > 5) return "";
  return ad.join(" ").replace(/[₺]/g, "").trim();
}
// 22.35 (K11): ürün adresinin yol kısmındaki sözcükler (yazar kanıtı için). Sorgu ve # kısmı atılır.
function adresSozleri(href) {
  const m = String(href || "").match(/^[a-z][a-z0-9+.-]*:\/\/[^\/?#]*([^?#]*)/i);
  let y = m ? m[1] : String(href || "").split(/[?#]/)[0];
  try { y = decodeURIComponent(y); } catch (e) { }
  return y.replace(/[\/_\-.+=]+/g, " ");
}
// 22.36 (Ana 47) · ÖNEK SINIFI — iPad 22.35: "başka kitap olabilir" kuralı başlığın başındaki yayınevi/marka adını (Yediveren, Beta Kitap, Genel Markalar,
// Yade Kitap, Parodi…) başka başlık sanıyordu; Trendyol'da 40–50 gerçek basım alta indi. Kapalı ad listesi yerine öneki YAPISINDAN ve KONUMUNDAN tanır:
//  güçlü (öneki uyum hesabından düşer, derece etkilenmez): (a) kartın ayrı marka kutusu (Trendyol .product-brand); (b) önek bir yayınevi ekiyle biter
//   ("… Kitap/Yayınları/Kitabevi", bitişik "Sipariskitap"); (c) önekteki ad başlıkta ya da kartta yayınevi ekiyle yineleniyor ("Parodi … Parodi Yayınlar");
//   (d) önek girilen yazarın adı (iyelik ekiyle de: "Sabahattin Ali'nin Kürk Mantolu Madonna").
//  zayıf (yalnız kuralda "markaOnde": true olan pazar yerlerinde; başlığı "marka + ad" diye yazdıkları iPad raporlarında görüldü): bağlaçsız, ayraçsız 1–2 sözcük
//   ("Yediveren Hayvan Çiftliği"). Başka başlık kanıtı SAYILMAZ (taşınmaz) ama derece C kalır: "Büyük Kefaret" gibi gerçek başka adla ayırt edilemez.
//  Önek "ve/ile" gibi bir bağlaçla aranan ada bağlıysa ("Kir ve Kefaret", "Yemin, Adak ve Keffaret") hiçbir sınıf verilmez: başka başlıktır.
const ONEK_EKI = new Set(["yayinlari", "yayinlar", "yayinevi", "yayincilik", "yayinciligi", "yayini", "basimevi", "kitabevi", "kitap", "kitaplari", "kitapligi", "kitaplik", "kitabevleri", "yayin", "books", "publishing", "press", "publications"]);
const ONEK_EKI_BITISIK = /^[a-z]{3,}(kitap|kitaplari|kitapligi|kitabevi|yayinlari|yayinevi|yayincilik)$/;
const ONEK_BAGLAC = new Set(["ve", "ile", "veya", "yahut", "ya", "and", "or", "of", "da", "de", "ki"]);
const ONEK_IYELIK = ["nin", "in", "nun", "un"];
const ONEK_DIZI = new Set(["seri", "serisi", "dizi", "dizisi", "klasikleri", "klasikler"]);
const onekEkMi = t => ONEK_EKI.has(t) || ONEK_EKI_BITISIK.test(t);
function onekSinifla(x, sorgu, k) {
  const bos = { tur: "", neden: "", onek: "", kalan: "" };
  const q = kelimeler(sorgu);
  if (!q.length) return bos;
  const ilkMi = t => t === q[0] || t === q[0] + (q[1] || "-") || (q[0].length >= 6 && t.length >= 6 && birFark(t, q[0]));
  const ham = String(x.baslik || "").split(/\s+/).filter(Boolean);
  let ri = -1, P = [];
  for (let i = 0; i < ham.length && ri < 0; i++) { const tk = kelimeler(ham[i]); for (let j = 0; j < tk.length; j++) { if (ilkMi(tk[j])) { ri = i; P = P.concat(tk.slice(0, j)); break; } } if (ri < 0) P = P.concat(tk); }
  if (ri < 0) return bos; // aranan adın ilk sözcüğü başlıkta yok: önek yok
  const onekYazi = ham.slice(0, ri).join(" ");
  const kalan = ham.slice(ri).join(" ");
  if (!P.length) return bos;
  if (ONEK_BAGLAC.has(P[P.length - 1])) return bos;
  const sonuc = (tur, neden) => ({ tur, neden, onek: onekYazi.slice(0, 50), kalan });
  // (d) yazar adı (iyelik ekiyle)
  const yw = kelimeler(AKTIF_YAZAR).filter(w => w.length >= 3);
  const yazarMi = L => yw.length && L.length && L.every(t => yw.includes(t) || yw.some(w => t.startsWith(w) && ONEK_IYELIK.includes(t.slice(w.length))));
  if (yazarMi(P)) return sonuc("guclu", "yazar adı");
  // (a) kartın ayrı marka kutusu
  let R = P;
  const mk = kelimeler(x.marka || "");
  if (mk.length && mk.every((t, i) => P[i] === t)) { R = P.slice(mk.length); if (!R.length || R.every(onekEkMi)) return sonuc("guclu", "marka kutusu"); }
  // 22.37: marka + yazar adı ("Yapı Kredi Yayınları Sabahattin Ali Kürk Mantolu Madonna", iPad 22.36 Trendyol)
  if (R !== P && yazarMi(R)) return sonuc("guclu", "marka kutusu + yazar adı");
  // 22.37: önek bir dizi adıyla biter ("Bilir Kitap Klasik Seri: Kürk Mantolu Madonna", iPad 22.36 Trendyol): yayınevinin dizisidir, başka başlık değil
  if (R.length <= 4 && ONEK_DIZI.has(R[R.length - 1])) return sonuc("guclu", "dizi adı");
  // (b) yayınevi ekiyle biten kısa önek ("Beta Kitap", "Otantik Kitap", "Sipariskitap"); sıra sayısı + "Kitap" ("Birinci Kitap") sayılmaz
  if (R.length <= 5 && onekEkMi(R[R.length - 1]) && !(R.length >= 2 && (ORDINAL.has(R[R.length - 2]) || /^\d+$/.test(R[R.length - 2])))) return sonuc("guclu", "yayınevi eki");
  // (c) önekteki ad başlıkta ya da kartta yayınevi ekiyle yineleniyor
  const tum = kelimeler(String(x.baslik || "") + " " + String(x.kart || ""));
  const ekli = new Set(); tum.forEach((t, i) => { if (i + 1 < tum.length && onekEkMi(tum[i + 1]) && !onekEkMi(t)) ekli.add(t); });
  const adlar = R.filter(t => !onekEkMi(t) && t.length > 2);
  if (adlar.length && adlar.length <= 3 && adlar.every(t => ekli.has(t))) return sonuc("guclu", "yayınevi adı yineleniyor");
  // zayıf: pazar yerinde bağlaçsız, ayraçsız 1–2 sözcük
  if (k && k.markaOnde && R.length <= 2 && !/[:;,\/|–—&+-]\s*$/.test(onekYazi) && !R.some(t => /\d/.test(t))) return sonuc("zayif", "pazar yerinde marka konumu");
  return bos;
}
// 22.35 (YÖN KARARI 2): bir ilanın "başka kitap" kanıtları. yazar: başka yazar adı (ayrı alandan ya da kart yazısından); baslik: başlığın farkı.
// Başlık farkı yalnız iki durumda: aranan addan ÖNCE yayınevi/rozet/baskı sözü olmayan sözcük var ("Hamitçe Oyunlar: Kir ve Kefaret",
// "Yemin, Adak ve Keffaret", "Simon Toyne - Kefaret…") ya da aranan adın bir sözcüğü başlıkta yok. Alt başlık, seri adı, çevirmen
// (aranan addan SONRA gelen sözler: "Hayvan Çiftliği – Bir Peri Masalı") başlık farkı SAYILMAZ (22.12 yazarsız [C] kuralıyla aynı ilke).
function baskaKitapKaniti(x, k, sorgu) {
  const out = { yazar: "", yazarAyriAlan: false, baslik: "" };
  if (x.yazarAlani) { const g = baskaYazarKarari(x.yazarAlani); if (g) { out.yazar = g; out.yazarAyriAlan = true; } }
  else {
    let g = "";
    if (k && k.yazarKartMetni) g = baskaYazarKarari(yazarMetniBul(x.baslik, x.kart));
    // Amazon kartı birden çok kişiyi "Gaetan Soucy ve Sertaç Canbolat |" diye yazar: yalnız ilk kişi alınır (yalnız burada; yazar oylamasına dokunmaz)
    if (!g) { const ad = yazarAdayiKartta(k && k.id, x.baslik, k && k.id === "amazon" ? String(x.kart || "").replace(/ ve /, " | ") : x.kart, ""); if (ad) g = baskaYazarKarari(ad); }
    if (g) out.yazar = g;
  }
  const once = (x.fazlaOnce || []).filter(w => w.length > 2 && !YAYINEVI_ADLARI.has(w) && !YAYIN_SOZCUKLERI.has(w) && !ADAY_YAYIN.has(w) && !ADAY_ATILAN.has(w) && !BASKI_NOTU.has(w) && !YAYINEVI_SON.has(w));
  if (once.length && !(x.onek && x.onek.tur === "zayif")) out.baslik = "addan önce \"" + once.slice(0, 4).join(" ") + "\"";
  else if (x.adEksik) out.baslik = "aranan adın sözcüğü eksik";
  return out;
}
function kitapDisi(baslik, sorgu) {
  const b = " " + kelimeler(baslik).join(" ");
  const q = " " + kelimeler(sorgu).join(" ");
  return KITAP_DISI.some(k => b.includes(" " + k) && !q.includes(" " + k));
}

// ---------------------------------------------------------------
// Sürüm 22.4 · UYUM (kanıt derecesi) ve İLGİSİZ KALEM SÜZGECİ
// Neden: 22.3 liste sınaması + Google ölçümü (14 Kasım): ilk 5 ilanda dergi sayısı, inceleme kitabı, "sadece kapak", başka "Gece"/"Ankara"
// kitapları vardı; başlıkta aranan sözcük geçince "ilgili" sayılıyor ve yalnız fiyata göre sıralanıyordu.
// DERECE: A = başlık aranan adla örtüşüyor (yayınevi/baskı notu/dizi eki sayılmaz) ve yazar kanıtı var
//         "-" = yazar girilmedi (derece verilmez, sıra eskisi gibi fiyata göre)
//         B = başlık örtüşüyor ama yazar kartta okunamadı (BKM, Hepsiburada, Sahafta, SahafPazar, n11 Sahaflar…): "yazar doğrulanmadı"
//         C = başlık "kitap adı + fazlası" (başka kitap, derleme, inceleme ya da uyarlama olabilir)
// PUAN (küçük iyi): A0 B1 C2 · +1 kısmi cilt/kısım · +1 uyarlama izi · +5 fiyatı şüpheli. Sıra: puan, sonra fiyat.
// Puanla HİÇBİR ilan gizlenmez. Yalnız "ilgisiz kalem" (dergi/bülten sayısı, inceleme, sadece kapak) elenir; sayısı ve nedeni rapora yazılır.
const YAYINEVI_SON = new Set(["yayinlari", "yayinlar", "yayinevi", "yayincilik", "yayinciligi", "yayini", "basimevi", "kitabevi"]);
// Dizi/seri sonları ("Hasan Ali Yücel Klasikleri", "Çocuk Klasikleri Dizisi"): yalnız ÖNCEKİ BİLİNEN yayın/dizi sözcükleri atılır (bilinmeyen sözcük atılmaz: "Gece Masalları Serisi" başka kitap olabilir).
const SERI_SON = new Set(["klasikleri", "klasikler", "dizisi", "serisi"]);
const YAYIN_SOZCUKLERI = new Set(["yapi", "kredi", "is", "bankasi", "kultur", "turkiye", "hasan", "ali", "yucel", "milli", "egitim", "bakanligi", "turk", "tarih", "kurumu",
  "dunya", "edebiyat", "edebiyati", "genclik", "cocuk", "hikayeler", "ilkogretim", "lise", "dunyadan", "tercumeler", "fransiz", "rus", "alman", "ingiliz"]);
const DIZI_BASI = new Set(["butun", "tum", "toplu"]);
const DIZI_SONU = new Set(["eserleri", "eserler", "eser", "yapitlari", "yapitlar"]);
// Çevirmen / hazırlayan işaretleri: işaretten sonraki en çok 3 sözcük (kişi adı) fazla sayılmaz.
const KISI_ISARET = new Set(["cev", "ceviri", "ceviren", "cevirmen", "haz", "hazirlayan", "hazirlayanlar", "ed", "editor", "derleyen", "sadelestiren", "yayina", "hazirlayan"]);
const BASKI_NOTU = new Set(["roman", "kitap", "baski", "baskisi", "basim", "ciltli", "ciltsiz", "karton", "cep", "boy", "aciklama", "aciklamayi", "okuyunuz", "okuyun", "bkz",
  "sararmalar", "var", "yok", "in", "nin", "un", "nun", "si", "su", "ikinci", "el", "yeni", "sifir", "ozgun", "metin", "gunumuz", "turkcesiyle", "turkcesi", "yapi", "kredi", "bankasi", "kultur",
  "ilk", "tam", "yky", "kisaltilmamis", "orijinal", "hamur", "kagit", "tek", "bez", "ozel", "kutulu", "nushasi", "ikinci"]);
const AYLAR = "ocak|subat|mart|nisan|mayis|haziran|temmuz|agustos|eylul|ekim|kasim|aralik";
// Yalnız YÜKSEK GÜVENLİ kalıplar ilanı eler. 22.5: "sayı N" (MEB/Varlık/Bakanlık yayın numarası olabilir; gerçek dergiler zaten "dergi" sözüyle kitapDisi'ye takılır),
// "üzerinde" ("üzerinde isim yazılı"), tek "ay yıl" ("Ekim 2023" baskı tarihi olabilir) ve yazar adının iyelik hâli kalıptan çıkarıldı.
// "sadece kapak" ise ardından durum sözcüğü ("hafif yıpranmış", "yırtık") geliyorsa elenmez: kitap tamdır, kapağı yıpranmıştır (SADECE_KAPAK_DURUM).
const ILGISIZ_KALIPLAR = [
  ["dergi/bülten sayısı", new RegExp(" sayi [0-9]+ | bulten | bulteni | yilligi | (" + AYLAR + ")( (" + AYLAR + "))+ (19|20)[0-9]{2} ")],
  ["inceleme/üzerine", / uzerine | hakkinda | inceleme | incelemesi | incelemeler | sempozyum | sempozyumu | sorusturma | elestiri | analiz | analizi | tahlil | tahlili | kilavuz | kilavuzu | cozumlu | cozumleme | cozumlemesi | ders notlari | konu anlatimi | soru bankasi /],
  ["sadece kapak", / (sadece|yalniz|yalnizca) (on |arka )?kapak /]
];
const SADECE_KAPAK_DURUM = new Set(["yipranmis", "yirtik", "yirtilmis", "hafif", "lekeli", "leke", "solmus", "kirik", "ezik", "hasarli", "sararmis", "kosesi", "kenari", "cizik", "bozuk", "eski", "temiz", "sorunlu", "kopuk", "kalin"]);
const TARIHLI_KALIBI = new RegExp(" (" + AYLAR + ") (19|20)[0-9]{2} ");
const UYARLAMA_KALIBI = /(^| )(ilkogretim|ogrenci|ogrenciler|ogrencileri|ilkokul|ortaokul|lise|secmeler|ozet|ozeti|kisaltilmis|uyarlama|uyarlayan|cizgi|resimli|basitlestirilmis|sadelestirilmis|genclik|cocuk|cocuklar|gencler|kolay okuma|ogretmen|calisma kitabi)( |$)|(^| )(gencler|cocuklar|cocuk|okullar) icin | temel eser /;
// 22.6: ses/görüntü ürünü (Kitantik "…Destanı Cd" 460 TL kitap sanılmıştı). Elenmez; 2 puan düşer, raporda [CD/ses] yazar. Aranan adda varsa sayılmaz.
const SES_KALIBI = / (cd|dvd|vcd|mp3|plak|plagi|kaset|vinil|vinyl|lp|blu ray|bluray|sesli kitap|audio book|audiobook)( |$)/;
// 22.9: ses sözcüğü içerik adında geçebilir ("Kaset Endüstrisi", "Plak Kapaklı Baskı", "Bağdat Cd."). "Sesli kitap/audiobook" her yerde sayılır; öteki sözcükler yalnız başlığın SONUNDA
// (ardından yalnız "hediyeli/li/ile/set" gibi sözcükler gelebilir) ya da "+" ile eklenmişse sayılır.
const SES_GUCLU = / (sesli kitap|seslikitap|audio book|audiobook)( |$)/;
const SES_SONRA = new Set(["hediyeli", "li", "ile", "birlikte", "set", "seti", "kitap", "ekli", "rom", "si", "film", "ray"]);
function sesUrunuMu(baslik) {
  const tk = kelimeler(baslik);
  const s = " " + tk.join(" ") + " ";
  if (SES_GUCLU.test(s)) return true;
  if (/\+\s*(cd|dvd|vcd|mp3|plak|kaset|vinil|vinyl|lp)\b/i.test(String(baslik || ""))) return true;
  const SES1 = new Set(["cd", "dvd", "vcd", "mp3", "plak", "plagi", "kaset", "vinil", "vinyl", "lp", "bluray", "blu"]);
  const n = tk.length;
  for (let i = Math.max(0, n - 3); i < n; i++) {
    if (!SES1.has(tk[i])) continue;
    if (tk[i] === "cd" && /\bcd\.\s*\S/i.test(String(baslik || ""))) continue; // "Bağdat Cd. Öyküleri": cadde kısaltması
    if (tk.slice(i + 1).every(x => SES_SONRA.has(x))) return true;
  }
  return false;
}
const DIL_KALIBI = / (almanca|ingilizce|fransizca|rusca|arapca|ispanyolca|italyanca|bulgarca|yunanca|farsca|felemenkce|japonca|cince|portekizce|macarca|romence|sirpca|latince)( |$)/;
const ORDINAL = new Set(["birinci", "ikinci", "ucuncu", "dorduncu", "besinci", "altinci", "yedinci", "sekizinci", "dokuzuncu", "onuncu"]);

// Kitap adıyla ilgisiz kalem mi? Dönüş: { neden, eslesen } (neden "" ise ilgisiz değil; eslesen = başlıkta kalıba uyan metin, rapordaki tanı için).
// Aranan adda aynı kalıp varsa (ör. kitap adında "analiz") elenmez. Çok uzun başlıkta yalnız ilk 80 sözcük okunur (hız sınırı).
function ilgisizAyrinti(baslik, sorgu) {
  const s = " " + kelimeler(baslik).slice(0, 80).join(" ") + " ";
  const q = " " + kelimeler(sorgu).join(" ") + " ";
  for (const [ad, re] of ILGISIZ_KALIPLAR) {
    const m = s.match(re);
    if (!m || re.test(q)) continue;
    if (ad === "inceleme/üzerine" && /^(hakkinda|uzerine)$/.test(m[0].trim())) { // satıcı notu ("Kitap hakkında bilgi açıklamada") inceleme değildir
      const once = s.slice(0, m.index).trim().split(" ").pop();
      const sonra = s.slice(m.index + m[0].length).trim().split(" ")[0];
      if (/^(kitap|urun|ilan|durum|baski|bilgi|not|aciklama|detay)$/.test(once) || /^(bilgi|aciklama|detay|not|detayli)$/.test(sonra)) continue;
    }
    if (ad === "dergi/bülten sayısı" && /^sayi [0-9]+$/.test(m[0].trim())) { // "Varlık Yayınları Sayı 112", "MEB … Sayı 46": yayınevi dizi numarası; yayın izi var, "yıl N"/ay-yıl yoksa dergi sayılmaz
      if (/ (yayinlari|yayinlar|yayinevi|yayincilik|yayini|basimevi|kitabevi|bakanligi|klasikleri|tercumeler) /.test(s) && !/ yil [0-9]+ /.test(s) && !TARIHLI_KALIBI.test(s)) continue;
    }
    if (ad === "sadece kapak") {
      const sonrasi = s.slice(m.index + m[0].length).trim().split(" ").slice(0, 4);
      if (sonrasi.some(w => SADECE_KAPAK_DURUM.has(w))) continue; // "(Sadece kapak hafif yıpranmış)": kitap tam, durum notu
    }
    return { neden: ad, eslesen: m[0].trim() };
  }
  return { neden: "", eslesen: "" };
}
function ilgisizNeden(baslik, sorgu) { return ilgisizAyrinti(baslik, sorgu).neden; }

// Tek hata uzaklığı (yazım): a ile b arasında en çok 1 ekleme/silme/değiştirme var mı?
function birFark(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1);
  return a.length > b.length ? a.slice(i + 1) === b.slice(i) : b.slice(i + 1) === a.slice(i);
}

// Başlığın aranan kitap adıyla örtüşme derecesi. yazarVar: yazar kartta (ya da başlıkta) görüldü mü.
function uyumBul(baslik, sorgu, yazarVar) {
  let q = kelimeler(sorgu);
  const yzr = new Set(kelimeler(AKTIF_YAZAR));
  let tok = kelimeler(baslik);
  // Yazım toleransı (22.5): "Zeytin Dağı" ↔ "Zeytindağı" bitişik sözcükleri birleştirir; ≥6 harfli sözcükte tek harf farkı ("Tutunamayanlaŕ") aynı sayılır.
  { const ts0 = new Set(tok);
    const q2 = [];
    for (let i = 0; i < q.length; i++) { const j = q[i] + (q[i + 1] || ""); if (i + 1 < q.length && ts0.has(j) && !ts0.has(q[i]) && !ts0.has(q[i + 1])) { q2.push(j); i++; } else q2.push(q[i]); }
    q = q2;
    const qs = new Set(q);
    const t2 = [];
    for (let i = 0; i < tok.length; i++) { const j = tok[i] + (tok[i + 1] || ""); if (i + 1 < tok.length && qs.has(j) && !qs.has(tok[i]) && !qs.has(tok[i + 1])) { t2.push(j); i++; } else t2.push(tok[i]); }
    tok = t2.map(t => { if (qs.has(t) || t.length < 6) return t; const u = q.find(x => x.length >= 6 && birFark(t, x)); return u || t; });
  }
  const qSet = new Set(q);
  const tset = new Set(tok);
  const out = [];
  for (let i = 0; i < tok.length; i++) {
    const t = tok[i];
    if (DIZI_BASI.has(t) && DIZI_SONU.has(tok[i + 1]) && !qSet.has(t)) { i++; if (/^\d{1,2}$/.test(tok[i + 1] || "")) i++; continue; } // "Bütün Eserleri 1" dizi eki
    if (KISI_ISARET.has(t) && !qSet.has(t) && !yzr.has(t)) { // "Çev. Tahsin Yücel", "Haz. İ. Enginün": işaret + en çok 3 sözcük (kişi adı) sayılmaz
      let n = 0; while (n < 3 && i + 1 < tok.length && !qSet.has(tok[i + 1]) && !YAYINEVI_SON.has(tok[i + 1]) && !/^\d+$/.test(tok[i + 1])) { i++; n++; }
      continue;
    }
    if (YAYINEVI_SON.has(t)) { // "Everest Yayınları", "Evrensel İletişim Yayınları": yayınevi sözcüğüyle birlikte önündeki en çok 2 sözcük (aranan ad/yazar/sayı değilse) atılır
      for (let n = 0; n < 2; n++) { const on = out[out.length - 1]; if (on === undefined || qSet.has(on) || yzr.has(on) || /^\d+$/.test(on)) break; out.pop(); }
      while (out.length && YAYIN_SOZCUKLERI.has(out[out.length - 1]) && !qSet.has(out[out.length - 1]) && !yzr.has(out[out.length - 1])) out.pop(); // "Türkiye İş Bankası Kültür" gibi bilinen yayın adı sözcükleri
      continue;
    }
    if (SERI_SON.has(t)) { // "Hasan Ali Yücel Klasikleri": önündeki bilinen yayın/dizi sözcükleri atılır
      while (out.length && YAYIN_SOZCUKLERI.has(out[out.length - 1]) && !qSet.has(out[out.length - 1]) && !yzr.has(out[out.length - 1])) out.pop();
      continue;
    }
    if ((t === "baski" || t === "baskisi" || t === "basim") && /^\d{1,2}$/.test(out[out.length - 1] || "")) { out.pop(); continue; } // "1. Baskı"
    // Tarih (baskı yılı): "Mart 2015", "1943" sayılmaz (aranan adda geçmiyorsa)
    if (/^(19|20)\d\d$/.test(t) && !qSet.has(t)) { if (new RegExp("^(" + AYLAR + ")$").test(out[out.length - 1] || "")) out.pop(); continue; }
    out.push(t);
  }
  const fazla = out.filter(t => !qSet.has(t) && !yzr.has(t) && !BASKI_NOTU.has(t));
  const eksik = q.filter(t => t.length >= 3 && !tset.has(t)).length;
  const kanitli = !!AKTIF_YAZAR && !!yazarVar;
  const izin = (q.length >= 4 ? 2 : q.length === 3 ? 1 : 0) + (kanitli ? 1 : 0);
  const tam = eksik === 0 && fazla.length <= izin;
  // Yazar girilmemişse yazar kanıtı aranamaz ve başlıktaki fazla sözcük yazar adı olabilir: derece "-" (sıralamayı etkilemez; 22.1/22.3 davranışı korunur).
  const derece = !AKTIF_YAZAR ? "-" : tam ? (kanitli ? "A" : "B") : "C";
  // Kısmi cilt/kısım: tek sayı ("İnce Memed 2"), aranan adın hemen ardından roman rakamı ("Çankaya V"), "cilt/kısım" sözü, sıra sayısı + cilt/kitap ("Dördüncü Kitap").
  // "2 Cilt", "99 sayfa", "2. El", "1. Hamur", "Tek Cilt", "Bez Cilt", "Kutulu Cilt", "+ 7 yaş" kısmi değildir.
  const sadeBaslik = sade(baslik);
  let kismi = /\d{1,2}\s*\.\s*(cilt|cild|kisim|bolum|cuz|kitap)\b/.test(sadeBaslik);
  fazla.forEach((t, i) => {
    const sonra = fazla[i + 1], once = fazla[i - 1];
    if (/^\d{1,2}$/.test(t)) { if (!/^(sayfa|yas|adet|kitap|cilt|cild|el|hamur|basim|baski)$/.test(sonra || "")) kismi = true; }
    else if (/^(cilt|cild)$/.test(t)) { if (/^(tek|bez|ozel|kutulu|karton|ciltli)$/.test(once || "")) return; if (!/^\d{1,2}$/.test(once || "") || once === "1") kismi = true; }
    else if (/^(kisim|bolum|cuz)$/.test(t)) kismi = true;
    else if (ORDINAL.has(t) && /^(cilt|cild|kitap|kisim|bolum|cuz)$/.test(sonra || "")) kismi = true;
  });
  out.forEach((t, i) => { if (/^(i|ii|iii|iv|v|vi|vii|viii|ix)$/.test(t) && !qSet.has(t) && i > 0 && (qSet.has(out[i - 1]) || /^(cilt|cild|kisim|bolum|cuz)$/.test(out[i - 1]))) kismi = true; });
  const s = " " + tok.join(" ") + " ";
  const qs = " " + q.join(" ") + " ";
  const uyarlama = UYARLAMA_KALIBI.test(s) && !UYARLAMA_KALIBI.test(qs);
  const dil = DIL_KALIBI.test(s) && !DIL_KALIBI.test(qs);
  const ses = sesUrunuMu(baslik) && !SES_KALIBI.test(qs);
  // eksik: aranan adın bir sözcüğü başlıkta yok (yazım hatası olabilir ya da başka kitap); elenmez, en alta iner.
  // tarihli: başlıkta tek "ay yıl" var (baskı tarihi ya da dergi); elenmez, 1 puan düşer, raporda [tarihli] yazar.
  // dil: başlıkta başka dil adı ("Almanca", "Rusça") var; elenmez, 2 puan düşer, raporda [başka dil] yazar.
  const tarihli = TARIHLI_KALIBI.test(s) && !TARIHLI_KALIBI.test(qs);
  const puan = (derece === "A" || derece === "-" ? 0 : derece === "B" ? 1 : 2) + (kismi ? 1 : 0) + (uyarlama ? 1 : 0) + (eksik ? 1 : 0) + (tarihli ? 1 : 0) + (dil ? 2 : 0) + (ses ? 2 : 0);
  return { derece, kismi, uyarlama, adEksik: eksik > 0, tarihli, baskaDil: dil, sesUrunu: ses, puan, tamBaslik: tam, fazlaSoz: fazla.slice(0, 8), fazlaOnce: (() => { const iq = out.findIndex(t => qSet.has(t)); return iq > 0 ? out.slice(0, iq).filter(t => fazla.includes(t)).slice(0, 8) : []; })() };
}

// Takım / set / çok ciltli ürün mü? ("3 Kitap Set", "Takım", "5 Cilt") — tek kitap sayılmaz, ayrı gösterilir.
function takimMi(baslik) {
  const s = " " + kelimeler(baslik).join(" ") + " ";
  return /\s(takim|takimi|set|seti)\s/.test(s) || /\s([2-9]|\d{2,})\s(kitap|cilt|kitaplik)\s/.test(s)
    // 22.28: "Üç Roman", "İki Kitap", "Üçlü" gibi yazıyla yazılmış çoklu ürünler de takımdır (SahafPazar: Kuyucaklı Yusuf İçimizdeki Şeytan Kürk Mantolu Madonna Üç Roman)
    || /\s(iki|uc|dort|bes|alti|yedi|sekiz|dokuz|on)\s(roman|kitap|oyku|hikaye|cilt|eser)(i|ler|lik)?\s/.test(s) || /\s(ikili|uclu|dortlu|beşli|besli|altili)\s/.test(s);
}

// Kartta e-kitap / sesli kitap izi var mı? (yalnız rapor için)
function ekitapIzi(metin) {
  return /e-kitap|ekitap|e-book|ebook|dijital kitap|kindle|sesli kitap|audible|pdf|epub/i.test(sade(metin));
}

// ---------------------------------------------------------------
// Yardımcılar
// ---------------------------------------------------------------
function aramaJS(sorgu, tur, kart, ek) { return "(" + aramaSayfasiniOku.toString() + ")(" + JSON.stringify(sorgu) + "," + JSON.stringify(tur || "") + "," + JSON.stringify(kart || null) + "," + JSON.stringify(ek || null) + ")"; }
// 22.34: site kuralındaki "sayfa hazır mı" ve "sitenin yazdığı sayı" alanları (yoksa null; o sitede okuma eskisi gibi)
function ekKural(k) {
  if (!k) return null;
  const e = {};
  for (const a of ["hazirReact", "yukleniyor", "yukleniyorSec", "sonucSec", "sonucKalip"]) if (k[a]) e[a] = k[a];
  return Object.keys(e).length ? e : null;
}

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

function sade(s) { // 22.5: NFKD (tam genişlikli/kalın matematiksel harfler ve "Ⅱ" düz harfe iner), yumuşak tire ve sıfır genişlikli karakterler atılır
  return String(s || "").replace(/[\u00AD\u200B-\u200F\u2060\uFEFF]/g, "").toLocaleLowerCase("tr").replace(/ı/g, "i")
    .normalize("NFKD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("tr");
}

function kelimeler(metin) {
  return sade(metin).split(/[^a-z0-9]+/).filter(Boolean);
}

// 22.27: YAZIM TOLERANSI + AYIRT EDİCİ SÖZCÜK.
// Neden: iPad 19 Kasım 2026 Ölçüm 3'te (1) Sahafta'da "Şeyh Bedreddin Destanı" için "Dağıstanlı Şeyh Şamil Destanı" üç kez "ilgili" sayıldı
// (3 sözcükten 2'si tuttu: şeyh, destanı; ayırt edici "bedreddin" tutmuyordu); (2) SahafPazar'da "Şeyh Bedrettin" yazımı hiç eşleşmedi.
// Sözcük eşitliği: aynı ya da yazım varyantı (çift d/t ve çift harf farkı: Bedreddin = Bedrettin). Tek harf farkı kabul edilmez (Gündeste ≠ Güldeste).
function yazimAnahtari(w) { return w.replace(/dd|tt/g, "d").replace(/(.)\1/g, "$1"); }
function sozEsit(a, b) {
  if (a === b) return true;
  const x = yazimAnahtari(a), y = yazimAnahtari(b);
  return x === y; // tek harf farkı (Gündeste/Güldeste gibi başka sözcükleri eşleştirir) bilerek KABUL EDİLMEZ: gerçek kartlarla sınandı
}
function sozVar(kartKelimeleri, w) { return kartKelimeleri.some(c => sozEsit(w, c)); }
// Aranan sözcüklerden başlıkta (yazım toleransıyla) bulunmayanlar
function eksikSozcukler(baslik, sorgu) {
  const k = kelimeler(baslik);
  return kelimeler(sorgu).filter(w => w.length >= 3 && !sozVar(k, w));
}
function ilgili(baslik, sorgu) {
  const aranan = kelimeler(sorgu).filter(w => w.length >= 2);
  if (!aranan.length) return true;
  const kk = kelimeler(baslik);
  const tutuyor = w => sozVar(kk, w);
  const tutan = aranan.filter(tutuyor).length;
  const onemli = aranan.filter(w => w.length >= 3);
  const onemliTutan = onemli.filter(tutuyor).length;
  if (!(tutan >= Math.ceil(aranan.length * 0.6) && (!onemli.length || onemliTutan >= 1))) return false;
  // Üç ya da daha çok sözcüklü aramada en uzun (en ayırt edici) sözcüklerden en az biri tutmalı.
  if (aranan.length >= 3) {
    const enUzun = Math.max.apply(null, aranan.map(w => w.length));
    if (enUzun >= 5 && !aranan.filter(w => w.length === enUzun).some(tutuyor)) return false;
  }
  return true;
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
  // Sürüm 22.4: ilgisiz kalemler (dergi/bülten sayısı, inceleme, sadece kapak) ayrılır; sayısı ve nedeni rapora yazılır (gizli eleme yok).
  const ilgisizler = [];
  const adaylar = eslesen.filter(u => !kitapDisi(u.title, sorgu) && !u.ekitap).filter(u => {
    const g = ilgisizAyrinti(u.title, sorgu);
    if (g.neden) { ilgisizler.push({ u, n: g.neden, e: g.eslesen }); return false; }
    return true;
  });
  const ilgisizOzet = {};
  ilgisizler.forEach(x => { ilgisizOzet[x.n] = (ilgisizOzet[x.n] || 0) + 1; });
  const hazir = adaylar
    .map(u => {
      const rak = (u.prices || []).map(sayi).filter(x => x >= alt);
      return { baslik: duzelt(String(u.title || "").replace(/^((bugün|yarın) kargoda|kargo bedava|ücretsiz kargo|hızlı teslimat|başarılı satıcı|yetkili satıcı|süper|avantajlı ürün)\s*/gi, "")), fiyat: rak.length ? Math.min(...rak) : 0, href: u.href, stokYok: !!u.stokYok,
        kart: String(u.extra || "").replace(/<[^>]*>?/g, " ").replace(/\s+/g, " ").trim(), ekitap: ekitapIzi(u.extra || ""), yazarKartta: yazarKartta(u.title + " " + (u.extra || "") + " " + (u.yazarAlani || "")) || (!!AKTIF_YAZAR && !!k.yazarKartMetni && adayYazarTam(yazarMetniBul(String(u.title || "").replace(/\s+/g, " ").trim(), String(u.extra || "")))),
        tum: (u.prices || []).slice(0, 6).join(" ; "), ctx: String(u.ctx || ""), linksiz: !!u.linksiz, teklif: String(u.teklif || ""),
        // 22.37 (Ana 47): kartın AYRI yazar alanı (kurallar kart.yazar) girilen yazarı taşıyorsa bu da yazar kanıtıdır (Halk: kart yazısının ilk 200 harfi <noscript> koduyla doluyordu).
        // 22.35 (K11): ürün ADRESİNDEKİ yazar adı da yazar kanıtıdır (Pazarama "Kefaret" 312,17 TL: başlıkta yazar yok, adres "/kefaret-ian-mcewan-yapi-kredi-yayinlari-p-9789750843587")
        adresYazar: !!AKTIF_YAZAR && yazarKartta(adresSozleri(u.href)),
        // Sürüm 21 · ilan alanları (arayüz bunlara göre sıralayıp süzecek). Okunamayan alan boş kalır.
        // tur: yeni | sahaf | ikinciel | karsilastirma · stok: "var" | "yok" | "bilinmiyor" | "" (denetlenmedi)
        tur: k.tur || "", yazarAlani: String(u.yazarAlani || ""), marka: String(u.marka || ""), kondisyon: String(u.kondisyon || ""), satici: String(u.satici || ""), sehir: String(u.sehir || ""), kargo: String(u.kargo || ""),
        stok: u.stokYok ? "yok" : (u.stokVar ? "var" : ""), stokNeden: u.stokYok ? "arama kartında" : (u.stokVar ? String(u.stokVar) : "") };
    })
    .filter(x => x.fiyat > 0)
    .map(x => { if (x.adresYazar && !x.yazarKartta) { x.yazarKartta = true; x.yazarKanit = "ürün adresi"; } return x; })
    // 22.36 (Ana 47): başlığın başındaki yayınevi/marka öneki (yapıdan ve konumdan tanınır, ad listesinden değil) uyum hesabından düşülür.
    .map(x => { x.onek = onekSinifla(x, sorgu, k); return Object.assign(x, uyumBul(x.onek.tur === "guclu" ? x.onek.kalan : x.baslik, sorgu, x.yazarKartta)); })
    // 22.7: kartın AYRI yazar alanı okunduysa ve girilen yazarla uyuşmuyorsa ilan elenmez; 3 puan düşer, raporda [başka yazar: …] yazar
    // (BKM'de "Şeyh Bedreddin Destanı" Nâzım Hikmet yerine Zeki Büyüktanır'ın kitabıydı). Yazar girilmediyse çalışmaz.
    // 22.10: Hepsiburada kartında indirim/kampanya tutarı fiyat sanılıyor (Kefaret 26,30 TL, ama aynı kartta 435 TL; Buzul Çağının Virüsü 12,90 TL). Aynı kartta okunan en küçük sayı en büyüğünün %15'inden azsa
    // ilan elenmez; [kart içi fiyat şüpheli] işareti ve 5 puan alır. Yalnız hepsiburada'da (kargo eşiği gibi büyük sayılar öteki sitelerde gözlenmedi).
    .map(x => { if (k.id === "hepsiburada") { const sy = String(x.tum || "").split(";").map(sayi).filter(v => v > 0); if (sy.length >= 2 && Math.min(...sy) < Math.max(...sy) * 0.15) { x.kartIciSuphe = Math.max(...sy); x.puan += 5; } } return x; })
    .sort((a, b) => a.puan - b.puan || a.fiyat - b.fiyat);
  // 22.27: başlıkta aranan sözcük EKSİK ve motorun yüksek güvenli [başka yazar] işareti var → başka kitaptır (örn. "Şeyh Bedrettin" · Durali Yılmaz).
  // Gizli eleme değil: ilgisiz sayılır, sayısı ve nedeni rapora yazılır. Yalnız ikisi birlikte olunca; tek başına işaret yine yalnız puan düşürür.
  // 22.35 (Ana 45) · BAŞKA YAZAR / BAŞKA AD — YÖN KARARI 2, seçenek A (Fatih, 21.11 09:05). Yalnız yazar girilmişse.
  // GÜÇLÜ kanıt (kartın AYRI yazar alanı açıkça başka biri VE başlık da farklı) → ilan ELENİR, nedeni ilgisiz listesinde yazılır.
  // TEK kanıt (yalnız yazar ya da yalnız başlık) → ilan elenmez; "Başka kitap olabilir" bölümüne taşınır, asla "en ucuz" sayılmaz.
  // Girilen yazarın kanıtı varsa (kartta ya da ürün adresinde) ilan hiçbir zaman taşınmaz.
  // 22.27'deki "başlık eksik + başka yazar → ilgisiz" kuralı bunun içine alındı: yazar kanıtı ayrı alandan değilse artık elenmez, taşınır.
  const elenen = [], baskaOlabilir = [];
  if (AKTIF_YAZAR) for (const x of hazir) {
    if (takimMi(x.baslik) || x.yazarKartta) continue;
    const kn = baskaKitapKaniti(x, k, sorgu);
    if (!kn.yazar && !kn.baslik) continue;
    if (kn.yazar) x.baskaYazar = kn.yazar.slice(0, 40);
    if (kn.yazarAyriAlan && kn.baslik) elenen.push(Object.assign(x, { baskaNeden: "başka yazar (ayrı alan: " + kn.yazar.slice(0, 40) + ") ve başka başlık (" + kn.baslik + ")" }));
    else baskaOlabilir.push(Object.assign(x, { baskaNeden: kn.yazar ? "başka yazar: " + kn.yazar.slice(0, 40) + (kn.yazarAyriAlan ? " (ayrı alan)" : " (kart yazısından)") : "başlık farklı: " + kn.baslik }));
  }
  elenen.forEach(x => { ilgisizler.push({ u: { title: x.baslik }, n: "başka yazar ve başka başlık", e: x.baskaYazar }); ilgisizOzet["başka yazar ve başka başlık"] = (ilgisizOzet["başka yazar ve başka başlık"] || 0) + 1; });
  const hazirSon = (elenen.length || baskaOlabilir.length) ? hazir.filter(x => elenen.indexOf(x) < 0 && baskaOlabilir.indexOf(x) < 0) : hazir;
  return {
    baskaOlabilir: baskaOlabilir.sort((a, b) => a.fiyat - b.fiyat),
    elenenBaska: elenen.map(x => ({ baslik: x.baslik.slice(0, 80), fiyat: x.fiyat, neden: x.baskaNeden })),
    ilgililer: hazirSon.filter(x => !takimMi(x.baslik)),
    takimlar: hazirSon.filter(x => takimMi(x.baslik)),
    kitapDisiSayisi, ekitapElenen, benzerElenen,
    ilgisizSayisi: ilgisizler.length,
    ilgisizOzet: Object.keys(ilgisizOzet).map(n => n + " " + ilgisizOzet[n]).join(", "),
    ilgisizListe: ilgisizler.slice(0, 12).map(x => ({ baslik: duzelt(x.u.title).slice(0, 120), neden: x.n, eslesen: x.e })),
    ilgisizOrnek: ilgisizler.slice(0, 2).map(x => duzelt(x.u.title).slice(0, 80) + " [" + x.n + ": '" + x.e + "']"),
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
  let son = null, hata = null, onceki = -1, sabit = 0, yokSay = 0, hazirAn = 0;
  // 22.35 (Ana 45, S-b): "hazirReact" kuralı olan sitede (Sahafta) "sonuç yok" ancak sayfanın kodu devreye girdikten EN AZ yokHazirMs (3 sn)
  // sonra kabul edilir; bekleme kodun devreye girdiği andan sayılır (kod devreye girip aramayı başlatana kadar ≈0,5 sn "0 sonuç" görünebiliyor).
  const hazirKural = !!(r && r.k && r.k.hazirReact), hazirMs = AYAR.yokHazirMs || 3000;
  await bekle(2500);
  while (true) {
    try { son = await wv.calistir(aramaJS(sorgu, tur, kart, ekKural(r && r.k))); } catch (e) { hata = String(e); }
    const ilgiliVar = son && !son.benzerSonuc && (son.items || []).some(u => u.kanit !== false && !u.supheli && ilgili(u.title + " " + (u.extra || ""), sorgu));
    const sayi_ = son && son.items ? son.items.length : 0;
    sabit = (sayi_ > 0 && sayi_ === onceki) ? sabit + 1 : 0;
    onceki = sayi_;
    // Sürüm 21.4: sayfa üst üste iki yoklamada "sonuç yok" diyor ve hiç fiyatlı ürün yoksa beklemeyi bitir (Kitapseç 55 sn bekliyordu).
    // 22.28: sayfa "sonuç yok" derken önerilen/ilgisiz kartlar da görünebilir (n11 Sahaflar: 1 öneri kartı, 32-46 sn bekleme). Bu kitapla ilgili ürün yoksa yeter.
    yokSay = (son && son.sonucYok && (sayi_ === 0 || !ilgiliVar)) ? yokSay + 1 : 0;
    if (hazirKural && son && son.hazir === true && !hazirAn) hazirAn = Date.now();
    const yokTamam = yokSay >= 2 && (!hazirKural || (hazirAn > 0 && Date.now() - hazirAn >= hazirMs));
    if (ilgiliVar || (son && son.blocked) || (son && son.benzerSonuc) || sabit >= 3 || yokTamam || Date.now() > bitis || (r && r.iptal)) {
      // süre doldu ama "yok" için gereken bekleme tamamlanmadı: karar verilmez (BİLİNMİYOR)
      if (hazirKural && son && son.sonucYok && !ilgiliVar && !yokTamam) { son.sonucYok = false; son.hazir = false; }
      break;
    }
    await bekle(2000);
  }
  return { son: son || {}, hata };
}

function ilgiliSayisi(sonuc, sorgu) {
  if (sonuc && sonuc.benzerSonuc) return 0;
  return ((sonuc && sonuc.items) || []).filter(u => u.kanit !== false && !u.supheli && ilgili(u.title + " " + (u.extra || ""), sorgu)).length;
}

async function stokOku(href, r, varKalip, kartFiyat) {
  const wv = yeniSekme(r);
  const yh = await sayfaYukle(wv, href, 20000);
  let s = { durum: "bilinmiyor", neden: yh ? "sayfa açılmadı: " + yh : "işaret bulunamadı" };
  for (let i = 0; i < 6; i++) {
    await bekle(1500);
    try { s = (await wv.calistir("(" + urunSayfasiniOku.toString() + ")(" + JSON.stringify(varKalip || "") + "," + JSON.stringify(Number(kartFiyat) || 0) + ")")) || s; } catch (e) { s.neden = String(e); }
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
    ilgililer: [], takimlar: [], baskaOlabilir: [], elenenBaska: [], ilgisizSayisi: 0, ilgisizOzet: "", ilgisizOrnek: [], ilgisizListe: [], kitapDisiSayisi: 0, ekitapSayisi: 0, ekitapElenen: 0, kanitsizSayisi: 0, kanitsizOrnek: [], suphelSayisi: 0, suphelOrnek: [],
    fiyatsizGizlenen: [], fiyatsizVar: [], fiyatsizBelirsiz: [],
    stokKontrol: [], ozet: null, yapi: null, dom: "", ham: "", hata: "", akakce: null, sure: 0, gezi: [], sayfaHam: "", detayRapor: [], adresDeneme: [], siralaTikla: [], siralamaMenusu: "", sayfalama: "",
    yavas: false, iptal: false, sinir: 0, aramaTuru: "", aramaDenenen: [],
    basZaman: 0, kapsamNeden: "", kapsamSayfa: 1, kapsamSonSayfa: 0, kapsamIstek: 0 }; // 22.33: kapsam satırı
}

// Okunan sayfa verisini sonuç kaydına işler (sayfa gezisinde her yeni sayfadan sonra yeniden çağrılır).
// 22.29: Ana sayfadaki arama kutusu yolu yalnız "sitenin adres ile aramasının çalıştığı KANITLANMADIYSA" denenir.
// Kanıt: sayfa engel yazmıyor, ana sayfaya düşmemiş ve ya "sonuç yok" diyor ya da en az bir ürün okunmuş.
// (Ölçüm 3·7, 19 Kasım 2026: sonuç çıkmayan kitapta bu yol her sitede 11-17 sn ekliyordu.)
// 22.30: Karar işlevi artık "URL" sınıfını kullanmaz. 22.29'da `new URL(...)` vardı; iPad'de (Ölçüm 3·8) ana sayfa yine ziyaret edildi.
// Neden [TAHMİN, iPad'de doğrulanacak]: Scriptable'ın JavaScript ortamında "URL" sınıfı yok; hata yakalanıp yol "" sayıldığı için işlev hep "gerekli" diyordu.
// Bilgisayarda (Node) "URL" olduğu için sahte sayfa sınamaları bunu yakalayamadı. Yol artık düz metin işlemiyle ayrılır.
function anaYolGerekli(son) {
  if (!son) return true;
  if (son.blocked) return true;
  const m = String(son.url || "").match(/^[a-z][a-z0-9+.-]*:\/\/[^\/?#]*([^?#]*)/i);
  const yol = m ? m[1] : "";
  if (yol === "" || yol === "/") return true;
  return !(son.sonucYok || (son.items || []).length > 0);
}
// 22.30: Kararın nedeni rapora yazılır (iPad'de atlama gerçekten çalıştı mı, kanıt olsun diye). Yalnız bilgi; kararı etkilemez.
function anaYolNedeni(son) {
  const gerekli = anaYolGerekli(son);
  if (!son) return "denendi (sayfa verisi yok)";
  const m = String(son.url || "").match(/^[a-z][a-z0-9+.-]*:\/\/[^\/?#]*([^?#]*)/i);
  const yol = m ? (m[1] || "(boş)") : "adres okunamadı: " + String(son.url || "").slice(0, 40);
  const adet = (son.items || []).length;
  const sebep = son.blocked ? "engel yazısı" : (!m || m[1] === "" || m[1] === "/") ? "ana sayfaya düşülmüş ya da adres okunamadı" : son.sonucYok ? "sayfa sonuç yok diyor" : adet ? adet + " ürün okundu" : "ne ürün ne sonuç yok yazısı";
  return (gerekli ? "denendi" : "atlandı") + " (" + sebep + "; sayfa yolu " + yol + ")";
}
function sonucuYaz(r, son, k, sorgu) {
  r.sonUrl = son.url || "";
  r.baslik = son.title || "";
  r.engel = son.blocked || "";
  r.fiyatSayisi = son.priceCount || 0;
  r.urunSayisi = (son.items || []).length;
  r.sonucYazisi = son.sonucYazisi || "";
  r.sonucSayisi = (typeof son.sonucSayisi === "number") ? son.sonucSayisi : -1;
  r.sonucEnAz = !!son.sonucEnAz; // 22.35: "1032+ Ürün" gibi alt sınır
  r.sonucYok = !!son.sonucYok;
  r.hazirDegil = son.hazir === false; // 22.34: sayfa bekleme süresi içinde hazır olmadı (yok kararı verilmedi)
  r.benzer = !!son.benzerSonuc;
  r.kartKap = son.kartKurali || 0;
  r.okunanlar = (son.items || []).slice(0, 5).map(u => duzelt(u.title).slice(0, 45) + " " + ((u.prices || [])[0] || ""));
  if (son.error && String(r.hata).indexOf(son.error) < 0) r.hata = (r.hata ? r.hata + " · " : "") + son.error;
  const sy = sonucuIsle(son, k, sorgu);
  r.ilgililer = sy.ilgililer;
  r.takimlar = sy.takimlar;
  r.baskaOlabilir = sy.baskaOlabilir || []; // 22.35 (YÖN 2)
  r.elenenBaska = sy.elenenBaska || [];
  r.kitapDisiSayisi = sy.kitapDisiSayisi;
  r.ilgisizSayisi = sy.ilgisizSayisi;
  r.ilgisizOzet = sy.ilgisizOzet;
  r.ilgisizOrnek = sy.ilgisizOrnek;
  r.ilgisizListe = sy.ilgisizListe;
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
  r.basZaman = Date.now(); // 22.33: sayfa gezme süre bütçesi bundan sayılır
  try {
    // 1. yol: arama adresi
    // Sürüm 22.2: yazar verilmişse önce "ad + yazar" aranır (sonuçlar daralır); bu aramada kitap görünmezse yalnız "ad" aranır (Pandora gibi yazarlı aramayı reddeden siteler için).
    const aramalar = AKTIF_YAZAR ? [{ q: sorgu + " " + AKTIF_YAZAR, tur: "ad+yazar" }, { q: sorgu, tur: "yalnız ad" }] : [{ q: sorgu, tur: "ad" }];
    for (const ar of aramalar) {
      r.aramaDenenen.push(ar.tur);
      for (const kalip of k.url) {
        if (r.iptal) return;
        const wv = yeniSekme(r);
        const adres = adresYap(kalip, ar.q);
        const yh = await sayfaYukle(wv, adres, 20000);
        // 22.24: sayfa "cihaz çevrimdışı" hatasıyla açılmadıysa 15 sn beklemek sonuç vermez (sayfa hiç yüklenmedi); bekleme atlanır.
        // Yalnız bu hata türünde; başka her durumda bekleme eskisi gibi.
        const b = (yh && AG_COVRIMDISI.test(String(yh))) ? { son: {}, hata: "" } : await sonucBekle(wv, sorgu, 15000, k.tur, r, k.kart);
        if (r.iptal) return;
        // 22.23: GENİŞ aramada (yalnız ad) sayfanın kendisi "sonuç yok" diyorsa not edilir (aşağıda yalnız hiç ürün okunamadıysa kullanılır).
        if (ar.tur === "yalnız ad" && b.son && b.son.sonucYok && !b.son.blocked && !(b.son.items || []).length) r.genisYok = { tur: ar.tur, adres: adres };
        if (!r.adres || ilgiliSayisi(b.son, sorgu) > ilgiliSayisi(son, sorgu) || (!son.priceCount && b.son.priceCount)) {
          son = b.son; sonWv = wv; r.adres = adres; r.yol = "adres"; r.hata = yh || b.hata || ""; r.aramaTuru = ar.tur;
        }
        if (ilgiliSayisi(son, sorgu)) break;
      }
      if (ilgiliSayisi(son, sorgu)) break;
      // 22.35 (Ana 45, S-e): sitenin kodu hiç devreye girmediyse (Sahafta "hazırReact" kuralı) ikinci arama da aynı koda dayanır: denenmez.
      // iPad'de sayfa hiç hazır olmazsa iki arama ≈36 sn sürüyordu; sonuç yine "SAYFA HAZIR OLMADI · BİLİNMİYOR" kalır.
      if (k.hazirReact && son && son.hazir === false) { r.hazirAtlandi = true; break; }
    }
    sonucuYaz(r, son, k, sorgu);
    // 2. yol: ana sayfadaki arama kutusu (adı eşleşen fiyatsız kart bulunduysa gerekmez)
    // 22.34: sayfa hiç hazır olmadıysa (sitenin kodu çalışmadı) ana sayfa yolu da aynı koda dayanır; denenmez (bulut taklidi: 58 sn → boşa).
    const anaAday = !r.iptal && !ilgiliSayisi(son, sorgu) && k.ana && !(son.fiyatsiz || []).length && son.hazir !== false;
    if (anaAday) r.anaYolKarar = anaYolNedeni(son);
    if (anaAday && anaYolGerekli(son)) {
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

  // 22.35 (Ana 45, K9) · KAYDIRARAK OKUMA (kurallar.json "kaydirOku": en çok kaç kaydırma). Aynı arama sayfası aşağı kaydırılır; sayfa yeni
  // kart yüklerse onlar da okunur (yeni ilan = aynı aramanın sonucu; başka adres açılmaz, tahmin yok). Yeni kart gelmezse durur. Sonuç rapora yazılır.
  try {
    if (k.kaydirOku && sonWv && (son.items || []).length && !son.benzerSonuc && !r.iptal) {
      const ilkSay = (son.items || []).length;
      for (let i = 0; i < k.kaydirOku; i++) {
        if (r.iptal || Date.now() - r.basZaman > (AYAR.sayfaSure || 40) * 1000) break;
        try { await sonWv.calistir("(function(){try{window.scrollTo(0,document.body.scrollHeight);}catch(e){}return 1;})()"); } catch (e) { break; }
        await bekle(2000);
        let y = null;
        try { y = await sonWv.calistir(aramaJS(sorgu, k.tur, k.kart, ekKural(k))); } catch (e) { y = null; }
        const varK = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
        const ekK = ((y && y.items) || []).filter(u => !varK.has(u.href + "|" + (u.prices || [])[0]));
        r.gezi.push("kaydırma " + (i + 1) + ": " + ((y && y.items) || []).length + " ürün, " + ekK.length + " yeni");
        if (!ekK.length) break;
        son.items = (son.items || []).concat(ekK);
        if (y && typeof y.sonucSayisi === "number" && y.sonucSayisi > 0) { son.sonucSayisi = y.sonucSayisi; son.sonucYazisi = y.sonucYazisi; }
      }
      r.kaydirma = ilkSay + " → " + (son.items || []).length + " ürün";
      sonucuYaz(r, son, k, sorgu);
    }
  } catch (e) { r.gezi.push("kaydırma hatası: " + e); }
  if (r.iptal) return;

  // 22.33 (Ana 42) · SONUNA KADAR OKUMA. kurallar.json'da "sayfaBag" (sayfa bağlantısının düzenli ifadesi, (\d+) = sayfa no) olan sitede
  // (Nadir ve Kitantik hariç; onların kuralı değişmedi) bu kitap ilk sayfada görünse de sonraki sayfalar okunur. Sonraki sayfanın adresi
  // SAYFADAKİ GERÇEK BAĞLANTIDAN alınır (tahmin edilmez); bağlantı yoksa ve site okunandan çok sonuç yazıyorsa "sayfaEk" şablonuyla kurulur.
  // Durma: son sayfa / yeni ilan yok / ilk ENGEL (ısrar yok) / istek sınırı (sayfaUst, varsayılan 12 ek sayfa) / süre bütçesi
  // (sayfaSure, sitenin başından itibaren 40 sn: site 90 sn sınırına çarpıp ilk sayfada bulunanlar "yavaş" sayılmasın).
  // Sayfalar arasında yavaş başlayan aralık (sayfaAralik: 2 → 1,5 → 1 → 0,8 sn). Her sitede kapsam satırı: okunan / sitenin yazdığı / durma nedeni.
  try {
    // 22.35 (Ana 45): "sayfaEkSurekli" olan sitede (Trendyol &pi, n11 &pg, Pandora &page, BKM &ps; iPad/bulut kanıtı kurallar.json notlarında)
    // sonraki sayfa, sayfada bağlantı ya da sitenin yazdığı sayı olmasa da sayfa ekiyle açılır; boş sayfa, yeni ilan gelmemesi ya da
    // iki ardışık sayfada ilgili ilan gelmemesi durdurur. YÖN KARARI 1 (Fatih, 21.11 09:03), 2. yol: BÜTÜN sitelerde iki ardışık sayfada
    // bu kitapla ilgili yeni ilan yoksa o sitede durulur.
    if ((k.sayfaBag || k.sayfaEkSurekli) && !k.sayfaGez && sonWv && (son.items || []).length && !son.benzerSonuc && !r.iptal) {
      const ust = k.sayfaUst || AYAR.sayfaUst || 12, butce = (AYAR.sayfaSure || 40) * 1000, aralik = AYAR.sayfaAralik || [2000, 1500, 1000, 800];
      let bag = null;
      if (k.sayfaBag) { try { bag = await sonWv.calistir("(" + sayfaBaglari.toString() + ")(" + JSON.stringify(k.sayfaBag) + ")"); } catch (e) { bag = null; } }
      const sayfaBoyu = (son.items || []).length, surekli = !!k.sayfaEkSurekli;
      r.kapsamSonSayfa = (bag && bag.enBuyuk) || (surekli ? 0 : 1); // sayfa ekiyle okunan sitede son sayfa bilinmez (boş sayfa görülmeden TAM yazılmaz)
      let neden = "", istek = 0, ilgisizArdisik = 0, bekleyen = [], bekleyenSon = 0;
      // 22.34 (Ana 43) · İKİLİ AÇMA: sonraki iki sayfanın GERÇEK bağlantısı sayfada görünüyorsa ikisi birlikte açılır (sayfaParalel, varsayılan 2;
      // sitenin kuralı 1 diyebilir: Amazon). Şablonla (sayfaEk) kurulan adres tek açılır. Durma kuralları aynı: ilk ENGEL, yeni ilan yok,
      // istek sınırı, süre bütçesi. Sonuçlar sayfa sırasıyla işlenir; bir sayfa durdurursa sonrakinin ilanları alınmaz.
      const paralel = Math.max(1, k.sayfaParalel || AYAR.sayfaParalel || 1);
      for (let no = 2; ;) {
        if (r.iptal) return;
        const okunan = (son.items || []).length + bekleyen.length;
        const href = bag && bag.baglar && bag.baglar[no];
        let adres = href || "";
        if (!adres && k.sayfaEk && r.adres && (son.sonucSayisi > okunan || (surekli && !(son.sonucSayisi > 0 && !son.sonucEnAz && okunan >= son.sonucSayisi)))) adres = r.adres + k.sayfaEk.replace("{n}", no);
        if (son.sonucSayisi > 0 && !son.sonucEnAz && okunan >= son.sonucSayisi) { neden = "sitenin yazdığı kadar okundu"; break; }
        if (!adres) { neden = no === 2 ? "tek sayfa (sayfa bağlantısı yok)" : "son sayfa (" + (no - 1) + ")"; break; }
        if (istek >= ust) { neden = "istek sınırı (" + ust + " ek sayfa)"; break; }
        if (Date.now() - r.basZaman > butce) { neden = "süre bütçesi (" + Math.round(butce / 1000) + " sn)"; break; }
        const isler = [{ no, adres, sablon: !href }];
        for (let e = 1; e < paralel && istek + isler.length < ust; e++) {
          // ikinci sayfa: gerçek bağlantıyla; yoksa sitenin kanıtlı sayfa eki (sayfaEk) ile, ama yalnız sitenin SAYFADA gösterdiği son sayfayı aşmadan
          let h2 = bag && bag.baglar && bag.baglar[no + e], sab2 = false;
          if (!h2 && k.sayfaEk && r.adres && no + e <= (r.kapsamSonSayfa || 0)) { h2 = r.adres + k.sayfaEk.replace("{n}", no + e); sab2 = true; }
          // 22.35: sürekli sayfa ekli sitede ikinci sayfa da açılır, ama yalnız en az iki sayfalık ilan kaldığı biliniyorsa ya da sayı bilinmiyorsa
          if (!h2 && surekli && k.sayfaEk && r.adres && (son.sonucSayisi < 0 || son.sonucEnAz || son.sonucSayisi - okunan > sayfaBoyu)) { h2 = r.adres + k.sayfaEk.replace("{n}", no + e); sab2 = true; }
          if (!h2) break;
          isler.push({ no: no + e, adres: h2, sablon: sab2 });
        }
        await bekle(aralik[Math.min(istek, aralik.length - 1)]);
        if (r.iptal) return;
        istek += isler.length;
        const okumalar = await Promise.all(isler.map(async is => {
          const wvS = yeniSekme(r);
          const yhS = await sayfaYukle(wvS, is.adres, 20000);
          const bS = await sonucBekle(wvS, sorgu, 10000, k.tur, r, k.kart);
          let bagS = null;
          if (k.sayfaBag && !r.iptal && !(bS.son || {}).blocked) { try { bagS = await wvS.calistir("(" + sayfaBaglari.toString() + ")(" + JSON.stringify(k.sayfaBag) + ")"); } catch (e) { bagS = null; } }
          try { wvS.kapat(); } catch (e) { } // bellek: okunan sayfanın sekmesi hemen kapatılır (iPad'de onlarca sekme açık kalmasın)
          return { is, yhS, sS: bS.son || {}, bagS };
        }));
        if (r.iptal) return;
        let dur = false;
        for (const o of okumalar) {
          const sS = o.sS, n = o.is.no;
          if (sS.blocked) { neden = "ENGEL (sayfa " + n + "): " + String(sS.blocked).slice(0, 60); r.gezi.push("sayfa " + n + ": " + neden); dur = true; break; }
          const itS = sS.items || [];
          const varS = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
          bekleyen.forEach(u => varS.add(u.href + "|" + (u.prices || [])[0]));
          const ekS = itS.filter(u => !varS.has(u.href + "|" + (u.prices || [])[0]));
          // Boş sayfa ancak açılış hatası yoksa ve site daha çok sayfa GÖSTERMİYORSA "son sayfa" sayılır (tam kayıt sınaması: kaydı olmayan 2. sayfa
          // boş geldi, site 7 sayfa gösterirken "TAM" yazılıyordu → düzeltildi).
          if (!itS.length) {
            const celiski = o.yhS || (r.kapsamSonSayfa || 0) > n;
            neden = "sayfa " + n + " boş (0 ürün)" + (celiski ? (o.yhS ? " · açılış hatası: " + String(o.yhS).slice(0, 60) : " ama site " + r.kapsamSonSayfa + " sayfa gösteriyor") + " · BİLİNMİYOR" : ": son sayfa");
            if (!celiski) r.sonBos = true;
            r.gezi.push("sayfa " + n + ": 0 ürün (boş)" + (celiski ? " · çelişkili" : "")); dur = true; break;
          }
          if (!ekS.length) { neden = "sayfa " + n + " yeni ilan vermedi" + (o.yhS ? " · hata: " + String(o.yhS).slice(0, 60) : ""); r.gezi.push("sayfa " + n + ": " + itS.length + " ürün, yeni yok"); dur = true; break; }
          // sayfanın bağlantıları (sonraki sayfalar) ilgili ilan olmasa da alınır
          if (o.bagS) {
            if (!bag) bag = { enBuyuk: 0, baglar: {} };
            for (const kk in (o.bagS.baglar || {})) if (!bag.baglar[kk]) bag.baglar[kk] = o.bagS.baglar[kk];
            if (o.bagS.enBuyuk > r.kapsamSonSayfa) r.kapsamSonSayfa = o.bagS.enBuyuk;
          }
          // 22.35 (K1 teşhisi, bütün siteler): sayfanın ilk başlıkları ve kaçının bu kitapla ilgili sayıldığı rapora yazılır
          const ilgiliS = ekS.filter(u => u.kanit !== false && !u.supheli && ilgili(u.title + " " + (u.extra || ""), sorgu)).length;
          const ilkB = ekS.slice(0, 3).map(u => duzelt(u.title).slice(0, 28)).join(" | ");
          const etk = " (bağlantı" + (o.is.sablon ? ": şablon" : "") + (isler.length > 1 ? ", ikili" : "") + ")";
          if (!ilgiliS) {
            // ilgili yeni ilan yok: bu sayfanın ilanları BEKLER; sonra ilgili ilan gelirse eklenir. İki ardışık böyle sayfada durulur.
            ilgisizArdisik++;
            bekleyen = bekleyen.concat(ekS); bekleyenSon = n;
            r.gezi.push("sayfa " + n + etk + ": " + itS.length + " ürün, " + ekS.length + " yeni, ilgili 0 · ilk: " + ilkB);
            if (ilgisizArdisik >= (AYAR.ilgisizDur || 2)) { neden = "iki ardışık sayfada ilgili ilan yok (sayfa " + (n - 1) + "–" + n + ")"; r.ilgisizDurdu = true; dur = true; break; }
            continue;
          }
          ilgisizArdisik = 0;
          son.items = (son.items || []).concat(bekleyen, ekS);
          bekleyen = [];
          r.kapsamSayfa = n;
          r.gezi.push("sayfa " + n + etk + ": " + itS.length + " ürün okundu, " + ekS.length + " yeni · ilgili " + ilgiliS + " · ilk: " + ilkB);
        }
        sonucuYaz(r, son, k, sorgu);
        if (dur) break;
        no += isler.length;
      }
      // Bekleyen (ilgili ilanı olmayan) sayfalar: sitenin gerçek bağlantısıyla açılıp liste gerçekten bittiyse (son sayfa / boş sayfa) bunlar
      // sitenin sonuçlarıdır ve okunan sayılır; sayfa ekiyle açılan sitede ya da ilgisizlikten durulduysa okunan SAYILMAZ (son sayfadan sonra
      // site ilgisiz ürün gösterebiliyor: iPad 22.34 n11 «Kefaret» 2. sayfada 1 ilgisiz ürün).
      if (bekleyen.length) {
        if (!surekli && !r.ilgisizDurdu && (/^son sayfa|boş \(0 ürün\): son sayfa/.test(neden) || /sitenin yazdığı/.test(neden))) { son.items = (son.items || []).concat(bekleyen); if (bekleyenSon > (r.kapsamSayfa || 1)) r.kapsamSayfa = bekleyenSon; }
        else r.sayilmayan = (r.sayilmayan || 0) + bekleyen.length;
      }
      if (!neden && (son.items || []).length >= son.sonucSayisi && son.sonucSayisi > 0) neden = "sitenin yazdığı kadar okundu";
      r.kapsamNeden = neden;
      r.kapsamIstek = istek;
      sonucuYaz(r, son, k, sorgu);
    }
  } catch (e) { r.gezi.push("gezi hatası: " + e); r.kapsamNeden = "gezi hatası"; }
  if (r.iptal) return;

  // Sayfa sayfa gezme: sonuç sayısı okunandan çoksa. Sürüm 20: sayfaGez kuralı olan sitede (Nadir) bu kitap bulunsa da 4. sayfaya kadar okunur;
  // diğer sitelerde yalnız bu kitap henüz görünmüyorsa gezilir (en çok 4. sayfa).
  // 22.33: "sayfaTikla" kuralı olan sitede (Sahafta) tıklamayla sonuna kadar (sayfaUst, süre bütçesi, yavaş başlayan aralık).
  if (!k.sayfaBag && !k.sayfaEkSurekli) try {
    // Sürüm 21.7: sayfaGez kuralı olan sitede sayfa toplam sonuç sayısını yazmıyorsa (Kitantik) da sonraki sayfalar denenir;
    // sayfa düğmesi bulunamazsa gezi zararsızca durur ve nedeni rapora yazılır.
    const sayiBilinmez = !!(k.sayfaGez || k.sayfaTikla) && son.sonucSayisi === -1;
    const gerek = sonWv && typeof son.sonucSayisi === "number" && (son.items || []).length && !son.benzerSonuc &&
      ((son.sonucSayisi > (son.items || []).length && (k.sayfaGez || k.sayfaTikla || !ilgiliSayisi(son, sorgu))) || sayiBilinmez);
    if (!gerek) r.kapsamNeden = (son.sonucSayisi > 0 && (son.items || []).length >= son.sonucSayisi) ? "sitenin yazdığı kadar okundu" : (k.sayfaGez || k.sayfaTikla) ? "sonraki sayfa gerekmedi" : "yalnız ilk sayfa (sayfa kuralı yok)";
    if (gerek) {
      const ustT = k.sayfaUst || AYAR.sayfaUst || 12, aralikT = AYAR.sayfaAralik || [2000, 1500, 1000, 800];
      const enSon = k.sayfaGez || (k.sayfaTikla ? 1 + ustT : 4);
      r.kapsamNeden = k.sayfaGez ? "kural: en çok " + enSon + " sayfa" : k.sayfaTikla ? "istek sınırı (" + ustT + " ek sayfa)" : "en çok 4 sayfa, kitap görününce durur";
      for (let no = 2; no <= enSon; no++) {
        if (r.iptal) return;
        if (k.sayfaTikla) {
          if (Date.now() - r.basZaman > (AYAR.sayfaSure || 40) * 1000) { r.kapsamNeden = "süre bütçesi (" + (AYAR.sayfaSure || 40) + " sn)"; break; }
          await bekle(aralikT[Math.min(no - 2, aralikT.length - 1)]);
          if (r.iptal) return;
        }
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
          if (!ekS.length) { r.kapsamNeden = "sayfa " + no + " yeni ilan vermedi"; r.gezi.push("sayfa " + no + " (adresle): yeni ilan yok" + (yhS ? " · hata: " + String(yhS).slice(0, 60) : "") + (bS.son && bS.son.blocked ? " · ENGEL: " + bS.son.blocked : "")); break; }
          son.items = (son.items || []).concat(ekS);
          r.gezi.push("sayfa " + no + " (adresle): " + itS.length + " ürün okundu, " + ekS.length + " yeni");
          r.kapsamSayfa = no;
          sonucuYaz(r, son, k, sorgu);
          continue;
        }
        const imzaOnce = (son.items || []).length ? (son.items || []).map(u => u.href + "|" + (u.prices || [])[0]).join("§") : "";
        let g = "";
        try { g = String(await sonWv.calistir("(" + sayfayaGec.toString() + ")(" + no + ")")); } catch (e) { g = "hata: " + e; }
        if (g.indexOf("tıklandı") !== 0) { r.kapsamNeden = no === 2 ? "tek sayfa (sayfa düğmesi yok)" : "son sayfa (" + (no - 1) + ")"; r.gezi.push("sayfa " + no + ": " + g); break; }
        let yeniSon = null, degisti = false;
        const bit = Date.now() + 12000;
        while (Date.now() < bit && !r.iptal) {
          await bekle(1500);
          try { yeniSon = await sonWv.calistir(aramaJS(sorgu, k.tur, k.kart, ekKural(k))); } catch (e) { yeniSon = null; }
          if (yeniSon && yeniSon.items && yeniSon.items.length) {
            // Sayfa içeriği ilk sayfanın bu sayfadaki hâlinden farklı mı? (ilk sayfada okunanlardan en az biri yeni olmalı)
            const var2 = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
            const yeniVar = yeniSon.items.some(u => !var2.has(u.href + "|" + (u.prices || [])[0]));
            if (yeniVar && yeniSon.items.map(u => u.href + "|" + (u.prices || [])[0]).join("§") !== imzaOnce) { degisti = true; break; }
          }
        }
        if (r.iptal) return;
        if (!degisti) { r.kapsamNeden = "sayfa " + no + " değişmedi"; r.gezi.push("sayfa " + no + ": " + g + " ama sayfa değişmedi"); break; }
        const var_ = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
        const eklenecek = yeniSon.items.filter(u => !var_.has(u.href + "|" + (u.prices || [])[0]));
        son.items = (son.items || []).concat(eklenecek);
        r.gezi.push("sayfa " + no + ": " + g + " · " + yeniSon.items.length + " ürün okundu, " + eklenecek.length + " yeni");
        sonucuYaz(r, son, k, sorgu);
        r.kapsamSayfa = no;
        if (!k.sayfaGez && !k.sayfaTikla && ilgiliSayisi(son, sorgu)) { r.kapsamNeden = "kitap göründü, durdu (sayfa kuralı yok)"; break; }
      }
      try { r.sayfaHam = String(await sonWv.calistir("(" + sayfaHam.toString() + ")()") || ""); } catch (e) { }
    }
  } catch (e) { r.gezi.push("gezi hatası: " + e); }
  if (r.iptal) return;
  // 22.35 (Ana 45, S-d) · SAHAFTA SATICI BAŞINA İLAN — YÖN KARARI 3, seçenek A (Fatih, 21.11 09:07): arama sayfasındaki her ESER kartının kendi
  // sayfası açılır; o sayfadaki "Satan sahaflar" tablosunun her satırı (sahaf adı, kondisyon, kargo, fiyat, ilan bağlantısı) AYRI ilan olur.
  // Kanıt [bulut gerçek site, 21.11 Ana 45]: «Hayvan Çiftliği George Orwell» 4 kart → 2 eser sayfası (iki kart aynı sayfaya yönleniyor) →
  // 3 ilan (Hitit Kitap 90 ₺ çok iyi, NOVA KİTAP 66 ₺ yeni, NOVA KİTAP 130 ₺ yeni). Aynı ilan bağlantısı (…?v=…) bir kez sayılır.
  // Eser sayfası açılamaz ya da tablo okunamazsa kartın kendisi (eski davranış) kalır; kapsam satırında "eser sayfası okunamadı" yazar.
  // Süre: sitenin başından "sayfaSure" (40 sn) bütçesi; ikişer sayfa birlikte. Sahafta'nın arama servisi (Typesense) KULLANILMAZ (S-f, karar).
  if (k.eserSayfasi && sonWv && (son.items || []).length && !son.benzerSonuc && !r.iptal) {
    try { await eserSayfalariniOku(k, sorgu, r, son); } catch (e) { r.gezi.push("eser sayfası hatası: " + String(e).slice(0, 80)); }
  }
  if (r.iptal) return;
  sonucuYaz(r, son, k, sorgu);
  // 22.33 · KAPSAM TEŞHİSİ (yalnız rapor; sonuçlara KARIŞMAZ): sayfa kuralı olmayan sitede (Nadir, Kitantik, Sahafta ve kuralı olanlar hariç)
  // ilk sayfadaki sonuç sayı izleri ve sayfalama adayları yazılır; aynı arama yolunda sitenin kendi "2. sayfa" bağlantısı varsa o sayfa
  // BİR KEZ açılır (site başına en çok 1 ek istek) ve kaç ürün, kaç yeni ilan verdiği yazılır. Amaç: sayfa kuralını tahminle değil kanıtla yazmak.
  if (!k.sayfaBag && !k.sayfaEkSurekli && !k.sayfaGez && !k.sayfaTikla && sonWv && !r.iptal && (son.items || []).length) {
    try {
      const iz = await sonWv.calistir("(" + kapsamIzleri.toString() + ")()") || {};
      r.kapsamIz = (iz.izler || []).join(" | ");
      try { r.kapsamAday = String(await sonWv.calistir("(" + sayfalamaAdaylari.toString() + ")()") || "").slice(0, 600); } catch (e) { }
      if (iz.ikinci && !(son.sonucSayisi > 0 && (son.items || []).length >= son.sonucSayisi) && Date.now() - r.basZaman < (AYAR.sayfaSure || 40) * 1000) {
        await bekle((AYAR.sayfaAralik || [2000])[0]);
        const wvD = yeniSekme(r);
        const yhD = await sayfaYukle(wvD, iz.ikinci, 20000);
        const bD = await sonucBekle(wvD, sorgu, 10000, k.tur, r, k.kart);
        const itD = (bD.son && bD.son.items) || [];
        const varD = new Set((son.items || []).map(u => u.href + "|" + (u.prices || [])[0]));
        const yeniD = itD.filter(u => !varD.has(u.href + "|" + (u.prices || [])[0])).length;
        r.kapsamDeneme = "2. sayfa bağlantısı " + String(iz.ikinci).replace(/^https?:\/\/[^\/]+/, "").slice(0, 110) + " → " + itD.length + " ürün, " + yeniD + " yeni" +
          (bD.son && bD.son.blocked ? " · ENGEL: " + String(bD.son.blocked).slice(0, 40) : "") + (yhD ? " · hata: " + String(yhD).slice(0, 50) : "");
        try { wvD.kapat(); } catch (e) { }
      } else if (!iz.ikinci) r.kapsamDeneme = "aynı arama yolunda 2. sayfa bağlantısı yok";
    } catch (e) { r.kapsamDeneme = "teşhis hatası: " + String(e).slice(0, 60); }
  }
  if (r.iptal) return;

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
  // 22.21 · kurallar.json "yokTumMetin": true olan sitede (yalnız Letgo) sayfa hiç ürün vermediyse ve "sonuç yok" yazısı
  // ilk 15.000 harfte değil de sayfanın devamında geçiyorsa SONUÇ YOK sayılır. Yalnız sitenin KENDİ yazısı; "0 ürün" tek başına yok sayılmaz.
  // 22.23 · Yazarlı aramada önce "ad + yazar" sayfası tutulur; o sayfa hiç ürün vermediyse ve daha GENİŞ "yalnız ad" aramasında sitenin
  // kendi sayfası "sonuç yok" dediyse kitap bu sitede yoktur: SONUÇ YOK. (iPad 22.22, Letgo: "ad + yazar" sayfası "6 ilan bulundu" deyip
  // ilan kartı göstermedi, "yalnız ad" sayfası "0 ilan" dedi; motor ilk sayfayı tuttuğu için ÇALIŞMADI yazıyordu.) Bütün sitelerde geçerli,
  // ama yalnız tutulan sayfada ürün 0 iken; okunan ürün varsa etiket değişmez. "0 ürün" tek başına yine "yok" sayılmaz.
  if (r.genisYok && !r.sonucYok && !r.engel && !r.urunSayisi && !r.ilgililer.length && !r.takimlar.length &&
      !r.fiyatsizVar.length && !r.fiyatsizGizlenen.length && !r.fiyatsizBelirsiz.length) {
    r.sonucYok = true;
    r.yokGenisArama = r.genisYok;
  }
  // 22.22 · "yokTumMetin" sitesinde ürün yok ve 'yok' yazısı da yoksa: sayfa sonuna kaydırılır, 3 sn beklenir, sayfa yeniden okunur
  // (boş sonuç iletisi ancak görünür olunca çiziliyor olabilir [TAHMİN]). Yeni okuma 'yok' yazısı bulursa aşağıdaki kural onu kullanır.
  if (k.yokTumMetin && sonWv && r.ozet && !(r.ozet.yok || []).length && !r.sonucYok && !r.engel && !r.urunSayisi && !r.ilgililer.length && !r.iptal) {
    try {
      await sonWv.calistir("(function(){try{window.scrollTo(0,document.body.scrollHeight);}catch(e){}return 1;})()");
      await bekle(3000);
      const o2 = await sonWv.calistir("(" + sayfaOzeti.toString() + ")()");
      if (o2) { r.ozetIlk = { uzunluk: r.ozet.uzunluk, yok: (r.ozet.yok || []).length }; r.ozet = o2; r.ozet.kaydirmaSonrasi = true; }
    } catch (e) { r.ozetHata = String(e).slice(0, 80); }
  }
  if (k.yokTumMetin && r.ozet && (r.ozet.yok || []).length && !r.sonucYok && !r.engel && !r.urunSayisi && !r.ilgililer.length && !r.takimlar.length &&
      !r.fiyatsizVar.length && !r.fiyatsizGizlenen.length && !r.fiyatsizBelirsiz.length) {
    r.sonucYok = true;
    r.yokTumMetin = r.ozet.yok[0];
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
    // 22.34 (Ana 43): taban, 1. sayfanın GERÇEKTEN açıldığı adres (çoğu zaman "ad + yazar" araması); eskiden yalnız ad ile kuruluyordu,
    // bu durumda "ilk sayfadan farklı ilan" başka bir aramanın 1. sayfasıyla karşılaştırılıp şişiyordu.
    const temel = r.adres || adresYap(k.url[0], sorgu);
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
    // 22.35: stoğu satırın kendisinden okunmuş ilan (Sahafta eser sayfası: "Sepete Ekle", "Son 1 adet") için ürün sayfası açılmaz
    if (x.stok === "var" && x.stokNeden) { r.stokKontrol.push({ baslik: x.baslik, fiyat: x.fiyat, durum: "var", neden: x.stokNeden }); break; }
    if (denenen >= STOK_DENEME) break;
    denenen++;
    let s;
    try { s = await stokOku(x.href, r, k.stokVar, x.fiyat); } catch (e) { s = { durum: "bilinmiyor", neden: "hata: " + e }; }
    if (r.iptal) return;
    x.stok = s.durum; x.stokNeden = s.neden || ""; x.sayfaFiyat = s.fiyatDurum || ""; x.sayfaFiyatlari = s.sayfaFiyatlari || "";
    if (s.durum === "yok") x.stokYok = true;
    r.stokKontrol.push({ baslik: x.baslik, fiyat: x.fiyat, durum: s.durum, neden: s.neden || "", sayfaFiyat: x.sayfaFiyat, sayfaFiyatlari: x.sayfaFiyatlari });
    if (s.durum === "var") break;
  }
}

async function eserSayfalariniOku(k, sorgu, r, son) {
  const kartlar = (son.items || []).filter(u => !u.eserSatiri && u.kanit !== false && ilgili(u.title + " " + (u.extra || ""), sorgu));
  const gor = new Set(), isler = [];
  for (const u of kartlar) { if (!gor.has(u.href)) { gor.add(u.href); isler.push(u); } }
  r.eser = { kart: isler.length, okunan: 0, okunamayan: 0, ilan: 0, sure: 0, aramaKart: (son.items || []).length };
  if (!isler.length) return;
  const bas = Date.now(), butce = (AYAR.sayfaSure || 40) * 1000;
  const satirlar = new Map(), okunanKart = new Set();
  await sirayla(isler, k.eserParalel || 2, async u => {
    if (r.iptal || Date.now() - r.basZaman > butce) { r.eser.butce = true; return; }
    const wv = yeniSekme(r);
    const yh = await sayfaYukle(wv, u.href, 15000);
    let d = null;
    for (let i = 0; i < 12 && !r.iptal; i++) {
      await bekle(700);
      try { d = await wv.calistir("(" + eserSaticilari.toString() + ")()"); } catch (e) { d = { satir: [], hata: String(e) }; }
      if (d && d.satir && d.satir.length) break;
    }
    try { wv.kapat(); } catch (e) { }
    if (!d || !d.satir || !d.satir.length) { r.eser.okunamayan++; r.gezi.push("eser " + String(u.href).replace(/^https?:\/\/[^\/]+/, "").slice(0, 50) + ": satır okunamadı" + (yh ? " · " + String(yh).slice(0, 40) : "") + (d && d.hata ? " · " + d.hata.slice(0, 40) : "")); return; }
    r.eser.okunan++;
    okunanKart.add(u);
    d.satir.forEach(x => {
      const anahtar = x.href || (d.url + "|" + x.satici + "|" + x.fiyat);
      if (satirlar.has(anahtar)) return;
      satirlar.set(anahtar, { title: u.title, prices: [String(x.fiyat || "").replace(/₺/g, " TL")], href: x.href || d.url, extra: String(u.extra || "").slice(0, 120) + " · " + String(x.yazi || "").slice(0, 120),
        kanit: true, supheli: false, linksiz: false, turetildi: false, ctx: "", kondisyon: String(x.kondisyon || "").toLocaleLowerCase("tr").slice(0, 30), satici: String(x.satici || "").slice(0, 60),
        kargo: String(x.kargo || "").slice(0, 60), yazarAlani: u.yazarAlani || "", stokYok: !!x.stokYok, stokVar: x.stokYok ? "" : (x.stokVar ? "eser sayfası satırı: " + x.stokVar : ""), eserSatiri: true, eser: u.href });
    });
  });
  r.eser.sure = Math.round((Date.now() - bas) / 1000);
  r.eser.ilan = satirlar.size;
  if (!satirlar.size) return;
  // okunan kartların yerine satırlar; okunamayan kartlar (ve ilgisiz kartlar) olduğu gibi kalır
  son.items = (son.items || []).filter(u => !okunanKart.has(u) && !(okunanKart.size && [...okunanKart].some(o => o.href === u.href))).concat([...satirlar.values()]);
  r.gezi.push("eser sayfaları: " + r.eser.okunan + "/" + r.eser.kart + " okundu, " + r.eser.ilan + " ilan (satıcı)" + (r.eser.okunamayan ? ", okunamayan " + r.eser.okunamayan : "") + (r.eser.butce ? ", süre bütçesi doldu" : "") + " · " + r.eser.sure + " sn");
}
// Sayfada çalışır (Sahafta eser sayfası): "Satan sahaflar" tablosunun satırları.
function eserSaticilari() {
  try {
    var out = { satir: [], url: location.href };
    var rows = document.querySelectorAll('table tbody tr');
    for (var i = 0; i < rows.length; i++) {
      var tr = rows[i], sa = tr.querySelector('a[href*="/sahaflar/"]');
      if (!sa) continue;
      var td = tr.querySelectorAll('td');
      var metin = function (e) { return e ? String(e.innerText || e.textContent || '').replace(/\s+/g, ' ').trim() : ''; };
      var fiyat = metin(td[3]), kd = tr.querySelector('.e-badge-cond');
      var kond = kd ? metin(kd) : metin(td[1]).replace(/[★☆]/g, ' ').replace(/ikinci el/i, ' ').replace(/\s+/g, ' ').trim();
      var ilan = '', as = tr.querySelectorAll('a[href]');
      for (var j = 0; j < as.length; j++) { if (/[?&]v=/.test(as[j].getAttribute('href') || '')) { ilan = as[j].href; break; } }
      var yazi = metin(tr), kucuk = yazi.toLocaleLowerCase('tr');
      var stokYok = /tükendi|stokta yok|satıldı/.test(kucuk);
      var sv = (yazi.match(/son \d+ adet/i) || [])[0] || (/sepete ekle|hemen al/.test(kucuk) ? 'Sepete Ekle' : '');
      if (!/\d/.test(fiyat)) continue;
      out.satir.push({ satici: metin(sa), kondisyon: kond, kargo: metin(td[2]), fiyat: fiyat, href: ilan, yazi: yazi.slice(0, 160), stokYok: stokYok, stokVar: sv });
    }
    return out;
  } catch (e) { return { satir: [], hata: String(e) }; }
}

// Gösterilecek ilanlar: stokta olmadığı bilinenler (kartta ya da ürün sayfasında) çıkarılır. En ucuz = bunların ilki.
function gorunenler(r) { return (r.ilgililer || []).filter(x => !x.stokYok); }
// 22.38 (Ana 48): şüpheli kalan ilanın neden doğrulanamadığı (rapor için)
function dogrulanamadiNeden(x) {
  if (!x.stok) return "ürün sayfası açılmadı";
  if (x.stok !== "var") return "stok " + x.stok;
  if (!x.sayfaFiyat) return "sayfada kart fiyatı aranamadı";
  return "kart fiyatı " + x.sayfaFiyat + (x.sayfaFiyatlari ? " (stok işareti yanındaki fiyatlar: " + x.sayfaFiyatlari + ")" : "");
}
// 22.38 (Ana 48): gösterilen en ucuzdan daha ucuz ama fiyatı doğrulanamayan ilan gizli kalmasın (açıklanmamış eksik sıfır)
function dogrulanamadiNotu(r) {
  const ilk = enUcuz(r);
  const l = gorunenler(r).filter(x => x.supheliFiyat && (!ilk || x.fiyat < ilk.fiyat)).sort((a, b) => a.fiyat - b.fiyat);
  return l.length ? " · DAHA UCUZ AMA FİYATI DOĞRULANAMADI " + l.length + ": " + l.slice(0, 3).map(x => tl(x.fiyat) + " \"" + x.baslik.slice(0, 40) + "\" (" + dogrulanamadiNeden(x) + ")").join(" | ") : "";
}
function enUcuz(r) { return gorunenler(r)[0] || null; }
// 22.32: sıralama sonrası stok denetiminin süresi (sitenin kendi süresine eklenir; 0 ise yazılmaz)
function ekSure(r) { return r && r.stokTamamSure ? " (+" + r.stokTamamSure + " sn sıralama sonrası)" : ""; }
function stokSirasi(r) {
  return (r.stokKontrol || []).map(x => tl(x.fiyat) + " " + x.durum + " (" + x.neden + ")" + (x.sayfaFiyat ? " · sayfada kart fiyatı: " + x.sayfaFiyat + (x.sayfaFiyat !== "aynı" && x.sayfaFiyatlari ? " (stok işareti yanındaki fiyatlar: " + x.sayfaFiyatlari + ")" : "") : "")).join(" → ");
}

// Sürüm 22.5 · FİYAT DENETİMİ (siteler arası). Yalnız YAZAR GİRİLDİYSE çalışır (yazarsız aramada öteki siteler başka kitap olabilir).
// Referans: her yeni-kitap sitesinin en ucuz A DERECELİ (başlık tam + yazar kartta görüldü, kısmi/uyarlama izi yok) ilanı. Aday: bir sitenin A/B (puan ≤1) ilanı.
// Aday fiyatı, ÖTEKİ en az 2 yeni-kitap sitesinin referanslarının ortancasının YARISINDAN düşükse "fiyat şüpheli" (+5 puan; ilan gizlenmez, okunan fiyatlar rapora yazılır).
// Referanslar işaretlemeden ÖNCE alınır: sonuç sitelerin sırasına bağlı değildir. Neden: Hepsiburada 12,90 TL (öteki sitelerde ~230 TL), BKM üç ayrı kitapta tam 100,00 TL; sebep henüz kanıtlanmadı.
function fiyatDenetle(sonuclar) {
  if (!AKTIF_YAZAR) return;
  const yeniler = (sonuclar || []).filter(r => r && r.k && r.k.tur === "yeni" && Array.isArray(r.ilgililer));
  const gecerli = v => typeof v === "number" && isFinite(v) && v > 0;
  const ref = yeniler.map(r => r.ilgililer.filter(x => !x.stokYok && x.derece === "A" && x.puan === 0 && gecerli(x.fiyat)).map(x => x.fiyat).sort((a, b) => a - b)[0]);
  yeniler.forEach((r, i) => {
    const digerleri = ref.filter((v, j) => j !== i && gecerli(v)).sort((a, b) => a - b);
    if (digerleri.length < 2) return;
    const orta = digerleri.length % 2 ? digerleri[(digerleri.length - 1) / 2] : (digerleri[digerleri.length / 2 - 1] + digerleri[digerleri.length / 2]) / 2;
    r.ilgililer.forEach(x => {
      if (x.puan <= 1 && gecerli(x.fiyat) && x.fiyat < orta * 0.5) {
        // 22.38 (Ana 48, Fatih: seçenek A): stoğu "var" ve kart fiyatı ürün sayfasında aynı görülen ilan şüpheli sayılmaz.
        if (x.stok === "var" && x.sayfaFiyat === "aynı") x.dusukDogrulandi = orta;
        else { x.supheliFiyat = orta; x.puan += 5; }
      }
    });
    r.ilgililer.sort((a, b) => a.puan - b.puan || a.fiyat - b.fiyat);
  });
}

// Sürüm 22.32 · TAMAMLAYICI STOK DENETİMİ. Stok sırası her sitenin kendi işinde, o anki sıraya göre yapılır; siteler bitince
// fiyatDenetle (+5 [FİYAT ŞÜPHELİ]) ve yazarsizDegerlendir (+2 [C]) puan ekleyip listeyi YENİDEN sıralar. Böylece stoğu "var" bulunan
// ilan aşağı iner, stoğu hiç sınanmamış ilan "en ucuz" olur (iPad 22.31, Hayvan Çiftliği + George Orwell: Kitapyurdu en ucuz 66,20 TL
// STOĞU DOĞRULANMADI · stok sırası 24,90 TL var; BKM 45,00 ↔ 35,50 aynı desen). Burada son sıraya göre, en üstteki ilan hiç sınanmadıysa
// stok sırası kaldığı yerden sürdürülür: sınanmış ilan yeniden açılmaz, en çok STOK_DENEME yeni sayfa, site başına en çok 30 sn, siteler aynı anda.
// Raporda "sıralama sonrası" diye ayrı görünür. Sıralama değişmediyse hiçbir sayfa açılmaz.
async function stokTamamla(sonuclar) {
  // 22.32 (bağımsız denetim): siteler en çok "ayniAnda" (4) tanesi birlikte denetlenir; aynı anda açık sekme sayısı sınırlı kalır.
  await sirayla(sonuclar || [], AYAR.ayniAnda || 4, async r => {
    if (!r || !r.k || r.yavas || r.iptal) return;
    const g = gorunenler(r), ilk = g[0];
    if (!ilk) return;
    // Letgo gibi stok sayfası olmayan site: yayındaki ilan "var" sayılır; yeni en üstteki ilan da öyle işaretlenir (sayfa açılmaz).
    if (r.k.stokSayfasi === false) {
      if ((r.stokKontrol || []).length && !ilk.stok) { ilk.stok = "var"; ilk.stokNeden = "sıralama sonrası: ilan yayında (sitede stok bilgisi yok)"; r.stokKontrol.push({ baslik: ilk.baslik, fiyat: ilk.fiyat, durum: "var", neden: ilk.stokNeden }); }
      return;
    }
    const h = { iptal: false }; // ayrı sekme sahibi: sitenin sekmeleri siteSinirli'de kapatıldı
    const bas = Date.now();
    // Akakçe: satıcı satırları eski en üstteki ilana aitse yeni en üstteki ilan için yeniden okunur (tek sayfa).
    if (r.k.detay === "akakce") {
      if (!r.akakce || !r.akakce.adres || r.akakce.adres === ilk.href) return;
      let d = null;
      const kim = await Promise.race([akakceDetay(ilk.href, h).then(x => { d = x; return "bitti"; }, () => "bitti"), bekle(30000).then(() => "zaman")]);
      h.iptal = true; sekmeleriKapat(h);
      if (kim === "zaman" || !d) { r.akakce = { satir: [], adres: ilk.href, hata: "sıralama sonrası: 30 sn'de okunamadı" }; ilk.stok = "bilinmiyor"; ilk.stokNeden = "sıralama sonrası: satıcı satırı okunamadı"; }
      else {
        r.akakce = d;
        const stoklu = (d.satir || []).filter(x => /stokta(?! yok)/i.test(x)).length;
        ilk.stok = stoklu ? "var" : "bilinmiyor";
        ilk.stokNeden = "sıralama sonrası: " + (stoklu ? "Akakçe satıcı satırı: Stokta (" + stoklu + "/" + d.satir.length + " satır)" : "satıcı satırında stok yazmıyor");
      }
      r.stokKontrol.push({ baslik: ilk.baslik, fiyat: ilk.fiyat, durum: ilk.stok, neden: ilk.stokNeden });
      r.stokTamamSure = Math.round((Date.now() - bas) / 1000);
      return;
    }
    if (!(r.stokKontrol || []).length) return; // site kendi stok sırasını hiç yapmadı: burada da yapılmaz
    // Tetik (yalnız yeniden sıralama sonrası olabilir; sitenin kendi döngüsü görünen ilk ilanı her zaman sınar):
    // (a) en üstteki ilan hiç sınanmadı, ya da (b) stoğu "var" bulunan ilanın üstüne sınanmamış bir ilan çıktı
    // (ör. üstte "bilinmiyor" ilan, sonra sınanmamış ilan, doğrulanan ilan aşağıda). Sıralama değişmediyse ikisi de olmaz.
    const vi = g.findIndex(x => x.stok === "var");
    if (ilk.stok && !(vi > 0 && g.slice(0, vi).some(x => !x.stok))) return;
    let simdiki = null;
    const is = (async () => {
      let denenen = 0;
      for (const x of r.ilgililer) {
        if (h.iptal) return;
        if (x.stokYok) continue;
        if (x.stok === "var") return; // daha önce stoğu doğrulanan ilana gelindi: üstündekilerin hepsi yok ya da bilinmiyor
        if (x.stok) continue; // bilinmiyor: daha önce sınandı, yeniden açılmaz
        if (denenen >= STOK_DENEME) return;
        denenen++; simdiki = x;
        let s;
        try { s = await stokOku(x.href, h, r.k.stokVar, x.fiyat); } catch (e) { s = { durum: "bilinmiyor", neden: "hata: " + e }; }
        if (h.iptal) return;
        x.stok = s.durum; x.stokNeden = "sıralama sonrası: " + (s.neden || ""); x.sayfaFiyat = s.fiyatDurum || ""; x.sayfaFiyatlari = s.sayfaFiyatlari || "";
        if (s.durum === "yok") x.stokYok = true;
        r.stokKontrol.push({ baslik: x.baslik, fiyat: x.fiyat, durum: s.durum, neden: x.stokNeden, sayfaFiyat: x.sayfaFiyat, sayfaFiyatlari: x.sayfaFiyatlari });
        if (s.durum === "var") return;
      }
    })();
    const kim = await Promise.race([is.then(() => "bitti", () => "bitti"), bekle(30000).then(() => "zaman")]);
    if (kim === "zaman") {
      h.iptal = true;
      if (simdiki && !simdiki.stok) { simdiki.stok = "bilinmiyor"; simdiki.stokNeden = "sıralama sonrası: 30 sn'de kesildi"; r.stokKontrol.push({ baslik: simdiki.baslik, fiyat: simdiki.fiyat, durum: "bilinmiyor", neden: simdiki.stokNeden }); }
    }
    sekmeleriKapat(h);
    r.stokTamamSure = Math.round((Date.now() - bas) / 1000);
  });
}

// Süre sınırıyla çalıştırır. Sınır dolarsa site "yavaş" sayılır; o ana kadar doldurulan kayıt (kopyası) döner, arkadaki iş "iptal" bayrağıyla durdurulur.
// Sürüm 22.3 · LİSTE MODU için kısa rapor: bir kitap = bir blok. En ucuz 5 görünür (stokta olduğu bilinen) ilan, ilan veren/vermeyen site sayısı, takım özeti.
// "ilan yok" nedeni de yazılır (açıklanmamış eksik sıfır ilkesi: boş sitenin durumu görünür kalsın).
function kompaktRapor(sorgu, yazar, sonuclar, sure) {
  const tum = [];
  for (const r of sonuclar) for (const x of gorunenler(r)) tum.push({ site: r.k.ad, x, tur: r.k.tur });
  // Sürüm 22.4: önce kanıt puanı, sonra fiyat (22.3'te yalnız fiyat).
  tum.sort((a, b) => a.x.puan - b.x.puan || a.x.fiyat - b.x.fiyat);
  const takimlar = [];
  for (const r of sonuclar) for (const x of (r.takimlar || [])) takimlar.push({ site: r.k.ad, x });
  takimlar.sort((a, b) => a.x.fiyat - b.x.fiyat);
  const ilanli = sonuclar.filter(r => gorunenler(r).length);
  const ilansiz = sonuclar.filter(r => !gorunenler(r).length);
  const satir = [];
  // 22.17: yazar sanılan ama aslında seri adı olabilen adaylar etiketlenir (gerçek yazar tahmin edilmez; aday silinmez).
  const aday = c => c.ad + (ADAY_SERI.has(sade(c.ad).trim()) ? " (seri adı olabilir)" : "");
  satir.push("▶ " + sorgu + (yazar ? " | " + yazar : "") + " · " + sure + " sn · ilanı olan site " + ilanli.length + "/" + sonuclar.length + " · görünür ilan " + tum.length);
  baglantiSatirlari(sonuclar, "   ").forEach(x => satir.push(x)); // 22.24
  if (!yazar && sonuclar.yazarOyu && sonuclar.yazarOyu.length) {
    const ky = sonuclar.yazarOyu;
    // 22.15: en çok 10 aday gösterilir (22.14'te 6); fazlası "+N aday daha" notuyla bildirilir.
    satir.push("   YAZAR ADAYLARI (başlığı aynen uyan ilanlardan; tahmindir, uygulanmadı): " + ky.slice(0, 10).map(c => aday(c) + " " + c.oy + " ilan/" + c.siteler.length + " site").join(" · ") + (ky.length > 10 ? " · +" + (ky.length - 10) + " aday daha: " + ky.slice(10).map(c => aday(c) + " " + c.oy).join(", ") : "")
      + (ky.length > 1 && ky[1].oy >= 2 ? " → YAZAR SEÇİMİ GEREK: aynı adla birden çok yazar var, yazarı girersen sonuç kesinleşir" : ky.length > 1 ? " → başka bir yazar da olabilir (" + ky[1].ad + "); yazarı girersen sonuç kesinleşir" : ""));
  }
  // 22.18: ek aday satırı yalnız bilgidir (derece, puan, sıralama ve "YAZAR SEÇİMİ GEREK" kararı bunu kullanmaz).
  if (!yazar && sonuclar.yazarOyuEk && sonuclar.yazarOyuEk.length) {
    const ke = sonuclar.yazarOyuEk;
    satir.push("   EK YAZAR ADAYLARI (yalnız bilgi; Hepsiburada/Kitapseç/Trendyol/n11/Akakçe başlığındaki \"Başlık - Yazar\" desenlerinden; sıralamaya katılmaz): " + ke.slice(0, 10).map(c => aday(c) + " " + c.oy + " ilan/" + c.siteler.length + " site" + (c.ana ? " (ana listede: " + c.ana + ")" : " (ana listede yok)")).join(" · ") + (ke.length > 10 ? " · +" + (ke.length - 10) + " aday daha: " + ke.slice(10).map(c => aday(c) + " " + c.oy).join(", ") : ""));
  }
  // 22.14: aynı adla birden çok yazar varsa her yazar adayının en ucuz ilanı ayrı satırda gösterilir (listeyi değiştirmez; hiçbir ilan gizlenmez).
  if (!yazar && sonuclar.yazarOyu && sonuclar.yazarOyu.length > 1 && sonuclar.yazarOyu[1].oy >= 2) {
    const guclu2 = sonuclar.yazarOyu; // 22.17: 1 oylu adaylar da (örnek: Ian McEwan) en ucuz ilan satırı alır
    // 22.19: 10 sınırının dışında kalan ama EK listede (başlık-yazar deseni) en az 2 siteyle desteklenen aday da en ucuz ilan satırı alır (yalnız rapor metni; 22.18 iPad raporunda Ian McEwan 12. sıradaydı ve satırsız kaldı).
    const ekDestekli = c => (sonuclar.yazarOyuEk || []).some(e => e.siteler.length >= 2 && e.tk && ayniYazar(e.tk, c.tk));
    const adaylar = guclu2.slice(0, 10).concat(guclu2.slice(10).filter(ekDestekli)); // 22.15: 6 → 10
    const ucuz = [];
    adaylar.forEach(c => {
      const eslesen = tum.filter(t => t.x.tamBaslik && t.x.yazarAday && ayniYazar(c.tk, yazarAdlari(t.x.yazarAday))).sort((a, b) => a.x.fiyat - b.x.fiyat);
      if (eslesen.length) { const t = eslesen[0]; ucuz.push("      " + aday(c) + " → " + tl(t.x.fiyat) + " · " + t.site + " · \"" + t.x.baslik.slice(0, 40) + "\"" + (t.x.satici ? " · " + t.x.satici : "") + " · kart: " + String(t.x.kart || "").slice(0, 90)); }
    });
    if (ucuz.length) { satir.push("   yazar adayı başına en ucuz ilan (aday okunduğu ilanlar):"); ucuz.forEach(u => satir.push(u)); { const kalan = guclu2.slice(10).filter(c => !adaylar.includes(c)); if (kalan.length) satir.push("      +" + kalan.length + " aday daha: " + kalan.map(c => aday(c) + " " + c.oy).join(", ")); } }
  }
  const isaretler = x => (x.derece === "-" ? "" : " [" + x.derece + "]") + (x.kismi ? " [kısmi cilt]" : "") + (x.uyarlama ? " [uyarlama]" : "") + (x.adEksik ? " [ad eksik]" : "") + (x.tarihli ? " [tarihli]" : "") + (x.baskaDil ? " [başka dil]" : "") + (x.sesUrunu ? " [CD/ses]" : "") + (x.baskaYazar ? " [başka yazar: " + x.baskaYazar.slice(0, 30) + "]" : "") + (x.kartIciSuphe ? " [kart içi fiyat şüpheli: aynı kartta " + tl(x.kartIciSuphe) + " da var]" : "") + (!yazar && x.yazarAday ? " [yazar: " + x.yazarAday.slice(0, 28) + "]" : "");
  // Ham fiyat tanısı: derecesi A olmayan ilanda ve "daha ucuz ama zayıf" ilanında okunan bütün fiyatlar + fiyattan önceki karakterler yazılır
  // (BKM 100,00 TL, Hepsiburada 12,90 TL, n11 Sahaflar 26,45 TL gibi açıklanmamış fiyatların nedeni raporla anlaşılsın).
  const hamFiyat = x => " · okunan fiyatlar: " + (x.tum || "-") + (x.kart ? " · kart: " + String(x.kart).slice(0, /Teslimat bilgisi/.test(String(x.kart)) ? 200 : 110) : "") + " · fiyattan önceki 60 karakter: " + String(x.ctx || "-").replace(/\s+/g, " ").slice(-110);
  const gosterilen = tum.slice(0, 5);
  gosterilen.forEach(t => {
    const x = t.x;
    let e = "   " + tl(x.fiyat) + " · " + t.site + " · \"" + x.baslik.slice(0, 55) + "\"" + isaretler(x) + (x.stok === "var" ? "" : " [stok doğrulanmadı]");
    if (x.derece !== "A") e += hamFiyat(x); // 22.11: yazar girilmediğinde ("-") de kart metni yazılır (yazar bulma için hangi sitede yazarın nasıl göründüğünü incelemek)
    if (x.supheliFiyat) e += " [FİYAT ŞÜPHELİ: öteki yeni kitap sitelerinin ortancası " + tl(x.supheliFiyat) + "; okunan fiyatlar: " + (x.tum || "-") + "; ürün sayfasında doğrulanamadı: " + dogrulanamadiNeden(x) + "]";
    if (x.dusukDogrulandi) e += " [düşük fiyat ürün sayfasında doğrulandı: öteki yeni kitap sitelerinin ortancası " + tl(x.dusukDogrulandi) + "]";
    if (x.kondisyon) e += " · " + x.kondisyon;
    if (x.satici) e += " · " + x.satici;
    satir.push(e);
  });
  // 22.7: ilk 5 ilanın hiçbirinde yazar kanıtı yoksa (yazar girildiyse) uyarı: aynı adlı başka yazarın kitabı olabilir.
  if (yazar && gosterilen.length && !gosterilen.some(t => t.x.derece === "A")) satir.push("   UYARI: ilk " + gosterilen.length + " ilanın hiçbirinde yazar kanıtı yok; aynı adlı başka yazarın kitabı olabilir.");
  // Daha ucuz ama düşük puanlı (kanıtı zayıf) ilanlar: Google karşılaştırmasında görünür kalsın, ama üstte durmasın.
  if (gosterilen.length) {
    const alt = Math.min.apply(null, gosterilen.map(t => t.x.fiyat));
    const ucuzlar = tum.slice(5).filter(t => t.x.fiyat < alt).sort((a, b) => a.x.fiyat - b.x.fiyat);
    if (ucuzlar.length) {
      const gorulen = new Set();
      const iyi = ucuzlar.filter(t => { if (t.x.adEksik) return false; const a = t.site + "|" + t.x.baslik + "|" + t.x.fiyat; if (gorulen.has(a)) return false; gorulen.add(a); return true; });
      const adEksikSay = ucuzlar.filter(t => t.x.adEksik).length;
      satir.push("   daha ucuz ama kanıtı zayıf: " + ucuzlar.length + " ilan" + (adEksikSay ? " (" + adEksikSay + " tanesi [ad eksik]: büyük olasılıkla başka kitap, aşağıda yok)" : "") + (iyi.length ? "; en ucuz " + Math.min(3, iyi.length) + ":" : ""));
      iyi.slice(0, 3).forEach(u => satir.push("      " + tl(u.x.fiyat) + " · " + u.site + " · \"" + u.x.baslik.slice(0, 40) + "\"" + isaretler(u.x) + hamFiyat(u.x)));
      // 22.14: gizlenen [ad eksik] ilanların başlıkları denetim için kısaca yazılır (kitap listesine girmez).
      const ae = ucuzlar.filter(t => t.x.adEksik).slice(0, 6);
      if (ae.length) satir.push("   gizli [ad eksik] ilanlar (denetim için): " + ae.map(t => tl(t.x.fiyat) + " " + t.site + " \"" + t.x.baslik.slice(0, 45) + "\"").join(" ; "));
    }
  }
  if (takimlar.length) satir.push("   takım/set: " + takimlar.length + " ilan, en ucuz " + tl(takimlar[0].x.fiyat) + " (" + takimlar[0].site + ")");
  const ilgisizToplam = sonuclar.reduce((n, r) => n + (r.ilgisizSayisi || 0), 0);
  if (ilgisizToplam) {
    const say = {};
    sonuclar.forEach(r => String(r.ilgisizOzet || "").split(", ").filter(Boolean).forEach(p => { const m = p.match(/^(.*) (\d+)$/); if (m) say[m[1]] = (say[m[1]] || 0) + Number(m[2]); }));
    const ornek = [];
    sonuclar.forEach(r => (r.ilgisizOrnek || []).forEach(o => { if (ornek.length < 4) ornek.push(r.k.ad + ": " + o); }));
    satir.push("   ilgisiz kalem elenen: " + ilgisizToplam + " (" + Object.keys(say).map(n => n + " " + say[n]).join(", ") + ")");
    ornek.forEach(o => satir.push("      elenen örnek · " + o));
  }
  if (ilansiz.length) satir.push("   ilan yok: " + ilansiz.map(r => r.k.ad + " (" + ilansizAd(r) + altDurumNotu(r) + (r.aramaDenenen.length > 1 ? ", yalnız ad da denendi" : "") + calismadiNeden(r) + ")").join(", "));
  // 22.22 teşhis bloğu: yalnız "yokTumMetin" sitesi (Letgo) ÇALIŞMADI ya da sayfanın devamından SONUÇ YOK olduysa.
  ilansiz.filter(r => r.k.yokTumMetin && r.ozet && r.ozet.tamMetin != null && (renk(r) === "kirmizi" || r.yokTumMetin)).forEach(r => {
    const o = r.ozet;
    satir.push("   TEŞHİS (22.22) " + r.k.ad + ": tarayıcı genişliği " + o.gen + " · " + (o.kaydirmaSonrasi ? "sona kaydırıp 3 sn sonra okundu (ilk okuma: " + r.ozetIlk.uzunluk + " harf)" : "kaydırma yapılmadı") +
      (r.ozetHata ? " · kaydırma hatası: " + r.ozetHata : "") + " · HTML " + o.htmlUzunluk + " harf · UA: " + o.ua);
    satir.push("      HTML'de 'yok' izleri: " + ((o.htmlParca || []).join(" | ") || "hiç yok"));
    satir.push("      sayfa metni (tamamı, " + o.uzunluk + " harf): " + o.tamMetin);
  });
  // 22.12: yazarsız aramada her sitenin bir örnek kartı (yazarın hangi sitede nasıl göründüğünü incelemek için)
  if (!yazar) {
    const ornek = [];
    for (const r of sonuclar) { const x = (r.ilgililer || [])[0]; if (x && x.kart) ornek.push("      " + r.k.ad + ": " + String(x.kart).slice(0, 150)); }
    if (ornek.length) { satir.push("   örnek kartlar (site başına 1):"); ornek.forEach(e => satir.push(e)); }
  }
  return satir.join("\n");
}

// ---------------------------------------------------------------
// 22.24 · BAĞLANTI YOKLAMASI ve YAPI? İŞARETİ (yalnız rapor bilgisi; renk(), sayaç, eleme, derece, puan ve sıralama bunları KULLANMAZ)
// Amaç: internet kesikken siteler "çalışmadı" sayılmasın ("yok" ile "bilmiyoruz" karışmasın); site düzeni değişmiş olabilecek
// durum "kitap yok"tan ayrı görünsün. İlke: "internet yok" demek de kanıt ister; tek kanıt yetmez.
// Kanıt 1: tarayıcı sözleşmesindeki İSTEĞE BAĞLI T.baglanti() → Promise<{ durum: "var"|"yok"|"portal"|"bilinmiyor", ms, ayrinti }>.
//          Kabuk iki bağımsız küçük adresi dener (Google generate_204, Apple hotspot-detect). Kabukta yoksa bu kanıt atlanır.
// Kanıt 2: sayfa açılış hatasının metni. Yalnız "cihaz çevrimdışı" anlamına gelen kodlar BAĞLANTI sayılır
//          (iOS NSURLErrorDomain -1009/-1020, Android net::ERR_INTERNET_DISCONNECTED/ERR_NETWORK_CHANGED/ERR_ADDRESS_UNREACHABLE).
//          Ad çözülememe ya da bağlantı reddi gibi hatalar tek bir sitenin kendi sorunu da olabilir: yalnız yoklama "yok" derse BAĞLANTI.
// Yoklama yalnız ÇALIŞMADI ya da YAVAŞ olan sitede, site bittikten SONRA yapılır (önceki bir yoklama kesintiden önceye ait olabilir;
// yalnız son 8 sn içinde başlamış yoklama ortak kullanılır).
// ---------------------------------------------------------------
const AG_COVRIMDISI = /NSURLErrorDomain[^\d-]*-10(09|20)\b|\(-10(09|20)\)|code[ =:]*-10(09|20)\b|ERR_INTERNET_DISCONNECTED|ERR_NETWORK_CHANGED|ERR_ADDRESS_UNREACHABLE|appears to be offline|çevrimdışı/i; // 22.26: iPad Türkçe metni "İnternet bağlantısı çevrimdışı gözüküyor." (iPad 22.24 raporu, kodsuz)
const AG_HATASI = /NSURLErrorDomain|ERR_NAME_NOT_RESOLVED|ERR_NAME_RESOLUTION_FAILED|ERR_CONNECTION_(TIMED_OUT|RESET|REFUSED|CLOSED|FAILED|ABORTED)|ERR_TIMED_OUT|ERR_PROXY|server with the specified hostname could not be found|could not connect to the server|network connection was lost|request timed out/i;
let yoklamaSon = null;
function baglantiYokla() {
  if (!T || typeof T.baglanti !== "function") return Promise.resolve(null);
  const simdi = Date.now();
  if (yoklamaSon && simdi - yoklamaSon.zaman < 8000) return yoklamaSon.sonuc;
  const sonuc = Promise.race([
    Promise.resolve().then(() => T.baglanti()).then(x => x || { durum: "bilinmiyor", ayrinti: "boş yanıt" }).catch(e => ({ durum: "bilinmiyor", ayrinti: "yoklama hatası: " + String(e).slice(0, 80) })),
    bekle(15000).then(() => ({ durum: "bilinmiyor", ayrinti: "yoklama 15 sn içinde bitmedi" }))]);
  yoklamaSon = { zaman: simdi, sonuc };
  return sonuc;
}
// Site kaydına BAĞLANTI bilgisini yazar. r.baglanti: yoklama sonucu; r.baglantiSorunu: neden metni (boşsa bağlantı sorunu yok).
async function baglantiDenetle(r) {
  const rk = renk(r);
  if (rk !== "kirmizi" && rk !== "yavas") return;
  const hata = String(r.hata || "");
  const covrimdisi = (hata.match(AG_COVRIMDISI) || [])[0] || "";
  const agHatasi = covrimdisi || (hata.match(AG_HATASI) || [])[0] || "";
  if (agHatasi) r.agHatasi = agHatasi;
  let y = null;
  try { y = await baglantiYokla(); } catch (e) { }
  if (y) r.baglanti = { durum: String(y.durum || "bilinmiyor"), ms: (typeof y.ms === "number" ? y.ms : null), ayrinti: String(y.ayrinti || "").slice(0, 160) };
  if (y && (y.durum === "yok" || y.durum === "portal")) r.baglantiSorunu = (y.durum === "yok" ? "internet yok (yoklama: iki adres de açılmadı)" : "internete çıkılamıyor (yoklama: giriş sayfası ya da beklenmeyen yanıt)") + (covrimdisi ? "; sayfa hatası da çevrimdışı diyor" : "");
  else if (covrimdisi) r.baglantiSorunu = "sayfa açılırken cihaz çevrimdışıydı (" + covrimdisi + ")" + (y && y.durum === "var" ? "; sonraki yoklamada internet geri gelmişti" : "");
  if (!r.baglantiSorunu && rk === "yavas" && r.baglanti && r.baglanti.durum === "var" && r.baglanti.ms > 4000) r.baglantiYavas = true;
}
// YAPI? : sayfa açıldı, engel ve bağlantı sorunu yok, site sonuç olduğunu söylüyor ya da sayfada fiyat var, ama motor hiç ilan ayıramadı.
// Site düzeni değişmiş olabilir (kanıt değil, işaret). Tek bir aramada görülmesi değişiklik kanıtı sayılmaz; tekrarı izlenir.
function yapiSuphesi(r) {
  if (!r || renk(r) !== "kirmizi" || r.engel || r.baglantiSorunu || r.yavas || r.urunSayisi) return "";
  if (r.sonucSayisi > 0) return "site " + r.sonucSayisi + " sonuç olduğunu yazıyor ama ilan ayrılamadı";
  if (r.fiyatSayisi > 0) return "sayfada " + r.fiyatSayisi + " fiyat var ama ilan ayrılamadı";
  return "";
}
// Arayüz ve rapor için alt durum (teknik etiketler ve renk() değişmez): "BAĞLANTI" · "ENGEL" · "YAPI?" · ""
function altDurum(r) {
  if (!r) return "";
  if (r.baglantiSorunu) return "BAĞLANTI";
  const rk = renk(r);
  if ((rk === "kirmizi" || rk === "yavas") && r.engel) return "ENGEL";
  if (yapiSuphesi(r)) return "YAPI?";
  return "";
}
function altDurumNotu(r) {
  const a = altDurum(r);
  if (a === "BAĞLANTI") return " [BAĞLANTI: " + r.baglantiSorunu + "]";
  if (a === "YAPI?") return " [YAPI?: " + yapiSuphesi(r) + "; site düzeni değişmiş olabilir]";
  if (r && r.baglantiYavas) return " [bağlantı yavaş: yoklama " + r.baglanti.ms + " ms]";
  return "";
}
// Bir aramanın bağlantı özeti (arayüz için): { sorunlu: [site adları], yapi: [site adları], basta: arama başındaki yoklama }
function baglantiOzeti(sonuclar) {
  const s = sonuclar || [];
  return { sorunlu: s.filter(r => r && r.baglantiSorunu).map(r => r.k.ad), yapi: s.filter(r => altDurum(r) === "YAPI?").map(r => r.k.ad),
    yavas: s.filter(r => r && r.baglantiYavas).map(r => r.k.ad), basta: (s.baglantiBasta || null) };
}
function baglantiSatirlari(sonuclar, girinti) {
  const o = baglantiOzeti(sonuclar), g = girinti || "", out = [];
  if (sonuclar && sonuclar.cevrimdisi) out.push(g + "ÇEVRİMDIŞI (22.25): arama başında internet yoktu; siteler açılmadı · ikinci yoklama: " + sonuclar.cevrimdisi.ikinci.durum + " · " + sonuclar.cevrimdisi.ikinci.ayrinti + " · TEŞHİS (bir site denendi): " + sonuclar.cevrimdisi.teshis);
  const b = o.basta;
  if (o.sorunlu.length) out.push(g + "BAĞLANTI SORUNU (22.24): " + o.sorunlu.length + "/" + sonuclar.length + " siteye internet sorunu yüzünden bakılamadı: " + o.sorunlu.join(", ") + (b ? " · arama başındaki yoklama: " + b.durum + (b.ms != null ? " (" + b.ms + " ms)" : "") + (b.ayrinti ? " · " + b.ayrinti : "") : " · yoklama yok (kabuk desteklemiyor)"));
  else if (b && b.durum !== "var") out.push(g + "BAĞLANTI (22.24): arama başındaki yoklama \"" + b.durum + "\" dedi" + (b.ayrinti ? " · " + b.ayrinti : "") + "; sitelerde bağlantı sorunu görülmedi");
  if (o.yavas.length) out.push(g + "BAĞLANTI YAVAŞ (22.24): süre sınırında kesilen sitelerde yoklama 4 sn'den uzun sürdü: " + o.yavas.join(", "));
  if (o.yapi.length) out.push(g + "YAPI? (22.24): site düzeni değişmiş olabilir (tek arama kanıt değildir): " + sonuclar.filter(r => altDurum(r) === "YAPI?").map(r => r.k.ad + " (" + yapiSuphesi(r) + ")").join(", "));
  return out;
}

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
    try { await baglantiDenetle(kopya); } catch (e) { }
    return kopya;
  }
  r.sure = Math.round((Date.now() - bas) / 1000);
  sekmeleriKapat(r);
  try { await baglantiDenetle(r); } catch (e) { }
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

// 22.6: kompakt raporda "GÖRÜNMÜYOR" yerine nedeni yazılır (uzun rapor ve sayaçlar RENK_ADI ile aynı kalır).
// 22.20: ÇALIŞMADI sitelerde neden kısa yazılır (Letgo Şeyh Bedreddin'de iki raporda nedensiz ÇALIŞMADI çıktı). Yalnız rapor metni.
function tumMetinNotu(r) {
  const o = r.ozet || {};
  const yz = (o.yok || []).map(x => x.i + ". harf: \"" + String(x.s).slice(0, 90) + "\"").join(" | ");
  const ip = (o.ipucu || []).map(x => x.i + ". harf: \"" + String(x.s).slice(0, 90) + "\"").join(" | ");
  return "tüm metin " + (o.uzunluk == null ? "?" : o.uzunluk) + " harf · 'yok' yazısı: " + (yz || "yok") + (ip ? " · ipucu: " + ip : "");
}
function calismadiNeden(r) {
  if (r.yokGenisArama) return " · 'ad + yazar' sayfası ürün vermedi, 'yalnız ad' sayfası kendisi 'sonuç yok' dedi (22.23)";
  if (r.yokTumMetin) return " · sayfanın devamında okundu (22.21): " + tumMetinNotu(r);
  if (renk(r) !== "kirmizi") return "";
  const p = [];
  if (r.engel) p.push("ENGEL: " + String(r.engel).replace(/\s+/g, " ").slice(0, 60));
  if (r.ozet) { const t = String(r.ozet.title || "").replace(/\s+/g, " ").slice(0, 40), m = String(r.ozet.metin || r.ozet.hata || "").replace(/\s+/g, " ").slice(0, 110); if (t || m) p.push("sayfada: \"" + t + "\" " + m); }
  if (r.hata) p.push("hata: " + String(r.hata).replace(/\s+/g, " ").slice(0, 60));
  p.push("yol: " + (r.yol || "-") + ", ürün " + (r.urunSayisi || 0) + ", sayfa sonuç sayısı " + (r.sonucSayisi == null ? "?" : r.sonucSayisi) + (r.anaYolKarar ? ", ana sayfa yolu " + r.anaYolKarar : ""));
  if (r.ozet && r.ozet.uzunluk != null) p.push(tumMetinNotu(r));
  return " · neden: " + p.join(" · ");
}
function ilansizAd(r) {
  const c = renk(r);
  if (c !== "gorunmuyor") return RENK_ADI[c];
  if ((r.fiyatsizGizlenen || []).length || (r.ilgililer || []).length) return "kitap var ama stokta yok, gizlendi";
  if (r.urunSayisi > 0) return "KİTAP YOK: sayfa açıldı, " + r.urunSayisi + " ürün okundu, hiçbiri bu kitap değil";
  return RENK_ADI[c];
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
// 22.35 (YÖN 2): "Başka kitap olabilir" bölümü (en ucuz sayılmaz) ve güçlü kanıtla elenen ilanlar; rapor satırına eklenir.
function baskaOlabilirNotu(r) {
  let s = "";
  const b = r.baskaOlabilir || [];
  if (b.length) s += " · BAŞKA KİTAP OLABİLİR " + b.length + " (en ucuz sayılmadı): " + b.slice(0, 4).map(x => tl(x.fiyat) + " \"" + x.baslik.slice(0, 40) + "\" [" + x.baskaNeden + "]").join(" | ");
  // 22.36 (Ana 47, Kural 11): yayınevi/marka sayılan önekler sayılır (kayıtlı sayfası olmayan sitelerde iPad turundan sonra ilk denetlenecek sayı)
  const tumIl = (r.ilgililer || []).concat(r.takimlar || [], b);
  const og = tumIl.filter(x => x.onek && x.onek.tur === "guclu"), oz = tumIl.filter(x => x.onek && x.onek.tur === "zayif");
  const ornek = l => [...new Set(l.map(x => x.onek.onek))].slice(0, 3).map(o => "\"" + o + "\"").join(", ");
  if (og.length || oz.length) s += " · ÖNEK yayınevi/marka sayıldı " + og.length + (og.length ? " (" + ornek(og) + ")" : "") + (oz.length ? ", zayıf " + oz.length + " (" + ornek(oz) + "; [C] kalır)" : "");
  const e = r.elenenBaska || [];
  if (e.length) s += " · BAŞKA KİTAP DİYE ELENEN " + e.length + ": " + e.slice(0, 3).map(x => tl(x.fiyat) + " \"" + x.baslik.slice(0, 40) + "\" [" + x.neden + "]").join(" | ");
  return s;
}
// 22.36 (Ana 47): doğruluk kutusu için site başına fiyata göre en ucuz 5 ilgili ilan (stokta yok diye gizlenenler hariç; derece parantezde)
function ucuz5Satir(r) {
  const l = gorunenler(r).slice().sort((a, b) => a.fiyat - b.fiyat).slice(0, 5);
  return l.length ? "   en ucuz 5: " + l.map(x => tl(x.fiyat) + " " + x.baslik.slice(0, 28) + (x.derece && x.derece !== "-" ? " [" + x.derece + "]" : "") + (x.supheliFiyat ? " [FİYAT ŞÜPHELİ]" : "") + (x.dusukDogrulandi ? " [düşük, sayfada doğrulandı]" : "") + (x.kartIciSuphe ? " [kart içi şüphe]" : "") + (x.stok === "yok" ? " [stok yok]" : "")).join(" | ") : "";
}
function ilanEk(x) {
  const p = [];
  if (x.teklif) p.push("öne çıkan teklif yok: öteki satıcıların en düşük teklifi" + (x.teklif !== "?" ? ", " + x.teklif + " yeni ürün" : ""));
  if (x.yazarKanit) p.push("yazar kanıtı: " + x.yazarKanit);
  if (x.kondisyon) p.push("kondisyon: " + x.kondisyon);
  if (x.satici) p.push("satıcı: " + x.satici);
  if (x.sehir) p.push("şehir: " + x.sehir);
  return p.length ? " (" + p.join(", ") + ")" : "";
}
// Sürüm 21 · kısa rapor: çalışan site tek satır; "çalıştı" kararının kanıtı (ilan sayısı, en ucuz stoklu ilan, stok sırası) bu satırda.
function kisaSatir(r) {
  const ilk = enUcuz(r);
  let s = "[ÇALIŞTI] " + r.k.ad + " · " + r.sure + " sn" + ekSure(r) + " · ilgili " + r.ilgililer.length;
  const gizli = r.ilgililer.length - gorunenler(r).length;
  if (gizli) s += " (stokta yok, gizlenen " + gizli + ")";
  if (r.takimlar.length) s += " · takım " + r.takimlar.length;
  s += baskaOlabilirNotu(r) + dogrulanamadiNotu(r);
  if (AKTIF_YAZAR) s += " · arama: " + (r.aramaTuru || "?") + (r.aramaDenenen.length > 1 ? " (yalnız ad da denendi)" : "") + " · yazar kartta " + r.ilgililer.filter(x => x.yazarKartta).length + "/" + r.ilgililer.length;
  if (r.kanitsizSayisi) s += " · kanıtsız elenen " + r.kanitsizSayisi;
  if (r.ilgisizSayisi) s += " · ilgisiz kalem elenen " + r.ilgisizSayisi + " (" + r.ilgisizOzet + ")";
  if (ilk) s += " · en ucuz " + tl(ilk.fiyat) + " \"" + ilk.baslik.slice(0, 50) + "\"" + ilanEk(ilk);
  if (r.stokKontrol.length) s += " · stok sırası: " + stokSirasi(r);
  if (r.akakce) s += " · Akakçe ürün sayfası " + (r.akakce.satir || []).length + " satıcı satırı";
  // 22.34 (Ana 43): yalnız yeni ilan getiren sayfalar sayılır (eskiden başarısız deneme de sayılıyordu: Sahafta "1 ek sayfa okundu", tek sayfa)
  const ekOkunan = r.gezi.filter(x => /ürün okundu, [1-9]\d* yeni(?: ·|$)/.test(x)).length; // 22.35: satır sonuna "· ilgili N · ilk: …" eklendi
  if (ekOkunan) s += " · " + ekOkunan + " ek sayfa okundu";
  // Sürüm 21.4: sahaf ilanında kondisyon okunamadıysa kartın yazısı eklenir (gerçek sitede kondisyonun nasıl yazıldığını görmek için).
  // Sürüm 21.6: kuralında "kondisyonKartta": false olan sitede (Kitantik: kondisyon yalnız ürün sayfasında) bu uyarı yazılmaz.
  if (ilk && r.k.tur === "sahaf" && !ilk.kondisyon && r.k.kondisyonKartta !== false) s += " · KONDİSYON OKUNAMADI, kart: " + String(ilk.kart || "").slice(0, 180);
  return s;
}

// ---------------------------------------------------------------
// Rapor: panoya kopyalanacak düz metin. Sürüm 21: önce çalışanlar (tek satır), sonra yalnız sorunlu/kısmen/aday sitelerin ayrıntısı.
// ---------------------------------------------------------------
// 22.33 · Kapsam satırı: sitede kaç ilan okundu, site kaç sonuç yazıyor, kaç sayfa okundu, neden durdu. "Tam okundu" yalnız
// okunan ≥ sitenin yazdığı ise ya da son sayfaya kadar okunduysa yazılır; site sayı yazmıyorsa "site sayı yazmıyor" denir (tahmin yok).
function kapsamSatiri(r) {
  // 22.34 (Ana 43): site "0 sonuç" yazarken sayfadaki öneri kartları okunan sayılmaz (SahafPazar Kefaret "1 / 0" yazıyordu)
  const oneri = (r.sonucSayisi === 0 && r.urunSayisi > 0) ? r.urunSayisi : 0;
  // 22.35: Sahafta'da sitenin yazdığı sayı ESER kartı sayısıdır; karşılaştırma okunan kartla yapılır, ilan (satıcı) sayısı ayrıca yazılır
  const okunan = oneri ? 0 : ((r.eser && r.eser.ilan) ? r.eser.aramaKart : (r.urunSayisi || 0)), yazan = r.sonucSayisi;
  const sonS = r.kapsamSonSayfa || 0, oS = r.kapsamSayfa || 1;
  // 22.35: site okunandan ÇOK sonuç yazıyorsa "tek sayfa / son sayfa" nedeni TAM yazdırmaz (bulut BKM: 32 / 122 "tek sayfa · TAM" yazıyordu).
  // "+" ile yazılan sayı ("3+ Ürün") alt sınırdır: TAM yalnız sonraki sayfa BOŞ geldiyse.
  // Sonraki sayfa BOŞ geldiyse liste bitmiştir: okunan sitenin yazdığından az olsa da TAM; fark ayrıca yazılır (bulut D&R: 260 / 263, 8. sayfa boş).
  // sayı yazan sitede boş sayfa, ancak sitenin gösterdiği son sayfaya kadar okunduysa ya da sayı "en az" ise eksikliği kapatır
  const eksikSayi = yazan > 0 && okunan < yazan && !r.sonucEnAz && !(r.sonBos && sonS > 0 && oS >= sonS);
  const tam = !eksikSayi && !r.ilgisizDurdu && !/BİLİNMİYOR/.test(r.kapsamNeden || "") && (r.k.kapsamBilinmez ? false : ((yazan > 0 && okunan >= yazan && !r.sonucEnAz) || yazan === 0 || r.sonBos || (sonS > 0 && oS >= sonS) || (!r.sonucEnAz && /^tek sayfa|^son sayfa|sitenin yazdığı kadar/.test(r.kapsamNeden || ""))));
  const e = r.eser;
  return r.k.ad + ": " + okunan + " / " + (yazan > 0 ? (r.sonucEnAz ? "en az " : "") + yazan : (yazan === 0 ? "0" : "site sayı yazmıyor")) +
    (r.kanitsizSayisi ? " (ürün bağlantısı olmayan " + r.kanitsizSayisi + " kart dahil)" : "") +
    " · sayfa " + oS + (sonS > 1 ? " / " + sonS : "") + " · " + (r.kapsamNeden || (r.yavas ? "süre sınırında kesildi" : "-")) +
    (r.sonBos && !eksikSayi && yazan > 0 && okunan < yazan ? " · sitenin yazdığıyla fark " + (yazan - okunan) + " (neden BİLİNMİYOR; aynı ilanın tekrarı olabilir)" : "") +
    (r.sayilmayan ? " · ilgili ilanı olmayan son sayfalardaki " + r.sayilmayan + " ürün okunan sayılmadı" : "") +
    (r.kaydirma ? " · kaydırma: " + r.kaydirma : "") +
    (e && e.kart ? " · ESER " + e.okunan + "/" + e.kart + " sayfası okundu → " + e.ilan + " ilan (satıcı)" + (e.okunamayan ? ", okunamayan " + e.okunamayan : "") + (e.butce ? ", SÜRE BÜTÇESİ DOLDU" : "") : "") +
    (r.k.kapsamBilinmez ? " · " + r.k.kapsamBilinmez : "") +
    (r.hazirAtlandi ? " · sayfa hazır olmadığı için ikinci arama denenmedi" : "") +
    (oneri ? " · sayfadaki " + oneri + " kart sonuç sayılmadı (site 0 sonuç yazıyor)" : "") +
    (r.yavas ? " · SÜRE SINIRINDA KESİLDİ" : "") + (r.hazirDegil && !okunan ? " · SAYFA HAZIR OLMADI (yükleme bitmedi) · BİLİNMİYOR" : "") + (tam && !r.yavas && !(e && (e.okunamayan || e.butce)) ? " · TAM" : (okunan ? (r.k.kapsamBilinmez ? " · BİLİNMİYOR" : " · EKSİK OLABİLİR") : ""));
}

function raporMetni(sorgu, sonuclar, sure, cihaz) {
  const sayac = sayacYap(sonuclar);
  const satirlar = [];
  satirlar.push("KİTAP SINAMA · sürüm " + SURUM + " · " + new Date().toLocaleString("tr-TR"));
  satirlar.push("Arama: " + sorgu + (AKTIF_YAZAR ? " · yazar: " + AKTIF_YAZAR : "") + " · toplam " + sure + " sn · " + cihaz + " · süre sınırı " + SITE_SURE_SINIRI + " sn (Nadir 120) · yavaş eşiği " + YAVAS_ESIK + " sn");
  // Sürüm 21.4: "süre sınırında kesildi" ile "yavaş (eşiği aştı ama bitti)" ayrı sayılır; eskiden özet ile site satırları çelişiyordu.
  const esikAsan = sonuclar.filter(r => !r.yavas && r.sure > YAVAS_ESIK).length;
  satirlar.push("Özet: " + sayac.yesil + " çalıştı · " + sayac.sari + " kısmen · " + sayac.kirmizi + " çalışmadı · " + sayac.yok + " sonuç yok · " + sayac.gorunmuyor + " görünmüyor · " + sayac.yavas + " süre sınırında kesildi · " + esikAsan + " yavaş (" + YAVAS_ESIK + " sn üstü, bitti)");
  satirlar.push("Süreler: " + sonuclar.map(r => r.k.ad + " " + r.sure + ekSure(r) + (r.yavas ? " (KESİLDİ)" : "")).join(" · "));
  satirlar.push("KAPSAM (22.33) — okunan ilan / sitenin yazdığı · okunan sayfa / görülen son sayfa · durma nedeni");
  sonuclar.forEach(r => { satirlar.push("  " + kapsamSatiri(r)); if (r.kapsamIz || r.kapsamDeneme || r.kapsamAday) satirlar.push("     teşhis: " + [r.kapsamIz ? "sayfa yazıları: " + r.kapsamIz : "", r.kapsamDeneme || "", r.kapsamAday ? "adaylar: " + r.kapsamAday : ""].filter(Boolean).join(" · "));
    (r.adresDeneme || []).forEach(x => satirlar.push("     adres denemesi (yalnız ölçüm, sonuçlara karışmaz): " + String(x).slice(0, 260)));
    // 22.35 (K1): ek sayfaların dökümü (ilk başlıklar, kaçı ilgili) çalışan sitelerde de yazılır; neden ilgili gelmediği iPad'de görülsün
    const gz = (r.gezi || []).filter(x => /^(sayfa \d|kaydırma|eser )/.test(x));
    if (gz.length) satirlar.push("     sayfalar: " + gz.join(" ; ").slice(0, 900)); }); // 22.34
  baglantiSatirlari(sonuclar, "").forEach(x => satirlar.push(x)); // 22.24
  if (sonuclar.baglantiBasta) satirlar.push("Bağlantı yoklaması (arama başında): " + sonuclar.baglantiBasta.durum + (sonuclar.baglantiBasta.ms != null ? " · " + sonuclar.baglantiBasta.ms + " ms" : "") + (sonuclar.baglantiBasta.ayrinti ? " · " + sonuclar.baglantiBasta.ayrinti : ""));
  const iyiMi = r => renk(r) === "yesil" && r.k.durum !== "aday" && !r.k.teshis;
  const iyi = sonuclar.filter(iyiMi), sorunlu = sonuclar.filter(r => !iyiMi(r));
  satirlar.push("");
  satirlar.push("ÇALIŞANLAR (" + iyi.length + ") — kanıt: ilgili ilan sayısı, stokta olduğu doğrulanan en ucuz ilan, stok kontrol sırası");
  iyi.forEach(r => { satirlar.push(kisaSatir(r)); const u5 = ucuz5Satir(r); if (u5) satirlar.push(u5); });
  satirlar.push("");
  satirlar.push("SORUNLU, KISMEN ÇALIŞAN VE ADAY SİTELER (" + sorunlu.length + ") — ayrıntı");
  for (const r of sorunlu) {
    const ilk = enUcuz(r);
    // "Sonuç yok" ya da "görünmüyor" olan, aday olmayan sitede teşhis dökümü (yapı, HTML) yazılmaz; neden satırı (sayfada görünen) kalır.
    const kisa = (renk(r) === "yok" || renk(r) === "gorunmuyor") && r.k.durum !== "aday" && !r.k.teshis;
    let s = "[" + RENK_ADI[renk(r)] + "] " + r.k.ad + " (" + etiket(r.k) + ") · " + r.sure + " sn" + ekSure(r) +
      (r.yavas ? " (SÜRE SINIRINDA KESİLDİ: " + r.sinir + " sn)" : (r.sure > YAVAS_ESIK ? " (yavaş)" : "")) +
      " · yol: " + (r.yol || "-") +
      " · fiyat " + r.fiyatSayisi + " · ürün " + r.urunSayisi + " · ilgili " + r.ilgililer.length + (AKTIF_YAZAR ? " · arama: " + (r.aramaTuru || "?") + (r.aramaDenenen.length > 1 ? " (yalnız ad da denendi)" : "") + " · yazar kartta " + r.ilgililer.filter(x => x.yazarKartta).length : "");
    if (r.sonucYazisi) s += " · sayfa yazıyor: \"" + r.sonucYazisi + "\"";
    if (r.takimlar.length) s += " · takım " + r.takimlar.length;
    s += baskaOlabilirNotu(r) + dogrulanamadiNotu(r);
    if (r.kanitsizSayisi) s += " · kanıtsız elenen " + r.kanitsizSayisi;
    if (r.suphelSayisi) s += " · fiyatı şüpheli " + r.suphelSayisi;
    if (r.benzerElenen) s += " · \"benzer arama\" modunda elenen " + r.benzerElenen;
    if (r.kitapDisiSayisi) s += " · kitap dışı elenen " + r.kitapDisiSayisi;
    if (r.ilgisizSayisi) s += " · ilgisiz kalem elenen " + r.ilgisizSayisi + " (" + r.ilgisizOzet + ")";
    if (r.ekitapElenen) s += " · e-kitap elenen " + r.ekitapElenen;
    if (r.ekitapSayisi) s += " · e-kitap izi " + r.ekitapSayisi;
    const gizli = r.ilgililer.length - gorunenler(r).length;
    if (gizli) s += " · stokta yok (gizlendi) " + gizli;
    if (ilk) s += " · en ucuz " + tl(ilk.fiyat) + " \"" + ilk.baslik.slice(0, 60) + "\"" + ilanEk(ilk) + (ilk.stok === "var" ? "" : " · STOĞU DOĞRULANMADI");
    if (r.stokKontrol.length) s += " · stok sırası: " + stokSirasi(r);
    if (r.engel) s += " · ENGEL: " + r.engel;
    if (r.hata) s += " · hata: " + String(r.hata).slice(0, 120);
    s += altDurumNotu(r); // 22.24
    if (r.baglanti) s += " · yoklama: " + r.baglanti.durum + (r.baglanti.ms != null ? " " + r.baglanti.ms + " ms" : "") + (r.baglanti.ayrinti ? " (" + r.baglanti.ayrinti + ")" : "");
    if (r.kutu) s += " · kutu: " + r.kutu;
    satirlar.push(s);
    { const u5 = ucuz5Satir(r); if (u5) satirlar.push(u5); }
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
    satir.push("Yol: " + kacis(r.yol || "-") + " · " + r.sure + " sn" + ekSure(r) + (r.yavas ? " · <span class=\"kir\">süre sınırında kesildi (" + r.sinir + " sn)</span>" : (r.sure > YAVAS_ESIK ? " · yavaş" : "")));
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
    if (r.stokKontrol.length) satir.push("Stok sırası (önce ucuzdan pahalıya; \"sıralama sonrası\" kayıtları en sonda): " + kacis(stokSirasi(r)));
    if (r.ilgililer.length - gorunenler(r).length) satir.push("Stokta olmadığı için gizlenen: " + (r.ilgililer.length - gorunenler(r).length));
    if (r.akakce) satir.push("Akakçe ürün sayfası: " + kacis(r.akakce.saticiYazisi || "satıcı sayısı okunamadı") + " · " + (r.akakce.satir || []).length + " satıcı satırı okundu");
    if (r.engel) satir.push("<span class=\"kir\">Robot doğrulaması: " + kacis(r.engel) + "</span>");
    if (r.hata) satir.push("<span class=\"kir\">Hata: " + kacis(String(r.hata).slice(0, 120)) + "</span>");
    if (altDurumNotu(r)) satir.push("<span class=\"kir\">" + kacis(altDurumNotu(r).trim()) + "</span>"); // 22.24
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
// ---------------------------------------------------------------
// 22.12 · YAZARSIZ ARAMADA YAZAR ADAYLARI (Fatih onayı, 14 Kasım). 22.11 iPad raporu: yazar boşken ilk 5 ilan çoğu kitapta yanlış kitaplarla doluydu
// ("Aşka Tutunamayanlar", "Yemin Adak Kefaret", "Cumhuriyet Kitap"; Şeyh Bedreddin'de 5/5 Zeki Büyüktanır).
// İLKE: yazar ASLA tahminle uygulanmaz (ilanlar o yazara göre cezalandırılmaz). Yalnız (a) ilan satırına kartta okunan yazar yazılır, (b) başlığı AYNEN uyan ilanlardan yazar adayları oylanır ve raporlanır,
// (c) başlıkta fazladan sözcüğü olan ve bu sözcükleri hiçbir yazar adayı açıklamayan ilan ("Aşka Tutunamayanlar") [C] olur (+2 puan, elenmez).
// Yazar kaynağı: Nadir Kitap (başlıktan sonra, ★ öncesi), Kitantik (başlıktan sonra, ilk virgül öncesi), ayrı yazar alanı okunan siteler (BKM). Öteki sitelerde yazar okunmaz.
// ---------------------------------------------------------------
// 22.17: Nadir kartında yazar yerinde seri adı duran bilinen örnekler ("Kefaret Solomon Creed": gerçek yazar Simon Toyne). Yalnız etiketlenir, aday silinmez.
const ADAY_SERI = new Set(["solomon creed"]);
const ADAY_DURUMLAR = ["yeni gibi", "yeni", "çok iyi", "iyi", "orta", "zayıf"];
// Yazar yerine yayınevi/dizi/etiket gelen kartlar ("Yapı Kredi", "Can Çocuk", "Anonim Halk Eseri") yazar sayılmaz.
const ADAY_YAYIN = new Set(["kredi", "bankasi", "kultur", "kulturu", "cocuk", "anonim", "eseri", "eserleri", "klasikleri", "klasikler", "dizisi", "serisi", "metinleri", "yayincilik", "yayinciligi", "matbaasi", "basimevi", "kitapligi", "kutuphanesi", "dergisi", "gazetesi", "universitesi", "bakanligi", "baskisi", "yazar", "ceviri", "cevirmen", "hazirlayan", "ilk", "baski", "imzali", "ciltli", "ciltsiz"]);
function yazarAdayiKartta(siteId, baslik, kart, yazarAlani) {
  const temizle = ham => {
    let a = String(ham || "").replace(/\s+/g, " ").trim().replace(/[|:;]+$/, "").trim();
    for (let n = 0; n < 2; n++) { const low = a.toLocaleLowerCase("tr"); const d = ADAY_DURUMLAR.find(x => low.endsWith(" " + x)); if (d) a = a.slice(0, a.length - d.length).trim(); }
    a = a.replace(/\(\s*yazar\s*\)/i, "").trim();
    const tk = a.split(" ").filter(Boolean);
    if (tk.length < 2 || tk.length > 5) return "";
    for (let j = 0; j < tk.length; j++) {
      const t = tk[j];
      if (!/\p{L}/u.test(t) || /\d/.test(t)) return "";
      const n = sade(t);
      if (!/^\p{Lu}/u.test(t) && !(j > 0 && /^(de|da|di|von|van|der|den|du|la|le|el|al|bin|ibn)$/.test(n))) return "";
      if (YAYINEVI_SON.has(n) || ADAY_ATILAN.has(n) || ADAY_YAYIN.has(n) || /^(sepete|ekle|stok|adedi|kargo|ikinci|el|sahaf|kitabevi|yayinlari|yayinevi)$/.test(n)) return "";
    }
    return tk.join(" ");
  };
  if (yazarAlani) return temizle(yazarAlani);
  if (siteId === "bkm") return temizle(yazarMetniBul(baslik, kart).replace(/\b(Mc|Mac) (?=\p{Lu})/gu, "$1")); // "KefaretN. İpek Gökdel99,00 TL…"
  if (siteId !== "nadir" && siteId !== "kitantik" && siteId !== "amazon") return "";
  const duz = x => String(x || "").slice(0, 400).normalize("NFC").replace(/\s+/g, " ").trim();
  const t = duz(kart), b = duz(baslik).toLocaleLowerCase("tr");
  if (b.length < 3) return "";
  const i = t.toLocaleLowerCase("tr").indexOf(b);
  if (i < 0 || i > 8) return "";
  let rest = t.slice(i + b.length);
  const f = rest.search(siteId === "nadir" ? /[★☆]|\d[\d.]*(?:,\d+)?\s*(?:TL|₺)/ : siteId === "amazon" ? /\||\d[\d.]*(?:,\d+)?\s*(?:TL|₺)/ : /,|\d[\d.]*(?:,\d+)?\s*(?:TL|₺)/);
  if (f >= 0) rest = rest.slice(0, f);
  return temizle(rest);
}
function yakinSozcuk(x, y) { return x === y || (x.length >= 5 && y.length >= 5 && birFark2(x, y)); }
function ayniYazar(a, b) { // a, b: yazarAdlari() dizileri
  const A = a.filter(x => x.length >= 2), B = b.filter(x => x.length >= 2);
  if (!A.length || !B.length) return false;
  const ortak = A.filter(x => B.some(y => yakinSozcuk(x, y))).length;
  if (ortak < Math.min(2, A.length, B.length)) return false;
  if (ortak >= 2) return true;
  if (A.every(x => B.some(y => yakinSozcuk(x, y))) && B.every(y => A.some(x => yakinSozcuk(x, y)))) return true; // "H. R. Lenormand" iki kez ayrı küme olmasın
  // yalnız soyad ortak: baş harfli biçim ("O. Pamuk") öteki tarafın bir adının baş harfiyle uyuşmalı
  const bas = (X, Y) => X.filter(x => x.length === 1).some(h => Y.some(y => y.length > 1 && y[0] === h));
  return bas(a, b) || bas(b, a);
}
// Oylama: yalnız başlığı aynen uyan (tamBaslik) ilanlar oy verir. Dönüş: [{ ad, oy, siteler: [...], tokenlar: [...] }] (çok oydan aza).
function yazarOyla(sonuclar) {
  const kumeler = [];
  for (const r of (sonuclar || [])) {
    if (!r) continue;
    for (const x of (r.ilgililer || [])) {
      if (!x) continue;
      const ad = yazarAdayiKartta(r.k && r.k.id, x.baslik, x.kart, x.yazarAlani);
      if (ad) x.yazarAday = ad;
      if (!ad || !x.tamBaslik) continue;
      const tk = yazarAdlari(ad);
      let km = kumeler.find(c => ayniYazar(c.tk, tk));
      if (!km) { km = { tk, formlar: new Map(), oy: 0, siteler: new Set(), tokenlar: new Set() }; kumeler.push(km); }
      km.oy++; km.siteler.add(r.k && r.k.id); tk.forEach(w => km.tokenlar.add(w));
      const f = km.formlar.get(sade(ad)) || { sayi: 0, ornek: ad };
      f.sayi++; if (ad !== ad.toLocaleUpperCase("tr") && f.ornek === f.ornek.toLocaleUpperCase("tr")) f.ornek = ad;
      km.formlar.set(sade(ad), f);
    }
  }
  return kumeler.map(c => { const fs = [...c.formlar.values()].sort((p, q) => q.sayi - p.sayi || q.ornek.length - p.ornek.length); return { ad: fs[0].ornek, oy: c.oy, siteler: [...c.siteler], tokenlar: [...c.tokenlar], tk: c.tk }; }).sort((p, q) => q.oy - p.oy);
}
// 22.18 · EK YAZAR OYU (Fatih onayı, 15-16 Kasım): Hepsiburada/Kitapseç/Trendyol/n11/Akakçe başlığındaki "Başlık - Yazar" deseni yazar adayı sayılır.
// İLKE: bu oylar AYRI bir alana (sonuclar.yazarOyuEk) yazılır; yazarOyla(), yazarsizDegerlendir(), derece, puan ve sıralama bu alanı HİÇ görmez.
// Yalnız rapor metninde "EK YAZAR ADAYLARI (yalnız bilgi)" satırı çıkar. Sebep: Nadir/Kitantik/Amazon/BKM erişilemese de adaylar kaybolmasın.
// Oy verme koşulu: başlığın yazarsız kısmı aranan adla AYNEN uyar (tamBaslik); yazar parçası yayınevi/dizi/baskı sözcüğü ya da sayı taşımaz.
let EK_SORGU = "";
const EK_OY_SITELERI = new Set(["hepsiburada", "kitapsec", "trendyol", "n11", "akakce"]);
function yazarEkAdayi(baslik, sorgu) {
  const duz = String(baslik || "").normalize("NFC").replace(/[–—−]/g, "-").replace(/\s+/g, " ").trim();
  if (duz.length < 5) return "";
  const gecerli = ad => { // ad: yazarAdayiKartta ile temizlenmiş aday; ek olarak baskı notu / yayın sözcüğü ve yayınevi adı sözcüğü reddedilir
    if (!ad) return "";
    for (const t of yazarAdlari(ad)) if (BASKI_NOTU.has(t) || YAYIN_SOZCUKLERI.has(t) || YAYINEVI_ADLARI.has(t) || ADAY_YAYIN.has(t)) return "";
    return ad;
  };
  const parcalar = duz.split(" - ").map(p => p.trim()).filter(Boolean);
  if (parcalar.length >= 2) { // "Yapı Kredi Yayınları Kefaret - Ian McEwan", "Kefaret - Gaetan Soucy - Can Yayınları"
    if (!uyumBul(parcalar[0], sorgu, false).tamBaslik) return "";
    for (let i = 1; i < parcalar.length; i++) {
      const ad = gecerli(yazarAdayiKartta("ek", duz, "", parcalar[i]));
      if (ad) return ad;
    }
    return "";
  }
  // Ayraçsız (Kitapseç): "Kefaret Ian McEwan Yapı Kredi Yayınları" → başlık BAŞTA ve aranan adla tıpatıp aynı; ardından yazar; yayınevi eki varsa önündeki 2 sözcük atılır.
  const tk = duz.split(" ");
  const q = kelimeler(sorgu);
  if (!q.length || tk.length <= q.length) return "";
  const bas = kelimeler(tk.slice(0, q.length).join(" "));
  if (bas.length !== q.length || bas.some((w, i) => w !== q[i])) return "";
  let rest = tk.slice(q.length);
  const yi = rest.findIndex(w => YAYINEVI_SON.has(sade(w)));
  if (yi >= 0) { // yayınevi eki: önündeki BİLİNEN yayınevi sözcükleri (en çok 2) atılır; bilinen yoksa 2 sözcük atılır (yanlış aday yerine adayı kaçırmak yeğdir)
    const bilinen = w => YAYIN_SOZCUKLERI.has(sade(w)) || YAYINEVI_ADLARI.has(sade(w));
    let k = 0; while (k < 2 && yi - 1 - k >= 0 && bilinen(rest[yi - 1 - k])) k++;
    const at = k > 0 ? k : 2;
    if (yi < at) return "";
    rest = rest.slice(0, yi - at);
  }
  return gecerli(yazarAdayiKartta("ek", duz, "", rest.join(" ")));
}
function yazarOyuEkHesapla(sonuclar, sorgu, anaListe) {
  if (AKTIF_YAZAR) return [];
  const kumeler = [];
  for (const r of (sonuclar || [])) {
    if (!r || !r.k || !EK_OY_SITELERI.has(r.k.id)) continue;
    for (const x of (r.ilgililer || [])) {
      if (!x) continue;
      const ad = yazarEkAdayi(x.baslik, sorgu);
      if (!ad) continue;
      const tk = yazarAdlari(ad);
      let km = kumeler.find(c => ayniYazar(c.tk, tk));
      if (!km) { km = { tk, ad, oy: 0, siteler: new Set() }; kumeler.push(km); }
      km.oy++; km.siteler.add(r.k.id);
      const bu = x => (x === x.toLocaleUpperCase("tr") ? 0 : 1000) + (x.match(/\p{Lu}/gu) || []).length; // 22.19: BÜYÜK HARFLİ olmayan ve en çok büyük harfi olan yazım ("Ian McEwan" > "Ian Mcewan")
      if (sade(ad) === sade(km.ad) && bu(ad) > bu(km.ad)) km.ad = ad; // yalnız AYNI adın farklı yazımları arasında (uzun/kısa ad karışmasın)
    }
  }
  // 22.19: ana listede karşılığı varsa onun yazımı kullanılır
  return kumeler.map(c => { const ana = (anaListe || []).find(a => ayniYazar(a.tk, c.tk)); return { ad: ana ? ana.ad : c.ad, tk: c.tk, oy: c.oy, siteler: [...c.siteler], ana: ana ? ana.ad + " " + ana.oy : "" }; }).sort((p, q) => q.oy - p.oy);
}
// Yaygın yayınevi adı sözcükleri: başlığa yayınevi karışmışsa ("… Oğuz Atay İLETİŞİM YA") fazla sözcük sayılmaz (yalnız ceza vermemek yönünde).
const YAYINEVI_ADLARI = new Set(["iletisim", "can", "everest", "dogan", "remzi", "inkilap", "metis", "timas", "oglak", "ithaki", "jaguar", "epsilon", "destek", "sia", "cem", "ozgur", "atlas",
  "varlik", "ayrinti", "hayy", "notos", "nobel", "pegasus", "april", "artemis", "yky", "ya", "yay", "yayin", "yayinl", "yayinla", "yayinlar", "ketebe", "dergah", "tudem", "kabalci"]);
function yazarsizDegerlendir(sonuclar) {
  if (AKTIF_YAZAR) return;
  const km = yazarOyla(sonuclar);
  try { sonuclar.yazarOyu = km; } catch (e) { }
  try { sonuclar.yazarOyuEk = yazarOyuEkHesapla(sonuclar, sonuclar.sorgu || EK_SORGU, km); } catch (e) { } // 22.18: yalnız rapor bilgisi; aşağıdaki karar kodu bunu kullanmaz
  if (!km.length || !(km[0].oy >= 3 || (km[0].oy >= 2 && km[0].siteler.length >= 2))) return;
  // 22.12 (bağımsız denetim sonrası): [C] YALNIZ iki durumda verilir (gerçek baskıyı haksız cezalandırmamak için):
  //  (a) aranan addan ÖNCE gelen ve hiçbir yazar adayı/yayınevi adıyla (yazım toleransıyla) açıklanmayan sözcük var ("Aşka Tutunamayanlar", "Yemin Adak Kefaret", "Türk Hukukunda Suç ve Ceza");
  //  (b) ilanın kendi kart yazarı okunmuş ve ≥2 oylu yazar adaylarının hiçbiriyle uyuşmuyor.
  // Alt başlık, baskı notu, seri adı, çevirmen (aranan addan SONRA gelen fazla sözcükler) ceza almaz. Yazar adayı kümesi 1 oylu olsa da sözcükleri "açıklanmış" sayılır.
  const aciklanan = new Set();
  km.forEach(c => c.tokenlar.forEach(w => aciklanan.add(w)));
  const aciklamis = w => w.length <= 2 || YAYINEVI_ADLARI.has(w) || aciklanan.has(w) || (w.length >= 4 && [...aciklanan].some(t => t.length >= 4 && birFark(w, t))) || (w.length >= 6 && [...aciklanan].some(t => t.length >= 6 && birFark2(w, t)));
  const guclu = km.filter(c => c.oy >= 2);
  for (const r of sonuclar) {
    if (!r) continue;
    for (const x of (r.ilgililer || []).concat(r.takimlar || [])) {
      if (!x || x.derece !== "-" || x.tamBaslik) continue;
      const once = (x.fazlaOnce || []).filter(w => !aciklamis(w));
      let c = once.length > 0;
      if (!c && x.yazarAday && guclu.length) { const tk = yazarAdlari(x.yazarAday); c = !guclu.some(g => ayniYazar(g.tk, tk)) && !tk.every(w => aciklanan.has(w)); }
      if (c && typeof x.puan === "number") { x.derece = "C"; x.puan += 2; x.yazarsizC = true; }
    }
    if (r.ilgililer) r.ilgililer.sort((a, b) => a.puan - b.puan || a.fiyat - b.fiyat);
  }
}

// 22.35 (K11) · ISBN KANITI: aynı ISBN'i taşıyan ilanlardan biri girilen yazarla kanıtlıysa (kartta ya da adreste), yazarı okunamayan öteki ilan da
// o kitaptır (iPad 22.34 Kefaret: Pazarama 312,17 TL adresinde 9789750843587; Amazon McEwan ilanı dp/9750843584 = aynı ISBN). Yalnız yazar girilmişse.
// Kanıt yalnız ADRESTEKİ ya da kart yazısındaki ISBN'dir (13 hane 978/979; Amazon /dp/ 10 hane 13'e çevrilir); tahmin yok.
function isbnler(x) {
  const t = String((x && x.href) || "") + " " + String((x && x.kart) || "");
  const out = new Set((t.match(/97[89]\d{10}/g) || []));
  const d = String((x && x.href) || "").match(/\/dp\/(\d{9}[\dX])(?![\dX])/i);
  if (d) { const b = "978" + d[1].slice(0, 9); let t2 = 0; for (let i = 0; i < 12; i++) t2 += Number(b[i]) * (i % 2 ? 3 : 1); out.add(b + ((10 - t2 % 10) % 10)); }
  return [...out];
}
function isbnKaniti(sonuclar) {
  if (!AKTIF_YAZAR) return;
  const kanitli = new Set();
  for (const r of sonuclar || []) for (const x of ((r && r.ilgililer) || [])) if (x.yazarKartta) isbnler(x).forEach(i => kanitli.add(i));
  if (!kanitli.size) return;
  for (const r of sonuclar || []) {
    if (!r) continue;
    let degisti = false;
    for (const x of (r.ilgililer || [])) {
      if (x.yazarKartta) continue;
      const i = isbnler(x).find(v => kanitli.has(v));
      if (!i) continue;
      x.yazarKartta = true; x.yazarKanit = "ISBN " + i + " (yazarı kanıtlı ilanla aynı)";
      if (x.derece === "B") { x.derece = "A"; x.puan -= 1; }
      degisti = true;
    }
    const geri = (r.baskaOlabilir || []).filter(x => isbnler(x).some(v => kanitli.has(v)));
    if (geri.length) {
      geri.forEach(x => { x.yazarKanit = "ISBN (yazarı kanıtlı ilanla aynı); önceki şüphe: " + x.baskaNeden; x.yazarKartta = true; });
      r.baskaOlabilir = r.baskaOlabilir.filter(x => geri.indexOf(x) < 0);
      r.ilgililer = r.ilgililer.concat(geri);
      degisti = true;
    }
    if (degisti) r.ilgililer.sort((a, b) => a.puan - b.puan || a.fiyat - b.fiyat);
  }
}

// 22.25 · Arama başında internet yoksa: siteler açılmaz; her site ÇALIŞMADI + BAĞLANTI olarak döner. Tek bir sitenin adresi kısa bir teşhis
// için denenir (iPad'de sayfa açılamayınca ne olduğu bilinmiyordu: reddediyor mu, askıda mı kalıyor?).
async function cevrimdisiTeshis(adres) {
  let wv = null, sonuc = "", metin = "";
  const bas = Date.now();
  try {
    wv = T.yeni();
    sonuc = await Promise.race([
      Promise.resolve().then(() => wv.ac(adres)).then(() => "sayfa açılışı hatasız bitti (reddetmedi)", e => "sayfa açılışı reddetti: " + String(e).slice(0, 140)),
      bekle(10000).then(() => "sayfa açılışı 10 sn içinde bitmedi (askıda kaldı)")]);
    const t = await Promise.race([
      Promise.resolve().then(() => wv.calistir("(function(){try{return (document.title||'')+' | '+location.href+' | '+String((document.body&&document.body.innerText)||'').replace(/\\s+/g,' ').slice(0,120);}catch(e){return 'okuma hatası: '+e;}})()")),
      bekle(3000).then(() => "(sayfa okuma 3 sn içinde bitmedi)")]);
    metin = String(t).slice(0, 220);
  } catch (e) { metin = metin || ("okuma hatası: " + String(e).slice(0, 100)); }
  try { if (wv) wv.kapat(); } catch (e) { }
  return (sonuc || "teşhis yapılamadı") + " · " + Math.round((Date.now() - bas)) + " ms · sayfada: " + (metin || "-");
}
async function cevrimdisiSonuc(sorgu, siteler, secenek, y1, y2) {
  const yaz = y => ({ durum: String(y.durum || "bilinmiyor"), ms: (typeof y.ms === "number" ? y.ms : null), ayrinti: String(y.ayrinti || "").slice(0, 160) });
  let teshis = "";
  try { const k0 = siteler[0]; if (k0 && k0.url && k0.url[0]) teshis = await cevrimdisiTeshis(adresYap(k0.url[0], sorgu)); } catch (e) { teshis = "teşhis hatası: " + String(e).slice(0, 80); }
  const sonuclar = siteler.map(k => {
    const r = yeniSonuc(k);
    r.baglanti = yaz(y2);
    r.baglantiSorunu = "arama başında internet yoktu (iki yoklama 3 sn arayla, iki adres de açılmadı); site açılmadı";
    if (secenek.bildir) { try { secenek.bildir(r); } catch (e) { } }
    return r;
  });
  try { sonuclar.sorgu = sorgu; sonuclar.cevrimdisi = { teshis, ikinci: yaz(y2) }; sonuclar.baglantiBasta = yaz(y1); } catch (e) { }
  return sonuclar;
}

async function siteleriSina(sorgu, secenek) {
  secenek = secenek || {};
  AKTIF_YAZAR = String(secenek.yazar || "").trim();
  const siteler = secenek.siteler || KURAL.siteler || [];
  const ayniAnda = secenek.ayniAnda || AYAR.ayniAnda || 4;
  EK_SORGU = sorgu;
  yoklamaSon = null; // 22.24: önceki aramanın yoklaması bu aramaya taşınmaz
  // 22.25: yoklama sitelerden ÖNCE yapılır (iPad 22.24 testi: Wi-Fi kapalıyken arama 1 dakikadan uzun sürdü, ekranda bir şey çıkmadı).
  // İki adres de açılmazsa 3 sn sonra bir kez daha yoklanır; yine "yok" ise siteler HİÇ açılmaz, hepsi BAĞLANTI olarak döner
  // (arayüzde "İnternet bağlantısı yok" + "Tekrar dene"). Yalnız "yok" (iki adres de hata) bu yola girer; "portal" ve "bilinmiyor" girmez.
  // Neden kabul edilebilir: yanlış BAĞLANTI bile "bilmiyoruz" demektir, asla "kitap yok" demez; iki bağımsız adresin iki kez birden açılmaması çok güçlü kanıt.
  const ilkY = await baglantiYokla();
  if (ilkY && ilkY.durum === "yok") {
    await bekle(3000);
    yoklamaSon = null;
    const ikinciY = await baglantiYokla();
    if (ikinciY && ikinciY.durum === "yok") return cevrimdisiSonuc(sorgu, siteler, secenek, ilkY, ikinciY);
  }
  const ilkYoklama = Promise.resolve(ilkY);
  // 22.34 (Ana 43) · AĞIR SİTE ÖNCE: kurallar.json ayarlar.onceSiteler'deki siteler (çok sayfalı ya da yavaş) kuyruğa önce girer; en yavaş site
  // en sona kalıp toplam süreyi uzatmasın (iPad 22.33: Dost Kitabevi 34 sn, listenin sonundaydı). Rapordaki sıra değişmez; istek sayısı değişmez.
  const once = AYAR.onceSiteler || [];
  const yurutme = siteler.map((k, i) => ({ k, i, o: once.indexOf(k.id) })).sort((a, b) => (a.o < 0 ? 999 : a.o) - (b.o < 0 ? 999 : b.o) || a.i - b.i);
  const yurutSonuc = await sirayla(yurutme, ayniAnda, async y => {
    const r = await siteSinirli(y.k, sorgu);
    if (secenek.bildir) { try { secenek.bildir(r); } catch (e) { } }
    return r;
  });
  const sonuclar = new Array(siteler.length);
  yurutme.forEach((y, j) => { sonuclar[y.i] = yurutSonuc[j]; });
  try { sonuclar.sorgu = sorgu; } catch (e) { }
  try { const y = await ilkYoklama; if (y) sonuclar.baglantiBasta = { durum: String(y.durum || "bilinmiyor"), ms: (typeof y.ms === "number" ? y.ms : null), ayrinti: String(y.ayrinti || "").slice(0, 160) }; } catch (e) { }
  try { isbnKaniti(sonuclar); } catch (e) { } // 22.35 (K11)
  try { yazarsizDegerlendir(sonuclar); } catch (e) { }
  try { fiyatDenetle(sonuclar); } catch (e) { }
  try { await stokTamamla(sonuclar); } catch (e) { } // 22.32: sıralama sonrası en üstteki ilan sınanmadıysa
  return sonuclar;
}

return { SURUM, siteleriSina, kompaktRapor, raporMetni, raporSayfasi, renk, RENK_ADI, sayacYap, altDurum, baglantiOzeti, yapiSuphesi,
  _sinama: { kisaSatir, kapsamSatiri, anaYolGerekli, yazarsizDegerlendir, yazarOyla, yazarEkAdayi, yazarOyuEkHesapla,  yazarAdayiKartta, yazarMetniBul, baskaYazarKarari, sesUrunuMu, sonucuIsle, uyumBul, ilgisizNeden, ilgisizAyrinti, fiyatDenetle, stokTamamla, gorunenler, urunSayfasiniOku, dogrulanamadiNotu, yazarAyarla: y => { AKTIF_YAZAR = String(y || "").trim(); } } };
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
  bekle: ms => new Promise(r => Timer.schedule(ms, false, r)),
  // 22.24 · bağlantı yoklaması (sözleşme: motorun başındaki açıklama). İki bağımsız adres aynı anda, her biri en çok 8 sn.
  // Adresin sonuna zaman eklenir: önbellekteki eski yanıt "internet var" sanılmasın.
  async baglanti() {
    const bas = Date.now();
    const dene = async (adres, uygun) => {
      try {
        const q = new Request(adres + "?t=" + Date.now());
        q.timeoutInterval = 8;
        const metin = await q.loadString();
        const kod = q.response ? q.response.statusCode : 0;
        return uygun(kod, String(metin || "")) ? { s: "var", n: "kod " + kod } : { s: "portal", n: "kod " + kod + ", beklenmeyen yanıt" };
      } catch (e) { return { s: "yok", n: String(e).slice(0, 70) }; }
    };
    // 22.25: biri "var" derse öteki beklenmez (internet varken aramaya gecikme eklenmesin); "yok" için ikisinin de bitmesi beklenir.
    return await new Promise(coz => {
      const y = { g: null, a: null };
      const bitir = () => {
        const g = y.g || { s: "beklenmedi", n: "öteki adres yeterli" }, a = y.a || { s: "beklenmedi", n: "öteki adres yeterli" };
        const durum = (g.s === "var" || a.s === "var") ? "var" : (g.s === "portal" || a.s === "portal") ? "portal" : "yok";
        coz({ durum, ms: Date.now() - bas, ayrinti: "Google: " + g.s + " (" + g.n + ") · Apple: " + a.s + " (" + a.n + ")" });
      };
      const geldi = (ad, x) => { y[ad] = x; if (x.s === "var" || (y.g && y.a)) bitir(); };
      dene("https://www.google.com/generate_204", k => k === 204).then(x => geldi("g", x));
      dene("https://captive.apple.com/hotspot-detect.html", (k, t) => k === 200 && /Success/i.test(t)).then(x => geldi("a", x));
    });
  }
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
  giris.addTextField("Yazar (isteğe bağlı, boş bırakılabilir)", "");
  giris.addAction("Başlat");
  giris.addAction("Liste modu (panodaki listeyi çalıştır)");
  giris.addAction("Nadir ve Kitantik hariç başlat"); // 22.33: o iki siteye istek göndermeden sınama (Nadir engeli ve onay kuralı)
  giris.addCancelAction("Vazgeç");
  const secim = await giris.presentAlert();
  if (secim === -1) return;
  if (secim === 1) { await listeCalis(motor, kural, kaynak); return; }
  const sorgu = giris.textFieldValue(0).trim() || VARSAYILAN_KITAP;
  const yazar = giris.textFieldValue(1).trim();

  const bas = Date.now();
  const haric = secim === 2 ? ["nadir", "kitantik"] : [];
  const sonuclar = await motor.siteleriSina(sorgu, haric.length ? { yazar, siteler: kural.siteler.filter(k => haric.indexOf(k.id) < 0) } : { yazar });
  const sure = Math.round((Date.now() - bas) / 1000);

  let cihaz = "";
  try { cihaz = Device.model() + " " + Device.systemName() + " " + Device.systemVersion(); } catch (e) { }
  if (haric.length) cihaz += " · HARİÇ: Nadir, Kitantik";
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
function raporuKaydet(metin, dosyaAdi) {
  const ad = dosyaAdi || "kitap-sinama-raporu.txt";
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

// Sürüm 22.3 · LİSTE MODU. Panodaki listeyi okur: her satır "Kitap adı | Yazar" (yazar boş olabilir; baştaki "1." numarası atılır; # ile başlayan satır atlanır).
// Kitaplar sırayla çalışır; her kitaptan sonra rapor dosyası güncellenir (yarıda kesilirse o ana kadarki sonuç kalır). Bitince tüm rapor panoya kopyalanır.
async function listeCalis(motor, kural, kaynak) {
  let pano = "";
  try { pano = Pasteboard.paste() || ""; } catch (e) { }
  const isler = String(pano).split(/\r?\n/).map(s => s.trim().replace(/^\d+[.)]\s+/, "")).filter(s => s && s[0] !== "#")
    .map(s => { const p = s.split("|"); return { ad: (p[0] || "").trim(), yazar: (p[1] || "").trim() }; }).filter(x => x.ad);
  if (!isler.length) {
    const u = new Alert(); u.title = "Panoda liste yok";
    u.message = "Önce listeyi kopyala (her satır: Kitap adı | Yazar), sonra yeniden çalıştır.";
    u.addAction("Tamam"); await u.presentAlert(); return;
  }
  const onay = new Alert();
  onay.title = isler.length + " kitap bulundu";
  onay.message = "İlk üçü: " + isler.slice(0, 3).map(x => x.ad).join(", ") + ". Tahmini süre " + Math.ceil(isler.length * 1.2) + " dakika. Scriptable açık kalsın, ekran kapanmasın.";
  onay.addAction("Başlat"); onay.addCancelAction("Vazgeç");
  if (await onay.presentAlert() === -1) return;

  let cihaz = "";
  try { cihaz = Device.model() + " " + Device.systemName() + " " + Device.systemVersion(); } catch (e) { }
  cihaz += " · kurallar: " + kaynak + " (sürüm " + (kural.surum || "?") + ")";
  if (typeof YUKLEYICI_KAYNAK !== "undefined") cihaz += " · betik: " + YUKLEYICI_KAYNAK;
  const bas = Date.now();
  const bloklar = [];
  let yer = "";
  for (let i = 0; i < isler.length; i++) {
    const k = isler[i];
    const b0 = Date.now();
    let blok;
    try {
      const sonuclar = await motor.siteleriSina(k.ad, { yazar: k.yazar });
      blok = (i + 1) + "/" + isler.length + " " + motor.kompaktRapor(k.ad, k.yazar, sonuclar, Math.round((Date.now() - b0) / 1000));
    } catch (e) {
      blok = (i + 1) + "/" + isler.length + " ▶ " + k.ad + (k.yazar ? " | " + k.yazar : "") + " · HATA: " + e;
    }
    bloklar.push(blok);
    const baslik = "KİTAP LİSTE SINAMASI · sürüm " + motor.SURUM + " · " + new Date().toLocaleString("tr-TR") + " · " + cihaz + "\n" +
      "Tamamlanan: " + bloklar.length + "/" + isler.length + " · geçen " + Math.round((Date.now() - bas) / 1000) + " sn\n";
    yer = raporuKaydet(baslik + "\n" + bloklar.join("\n\n") + "\n", "kitap-liste-raporu.txt") || yer;
    if (i < isler.length - 1) await TARAYICI.bekle(4000);
  }
  const tam = "KİTAP LİSTE SINAMASI · sürüm " + motor.SURUM + " · " + new Date().toLocaleString("tr-TR") + " · " + cihaz + "\n" +
    "Bitti sayılmaz; yalnız bu liste çalıştı: " + isler.length + " kitap · toplam " + Math.round((Date.now() - bas) / 1000) + " sn\n\n" + bloklar.join("\n\n") + "\n";
  try { Pasteboard.copy(tam); } catch (e) { }
  const sayfa = new WebView();
  const kacisla = t => t.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  await sayfa.loadHTML("<meta name='viewport' content='width=device-width,initial-scale=1'><body style='font:15px -apple-system;background:#111;color:#eee;padding:16px'><p><b>Liste sınaması çalıştı</b> · rapor panoya kopyalandı" + (yer ? " · dosya: " + kacisla(yer) : "") + "</p><pre style='white-space:pre-wrap'>" + kacisla(tam) + "</pre></body>");
  await sayfa.present(true);
}

await calis();
Script.complete();
