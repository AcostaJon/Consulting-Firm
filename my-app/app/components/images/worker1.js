// react component
import Image from 'next/image'
// image source
import WorkerImg from '@/public/redd.jpg'
 
export default function Worker1() {
  return (
    <Image  className='animation'
      src={WorkerImg}
      alt="image of worker"
      title='employee'
    />
  )
}