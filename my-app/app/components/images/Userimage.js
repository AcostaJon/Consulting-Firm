// react component
import Image from 'next/image'
// image source
import UserIcon from '@/public/circle-user-solid.svg'
 
export default function Userimage() {
  return (
    <Image
      src={UserIcon}
      alt="user icon"
      width={25}
      height={25}
    />
  )
}