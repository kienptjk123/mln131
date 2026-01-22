import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Trophy,
  TrendingUp,
  Globe2,
  Zap,
  Target,
  Star,
  Award,
  Rocket,
  ArrowRight,
  BarChart3,
  Factory,
  Smartphone,
  Cpu,
  Wind,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'

const achievements = [
  {
    category: 'Tăng Trưởng Kinh Tế',
    icon: TrendingUp,
    color: 'from-red-900 via-rose-800 to-red-700',
    gradient: 'bg-gradient-to-br',
    stats: [
      {
        label: 'Tốc độ tăng trưởng GDP',
        value: '6.8%',
        subtitle: 'Trung bình 2010-2023',
        rank: 'Top 3 ASEAN',
        trend: '+2.1%'
      },
      {
        label: 'GDP bình quân đầu người',
        value: '$4,200',
        subtitle: '2023 (PPP: $13,700)',
        rank: 'Thu nhập trung bình',
        trend: '+15.2%'
      },
      { label: 'Giảm nghèo', value: '95%', subtitle: 'Xóa đói giảm nghèo', rank: 'Mục tiêu UN SDG', trend: 'Đạt' }
    ]
  },
  {
    category: 'Thương Mại Quốc Tế',
    icon: Globe2,
    color: 'from-red-800 via-red-700 to-rose-600',
    gradient: 'bg-gradient-to-br',
    stats: [
      {
        label: 'Kim ngạch xuất khẩu',
        value: '$372 tỷ',
        subtitle: 'Tổng xuất khẩu 2023',
        rank: '#25 toàn cầu',
        trend: '+12.5%'
      },
      {
        label: 'Thặng dư thương mại',
        value: '$28.3 tỷ',
        subtitle: 'Cán cân thương mại 2023',
        rank: '8 năm liên tiếp',
        trend: '+8.2%'
      },
      {
        label: 'Đa dạng hóa xuất khẩu',
        value: '220+',
        subtitle: 'Quốc gia và vùng lãnh thổ',
        rank: 'Thị trường toàn cầu',
        trend: '+15'
      }
    ]
  },
  {
    category: 'Đầu Tư Nước Ngoài',
    icon: Factory,
    color: 'from-rose-700 via-red-600 to-rose-600',
    gradient: 'bg-gradient-to-br',
    stats: [
      { label: 'Vốn FDI đăng ký', value: '$36.6 tỷ', subtitle: '2023 vốn đăng ký', rank: '#3 ASEAN', trend: '+32.1%' },
      {
        label: 'Tổng vốn FDI tích lũy',
        value: '$460 tỷ+',
        subtitle: 'Từ Đổi Mới đến nay',
        rank: 'Điểm đến hàng đầu',
        trend: 'Tăng'
      },
      {
        label: 'Dự án FDI',
        value: '36,000+',
        subtitle: 'Dự án đang hoạt động',
        rank: 'Đa dạng ngành nghề',
        trend: '+2,400'
      }
    ]
  },
  {
    category: 'Hội Nhập Kinh Tế',
    icon: Zap,
    color: 'from-red-700 via-rose-700 to-red-600',
    gradient: 'bg-gradient-to-br',
    stats: [
      { label: 'Hiệp định FTA', value: '16', subtitle: 'FTA đã ký kết', rank: 'Mạng lưới rộng khắp', trend: '+2' },
      {
        label: 'Đối tác thương mại',
        value: '170+',
        subtitle: 'Quan hệ ngoại giao',
        rank: 'Hội nhập sâu rộng',
        trend: '+5'
      },
      {
        label: 'Khối kinh tế',
        value: '10+',
        subtitle: 'ASEAN, WTO, CPTPP, EVFTA',
        rank: 'Cam kết đa phương',
        trend: 'Ổn định'
      }
    ]
  }
]

const futureOutlook = [
  {
    sector: 'Chuyển Đổi Số',
    icon: Smartphone,
    target: '$52 tỷ năm 2025',
    description:
      'Chuyển đổi số thúc đẩy các ngành tăng trưởng mới bao gồm thương mại điện tử, công nghệ tài chính và dịch vụ số',
    keyInitiatives: ['Chính phủ số 2030', 'Chiến lược Quốc gia về Chuyển đổi số', 'Triển khai mạng 5G'],
    potential: '20% đóng góp GDP',
    color: 'from-purple-600 to-pink-600',
    iconBg: 'bg-purple-500/20'
  },
  {
    sector: 'Chuyển Đổi Xanh',
    icon: Wind,
    target: 'Net Zero 2050',
    description: 'Cam kết phát triển bền vững với đầu tư lớn vào năng lượng tái tạo và sản xuất xanh',
    keyInitiatives: ['Chiến lược Tăng trưởng Xanh', 'Chương trình Năng lượng Tái tạo', 'Phát triển Thị trường Carbon'],
    potential: '$368 tỷ đầu tư cần thiết',
    color: 'from-emerald-600 to-teal-600',
    iconBg: 'bg-emerald-500/20'
  },
  {
    sector: 'Sản Xuất Công Nghệ Cao',
    icon: Cpu,
    target: 'Top 10 Toàn Cầu',
    description: 'Nâng cao chuỗi giá trị trong điện tử, bán dẫn và công nghệ sản xuất tiên tiến',
    keyInitiatives: ['Chương trình Công nghiệp 4.0', 'Ưu đãi Chuyển giao Công nghệ', 'Trung tâm Đổi mới Sáng tạo'],
    potential: 'Tăng 50% giá trị gia tăng',
    color: 'from-blue-600 to-cyan-600',
    iconBg: 'bg-blue-500/20'
  },
  {
    sector: 'Hội Nhập Khu Vực',
    icon: Globe2,
    target: 'Dẫn đầu ASEAN',
    description: 'Vai trò nâng cao trong hội nhập kinh tế khu vực và các sáng kiến kết nối xuyên Đông Nam Á',
    keyInitiatives: ['Thị trường Chung ASEAN', 'Sáng kiến Vành đai Con đường', 'Hợp tác Tiểu vùng Mekong'],
    potential: 'Trung tâm chuỗi cung ứng',
    color: 'from-orange-600 to-red-600',
    iconBg: 'bg-orange-500/20'
  }
]

