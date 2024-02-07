// react component
import Image from 'next/image'
// image source
import facebooksvg from '@/public/facebook.svg'
 
export default function FacebookIcon() {
  return (
    <Image
      src={facebooksvg}
      alt="facebook icon"
      width={25}
      height={25}
    />
  )
}