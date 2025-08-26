import '../styles/TextHero.css'
import Button from './Button'

function TextHero() {
    return (
        <>
            <div className="text-hero me-5">
                <h1>Digital Experience.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sapiente, <br /> hic rem ut tempora cum deleniti excepturi illo laboriosam. <br /></p>
                <Button/>
            </div>
        </>
    )
}

export default TextHero