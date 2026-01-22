'use client'
import { motion } from 'framer-motion'
import { BookOpen, Quote, Scale, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '@/components/landing/footer'

const marxistView = {
  title: 'Quan điểm Chủ nghĩa Mác - Lênin về Nhà nước và Quyền lực',
  points: [
    {
      subtitle: 'Bản chất giai cấp của Nhà nước',
      content: 'Nhà nước là công cụ của giai cấp thống trị. Trong xã hội XHCN, nhà nước là của nhân dân, do nhân dân, vì nhân dân.'
    },
    {
      subtitle: 'Quyền lực phải được kiểm soát',
      content: 'Mác - Lênin cảnh báo về nguy cơ quyền lực biến chất khi không có cơ chế kiểm soát chặt chẽ từ nhân dân.'
    },
    {
      subtitle: 'Dân chủ là bản chất',
      content: 'Chế độ XHCN phải bảo đảm dân chủ thực sự, quyền lực thuộc về nhân dân và phục vụ nhân dân.'
    }
  ]
}

const tbtQuotes = [
  {
    quote: '"Tham nhũng là một trong những nguy cơ lớn nhất đe dọa sự tồn vong của Đảng và chế độ"',
    context: 'Tổng Bí thư Nguyễn Phú Trọng - Hội nghị TW 8 khóa XII'
  },
  {
    quote: '"Xây dựng và hoàn thiện thể chế để nhốt quyền lực vào lồng cơ chế"',
    context: 'Văn kiện Đại hội XIII của Đảng'
  },
  {
    quote: '"Không có vùng cấm, không có ngoại lệ trong đấu tranh phòng, chống tham nhũng"',
    context: 'Chỉ thị số 05-CT/TW'
  },
  {
    quote: '"Tham nhũng là giặc nội xâm, ăn mòn từ bên trong, nguy hiểm hơn giặc ngoại xâm"',
    context: 'Phát biểu tại Hội nghị Trung ương 4 khóa XII'
  }
]

const legalState = {
  title: 'Nhà nước Pháp quyền Xã hội Chủ nghĩa',
  definition: 'Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân, do Đảng Cộng sản Việt Nam lãnh đạo, lấy Hiến pháp và pháp luật làm nền tảng.',
  features: [
    {
      icon: Scale,
      title: 'Thượng tôn pháp luật',
      description: 'Hiến pháp và pháp luật có giá trị tối cao, mọi cá nhân và tổ chức đều phải tuân thủ'
    },
    {
      icon: Shield,
      title: 'Bảo vệ quyền con người',
      description: 'Tôn trọng, bảo vệ quyền con người, quyền và lợi ích hợp pháp của công dân'
    },
    {
      icon: BookOpen,
      title: 'Quyền lực được kiểm soát',
      description: 'Quyền lực nhà nước thống nhất, có sự phân công, phối hợp và kiểm soát lẫn nhau giữa các cơ quan'
    }
  ]
}

export default function TheoryPage() {
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
              <BookOpen className='h-5 w-5 text-yellow-400' />
              <span className='text-yellow-400 text-sm font-medium'>Chuyên mục Lý luận</span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6'>
              Lý luận & Nhận thức
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Nền tảng tư tưởng Mác - Lênin và quan điểm của Đảng về phòng chống tham nhũng
            </p>
          </motion.div>

          {/* Marxist-Leninist View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-16'
          >
            <Card className='border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-3xl text-yellow-100 flex items-center gap-3'>
                  <Scale className='h-8 w-8 text-yellow-500' />
                  {marxistView.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-6'>
                  {marxistView.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className='p-6 rounded-lg border border-red-900/30 bg-gradient-to-br from-red-950/30 to-black/50'
                    >
                      <h4 className='text-lg font-semibold text-yellow-300 mb-3'>{point.subtitle}</h4>
                      <p className='text-gray-300 text-sm leading-relaxed'>{point.content}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* TBT Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center flex items-center justify-center gap-3'>
              <Quote className='h-8 w-8 text-red-500' />
              Những câu nói của Tổng Bí thư Nguyễn Phú Trọng
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {tbtQuotes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className='relative p-6 rounded-xl border border-yellow-600/30 bg-gradient-to-br from-red-950/40 to-black/60 backdrop-blur-sm'
                >
                  <Quote className='absolute top-4 right-4 h-12 w-12 text-yellow-900/30' />
                  <div className='relative z-10'>
                    <p className='text-lg text-yellow-50 font-medium mb-4 italic leading-relaxed'>
                      {item.quote}
                    </p>
                    <p className='text-sm text-gray-400 border-t border-yellow-900/30 pt-3'>
                      — {item.context}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Legal State */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className='border-red-600/30 bg-gradient-to-br from-black/80 to-yellow-950/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-3xl text-yellow-100'>{legalState.title}</CardTitle>
                <CardDescription className='text-gray-300 text-lg mt-4'>
                  {legalState.definition}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-6 mt-6'>
                  {legalState.features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className='text-center p-6 rounded-lg border border-yellow-900/30 bg-gradient-to-br from-red-950/30 to-black/50'
                      >
                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-yellow-600 mb-4'>
                          <Icon className='h-8 w-8 text-white' />
                        </div>
                        <h4 className='text-xl font-semibold text-yellow-200 mb-3'>{feature.title}</h4>
                        <p className='text-gray-400 text-sm'>{feature.description}</p>
                      </motion.div>
                    )
                  })}
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
