// react component
import Image from 'next/image'
// image source
import circleCheckIcon from '@/public/circle-check.svg'
 
export default function Circlecheck() {
  return (
    <Image
      src={circleCheckIcon}
      alt="circle check icon"
      width={25}
      height={25}
    />
  )
}