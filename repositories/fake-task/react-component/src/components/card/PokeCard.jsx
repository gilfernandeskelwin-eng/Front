export default function PokeCard({ image, name, type}) {
    return (
        <article className="card">
            <img src={image} alt={name} />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-type">{type}</p>
            </div>
        </article>
    );
}