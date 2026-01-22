'use client'
import { Footer } from '@/components/landing/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Building2, CheckCircle2, ShieldAlert, Target, Users2, XCircle } from 'lucide-react'

const partyNature = {
  title: 'Bản chất của Đảng và hiện tượng thoái hóa',
  essence: [
    {
      icon: Building2,
      title: 'Bản chất Đảng',
      points: [
        'Đại diện cho lợi ích của giai cấp công nhân và nhân dân lao động',
        'Tiên phong, gương mẫu, trong sạch, vững mạnh',
        'Lãnh đạo toàn diện, bảo vệ lợi ích quốc gia - dân tộc',
        'Không có lợi ích gì khác ngoài lợi ích của nhân dân'
      ],
      color: 'from-red-600 to-yellow-600'
    },
    {
      icon: ShieldAlert,
      title: 'Hiện tượng thoái hóa',
      points: [
        'Một bộ phận đảng viên sa sút về tư tưởng chính trị',
        'Xa rời quần chúng, mất uy tín với nhân dân',
        'Lạm quyền, lợi dụng chức vụ vụ lợi',
        'Cần phải kiên quyết xử lý để bảo vệ bản chất Đảng'
      ],
      color: 'from-orange-600 to-red-800'
    }
  ]
}

const exemplaryRules = [
  {
    category: 'Nêu gương về phẩm chất đạo đức',
    rules: [
      'Trung thực, liêm khiết, cần cù, tiết kiệm',
      'Gần gũi nhân dân, lắng nghe ý kiến nhân dân',
      'Tu dưỡng, rèn luyện đạo đức cách mạng',
      'Sống có trách nhiệm, có kỷ cương'
    ]
  },
  {
    category: 'Nêu gương về năng lực công tác',
    rules: [
      'Không ngừng học tập nâng cao trình độ',
      'Dám nghĩ, dám làm, dám chịu trách nhiệm',
      'Đoàn kết, phối hợp trong công việc',
      'Sáng tạo, đổi mới phương thức lãnh đạo'
    ]
  },
  {
    category: 'Nêu gương về lối sống',
    rules: [
      'Chống chủ nghĩa cá nhân, bè phái',
      'Không tham ô, tham nhũng, lãng phí',
      'Không quan liêu, xa rời quần chúng',
      'Không lợi dụng chức vụ, quyền hạn vụ lợi'
    ]
  }
]

const prohibitions = [
  {
    icon: XCircle,
    title: 'Những điều Đảng viên không được làm',
    items: [
      'Không được tham ô, tham nhũng, lãng phí',
      'Không được quan liêu, cửa quyền, hách dịch',
      'Không được lợi dụng chức vụ, quyền hạn để vụ lợi',
      'Không được vi phạm đạo đức, lối sống',
      'Không được thoái hóa, biến chất',
      'Không được vi phạm nguyên tắc tập trung dân chủ',
      'Không được làm sai lệch đường lối của Đảng',
      'Không được làm tổn hại đến uy tín của Đảng và nhà nước'
    ]
  }
]

const buildingMeasures = [
  {
    icon: Target,
    title: 'Kiểm tra, giám sát',
    description: 'Tăng cường kiểm tra việc chấp hành Điều lệ Đảng, nghị quyết của Đảng',
    color: 'from-red-600 to-red-800'
  },
  {
    icon: Users2,
    title: 'Tự phê bình và phê bình',
    description: 'Phát huy dân chủ trong Đảng, kiên quyết đấu tranh với những biểu hiện sai trái',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    icon: CheckCircle2,
    title: 'Khen thưởng và kỷ luật',
    description: 'Kịp thời khen thưởng cái tốt, nghiêm minh xử lý kỷ luật vi phạm',
    color: 'from-red-700 to-orange-700'
  },
  {
    icon: Building2,
    title: 'Xây dựng thể chế',
    description: 'Hoàn thiện các quy định về tổ chức và hoạt động của Đảng',
    color: 'from-yellow-700 to-red-700'
  }
]

export default function PartyBuildingPage() {
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
              <Building2 className='h-5 w-5 text-yellow-400' />
              <span className='text-yellow-400 text-sm font-medium'>Chuyên mục Xây dựng Đảng</span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6'>
              Xây dựng & Chỉnh đốn Đảng
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Tự chỉnh đốn, xây dựng Đảng trong sạch, vững mạnh toàn diện
            </p>
          </motion.div>

          {/* Party Nature vs Degradation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center'>{partyNature.title}</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {partyNature.essence.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className='h-full border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm'>
                      <CardHeader>
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-4`}
                        >
                          <Icon className='h-8 w-8 text-white' />
                        </div>
                        <CardTitle className='text-2xl text-yellow-100'>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className='space-y-3'>
                          {item.points.map((point, idx) => (
                            <li key={idx} className='flex items-start gap-3'>
                              <div className='mt-1 h-2 w-2 rounded-full bg-yellow-500 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>{point}</span>
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

          {/* Exemplary Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mb-16'
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center flex items-center justify-center gap-3'>
              <CheckCircle2 className='h-8 w-8 text-yellow-500' />
              Quy định về "Nêu gương"
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {exemplaryRules.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className='h-full border-red-600/30 bg-gradient-to-br from-red-950/60 to-black/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-xl text-yellow-100'>{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3'>
                        {category.rules.map((rule, idx) => (
                          <li key={idx} className='flex items-start gap-3'>
                            <CheckCircle2 className='h-4 w-4 text-green-500 flex-shrink-0 mt-0.5' />
                            <span className='text-gray-300 text-sm'>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prohibitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='mb-16'
          >
            {prohibitions.map((section, index) => {
              const Icon = section.icon
              return (
                <Card
                  key={index}
                  className='border-orange-600/30 bg-gradient-to-br from-black/80 to-orange-950/50 backdrop-blur-sm'
                >
                  <CardHeader>
                    <CardTitle className='text-3xl text-yellow-100 flex items-center gap-3'>
                      <Icon className='h-8 w-8 text-red-500' />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='grid md:grid-cols-2 gap-4'>
                      {section.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.2 + idx * 0.05 }}
                          className='flex items-start gap-3 p-4 rounded-lg border border-red-900/30 bg-gradient-to-r from-red-950/30 to-black/50'
                        >
                          <XCircle className='h-5 w-5 text-red-500 flex-shrink-0 mt-0.5' />
                          <span className='text-gray-300 text-sm'>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>

          {/* Building Measures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className='text-3xl font-bold text-yellow-100 mb-8 text-center'>Biện pháp Xây dựng và Chỉnh đốn</h2>
            <div className='grid md:grid-cols-4 gap-6'>
              {buildingMeasures.map((measure, index) => {
                const Icon = measure.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className='p-6 rounded-xl border border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm text-center'
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${measure.color} mb-4`}
                    >
                      <Icon className='h-8 w-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-yellow-100 mb-3'>{measure.title}</h3>
                    <p className='text-sm text-gray-400'>{measure.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
