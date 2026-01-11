import styles from './App.module.css';
// import { MainLayot } from '../shared/layouts/MainLayout';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router/AppRouter';

function App() {  
  return (
    <div className={`${styles.app}`}>
      <BrowserRouter>
        <Header />
        <main className={styles.main}>
          <AppRouter />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
