// react component
import Image from 'next/image'
// image source
import EllipseverticleIcon from '@/public/ellipsis-vertical-solid.svg'
 
export default function Ellipseverticle() {
  return (
    <Image
      src={EllipseverticleIcon}
      alt="settings icon"
      width={25}
      height={25}
    />
  )
}