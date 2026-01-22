import { Users, FileText, TrendingUp, Globe } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import NumberTicker from '@/components/ui/ticker'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Cán bộ bị xử lý kỷ luật',
    description: 'Trong chiến dịch "Đốt lò" phòng chống tham nhũng',
    numericValue: 500
  },
  {
    icon: FileText,
    value: '200+',
    label: 'Vụ án tham nhũng',
    description: 'Đã được điều tra và xét xử nghiêm minh',
    numericValue: 200
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Không có vùng cấm',
    description: 'Quyết tâm chính trị cao nhất của Đảng',
    numericValue: 100,
    isPercentage: true
  },
  {
    icon: Globe,
    value: '4',
    label: 'Giải pháp "Bốn Không"',
    description: 'Không thể, không dám, không cần, không muốn tham nhũng',
    numericValue: 4
  }
]

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const isSectionInView = useInView(sectionRef, {
    once: true,
    margin: '-100px'
  })

  useEffect(() => {
    if (isSectionInView) {
      setIsInView(true)
    }
  }, [isSectionInView])

  return (
    <section ref={sectionRef} className='border-y bg-gradient-to-b from-black via-gray-900 to-black border-red-900/30 py-16'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={statsRef}
          initial='hidden'
          animate={isSectionInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                className='stat-item text-center cursor-default'
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0, rotate: -180 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.34, 1.56, 0.64, 1]
                      }
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className='stat-icon-container mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/15 text-chart-1'
                >
                  <Icon className='h-6 w-6' />
                </motion.div>
                <div className='stat-value mb-2 text-4xl font-bold text-foreground'>
                  {isInView ? (
                    <NumberTicker
                      value={stat.numericValue}
                      duration={2500}
                      delay={index * 100}
                      decimalPlaces={stat.isPercentage ? 1 : 0}
                      suffix={stat.value.includes('+') ? '+' : stat.isPercentage ? '%' : ''}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className='mb-1 font-semibold text-foreground'>{stat.label}</div>
                <div className='text-sm text-muted-foreground'>{stat.description}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
