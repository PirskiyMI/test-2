import './App.scss';
import { Circles } from './components/Circles/Circles';

import { Footer } from './components/Footer/SFooter';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useResize } from './hooks/hooks';

function App() {
   const { isScreenSm } = useResize();
   return (
      <div className="App">
         <div className="wrapper">
            <Header />
            <Main />
            <Footer />
         </div>
         {isScreenSm && <Circles />}
      </div>
   );
}

export default App;
