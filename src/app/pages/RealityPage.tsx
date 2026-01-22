'use client'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, AlertCircle, DollarSign, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '@/components/landing/footer'

const majorCases = [
  {
    year: '2016-2018',
    case: 'Vụ Phạm Công Danh - Ngân hàng Xây dựng',
    description: 'Cựu Chủ tịch HĐQT, TGĐ VNCB. Dùng tiền ngân hàng bảo lãnh vay trái phép',
    recovered: '6.100 tỷ đồng'
  },
  {
    year: '2017-2018',
    case: 'Vụ Trịnh Xuân Thanh & PVC - Nhiệt điện Thái Bình 2',
    description: 'Cựu Phó Chủ tịch UBND Hậu Giang, Chủ tịch HĐQT PVC. Cố ý làm trái, tham ô tài sản',
    recovered: '1.235 tỷ đồng'
  },
  {
    year: '2018',
    case: 'Vụ Đinh La Thăng - PVN & OceanBank',
    description: 'Cựu Bộ trưởng GTVT, Bí thư TP.HCM. Chỉ định thầu trái phép, góp vốn trái quy định',
    recovered: '920 tỷ đồng'
  },
  {
    year: '2018-2019',
    case: 'Vụ Phan Văn Vĩnh - Đánh bạc nghìn tỷ',
    description: 'Trung tướng, Tổng cục trưởng Cảnh sát. Bảo kê đường dây đánh bạc online quy mô lớn',
    recovered: '4.700 tỷ đồng'
  },
  {
    year: '2019-2020',
    case: 'Vụ MobiFone mua AVG',
    description: 'Nguyễn Bắc Son, Trương Minh Tuấn - Cựu Bộ trưởng TT&TT. Vi phạm quản lý đầu tư công, nhận hối lộ',
    recovered: '6.600 tỷ đồng'
  },
  {
    year: '2019-2020',
    case: 'Vụ Vũ "nhôm" & đất công Đà Nẵng',
    description: 'Phan Văn Anh Vũ. Thâu tóm trái phép 22 nhà đất công và 7 dự án tại Đà Nẵng',
    recovered: '22.000 tỷ đồng'
  },
  {
    year: '2021-2022',
    case: 'Vụ Việt Á - Kit test COVID-19',
    description: 'Phan Quốc Việt, Nguyễn Thanh Long - Cựu Bộ trưởng Y tế. Nâng khống giá kit test, chi hoa hồng',
    recovered: '4.000 tỷ đồng'
  },
  {
    year: '2022',
    case: 'Vụ Tân Hoàng Minh - Lừa đảo trái phiếu',
    description: 'Đỗ Anh Dũng, Chủ tịch Tập đoàn Tân Hoàng Minh. Phát hành trái phiếu gian dối',
    recovered: '10.300 tỷ đồng'
  }
]

const globalData = [
  {
    country: 'Việt Nam',
    cpiScore: 42,
    rank: 83,
    trend: 'Cải thiện',
    color: 'text-yellow-500'
  },
  {
    country: 'Singapore',
    cpiScore: 83,
    rank: 5,
    trend: 'Ổn định',
    color: 'text-green-500'
  },
  {
    country: 'Trung Quốc',
    cpiScore: 42,
    rank: 76,
    trend: 'Ổn định',
    color: 'text-yellow-500'
  },
  {
    country: 'Thái Lan',
    cpiScore: 36,
    rank: 101,
    trend: 'Cải thiện',
    color: 'text-orange-500'
  },
  {
    country: 'Indonesia',
    cpiScore: 34,
    rank: 110,
    trend: 'Cải thiện',
    color: 'text-orange-500'
  }
]

const statistics = [
  {
    icon: Users,
    value: '168.000+',
    label: 'Đảng viên bị kỷ luật',
    description: 'Trong thập kỷ qua, 2.700+ tổ chức đảng',
    color: 'from-red-600 to-red-800'
  },
  {
    icon: DollarSign,
    value: '61.000 tỷ VND',
    label: 'Tài sản thu hồi',
    description: 'Qua các vụ án tham nhũng',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    icon: AlertCircle,
    value: '19.546',
    label: 'Vụ án được truy tố',
    description: 'Với 33.868 bị cáo',
    color: 'from-red-700 to-orange-700'
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Không có vùng cấm',
    description: 'Quyết tâm chính trị cao nhất',
    color: 'from-yellow-700 to-red-700'
  }
]

