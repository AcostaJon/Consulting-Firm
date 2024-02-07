// react component
import Image from 'next/image'
// image source
import FolderIcon from '@/public/folder-closed-regular.svg'
 
export default function Folder() {
  return (
    <Image 
      src={FolderIcon}
      alt="arrow icon"
      width={25}
      height={25}
    />
  )
}