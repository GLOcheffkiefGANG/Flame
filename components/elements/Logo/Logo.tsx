import Link from 'next/link'
import Image from 'next/image'
const Logo = () => (
  <Link className='logo' href='/'>
    <Image
      className='logo__img'
      src='/img/FlameLogoBaker.png'
      alt='Rostelecom Logo'
    />
  </Link>
)

export default Logo