export default function RealityPage() {
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
              <BarChart3 className='h-5 w-5 text-yellow-400' />
              <span className='text-yellow-400 text-sm font-medium'>Chuyên mục Thực tiễn</span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6'>
              Thực tiễn & Số liệu
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Dữ liệu cụ thể về công cuộc "Đốt lò" và đấu tranh phòng chống tham nhũng
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid md:grid-cols-4 gap-6 mb-16'
          >
            {statistics.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className='p-6 rounded-xl border border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm'
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}
                  >
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                  <div className='text-3xl font-bold text-yellow-100 mb-2'>{stat.value}</div>
                  <div className='text-sm font-medium text-yellow-50 mb-1'>{stat.label}</div>
                  <div className='text-xs text-gray-400'>{stat.description}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-12 text-center flex items-center justify-center gap-3'>
              <Calendar className='h-8 w-8 text-red-500' />
              Timeline: Các vụ án lớn trong chiến dịch "Đốt lò"
            </h2>
            <div className='relative max-w-6xl mx-auto'>
              {/* Main vertical line */}
              <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-600/50 via-yellow-600/50 to-red-600/50' />

              {/* Animated vertical line */}
              <motion.div
                className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-yellow-600 to-red-600'
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />

              <div className='space-y-12'>
                {majorCases.map((item, index) => {
                  const isLeft = index % 2 === 0
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                        isLeft ? 'md:text-right' : ''
                      }`}
                    >
                      {/* Center dot with pulse animation */}
                      <motion.div
                        className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <div className='relative'>
                          <div className='w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 border-4 border-black shadow-lg' />
                          <motion.div
                            className='absolute inset-0 rounded-full bg-yellow-500/50'
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                          />
                        </div>
                      </motion.div>

                      {/* Content - left side for even index, right side for odd */}
                      <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-2'} ${!isLeft ? 'md:order-2' : ''}`}>
                        <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                          <Card className='border-yellow-600/30 bg-gradient-to-br from-red-950/80 to-black/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-yellow-900/20 transition-all duration-300'>
                            <CardHeader>
                              <div
                                className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
                              >
                                <motion.span
                                  className='px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-yellow-600 text-white text-sm font-bold shadow-lg'
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {item.year}
                                </motion.span>
                              </div>
                              <CardTitle className='text-yellow-100 text-xl mb-2'>{item.case}</CardTitle>
                              <CardDescription className='text-gray-300 text-sm leading-relaxed'>
                                {item.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div
                                className={`flex items-center gap-2 text-sm ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
                              >
                                <span className='text-green-400 font-semibold'>Thiệt hại: {item.recovered}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>

                      {/* Empty space on the other side */}
                      <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1'}`} />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Global Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center'>Tham nhũng là vấn đề toàn cầu</h2>
            <Card className='border-red-600/30 bg-gradient-to-br from-black/80 to-yellow-950/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-yellow-100'>Chỉ số Cảm nhận Tham nhũng (CPI) 2023</CardTitle>
                <CardDescription className='text-gray-300'>
                  Nguồn: Transparency International. Thang điểm: 0 (tham nhũng nhiều) - 100 (sạch)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {globalData.map((country, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className='flex items-center justify-between p-4 rounded-lg border border-yellow-900/30 bg-gradient-to-r from-red-950/30 to-black/50'
                    >
                      <div className='flex-1'>
                        <div className='font-semibold text-yellow-100 mb-1'>{country.country}</div>
                        <div className='text-sm text-gray-400'>Xếp hạng: #{country.rank}/180</div>
                      </div>
                      <div className='flex items-center gap-4'>
                        <div className='text-right'>
                          <div className='text-2xl font-bold text-yellow-400'>{country.cpiScore}</div>
                          <div className={`text-xs ${country.color}`}>{country.trend}</div>
                        </div>
                        <div className='w-24 h-2 bg-gray-800 rounded-full overflow-hidden'>
                          <div
                            className='h-full bg-gradient-to-r from-red-600 to-yellow-600'
                            style={{ width: `${country.cpiScore}%` }}
                          />
                        </div>
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
