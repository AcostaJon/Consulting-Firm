// react component
import Image from 'next/image'
// image source
import GroupImg from '@/public/Groupwork.jpg'
 
export default function Groupwork() {
  return (
    <Image  className="img-fluid"
      src={GroupImg}
      alt="arrow icon"
    />
  )
}