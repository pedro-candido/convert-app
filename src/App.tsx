import { BrowserRouter } from 'react-router-dom';
import { Header } from './components'
import { routes } from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    </>
  );
}

export default App;
