import { Article, Checkpoint, DeliveryInfo, Order } from '../types';

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

export const mockArticleA: Article = {
  articleNo: '12345',
  articleName: 'Sample Article 1',
  articleImageUrl: '',
  quantity: 2,
  price: 29.99,
};

export const mockArticleB: Article = {
  articleNo: '67890',
  articleName: 'Sample Article 2',
  articleImageUrl: 'https://example.com/image2.jpg',
  quantity: 1,
  price: 59.99,
};

export const mockArticles: Article[] = [mockArticleA, mockArticleB];

export const mockCheckpointA: Checkpoint = {
  status: 'Delivered',
  status_details: 'Your package has been delivered',
  event_timestamp: '2023-07-07T12:34:56Z',
  city: 'Munich',
  country_iso3: 'DEU',
  meta: {
    pickup_address: '123 Main St',
    pickup_address_link: 'https://www.google.com/maps',
  },
};

export const mockCheckpointB: Checkpoint = {
  status: 'In Transit',
  status_details: 'Your package is on the way',
  event_timestamp: '2023-07-06T10:20:30Z',
  city: 'Berlin',
  country_iso3: 'DEU',
};

export const mockCheckpoints: Checkpoint[] = [mockCheckpointA, mockCheckpointB];

export const mockDeliveryInfo: DeliveryInfo = {
  orderNo: '12345',
  order_date: '2023-07-07',
  recipient: 'John Doe',
  street: '123 Main St',
  city: 'Munich',
  region: 'Bavaria',
  announced_delivery_date: '2023-07-10',
  articles: [],
  email: '',
  recipient_notification: '',
  timezone: 'Europe/Berlin',
};
