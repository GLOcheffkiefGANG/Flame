import Link from 'next/link'
import Image from 'next/image'
const Logo = () => (
  <Link className='logo' href='/'>
    <Image
      className='logo__img'
      src='/img/FlameLogoBaker.png'
      alt='Rostelecom Logo'
      width="156"
      height="76"
    />
  </Link>
)

export default Logo
