import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from 'styled-components';
import theme from './styles/material-ui';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained" color='secondary'>BUTAO</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
