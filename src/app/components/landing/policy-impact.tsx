import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Gavel,
  TrendingUp,
  Building2,
  Users,
  Globe,
  Target,
  CheckCircle,
  Factory,
  Handshake,
  Briefcase,
  PieChart,
  AlertTriangle
} from 'lucide-react'

const policyAreas = [
  {
    category: 'Chính sách Thương mại & FTA',
    icon: Handshake,
    color: 'from-red-900 to-red-700',
    policies: [
      {
        name: 'Chiến lược Hiệp định Thương mại Tự do (FTA)',
        description: 'Việt Nam đã ký kết 16 FTA, bao gồm CPTPP, EVFTA, RCEP, tạo cơ hội tiếp cận thị trường toàn cầu',
        impact: 'Kim ngạch xuất khẩu tăng từ 72 tỷ USD (2010) lên 371 tỷ USD (2023)',
        status: 'Đang triển khai',
        keyMeasures: [
          'Giảm thuế quan xuống 0% cho hầu hết mặt hàng',
          'Mở cửa thị trường dịch vụ',
          'Bảo hộ sở hữu trí tuệ'
        ],
        benefits: ['Mở rộng thị trường xuất khẩu', 'Thu hút FDI chất lượng cao', 'Nâng cao năng lực cạnh tranh'],
        challenges: [
          'Cạnh tranh gay gắt từ hàng nhập khẩu',
          'Áp lực cải cách thể chế',
          'Yêu cầu nâng cao chất lượng sản phẩm'
        ]
      },
      {
        name: 'Tham gia WTO (2007)',
        description: 'Việt Nam gia nhập WTO, cam kết mở cửa thị trường và tuân thủ các quy tắc thương mại quốc tế',
        impact: 'Tỷ trọng thương mại/GDP tăng từ 140% (2007) lên 210% (2023)',
        status: 'Đã thực hiện',
        keyMeasures: [
          'Cắt giảm thuế quan trung bình xuống 13.4%',
          'Mở cửa thị trường dịch vụ ngân hàng, bảo hiểm',
          'Cải cách pháp luật thương mại'
        ],
        benefits: [
          'Tăng cường hội nhập kinh tế toàn cầu',
          'Cải thiện môi trường đầu tư',
          'Tiếp cận công nghệ tiên tiến'
        ],
        challenges: [
          'Doanh nghiệp nhỏ gặp khó khăn cạnh tranh',
          'Mất cân đối thương mại',
          'Phụ thuộc vào thị trường xuất khẩu'
        ]
      }
    ]
  },
  {
    category: 'Chính sách Thu hút Đầu tư',
    icon: Building2,
    color: 'from-red-800 to-amber-700',
    policies: [
      {
        name: 'Chiến lược Thu hút FDI',
        description:
          'Chính sách ưu đãi đầu tư, phát triển khu công nghiệp, khu kinh tế để thu hút vốn FDI chất lượng cao',
        impact: 'Vốn FDI đăng ký đạt 36.6 tỷ USD năm 2023, tích lũy trên 460 tỷ USD',
        status: 'Đang mở rộng',
        keyMeasures: [
          'Ưu đãi thuế cho dự án công nghệ cao',
          'Phát triển 18 khu kinh tế ven biển',
          'Đơn giản hóa thủ tục đầu tư'
        ],
        benefits: [
          'Tạo việc làm cho 4+ triệu lao động',
          'Chuyển giao công nghệ và kỹ năng quản lý',
          'Tăng kim ngạch xuất khẩu'
        ],
        challenges: [
          'Ô nhiễm môi trường từ khu công nghiệp',
          'Liên kết yếu với doanh nghiệp nội địa',
          'Phụ thuộc vào FDI'
        ]
      },
      {
        name: 'Cải thiện Môi trường Kinh doanh',
        description: 'Cải cách thủ tục hành chính, nâng cao chỉ số năng lực cạnh tranh quốc gia',
        impact: 'Xếp hạng Doing Business tăng từ 104 (2010) lên 70 (2020)',
        status: 'Liên tục cải thiện',
        keyMeasures: ['Cơ chế một cửa quốc gia', 'Chính phủ điện tử', 'Minh bạch hóa chính sách'],
        benefits: ['Giảm thời gian, chi phí khởi nghiệp', 'Tăng niềm tin nhà đầu tư', 'Thúc đẩy đổi mới sáng tạo'],
        challenges: ['Tham nhũng, quan liêu còn tồn tại', 'Thiếu nhân lực chất lượng cao', 'Hạ tầng chưa đồng đều']
      }
    ]
  },
  {
    category: 'Chính sách Chuyển dịch Cơ cấu',
    icon: Factory,
    color: 'from-amber-700 to-orange-700',
    policies: [
      {
        name: 'Công nghiệp hóa, Hiện đại hóa',
        description: 'Chuyển dịch cơ cấu kinh tế từ nông nghiệp sang công nghiệp và dịch vụ',
        impact: 'Tỷ trọng công nghiệp-dịch vụ tăng từ 62% (1990) lên 85% (2023)',
        status: 'Đang đẩy mạnh',
        keyMeasures: [
          'Phát triển công nghiệp chế biến, chế tạo',
          'Ứng dụng công nghệ 4.0',
          'Nâng cao năng suất lao động'
        ],
        benefits: ['Tăng GDP bình quân 6-7%/năm', 'Nâng cao thu nhập người dân', 'Hiện đại hóa nền kinh tế'],
        challenges: ['Công nghệ còn lạc hậu', 'Giá trị gia tăng thấp', 'Thiếu doanh nghiệp công nghệ lớn']
      },
      {
        name: 'Phát triển Kinh tế Số',
        description: 'Chuyển đổi số toàn diện, phát triển nền tảng số, doanh nghiệp công nghệ',
        impact: 'Kinh tế số đóng góp 14.3% GDP (2023), mục tiêu 20% vào 2025',
        status: 'Ưu tiên cao',
        keyMeasures: ['Hạ tầng băng thông rộng', 'Đào tạo nhân lực số', 'Hỗ trợ startup công nghệ'],
        benefits: ['Tăng năng suất lao động', 'Tạo mô hình kinh doanh mới', 'Hội nhập kinh tế số toàn cầu'],
        challenges: ['Khoảng cách số giữa vùng miền', 'An ninh mạng', 'Thiếu nhân lực công nghệ cao']
      }
    ]
  },
  {
    category: 'Phát triển Nguồn nhân lực',
    icon: Users,
    color: 'from-orange-700 to-red-700',
    policies: [
      {
        name: 'Đào tạo Nguồn nhân lực Chất lượng cao',
        description: 'Nâng cao chất lượng giáo dục, đào tạo nghề, đáp ứng yêu cầu hội nhập',
        impact: 'Tỷ lệ lao động qua đào tạo tăng từ 40% (2010) lên 68% (2023)',
        status: 'Đang triển khai',
        keyMeasures: ['Cải cách giáo dục đại học', 'Liên kết doanh nghiệp-trường học', 'Đào tạo kỹ năng số'],
        benefits: ['Nâng cao năng suất lao động', 'Đáp ứng nhu cầu FDI', 'Tăng thu nhập người lao động'],
        challenges: [
          'Chất lượng đào tạo chưa đồng đều',
          'Thiếu giáo viên chất lượng cao',
          'Chương trình đào tạo chưa sát thực tế'
        ]
      },
      {
        name: 'Hội nhập Thị trường Lao động ASEAN',
        description: 'Tham gia Hiệp định Công nhận Lẫn nhau (MRA) về trình độ nghề nghiệp trong ASEAN',
        impact: 'Hơn 100,000 lao động Việt Nam làm việc tại các nước ASEAN',
        status: 'Đang mở rộng',
        keyMeasures: ['Chuẩn hóa trình độ nghề nghiệp', 'Đào tạo ngoại ngữ', 'Hỗ trợ lao động di cư'],
        benefits: ['Tăng cơ hội việc làm', 'Học hỏi kinh nghiệm quốc tế', 'Chuyển giao kiến thức'],
        challenges: ['Chảy máu chất xám', 'Cạnh tranh lao động giá rẻ', 'Bảo vệ quyền lợi lao động']
      }
    ]
  }
]

