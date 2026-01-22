// Free Trade Agreement data for Vietnam
export interface FTAData {
  id: string
  name: string
  nameVi: string
  countries: string[]
  signedDate: string
  effectiveDate: string
  status: 'active' | 'signed' | 'negotiating'
  tradeVolume?: number // in billion USD
  keyBenefits: string[]
  keyBenefitsVi: string[]
  tariffReduction: number // percentage
  coveragePercent: number // percentage of trade covered
  image: string
  description: string
  descriptionVi: string
  fullDescription: string
  fullDescriptionVi: string
  challenges: string[]
  challengesVi: string[]
  keyProvisions: string[]
  keyProvisionsVi: string[]
  economicImpact: {
    exports: string
    exportsVi: string
    imports: string
    importsVi: string
    investment: string
    investmentVi: string
  }
}

export const ftaAgreements: FTAData[] = [
  {
    id: 'cptpp',
    name: 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership',
    nameVi: 'Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương',
    image: '/hoinghigallery/cptpp-trade-agreement-signing-ceremony-with-flags-.jpg',
    description: 'A landmark trade agreement among 11 Pacific Rim countries',
    descriptionVi: 'Hiệp định thương mại mang tính bước ngoặt giữa 11 quốc gia vành đai Thái Bình Dương',
    fullDescription:
      "The CPTPP is one of the world's largest free trade agreements, covering a market of nearly 500 million people and representing 13.5% of global GDP. It eliminates or reduces tariffs on thousands of products, establishes common rules for trade, and includes provisions on intellectual property, labor rights, and environmental protection.",
    fullDescriptionVi:
      'CPTPP là một trong những hiệp định thương mại tự do lớn nhất thế giới, bao phủ thị trường gần 500 triệu người và đại diện cho 13,5% GDP toàn cầu. Hiệp định xóa bỏ hoặc giảm thuế quan cho hàng nghìn sản phẩm, thiết lập quy tắc chung cho thương mại, và bao gồm các điều khoản về sở hữu trí tuệ, quyền lao động và bảo vệ môi trường.',
    countries: [
      'Australia',
      'Brunei',
      'Canada',
      'Chile',
      'Japan',
      'Malaysia',
      'Mexico',
      'New Zealand',
      'Peru',
      'Singapore',
      'Vietnam'
    ],
    signedDate: '2018-03-08',
    effectiveDate: '2019-01-14',
    status: 'active',
    tradeVolume: 45.2,
    keyBenefits: [
      'Elimination of 99% of tariff lines',
      'Access to major markets in Asia-Pacific',
      'Enhanced trade in services and investment',
      'Intellectual property protection',
      'Improved competitiveness for Vietnamese exports'
    ],
    keyBenefitsVi: [
      'Xóa bỏ 99% dòng thuế',
      'Tiếp cận thị trường lớn ở Châu Á-Thái Bình Dương',
      'Tăng cường thương mại dịch vụ và đầu tư',
      'Bảo vệ quyền sở hữu trí tuệ',
      'Cải thiện năng lực cạnh tranh hàng xuất khẩu Việt Nam'
    ],
    challenges: [
      'Need to upgrade production standards',
      'Increased competition from member countries',
      'Compliance with strict labor and environmental regulations',
      'Intellectual property enforcement requirements'
    ],
    challengesVi: [
      'Cần nâng cấp tiêu chuẩn sản xuất',
      'Tăng cạnh tranh từ các nước thành viên',
      'Tuân thủ quy định nghiêm ngặt về lao động và môi trường',
      'Yêu cầu thực thi quyền sở hữu trí tuệ'
    ],
    keyProvisions: [
      'Tariff elimination on 65% of goods immediately',
      'Rules of origin requirements',
      'Government procurement access',
      'E-commerce chapter',
      'State-owned enterprise regulations'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan 65% hàng hóa ngay lập tức',
      'Yêu cầu quy tắc xuất xứ',
      'Tiếp cận mua sắm công',
      'Chương thương mại điện tử',
      'Quy định về doanh nghiệp nhà nước'
    ],
    economicImpact: {
      exports: 'Increased textile, seafood, and agricultural exports by 35%',
      exportsVi: 'Tăng xuất khẩu dệt may, thủy sản và nông sản 35%',
      imports: 'Growth in machinery and technology imports',
      importsVi: 'Tăng trưởng nhập khẩu máy móc và công nghệ',
      investment: 'Attracted $8.5B in FDI from member countries',
      investmentVi: 'Thu hút 8,5 tỷ USD FDI từ các nước thành viên'
    },
    tariffReduction: 99,
    coveragePercent: 95
  },
  {
    id: 'evfta',
    name: 'EU-Vietnam Free Trade Agreement',
    nameVi: 'Hiệp định Thương mại Tự do Việt Nam - EU',
    image: '/hoinghigallery/eu-vietnam-trade-agreement-signing-with-european-a.jpg',
    description: 'Historic trade deal between Vietnam and the European Union',
    descriptionVi: 'Thỏa thuận thương mại lịch sử giữa Việt Nam và Liên minh Châu Âu',
    fullDescription:
      'The EVFTA is the most ambitious trade agreement the EU has concluded with a developing country. It eliminates nearly all tariffs on goods traded between Vietnam and the EU, opens up the services and investment markets, and includes strong commitments on sustainable development, labor rights, and environmental protection.',
    fullDescriptionVi:
      'EVFTA là hiệp định thương mại đầy tham vọng nhất mà EU ký kết với một nước đang phát triển. Hiệp định xóa bỏ gần như toàn bộ thuế quan hàng hóa giữa Việt Nam và EU, mở cửa thị trường dịch vụ và đầu tư, và bao gồm cam kết mạnh mẽ về phát triển bền vững, quyền lao động và bảo vệ môi trường.',
    countries: [
      'Austria',
      'Belgium',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Ireland',
      'Italy',
      'Latvia',
      'Lithuania',
      'Luxembourg',
      'Malta',
      'Netherlands',
      'Poland',
      'Portugal',
      'Romania',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
      'Vietnam'
    ],
    signedDate: '2019-06-30',
    effectiveDate: '2020-08-01',
    status: 'active',
    tradeVolume: 56.3,
    keyBenefits: [
      'Elimination of 99% of tariffs over 10 years',
      'Access to 500 million EU consumers',
      'Protection of geographical indications',
      'Sustainable development commitments',
      'Enhanced market access for services'
    ],
    keyBenefitsVi: [
      'Xóa bỏ 99% thuế quan trong 10 năm',
      'Tiếp cận 500 triệu người tiêu dùng EU',
      'Bảo vệ chỉ dẫn địa lý',
      'Cam kết phát triển bền vững',
      'Tăng cường tiếp cận thị trường dịch vụ'
    ],
    challenges: [
      'Strict EU standards on product quality and safety',
      'Environmental and labor compliance requirements',
      'Competition from other developing countries',
      'Need for certification and traceability systems'
    ],
    challengesVi: [
      'Tiêu chuẩn EU nghiêm ngặt về chất lượng và an toàn sản phẩm',
      'Yêu cầu tuân thủ môi trường và lao động',
      'Cạnh tranh từ các nước đang phát triển khác',
      'Cần hệ thống chứng nhận và truy xuất nguồn gốc'
    ],
    keyProvisions: [
      'Immediate tariff elimination on 71% of EU imports',
      'Geographical indication protection for Vietnamese products',
      'Public procurement market access',
      'Intellectual property rights enforcement',
      'Dispute settlement mechanism'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan ngay lập tức cho 71% hàng nhập khẩu EU',
      'Bảo vệ chỉ dẫn địa lý cho sản phẩm Việt Nam',
      'Tiếp cận thị trường mua sắm công',
      'Thực thi quyền sở hữu trí tuệ',
      'Cơ chế giải quyết tranh chấp'
    ],
    economicImpact: {
      exports: 'Boosted exports to EU by 42%, especially footwear and textiles',
      exportsVi: 'Tăng xuất khẩu sang EU 42%, đặc biệt giày dép và dệt may',
      imports: 'Increased imports of pharmaceuticals and machinery',
      importsVi: 'Tăng nhập khẩu dược phẩm và máy móc',
      investment: 'EU FDI increased by $12.3B since implementation',
      investmentVi: 'FDI từ EU tăng 12,3 tỷ USD kể từ khi thực thi'
    },
    tariffReduction: 99,
    coveragePercent: 97
  },
  {
    id: 'rcep',
    name: 'Regional Comprehensive Economic Partnership',
    nameVi: 'Hiệp định Đối tác Kinh tế Toàn diện Khu vực',
    image: '/hoinghigallery/rcep-asia-pacific-trade-agreement-with-multiple-as.jpg',
    description: "World's largest free trade bloc covering Asia-Pacific region",
    descriptionVi: 'Khối thương mại tự do lớn nhất thế giới bao phủ khu vực Châu Á-Thái Bình Dương',
    fullDescription:
      "RCEP creates a unified market of 2.2 billion people, accounting for about 30% of the world's population and GDP. It harmonizes trade rules across the region, reduces tariffs, and facilitates supply chain integration among member countries, making it easier for businesses to operate across borders.",
    fullDescriptionVi:
      'RCEP tạo ra thị trường thống nhất 2,2 tỷ người, chiếm khoảng 30% dân số và GDP thế giới. Hiệp định hài hòa quy tắc thương mại trong khu vực, giảm thuế quan và tạo thuận lợi cho hội nhập chuỗi cung ứng giữa các nước thành viên, giúp doanh nghiệp dễ dàng hoạt động xuyên biên giới.',
    countries: [
      'Australia',
      'Brunei',
      'Cambodia',
      'China',
      'Indonesia',
      'Japan',
      'Laos',
      'Malaysia',
      'Myanmar',
      'New Zealand',
      'Philippines',
      'Singapore',
      'South Korea',
      'Thailand',
      'Vietnam'
    ],
    signedDate: '2020-11-15',
    effectiveDate: '2022-01-01',
    status: 'active',
    tradeVolume: 125.8,
    keyBenefits: [
      'Largest free trade area in the world',
      'Covers 30% of global GDP',
      'Simplified rules of origin',
      'Enhanced e-commerce provisions',
      'Regional supply chain integration'
    ],
    keyBenefitsVi: [
      'Khu vực thương mại tự do lớn nhất thế giới',
      'Bao phủ 30% GDP toàn cầu',
      'Quy tắc xuất xứ đơn giản hóa',
      'Điều khoản thương mại điện tử nâng cao',
      'Hội nhập chuỗi cung ứng khu vực'
    ],
    challenges: [
      'Complex rules of origin across 15 countries',
      'Varying levels of development among members',
      'Competition from larger economies like China',
      'Need to balance multiple bilateral agreements'
    ],
    challengesVi: [
      'Quy tắc xuất xứ phức tạp qua 15 quốc gia',
      'Mức độ phát triển khác nhau giữa các thành viên',
      'Cạnh tranh từ nền kinh tế lớn như Trung Quốc',
      'Cần cân bằng nhiều hiệp định song phương'
    ],
    keyProvisions: [
      'Tariff reduction on 92% of goods',
      'Cumulative rules of origin',
      'Investment liberalization',
      'Digital trade facilitation',
      'Intellectual property protection'
    ],
    keyProvisionsVi: [
      'Giảm thuế quan 92% hàng hóa',
      'Quy tắc xuất xứ tích lũy',
      'Tự do hóa đầu tư',
      'Tạo thuận lợi thương mại số',
      'Bảo vệ sở hữu trí tuệ'
    ],
    economicImpact: {
      exports: 'Diversified export markets, reducing dependence on single markets',
      exportsVi: 'Đa dạng hóa thị trường xuất khẩu, giảm phụ thuộc vào thị trường đơn lẻ',
      imports: 'Access to cheaper raw materials and intermediate goods',
      importsVi: 'Tiếp cận nguyên liệu thô và hàng trung gian rẻ hơn',
      investment: 'Strengthened position in regional supply chains',
      investmentVi: 'Củng cố vị thế trong chuỗi cung ứng khu vực'
    },
    tariffReduction: 92,
    coveragePercent: 90
  },
  {
    id: 'vkfta',
    name: 'Vietnam-Korea Free Trade Agreement',
    nameVi: 'Hiệp định Thương mại Tự do Việt Nam - Hàn Quốc',
    image: '/hoinghigallery/vietnam-korea-trade-partnership-with-vietnamese-an.jpg',
    description: 'Strategic bilateral trade partnership with South Korea',
    descriptionVi: 'Quan hệ đối tác thương mại song phương chiến lược với Hàn Quốc',
    fullDescription:
      "The VKFTA strengthens the already robust economic relationship between Vietnam and South Korea. It provides preferential market access, promotes technology transfer, and facilitates Korean investment in Vietnam's manufacturing and services sectors.",
    fullDescriptionVi:
      'VKFTA củng cố mối quan hệ kinh tế vốn đã mạnh mẽ giữa Việt Nam và Hàn Quốc. Hiệp định cung cấp quyền tiếp cận thị trường ưu đãi, thúc đẩy chuyển giao công nghệ và tạo thuận lợi cho đầu tư Hàn Quốc vào lĩnh vực sản xuất và dịch vụ của Việt Nam.',
    countries: ['Vietnam', 'South Korea'],
    signedDate: '2015-05-05',
    effectiveDate: '2015-12-20',
    status: 'active',
    tradeVolume: 82.3,
    keyBenefits: [
      'Elimination of 95% of tariffs',
      'Strong bilateral trade relationship',
      'Technology transfer opportunities',
      'Investment promotion',
      'Enhanced cooperation in electronics and automotive sectors'
    ],
    keyBenefitsVi: [
      'Xóa bỏ 95% thuế quan',
      'Quan hệ thương mại song phương mạnh mẽ',
      'Cơ hội chuyển giao công nghệ',
      'Thúc đẩy đầu tư',
      'Tăng cường hợp tác trong lĩnh vực điện tử và ô tô'
    ],
    challenges: [
      'Trade deficit with South Korea',
      'Need to improve product quality to compete',
      'Dependence on Korean technology and components',
      'Limited access for agricultural products'
    ],
    challengesVi: [
      'Thâm hụt thương mại với Hàn Quốc',
      'Cần cải thiện chất lượng sản phẩm để cạnh tranh',
      'Phụ thuộc vào công nghệ và linh kiện Hàn Quốc',
      'Hạn chế tiếp cận cho sản phẩm nông nghiệp'
    ],
    keyProvisions: [
      'Immediate tariff elimination on 48.5% of tariff lines',
      'Gradual reduction on sensitive products',
      'Investment protection provisions',
      'Cooperation in SME development',
      'Cultural exchange programs'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan ngay lập tức cho 48,5% dòng thuế',
      'Giảm dần cho sản phẩm nhạy cảm',
      'Điều khoản bảo vệ đầu tư',
      'Hợp tác phát triển doanh nghiệp vừa và nhỏ',
      'Chương trình trao đổi văn hóa'
    ],
    economicImpact: {
      exports: 'Increased exports of textiles, seafood, and agricultural products',
      exportsVi: 'Tăng xuất khẩu dệt may, thủy sản và nông sản',
      imports: 'Major imports of electronics, machinery, and steel',
      importsVi: 'Nhập khẩu chủ yếu điện tử, máy móc và thép',
      investment: 'South Korea is the largest foreign investor in Vietnam',
      investmentVi: 'Hàn Quốc là nhà đầu tư nước ngoài lớn nhất tại Việt Nam'
    },
    tariffReduction: 95,
    coveragePercent: 93
  },
  {
    id: 'asean',
    name: 'ASEAN Free Trade Area',
    nameVi: 'Khu vực Thương mại Tự do ASEAN',
    image: '/hoinghigallery/asean-summit-with-flags-of-all-10-southeast-asian-.jpg',
    description: 'Regional integration framework for Southeast Asian nations',
    descriptionVi: 'Khung hội nhập khu vực cho các quốc gia Đông Nam Á',
    fullDescription:
      'AFTA is the cornerstone of ASEAN economic integration, creating a single market and production base. It has successfully reduced tariffs to near-zero levels for most goods, facilitating intra-regional trade and making ASEAN a competitive manufacturing hub.',
    fullDescriptionVi:
      'AFTA là nền tảng của hội nhập kinh tế ASEAN, tạo ra thị trường đơn và cơ sở sản xuất chung. Hiệp định đã thành công trong việc giảm thuế quan xuống gần bằng 0 cho hầu hết hàng hóa, tạo thuận lợi cho thương mại nội khối và biến ASEAN thành trung tâm sản xuất cạnh tranh.',
    countries: [
      'Brunei',
      'Cambodia',
      'Indonesia',
      'Laos',
      'Malaysia',
      'Myanmar',
      'Philippines',
      'Singapore',
      'Thailand',
      'Vietnam'
    ],
    signedDate: '1992-01-28',
    effectiveDate: '1993-01-01',
    status: 'active',
    tradeVolume: 68.5,
    keyBenefits: [
      'Zero tariffs on most goods',
      'Regional economic integration',
      'Supply chain connectivity',
      'Services liberalization',
      'Enhanced regional cooperation'
    ],
    keyBenefitsVi: [
      'Thuế quan bằng 0 cho hầu hết hàng hóa',
      'Hội nhập kinh tế khu vực',
      'Kết nối chuỗi cung ứng',
      'Tự do hóa dịch vụ',
      'Tăng cường hợp tác khu vực'
    ],
    challenges: [
      'Development gaps among member states',
      'Non-tariff barriers remain',
      'Limited progress in services integration',
      'Need for better infrastructure connectivity'
    ],
    challengesVi: [
      'Khoảng cách phát triển giữa các nước thành viên',
      'Rào cản phi thuế quan vẫn còn',
      'Tiến triển hạn chế trong hội nhập dịch vụ',
      'Cần kết nối cơ sở hạ tầng tốt hơn'
    ],
    keyProvisions: [
      'Common Effective Preferential Tariff (CEPT) scheme',
      'Rules of origin requirements',
      'Trade facilitation measures',
      'Mutual recognition arrangements',
      'Dispute settlement mechanism'
    ],
    keyProvisionsVi: [
      'Chương trình Thuế quan Ưu đãi Có hiệu lực Chung (CEPT)',
      'Yêu cầu quy tắc xuất xứ',
      'Biện pháp tạo thuận lợi thương mại',
      'Thỏa thuận công nhận lẫn nhau',
      'Cơ chế giải quyết tranh chấp'
    ],
    economicImpact: {
      exports: "Intra-ASEAN trade accounts for 23% of Vietnam's total trade",
      exportsVi: 'Thương mại nội khối ASEAN chiếm 23% tổng thương mại Việt Nam',
      imports: 'Access to diverse products from neighboring countries',
      importsVi: 'Tiếp cận sản phẩm đa dạng từ các nước láng giềng',
      investment: 'Facilitated regional production networks and supply chains',
      investmentVi: 'Tạo thuận lợi cho mạng lưới sản xuất và chuỗi cung ứng khu vực'
    },
    tariffReduction: 100,
    coveragePercent: 98
  },
  {
    id: 'acfta',
    name: 'ASEAN-China Free Trade Area',
    nameVi: 'Khu vực Thương mại Tự do ASEAN - Trung Quốc',
    image: '/asean-china-trade-agreement-signing-ceremony.jpg',
    description: "Strategic trade partnership with the world's largest consumer market",
    descriptionVi: 'Quan hệ đối tác thương mại chiến lược với thị trường tiêu dùng lớn nhất thế giới',
    fullDescription:
      'The ACFTA is one of the largest free trade areas in the world, covering a market of over 1.9 billion people. It has significantly reduced tariffs and non-tariff barriers, creating vast opportunities for trade in goods, services, and investment between ASEAN member states and China.',
    fullDescriptionVi:
      'ACFTA là một trong những khu vực thương mại tự do lớn nhất thế giới, bao phủ thị trường hơn 1,9 tỷ người. Hiệp định đã giảm đáng kể thuế quan và rào cản phi thuế quan, tạo cơ hội rộng lớn cho thương mại hàng hóa, dịch vụ và đầu tư giữa các nước thành viên ASEAN và Trung Quốc.',
    countries: [
      'Brunei',
      'Cambodia',
      'China',
      'Indonesia',
      'Laos',
      'Malaysia',
      'Myanmar',
      'Philippines',
      'Singapore',
      'Thailand',
      'Vietnam'
    ],
    signedDate: '2002-11-04',
    effectiveDate: '2010-01-01',
    status: 'active',
    tradeVolume: 178.2,
    keyBenefits: [
      "Access to world's largest consumer market",
      'Reduced tariffs on agricultural products',
      'Enhanced investment flows',
      'Economic cooperation programs'
    ],
    keyBenefitsVi: [
      'Tiếp cận thị trường tiêu dùng lớn nhất thế giới',
      'Giảm thuế quan sản phẩm nông nghiệp',
      'Tăng cường dòng vốn đầu tư',
      'Chương trình hợp tác kinh tế'
    ],
    challenges: [
      'Competition from Chinese manufacturers',
      'Trade imbalance with China',
      'Need to meet Chinese quality standards',
      'Dependence on Chinese market'
    ],
    challengesVi: [
      'Cạnh tranh từ nhà sản xuất Trung Quốc',
      'Mất cân bằng thương mại với Trung Quốc',
      'Cần đáp ứng tiêu chuẩn chất lượng Trung Quốc',
      'Phụ thuộc vào thị trường Trung Quốc'
    ],
    keyProvisions: [
      'Tariff reduction on 90% of goods',
      'Trade in goods agreement',
      'Investment liberalization',
      'Economic and technical cooperation',
      'Dispute settlement mechanism'
    ],
    keyProvisionsVi: [
      'Giảm thuế quan 90% hàng hóa',
      'Hiệp định thương mại hàng hóa',
      'Tự do hóa đầu tư',
      'Hợp tác kinh tế và kỹ thuật',
      'Cơ chế giải quyết tranh chấp'
    ],
    economicImpact: {
      exports: 'Significant increase in exports of agricultural products, textiles, and electronics',
      exportsVi: 'Tăng đáng kể xuất khẩu nông sản, dệt may và điện tử',
      imports: 'Increased imports of machinery, technology, and consumer goods',
      importsVi: 'Tăng nhập khẩu máy móc, công nghệ và hàng tiêu dùng',
      investment: 'Attracted substantial Chinese investment in infrastructure and manufacturing',
      investmentVi: 'Thu hút đầu tư lớn từ Trung Quốc vào cơ sở hạ tầng và sản xuất'
    },
    tariffReduction: 90,
    coveragePercent: 88
  },
  {
    id: 'ajcep',
    name: 'ASEAN-Japan Comprehensive Economic Partnership',
    nameVi: 'Hiệp định Đối tác Kinh tế Toàn diện ASEAN - Nhật Bản',
    image: '/asean-japan-economic-partnership-signing.jpg',
    description: 'Comprehensive economic partnership with Japan focusing on technology and investment',
    descriptionVi: 'Hiệp định đối tác kinh tế toàn diện với Nhật Bản tập trung vào công nghệ và đầu tư',
    fullDescription:
      'AJCEP strengthens economic ties between ASEAN and Japan through tariff reduction, investment promotion, and economic cooperation. It focuses on enhancing manufacturing capabilities, technology transfer, and developing human resources through various cooperation programs.',
    fullDescriptionVi:
      'AJCEP củng cố quan hệ kinh tế giữa ASEAN và Nhật Bản thông qua giảm thuế quan, thúc đẩy đầu tư và hợp tác kinh tế. Hiệp định tập trung vào nâng cao năng lực sản xuất, chuyển giao công nghệ và phát triển nguồn nhân lực thông qua các chương trình hợp tác.',
    countries: [
      'Brunei',
      'Cambodia',
      'Indonesia',
      'Japan',
      'Laos',
      'Malaysia',
      'Myanmar',
      'Philippines',
      'Singapore',
      'Thailand',
      'Vietnam'
    ],
    signedDate: '2008-04-14',
    effectiveDate: '2008-12-01',
    status: 'active',
    tradeVolume: 92.7,
    keyBenefits: [
      'Access to advanced technology market',
      'Investment in manufacturing',
      'Skills development programs',
      'Quality standards alignment'
    ],
    keyBenefitsVi: [
      'Tiếp cận thị trường công nghệ tiên tiến',
      'Đầu tư vào sản xuất',
      'Chương trình phát triển kỹ năng',
      'Điều chỉnh tiêu chuẩn chất lượng'
    ],
    challenges: [
      'Meeting strict Japanese quality standards',
      'Competition in technology-intensive sectors',
      'High standards for labor and environmental practices',
      'Need for continuous innovation'
    ],
    challengesVi: [
      'Đáp ứng tiêu chuẩn chất lượng nghiêm ngặt của Nhật Bản',
      'Cạnh tranh trong lĩnh vực công nghệ cao',
      'Tiêu chuẩn cao về lao động và môi trường',
      'Cần đổi mới liên tục'
    ],
    keyProvisions: [
      'Tariff reduction on 93% of goods',
      'Investment protection and promotion',
      'Technical cooperation programs',
      'Capacity building initiatives',
      'Intellectual property protection'
    ],
    keyProvisionsVi: [
      'Giảm thuế quan 93% hàng hóa',
      'Bảo vệ và thúc đẩy đầu tư',
      'Chương trình hợp tác kỹ thuật',
      'Sáng kiến xây dựng năng lực',
      'Bảo vệ sở hữu trí tuệ'
    ],
    economicImpact: {
      exports: 'Increased exports of agricultural products, seafood, and textiles to Japan',
      exportsVi: 'Tăng xuất khẩu nông sản, thủy sản và dệt may sang Nhật Bản',
      imports: 'Significant imports of high-tech machinery, electronics, and components',
      importsVi: 'Nhập khẩu đáng kể máy móc công nghệ cao, điện tử và linh kiện',
      investment: 'Japan is one of the largest investors in ASEAN, particularly in manufacturing',
      investmentVi: 'Nhật Bản là một trong những nhà đầu tư lớn nhất tại ASEAN, đặc biệt trong sản xuất'
    },
    tariffReduction: 93,
    coveragePercent: 91
  },
  {
    id: 'vjepa',
    name: 'Vietnam-Japan Economic Partnership Agreement',
    nameVi: 'Hiệp định Đối tác Kinh tế Việt Nam - Nhật Bản',
    image: '/vietnam-japan-economic-partnership-agreement.jpg',
    description: 'Bilateral economic partnership strengthening trade and investment ties with Japan',
    descriptionVi: 'Hiệp định đối tác kinh tế song phương củng cố quan hệ thương mại và đầu tư với Nhật Bản',
    fullDescription:
      "VJEPA enhances economic cooperation between Vietnam and Japan through comprehensive tariff reduction, investment protection, and various economic cooperation programs. It facilitates Japanese investment in Vietnam's manufacturing sector and promotes technology transfer and skills development.",
    fullDescriptionVi:
      'VJEPA tăng cường hợp tác kinh tế giữa Việt Nam và Nhật Bản thông qua giảm thuế quan toàn diện, bảo vệ đầu tư và các chương trình hợp tác kinh tế. Hiệp định tạo thuận lợi cho đầu tư Nhật Bản vào lĩnh vực sản xuất của Việt Nam và thúc đẩy chuyển giao công nghệ và phát triển kỹ năng.',
    countries: ['Vietnam', 'Japan'],
    signedDate: '2008-12-25',
    effectiveDate: '2009-10-01',
    status: 'active',
    tradeVolume: 46.8,
    keyBenefits: [
      'Bilateral trade enhancement',
      'Japanese investment promotion',
      'Technical cooperation',
      'Labor mobility provisions'
    ],
    keyBenefitsVi: [
      'Tăng cường thương mại song phương',
      'Thúc đẩy đầu tư Nhật Bản',
      'Hợp tác kỹ thuật',
      'Điều khoản di chuyển lao động'
    ],
    challenges: [
      'Meeting Japanese quality and safety standards',
      'Competition from other Asian suppliers',
      'Language and cultural barriers',
      'Need for skilled workforce'
    ],
    challengesVi: [
      'Đáp ứng tiêu chuẩn chất lượng và an toàn của Nhật Bản',
      'Cạnh tranh từ các nhà cung cấp châu Á khác',
      'Rào cản ngôn ngữ và văn hóa',
      'Cần lực lượng lao động có kỹ năng'
    ],
    keyProvisions: [
      'Tariff elimination on 94% of goods',
      'Investment protection and promotion',
      'Technical cooperation programs',
      'Labor mobility for skilled workers',
      'Intellectual property rights'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan 94% hàng hóa',
      'Bảo vệ và thúc đẩy đầu tư',
      'Chương trình hợp tác kỹ thuật',
      'Di chuyển lao động cho công nhân lành nghề',
      'Quyền sở hữu trí tuệ'
    ],
    economicImpact: {
      exports: 'Increased exports of agricultural products, seafood, and textiles to Japan',
      exportsVi: 'Tăng xuất khẩu nông sản, thủy sản và dệt may sang Nhật Bản',
      imports: 'Major imports of high-tech machinery, electronics, and automotive parts',
      importsVi: 'Nhập khẩu chủ yếu máy móc công nghệ cao, điện tử và phụ tùng ô tô',
      investment: 'Japan is the largest ODA provider and a major FDI source for Vietnam',
      investmentVi: 'Nhật Bản là nhà cung cấp ODA lớn nhất và nguồn FDI chính cho Việt Nam'
    },
    tariffReduction: 94,
    coveragePercent: 92
  },
  {
    id: 'vcfta',
    name: 'Vietnam-Chile Free Trade Agreement',
    nameVi: 'Hiệp định Thương mại Tự do Việt Nam - Chile',
    image: '/vietnam-chile-free-trade-agreement.jpg',
    description: 'Bilateral trade agreement opening gateway to Latin American markets',
    descriptionVi: 'Hiệp định thương mại song phương mở cửa vào thị trường Mỹ Latinh',
    fullDescription:
      "The VCFTA is Vietnam's first free trade agreement with a Latin American country, establishing a strategic bridge between Southeast Asia and Latin America. It focuses on trade in goods, services, and investment, particularly in agriculture, mining, and fisheries sectors.",
    fullDescriptionVi:
      'VCFTA là hiệp định thương mại tự do đầu tiên của Việt Nam với một quốc gia Mỹ Latinh, thiết lập cầu nối chiến lược giữa Đông Nam Á và Mỹ Latinh. Hiệp định tập trung vào thương mại hàng hóa, dịch vụ và đầu tư, đặc biệt trong lĩnh vực nông nghiệp, khai khoáng và thủy sản.',
    countries: ['Vietnam', 'Chile'],
    signedDate: '2011-11-11',
    effectiveDate: '2014-01-01',
    status: 'active',
    tradeVolume: 2.8,
    keyBenefits: [
      'Gateway to Latin American markets',
      'Agricultural trade opportunities',
      'Mining sector cooperation',
      'Services trade liberalization'
    ],
    keyBenefitsVi: [
      'Cổng vào thị trường Mỹ Latinh',
      'Cơ hội thương mại nông nghiệp',
      'Hợp tác ngành khai khoáng',
      'Tự do hóa thương mại dịch vụ'
    ],
    challenges: [
      'Geographic distance affecting logistics costs',
      'Limited awareness of market opportunities',
      'Cultural and language differences',
      'Limited trade volume'
    ],
    challengesVi: [
      'Khoảng cách địa lý ảnh hưởng đến chi phí logistics',
      'Nhận thức hạn chế về cơ hội thị trường',
      'Khác biệt văn hóa và ngôn ngữ',
      'Khối lượng thương mại hạn chế'
    ],
    keyProvisions: [
      'Tariff elimination on 96% of goods',
      'Trade in services liberalization',
      'Investment protection',
      'Rules of origin requirements',
      'Dispute settlement mechanism'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan 96% hàng hóa',
      'Tự do hóa thương mại dịch vụ',
      'Bảo vệ đầu tư',
      'Yêu cầu quy tắc xuất xứ',
      'Cơ chế giải quyết tranh chấp'
    ],
    economicImpact: {
      exports: 'Increased exports of footwear, textiles, and agricultural products',
      exportsVi: 'Tăng xuất khẩu giày dép, dệt may và nông sản',
      imports: 'Imports of wine, fruits, and mining products from Chile',
      importsVi: 'Nhập khẩu rượu vang, trái cây và sản phẩm khai khoáng từ Chile',
      investment: 'Potential for increased investment in mining and agriculture sectors',
      investmentVi: 'Tiềm năng tăng đầu tư vào lĩnh vực khai khoáng và nông nghiệp'
    },
    tariffReduction: 96,
    coveragePercent: 94
  },
  {
    id: 'vefta',
    name: 'Vietnam-EFTA Free Trade Agreement',
    nameVi: 'Hiệp định Thương mại Tự do Việt Nam - EFTA',
    image: '/vietnam-efta-free-trade-agreement.jpg',
    description: 'Trade agreement with high-income European countries',
    descriptionVi: 'Hiệp định thương mại với các quốc gia châu Âu thu nhập cao',
    fullDescription:
      'VEFTA establishes trade relations between Vietnam and the EFTA countries (Switzerland, Norway, Iceland, and Liechtenstein). These countries are known for their high-quality products, advanced technology, and high purchasing power, offering Vietnam access to premium markets.',
    fullDescriptionVi:
      'VEFTA thiết lập quan hệ thương mại giữa Việt Nam và các nước EFTA (Thụy Sĩ, Na Uy, Iceland và Liechtenstein). Các quốc gia này được biết đến với sản phẩm chất lượng cao, công nghệ tiên tiến và sức mua cao, mang lại cho Việt Nam tiếp cận với thị trường cao cấp.',
    countries: ['Vietnam', 'Switzerland', 'Norway', 'Iceland', 'Liechtenstein'],
    signedDate: '2012-05-09',
    effectiveDate: '2012-10-01',
    status: 'active',
    tradeVolume: 5.6,
    keyBenefits: [
      'Access to high-income markets',
      'Pharmaceutical and machinery trade',
      'Investment protection',
      'Intellectual property cooperation'
    ],
    keyBenefitsVi: [
      'Tiếp cận thị trường thu nhập cao',
      'Thương mại dược phẩm và máy móc',
      'Bảo vệ đầu tư',
      'Hợp tác sở hữu trí tuệ'
    ],
    challenges: [
      'Meeting strict quality and safety standards',
      'High competition from other suppliers',
      'Limited awareness of market potential',
      'Cultural and business practice differences'
    ],
    challengesVi: [
      'Đáp ứng tiêu chuẩn chất lượng và an toàn nghiêm ngặt',
      'Cạnh tranh cao từ các nhà cung cấp khác',
      'Nhận thức hạn chế về tiềm năng thị trường',
      'Khác biệt văn hóa và thực hành kinh doanh'
    ],
    keyProvisions: [
      'Tariff elimination on 97% of goods',
      'Trade in services and investment',
      'Intellectual property rights protection',
      'Technical barriers to trade',
      'Dispute settlement procedures'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan 97% hàng hóa',
      'Thương mại dịch vụ và đầu tư',
      'Bảo vệ quyền sở hữu trí tuệ',
      'Rào cản kỹ thuật đối với thương mại',
      'Thủ tục giải quyết tranh chấp'
    ],
    economicImpact: {
      exports: 'Increased exports of textiles, footwear, and electronics',
      exportsVi: 'Tăng xuất khẩu dệt may, giày dép và điện tử',
      imports: 'Significant imports of pharmaceuticals, machinery, and precision instruments',
      importsVi: 'Nhập khẩu đáng kể dược phẩm, máy móc và dụng cụ chính xác',
      investment: 'Potential for investment from EFTA countries in high-tech industries',
      investmentVi: 'Tiềm năng đầu tư từ các nước EFTA vào ngành công nghệ cao'
    },
    tariffReduction: 97,
    coveragePercent: 95
  },
  {
    id: 'vukfta',
    name: 'Vietnam-UK Free Trade Agreement',
    nameVi: 'Hiệp định Thương mại Tự do Việt Nam - Vương quốc Anh',
    image: '/vietnam-uk-free-trade-agreement.jpg',
    description: 'Post-Brexit trade agreement ensuring continuity with the UK market',
    descriptionVi: 'Hiệp định thương mại sau Brexit đảm bảo tính liên tục với thị trường Vương quốc Anh',
    fullDescription:
      'VUKFTA was signed to maintain the trade benefits that Vietnam enjoyed under the EU-Vietnam Free Trade Agreement after the UK left the European Union. It preserves tariff elimination and ensures continued market access for Vietnamese products in the UK market.',
    fullDescriptionVi:
      'VUKFTA được ký kết để duy trì các lợi ích thương mại mà Việt Nam được hưởng theo Hiệp định Thương mại Tự do EU-Việt Nam sau khi Vương quốc Anh rời khỏi Liên minh Châu Âu. Hiệp định duy trì xóa bỏ thuế quan và đảm bảo tiếp cận thị trường liên tục cho sản phẩm Việt Nam tại thị trường Vương quốc Anh.',
    countries: ['Vietnam', 'United Kingdom'],
    signedDate: '2020-12-29',
    effectiveDate: '2021-05-01',
    status: 'active',
    tradeVolume: 6.8,
    keyBenefits: [
      'Post-Brexit trade continuity',
      'Tariff elimination on key exports',
      'Services and investment provisions',
      'Digital trade facilitation'
    ],
    keyBenefitsVi: [
      'Duy trì thương mại sau Brexit',
      'Xóa bỏ thuế quan hàng xuất khẩu chính',
      'Điều khoản dịch vụ và đầu tư',
      'Tạo thuận lợi thương mại số'
    ],
    challenges: [
      'Adjusting to post-Brexit regulatory changes',
      'Meeting UK quality and safety standards',
      'Competition from other suppliers',
      'Navigating new customs procedures'
    ],
    challengesVi: [
      'Điều chỉnh với thay đổi quy định sau Brexit',
      'Đáp ứng tiêu chuẩn chất lượng và an toàn của Vương quốc Anh',
      'Cạnh tranh từ các nhà cung cấp khác',
      'Điều hướng thủ tục hải quan mới'
    ],
    keyProvisions: [
      'Tariff elimination on 99% of goods',
      'Trade in services and investment',
      'Digital trade and e-commerce provisions',
      'Intellectual property protection',
      'Sustainable development commitments'
    ],
    keyProvisionsVi: [
      'Xóa bỏ thuế quan 99% hàng hóa',
      'Thương mại dịch vụ và đầu tư',
      'Điều khoản thương mại số và thương mại điện tử',
      'Bảo vệ sở hữu trí tuệ',
      'Cam kết phát triển bền vững'
    ],
    economicImpact: {
      exports: 'Maintained strong exports of textiles, footwear, and agricultural products',
      exportsVi: 'Duy trì xuất khẩu mạnh dệt may, giày dép và nông sản',
      imports: 'Imports of machinery, pharmaceuticals, and high-tech products',
      importsVi: 'Nhập khẩu máy móc, dược phẩm và sản phẩm công nghệ cao',
      investment: "Continued UK investment in Vietnam's manufacturing and services sectors",
      investmentVi: 'Tiếp tục đầu tư Vương quốc Anh vào lĩnh vực sản xuất và dịch vụ của Việt Nam'
    },
    tariffReduction: 99,
    coveragePercent: 96
  }
]

