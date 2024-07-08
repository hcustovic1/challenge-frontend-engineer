import { BrowserRouter as Router } from 'react-router-dom';
import { OrderRoutes } from './routes/OrderRoutes';

function App() {
  return (
    <Router>
      <main>
        <OrderRoutes />
      </main>
    </Router>
  );
}

export default App;
