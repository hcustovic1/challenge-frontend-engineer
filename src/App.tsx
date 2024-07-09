import { BrowserRouter as Router } from 'react-router-dom';
import { OrderRoutes } from './routes/OrderRoutes';
import { OrderProvider } from './context/OrderContext';
import styles from './App.module.css';

function App() {
  return (
    <OrderProvider>
      <Router>
        <main className={styles.appBackground}>
          <OrderRoutes />
        </main>
      </Router>
    </OrderProvider>
  );
}

export default App;