export interface EconomicBloc {
  id: string
  name: string
  nameVi: string
  description: string
  descriptionVi: string
  memberCountries: string[]
  gdp: number // in trillion USD
  population: number // in millions
  tradeWithVietnam: number // in billion USD
  color: string
}

export const economicBlocs: EconomicBloc[] = [
  {
    id: 'asean',
    name: 'ASEAN',
    nameVi: 'ASEAN',
    description: 'Association of Southeast Asian Nations - Regional economic and political organization',
    descriptionVi: 'Hiệp hội các quốc gia Đông Nam Á - Tổ chức kinh tế và chính trị khu vực',
    memberCountries: [
      'Brunei',
      'Cambodia',
      'Indonesia',
      'Laos',
      'Malaysia',
      'Myanmar',
      'Philippines',
      'Singapore',
      'Thailand',
      'Vietnam'
    ],
    gdp: 3.6,
    population: 680,
    tradeWithVietnam: 68.5,
    color: '#3b82f6'
  },
  {
    id: 'eu',
    name: 'European Union',
    nameVi: 'Liên minh Châu Âu',
    description: 'Political and economic union of 27 European countries',
    descriptionVi: 'Liên minh chính trị và kinh tế của 27 quốc gia châu Âu',
    memberCountries: [
      'Austria',
      'Belgium',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Ireland',
      'Italy',
      'Latvia',
      'Lithuania',
      'Luxembourg',
      'Malta',
      'Netherlands',
      'Poland',
      'Portugal',
      'Romania',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden'
    ],
    gdp: 17.2,
    population: 447,
    tradeWithVietnam: 56.3,
    color: '#8b5cf6'
  },
  {
    id: 'rcep',
    name: 'RCEP',
    nameVi: 'RCEP',
    description: "Regional Comprehensive Economic Partnership - World's largest free trade bloc",
    descriptionVi: 'Hiệp định Đối tác Kinh tế Toàn diện Khu vực - Khối thương mại tự do lớn nhất thế giới',
    memberCountries: [
      'Australia',
      'Brunei',
      'Cambodia',
      'China',
      'Indonesia',
      'Japan',
      'Laos',
      'Malaysia',
      'Myanmar',
      'New Zealand',
      'Philippines',
      'Singapore',
      'South Korea',
      'Thailand',
      'Vietnam'
    ],
    gdp: 26.3,
    population: 2280,
    tradeWithVietnam: 125.8,
    color: '#06b6d4'
  },
  {
    id: 'cptpp',
    name: 'CPTPP',
    nameVi: 'CPTPP',
    description: 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership',
    descriptionVi: 'Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương',
    memberCountries: [
      'Australia',
      'Brunei',
      'Canada',
      'Chile',
      'Japan',
      'Malaysia',
      'Mexico',
      'New Zealand',
      'Peru',
      'Singapore',
      'Vietnam'
    ],
    gdp: 13.5,
    population: 510,
    tradeWithVietnam: 45.2,
    color: '#10b981'
  }
]

