'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { PolicyImpact } from './policy-impact'
import { EconomicOutlook } from './economic-outlook'
import { Gavel, Trophy } from 'lucide-react'

export function PolicyOutlookTabs() {
  const [activeTab, setActiveTab] = useState('policy')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className='relative py-24 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute top-1/3 left-1/6 w-80 h-80 bg-red-900/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/3 right-1/6 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-800/8 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <Badge className='mb-4 bg-gradient-to-r from-red-900/30 to-amber-700/30 text-red-200 border-red-700/50 px-4 py-1.5 text-sm'>
            <Gavel className='w-4 h-4 mr-2' />
            Chính Sách & Triển Vọng
          </Badge>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent mb-6'>
            Tác Động & Tầm Nhìn
          </h2>
          <p className='text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            Khám phá các chính sách thúc đẩy hội nhập và triển vọng phát triển kinh tế của Việt Nam
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex justify-center mb-8'
          >
            <TabsList className='bg-white/5 backdrop-blur-md border border-white/20 p-1 rounded-xl'>
              <TabsTrigger
                value='policy'
                className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-900/50 data-[state=active]:to-amber-700/50 data-[state=active]:text-white data-[state=inactive]:text-gray-400 px-8 py-3 rounded-lg transition-all duration-300'
              >
                <Gavel className='w-4 h-4 mr-2' />
                Tác Động Chính Sách
              </TabsTrigger>
              <TabsTrigger
                value='outlook'
                className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-900/50 data-[state=active]:to-rose-700/50 data-[state=active]:text-white data-[state=inactive]:text-gray-400 px-8 py-3 rounded-lg transition-all duration-300'
              >
                <Trophy className='w-4 h-4 mr-2' />
                Triển Vọng Kinh Tế
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value='policy' className='mt-0'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView && activeTab === 'policy' ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className='pt-8'
            >
              <PolicyImpact withoutSection={true} />
            </motion.div>
          </TabsContent>

          <TabsContent value='outlook' className='mt-0'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView && activeTab === 'outlook' ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className='pt-8'
            >
              <EconomicOutlook withoutSection={true} />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

