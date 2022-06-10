import { Button } from '@mui/material';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <div className='home__main'>
      <h1 id='home__title'>Welcome to TodoApp!</h1>
      <Table />
    </div>
  );
}

export default App;
