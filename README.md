# 🌏 INTEGRAVIA

## Hành Trình Hội Nhập Kinh Tế Việt Nam

<div align="center">
  <img src="./public/integravia.jpg" alt="INTEGRAVIA Logo" width="120" height="120" />
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.7-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 🚀 Tổng Quan

**INTEGRAVIA** là một nền tảng giáo dục tương tác hiện đại, mang đến cái nhìn toàn diện về hành trình hội nhập kinh tế quốc tế của Việt Nam. Dự án kết hợp công nghệ web tiên tiến với nội dung giáo dục chất lượng cao, tạo ra trải nghiệm học tập đầy hấp dẫn và trực quan.

### 🎯 Mục Tiêu Dự Án

- 📊 **Trực quan hóa dữ liệu**: Biến những con số kinh tế phức tạp thành các biểu đồ và bản đồ tương tác dễ hiểu
- 🎮 **Học tập tương tác**: Cung cấp trải nghiệm học tập đa phương tiện với video, flashcard và câu chuyện tương tác
- 🌍 **Hiểu biết toàn cầu**: Giúp người dùng nắm bắt vị thế của Việt Nam trong bối cảnh kinh tế thế giới
- 📚 **Giáo dục chất lượng**: Mang kiến thức kinh tế chính trị đến gần hơn với sinh viên và công ch중

---

## ✨ Tính Năng Nổi Bật

### 🗺️ **Bản Đồ Tương Tác**

- Khám phá **170+ quốc gia đối tác** của Việt Nam
- Tìm hiểu chi tiết về **16 hiệp định FTA** đã ký kết
- Phân tích tác động kinh tế của từng thỏa thuận thương mại

### 📊 **Dashboard Thống Kê Động**

- Theo dõi tăng trưởng GDP **7.5%** trung bình hàng năm
- Trực quan hóa dữ liệu xuất nhập khẩu theo thời gian thực
- Biểu đồ tương tác về chuyển đổi cơ cấu kinh tế

### 🎮 **Câu Chuyện Tương Tác**

- Trải nghiệm 5 giai đoạn lịch sử quan trọng (1986-2025)
- Video tương tác với hệ thống lựa chọn đa nhánh
- Mô phỏng các quyết định chính sách quan trọng

### 🃏 **Hệ Thống Flashcard Thông Minh**

- Bộ thẻ học tập với **50+ khái niệm** kinh tế quan trọng
- Thuật toán spaced repetition để tối ưu hóa ghi nhớ
- Hệ thống điểm số và bảng xếp hạng

### 📈 **Phân Tích Chính Sách & Triển Vọng**

- Đánh giá tác động của các chính sách hội nhập
- Dự báo xu hướng phát triển kinh tế
- Phân tích cơ hội và thách thức trong tương lai

---

## 🛠️ Công Nghệ Sử Dụng

### **Frontend Framework**

- ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white) **React 19** - UI framework hiện đại
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white) **TypeScript** - Type safety và developer experience tốt hơn
- ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=white) **Vite** - Build tool nhanh chóng

### **Styling & UI**

- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.7-38B2AC?logo=tailwind-css&logoColor=white) **Tailwind CSS 4** - Utility-first CSS framework
- ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-000000?logo=radix-ui&logoColor=white) **Radix UI** - Accessible component primitives
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-FF6B9D?logo=framer&logoColor=white) **Framer Motion** - Animation library

### **Data Visualization**

