import './styles/app.scss';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';
import { BrowserRouter } from "react-router-dom";
import DynamicAdaptiveContextComponent from '../components/legacy_dynamicAdaptive/context';
import { Header } from '../widgets/header';

export function App() {
  return (
    <div className="app">
      <DynamicAdaptiveContextComponent>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </DynamicAdaptiveContextComponent>
    </div>
  );
}