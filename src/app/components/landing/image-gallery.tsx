import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Camera } from 'lucide-react'

interface GalleryImage {
  src: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    src: '/hoinghigallery/asean-summit-with-flags-of-all-10-southeast-asian-.jpg',
    title: 'ASEAN Summit',
    description: 'Hội nghị cấp cao ASEAN với cờ của 10 quốc gia Đông Nam Á'
  },
  {
    src: '/hoinghigallery/cptpp-trade-agreement-signing-ceremony-with-flags-.jpg',
    title: 'CPTPP Agreement',
    description: 'Lễ ký kết Hiệp định CPTPP với các quốc gia thành viên'
  },
  {
    src: '/hoinghigallery/eu-vietnam-trade-agreement-signing-with-european-a.jpg',
    title: 'EVFTA Agreement',
    description: 'Lễ ký kết Hiệp định Thương mại Tự do Việt Nam - EU'
  },
  {
    src: '/hoinghigallery/rcep-asia-pacific-trade-agreement-with-multiple-as.jpg',
    title: 'RCEP Agreement',
    description: 'Hiệp định Đối tác Kinh tế Toàn diện Khu vực châu Á - Thái Bình Dương'
  },
  {
    src: '/hoinghigallery/vietnam-korea-trade-partnership-with-vietnamese-an.jpg',
    title: 'Vietnam-Korea Partnership',
    description: 'Đối tác thương mại Việt Nam - Hàn Quốc'
  },
  {
    src: '/hoinghigallery/84-1697681278-tpp-001-15205611178601273539044.jpg',
    title: 'CPTPP Agreement',
    description: 'Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương'
  }
]

export function ImageGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const isContainerInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className='relative py-24 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/5 w-72 h-72 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/5 w-72 h-72 bg-accent/5 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className='mb-16 text-center'
        >
          <Badge className='mb-4 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30'>
            <Camera className='w-4 h-4 mr-2' />
            Gallery
          </Badge>
          <h2 className='mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl lg:text-6xl'>
            Khoảnh Khắc Hội Nhập
          </h2>
          <p className='mx-auto max-w-3xl text-pretty text-lg text-muted-foreground leading-relaxed'>
            Những khoảnh khắc lịch sử trong hành trình hội nhập kinh tế của Việt Nam
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial='hidden'
          animate={isContainerInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className='gallery-item relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer'
            >
              <div className='relative w-full h-full'>
                <img
                  src={image.src}
                  alt={image.title}
                  className='w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105'
                  loading='lazy'
                />
                <div className='gallery-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <h3 className='text-xl font-bold mb-2'>{image.title}</h3>
                    <p className='text-sm text-white/90'>{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
