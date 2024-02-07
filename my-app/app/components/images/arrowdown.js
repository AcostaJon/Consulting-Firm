// react component
import Image from 'next/image'
// image source
import ArrowdownIcon from '@/public/arrow-down-solid.svg'
 
export default function Arrowdown() {
  return (
    <Image
      src={ArrowdownIcon}
      alt="arrow icon"
      width={15}
      height={15}
    />
  )
}