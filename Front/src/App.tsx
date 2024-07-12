import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/material-ui';
import Search from './Components/Search';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Search />
      </div>
    </ThemeProvider>
  );
}

export default App;
