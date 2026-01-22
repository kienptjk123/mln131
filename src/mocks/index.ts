import type { Graph } from "@/models/types";

export const sampleGraph: Graph = {
  start: "intro",
  nodes: {
    // 🕹️ Mở đầu
    intro: {
      id: "intro",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/CONTEXT.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/CONTEXT.mp4",
      title: "KHỞI NGUỒN VÀ HẬU QUẢ CHIẾN TRANH",
      choices: [
        { label: "Tiếp tục", target: "phase_1986_A" }
      ],
    },
    
    // 🕹️ Giai đoạn 1 — 1986
    phase_1986_A: {
      id: "phase_1986_A",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION1A.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION1A.mp4",
      title: "Giai đoạn 1 — 1986: Ngã rẽ Đổi mới",
      choices: [
        { label: "Giữ chặt hệ thống điều hành tập trung, củng cố vai trò nhà nước trong phân phối, chú trọng ổn định vĩ mô và an ninh xã hội.", target: "phase_1986_C" },
        { label: "Mở rộng quyền tự chủ cho các đơn vị sản xuất, nới khung cho hoạt động ngoài nhà nước, thí điểm chính sách thị trường ở nhiều lĩnh vực.", target: "phase_1986_B" },
      ],
    },
    phase_1986_B: {
      id: "phase_1986_B",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION1B.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION1B.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_1995_A" }],
    },
    phase_1986_C: {
      id: "phase_1986_C",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION1C.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION1C.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_1995_A" }],
    },

    // 🕹️ Giai đoạn 2 — 1995
    phase_1995_A: {
      id: "phase_1995_A",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION2A.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION2A.mp4",
      title: "Giai đoạn 2 — 1995: Cánh cửa khu vực",
      choices: [
        { label: "Tham gia cơ chế hợp tác khu vực, chấp nhận nới lỏng biện pháp bảo hộ để đổi lấy tiếp cận thị trường lớn hơn.", target: "phase_1995_B" },
        { label: "Giữ mức bảo hộ hiện tại, tập trung phát triển nội lực trước khi mở rộng hợp tác khu vực.", target: "phase_1995_C" },
      ],
    },
    phase_1995_B: {
      id: "phase_1995_B",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION2B.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION2B.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_2007_A" }],
    },
    phase_1995_C: {
      id: "phase_1995_C",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION2C.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION2C.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_2007_A" }],
    },

    // 🕹️ Giai đoạn 3 — 2007
    phase_2007_A: {
      id: "phase_2007_A",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION3A.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION3A.mp4",
      title: "Giai đoạn 3 — 2007: Cánh cửa toàn cầu",
      choices: [
        { label: "Chấp nhận tham gia định chế thương mại toàn cầu, thực hiện cam kết mở cửa sâu rộng.", target: "phase_2007_B" },
        { label: "Từ chối hoặc hoãn tham gia, tiếp tục củng cố năng lực nội tại trước khi mở cửa hoàn toàn.", target: "phase_2007_C" },
      ],
    },
    phase_2007_B: {
      id: "phase_2007_B",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION3B.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION3B.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_2015_A" }],
    },
    phase_2007_C: {
      id: "phase_2007_C",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION3C.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION3C.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_2015_A" }],
    },

    // 🕹️ Giai đoạn 4 — 2015
    phase_2015_A: {
      id: "phase_2015_A",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION4A.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION4A.mp4",
      title: "Giai đoạn 4 — 2015: Hiệp định thế hệ mới",
      choices: [
        { label: "Tham gia các hiệp định mới, chấp nhận tiêu chuẩn và ràng buộc cao để đổi lấy tiếp cận thị trường cao giá trị.", target: "phase_2015_B" },
        { label: "Hạn chế tham gia các hiệp định đòi hỏi cải cách lớn, tập trung vào mở rộng những hiệp định ít ràng buộc hơn.", target: "phase_2015_C" },
      ],
    },
    phase_2015_B: {
      id: "phase_2015_B",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION4B.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION4B.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_2025_A" }],
    },
    phase_2015_C: {
      id: "phase_2015_C",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION4C.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION4C.mp4",
      choices: [{ label: "Tiếp tục", target: "phase_2025_A" }],
    },

    // 🕹️ Giai đoạn 5 — 2025
    phase_2025_A: {
      id: "phase_2025_A",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION5A.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION5A.mp4",
      title: "Giai đoạn 5 — 2025: Chuyển đổi xanh & số hóa",
      choices: [
        { label: "Ưu tiên mở rộng sản xuất hiện có, tận dụng lợi thế lao động và cơ sở hạ tầng hiện tại để đảm bảo việc làm.", target: "phase_2025_C" },
        { label: "Ưu tiên đầu tư cho chuyển đổi xanh và số hóa, chấp nhận chi phí đầu tư lớn ban đầu để hy vọng lợi ích dài hạn.", target: "phase_2025_B" },
      ],
    },
    phase_2025_B: {
      id: "phase_2025_B",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION5B.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION5B.mp4",
      choices: [{ label: "Tiếp tục", target: "ending_1" }],
    },
    phase_2025_C: {
      id: "phase_2025_C",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION5C.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/SECTION5C.mp4",
      choices: [{ label: "Tiếp tục", target: "ending_2" }],
    },

    // 🕹️ Kết thúc
    ending_1: {
      id: "ending_1",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/Ending1.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/Ending1.mp4",
      choices: [{ label: "Kết thúc", target: "phase_1986" }],
    },

    ending_2: {
      id: "ending_2",
      src: "https://integravia.s3.ap-southeast-1.amazonaws.com/Ending2.mp4",
      poster: "https://integravia.s3.ap-southeast-1.amazonaws.com/Ending2.mp4",
      choices: [{ label: "Kết thúc", target: "phase_1986" }],
    },
  },
};
