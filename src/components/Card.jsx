function Card({ title, description, emoji }) {
    return (
        <div className="card">
            <span className="card-emoji">{emoji}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card