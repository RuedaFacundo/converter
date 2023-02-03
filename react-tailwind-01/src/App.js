import './App.css';
import Home from './container/Home';
import { ContextProvider } from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