const impactMetrics = [
  {
    metric: 'Tăng trưởng GDP',
    value: '6.8%',
    period: 'Trung bình 2010-2023',
    description: 'Tăng trưởng bền vững nhờ hội nhập kinh tế',
    icon: TrendingUp,
    trend: 'positive'
  },
  {
    metric: 'Quan hệ Thương mại',
    value: '170+',
    period: 'Quốc gia & vùng lãnh thổ',
    description: 'Mạng lưới thương mại rộng khắp toàn cầu',
    icon: Globe,
    trend: 'positive'
  },
  {
    metric: 'Hiệp định FTA',
    value: '16',
    period: 'FTA đã ký kết',
    description: 'Bao phủ 60+ quốc gia, 70% GDP thế giới',
    icon: Handshake,
    trend: 'positive'
  },
  {
    metric: 'Vốn FDI',
    value: '460+ tỷ USD',
    period: 'Tích lũy đến 2023',
    description: 'Điểm đến hấp dẫn cho đầu tư nước ngoài',
    icon: Building2,
    trend: 'positive'
  }
]

interface PolicyImpactProps {
  withoutSection?: boolean
}

export function PolicyImpact({ withoutSection = false }: PolicyImpactProps) {
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
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <Badge className='mb-4 bg-gradient-to-r from-red-900/20 to-amber-700/20 text-red-300 border-red-700/30'>
            <Gavel className='w-4 h-4 mr-2' />
            Tác động Chính sách Hội nhập
          </Badge>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-red-100 to-amber-100 bg-clip-text text-transparent mb-6'>
            Chính sách Thúc đẩy Hội nhập Kinh tế
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl mx-auto'>
            Khám phá các chính sách chiến lược đã giúp Việt Nam hội nhập thành công vào nền kinh tế thế giới, mang lại
            cơ hội phát triển và những thách thức cần vượt qua.
          </p>
        </motion.div>
      )}

      {/* Impact Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
      >
        {impactMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card
              key={metric.metric}
              className='bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group'
            >
              <CardContent className='p-6 text-center'>
                <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-900 to-amber-700 rounded-full mb-4 group-hover:scale-110 transition-transform'>
                  <Icon className='w-6 h-6 text-white' />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>{metric.value}</div>
                <div className='text-red-300 font-medium mb-1'>{metric.metric}</div>
                <div className='text-gray-400 text-xs mb-2'>{metric.period}</div>
                <div className='text-gray-300 text-sm'>{metric.description}</div>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>

      {/* Policy Areas */}
      <div className='space-y-12'>
        {policyAreas.map((area, areaIndex) => {
          const Icon = area.icon

          return (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + areaIndex * 0.2 }}
            >
              <div className='mb-8'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${area.color} rounded-full`}
                  >
                    <Icon className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>{area.category}</h3>
                </div>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {area.policies.map((policy) => (
                  <Card
                    key={policy.name}
                    className='bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group'
                  >
                    <CardContent className='p-6'>
                      <div className='flex items-start justify-between mb-4'>
                        <h4 className='text-lg font-semibold text-white group-hover:text-red-300 transition-colors'>
                          {policy.name}
                        </h4>
                        <Badge
                          className={`${
                            policy.status === 'Đã thực hiện'
                              ? 'bg-green-500/20 text-green-300 border-green-500/30'
                              : policy.status === 'Đang triển khai' || policy.status === 'Đang mở rộng'
                                ? 'bg-red-500/20 text-red-300 border-red-500/30'
                                : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          }`}
                        >
                          {policy.status}
                        </Badge>
                      </div>

                      <p className='text-gray-300 mb-4 leading-relaxed'>{policy.description}</p>

                      <div className='mb-4 p-3 bg-gradient-to-r from-red-900/10 to-amber-700/10 rounded-lg border border-white/10'>
                        <div className='flex items-center mb-2'>
                          <Target className='w-4 h-4 text-amber-400 mr-2' />
                          <span className='text-sm font-medium text-amber-300'>Tác động Đạt được</span>
                        </div>
                        <p className='text-white font-medium'>{policy.impact}</p>
                      </div>

                      <div className='mb-4'>
                        <h5 className='text-sm font-medium text-red-300 mb-2'>Biện pháp Chính sách:</h5>
                        <div className='space-y-1'>
                          {policy.keyMeasures.map((measure, idx) => (
                            <div key={idx} className='flex items-start space-x-2'>
                              <CheckCircle className='w-3 h-3 text-green-400 mt-1 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>{measure}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <h5 className='text-sm font-medium text-green-300 mb-2 flex items-center'>
                            <CheckCircle className='w-3 h-3 mr-1' />
                            Lợi ích
                          </h5>
                          <div className='space-y-1'>
                            {policy.benefits.map((benefit, idx) => (
                              <div key={idx} className='text-gray-400 text-xs'>
                                • {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className='text-sm font-medium text-orange-300 mb-2 flex items-center'>
                            <AlertTriangle className='w-3 h-3 mr-1' />
                            Thách thức
                          </h5>
                          <div className='space-y-1'>
                            {policy.challenges.map((challenge, idx) => (
                              <div key={idx} className='text-gray-400 text-xs'>
                                • {challenge}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className='mt-16'
      >
        <Card className='bg-gradient-to-r from-red-900/10 via-amber-700/10 to-orange-700/10 backdrop-blur-sm border border-white/10'>
          <CardContent className='p-8 text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>Khám phá Phân tích Chính sách Chi tiết</h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Tìm hiểu sâu hơn về cơ sở dữ liệu chính sách và đánh giá tác động toàn diện. Truy cập báo cáo chi tiết,
              trực quan hóa dữ liệu và khuyến nghị chính sách.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button className='bg-gradient-to-r from-red-900 to-amber-700 hover:from-red-800 hover:to-amber-600 text-white'>
                <PieChart className='w-4 h-4 mr-2' />
                Xem Bảng điều khiển
              </Button>
              <Button variant='outline' className='border-white/20 text-white hover:bg-white/10 bg-transparent'>
                <Briefcase className='w-4 h-4 mr-2' />
                Tải Tài liệu Chính sách
              </Button>
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
    <section ref={ref} className='relative py-24 bg-gradient-to-b from-black via-slate-950 to-black'>
      <div className='absolute inset-0'>
        <div className='absolute top-1/3 left-1/6 w-80 h-80 bg-red-900/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/3 right-1/6 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-800/8 rounded-full blur-3xl' />
      </div>
      {content}
    </section>
  )
}
