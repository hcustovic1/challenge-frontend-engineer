import { BrowserRouter as Router } from 'react-router-dom';
import { OrderRoutes } from './routes/OrderRoutes';
import { OrderProvider } from './context/OrderContext';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Navbar />
        <main className={styles.appBackground}>
          <OrderRoutes />
        </main>
      </Router>
    </OrderProvider>
  );
}

export default App;
