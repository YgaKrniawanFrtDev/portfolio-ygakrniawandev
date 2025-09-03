import Image from '../img/leo.jpg'
import '../styles/ImageAbout.css'
function imageAbout() {
  return (
    <>
        <div className='image'>
            <div className='image-content'>
                <img src={Image} alt="" width="400" />
            </div>
        </div>
    </>
  )
}

export default imageAbout