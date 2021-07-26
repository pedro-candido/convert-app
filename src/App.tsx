import { BrowserRouter } from 'react-router-dom';
import { Header } from './components'
import { routes } from './routes'
import { Provider } from 'react-redux'
import store from './store/configureStore.store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
