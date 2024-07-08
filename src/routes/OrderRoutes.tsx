import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TrackOrderInputPage } from '../pages';

export const OrderRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TrackOrderInputPage />} />
    </Routes>
  );
};
