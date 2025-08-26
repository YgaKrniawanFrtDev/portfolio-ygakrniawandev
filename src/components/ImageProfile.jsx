import Logo from '../img/leornardo.png'
import '../styles/Image.css'
function ImageProfile() {
    return (
        <div className="image-profile">
            <div className='image-content'>
                <img src={Logo} alt="" width='800' />
            </div>
        </div>
    )
}

export default ImageProfile