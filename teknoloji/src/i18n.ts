import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            // Header
            home: "ANA SAYFA",
            about_us: "HAKKIMIZDA",
            contact: "İLETİŞİM",
            cekidemiri: "ÇEKİ DEMİRİ",
            markalar: "MARKALAR",
            language_selection: "Dil Seçimi",
            turkish: "Türkçe",
            english: "İngilizce",
            technology_engineering: "Mühendislik",
            work_hours: "Pazartesi - Cumartesi, 8:30 - 18:00",
            phone: "Telefon",
            email: "E-posta",
            success_message: "Mesajınız Başarıyla Gönderildi.",
            error_message: "Hata, Lütfen yeniden deneyiniz.",
            sending: "Gönderiliyor...",

            // Anasayfa Mühendislik
            engineering_first_title: "HER MARKA VE MODEL ARACINIZA",
            engineering_first_title2: "ÖZEL ÇEKİ DEMİRİ MONTAJI",
            engineering_first_check1: "PROFESYONEL MONTAJ",
            engineering_first_check2: "E-HOMOLOGASYON BELGELİ ÜRÜNLER",
            engineering_first_check3: "UYGUN FİYAT & KALİTELİ İŞÇİLİK",
            engineering_first_button1: "MARKALAR",
            engineering_first_button2: "ÇEKİ DEMİRLERİ",
            //
            select_your_car: "Lütfen Aracınızı Seçin",
            select_brand: "Araç Markası",
            select_model: "Araç Modeli",
            see_model: "Modeli Görün",
            //
            engineering_about_title: "ARAÇLARINIZI GÜVENLE TESLİM EDİN",
            engineering_about_title2: "Otobüs ve Otomotiv",
            engineering_about_title2_1: "İhtiyaçlarınız",
            engineering_about_title2_2: " İçin Yenilikçi Çözümler",
            //
            engineering_cards1_title: "Uzman Mühendislik Hizmetleri",
            engineering_cards1_description: "Otobüs iç tasarımı projelerinde konfor ve işlevselliği artırmaya odaklanıyoruz.",
            engineering_cards2_title: "Güvenilir Çeki Demiri Montajı",
            engineering_cards2_description: "Çeki demiri montajlarımız dayanıklılık ve kullanım kolaylığı için tasarlanmıştır.",
            engineering_cards3_title: "Kapsamlı Motor Yenileme Projeleri",
            engineering_cards3_description: "Uzman motor yenileme hizmetlerimizle aracınızı yenileyin.",
            engineering_cards_button: "Daha Fazla Bilgi Alın",
            //
            engineering_third_title: "NEDEN BİZİ SEÇMELİSİNİZ?",
            engineering_third_title2: "Mühendislikte köklü",
            engineering_third_title2_1: "Tecrübe",
            engineering_third_title2_2: "ve",
            engineering_third_title2_3: "Güven",
            engineering_third_title3: "Teknoloji Mühendislik olarak, en son teknolojiler ve uzman ekibimizle sektörde fark yaratıyoruz. Kaliteli, güvenilir ve yenilikçi mühendislik çözümlerimizle ihtiyacınıza en uygun hizmeti sunuyoruz.",
            //
            engineering_feature: "Endüstriyel Çözümlerde Uzmanlık",
            engineering_feature_text: "Geniş tecrübemizle, sanayi ve teknoloji alanında özelleştirilmiş mühendislik hizmetleri sunuyoruz.",
            engineering_feature2: "Yenilikçi ve Modern Tasarım",
            engineering_feature2_text: "Projelerinize özel, en son mühendislik teknolojilerini entegre ederek verimli ve ileri düzey çözümler geliştiriyoruz.",
            engineering_feature3: "Hassas Üretim ve Planlama",
            engineering_feature3_text: "Üretim süreçlerinde yüksek hassasiyet ve stratejik planlama ile verimliliği artıran sürdürülebilir çözümler sunuyoruz.",
            //
            engineering_projects_title: "PROJELERİMİZ",
            engineering_projects_title2: "Popüler Hizmetlerimiz",
            engineering_projects_title2_1: "Keşfedin",
            engineering_project_card1_category: "Araç Proje",
            engineering_project_card1_title: "Minibüs Dönüşüm",
            engineering_project_card2_category: "Montaj",
            engineering_project_card2_title: "Çeki Demiri",
            engineering_project_card3_category: "Periyodik",
            engineering_project_card3_title: "Kontrol Hizmetleri",
            engineering_project_card4_category: "Üst Yapı",
            engineering_project_card4_title: "Projelendirme",


            // Hakkımızda
            about_title: "Hakkımızda",
            about_subtitle: "Teknoloji Mühendislik, otomotiv sektöründe yenilikçi çözümler sunan bir liderdir.",
            history_title: "Tarihçemiz",
            history_text: "07/01/2006 tarihinde açılan TEKNOLOJİ RENAULT Özel Servis & Yedek Parça,servis yetkilisi Levent Yanar tarafından kurulmuştur. 01/01/1996 ile 07/01/2006 tarihleri arasında ilimizin bölge bayii olan Erbaylar Renault Plaza’da cotech (formen) hizmeti vermiştir. 2006 yılından itibaren Teknoloji Renault Özel Servis & Yedek Parça adı altında hizmet vermeye devam etmekteyiz.",
            expertise_title: "Uzmanlık ve Eğitimler",
            expertise_text1: "Mert Yanar, 17.08.2022 tarihinde Pamukkale Üniversitesinden tez çalışmalarını elektrikli araçlar üzerine yaparak MAKİNE MÜHENDİSLİĞİ bölümünden mezun olup, ayrıca araç proje hizmetleri (kasa tadilat, motor değişikliği, çeki demiri vb.) vermektedir.",
            expertise_text2: "15/10/1998 tarihinde Renault eğitim merkezinde düzenlenen mekanik kursunu başarıyla tamamlayarak diploma almaya hak kazanmıştır.",
            facility_title: "Tesisimiz",
            facility_text: "Teknoloji Renault Özel servis olarak 1550 m²’lik kapalı alan içinde 12 adet araç kaldırma lifti ve 29 personel ile, araç mekanik onarım, elektrik ve yedek parça üzerine çalışmaktadır. Ayrıca şirket bünyesinde 314 m²’lik kapalı alan üzerine kurulmuş Yetkili Egzoz Emisyon Ölçüm istasyonu da bulunmaktadır.Teknoloji Renault Özel servis olarak 1550 m²’lik kapalı alan içinde 12 adet araç kaldırma lifti ve 29 personel ile, araç mekanik onarım, elektrik ve yedek parça üzerine çalışmaktadır. Ayrıca şirket bünyesinde 314 m²’lik kapalı alan üzerine kurulmuş Yetkili Egzoz Emisyon Ölçüm istasyonu da bulunmaktadır.",
            vision_title: "Vizyonumuz",
            vision_text: "Teknoloji Mühendislik olarak, mühendislik çözümleri ve teknik hizmetler alanında öncü bir firma olmayı hedefliyoruz. Çeki demiri montajı, araç projeleri ve periyodik kontrol hizmetlerinde en yüksek kalite standartlarını sunarak, sektörde güvenilirlik ve uzmanlık denildiğinde akla gelen ilk isim olmayı amaçlıyoruz. Gelişen teknolojileri yakından takip ederek, yenilikçi ve sürdürülebilir çözümler üretmek, müşteri memnuniyetini en üst seviyeye çıkarmak ve hizmetlerimizi sürekli iyileştirmek en önemli önceliklerimizdir. Gelecekte, mühendislik alanında daha geniş bir hizmet ağı oluşturmak, sektörde fark yaratan projelere imza atmak ve ulusal düzeyde tanınan bir marka olmak için devam ediyoruz.",
            mission_title: "Misyonumuz",
            mission_text: "Teknoloji Mühendislik olarak, mühendislik çözümlerinde güvenlik, kalite ve yenilikçiliği ön planda tutarak müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz. Çeki demiri montajı, araç projeleri ve periyodik kontrol hizmetleri alanlarında, yasal mevzuata uygun, güvenilir ve profesyonel çözümler sunarak iş ortaklarımızın ve müşterilerimizin ihtiyaçlarını en yüksek standartlarda karşılıyoruz. Her projede teknik bilgi, mühendislik disiplini ve titiz çalışma anlayışı ile hareket ederek, sürdürülebilir ve güvenli çözümler üretmeyi ilke ediniyoruz. Müşteri memnuniyeti, iş güvenliği ve teknolojik gelişmelere uyum temel değerlerimizdir. Geleceğe sağlam adımlarla ilerlerken, sektörde öncü bir mühendislik firması olma hedefiyle çalışmaya devam ediyoruz.",
            // İletişim
            contact_title: "İletişim",
            contact_description: "Sizlere yardımcı olmak için buradayız! Herhangi bir sorunuz varsa veya destek ihtiyacınız varsa, aşağıdaki kanallar aracılığıyla bizimle iletişime geçmekten çekinmeyin. Bizi ziyaret edebilir, arayabilir veya e-posta ve sosyal medya aracılığıyla ulaşabilirsiniz.",
            address: "Adres",
            follow_us: "Bizi Takip Edin",
            address_detail: "Taşyaka, 254. Sk. No:64, 48300 Fethiye/Muğla",
            // Çeki Demiri
            cekidemiri_title: "Çeki Demiri",
            searchbar: "Marka Ara",
            cekidemiri_notfound: "Marka bulunamadı.",
            // Brand Page
            brandpage_text: "Modelleri",
            brandpage_notfound: "Bu markaya ait model bulunamadı.",
            // ModelPage
            modelpage_text: "Bu model için görsel yok.",
            // Markalar
            markalar_title: "Çeki Demiri Markaları",
            // Product Page
            productpage_title: "Ürünleri",
            product_notfound: "Bu markaya ait ürün bulunmamaktadır.",
            // Footer
            footer_title1: "Hizmetlerimiz",
            footer_label1_1: "Çeki Demiri",
            footer_label1_2: "İletişim",
            footer_label1_3: "Hakkımızda",
            footer_title2: "İletişim Bilgileri",
            footer_label2: "Taşyaka, 254. Sk. No:64, 48300 Fethiye/Muğla",
            footer_title3: "Bizi Takip Edin",
            footer_rights: "Tüm hakları saklıdır.",
        },
    },
    en: {
        translation: {
            home: "Home",
            about_us: "About Us",
            contact: "Contact",
            cekidemiri: "Towbar",
            markalar: "Brands",
            language_selection: "Language Selection",
            turkish: "Turkish",
            english: "English",
            technology_renault: "Renault",
            technology_construction: "Construction",
            technology_engineering: "Engineering",
            work_hours: "Monday - Saturday, 8:30 AM - 6:00 PM",
            phone: "Phone",
            email: "Email",
            success_message: "Your message has been successfully sent",
            error_message: "Error, Please try again",
            sending: "Sending...",

            // Home Mühendislik
            engineering_first_title: "TOWBAR INSTALLATION TAILORED FOR EVERY",
            engineering_first_title2: "BRAND AND MODEL OF YOUR VEHICLE",
            engineering_first_check1: "PROFESSIONAL INSTALLATION",
            engineering_first_check2: "E-HOMOLOGATION CERTIFIED PRODUCTS",
            engineering_first_check3: "AFFORDABLE PRICES & HIGH-QUALITY WORKMANSHIP",
            engineering_first_button1: "BRANDS",
            engineering_first_button2: "TOWBARS",
            //
            select_your_car: "Please Select Your Vehicle",
            select_brand: "Car Brand",
            select_model: "Car Model",
            see_model: "See The Model",
            //
            engineering_about_title: "TRUST YOUR VEHICLES WITH US",
            engineering_about_title2: "Bus and Automotive",
            engineering_about_title2_1: "Innovative Solutions",
            engineering_about_title2_2: " for Your Needs",
            //
            engineering_cards1_title: "Expert Engineering Services",
            engineering_cards1_description: "We focus on enhancing comfort and functionality in bus interior design projects.",
            engineering_cards2_title: "Reliable Towbar Installation",
            engineering_cards2_description: "Our towbar installations are designed for durability and ease of use.",
            engineering_cards3_title: "Comprehensive Engine Renewal Projects",
            engineering_cards3_description: "Revitalize your vehicle with our expert engine renewal services.",
            engineering_cards_button: "Get More Information",
            //
            engineering_third_title: "WHY CHOOSE US?",
            engineering_third_title2: "Extensive Experience in",
            engineering_third_title2_1: "Engineering",
            engineering_third_title2_2: "and",
            engineering_third_title2_3: "Trust",
            engineering_third_title3: "At Teknoloji Engineering, we make a difference in the industry with the latest technologies and our expert team. We provide the most suitable service for your needs with high-quality, reliable, and innovative engineering solutions.",
            //
            engineering_feature: "Expertise in Industrial Solutions",
            engineering_feature_text: "With our extensive experience, we offer customized engineering services in the industrial and technology sectors.",
            engineering_feature2: "Innovative and Modern Design",
            engineering_feature2_text: "We integrate the latest engineering technologies to deliver efficient and advanced solutions tailored to your projects.",
            engineering_feature3: "Precision Manufacturing and Planning",
            engineering_feature3_text: "We provide sustainable solutions that enhance efficiency through high-precision manufacturing and strategic planning.",
            //
            engineering_projects_title: "OUR PROJECTS",
            engineering_projects_title2: "Discover Our",
            engineering_projects_title2_1: "Popular Services",
            engineering_project_card1_category: "Vehicle Project",
            engineering_project_card1_title: "Minibus Conversion",
            engineering_project_card2_category: "Assembly",
            engineering_project_card2_title: "Towbar Installation",
            engineering_project_card3_category: "Periodic",
            engineering_project_card3_title: "Inspection Services",
            engineering_project_card4_category: "Superstructure",
            engineering_project_card4_title: "Project Planning",


            //About Us
            about_title: "About Us",
            about_subtitle: "Teknoloji Mühendislik is a leader providing innovative solutions in the automotive sector.",
            history_title: "Our History",
            history_text: "TEKNOLOJİ RENAULT Private Service & Spare Parts was established on 07/01/2006 by service manager Levent Yanar. Between 01/01/1996 and 07/01/2006, he provided cotech (foreman) services at Erbaylar Renault Plaza, the regional dealership of our province. Since 2006, we have been operating under the name Teknoloji Renault Private Service & Spare Parts.",
            expertise_title: "Expertise and Training",
            expertise_text1: "Mert Yanar graduated from Pamukkale University on 17/08/2022 with a degree in Mechanical Engineering, specializing in electric vehicle research. He also provides vehicle project services such as body modifications, engine changes, towbar installations, and more.",
            expertise_text2: "On 15/10/1998, he successfully completed the mechanical course organized at the Renault Training Center and earned his diploma.",
            facility_title: "Our Facility",
            facility_text: "As Teknoloji Renault Private Service, we operate in a 1,550 m² indoor facility with 12 vehicle lifts and 29 staff members, specializing in vehicle mechanical repair, electrical services, and spare parts. Additionally, our company houses a 314 m² Authorized Exhaust Emission Measurement Station. As Teknoloji Renault Private Service, we operate in a 1,550 m² indoor facility with 12 vehicle lifts and 29 staff members, specializing in vehicle mechanical repair, electrical services, and spare parts. Additionally, our company houses a 314 m² Authorized Exhaust Emission Measurement Station.",
            vision_title: "Our Vision",
            vision_text: "At Teknoloji Mühendislik, we aim to be a leading company in engineering solutions and technical services. By providing the highest quality standards in towbar installation, vehicle projects, and periodic inspection services, we strive to be the first name that comes to mind for reliability and expertise in the industry. Keeping up with emerging technologies, we focus on producing innovative and sustainable solutions, maximizing customer satisfaction, and continuously improving our services. In the future, we aim to expand our engineering service network, lead groundbreaking projects, and become a nationally recognized brand.",
            mission_title: "Our Mission",
            mission_text: "At Teknoloji Mühendislik, our mission is to prioritize safety, quality, and innovation in engineering solutions while delivering the best service to our customers. In the fields of towbar installation, vehicle projects, and periodic inspection services, we offer reliable and professional solutions in compliance with legal regulations, meeting the highest standards of our partners and customers. In every project, we operate with technical expertise, engineering discipline, and meticulous attention to detail to produce sustainable and safe solutions. Customer satisfaction, occupational safety, and adaptation to technological advancements are our core values. As we move forward with confidence, we continue working towards becoming a leading engineering firm in the industry.",
            // Contact
            contact_title: "Contact",
            address: "Address",
            contact_description: "We are here to assist you! If you have any questions or need support, feel free to contact us through the following channels. You can visit us, call us, or reach out via email and social media.",
            follow_us: "Follow Us",
            address_detail: "Taşyaka, 254. St. No:64, 48300 Fethiye/Muğla",
            // Towbar
            cekidemiri_title: "Towbar",
            searchbar: "Search Brand",
            cekidemiri_notfound: "Brand not found.",
            // Brand Page
            brandpage_text: "Models",
            brandpage_notfound: "No models available for this brand.",
            // Model Page
            modelpage_text: "No images available for this model.",
            // Markalar
            markalar_title: "Towbar Brands",
            // Product Page
            productpage_title: "Products",
            product_notfound: "There are no products of this brand.",
            // Footer
            footer_title1: "Our Services",
            footer_label1_1: "Towbar",
            footer_label1_2: "Contact",
            footer_label1_3: "About Us",
            footer_title2: "Contact Information",
            footer_label2: "Taşyaka, 254. St. No:64, 48300 Fethiye/Muğla",
            footer_title3: "Follow Us",
            footer_rights: "All rights reserved.",

        },
    },

};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "tr", // Default language
        fallbackLng: "en", // Fallback language
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
