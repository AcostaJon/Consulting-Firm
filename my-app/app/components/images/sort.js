// react component
import Image from 'next/image'
// image source
import SortIcon from '@/public/tornado-solid.svg'
 
export default function Sort() {
  return (
    <Image
      src={SortIcon}
      alt="sort icon"
      width={25}
      height={25}
    />
  )
}