// react component
import Image from 'next/image'
// image source
import Bars from '@/public/bars-solid.svg'
 
export default function Hamburger() {
  return (
    <Image
      src={Bars}
      alt="hamburger icon"
      width={25}
      height={25}
    />
  )
}