- ![Recharts](https://img.shields.io/badge/Recharts-2.15.4-8884D8) **Recharts** - Biểu đồ React declarative
- **React Simple Maps** - Bản đồ tương tác
- **MapLibre GL** - Mapping và GIS

### **State Management & Utils**

- **Zustand** - State management nhẹ và đơn giản
- **React Hook Form** - Form handling hiệu quả
- **Axios** - HTTP client
- **Date-fns** - Date utilities

---

## 🏗️ Kiến Trúc Dự Án

```
src/
├── app/                          # Core application
│   ├── components/              # React components
│   │   ├── landing/            # Landing page components
│   │   │   ├── hero.tsx        # Hero section
│   │   │   ├── interactive-map.tsx
│   │   │   ├── economic-timeline.tsx
│   │   │   └── team-section.tsx
│   │   ├── flashcard/          # Flashcard game components
│   │   ├── interactive-map/    # Interactive map features
│   │   └── ui/                 # Reusable UI components
│   ├── pages/                  # Page components
│   ├── lib/                    # Utilities và helpers
│   ├── data/                   # Static data
│   └── contexts/               # React contexts
├── components/                  # Shared components
└── mocks/                      # Mock data cho development
```

---

## 🚀 Hướng Dẫn Cài Đặt

### **Yêu Cầu Hệ Thống**

- Node.js 18+
- npm hoặc yarn
- Git

### **1. Clone Repository**

```bash
git clone https://github.com/leducloc-hcm/INTEGRAVIA-MLN122.git
cd INTEGRAVIA-MLN122
```

### **2. Cài Đặt Dependencies**

```bash
npm install
# hoặc
yarn install
```

### **3. Khởi Chạy Development Server**

```bash
npm run dev
# hoặc
yarn dev
```

### **4. Truy Cập Ứng Dụng**

Mở trình duyệt và truy cập: `http://localhost:5173`

---

## 📜 Scripts Có Sẵn

| Script                 | Mô Tả                        |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Khởi chạy development server |
| `npm run build`        | Build production             |
| `npm run preview`      | Preview build production     |
| `npm run lint`         | Chạy ESLint                  |
| `npm run lint:fix`     | Tự động fix lỗi ESLint       |
| `npm run prettier`     | Kiểm tra code formatting     |
| `npm run prettier:fix` | Tự động format code          |

---

## 👥 Đội Ngũ Phát Triển

<div align="center">

### 🎯 **Team Leader**

**👨‍💼 Phạm Nguyễn Anh Phương** • `SS181218`  
_Quản lý dự án và phát triển tổng thể_

---

### 💻 **Developers**

<table>
  <tr>
    <td align="center" width="33%">
      <strong>🔧 Lê Đức Lộc</strong><br/>
      <code>SE181673</code><br/>
      <em>Full-stack Developer</em>
    </td>
    <td align="center" width="33%">
      <strong>⚡ Nguyễn Trung Kiên</strong><br/>
      <code>SE181674</code><br/>
      <em>Frontend Developer</em>
    </td>
    <td align="center" width="33%">
      <strong>🚀 Lưu Thế Vinh</strong><br/>
      <code>SE181740</code><br/>
      <em>Backend Developer</em>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center" width="50%">
      <strong>🎨 Phạm Tiến Mạnh</strong><br/>
      <code>SE182274</code><br/>
      <em>UI/UX Developer</em>
    </td>
    <td align="center" width="50%">
      <strong>📊 Hoàng Thanh Duy</strong><br/>
      <code>SE182314</code><br/>
      <em>Data Visualization Developer</em>
    </td>
  </tr>
</table>

</div>

---

## 🌟 Tính Năng Đặc Biệt

### **🎯 Responsive Design**

- Tương thích hoàn hảo trên desktop, tablet và mobile
- UI/UX được tối ưu hóa cho mọi kích thước màn hình

### **♿ Accessibility**

- Tuân thủ tiêu chuẩn WCAG 2.1
- Hỗ trợ screen readers và keyboard navigation

### **⚡ Performance**

- Lazy loading cho images và components
- Code splitting tự động
- Optimized bundle size

### **🔍 SEO Friendly**

- Meta tags được tối ưu hóa
- Structured data markup
- Fast loading times

---

## 🤝 Đóng Góp

Chúng tôi luôn chào đón các đóng góp từ cộng đồng! Để đóng góp:

1. **Fork** repository
2. Tạo **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add some amazing feature'`)
4. **Push** lên branch (`git push origin feature/amazing-feature`)
5. Mở **Pull Request**

---

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file [LICENSE](./LICENSE) để biết thêm chi tiết.

---

## 📞 Liên Hệ

- **Website**: [integravia.io.vn](https://integravia.io.vn)
- **Facebook**: [@integravia.io.vn](https://www.facebook.com/integravia.io.vn)
- **Email**: contact@integravia.io.vn

---

## 🙏 Lời Cảm Ơn

Chúng tôi xin chân thành cảm ơn:

- **FPT University HCM** - Cung cấp môi trường học tập và nghiên cứu
- **Khoa Kỹ năng mềm** - Hỗ trợ kiến thức chuyên môn
- **Open Source Community** - Các thư viện và tools tuyệt vời

---

## 📊 Statistics

![GitHub stars](https://img.shields.io/github/stars/leducloc-hcm/INTEGRAVIA-MLN122?style=social)
![GitHub forks](https://img.shields.io/github/forks/leducloc-hcm/INTEGRAVIA-MLN122?style=social)
![GitHub issues](https://img.shields.io/github/issues/leducloc-hcm/INTEGRAVIA-MLN122)
![GitHub pull requests](https://img.shields.io/github/issues-pr/leducloc-hcm/INTEGRAVIA-MLN122)

---

<div align="center">
  <strong>
    🇻🇳 Được phát triển với ❤️ tại Việt Nam<br/>
    📚 Dự án môn học Chủ nghĩa xã hôị khoa học<br/>
    🏫 FPT University Ho Chi Minh City
  </strong>
  
  <br/><br/>
  
  **© 2025 - Bản quyền thuộc về nhóm Integravia. All rights reserved.**
</div>