const recognitions = [
  { award: 'Giải thưởng Đầu tư ASEAN', year: '2023', category: 'Cải thiện Môi trường Đầu tư', icon: Trophy },
  { award: 'Công nhận Ngân hàng Thế giới', year: '2023', category: 'Cải cách Môi trường Kinh doanh', icon: Award },
  { award: 'Phát triển Bền vững UN', year: '2022', category: 'Tiến bộ Vượt trội SDGs', icon: Star },
  {
    award: 'Giải thưởng Châu Á-Thái Bình Dương',
    year: '2022',
    category: 'Xuất sắc Tạo thuận lợi Thương mại',
    icon: Trophy
  },
  { award: 'Năng lực Cạnh tranh Toàn cầu', year: '2023', category: 'Nền kinh tế Năng động nhất', icon: Award }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

interface EconomicOutlookProps {
  withoutSection?: boolean
}

export function EconomicOutlook({ withoutSection = false }: EconomicOutlookProps) {
  const ref = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const actualIsInView = useInView(withoutSection ? contentRef : ref, {
    once: true,
    margin: withoutSection ? '0px' : '-100px'
  })
  const isInView = withoutSection ? true : actualIsInView

  const content = (
    <div ref={contentRef} className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {!withoutSection && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className='text-center mb-20'
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className='mb-6 bg-gradient-to-r from-red-900/30 to-rose-700/30 text-red-200 border-red-700/50 px-4 py-1.5 text-sm'>
              <Trophy className='w-4 h-4 mr-2' />
              Thành Tựu & Triển Vọng Kinh Tế
            </Badge>
          </motion.div>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent mb-6 leading-tight'>
            Câu Chuyện Thành Công
            <br />
            <span className='bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent'>
              của Việt Nam
            </span>
          </h2>
          <p className='text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed'>
            Từ một quốc gia hậu chiến đến một trong những nền kinh tế năng động nhất châu Á - khám phá sự chuyển đổi
            đáng kinh ngạc và tầm nhìn đầy tham vọng định hình quỹ đạo tăng trưởng tương lai.
          </p>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='mb-24'
      >
        <motion.h3 variants={itemVariants} className='text-3xl md:text-4xl font-bold text-white mb-12 text-center'>
          <span className='bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent'>
            Thành Tựu Kinh Tế Nổi Bật
          </span>
        </motion.h3>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon

            return (
              <motion.div key={achievement.category} variants={itemVariants}>
                <Card className='bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 hover:border-red-500/50 transition-all duration-500 h-full group overflow-hidden relative'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <CardContent className='p-8 relative z-10'>
                    <div className='flex items-center space-x-4 mb-8'>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-2xl shadow-lg`}
                      >
                        <Icon className='w-7 h-7 text-white' />
                      </motion.div>
                      <div>
                        <h4 className='text-2xl font-bold text-white group-hover:text-red-300 transition-colors'>
                          {achievement.category}
                        </h4>
                        <div className='h-1 w-20 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mt-2' />
                      </div>
                    </div>

                    <div className='space-y-4'>
                      {achievement.stats.map((stat, statIndex) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + statIndex * 0.1 }}
                          className='p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 group/stat'
                        >
                          <div className='flex items-start justify-between mb-2'>
                            <div className='flex-1'>
                              <div className='text-sm text-gray-400 mb-1'>{stat.label}</div>
                              <div className='text-2xl font-bold text-white group-hover/stat:text-red-300 transition-colors'>
                                {stat.value}
                              </div>
                              <div className='text-xs text-gray-400 mt-1'>{stat.subtitle}</div>
                            </div>
                            <div className='flex flex-col items-end gap-2'>
                              <Badge className='bg-gradient-to-r from-red-900/40 to-rose-700/40 text-red-200 border-red-700/50 text-xs px-2 py-0.5'>
                                {stat.rank}
                              </Badge>
                              {stat.trend && (
                                <div className='flex items-center text-xs text-emerald-400 font-medium'>
                                  <ArrowUpRight className='w-3 h-3 mr-1' />
                                  {stat.trend}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='mb-24'
      >
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-3xl md:text-4xl font-bold text-white mb-12 text-center'
        >
          <span className='bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent'>
            Công Nhận Quốc Tế
          </span>
        </motion.h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {recognitions.map((recognition, index) => {
            const AwardIcon = recognition.icon || Award
            return (
              <motion.div
                key={`${recognition.award}-${recognition.year}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className='bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-500/20 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 h-full cursor-pointer group'>
                  <CardContent className='p-6 text-center relative overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className='relative z-10'>
                      <AwardIcon className='w-12 h-12 text-amber-400 mx-auto mb-3 group-hover:text-amber-300 transition-colors' />
                    </motion.div>
                    <div className='relative z-10'>
                      <div className='text-amber-300 font-bold text-lg mb-1 group-hover:text-amber-200 transition-colors'>
                        {recognition.year}
                      </div>
                      <div className='text-white font-semibold text-sm mb-2 leading-tight'>{recognition.award}</div>
                      <div className='text-gray-300 text-xs leading-relaxed'>{recognition.category}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='mb-20'
      >
        <motion.h3 variants={itemVariants} className='text-3xl md:text-4xl font-bold text-white mb-12 text-center'>
          <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Ngành Tăng Trưởng Tương Lai
          </span>
        </motion.h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {futureOutlook.map((sector, index) => {
            const Icon = sector.icon

            return (
              <motion.div key={sector.sector} variants={itemVariants} whileHover={{ y: -8 }}>
                <Card className='bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 h-full group overflow-hidden relative'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <CardContent className='p-8 relative z-10'>
                    <div className='flex items-start justify-between mb-6'>
                      <div className='flex items-center space-x-4 flex-1'>
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          className={`inline-flex items-center justify-center w-16 h-16 ${sector.iconBg} rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300`}
                        >
                          <Icon className={`w-8 h-8 bg-gradient-to-br ${sector.color} bg-clip-text text-transparent`} />
                        </motion.div>
                        <div className='flex-1'>
                          <h4 className='text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300'>
                            {sector.sector}
                          </h4>
                          <Badge className='bg-gradient-to-r from-white/20 to-white/10 text-white border-white/30 text-xs'>
                            {sector.target}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className='text-gray-300 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-colors'>
                      {sector.description}
                    </p>

                    <div className='mb-6'>
                      <h5 className='text-white font-semibold mb-3 text-sm flex items-center'>
                        <CheckCircle2 className='w-4 h-4 mr-2 text-emerald-400' />
                        Sáng kiến chính:
                      </h5>
                      <div className='space-y-2'>
                        {sector.keyInitiatives.map((initiative, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + idx * 0.05 }}
                            className='flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors'
                          >
                            <Star className='w-3.5 h-3.5 text-yellow-400 flex-shrink-0' />
                            <span className='text-gray-300 text-sm group-hover:text-white transition-colors'>
                              {initiative}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className='pt-4 border-t border-white/10'>
                      <div className='flex items-center justify-between'>
                        <span className='text-xs text-gray-400 font-medium'>Tiềm năng kinh tế:</span>
                        <span
                          className='text-transparent bg-gradient-to-r bg-clip-text font-bold text-sm'
                          style={{ backgroundImage: `linear-gradient(to right, ${sector.color})` }}
                        >
                          {sector.potential}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Card className='bg-gradient-to-r from-red-900/30 via-rose-800/30 to-red-700/30 backdrop-blur-md border border-white/20 hover:border-red-500/50 transition-all duration-500 overflow-hidden relative group'>
          <div className='absolute inset-0 bg-gradient-to-r from-red-900/20 to-rose-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          <CardContent className='p-12 text-center relative z-10'>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              className='inline-block mb-6'
            >
              <Rocket className='w-16 h-16 text-red-400 mx-auto' />
            </motion.div>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Tham Gia Câu Chuyện Tăng Trưởng
              <br />
              <span className='bg-gradient-to-r from-red-300 to-rose-300 bg-clip-text text-transparent'>
                của Việt Nam
              </span>
            </h3>
            <p className='text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed'>
              Khám phá cơ hội đầu tư, khả năng hợp tác và thông tin chính sách giúp bạn tham gia vào quá trình chuyển
              đổi kinh tế liên tục của Việt Nam.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className='bg-gradient-to-r from-red-700 to-rose-700 hover:from-red-800 hover:to-rose-800 text-white px-8 py-6 text-base shadow-lg shadow-red-900/30'>
                  <BarChart3 className='w-5 h-5 mr-2' />
                  Cơ Hội Đầu Tư
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant='outline'
                  className='border-white/30 text-white hover:bg-white/20 bg-transparent px-8 py-6 text-base backdrop-blur-sm'
                >
                  <Target className='w-5 h-5 mr-2' />
                  Thông Tin Chính Sách
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )

  if (withoutSection) {
    return content
  }

  return (
    <section ref={ref} className='relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-red-900/20 to-rose-800/20 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-rose-800/20 to-red-700/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-red-700/10 to-rose-800/10 rounded-full blur-3xl' />
      </div>
      {content}
    </section>
  )
}
