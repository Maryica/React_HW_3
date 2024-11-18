
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoList />
      <CssBaseline />
    </div>
  );
}

export default App;