// react component
import Image from 'next/image'
// image source
import Twittersvg from '@/public/twitter.svg'
 
export default function TwitterIcon() {
  return (
    <Image
      src={Twittersvg}
      alt="twitter icon"
      width={25}
      height={25}
    />
  )
}