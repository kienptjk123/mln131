import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Building2, BarChart3, Eye, Home, WalletCards } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Trang Chủ', icon: Home },
    { path: '/ly-luan', label: 'Lý luận & Nhận thức', icon: BookOpen },
    { path: '/thuc-tien', label: 'Thực tiễn & Số liệu', icon: BarChart3 },
    { path: '/xay-dung-dang', label: 'Xây dựng Đảng', icon: Building2 },
    { path: '/goc-nhin', label: 'Góc nhìn Đa chiều', icon: Eye },
    { path: '/flashcard', label: 'Flashcard', icon: WalletCards }
  ]

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-yellow-900/30 bg-gradient-to-r from-red-950/95 via-black/95 to-yellow-950/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo/Home */}
          <Link to='/' className='flex items-center gap-3 font-semibold group'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-yellow-600 flex items-center justify-center transform group-hover:scale-110 transition-transform'>
              <span className='text-white text-xl font-bold'>Đ</span>
            </div>
            <span className='text-lg bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'>
              Phòng Chống Tham Nhũng
            </span>
          </Link>

          {/* Navigation Links */}
          <div className='flex items-center gap-1'>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    size='sm'
                    className={cn(
                      'gap-2',
                      isActive 
                        ? 'bg-gradient-to-r from-red-700 to-yellow-700 text-white hover:from-red-600 hover:to-yellow-600' 
                        : 'text-gray-300 hover:text-yellow-100 hover:bg-red-950/50'
                    )}
                  >
                    <Icon className='h-4 w-4' />
                    <span className='hidden md:inline'>{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
