// react component
import Image from 'next/image'
// image source
import client from '@/public/client1.svg'
 
export default function Client1() {
  return (
    <>
       <Image
      src={client}
      alt="arrow icon"
      width={50}
      height={50}
    />
    </>
 
  )
}