// Country coordinates for map visualization
export const countryCoordinates: Record<string, { lat: number; lng: number }> = {
  Vietnam: { lat: 14.0583, lng: 108.2772 },
  China: { lat: 35.8617, lng: 104.1954 },
  Japan: { lat: 36.2048, lng: 138.2529 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  Thailand: { lat: 15.87, lng: 100.9925 },
  Malaysia: { lat: 4.2105, lng: 101.9758 },
  Singapore: { lat: 1.3521, lng: 103.8198 },
  Indonesia: { lat: -0.7893, lng: 113.9213 },
  Philippines: { lat: 12.8797, lng: 121.774 },
  Cambodia: { lat: 12.5657, lng: 104.991 },
  Laos: { lat: 19.8563, lng: 102.4955 },
  Myanmar: { lat: 21.9162, lng: 95.956 },
  Brunei: { lat: 4.5353, lng: 114.7277 },
  Australia: { lat: -25.2744, lng: 133.7751 },
  'New Zealand': { lat: -40.9006, lng: 174.886 },
  India: { lat: 20.5937, lng: 78.9629 },
  'United States': { lat: 37.0902, lng: -95.7129 },
  Canada: { lat: 56.1304, lng: -106.3468 },
  Mexico: { lat: 23.6345, lng: -102.5528 },
  Chile: { lat: -35.6751, lng: -71.543 },
  Peru: { lat: -9.19, lng: -75.0152 },
  Germany: { lat: 51.1657, lng: 10.4515 },
  France: { lat: 46.2276, lng: 2.2137 },
  'United Kingdom': { lat: 55.3781, lng: -3.436 },
  Italy: { lat: 41.8719, lng: 12.5674 },
  Spain: { lat: 40.4637, lng: -3.7492 },
  Netherlands: { lat: 52.1326, lng: 5.2913 },
  Belgium: { lat: 50.5039, lng: 4.4699 },
  Switzerland: { lat: 46.8182, lng: 8.2275 },
  Norway: { lat: 60.472, lng: 8.4689 },
  Sweden: { lat: 60.1282, lng: 18.6435 },
  Poland: { lat: 51.9194, lng: 19.1451 },
  Austria: { lat: 47.5162, lng: 14.5501 },
  Denmark: { lat: 56.2639, lng: 9.5018 },
  Finland: { lat: 61.9241, lng: 25.7482 },
  Greece: { lat: 39.0742, lng: 21.8243 },
  Portugal: { lat: 39.3999, lng: -8.2245 },
  'Czech Republic': { lat: 49.8175, lng: 15.473 },
  Hungary: { lat: 47.1625, lng: 19.5033 },
  Romania: { lat: 45.9432, lng: 24.9668 },
  Bulgaria: { lat: 42.7339, lng: 25.4858 },
  Croatia: { lat: 45.1, lng: 15.2 },
  Slovakia: { lat: 48.669, lng: 19.699 },
  Slovenia: { lat: 46.1512, lng: 14.9955 },
  Ireland: { lat: 53.4129, lng: -8.2439 },
  Lithuania: { lat: 55.1694, lng: 23.8813 },
  Latvia: { lat: 56.8796, lng: 24.6032 },
  Estonia: { lat: 58.5953, lng: 25.0136 },
  Cyprus: { lat: 35.1264, lng: 33.4299 },
  Malta: { lat: 35.9375, lng: 14.3754 },
  Luxembourg: { lat: 49.8153, lng: 6.1296 },
  Iceland: { lat: 64.9631, lng: -19.0208 },
  Liechtenstein: { lat: 47.166, lng: 9.5554 }
}
