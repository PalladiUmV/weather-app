import { Home } from './pages/Home/Home'
import Header from './shared/Header/Header';
import { Spinner } from './Spinner/Spinner'

import Popup from './shared/Popup/Popup';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {

  const { loading, modalData } = useTypedSelector((state) => state.weather);

  return (
    <div className="global-container">
      {modalData ? <Popup /> : null}
      <div className="container">
        <Header />
        {loading ? <Spinner /> : <Home />}
      </div>
    </div>
  );
}
export default App;

