export interface CardPair {
  pairId: string
  concept: string
  definition: string
  note: string
}

export const cardPairs: CardPair[] = [
  // CÁC CẶP BÀI GỐC CỦA BẠN (Original 6 pairs)
  {
    pairId: 'pair-1',
    concept: 'Lao động cụ thể',
    definition: 'Tạo ra Giá trị sử dụng của hàng hóa (công dụng)',
    note: 'Lao động cụ thể tạo ra giá trị sử dụng của sản phẩm.'
  },
  {
    pairId: 'pair-2',
    concept: 'Lao động trừu tượng',
    definition: 'Tạo ra Giá trị hàng hóa (hao phí lao động)',
    note: 'Lao động trừu tượng tạo ra giá trị hàng hóa.'
  },
  {
    pairId: 'pair-3',
    concept: 'Thước đo giá trị',
    definition: 'Chức năng của tiền dùng để biểu hiện giá trị của hàng hóa',
    note: 'Tiền dùng để đo lường và biểu hiện giá trị của các hàng hóa khác.'
  },
  {
    pairId: 'pair-4',
    concept: 'Phương tiện lưu thông',
    definition: 'Chức năng của tiền dùng làm trung gian trao đổi (H - T - H)',
    note: 'Tiền dùng làm môi giới cho quá trình trao đổi hàng hóa.'
  },
  {
    pairId: 'pair-5',
    concept: 'Quy luật Giá trị',
    definition: 'Điều tiết trao đổi dựa trên hao phí lao động xã hội cần thiết',
    note: 'Sản xuất & trao đổi dựa trên hao phí lao động xã hội cần thiết.'
  },
  {
    pairId: 'pair-6',
    concept: 'Tư bản bất biến (c)',
    definition: 'Bộ phận tư bản tồn tại dưới hình thái tư liệu sản xuất',
    note: 'Tồn tại dưới hình thái tư liệu sản xuất.'
  },

  // CÁC CẶP BÀI MỚI TRÍCH XUẤT TỪ NGUỒN (New extracted pairs)

  // Chương 1: Đối tượng, Phương pháp nghiên cứu và Chức năng của Kinh tế Chính trị Mác – Lênin
  {
    pairId: 'pair-7',
    concept: 'Kinh tế Chính trị Mác – Lênin',
    definition: 'Hệ thống lý luận khoa học về quan hệ sản xuất và trao đổi gắn với lực lượng sản xuất',
    note: 'Nghiên cứu quan hệ sản xuất và trao đổi trong phương thức sản xuất xã hội [1, 2].'
  },
  {
    pairId: 'pair-8',
    concept: 'Đối tượng nghiên cứu (Kinh tế Chính trị)',
    definition: 'Các quan hệ sản xuất và trao đổi trong một phương thức sản xuất nhất định',
    note: 'Nghiên cứu quy luật chi phối sự vận động của sản xuất tư bản chủ nghĩa [1-4].'
  },
  {
    pairId: 'pair-9',
    concept: 'Quy luật kinh tế',
    definition: 'Mối liên hệ bản chất, khách quan, lặp đi lặp lại của các hiện tượng trong nền sản xuất xã hội',
    note: 'Sự tác động của quy luật kinh tế độc lập với ý chí con người [5, 6].'
  },
  {
    pairId: 'pair-10',
    concept: 'Chính sách kinh tế',
    definition: 'Sản phẩm chủ quan của con người được hình thành trên cơ sở vận dụng các quy luật kinh tế',
    note: 'Phù hợp với quy luật khách quan thì phát huy tác dụng [5, 6].'
  },
  {
    pairId: 'pair-11',
    concept: 'Phương pháp trừu tượng hóa khoa học',
    definition: 'Phương pháp gạt bỏ yếu tố ngẫu nhiên, hiện tượng tạm thời để tìm ra bản chất đối tượng nghiên cứu',
    note: 'Giúp nghiên cứu bản chất sâu sắc của các phạm trù kinh tế [7, 8].'
  },
  {
    pairId: 'pair-12',
    concept: 'Chức năng nhận thức',
    definition:
      'Cung cấp hệ thống tri thức, lý luận về sự vận động của các quan hệ giữa người với người trong sản xuất và trao đổi',
    note: 'Là chức năng cơ bản của Kinh tế Chính trị Mác – Lênin [7-10].'
  },
  {
    pairId: 'pair-13',
    concept: 'Chức năng tư tưởng',
    definition: 'Xây dựng nền tảng tư tưởng cho người lao động, chống lại sự bóc lột, bất công',
    note: 'Góp phần xây dựng lý tưởng khoa học về xã hội tốt đẹp [11, 12].'
  },

  // Chương 2: Hàng hóa, Thị trường và Vai trò của các Chủ thể tham gia thị trường
  {
    pairId: 'pair-14',
    concept: 'Sản xuất hàng hóa',
    definition: 'Kiểu tổ chức kinh tế mà ở đó người sản xuất tạo ra sản phẩm để trao đổi, mua bán',
    note: 'Xuất hiện khi có phân công lao động xã hội và tách biệt kinh tế dựa trên sở hữu [13, 14].'
  },
  {
    pairId: 'pair-15',
    concept: 'Hàng hóa',
    definition: 'Sản phẩm của lao động, có thể thỏa mãn nhu cầu của con người thông qua trao đổi, mua bán',
    note: 'Có hai thuộc tính: giá trị sử dụng và giá trị [15-17].'
  },
  {
    pairId: 'pair-16',
    concept: 'Giá trị sử dụng của hàng hóa',
    definition: 'Công dụng của hàng hóa, thỏa mãn nhu cầu nào đó của con người',
    note: 'Là giá trị sử dụng được xã hội chấp nhận [15, 16].'
  },
  {
    pairId: 'pair-17',
    concept: 'Giá trị hàng hóa',
    definition: 'Hao phí lao động xã hội của người sản xuất kết tinh trong hàng hóa',
    note: 'Giá trị là nội dung, giá trị trao đổi là hình thức biểu hiện của nó [18, 19].'
  },
  {
    pairId: 'pair-18',
    concept: 'Thời gian lao động xã hội cần thiết',
    definition: 'Thời gian lao động trung bình để sản xuất ra một giá trị sử dụng trong điều kiện xã hội bình thường',
    note: 'Là cơ sở để đo lường lượng giá trị hàng hóa [20, 21].'
  },
  {
    pairId: 'pair-19',
    concept: 'Năng suất lao động',
    definition: 'Năng lực sản xuất của người lao động, đo bằng số lượng sản phẩm tạo ra trong một đơn vị thời gian',
    note: 'Tăng năng suất lao động làm giảm lượng giá trị của một đơn vị hàng hóa [22, 23].'
  },
  {
    pairId: 'pair-20',
    concept: 'Cường độ lao động',
    definition: 'Mức độ khẩn trương, tích cực của hoạt động lao động sản xuất',
    note: 'Tăng cường độ lao động làm tăng số lượng sản phẩm, nhưng không làm thay đổi lượng giá trị một đơn vị hàng hóa [22, 23].'
  },
  {
    pairId: 'pair-21',
    concept: 'Lao động giản đơn',
    definition: 'Lao động không đòi hỏi có quá trình đào tạo một cách hệ thống, chuyên sâu về chuyên môn, kỹ năng',
    note: 'Mọi lao động phức tạp đều quy về lao động giản đơn [24, 25].'
  },
  {
    pairId: 'pair-22',
    concept: 'Lao động phức tạp',
    definition: 'Lao động đòi hỏi qua quá trình đào tạo về kỹ năng, nghiệp vụ theo yêu cầu của ngành nghề',
    note: 'Tạo ra nhiều giá trị hơn lao động giản đơn trong cùng một đơn vị thời gian [24, 25].'
  },
  {
    pairId: 'pair-23',
    concept: 'Hình thái giá trị giản đơn (ngẫu nhiên)',
    definition: 'Giá trị hàng hóa A được biểu hiện ở hàng hóa B qua trao đổi trực tiếp',
    note: 'Là hình thái giá trị đầu tiên trong lịch sử [26, 27].'
  },
  {
    pairId: 'pair-24',
    concept: 'Hình thái vật ngang giá chung',
    definition: 'Giá trị của các hàng hóa được biểu hiện ở cùng một loại hàng hóa đóng vai trò vật ngang giá',
    note: 'Khắc phục hạn chế của hình thái giá trị mở rộng [26, 27].'
  },
  {
    pairId: 'pair-25',
    concept: 'Hình thái tiền tệ',
    definition: 'Vàng trở thành vật ngang giá chung cho thế giới hàng hóa',
    note: 'Tiền tệ là hình thái biểu hiện giá trị của hàng hóa [28, 29].'
  },
  {
    pairId: 'pair-26',
    concept: 'Giá cả hàng hóa',
    definition: 'Hình thức biểu hiện bằng tiền của giá trị hàng hóa',
    note: 'Giá cả có thể lên xuống do tác động của cung - cầu [30, 31].'
  },
  {
    pairId: 'pair-27',
    concept: 'Phương tiện cất trữ',
    definition: 'Chức năng của tiền dùng để dự trữ cho lưu thông',
    note: 'Yêu cầu tiền phải đủ giá trị như vàng, bạc, tiền bạc [30, 31].'
  },
  {
    pairId: 'pair-28',
    concept: 'Phương tiện thanh toán',
    definition: 'Chức năng của tiền dùng để trả nợ, nộp thuế, thanh toán các khoản mua bán chịu',
    note: 'Phát triển mạnh trong giao dịch tín dụng, thương mại hiện đại [32, 33].'
  },
  {
    pairId: 'pair-29',
    concept: 'Tiền tệ thế giới',
    definition: 'Chức năng của tiền khi trao đổi hàng hóa mở rộng ra ngoài biên giới quốc gia',
    note: 'Tiền phải là tiền vàng hoặc những đồng tiền được công nhận là phương tiện thanh toán quốc tế [32, 33].'
  },
  {
    pairId: 'pair-30',
    concept: 'Thị trường',
    definition: 'Tổng hòa các quan hệ kinh tế dưới tác động của nhu cầu, cung ứng việc trao đổi, mua bán',
    note: 'Thị trường là tổng thể các quan hệ kinh tế: cung-cầu, giá cả, cạnh tranh [34, 35].'
  },
  {
    pairId: 'pair-31',
    concept: 'Nền kinh tế thị trường',
    definition:
      'Nền kinh tế được vận hành theo cơ chế thị trường, chịu sự tác động, điều tiết của các quy luật kinh tế',
    note: 'Là sản phẩm của văn minh nhân loại [36, 37].'
  },
  {
    pairId: 'pair-32',
    concept: 'Cơ chế thị trường',
    definition: 'Phương thức cơ bản để phân phối và sử dụng các nguồn lực trên nền kinh tế thị trường',
    note: 'Mang tính khách quan, tự điều chỉnh theo yêu cầu của quy luật kinh tế [36, 37].'
  },
  {
    pairId: 'pair-33',
    concept: 'Quy luật cung - cầu',
    definition: 'Quy luật điều tiết quan hệ giữa cung (bên bán) và cầu (bên mua) hàng hóa trên thị trường',
    note: 'Quy luật này đòi hỏi cung - cầu phải có sự thống nhất [38, 39].'
  },
  {
    pairId: 'pair-34',
    concept: 'Quy luật lưu thông tiền tệ',
    definition: 'Yêu cầu việc lưu thông tiền tệ phải căn cứ trên yêu cầu của lưu thông hàng hóa và dịch vụ',
    note: 'Số lượng tiền cần thiết tỷ lệ thuận với tổng giá cả hàng hóa, tỷ lệ nghịch với tốc độ lưu thông của tiền tệ [40, 41].'
  },
  {
    pairId: 'pair-35',
    concept: 'Cạnh tranh',
    definition: 'Sự ganh đua giữa những chủ thể kinh tế với nhau nhằm thu được lợi ích tối đa',
    note: 'Là quy luật kinh tế điều tiết quan hệ giữa các chủ thể sản xuất và trao đổi hàng hóa [42, 43].'
  },
  {
    pairId: 'pair-36',
    concept: 'Cạnh tranh nội bộ ngành',
    definition: 'Cạnh tranh giữa các chủ thể kinh doanh trong cùng một ngành hàng hóa',
    note: 'Hình thành giá trị xã hội thấp hơn giá trị cá biệt [42, 43].'
  },
  {
    pairId: 'pair-37',
    concept: 'Cạnh tranh giữa các ngành',
    definition: 'Cạnh tranh giữa các chủ thể kinh doanh giữa các ngành khác nhau',
    note: 'Là phương thức tìm kiếm lợi nhuận bình quân [44, 45].'
  },
  {
    pairId: 'pair-38',
    concept: 'Người sản xuất hàng hóa',
    definition: 'Những người sản xuất và cung cấp hàng hóa, dịch vụ ra thị trường',
    note: 'Nhiệm vụ là thỏa mãn nhu cầu xã hội và tối đa hóa lợi nhuận [46, 47].'
  },
  {
    pairId: 'pair-39',
    concept: 'Người tiêu dùng',
    definition: 'Những người mua hàng hóa, dịch vụ trên thị trường để thỏa mãn nhu cầu tiêu dùng',
    note: 'Là yếu tố quyết định sự phát triển của người sản xuất [48, 49].'
  },
  {
    pairId: 'pair-40',
    concept: 'Chủ thể trung gian',
    definition: 'Những cá nhân, tổ chức đảm nhiệm vai trò cầu nối các chủ thể sản xuất, tiêu dùng, trao đổi',
    note: 'Làm tăng cơ hội thực hiện giá trị hàng hóa và thỏa mãn nhu cầu người tiêu dùng [48, 49].'
  },

  // Chương 3: Giá trị thặng dư trong nền kinh tế thị trường
  {
    pairId: 'pair-41',
    concept: "Công thức chung của tư bản (T-H-T')",
    definition: "Sự vận động của tiền tệ nhằm mang lại giá trị thặng dư (T' > T)",
    note: 'Khác biệt với lưu thông hàng hóa đơn thuần (H-T-H) [50-53].'
  },
  {
    pairId: 'pair-42',
    concept: 'Tư bản',
    definition: 'Tiền (hoặc giá trị) vận động nhằm mục đích mang lại giá trị thặng dư',
    note: 'Tiền chỉ trở thành tư bản khi mang lại giá trị thặng dư [52, 53].'
  },
  {
    pairId: 'pair-43',
    concept: 'Sức lao động',
    definition:
      'Toàn bộ những năng lực thể chất và tinh thần tồn tại trong con người, được người lao động đem ra vận dụng khi sản xuất',
    note: 'Phải được thể hiện bằng thể chất và có đủ tư liệu sản xuất cần thiết [52, 53].'
  },
  {
    pairId: 'pair-44',
    concept: 'Giá trị sử dụng của sức lao động',
    definition: 'Khả năng tạo ra giá trị mới lớn hơn giá trị của bản thân nó',
    note: 'Là chìa khóa khai thác nguồn gốc của giá trị thặng dư [54, 55].'
  },
  {
    pairId: 'pair-45',
    concept: 'Giá trị thặng dư (m)',
    definition: 'Bộ phận giá trị mới dôi ra ngoài giá trị sức lao động do người lao động tạo ra',
    note: 'Là kết quả của lao động không công của công nhân cho tư bản [56-58].'
  },
  {
    pairId: 'pair-46',
    concept: 'Thời gian lao động tất yếu',
    definition: 'Thời gian lao động mà người công nhân tạo ra giá trị ngang bằng giá trị sức lao động của mình',
    note: 'Phần giá trị này dùng để bù đắp giá trị sức lao động [59, 60].'
  },
  {
    pairId: 'pair-47',
    concept: 'Thời gian lao động thặng dư',
    definition: 'Thời gian lao động mà người công nhân tạo ra giá trị thặng dư cho nhà tư bản',
    note: 'Phần lao động không được trả công [59, 60].'
  },
  {
    pairId: 'pair-48',
    concept: 'Tư bản khả biến (v)',
    definition: 'Bộ phận tư bản dùng để mua hàng hóa sức lao động',
    note: 'Giá trị của nó biến đổi, tạo ra giá trị mới lớn hơn giá trị ban đầu [61, 62].'
  },
  {
    pairId: 'pair-49',
    concept: 'Công thức giá trị hàng hóa (G)',
    definition: 'Tổng giá trị của hàng hóa được biểu diễn là $G = c + (v + m)$',
    note: 'Trong đó (v+m) là bộ phận giá trị mới của hàng hóa [61, 62].'
  },
  {
    pairId: 'pair-50',
    concept: 'Tư bản cố định',
    definition: 'Bộ phận tư bản bất biến tồn tại dưới hình thái tư liệu lao động (máy móc, nhà xưởng)',
    note: 'Giá trị hao mòn dần và chuyển vào sản phẩm theo mức độ hao mòn [63, 64].'
  },
  {
    pairId: 'pair-51',
    concept: 'Tư bản lưu động',
    definition: 'Bộ phận tư bản tồn tại dưới hình thái sức lao động, nguyên nhiên vật liệu, phụ liệu',
    note: 'Giá trị được chuyển toàn bộ vào sản phẩm sau một chu kỳ sản xuất [63, 64].'
  },
  {
    pairId: 'pair-52',
    concept: "Tỷ suất giá trị thặng dư (m')",
    definition: 'Tỷ lệ phần trăm giữa giá trị thặng dư (m) và tư bản khả biến (v)',
    note: "Công thức: $m' = \\frac{m}{v} \\times 100\\%$ [65, 66]."
  },
  {
    pairId: 'pair-53',
    concept: 'Khối lượng giá trị thặng dư (M)',
    definition: 'Tổng số lượng giá trị thặng dư mà nhà tư bản thu được',
    note: "Công thức: $M = m' \\cdot V$ (V là tổng tư bản khả biến) [67, 68]."
  },
  {
    pairId: 'pair-54',
    concept: 'Sản xuất giá trị thặng dư tuyệt đối',
    definition: 'Giá trị thặng dư thu được do kéo dài ngày lao động vượt quá thời gian lao động tất yếu',
    note: 'Chủ yếu áp dụng trong giai đoạn đầu của chủ nghĩa tư bản [67, 68].'
  },
  {
    pairId: 'pair-55',
    concept: 'Sản xuất giá trị thặng dư tương đối',
    definition: 'Giá trị thặng dư thu được nhờ rút ngắn thời gian lao động tất yếu',
    note: 'Làm giảm giá trị sức lao động bằng cách giảm giá trị tư liệu sinh hoạt [69, 70].'
  },
  {
    pairId: 'pair-56',
    concept: 'Giá trị thặng dư siêu ngạch',
    definition: 'Phần giá trị thặng dư thu thêm được so với xã hội trong những trường hợp cá biệt',
    note: 'Là hình thái điển hình của giá trị thặng dư tương đối [69, 70].'
  },
  {
    pairId: 'pair-57',
    concept: 'Tích lũy tư bản',
    definition: 'Quá trình sản xuất tư bản chủ nghĩa lặp đi lặp lại không ngừng',
    note: 'Có hai hình thức: tích lũy giản đơn và tích lũy mở rộng [71, 72].'
  },
  {
    pairId: 'pair-58',
    concept: 'Tích tụ tư bản',
    definition: 'Sự tăng quy mô của tư bản bằng cách biến một phần giá trị thặng dư thành tư bản phụ thêm',
    note: 'Là kết quả trực tiếp của tích lũy tư bản [73, 74].'
  },
  {
    pairId: 'pair-59',
    concept: 'Tập trung tư bản',
    definition: 'Sự tăng lên của quy mô tư bản cá biệt không làm tăng quy mô tư bản xã hội',
    note: 'Thực hiện thông qua sáp nhập các tư bản cá biệt [73, 74].'
  },
  {
    pairId: 'pair-60',
    concept: 'Cấu tạo kỹ thuật của tư bản',
    definition: 'Mối quan hệ giữa số lượng tư liệu sản xuất và số lượng lao động được sử dụng',
    note: 'Quyết định bởi trình độ kỹ thuật và phản ánh sự biến đổi của nó [75, 76].'
  },
  {
    pairId: 'pair-61',
    concept: 'Cấu tạo hữu cơ của tư bản (c/v)',
    definition: 'Tỷ lệ giữa tư bản bất biến (c) và tư bản khả biến (v) xét về mặt giá trị',
    note: 'Tăng lên không ngừng trong quá trình tích lũy [75, 76].'
  },
  {
    pairId: 'pair-62',
    concept: 'Chi phí sản xuất (k)',
    definition: 'Bộ phận giá trị của hàng hóa, bao gồm giá trị tư liệu sản xuất tiêu dùng và giá trị sức lao động',
    note: 'Công thức: $k = c + v$ [77, 78].'
  },
  {
    pairId: 'pair-63',
    concept: 'Lợi nhuận (p)',
    definition: 'Khoản chênh lệch bằng giá trị thặng dư được thu về sau khi bù đắp chi phí sản xuất',
    note: 'Lợi nhuận là hình thái chuyển hóa của giá trị thặng dư trên bề mặt thị trường [77, 78].'
  },
  {
    pairId: 'pair-64',
    concept: "Tỷ suất lợi nhuận (p')",
    definition: 'Tỷ lệ phần trăm giữa lợi nhuận (p) và toàn bộ giá trị của tư bản ứng trước (c+v)',
    note: "Công thức: $p' = \\frac{p}{c+v} \\times 100\\%$ [79, 80]."
  },
  {
    pairId: 'pair-65',
    concept: 'Lợi nhuận bình quân ($\\bar{P}$)',
    definition: 'Số lợi nhuận bằng nhau mà nhà tư bản thu được khi đầu tư vào các ngành khác nhau',
    note: 'Hình thành do cạnh tranh giữa các ngành [81, 82].'
  },
  {
    pairId: 'pair-66',
    concept: 'Giá cả sản xuất (GCSX)',
    definition: 'Giá cả hàng hóa chuyển hóa thành giá cả có lợi nhuận bình quân',
    note: 'Công thức: $GCSX = k + \\bar{P}$ [81, 82].'
  },
  {
    pairId: 'pair-67',
    concept: 'Lợi nhuận thương nghiệp',
    definition: 'Phần chênh lệch giữa giá bán và giá mua hàng hóa của nhà tư bản thương nghiệp',
    note: 'Là một phần của giá trị thặng dư được nhường lại cho tư bản thương nghiệp [83, 84].'
  },
  {
    pairId: 'pair-68',
    concept: 'Lợi tức',
    definition: 'Phần của lợi nhuận bình quân mà người vay trả cho người cho vay vì sử dụng lượng tiền nhàn rỗi',
    note: 'Nguồn gốc là giá trị thặng dư sinh ra do sử dụng tiền vay [83, 84].'
  },
  {
    pairId: 'pair-69',
    concept: 'Tư bản cho vay',
    definition: "Hình thái biến tướng điển hình nhất của tư bản, vận động theo công thức T – T'",
    note: 'Mang đặc điểm: quyền sở hữu tách khỏi quyền sử dụng và là hàng hóa đặc biệt [85, 86].'
  },
  {
    pairId: 'pair-70',
    concept: 'Địa tô tư bản chủ nghĩa',
    definition:
      'Lợi nhuận siêu ngạch hoặc lợi nhuận bình quân còn lại sau khi trừ đi lợi nhuận bình quân của nhà tư bản kinh doanh nông nghiệp',
    note: 'Phần giá trị thặng dư mà nhà tư bản trả cho địa chủ [87, 88].'
  },
  {
    pairId: 'pair-71',
    concept: 'Địa tô chênh lệch I',
    definition: 'Phần lợi nhuận siêu ngạch thu được do độ màu mỡ và vị trí đất đai thuận lợi',
    note: 'Địa tô này tồn tại thường xuyên [87, 88].'
  },
  {
    pairId: 'pair-72',
    concept: 'Địa tô tuyệt đối',
    definition: 'Địa tô mà nhà tư bản phải trả cho địa chủ dù đất đai có tốt hay xấu',
    note: 'Nguồn gốc là lợi nhuận siêu ngạch và lợi nhuận bình quân [87, 88].'
  },
  {
    pairId: 'pair-73',
    concept: 'Giá cả đất đai',
    definition: 'Biểu hiện bằng tiền của địa tô',
    note: 'Tính trên cơ sở so sánh với tỷ suất lợi tức ngắn hạn ngân hàng (Địa tô / Tỷ suất lợi tức) [58, 89].'
  },

  // Chương 4: Cạnh tranh và Độc quyền trong nền kinh tế thị trường
  {
    pairId: 'pair-74',
    concept: 'Độc quyền',
    definition: 'Sự liên minh giữa các doanh nghiệp lớn, có khả năng chi phối sản xuất và giá cả để thu lợi nhuận cao',
    note: 'Kết quả của quá trình tích tụ và tập trung sản xuất [90, 91].'
  },
  {
    pairId: 'pair-75',
    concept: 'Lợi nhuận độc quyền',
    definition: 'Khoản lợi nhuận cao thu được từ hoạt động độc quyền',
    note: 'Nguồn gốc là do lao động không công của công nhân và giá trị thặng dư của các nhà tư bản nhỏ [92, 93].'
  },
  {
    pairId: 'pair-76',
    concept: 'Giá cả độc quyền',
    definition: 'Giá cả do các tổ chức độc quyền áp đặt trên thị trường',
    note: 'Thường cao khi bán và thấp khi mua [92, 93].'
  },
  {
    pairId: 'pair-77',
    concept: 'Độc quyền Nhà nước',
    definition: 'Kiểu độc quyền trong đó Nhà nước thực hiện nắm giữ vị thế độc quyền dựa trên sức mạnh của nó',
    note: 'Là sự kết hợp sức mạnh của độc quyền tư nhân và sức mạnh Nhà nước [94, 95].'
  },
  {
    pairId: 'pair-78',
    concept: 'Xã hội hóa sản xuất',
    definition: 'Sự phát triển của phân công lao động, sản xuất tập trung quy mô lớn',
    note: 'Là nguồn gốc khách quan của độc quyền [94, 95].'
  },
  {
    pairId: 'pair-79',
    concept: 'Cartel (Các-ten)',
    definition: 'Tổ chức độc quyền dựa trên thỏa thuận về giá cả, sản lượng hàng hóa, thị trường, kỳ hạn thanh toán',
    note: 'Các xí nghiệp tham gia giữ độc lập cả về sản xuất và lưu thông [96, 97].'
  },
  {
    pairId: 'pair-80',
    concept: 'Syndicate (Xanh-đi-ca)',
    definition:
      'Tổ chức độc quyền trong đó các xí nghiệp giữ độc lập về sản xuất, nhưng chung nhau độc quyền lưu thông',
    note: 'Mục đích là thống nhất mua bán nguyên liệu và bán hàng hóa để thu lợi nhuận độc quyền [96, 97].'
  },
  {
    pairId: 'pair-81',
    concept: 'Trust (Tơ-rớt)',
    definition: 'Tổ chức độc quyền mà các xí nghiệp tham gia mất độc lập cả về sản xuất và lưu thông',
    note: 'Các xí nghiệp trở thành cổ đông của một công ty quản lý chung [96, 97].'
  },
  {
    pairId: 'pair-82',
    concept: 'Tư bản tài chính',
    definition: 'Sự liên minh giữa tư bản độc quyền trong công nghiệp và ngân hàng',
    note: 'Đại diện cho tầng lớp tư bản độc quyền chi phối bộ máy Nhà nước [98, 99].'
  },
  {
    pairId: 'pair-83',
    concept: 'Xuất khẩu tư bản',
    definition: 'Đưa tư bản ra nước ngoài nhằm mục đích thu lợi nhuận độc quyền cao',
    note: 'Có hai hình thức: trực tiếp (FDI) và gián tiếp [100, 101].'
  },

  // Chương 5: Kinh tế thị trường định hướng xã hội chủ nghĩa và Quan hệ lợi ích kinh tế ở Việt Nam
  {
    pairId: 'pair-84',
    concept: 'Kinh tế thị trường định hướng XHCN',
    definition: 'Kinh tế hàng hóa vận hành theo cơ chế thị trường nhưng có sự quản lý, điều tiết của Nhà nước XHCN',
    note: "Hướng tới mục tiêu 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh' [102-105]."
  },
  {
    pairId: 'pair-85',
    concept: 'Mục tiêu KTTT định hướng XHCN',
    definition:
      "Phát triển lực lượng sản xuất, xây dựng cơ sở vật chất, nâng cao đời sống nhân dân, đạt 'dân giàu, nước mạnh...'",
    note: 'Là sự thống nhất giữa mục tiêu kinh tế thị trường tư bản chủ nghĩa và mục tiêu xã hội [106, 107].'
  },
  {
    pairId: 'pair-86',
    concept: 'Nội dung kinh tế của sở hữu',
    definition: 'Biểu hiện ở khả năng chiếm hữu nguồn lực và kết quả lao động, mang lại lợi ích kinh tế cho chủ sở hữu',
    note: 'Chủ sở hữu chịu trách nhiệm trực tiếp vào quá trình sản xuất [108, 109].'
  },
  {
    pairId: 'pair-87',
    concept: 'Thế chế kinh tế',
    definition: 'Hệ thống quy tắc, luật pháp, bộ máy quản lý và cơ chế vận hành nhằm điều chỉnh các hoạt động kinh tế',
    note: 'Là nền tảng để thực hiện điều chỉnh vĩ mô và vi mô [110, 111].'
  },
  {
    pairId: 'pair-88',
    concept: 'Lợi ích kinh tế',
    definition: 'Sự thỏa mãn nhu cầu vật chất và tinh thần mà con người nhận được thông qua hoạt động kinh tế',
    note: 'Là động lực trực tiếp của các hoạt động kinh tế [112-115].'
  },
  {
    pairId: 'pair-89',
    concept: 'Lợi ích cá nhân',
    definition: 'Sự thỏa mãn nhu cầu cá nhân, là cơ sở, nền tảng của các loại lợi ích khác',
    note: 'Là động lực trực tiếp cho các chủ thể và hoạt động kinh tế - xã hội [116, 117].'
  },
  {
    pairId: 'pair-90',
    concept: 'Lợi ích tập thể/nhóm',
    definition: 'Lợi ích liên kết cá nhân với cộng đồng, thực hiện thông qua hợp tác, tổ chức',
    note: 'Các tổ chức kinh tế cùng nhau hành động để thực hiện lợi ích chung [116, 117].'
  },
  {
    pairId: 'pair-91',
    concept: 'Lợi ích xã hội',
    definition: 'Tổng hòa của các lợi ích kinh tế, đóng vai trò định hướng cho hoạt động của các chủ thể',
    note: 'Yêu cầu phải đảm bảo sự thống nhất giữa các lợi ích [116, 117].'
  },
  {
    pairId: 'pair-92',
    concept: 'Quan hệ lợi ích kinh tế',
    definition:
      'Sự tương tác giữa người với người, giữa các cộng đồng, giữa các tổ chức kinh tế và Nhà nước về mục tiêu kinh tế',
    note: 'Phức tạp, chịu tác động của nhiều yếu tố như lực lượng sản xuất, chính sách Nhà nước [118-121].'
  },
  {
    pairId: 'pair-93',
    concept: 'Hài hòa các quan hệ lợi ích',
    definition: 'Đảm bảo sự thống nhất và cân bằng giữa lợi ích cá nhân, tập thể và xã hội',
    note: 'Cần có sự can thiệp của Nhà nước để quản lý mâu thuẫn [122, 123].'
  },

  // Chương 6: Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế của Việt Nam
  {
    pairId: 'pair-94',
    concept: 'Công nghiệp hóa',
    definition:
      'Quá trình chuyển đổi nền sản xuất xã hội dựa trên lao động thủ công sang nền sản xuất chủ yếu dựa trên lao động bằng máy móc',
    note: 'Nhằm nâng cao năng suất lao động xã hội [124, 125].'
  },
  {
    pairId: 'pair-95',
    concept: 'Cách mạng công nghiệp lần thứ nhất (1.0)',
    definition: 'Sử dụng năng lượng nước và hơi nước, cơ giới hóa một phần sản xuất',
    note: 'Diễn ra ở Anh, bắt đầu từ giữa thế kỷ XVIII đến giữa thế kỷ XIX [126, 127].'
  },
  {
    pairId: 'pair-96',
    concept: 'Cách mạng công nghiệp lần thứ hai (2.0)',
    definition: 'Sử dụng năng lượng điện và động cơ điện, tạo ra dây chuyền sản xuất hàng loạt',
    note: 'Diễn ra vào cuối thế kỷ XIX, đầu thế kỷ XX [126, 127].'
  },
  {
    pairId: 'pair-97',
    concept: 'Cách mạng công nghiệp lần thứ ba (3.0)',
    definition: 'Sử dụng công nghệ thông tin và máy tính, tự động hóa sản xuất',
    note: 'Bắt đầu từ khoảng những năm 60 của thế kỷ XX [126, 127].'
  },
  {
    pairId: 'pair-98',
    concept: 'Cách mạng công nghiệp lần thứ tư (4.0)',
    definition: 'Liên kết giữa thế giới thực và ảo, hiện thực hóa công việc thông minh và hiệu quả nhất',
    note: 'Dựa trên sự phát triển của công nghệ số và robot [126-129].'
  },
  {
    pairId: 'pair-99',
    concept: 'Hiện đại hóa',
    definition: 'Quá trình ứng dụng và chuyển giao tiến bộ khoa học công nghệ vào sản xuất',
    note: 'Thực hiện đồng thời với công nghiệp hóa [130, 131].'
  },
  {
    pairId: 'pair-100',
    concept: 'Công nghiệp hóa, hiện đại hóa ở Việt Nam',
    definition:
      'Quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế - xã hội',
    note: 'Sử dụng lao động thủ công công nghệ thấp bằng công nghệ tiên tiến, hiện đại [130, 131].'
  },
  {
    pairId: 'pair-101',
    concept: 'Hội nhập kinh tế quốc tế',
    definition: 'Quá trình một quốc gia gắn kết nền kinh tế của mình với nền kinh tế thế giới',
    note: 'Được thực hiện trên cơ sở sự chi phối của các chuẩn mực chung quốc tế [132, 133].'
  },
  {
    pairId: 'pair-102',
    concept: 'Toàn cầu hóa (Globalization)',
    definition: 'Quá trình liên kết và phụ thuộc lẫn nhau ngày càng tăng trên quy mô toàn cầu',
    note: 'Diễn ra trên nhiều phương diện: kinh tế, chính trị, văn hóa, xã hội [132, 133].'
  },
  {
    pairId: 'pair-103',
    concept: 'Toàn cầu hóa kinh tế',
    definition: 'Sự gia tăng nhanh chóng các hoạt động kinh tế vượt qua biên giới quốc gia, khu vực',
    note: 'Lôi cuốn tất cả các nước vào hệ thống phân công lao động thế giới [132-135].'
  },
  {
    pairId: 'pair-104',
    concept: 'Kinh tế độc lập tự chủ',
    definition: 'Nền kinh tế không bị lệ thuộc, phụ thuộc vào nước ngoài hoặc các tổ chức kinh tế nước ngoài',
    note: 'Được xây dựng trên cơ sở phát huy sức mạnh nội tại của quốc gia [136, 137].'
  },

  // CÁC KHÁI NIỆM MỞ RỘNG & CHI TIẾT
  {
    pairId: 'pair-105',
    concept: 'Kinh tế chính trị cổ điển Anh',
    definition: 'Phát triển trong thế kỷ XVIII đến nửa đầu thế kỷ XIX, khởi đầu với A.Smith và kết thúc với D.Ricardo',
    note: 'Đã rút ra quy luật giá trị lao động [138, 139].'
  },
  {
    pairId: 'pair-106',
    concept: 'Giá trị trao đổi',
    definition:
      'Quan hệ về lượng, tỷ lệ trao đổi giữa giá trị sử dụng của loại hàng hóa này với giá trị sử dụng của loại hàng hóa khác',
    note: 'Là hình thái biểu hiện bên ngoài của giá trị hàng hóa [18, 19].'
  },
  {
    pairId: 'pair-107',
    concept: 'Tác động của Quy luật Giá trị',
    definition: 'Điều tiết sản xuất và lưu thông hàng hóa; kích thích cải tiến kỹ thuật, hợp lý hóa sản xuất',
    note: 'Thực hiện qua sự vận động của giá cả xoay quanh giá trị xã hội [140, 141].'
  },
  {
    pairId: 'pair-108',
    concept: 'Hao phí lao động quá khứ',
    definition: 'Chi phí tư bản bất biến (c) đã tiêu dùng để sản xuất ra hàng hóa',
    note: 'Thể hiện qua giá trị tư liệu sản xuất đã sử dụng [20, 21].'
  },
  {
    pairId: 'pair-109',
    concept: 'Hao phí lao động mới kết tinh thêm',
    definition: 'Chi phí tư bản khả biến (v) và giá trị thặng dư (m)',
    note: 'Do người lao động trực tiếp tạo ra trong quá trình sản xuất [20, 21].'
  },
  {
    pairId: 'pair-110',
    concept: 'Giá trị hàng hóa sức lao động',
    definition:
      'Đo bằng thời gian lao động xã hội cần thiết để sản xuất ra tư liệu sinh hoạt tái sản xuất sức lao động',
    note: 'Bao gồm chi phí vật chất và tinh thần [54, 55].'
  },
  {
    pairId: 'pair-111',
    concept: 'Giá trị mới (v+m)',
    definition: 'Phần giá trị do lao động của người làm thuê tạo ra trong quá trình sản xuất',
    note: 'Là tổng của tư bản khả biến và giá trị thặng dư [61, 62].'
  },
  {
    pairId: 'pair-112',
    concept: 'Tuần hoàn của tư bản',
    definition: 'Sự vận động của tư bản lần lượt trải qua ba giai đoạn: tiền tệ, sản xuất, hàng hóa',
    note: "Công thức: $T - H... S X... H' - T'$ [142, 143]."
  },
  {
    pairId: 'pair-113',
    concept: 'Chu chuyển của tư bản',
    definition: 'Sự tuần hoàn của tư bản được xét trong mối liên hệ với sự lặp lại và tính chu kỳ của nó',
    note: 'Đo bằng tổng thời gian của một chu kỳ [142, 143].'
  },
  {
    pairId: 'pair-114',
    concept: 'Giá trị thặng dư (Nguồn gốc)',
    definition: 'Do hao phí sức lao động của người lao động trong quá trình sản xuất',
    note: 'Người lao động tạo ra giá trị mới lớn hơn giá trị sức lao động [54, 55, 58].'
  },
  {
    pairId: 'pair-115',
    concept: "Biện pháp tăng Tỷ suất lợi nhuận (p')",
    definition: 'Tăng tỷ suất giá trị thặng dư, tăng tốc độ chu chuyển của tư bản, tiết kiệm tư bản bất biến',
    note: "Tỷ suất lợi nhuận chịu ảnh hưởng trực tiếp từ m', c/v, tốc độ chu chuyển [144, 145]."
  },
  {
    pairId: 'pair-116',
    concept: 'Điều kiện hình thành Lợi nhuận bình quân',
    definition: 'Cạnh tranh giữa các ngành và sự tự do di chuyển tư bản giữa các ngành sản xuất',
    note: 'Dẫn đến việc giá cả hàng hóa chuyển hóa thành giá cả sản xuất [81, 82].'
  },
  {
    pairId: 'pair-117',
    concept: "Tỷ suất lợi tức (Z')",
    definition: 'Tỷ lệ phần trăm giữa lợi tức (Z) và tư bản cho vay (TBCV)',
    note: 'Bị chi phối bởi tỷ suất lợi nhuận bình quân [85, 86].'
  },
  {
    pairId: 'pair-118',
    concept: 'Địa tô chênh lệch II',
    definition: 'Phần lợi nhuận siêu ngạch thu được nhờ đầu tư thêm tư bản để cải tạo, làm tăng độ màu mỡ đất đai',
    note: 'Không phụ thuộc vào vị trí và chất lượng tự nhiên của đất [87, 88].'
  },
  {
    pairId: 'pair-119',
    concept: 'Phản ánh quan hệ sở hữu',
    definition: 'Quan hệ sở hữu là cơ sở để thực hiện các lợi ích kinh tế giữa các chủ thể',
    note: 'Thực hiện lợi ích kinh tế phải thông qua quan hệ sở hữu [108, 109].'
  },
  {
    pairId: 'pair-120',
    concept: 'Kinh tế tri thức',
    definition:
      'Nền kinh tế trong đó nguồn lực quan trọng hàng đầu là tri thức, quyết định sự tăng trưởng và phát triển kinh tế',
    note: 'Tri thức trở thành tài nguyên quan trọng nhất [146, 147].'
  },
  {
    pairId: 'pair-121',
    concept: 'Đầu tư trực tiếp nước ngoài (FDI)',
    definition:
      'Hình thức xuất khẩu tư bản bằng cách xây dựng các xí nghiệp mới hoặc mua xí nghiệp hiện có ở nước nhận đầu tư',
    note: 'Thực hiện trực tiếp việc kinh doanh [100, 101].'
  },
  {
    pairId: 'pair-122',
    concept: 'Đầu tư gián tiếp',
    definition: 'Hình thức xuất khẩu tư bản thông qua việc cho vay nợ, mua bán cổ phiếu, trái phiếu',
    note: 'Không trực tiếp tham gia quản lý hoạt động đầu tư [148, 149].'
  },
  {
    pairId: 'pair-123',
    concept: 'Lợi ích người lao động',
    definition:
      'Thu nhập dưới hình thức tiền lương (hay tiền công) và sự quản lý, điều hành của người sử dụng lao động',
    note: 'Là người bán hàng hóa sức lao động [150, 151].'
  },
  {
    pairId: 'pair-124',
    concept: 'Lợi ích người sử dụng lao động',
    definition: 'Lợi ích thu được qua quá trình kinh doanh, thông qua lợi nhuận',
    note: 'Là người mua hàng hóa sức lao động [150, 151].'
  },
  {
    pairId: 'pair-125',
    concept: 'Phương pháp tư duy duy vật biện chứng',
    definition:
      'Phương pháp nghiên cứu xem xét sự vật, hiện tượng trong quá trình vận động, phát triển không ngừng và trong mối liên hệ phổ biến',
    note: 'Là phương pháp nghiên cứu đặc trưng của Kinh tế Chính trị Mác - Lênin [152, 153].'
  }
]
export interface GameCard {
  id: string
  pairId: string
  role: 'concept' | 'definition'
  text: string
  isFlipped: boolean
  isMatched: boolean
}

// Function để shuffle array sử dụng Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function createGameCards(): GameCard[] {
  const cards: GameCard[] = []

  // Chọn ngẫu nhiên 6 cặp từ tất cả cardPairs
  const shuffledPairs = shuffleArray(cardPairs)
  const selectedPairs = shuffledPairs.slice(0, 6)

  selectedPairs.forEach((pair) => {
    cards.push({
      id: `${pair.pairId}-concept`,
      pairId: pair.pairId,
      role: 'concept',
      text: pair.concept,
      isFlipped: false,
      isMatched: false
    })

    cards.push({
      id: `${pair.pairId}-definition`,
      pairId: pair.pairId,
      role: 'definition',
      text: pair.definition,
      isFlipped: false,
      isMatched: false
    })
  })

  return cards
}
