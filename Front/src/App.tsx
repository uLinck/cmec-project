import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './Styles/material-ui';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained" color='secondary' >BUTAO</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
