// react component
import Image from 'next/image'
// image source
import WorkerImg from '@/public/tyler.jpg'
 
export default function Worker2() {
  return (
    <Image className='animation'
      src={WorkerImg}
      alt="image of worker"
      title='employee'
    />
  )
}