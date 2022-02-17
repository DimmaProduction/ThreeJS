import { useState } from 'react';
import { FigureList } from './components/FigureList/FigureList';
import { Header } from './components/Header/Header';
import Scene from './components/Scene/Scene';
import './styles/globals.scss';

function App() {
  const [figures, setFigures] = useState([]);

  const handleAddFigure = (figure, scale) => {
    const newFigure = {
      'id': figures.length + Date.now(),
      'figure': figure,
      'scale': scale
    };

    setFigures(prev => [...prev, newFigure])
  }

  return (
    <div className="App">
      <Header onAddFigure={handleAddFigure}/>

      <Scene />

      <FigureList figures={figures} />
    </div>
  );
}

export default App;
