export interface StotraVerse {
  verseNumber: number;
  sanskrit: string;
  transliteration: string;
  hindi: string;
}

export interface StotraItem {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  author: string;
  summary: string;
  benefits: string[];
  bestTimeToChant: string;
  audioUrl?: string;
  tags: string[];
  verses: StotraVerse[];
}

export const STOTRAS_DATA: StotraItem[] = [
  {
    id: 'shiv-tandav',
    slug: 'shiva-tandava-stotram',
    title: 'Shiva Tandava Stotram',
    titleHi: 'शिव ताण्डव स्तोत्रम्',
    author: 'Lankapati Ravana (लङ्कापति रावण)',
    summary: 'Composed by Ravana while singing the glory of Lord Shiva during his cosmic ecstatic dance (Tandava). Known for its fierce poetic meter and majestic vibrations.',
    bestTimeToChant: 'Pradosh Kaal, Mondays, or Evening Sandhya',
    tags: ['Tandava', 'Shiva Stotra', 'Ravana', 'Energy', 'Power'],
    benefits: [
      'Removes fear of enemies and sudden obstacles',
      'Infuses boundless vitality, mental clarity, and strength',
      'Bestows spiritual power and worldly success',
    ],
    verses: [
      {
        verseNumber: 1,
        sanskrit: 'जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गकालिकाम्।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥१॥',
        transliteration: 'Jatatavigalajjala Pravahapavitasthale\nGalevalambya Lambitam Bhujangatungamalikam |\nDamaddamad Damaddaman Ninadavaddamarvayam\nChakara Chanda Tandavam Tanotu Nah Shivah Shivam || 1 ||',
        hindi: 'जिनके जटा रूपी वन से बहती हुई गंगा की धाराएं उनके कंठ को पवित्र कर रही हैं, जिनके गले में विशाल काले सर्प की माला लटकी है, और डमरू के डम-डम निनाद के साथ जो प्रचंड तांडव नृत्य कर रहे हैं, वे भगवान शिव हमारा कल्याण करें।',
      },
      {
        verseNumber: 2,
        sanskrit: 'जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-\nविलोलवीचिवल्लरीविराजमानमूर्धनि।\nधधद्धधद्धधज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥२॥',
        transliteration: 'Jatakatahasambhrama Bhramannilimpanirjhari-\nVilolavichivallari Virajamanamurdhani |\nDhagaddhagaddhagajjvalal Lalatapattapavake\nKishorachandrashekhare Ratih Pratikshanam Mama || 2 ||',
        hindi: 'सघन जटाओं में भ्रमित होती हुई गंगा की चंचल लहरों से जिनका मस्तक सुशोभित है, जिनके ललाट पर धक-धक करती प्रचंड अग्नि प्रज्वलित है और जिनके सिर पर बाल-चन्द्रमा विराजमान है, उन भगवान शिव में मेरा मन प्रतिक्षण लीन रहे।',
      },
      {
        verseNumber: 3,
        sanskrit: 'धराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर-\nस्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे।\nकृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि\nक्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि॥३॥',
        transliteration: 'Dharadharendranandini Vilasabandhubandhura-\nSphuraddiganta Santati Pramodamanamanase |\nKripakatakshadhorani Niruddhadurdharapadi\nKvachiddigambare Mano Vinodametu Vastuni || 3 ||',
        hindi: 'पर्वतराज हिमालय की पुत्री पार्वती के विलास-सहचर, जिनकी कृपा-दृष्टि मात्र से भक्त के कठिन से कठिन कष्ट दूर हो जाते हैं, उन दिगम्बर भगवान शिव में मेरा चित्त आनंदित रहे।',
      },
      {
        verseNumber: 4,
        sanskrit: 'जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा-\nकदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे।\nमदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे\nमनो विनोदमद्भुतं बिभर्तु भूतभर्तरि॥४॥',
        transliteration: 'Jatabhujangapingala Sphuratphanamani Prabha-\nKadambakunkuma Drapra Liptadigvadhukhamukhe |\nMadandhasindhura Sphurat Tvaguttariyamedure\nMano Vinodamadbhutam Bibhartu Bhutabhartari || 4 ||',
        hindi: 'जिनकी जटाओं में लिपटे सर्पों की मणियों का पीला प्रकाश दिशा-रूपी सुंदरियों के मुख पर कुमकुम लेप की तरह सुशोभित है, जो गज-चर्म का उत्तरीय वस्त्र धारण करते हैं, उन समस्त भूतों के स्वामी शिव में मेरा मन अद्वितीय आनंद पाए।',
      },
      {
        verseNumber: 5,
        sanskrit: 'सहस्रलोचनप्रभृत्यशेषलेखशेखर-\nप्रसूनधूलिधोरणीविधूसराङ्घ्रिपीठभूः।\nभुजङ्गराजमालया निबद्धजाटजूटकः\nश्रियै चिराय जायतां चकोरबन्धुशेखरः॥५॥',
        transliteration: 'Sahasralochana Prabhrit Yasheshalekhashekhara-\nPrasunadhulidhorani Vidhusaranghripithabhuh |\nBhujangarajamalaya Nibaddhajatajutakah\nShriyai Chiraya Jayatam Chakorabandhushekharah || 5 ||',
        hindi: 'इंद्र आदि समस्त देवताओं के मुकुटों से गिरी पुष्प-धूलि से जिनके चरण-कमल धूसरित हैं, सर्पों के राजा की माला से बंधी जटा वाले, और चंद्रमा को मुकुट बनाने वाले शिव हमें चिरंतन ऐश्वर्य प्रदान करें।',
      },
    ],
  },
  {
    id: 'mahamrityunjaya',
    slug: 'mahamrityunjaya-mantra',
    title: 'Maha Mrityunjaya Mantra',
    titleHi: 'महामृत्युंजय मन्त्र',
    author: 'Maharshi Markandeya / Rigveda (ऋग्वेद ७.५९.१२)',
    summary: 'The great death-conquering mantra of Lord Shiva from the Rigveda. Destroys untimely death, chronic illness, anxiety, and fear while awakening immortality.',
    bestTimeToChant: 'Brahma Muhurta (4:30 AM) or Sunrise',
    tags: ['Mantra', 'Healing', 'Protection', 'Rigveda', 'Immortality'],
    benefits: [
      'Shields from negative vibrations, accidents, and sudden perils',
      'Accelerates healing and deep cellular rejuvenation',
      'Brings supreme mental peace and freedom from all fears',
    ],
    verses: [
      {
        verseNumber: 1,
        sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
        transliteration: 'Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam |\nUrvarukamiva Bandhanan Mrityor Mukshiya Mamritat ||',
        hindi: 'हम त्रिनेत्रधारी (तीन नेत्रों वाले) भगवान शिव की पूजा करते हैं, जो समस्त संसार को सुगंधित करने वाले और पोषण प्रदान करने वाले हैं। जिस प्रकार पका हुआ खरबूजा अपनी बेल के बंधन से सहज ही मुक्त हो जाता है, उसी प्रकार हम मृत्यु के भय से मुक्त होकर मोक्ष (अमरता) को प्राप्त करें।',
      },
    ],
  },
  {
    id: 'lingashtakam',
    slug: 'lingashtakam-stotram',
    title: 'Lingashtakam Stotram',
    titleHi: 'लिङ्गाष्टकम् स्तोत्रम्',
    author: 'Jagadguru Adi Shankaracharya (आदि शङ्कराचार्य)',
    summary: 'Eight divine verses glorifying the Shiva Lingam, composed by Adi Shankara. Represents the infinite, formless light of consciousness (Jyotirlinga).',
    bestTimeToChant: 'During Jalabhishekam, Somwar, or Pradosh',
    tags: ['Shiva Linga', 'Adi Shankara', 'Bhakti', 'Abhishekam'],
    benefits: [
      'Bestows Shiva Sayujya (union with Shiva consciousness)',
      'Wipes out sins accumulated across lifetimes',
      'Grants tranquility and spiritual purity at home',
    ],
    verses: [
      {
        verseNumber: 1,
        sanskrit: 'ब्रह्ममुरारिसुरार्चितलिङ्गं निर्मलभासितशोभितलिङ्गम्।\nजन्मजदुःखविनाशकलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम्॥१॥',
        transliteration: 'Brahma Murari Surarchita Lingam Nirmala Bhasita Shobhita Lingam |\nJanmaja Dukha Vinashaka Lingam Tat Pranamami Sadashiva Lingam || 1 ||',
        hindi: 'ब्रह्मा, विष्णु तथा देवताओं द्वारा पूजित, निर्मल कांति से सुशोभित, और जन्म-मरण के सांसारिक दुखों को नष्ट करने वाले उस सदाशिव लिंग को मैं प्रणाम करता हूँ।',
      },
      {
        verseNumber: 2,
        sanskrit: 'देवमुनिप्रवरार्चितलिङ्गं कामदहं करुणाकरलिङ्गम्।\nरावणदर्पविनाशनलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम्॥२॥',
        transliteration: 'Deva Muni Pravararchita Lingam Kama Dahan Karunakara Lingam |\nRavana Darpa Vinashana Lingam Tat Pranamami Sadashiva Lingam || 2 ||',
        hindi: 'देवताओं और श्रेष्ठ ऋषियों द्वारा पूजित, कामदेव का दहन करने वाले, परम कृपालु और अहंकारी रावण के घमंड को चूर करने वाले उस सदाशिव लिंग को मैं प्रणाम करता हूँ।',
      },
      {
        verseNumber: 3,
        sanskrit: 'सर्वसुगन्धिसुलेपितलिङ्गं बुद्धिविवर्धनकारणलिङ्गम्।\nसिद्धसुरासुरवन्दितलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम्॥३॥',
        transliteration: 'Sarva Sugandhi Sulepita Lingam Buddhi Vivardhana Karana Lingam |\nSiddha Surasura Vandita Lingam Tat Pranamami Sadashiva Lingam || 3 ||',
        hindi: 'चंदन आदि सुगंधित द्रव्यों से सुलेपित, बुद्धि और विवेक को विकसित करने वाले, तथा सिद्धों, देवताओं और असुरों द्वारा वंदित उस सदाशिव लिंग को मैं प्रणाम करता हूँ।',
      },
      {
        verseNumber: 4,
        sanskrit: 'कनकमहामणिभूषितलिङ्गं फणिपतिवेष्टितशोभितलिङ्गम्।\nदक्षसुयज्ञविनाशनलिङ्गं तत् प्रणमामि सदाशिवलिङ्गम्॥४॥',
        transliteration: 'Kanaka Mahamani Bhushita Lingam Phanipati Veshtita Shobhita Lingam |\nDaksha Suyajna Vinashana Lingam Tat Pranamami Sadashiva Lingam || 4 ||',
        hindi: 'सुवर्ण और मणियों से विभूषित, नागराज वासुकि से वेष्टित होकर शोभायमान, और अहंकारी राजा दक्ष के यज्ञ को ध्वस्त करने वाले उस सदाशिव लिंग को मैं प्रणाम करता हूँ।',
      },
    ],
  },
  {
    id: 'rudrashtakam',
    slug: 'rudrashtakam-stotram',
    title: 'Shri Rudrashtakam',
    titleHi: 'श्री रुद्राष्टकम्',
    author: 'Goswami Tulsidas (गोस्वामी तुलसीदास)',
    summary: 'Composed by Goswami Tulsidas in the Ramcharitmanas. Sung by sage Lomasha to appease Lord Rudra, celebrating Shiva as Nirguna, Saguna, and the soul of the cosmos.',
    bestTimeToChant: 'Mondays, Pradosh, and during Aarti',
    tags: ['Tulsidas', 'Rudra', 'Ramcharitmanas', 'Devotion'],
    benefits: [
      'Appeases Lord Shiva instantaneously',
      'Fulfills all righteous desires and dissolves sorrow',
      'Removes planetary afflictions and Shani dosha',
    ],
    verses: [
      {
        verseNumber: 1,
        sanskrit: 'नमामीशमीशान निर्वाणरूपं विभुं व्यापकं ब्रह्मवेदस्वरूपम्।\nनिजं निर्गुणं निर्विकल्पं निरीहं चिदाकाशमाकाशवासं भजेऽहम्॥१॥',
        transliteration: 'Namamisham Ishana Nirvanarupam Vibhum Vyapakam Brahma Veda Svarupam |\nNijam Nirgunam Nirvikalpam Niriham Chidakasham Akasha Vasam Bhajeham || 1 ||',
        hindi: 'हे ईशान! मुक्ति स्वरूप, सर्वसमर्थ, सर्वव्यापी, ब्रह्म और वेद स्वरूप भगवान शिव को मैं प्रणाम करता हूँ। जो अपने निज स्वरूप में स्थित, गुणों से परे, निर्विकल्प, निष्काम, चिदाकाश और आकाश के समान विस्तृत हैं, उन परमात्मा को मैं भजता हूँ।',
      },
      {
        verseNumber: 2,
        sanskrit: 'निराकारमोंकारमूलं तुरीयं गिरा ज्ञान गोतीतमीशं गिरीशम्।\nकरालं महाकाल कालं कृपालं गुणागार संसारपारं नतोऽहम्॥२॥',
        transliteration: 'Nirakaram Omkara Mulam Turiyam Gira Jnana Gotitam Isham Girisham |\nKaralam Mahakala Kalam Kripalam Gunagaram Samsaraparam Natoham || 2 ||',
        hindi: 'जो निराकार हैं, ओंकार के मूल हैं, तीनों अवस्थाओं से परे तुरीय स्वरूप हैं, वाणी और इंद्रियों की समझ से परे हैं, हिमालय के स्वामी, महाकाल के भी काल, परम दयालु, गुणों के आगार और संसार सागर से पार उतारने वाले हैं, उन्हें मैं नमन करता हूँ।',
      },
    ],
  },
  {
    id: 'shiv-chalisa',
    slug: 'shri-shiv-chalisa',
    title: 'Shri Shiva Chalisa',
    titleHi: 'श्री शिव चालीसा',
    author: 'Traditional / Sanatana Smriti (पारम्परिक)',
    summary: 'The beloved 40-verse hymn in praise of Lord Shiva, chanted by millions daily across India for protection, prosperity, and peace.',
    bestTimeToChant: 'Daily Morning & Evening',
    tags: ['Chalisa', 'Daily Worship', 'Prosperity', 'Protection'],
    benefits: [
      'Brings harmony, health, and peace into family life',
      'Destroys negative thoughts, anxiety, and depression',
      'Ensures Lord Shiva’s eternal grace and guardianship',
    ],
    verses: [
      {
        verseNumber: 1,
        sanskrit: 'जय गणेश गिरिजा सुवन, मंगल मूल सुजान।\nकहत अयोध्यादास तुम, देहु अभय वरदान॥',
        transliteration: 'Jaya Ganesha Girija Suvana, Mangala Mula Sujana |\nKahata Ayodhyadasa Tuma, Dehu Abhaya Varadana ||',
        hindi: 'हे माता पार्वती के पुत्र श्री गणेश! आपकी जय हो। आप मंगल के मूल और ज्ञानवान हैं। हमें निर्भयता का वरदान प्रदान करें।',
      },
      {
        verseNumber: 2,
        sanskrit: 'जय गिरिजा पति दीन दयाला। सदा करत सन्तन प्रतिपाला॥\nभाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥',
        transliteration: 'Jaya Girija Pati Dina Dayala | Sada Karata Santana Pratipala ||\nBhala Chandrama Sohata Nike | Kanana Kundala Nagaphani Ke ||',
        hindi: 'हे पार्वतीपति! हे दीनदयालु! आपकी जय हो। आप सदैव संतों और भक्तों का प्रतिपालन करते हैं। आपके ललाट पर चंद्रमा और कानों में नागफनी के कुंडल शोभा पा रहे हैं।',
      },
    ],
  },
];
