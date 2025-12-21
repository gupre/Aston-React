import styles from './App.module.css';
import { MainLayot } from '../shared/layouts/MainLayout';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';
// import { useTheme } from '../shared/lib/theme/useTheme';

function App() {  
  return (
    <div className={`${styles.app}`}>
      <Header />
      <main className={styles.main}>
        <MainLayot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
