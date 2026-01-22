'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts'
import { motion, useInView } from 'framer-motion'

const structureData = [
  { year: '2016', cases: 45, officials: 85, recovered: 120 },
  { year: '2017', cases: 68, officials: 142, recovered: 280 },
  { year: '2018', cases: 92, officials: 198, recovered: 450 },
  { year: '2019', cases: 125, officials: 267, recovered: 620 },
  { year: '2020', cases: 158, officials: 342, recovered: 850 },
  { year: '2021', cases: 187, officials: 421, recovered: 1100 },
  { year: '2022', cases: 215, officials: 489, recovered: 1380 },
  { year: '2023', cases: 248, officials: 563, recovered: 1650 }
]

const currentStructure = [
  { name: 'Cán bộ cấp cao', value: 35, color: '#dc2626' },
  { name: 'Cán bộ cấp trung', value: 45, color: '#8B1538' },
  { name: 'Cán bộ cơ sở', value: 20, color: '#be123c' }
]

const gdpGrowthData = [
  { year: '2016', transparency: 58, prosecution: 45, recovered: 120 },
  { year: '2017', transparency: 62, prosecution: 68, recovered: 280 },
  { year: '2018', transparency: 67, prosecution: 92, recovered: 450 },
  { year: '2019', transparency: 71, prosecution: 125, recovered: 620 },
  { year: '2020', transparency: 74, prosecution: 158, recovered: 850 },
  { year: '2021', transparency: 78, prosecution: 187, recovered: 1100 },
  { year: '2022', transparency: 82, prosecution: 215, recovered: 1380 },
  { year: '2023', transparency: 85, prosecution: 248, recovered: 1650 }
]

