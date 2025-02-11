import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            // Header
            home: "Ana Sayfa",
            about: "Hakkımızda",
            contact: "İletişim",
            companies: "Şirketler",
            language_selection: "Dil Seçimi",
            turkish: "Türkçe",
            english: "İngilizce",
            technology_renault: "Renault",
            technology_construction: "İnşaat",
            technology_engineering: "Mühendislik",
            work_hours: "Pazartesi - Cumartesi, 8:30 - 18:00",
            phone: "Telefon",
            email: "E-posta",
            success_message: "Mesajınız Başarıyla Gönderildi.",
            error_message: "Hata, Lütfen yeniden deneyiniz.",
            sending: "Gönderiliyor...",

            // Anasayfa Mühendislik
            engineering_first_title: "GÜVENİLİR VE YENİLİKÇİ ÇÖZÜMLER",
            engineering_first_title2: "TEKNOLOJİ MÜHENDİSLİK'TE",
            engineering_first_check1: "MÜHENDİSLİKTE KUSURSUZ TASARIM VE ÜRETİM",
            engineering_first_check2: "YENİLİKÇİ TEKNOLOJİLERLE VERİMLİ ÇÖZÜMLER",
            engineering_first_check3: "SEKTÖRÜN ÖNCÜSÜ OLARAK KALİTELİ HİZMET",
            engineering_first_button1: "DETAYLI BİLGİ",
            engineering_first_button2: "HİZMETLERİMİZ",
            //
            select_your_car:"Lütfen Aracınızı Seçin",
            select_brand:"Araç Markası",
            select_model:"Araç Modeli",
            see_model:"Modeli Görün",
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
            engineering_projects_title2: "Son Projelerimizi",
            engineering_projects_title2_1: "Keşfedin",
            engineering_project_card1_category: "Araç Proje",
            engineering_project_card1_title: "Minibüs Dönüşüm",
            engineering_project_card2_category: "Montaj",
            engineering_project_card2_title: "Çeki Demiri",


            // Hakkımızda
            about_title: "Hakkımızda",
            about_subtitle: "Renault Teknoloji, otomotiv sektöründe yenilikçi çözümler sunan bir liderdir.",
            history_title: "Tarihçemiz",
            history_text: "07/01/2006 tarihinde açılan TEKNOLOJİ RENAULT Özel Servis & Yedek Parça,servis yetkilisi Levent Yanar tarafından kurulmuştur. 01/01/1996 ile 07/01/2006 tarihleri arasında ilimizin bölge bayii olan Erbaylar Renault Plaza’da cotech (formen) hizmeti vermiştir. 2006 yılından itibaren Teknoloji Renault Özel Servis & Yedek Parça adı altında hizmet vermeye devam etmekteyiz.",
            expertise_title: "Uzmanlık ve Eğitimler",
            expertise_text1: "Servis Yetkilisi Levent Yanar, 17/09/1998 tarihinde Renault eğitim merkezinde katıldığı modern otomobil teknolojilerini kapsayan cotech eğitim programını başarıyla tamamlayarak, Renault ürün gamına dahil tüm otomobillerde arıza teşhis ve onarım yetkisi veren diplomayı almaya hak kazanmıştır.",
            expertise_text2: "15/10/1998 tarihinde Renault eğitim merkezinde düzenlenen mekanik kursunu başarıyla tamamlayarak diploma almaya hak kazanmıştır.",
            facility_title: "Tesisimiz",
            facility_text: "Servisimiz; 330 m² mekanik, 360 m² kaporta, 225 m² boya ve 150 m² son kontrol bölümlerinden oluşmaktadır. İçerisinde yetkili serviste bulunması gereken tüm ekipmanlar bulunmaktadır.",
            vision_title: "Vizyonumuz",
            vision_text: "Çalışanlarının eğitimine önem vererek; kalite standartlarını, profesyonel yaklaşımını ve üstün hizmet anlayışını yaratmaktır. Tamamen memnun müşteri politikası ile sağlam temeller üzerinde büyümek hedefimizdir.",
            mission_title: "Misyonumuz",
            mission_text: "Renault marka otomobillerin hasar onarımlarını hızlı ve teknolojik araçlar kullanarak minimum maliyetle gerçekleştirmek, müşterilerimize hak ettikleri kalite ve konforu üstün hizmet anlayışıyla sunarak güven yaratmaktır.",
            // İletişim
            contact_title: "İletişim",
            label_1: "Adınız",
            label_2: "E-posta",
            label_3: "Mesajınız",
            button_send: "Gönder",
            // Çeki Demiri
            cekidemiri_title: "Çeki Demiri",
            searchbar: "Marka Ara",
            cekidemiri_notfound: "Marka bulunamadı.",
            // Brand Page
            brandpage_text:"Modelleri",
            // ModelPage
            modelpage_text:"Bu model için görsel yok.",
            // Markalar
            markalar_title:"Çeki Demiri Markaları",
            // Product Page
            productpage_title:"Ürünleri",
            product_notfound:"Bu markaya ait ürün bulunmamaktadır.",

        },
    },
    en: {
        translation: {
            home: "Home",
            about: "About",
            contact: "Contact",
            companies: "Companies",
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
            engineering_first_title: "RELIABLE AND INNOVATIVE SOLUTIONS",
            engineering_first_title2: "AT TEKNOLOJI ENGINEERING",
            engineering_first_check1: "PERFECT DESIGN AND MANUFACTURING IN ENGINEERING",
            engineering_first_check2: "EFFICIENT SOLUTIONS WITH INNOVATIVE TECHNOLOGIES",
            engineering_first_check3: "HIGH-QUALITY SERVICE AS AN INDUSTRY LEADER",
            engineering_first_button1: "DETAILED INFORMATION",
            engineering_first_button2: "OUR SERVICES",
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
            engineering_projects_title2_1: "Latest Projects",
            engineering_project_card1_category: "Vehicle Project",
            engineering_project_card1_title: "Minibus Conversion",
            engineering_project_card2_category: "Assembly",
            engineering_project_card2_title: "Towbar Installation",


            //About Us
            about_title: "About Us",
            about_subtitle: "Renault Technology is a leader in providing innovative solutions in the automotive industry.",
            history_title: "Our History",
            history_text: "Founded on 07/01/2006, TEKNOLOJİ RENAULT Special Service & Spare Parts was established by service manager Levent Yanar. Between 01/01/1996 and 07/01/2006, he served as a cotech (foreman) at Erbaylar Renault Plaza, the regional dealer of our province. Since 2006, we have continued to operate under the name Teknoloji Renault Special Service & Spare Parts.",
            expertise_title: "Expertise and Training",
            expertise_text1: "Service Manager Levent Yanar successfully completed the cotech training program covering modern automotive technologies at the Renault training center on 17/09/1998. With this, he obtained the diploma authorizing him to diagnose and repair all vehicles in the Renault product range.",
            expertise_text2: "On 15/10/1998, he successfully completed the mechanical course held at the Renault training center and earned his diploma.",
            facility_title: "Our Facility",
            facility_text: "Our service center consists of 330 m² mechanical, 360 m² bodywork, 225 m² paint, and 150 m² final inspection sections. It is equipped with all the necessary tools and equipment required for an authorized service center.",
            vision_title: "Our Vision",
            vision_text: "By prioritizing employee training, we aim to establish quality standards, a professional approach, and a superior service mindset. Our goal is to grow on solid foundations with a fully satisfied customer policy.",
            mission_title: "Our Mission",
            mission_text: "To repair damages on Renault vehicles quickly and efficiently using advanced technological tools at minimum cost, providing our customers with the quality and comfort they deserve through a superior service approach that builds trust.",
            // Contact
            contact_title: "Contact",
            label_1: "Full Name",
            label_2: "E-Mail",
            label_3: "Your Message",
            button_send: "Send",
            // Towbar
            cekidemiri_title: "Towbar",
            searchbar: "Search Brand",
            cekidemiri_notfound: "Brand not found.",
            // Brand Page
            brandpage_text:"Models",
            // Model Page
            modelpage_text:"No images available for this model.",
            // Markalar
            markalar_title:"Towbar Brands",
            // Product Page
            productpage_title:"Products",
            product_notfound:"There are no products of this brand.",

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
