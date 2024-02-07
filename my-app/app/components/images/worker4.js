// react component
import Image from 'next/image'
// image source
import WorkerImg from '@/public/rachel.jpg'
 
export default function Worker4() {
  return (
    <Image className='animation'
      src={WorkerImg}
      alt="image of worker"
      title='employee'
    />
  )
}