import './Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb-container">
      <ul className="breadcrumb-list">
        <li><a href="/">Home</a></li>
        <li><span>/</span></li>
        <li><a href="/produtos">Produtos</a></li>
        <li><span>/</span></li>
        <li className="active">Detalhes</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;