import { Globe2, Mail, Github, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className='border-t bg-card py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <div className='mb-4 flex items-center gap-2'>
              <Globe2 className='h-6 w-6 text-primary' />
              <span className='text-lg font-bold text-foreground'>Chủ nghĩa xã hội khoa học</span>
            </div>
            <p className='text-sm text-muted-foreground'>Nền tảng giáo dục về Chủ nghĩa xã hội khoa học.</p>
          </div>

          <div>
            <h4 className='mb-4 font-semibold text-foreground'>Liên Kết</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Về Dự Án
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Tài Liệu Tham Khảo
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/integravia.io.vn'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-foreground'
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold text-foreground'>Kết Nối</h4>
            <div className='flex gap-4'>
              <a href='#' className='text-muted-foreground hover:text-foreground'>
                <Mail className='h-5 w-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-foreground'>
                <Github className='h-5 w-5' />
              </a>
              <a
                href='https://www.facebook.com/integravia.io.vn'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground'
              >
                <Facebook className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t pt-8 text-center text-sm text-muted-foreground'>
          <p>© 2025 Dự án môn học Chủ nghĩa xã hội khoa học. FPT University HCM</p>
        </div>
      </div>
    </footer>
  )
}
