// react component
import Image from 'next/image'
// image source
import searchIcon from '@/public/searchicon.svg'
 
export default function Search() {
  return (
    <Image
      src={searchIcon}
      alt="search icon"
      width={25}
      height={25}
    />
  )
}