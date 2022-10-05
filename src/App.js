import logo from './logo.svg';
import './App.css';
import { Missions, Publications, PublicationForm } from './components';

function App() {
  return (
    <main className="container">
      <PublicationForm />
      <Publications />
      <Missions />
    </main>
  );
}

export default App;
