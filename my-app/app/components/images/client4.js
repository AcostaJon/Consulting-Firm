// react component
import Image from 'next/image'
// image source
import client from '@/public/client4.svg'
 
export default function Client4() {
  return (
    <Image
      src={client}
      alt="arrow icon"
      width={50}
      height={50}
    />
  )
}