import { useEffect } from 'react'

export default function FlipbookPage() {
  useEffect(() => {
    // Load FlippingBook script
    const script = document.createElement('script')
    script.src = 'https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=692809989'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-950 via-black to-yellow-950'>
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8 text-center'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent mb-4'>
            Thuyết Trình MLN131 - G3
          </h1>
          <p className='text-gray-300'>Tài liệu thuyết trình về Phòng Chống Tham Nhũng</p>
        </div>

        <div className='bg-gray-900/50 backdrop-blur rounded-lg p-4 shadow-2xl'>
          <a
            href='https://online.flippingbook.com/view/692809989/'
            className='fbo-embed'
            data-fbo-id='1a62dcf129'
            data-fbo-ratio='3:2'
            data-fbo-lightbox='yes'
            data-fbo-width='100%'
            data-fbo-height='auto'
            data-fbo-version='1'
            style={{ maxWidth: '100%' }}
          >
            MLN131 - G3
          </a>
        </div>
      </div>
    </div>
  )
}
