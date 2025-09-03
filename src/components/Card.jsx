import '../styles/Card.css'
function Card({title, desc}) {
    return (
        <>
            <div class="card">
                <div class="card__border"></div>
                <div class="card_title__container">
                    <span class="card_title">{title}</span>
                    <p class="card_paragraph">
                        {desc}
                    </p>
                </div>
                <hr class="line" />
                <button class="button">Lihat Lanjut</button>
            </div>

        </>
    )
}

export default Card