import { Routes, Route } from 'react-router-dom';

const Landing = () => <h1>Landing</h1>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Landing} />
      </Routes>
    </div>
  );
}

export default App;
