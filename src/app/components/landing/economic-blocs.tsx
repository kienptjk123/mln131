import { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2, AlertCircle, Calendar, TrendingUp } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const blocs = [
  {
    id: 'asean',
    name: 'ASEAN',
    fullName: 'Hiệp hội các quốc gia Đông Nam Á',
    year: '1995',
    benefits: [
      'Mở rộng thị trường xuất khẩu trong khu vực',
      'Tăng cường hợp tác kinh tế và đầu tư',
      'Tiếp cận công nghệ và kinh nghiệm quản lý',
      'Nâng cao vị thế chính trị quốc tế'
    ],
    challenges: [
      'Cạnh tranh gay gắt với các nước thành viên',
      'Yêu cầu cải cách thể chế và pháp luật',
      'Áp lực về chất lượng sản phẩm và dịch vụ'
    ]
  },
  {
    id: 'wto',
    name: 'WTO',
    fullName: 'Tổ chức Thương mại Thế giới',
    year: '2007',
    benefits: [
      'Tiếp cận thị trường toàn cầu với 164 thành viên',
      'Hưởng lợi từ chế độ đãi ngộ tối huệ quốc',
      'Tăng cường xuất khẩu hàng hóa và dịch vụ',
      'Thu hút đầu tư nước ngoài (FDI)'
    ],
    challenges: [
      'Phải tuân thủ các cam kết mở cửa thị trường',
      'Cạnh tranh với hàng hóa nhập khẩu chất lượng cao',
      'Yêu cầu nâng cao năng lực cạnh tranh quốc gia'
    ]
  },
  {
    id: 'cptpp',
    name: 'CPTPP',
    fullName: 'Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương',
    year: '2018',
    benefits: [
      'Tiếp cận 11 nền kinh tế lớn với 500 triệu dân',
      'Xóa bỏ 99% thuế quan hàng hóa',
      'Tăng cường xuất khẩu nông sản và dệt may',
      'Cải thiện môi trường đầu tư và kinh doanh'
    ],
    challenges: [
      'Cam kết cao về lao động và môi trường',
      'Yêu cầu cải cách sở hữu trí tuệ',
      'Cạnh tranh với các nước phát triển'
    ]
  },
  {
    id: 'evfta',
    name: 'EVFTA',
    fullName: 'Hiệp định Thương mại Tự do Việt Nam - EU',
    year: '2020',
    benefits: [
      'Xóa bỏ 99% thuế quan với thị trường EU',
      'Tăng xuất khẩu sang thị trường 500 triệu dân',
      'Tiếp cận công nghệ và tiêu chuẩn châu Âu',
      'Nâng cao uy tín và thương hiệu quốc gia'
    ],
    challenges: [
      'Yêu cầu nghiêm ngặt về tiêu chuẩn sản phẩm',
      'Cam kết về phát triển bền vững',
      'Cạnh tranh với hàng hóa chất lượng cao'
    ]
  }
]

export function EconomicBlocs() {
  const [selectedBloc, setSelectedBloc] = useState(blocs[0].id)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const isTabsInView = useInView(tabsRef, { once: true, margin: '-100px' })
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className='bg-muted/30 py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className='mb-12 text-center'
        >
          <h2 className='mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl'>
            Các Khối Kinh Tế Quan Trọng
          </h2>
          <p className='text-pretty text-lg text-muted-foreground'>
            Thông tin chi tiết về các hiệp định và tổ chức kinh tế mà Việt Nam tham gia
          </p>
        </motion.div>

        <Tabs value={selectedBloc} onValueChange={setSelectedBloc} className='mx-auto max-w-5xl'>
          <motion.div
            ref={tabsRef}
            initial={{ opacity: 0, y: 15 }}
            animate={isTabsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <TabsList className='grid w-full grid-cols-2 lg:grid-cols-4'>
              {blocs.map((bloc, index) => (
                <motion.div
                  key={bloc.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isTabsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <TabsTrigger value={bloc.id} className='tabs-trigger'>
                    {bloc.name}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          {blocs.map((bloc) => (
            <TabsContent key={bloc.id} value={bloc.id} className='mt-6'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className='content-card'>
                  <CardHeader>
                    <div className='flex items-start justify-between'>
                      <div>
                        <CardTitle className='text-2xl'>{bloc.fullName}</CardTitle>
                        <CardDescription className='mt-2 flex items-center gap-2'>
                          <Calendar className='h-4 w-4' />
                          Việt Nam tham gia năm {bloc.year}
                        </CardDescription>
                      </div>
                      <Badge variant='secondary' className='text-sm'>
                        {bloc.name}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    <div>
                      <h4 className='mb-4 flex items-center gap-2 text-lg font-semibold text-foreground'>
                        <CheckCircle2 className='h-5 w-5 text-accent' />
                        Lợi Ích & Cơ Hội
                      </h4>
                      <ul className='space-y-2'>
                        {bloc.benefits.map((benefit, index) => (
                          <li key={index} className='flex items-start gap-2 text-muted-foreground'>
                            <TrendingUp className='mt-1 h-4 w-4 flex-shrink-0 text-accent' />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='mb-4 flex items-center gap-2 text-lg font-semibold text-foreground'>
                        <AlertCircle className='h-5 w-5 text-primary' />
                        Thách Thức
                      </h4>
                      <ul className='space-y-2'>
                        {bloc.challenges.map((challenge, index) => (
                          <li key={index} className='flex items-start gap-2 text-muted-foreground'>
                            <AlertCircle className='mt-1 h-4 w-4 flex-shrink-0 text-primary' />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
