import { Routes, Route } from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
const Landing = () => <h1>Landing</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const NewSurvey = () => <h1>NewSurvey</h1>;

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" Component={Landing} />
        <Route exact path="/surveys" Component={Dashboard} />
        <Route path="/surveys/new" Component={NewSurvey} />
      </Routes>
    </div>
  );
}

export default App;
