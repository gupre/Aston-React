import styles from './App.module.css';
import { MainLayot } from '../shared/layouts/MainLayout';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <MainLayot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
