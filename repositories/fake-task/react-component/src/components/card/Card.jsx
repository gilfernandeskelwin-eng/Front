export default function Card({ title, price, src, description, category }) {
    return (
        <article className="card">
            <img src={src} alt={title} />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">{price}</p>
                <p className="card-description">{description}</p>
                <p className="card-category">{category}</p>
            </div>
        </article>
    );
}