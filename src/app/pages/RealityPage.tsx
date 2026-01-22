'use client'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, AlertCircle, DollarSign, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '@/components/landing/footer'
import { EconomicTransformation } from '@/components/landing/economic-transformation'

const majorCases = [
  {
    year: '2016',
    case: 'Vụ án Trịnh Xuân Thanh',
    description: 'Nguyên Phó Chủ tịch UBND tỉnh Hậu Giang, nguyên Chủ tịch HĐQT, Tổng giám đốc PVC',
    recovered: '543 tỷ đồng'
  },
  {
    year: '2017',
    case: 'Vụ án Đinh La Thăng',
    description: 'Nguyên Bộ trưởng Bộ GTVT, nguyên Bí thư Thành ủy TP.HCM',
    recovered: '800 tỷ đồng'
  },
  {
    year: '2018',
    case: 'Vụ án Mobifone - AVG',
    description: 'Thương vụ mua 95% cổ phần AVG gây thất thoát hàng nghìn tỷ đồng',
    recovered: '7.000 tỷ đồng'
  },
  {
    year: '2019',
    case: 'Vụ án Vũ "nhôm"',
    description: 'Phan Văn Anh Vũ, đại gia BĐS Đà Nẵng chiếm đoạt tài sản nhà nước',
    recovered: '1.200 tỷ đồng'
  },
  {
    year: '2020',
    case: 'Vụ án Gang thép Thái Nguyên',
    description: 'Nguyên Tổng Giám đốc Tập đoàn Gang thép Thái Nguyên',
    recovered: '450 tỷ đồng'
  },
  {
    year: '2021',
    case: 'Vụ án Nhật Cường Mobile',
    description: 'Buôn lậu, rửa tiền, trốn thuế quy mô lớn',
    recovered: '2.000 tỷ đồng'
  },
  {
    year: '2022',
    case: 'Vụ án AIC, Phạm Nhật Vũ',
    description: 'Nguyên Chủ tịch HĐQT Công ty AIC',
    recovered: '3.600 tỷ đồng'
  },
  {
    year: '2023',
    case: 'Vụ án Vạn Thịnh Phát',
    description: 'Trương Mỹ Lan, Chủ tịch HĐQT Tập đoàn Vạn Thịnh Phát',
    recovered: '30.000 tỷ đồng'
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
    value: '563',
    label: 'Cán bộ bị xử lý kỷ luật',
    description: 'Tính đến cuối năm 2023',
    color: 'from-red-600 to-red-800'
  },
  {
    icon: DollarSign,
    value: '45.000 tỷ',
    label: 'Tài sản thu hồi',
    description: 'Qua các vụ án tham nhũng',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    icon: AlertCircle,
    value: '248',
    label: 'Vụ án được xét xử',
    description: 'Chiến dịch "Đốt lò" 2016-2023',
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
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
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
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center flex items-center justify-center gap-3'>
              <Calendar className='h-8 w-8 text-red-500' />
              Timeline: Các vụ án lớn trong chiến dịch "Đốt lò"
            </h2>
            <div className='relative'>
              <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-yellow-600 to-red-600' />
              {majorCases.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`relative mb-8 ${index % 2 === 0 ? 'pr-8 md:pr-1/2' : 'pl-8 md:pl-1/2 md:text-right'}`}
                >
                  <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-black' />
                  <Card className='border-yellow-600/30 bg-gradient-to-br from-red-950/60 to-black/80 backdrop-blur-sm'>
                    <CardHeader>
                      <div className='flex items-center gap-3 mb-2'>
                        <span className='px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-yellow-600 text-white text-sm font-bold'>
                          {item.year}
                        </span>
                      </div>
                      <CardTitle className='text-yellow-100'>{item.case}</CardTitle>
                      <CardDescription className='text-gray-300'>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='flex items-center gap-2 text-sm'>
                        <DollarSign className='h-4 w-4 text-green-500' />
                        <span className='text-green-400 font-semibold'>Thu hồi: {item.recovered}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Global Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center'>
              Tham nhũng là vấn đề toàn cầu
            </h2>
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

      {/* Charts Section */}
      <EconomicTransformation />

      <Footer />
    </div>
  )
}
