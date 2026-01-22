'use client'
import {
  ArrowRight,
  AlertTriangle,
  DollarSign,
  Shield,
  Lock,
  Heart,
  BookOpen,
  Scale,
  Clock,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen overflow-hidden pt-16 bg-gradient-to-br from-red-950 via-black to-yellow-950'
    >
      {/* SECTION 1 - HERO */}
      <div className='container mx-auto px-4 py-20 md:py-32'>
        <div className='mx-auto max-w-7xl text-center'>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='mb-8 text-balance text-6xl font-bold leading-tight tracking-tight text-yellow-50 md:text-7xl lg:text-8xl'
          >
            Tham nhũng có phải do
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='block bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent'
            >
              một Đảng sinh ra?
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mb-12 text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto'
          >
            Hay là hệ quả tất yếu khi{' '}
            <span className='text-yellow-400 font-semibold'>quyền lực không được kiểm soát</span>?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Link to='/ly-luan'>
              <Button
                size='lg'
                className='group gap-2 text-lg px-8 py-6 bg-gradient-to-r from-red-700 to-yellow-700 hover:from-red-600 hover:to-yellow-600 border-yellow-600'
              >
                <BookOpen className='h-5 w-5' />
                Tìm hiểu lý thuyết
                <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
              </Button>
            </Link>
            <Link to='/thuc-tien'>
              <Button
                size='lg'
                variant='outline'
                className='text-lg px-8 py-6 bg-transparent border-yellow-700 text-yellow-400 hover:bg-yellow-900/30'
              >
                <TrendingUp className='h-5 w-5' />
                Xem tình huống mô phỏng
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2 - VẤN ĐỀ CỐT LÕI */}
      <div className='relative py-24 bg-black/50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'
            >
              Vấn đề Cốt lõi
            </motion.h2>

            <div className='grid md:grid-cols-3 gap-8 mb-12'>
              {[
                { icon: AlertTriangle, title: 'Quyền lực không kiểm soát', color: 'from-red-600 to-red-800' },
                { icon: DollarSign, title: 'Lợi ích cá nhân', color: 'from-yellow-600 to-yellow-800' },
                { icon: Shield, title: 'Cơ chế lỏng lẻo', color: 'from-orange-600 to-red-700' }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className='relative group'
                  >
                    <div
                      className='absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity rounded-xl blur-xl'
                      style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                    />
                    <div className='relative p-8 rounded-xl border border-yellow-600/30 bg-gradient-to-br from-black/80 to-red-950/50 backdrop-blur-sm'>
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-4`}
                      >
                        <Icon className='h-8 w-8 text-white' />
                      </div>
                      <h3 className='text-xl font-bold text-yellow-100'>{item.title}</h3>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='inline-flex items-center gap-4 text-2xl font-bold text-red-400'>
                <ArrowRight className='h-8 w-8' />
                <span>Dẫn đến</span>
                <ArrowRight className='h-8 w-8' />
              </div>
              <div className='mt-4 text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>
                THAM NHŨNG
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 3 - QUAN ĐIỂM TBT */}
      <div className='relative py-24'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mb-12'
            >
              <div className='relative p-8 md:p-12 rounded-2xl border-2 border-yellow-600/50 bg-gradient-to-br from-red-950/60 to-black/80 backdrop-blur-sm'>
                <div className='absolute top-4 left-4 text-6xl text-red-500/20'>"</div>
                <div className='absolute bottom-4 right-4 text-6xl text-red-500/20'>"</div>
                <p className='text-2xl md:text-3xl font-semibold text-yellow-50 text-center italic mb-4 relative z-10'>
                  Tham nhũng là giặc nội xâm, ăn mòn từ bên trong, nguy hiểm hơn giặc ngoại xâm
                </p>
                <p className='text-right text-gray-400 relative z-10'>— Tổng Bí thư Nguyễn Phú Trọng</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='space-y-4 mb-8'
            >
              {[
                'Tham nhũng là khuyết tật của quyền lực',
                'Phải nhốt quyền lực vào lồng cơ chế',
                'Phòng hơn chống - xây dựng thể chế vững chắc'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className='flex items-start gap-4 p-4 rounded-lg border border-red-900/30 bg-gradient-to-r from-red-950/30 to-black/50'
                >
                  <div className='mt-1 h-2 w-2 rounded-full bg-yellow-500 flex-shrink-0' />
                  <span className='text-lg text-gray-200'>{point}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className='text-center'
            >
              <Link to='/ly-luan'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-red-700 to-yellow-700 hover:from-red-600 hover:to-yellow-600'
                >
                  <BookOpen className='mr-2 h-5 w-5' />
                  Tìm hiểu học thuyết đầy đủ
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 4 - MÔ HÌNH 4 KHÔNG */}
      <div className='relative py-24 bg-gradient-to-b from-black/50 to-red-950/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'
            >
              Mô hình "4 Không"
            </motion.h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  icon: Lock,
                  title: 'Không thể',
                  subtitle: 'Thể chế',
                  description: 'Xây dựng hệ thống pháp luật chặt chẽ, quy trình minh bạch',
                  example: 'VD: Đấu thầu qua mạng, chữ ký số, công khai tài chính',
                  color: 'from-red-600 to-red-800'
                },
                {
                  icon: AlertTriangle,
                  title: 'Không dám',
                  subtitle: 'Kỷ luật',
                  description: 'Trừng trị nghiêm minh, không có vùng cấm, không có ngoại lệ',
                  example:
                    'VD: Xử lý 170+ quan chức cấp cao, trong đó 33 Ủy viên BCH TW Đảng, 50 tướng lĩnh (2012-2024)',
                  color: 'from-orange-600 to-red-700'
                },
                {
                  icon: Heart,
                  title: 'Không cần',
                  subtitle: 'Đãi ngộ',
                  description: 'Lương bổng xứng đáng, đời sống đảm bảo, tránh cám dỗ',
                  example: 'VD: Cải cách tiền lương công chức từ 2024',
                  color: 'from-yellow-600 to-yellow-800'
                },
                {
                  icon: Heart,
                  title: 'Không muốn',
                  subtitle: 'Giáo dục',
                  description: 'Giáo dục đạo đức, lý tưởng cách mạng, văn hóa liêm chính',
                  example: 'VD: Học tập Bác Hồ, xây dựng tác phong người CBNV',
                  color: 'from-yellow-500 to-orange-600'
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.08, y: -12 }}
                    className='relative group'
                  >
                    <div
                      className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity rounded-2xl blur-2xl'
                      style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                    />
                    <div className='relative h-full p-6 rounded-2xl border border-yellow-600/30 bg-gradient-to-br from-black/90 to-red-950/60 backdrop-blur-sm transition-all duration-300 group-hover:border-yellow-500/60'>
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} mb-4`}
                      >
                        <Icon className='h-7 w-7 text-white' />
                      </div>
                      <h3 className='text-2xl font-bold text-yellow-100 mb-1'>{item.title}</h3>
                      <p className='text-sm text-yellow-600 font-semibold mb-3'>{item.subtitle}</p>
                      <p className='text-sm text-gray-300 mb-4'>{item.description}</p>
                      <div className='pt-4 border-t border-yellow-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <p className='text-xs text-gray-400 italic'>{item.example}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 - THỰC TIỄN */}
      <div className='relative py-24'>
        <div className='container mx-auto px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'
            >
              Thực thi Thực tế
            </motion.h2>

            <div className='grid md:grid-cols-2 gap-12 mb-16'>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='space-y-8'
              >
                {[
                  { number: '170+', label: 'Quan chức cấp cao bị xử lý', subtext: '2012-2022' },
                  { number: '100%', label: 'Không vùng cấm, không ngoại lệ', subtext: 'Cam kết của Đảng' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className='p-8 rounded-2xl border border-yellow-600/40 bg-gradient-to-br from-red-950/50 to-black/70 backdrop-blur-sm'
                  >
                    <div className='text-6xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-xl font-semibold text-yellow-100 mb-1'>{stat.label}</div>
                    <div className='text-sm text-gray-400'>{stat.subtext}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='p-8 rounded-2xl border border-yellow-600/40 bg-gradient-to-br from-black/80 to-red-950/60 backdrop-blur-sm'
              >
                <h3 className='text-2xl font-bold text-yellow-100 mb-6 flex items-center gap-2'>
                  <Clock className='h-6 w-6' />8 Đại án nổi bật
                </h3>
                <div className='space-y-4'>
                  {[
                    { year: '2018', case: 'Đánh bạc nghìn tỷ', detail: 'Phan Văn Vĩnh - 4.700 tỷ' },
                    { year: '2019', case: 'Vụ Vũ "nhôm"', detail: 'Chiếm đoạt 22.000 tỷ' },
                    { year: '2021', case: 'Việt Á', detail: 'Kit test COVID - 4.000 tỷ' },
                    { year: '2022', case: 'Tân Hoàng Minh', detail: 'Lừa đảo trái phiếu 10.300 tỷ' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className='flex items-start gap-4 p-4 rounded-lg border border-red-900/40 bg-gradient-to-r from-red-950/40 to-black/60 cursor-pointer transition-all hover:border-yellow-600/50'
                    >
                      <div className='flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-yellow-600 flex items-center justify-center font-bold text-white text-sm'>
                        {item.year}
                      </div>
                      <div>
                        <h4 className='font-semibold text-yellow-100'>{item.case}</h4>
                        <p className='text-sm text-gray-400'>{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <Link to='/thuc-tien'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-red-700 to-yellow-700 hover:from-red-600 hover:to-yellow-600'
                >
                  <Scale className='mr-2 h-5 w-5' />
                  Xem chi tiết các vụ án
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Background Blobs */}
      <div className='absolute inset-0 -z-10'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className='absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-900/30 blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className='absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-yellow-800/30 blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className='absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-950/40 blur-3xl'
        />
      </div>

      {/* Diagonal Stripe Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='absolute inset-0 -z-10'
      >
        <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(234,179,8,0.1)_50%,transparent_52%)] bg-[length:20px_20px]' />
      </motion.div>
    </section>
  )
}