interface TooltipPayload {
  name: string
  value: number | string
  color: string
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayload[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded-lg border border-border bg-background/95 p-3 shadow-lg backdrop-blur-sm'>
        <p className='mb-2 font-semibold text-foreground'>{label}</p>
        {payload.map((entry: TooltipPayload, index: number) => (
          <p key={index} className='text-sm' style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    )
  }
  return null
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
}

export function EconomicTransformation() {
  const sectionRef = useRef<HTMLElement>(null)
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [shouldRenderCharts, setShouldRenderCharts] = useState(false)

  // Defer chart rendering to avoid lag spike
  useEffect(() => {
    if (isSectionInView) {
      // Small delay to let the section animation complete first
      const timer = setTimeout(() => setShouldRenderCharts(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isSectionInView])

  return (
    <section ref={sectionRef} className='py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='mb-12 text-center'
        >
          <h2 className='mb-4 text-balance text-3xl font-bold text-red-50 md:text-4xl'>
            Thành Tựu Đấu Tranh Phòng Chống Tham Nhũng
          </h2>
          <p className='text-pretty text-lg text-gray-300'>
            Kết quả chiến dịch "Đốt lò" qua các năm 2016-2023
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid gap-8 lg:grid-cols-2'
        >
          <motion.div variants={itemVariants}>
            <Card className='overflow-hidden border-red-900/30 bg-gradient-to-br from-gray-900/50 to-black/80'>
              <CardHeader>
                <CardTitle className='text-red-400'>Số Liệu Xử Lý Tham Nhũng (2016-2023)</CardTitle>
                <CardDescription className='text-gray-400'>Số vụ án, cán bộ và tài sản thu hồi (tỷ VNĐ)</CardDescription>
              </CardHeader>
              <CardContent>
                {shouldRenderCharts ? (
                  <ResponsiveContainer width='100%' height={300}>
                    <AreaChart data={gdpGrowthData}>
                    <defs>
                      <linearGradient id='gdpGradient' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#dc2626' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#dc2626' stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' opacity={0.3} />
                    <XAxis dataKey='year' stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type='monotone'
                      dataKey='recovered'
                      stroke='#dc2626'
                      strokeWidth={2}
                      fill='url(#gdpGradient)'
                      name='Tài sản thu hồi (tỷ)'
                    />
                  </AreaChart>
                </ResponsiveContainer>
                ) : (
                  <div className='h-[300px] flex items-center justify-center'>
                    <div className='text-gray-400'>Đang tải...</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className='overflow-hidden border-red-900/30 bg-gradient-to-br from-gray-900/50 to-black/80'>
              <CardHeader>
                <CardTitle className='text-red-400'>Xu Hướng Đấu Tranh (2016-2023)</CardTitle>
                <CardDescription className='text-gray-400'>Số vụ án và cán bộ bị xử lý qua các năm</CardDescription>
              </CardHeader>
              <CardContent>
                {shouldRenderCharts ? (
                  <ResponsiveContainer width='100%' height={300}>
                    <LineChart data={structureData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' opacity={0.3} />
                    <XAxis dataKey='year' stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='cases'
                      name='Số vụ án'
                      stroke='#dc2626'
                      strokeWidth={2}
                      dot={{ fill: '#dc2626', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type='monotone'
                      dataKey='officials'
                      name='Cán bộ xử lý'
                      stroke='#f97316'
                      strokeWidth={2}
                      dot={{ fill: '#f97316', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type='monotone'
                      dataKey='recovered'
                      name='Tài sản thu hồi (tỷ)'
                      stroke='#fbbf24'
                      strokeWidth={2}
                      dot={{ fill: '#fbbf24', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className='h-[300px] flex items-center justify-center'>
                    <div className='text-gray-400'>Đang tải...</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className='overflow-hidden border-red-900/30 bg-gradient-to-br from-gray-900/50 to-black/80'>
              <CardHeader>
                <CardTitle className='text-red-400'>So Sánh Số Liệu (2016-2023)</CardTitle>
                <CardDescription className='text-gray-400'>Số vụ án, cán bộ xử lý và tài sản thu hồi</CardDescription>
              </CardHeader>
              <CardContent>
                {shouldRenderCharts ? (
                  <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={structureData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' opacity={0.3} />
                    <XAxis dataKey='year' stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey='cases' name='Số vụ án' fill='#dc2626' radius={[4, 4, 0, 0]} />
                    <Bar dataKey='officials' name='Cán bộ xử lý' fill='#f97316' radius={[4, 4, 0, 0]} />
                  </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className='h-[300px] flex items-center justify-center'>
                    <div className='text-gray-400'>Đang tải...</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className='overflow-hidden border-red-900/30 bg-gradient-to-br from-gray-900/50 to-black/80'>
              <CardHeader>
                <CardTitle className='text-red-400'>Phân Loại Cán Bộ Bị Xử Lý</CardTitle>
                <CardDescription className='text-gray-400'>Tỷ lệ theo cấp bậc chức vụ (%)</CardDescription>
              </CardHeader>
              <CardContent>
                {shouldRenderCharts ? (
                  <ResponsiveContainer width='100%' height={300}>
                    <PieChart>
                    <Pie
                      data={currentStructure}
                      cx='50%'
                      cy='50%'
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill='#8884d8'
                      dataKey='value'
                      strokeWidth={2}
                      stroke='#1a1a1a'
                    >
                      {currentStructure.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className='h-[300px] flex items-center justify-center'>
                    <div className='text-muted-foreground'>Đang tải...</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Card className='mt-8 border-primary/20 bg-gradient-to-br from-background to-background/50'>
            <CardHeader>
              <CardTitle className='text-primary'>Phân Tích Chuyển Dịch</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-6 md:grid-cols-3'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='space-y-2'
              >
                <div className='flex items-center gap-2'>
                  <div className='h-3 w-3 rounded-full' style={{ backgroundColor: '#dc2626' }} />
                  <h4 className='font-semibold text-foreground'>Nông nghiệp</h4>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Giảm từ 38.7% (1990) xuống 11.8% (2023), phản ánh quá trình công nghiệp hóa và đô thị hóa.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='space-y-2'
              >
                <div className='flex items-center gap-2'>
                  <div className='h-3 w-3 rounded-full' style={{ backgroundColor: '#8B1538' }} />
                  <h4 className='font-semibold text-foreground'>Công nghiệp</h4>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Tăng từ 22.7% (1990) lên 38.2% (2023), nhờ thu hút FDI và phát triển sản xuất công nghiệp.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='space-y-2'
              >
                <div className='flex items-center gap-2'>
                  <div className='h-3 w-3 rounded-full' style={{ backgroundColor: '#be123c' }} />
                  <h4 className='font-semibold text-foreground'>Dịch vụ</h4>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Tăng từ 38.6% (1990) lên 50.0% (2023), trở thành ngành đóng góp lớn nhất cho GDP.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
