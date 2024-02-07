// react component
import Image from 'next/image'
// image source
import WorkerImg from '@/public/christine.jpg'
 
export default function Worker3() {
  return (
    <Image  className='animation'
      src={WorkerImg}
      alt="image of worker"
      title='employee'
    />
  )
}