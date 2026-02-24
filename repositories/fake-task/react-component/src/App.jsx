import './index.css';
import './components/card/Card.css';
import Card from './components/card/Card';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log("Aqui é o state", data);

  return (
    <>
      <h1>Items</h1>
      <Card
        title={data.title}
        price={data.price}
        description={data.description}
        category={data.category}
        src={data.image}
      />
    </>
  );
}

export default App;
