import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, TrendingUp, Globe, Building2, Users, Zap, FileText, Handshake } from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const timelineData = [
  {
    year: '1986',
    title: 'Đổi Mới - Khởi Đầu Hội Nhập',
    description:
      'Việt Nam bắt đầu công cuộc Đổi Mới, chuyển đổi từ nền kinh tế kế hoạch hóa tập trung sang nền kinh tế thị trường định hướng xã hội chủ nghĩa. Đây là bước khởi đầu quan trọng cho quá trình hội nhập kinh tế quốc tế.',
    icon: TrendingUp,
    type: 'milestone',
    details: ['Tự do hóa thị trường', 'Phát triển khu vực tư nhân', 'Thu hút đầu tư nước ngoài']
  },
  {
    year: '1995',
    title: 'Gia Nhập ASEAN',
    description:
      'Việt Nam trở thành thành viên thứ 7 của ASEAN, đánh dấu bước tiến quan trọng đầu tiên trong hội nhập kinh tế khu vực và hợp tác Đông Nam Á.',
    icon: Globe,
    type: 'achievement',
    details: ['Hiệp định thương mại khu vực', 'Hợp tác kinh tế ASEAN', 'Ổn định chính trị']
  },
  {
    year: '2007',
    title: 'Gia Nhập WTO',
    description:
      'Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO), hội nhập đầy đủ vào hệ thống thương mại toàn cầu và cam kết tuân thủ các quy tắc thương mại quốc tế.',
    icon: Building2,
    type: 'milestone',
    details: ['Tự do hóa thương mại', 'Tiếp cận thị trường toàn cầu', 'Tuân thủ quy định quốc tế']
  },
  {
    year: '2010',
    title: 'ASEAN-China FTA',
    description:
      'Triển khai Hiệp định Thương mại Tự do ASEAN-Trung Quốc (ACFTA), tạo ra khu vực thương mại tự do lớn nhất thế giới về dân số, thúc đẩy mạnh mẽ thương mại của Việt Nam.',
    icon: Handshake,
    type: 'achievement',
    details: ['Xóa bỏ thuế quan', 'Tạo thuận lợi thương mại', 'Tăng trưởng kinh tế']
  },
  {
    year: '2016',
    title: 'Mở Rộng Quan Hệ Thương Mại',
    description:
      'Việt Nam thiết lập quan hệ ngoại giao và thương mại với hơn 170 quốc gia, mở rộng mạng lưới đối tác kinh tế toàn cầu và đa dạng hóa thị trường xuất khẩu.',
    icon: Users,
    type: 'expansion',
    details: ['170+ quốc gia đối tác', 'Đa dạng hóa thị trường', 'Mở rộng xuất khẩu']
  },
  {
    year: '2019',
    title: 'CPTPP & EVFTA',
    description:
      'Việt Nam thực thi Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) và Hiệp định Thương mại Tự do Việt Nam-EU (EVFTA), tiếp cận các thị trường phát triển lớn.',
    icon: FileText,
    type: 'expansion',
    details: ['16 FTA song phương và đa phương', 'Tăng trưởng xuất khẩu', 'Thu hút FDI']
  },
  {
    year: '2024',
    title: 'Chuyển Dịch Cơ Cấu Kinh Tế',
    description:
      'Việt Nam đạt được sự chuyển dịch cơ cấu kinh tế theo hướng hiện đại: giảm tỷ trọng nông nghiệp, tăng mạnh công nghiệp và dịch vụ, hướng tới nền kinh tế số và công nghiệp 4.0.',
    icon: Zap,
    type: 'milestone',
    details: ['Dịch vụ chiếm 50% GDP', 'Công nghiệp hiện đại hóa', 'Chuyển đổi số']
  }
]

const typeColors = {
  milestone: 'bg-gradient-to-r from-red-900 to-red-700',
  achievement: 'bg-gradient-to-r from-red-800 to-rose-700',
  expansion: 'bg-gradient-to-r from-rose-800 to-red-900'
}

const typeBadges = {
  milestone: 'bg-red-500/20 text-red-300 border-red-500/30',
  achievement: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  expansion: 'bg-red-600/20 text-red-200 border-red-600/30'
}

export function EconomicTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' })

  // Scroll-based progress line animation
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center']
  })
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className='relative py-24 bg-background overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className='text-center mb-16'
        >
          <Badge className='mb-4 bg-primary/20 text-primary-foreground border-primary/30'>
            <Calendar className='w-4 h-4 mr-2' />
            Dòng Thời Gian Hội Nhập Kinh Tế
          </Badge>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6'>
            Hành Trình Hội Nhập Của Việt Nam
          </h2>
          <p className='text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed'>
            Từ công cuộc Đổi Mới đến hội nhập sâu rộng, khám phá các mốc quan trọng định hình sự chuyển đổi kinh tế và
            hội nhập toàn cầu đáng kinh ngạc của Việt Nam.
          </p>
        </motion.div>

        <div ref={timelineRef} className='relative'>
          {/* Central Timeline Line - Background */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/30 opacity-30 hidden md:block' />

          {/* Progress Line - Animated with scroll */}
          <motion.div
            ref={progressLineRef}
            style={{ height: progressHeight }}
            className='absolute left-1/2 transform -translate-x-1/2 w-1 h-0 hidden md:block shadow-[0_0_20px_rgba(var(--primary),0.6)] bg-gradient-to-b from-primary via-primary/80 to-primary/60'
          />

          <motion.div
            initial='hidden'
            animate={isTimelineInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className='space-y-16'
          >
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={item.year}
                  variants={{
                    hidden: { opacity: 0, x: isLeft ? -50 : 50, y: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                  className={`timeline-item relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className='bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300 group'>
                      <CardContent className='p-6'>
                        <div className='flex items-center justify-between mb-4'>
                          <span className='text-2xl font-bold text-foreground'>{item.year}</span>
                          <Badge className={typeBadges[item.type as keyof typeof typeBadges]}>{item.type}</Badge>
                        </div>

                        <h3 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors'>
                          {item.title}
                        </h3>

                        <p className='text-muted-foreground mb-4 leading-relaxed'>{item.description}</p>

                        <div className='space-y-2'>
                          {item.details.map((detail, idx) => (
                            <div key={idx} className='flex items-center text-sm text-muted-foreground'>
                              <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3' />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isTimelineInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.2,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    className='timeline-icon-container absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block'
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${typeColors[item.type as keyof typeof typeColors]} flex items-center justify-center shadow-lg shadow-primary/20 cursor-pointer transition-transform hover:scale-110`}
                    >
                      <Icon className='w-8 h-8 text-white' />
                    </div>

                    {/* Pulse Animation */}
                    <div
                      className={`absolute inset-0 w-16 h-16 rounded-full ${typeColors[item.type as keyof typeof typeColors]} opacity-30 animate-ping pointer-events-none`}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
