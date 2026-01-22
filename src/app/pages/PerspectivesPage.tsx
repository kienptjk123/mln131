'use client'
import { motion } from 'framer-motion'
import { Eye, MessageSquare, Users, Flag, Shield, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '@/components/landing/footer'

const misconceptions = [
  {
    icon: MessageSquare,
    myth: '"Một đảng duy nhất đẻ ra tham nhũng"',
    reality: 'Tham nhũng tồn tại ở cả chế độ đa đảng lẫn một đảng',
    evidence: [
      'Nhiều nước đa đảng cũng đối mặt tham nhũng nghiêm trọng',
      'Transparency International: Tham nhũng là vấn đề toàn cầu',
      'Nguyên nhân từ thiếu kiểm soát quyền lực, không phải số lượng đảng',
      'Việt Nam đang tích cực đấu tranh và đạt nhiều thành tựu'
    ],
    color: 'from-red-600 to-orange-600'
  },
  {
    icon: Flag,
    myth: '"Chế độ XHCN không thể chống tham nhũng"',
    reality: 'Việt Nam đang chứng minh quyết tâm và hiệu quả cao',
    evidence: [
      'Chiến dịch "Đốt lò" xử lý 170+ quan chức cấp cao, 168.000+ đảng viên bị kỷ luật',
      'Thu hồi 61.000 tỷ đồng tài sản tham nhũng',
      'Không có vùng cấm, xử lý cả cán bộ cấp cao',
      'CPI của Việt Nam cải thiện liên tục qua các năm'
    ],
    color: 'from-yellow-600 to-red-600'
  },
  {
    icon: Shield,
    myth: '"Đảng bao che cho cán bộ tham nhũng"',
    reality: 'Đảng kiên quyết tự chỉnh đốn, xử lý nghiêm minh',
    evidence: [
      'Xử lý kỷ luật đến cán bộ cấp Ủy viên Bộ Chính trị',
      'Công khai thông tin các vụ án tham nhũng',
      'Chỉ thị 05-CT/TW: "Không có vùng cấm"',
      'Đề cao trách nhiệm nêu gương của cán bộ lãnh đạo'
    ],
    color: 'from-red-700 to-yellow-700'
  }
]

const supervisionRoles = [
  {
    icon: Users,
    title: 'Giám sát của Nhân dân',
    description: 'Vai trò chủ thể trong giám sát hoạt động của cơ quan nhà nước và cán bộ',
    mechanisms: [
      'Qua đại biểu dân cử các cấp',
      'Phản ánh, kiến nghị trực tiếp',
      'Qua các phương tiện truyền thông',
      'Tham gia đối thoại với chính quyền'
    ],
    color: 'from-red-600 to-red-800'
  },
  {
    icon: Flag,
    title: 'Vai trò Mặt trận Tổ quốc',
    description: 'Tập hợp, động viên nhân dân tham gia giám sát xã hội',
    mechanisms: [
      'Tổ chức hội nghị hiệp thương',
      'Giám sát việc thực hiện chính sách',
      'Tiếp nhận phản ánh, kiến nghị của dân',
      'Đấu tranh chống tham nhũng, lãng phí'
    ],
    color: 'from-yellow-600 to-yellow-800'
  }
]

const transparencyMeasures = [
  {
    title: 'Công khai minh bạch',
    points: [
      'Công khai quy trình, thủ tục hành chính',
      'Công khai ngân sách, đấu thầu',
      'Công khai kết quả xử lý tham nhũng',
      'Nâng cao vai trò báo chí điều tra'
    ]
  },
  {
    title: 'Cơ chế tiếp nhận phản ánh',
    points: [
      'Đường dây nóng tiếp nhận tố cáo',
      'Bảo vệ người tố giác tham nhũng',
      'Xử lý kịp thời thông tin phản ánh',
      'Công khai kết quả xem xét, giải quyết'
    ]
  },
  {
    title: 'Nâng cao ý thức công dân',
    points: [
      'Giáo dục đạo đức, pháp luật',
      'Khuyến khích tham gia giám sát',
      'Tôn vinh người dám đấu tranh',
      'Xây dựng văn hóa liêm chính'
    ]
  }
]

const partnershipModel = {
  title: 'Mô hình Tam giác Liêm chính',
  description: 'Sự phối hợp giữa Đảng - Nhà nước - Nhân dân trong đấu tranh chống tham nhũng',
  vertices: [
    {
      position: 'Đảng Cộng sản',
      role: 'Lãnh đạo, chỉ đạo chiến lược',
      actions: ['Ban hành nghị quyết, chỉ thị', 'Tự chỉnh đốn nội bộ', 'Nêu gương đi đầu']
    },
    {
      position: 'Nhà nước',
      role: 'Tổ chức thực thi, xử lý',
      actions: ['Ban hành luật pháp', 'Điều tra, truy tố', 'Xét xử công minh']
    },
    {
      position: 'Nhân dân',
      role: 'Giám sát, phản biện xã hội',
      actions: ['Phản ánh, tố giác', 'Giám sát hoạt động', 'Đấu tranh với tiêu cực']
    }
  ]
}

export default function PerspectivesPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-red-950 via-black to-yellow-950'>
      {/* Hero Section */}
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-1/6 w-96 h-96 bg-red-900/20 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 right-1/6 w-96 h-96 bg-yellow-900/20 rounded-full blur-3xl' />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-red-900/20 backdrop-blur-sm mb-6'>
              <Eye className='h-5 w-5 text-yellow-400' />
              <span className='text-yellow-400 text-sm font-medium'>Chuyên mục Góc nhìn</span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6'>
              Góc nhìn Đa chiều
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Phản biện quan điểm sai trái và vai trò giám sát của nhân dân
            </p>
          </motion.div>

          {/* Counter Misconceptions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center flex items-center justify-center gap-3'>
              <Lightbulb className='h-8 w-8 text-yellow-500' />
              Phản biện các quan điểm sai trái
            </h2>
            <div className='space-y-8'>
              {misconceptions.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className='border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm'>
                      <CardHeader>
                        <div className='flex items-start gap-4'>
                          <div
                            className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                          >
                            <Icon className='h-8 w-8 text-white' />
                          </div>
                          <div className='flex-1'>
                            <CardTitle className='text-2xl text-red-400 mb-3'>{item.myth}</CardTitle>
                            <CardDescription className='text-xl text-green-400'>{item.reality}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className='grid md:grid-cols-2 gap-4 mt-4'>
                          {item.evidence.map((point, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-3 p-4 rounded-lg border border-yellow-900/30 bg-gradient-to-r from-red-950/30 to-black/50'
                            >
                              <div className='mt-1 h-2 w-2 rounded-full bg-yellow-500 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>{point}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Supervision Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center'>
              Vai trò Giám sát của Nhân dân và Mặt trận Tổ quốc
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {supervisionRoles.map((role, index) => {
                const Icon = role.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className='h-full border-red-600/30 bg-gradient-to-br from-red-950/60 to-black/80 backdrop-blur-sm'>
                      <CardHeader>
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} mb-4`}
                        >
                          <Icon className='h-8 w-8 text-white' />
                        </div>
                        <CardTitle className='text-2xl text-yellow-100'>{role.title}</CardTitle>
                        <CardDescription className='text-gray-300 text-base'>{role.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className='text-sm font-semibold text-yellow-300 mb-3'>Cơ chế giám sát:</h4>
                        <ul className='space-y-3'>
                          {role.mechanisms.map((mechanism, idx) => (
                            <li key={idx} className='flex items-start gap-3'>
                              <div className='mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>{mechanism}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Transparency Measures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center'>Các biện pháp tăng cường minh bạch</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {transparencyMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Card className='h-full border-yellow-600/30 bg-gradient-to-br from-black/80 to-yellow-950/50 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-xl text-yellow-100'>{measure.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3'>
                        {measure.points.map((point, idx) => (
                          <li key={idx} className='flex items-start gap-3'>
                            <div className='mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0' />
                            <span className='text-gray-300 text-sm'>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Card className='border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-3xl text-yellow-100 text-center'>{partnershipModel.title}</CardTitle>
                <CardDescription className='text-gray-300 text-center text-lg'>
                  {partnershipModel.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-6 mt-6'>
                  {partnershipModel.vertices.map((vertex, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className='relative'
                    >
                      <div className='p-6 rounded-xl border-2 border-yellow-600/50 bg-gradient-to-br from-red-950/40 to-black/60 text-center'>
                        <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-600 to-yellow-600 flex items-center justify-center'>
                          <span className='text-2xl font-bold text-white'>{index + 1}</span>
                        </div>
                        <h3 className='text-xl font-bold text-yellow-100 mb-2'>{vertex.position}</h3>
                        <p className='text-sm text-gray-400 mb-4'>{vertex.role}</p>
                        <ul className='space-y-2'>
                          {vertex.actions.map((action, idx) => (
                            <li key={idx} className='text-xs text-gray-300 flex items-center gap-2'>
                              <div className='h-1 w-1 rounded-full bg-yellow-500' />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
