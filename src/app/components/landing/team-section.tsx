import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Users } from 'lucide-react'
import { TeamCarousel } from '../../../components/lightswind/team-carousel'
import { motion, useInView } from 'framer-motion'

const teamMembers = [
  {
    id: '1',
    name: 'Lê Đức Lộc',
    role: 'SE181673',
    image: '/team-members/Loc.png',
    bio: 'Thành viên phát triển dự án'
  },
  {
    id: '2',
    name: 'Nguyễn Trung Kiên',
    role: 'SE181674',
    image: '/team-members/Kien.png',
    bio: 'Thành viên phát triển dự án'
  },
  {
    id: '3',
    name: 'Lưu Thế Vinh',
    role: 'SE181740',
    image: '/team-members/Vinh.webp',
    bio: 'Thành viên phát triển dự án'
  },
  {
    id: '4',
    name: 'Phạm Tiến Mạnh',
    role: 'SE182274',
    image: '/team-members/Manh.jpg',
    bio: 'Thành viên phát triển dự án'
  },
  {
    id: '5',
    name: 'Hoàng Thanh Duy',
    role: 'SE182314',
    image: '/team-members/Duy.jpg',
    bio: 'Thành viên phát triển dự án'
  }
]

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isSectionInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className='relative py-24 bg-gradient-to-b from-[#050001] via-[#1a0a1f] to-[#050001] overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/5 w-72 h-72 bg-[#ec4899]/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/5 w-72 h-72 bg-[#993140]/10 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10'>
        <motion.div
          ref={titleRef}
          initial={{ y: 60, opacity: 0 }}
          animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.68, -0.55, 0.265, 1.55] }}
          className='text-center mb-12'
        >
          <Badge className='mb-4 bg-gradient-to-r from-[#993140]/20 to-[#ec4899]/20 text-white border-[#ec4899]/30'>
            <Users className='w-4 h-4 mr-2' />
            Gặp Gỡ Đội Ngũ
          </Badge>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#ec4899] to-white bg-clip-text text-transparent mb-6'>
            Đội Ngũ Phát Triển INTEGRAVIA
          </h2>
          <p className='text-white/70 text-lg max-w-3xl mx-auto'>
            Đội ngũ đa ngành của chúng tôi kết hợp chuyên môn về kinh tế, khoa học dữ liệu và công nghệ để mang đến cho
            bạn những hiểu biết toàn diện về hành trình hội nhập kinh tế của Việt Nam.
          </p>
        </motion.div>

        <TeamCarousel
          members={teamMembers}
          title='ĐỘI NGŨ CỦA CHÚNG TÔI'
          titleSize='2xl'
          titleColor='#ec4899'
          background='transparent'
          cardWidth={320}
          cardHeight={420}
          cardRadius={20}
          showArrows={true}
          showDots={true}
          keyboardNavigation={true}
          touchNavigation={true}
          animationDuration={800}
          autoPlay={0}
          visibleCards={2}
          sideCardScale={0.85}
          sideCardOpacity={0.6}
          grayscaleEffect={true}
          infoPosition='bottom'
          infoTextColor='#ffffff'
          className='min-h-[80vh]'
          cardClassName='shadow-2xl border border-white/10'
        />
      </div>
    </motion.section>
  )
}
