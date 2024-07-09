import { Route, Routes } from 'react-router-dom';
import { OrderDetailsPage, TrackOrderInputPage } from '../pages';

export const OrderRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TrackOrderInputPage />} />
      <Route
        path="/order/:orderNumber/:zipCode"
        element={<OrderDetailsPage />}
      />
    </Routes>
  );
};
