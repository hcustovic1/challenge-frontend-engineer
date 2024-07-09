import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Order } from '../types';
import { useOrderContext } from '../context/OrderContext';

export const useNavigateAfterOrderFetch = (fetchedOrder: Order | null) => {
  const { setOrder: setOrderContext } = useOrderContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedOrder) {
      setOrderContext(fetchedOrder);
      navigate(`/order/${fetchedOrder._id}/${fetchedOrder.zip_code}`);
    }
  }, [fetchedOrder, setOrderContext, navigate]);
};
