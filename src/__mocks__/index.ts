import { Order } from '../types';

export const mockOrder: Order = {
  _id: '1',
  courier: 'dhl',
  tracking_number: 'AB20221219',
  created: '2023-01-01T08:20:30Z',
  updated: '2023-01-02T14:10:30Z',
  checkpoints: [
    {
      status_details:
        'Your package was registered in our system by the sender.',
      event_timestamp: '2023-01-02T14:10:30Z',
      status: 'Registered',
      country_iso3: 'USA',
      city: 'Knoxville',
    },
  ],
  delivery_info: {
    articles: [
      {
        articleNo: 'AB20224',
        articleName: 'iPhone Pro 128GB',
        articleImageUrl:
          'https://images.unsplash.com/photo-1603625953304-97b6e41336b5',
        quantity: 1,
        price: 1299.0,
      },
    ],
    orderNo: '0000RTAB1',
    order_date: '2023-01-01',
    recipient: 'Ollie Wright',
    recipient_notification: 'Ollie',
    email: 'oliver.wright@parcellab.com',
    street: '14 Buck Way',
    city: 'Horsham',
    region: 'US-IL',
    timezone: 'America/Chicago',
    announced_delivery_date: '2023-01-05',
  },
  destination_country_iso3: 'USA',
  zip_code: '60156',
};
