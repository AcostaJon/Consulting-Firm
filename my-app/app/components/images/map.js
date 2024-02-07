// react component
import Image from 'next/image'
// image source
import MapImage from '@/public/map.jpg'
 
export default function Map() {
  return (
    <Image   className="img-fluid"
      src={MapImage}
      alt="Picture of a map"
    />
  )
}