import { useState } from 'react';
import Breadcrumb from './components/Breadcrumb-CSS/Breadcrump.jsx';
import Modal from './components/Modal-CSS-Modules/Modal.jsx';
import DatePicker from './components/DataPicker-Styled-Components/DataPicker.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div>
      <Breadcrumb />
      <hr />
      <DatePicker />
      <hr />
      <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App;