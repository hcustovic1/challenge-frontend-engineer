import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrderContext } from '../context/OrderContext';
import { useFetchOrderFromAPI } from './useFetchOrderFromAPI';

export const useManageOrderData = (orderNumber: string, zipCode: string) => {
  const { order: contextOrder, setOrder: setContextOrder } = useOrderContext();
  const {
    fetchOrderData,
    fetchedOrder,
    isLoadingOrderData,
    fetchOrderDataError,
  } = useFetchOrderFromAPI();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderNumber || !zipCode) {
      navigate('/');
    } else if (!contextOrder) {
      fetchOrderData(orderNumber, zipCode);
    }
  }, [orderNumber, zipCode, fetchOrderData, contextOrder, navigate]);

  useEffect(() => {
    if (fetchedOrder && !contextOrder) {
      setContextOrder(fetchedOrder);
    }
  }, [fetchedOrder, contextOrder, setContextOrder]);

  return { isLoadingOrderData, fetchOrderDataError, contextOrder };
};
