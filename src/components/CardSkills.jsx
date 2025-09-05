import '../styles/CardSkills.css'
function CardSkills({icon, text, miniText, desc}) {
    return (
        <>
            <div className="crypto-card">
                <span className='crypto-img'>{icon}</span>
                <div className="crypto-textBox">
                    <p className="crypto-text head">{text}</p>
                    <span>{miniText}</span>
                    <p className="crypto-text price">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default CardSkills
