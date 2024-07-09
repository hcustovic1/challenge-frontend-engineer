# parcelLab Frontend Engineer Quest Solution

Welcome, brave soul, to my solution for the parcelLab Frontend Engineer Quest. Grab a cup of the finest brew, sit back, and embark on this journey with me. Many have tried, many have failed, but the fire within me has burned strong, guiding me through the trials and tribulations. As I navigate this path, I remain steadfast in my quest to prove my worth as a future Frontend Engineer at parcelLab.

<p align="center">
<img src="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90hhrp614304389tqyygkf17g0/public" alt="drawing" width="500"/>
</p>

## The Quest

At parcelLab, the creation of outstanding user experiences is our noble endeavor. In this tale, I embarked on a mission to build a web app that reveals the order status and shipping information for valiant users.

Due to a delay from our fallen backend comrade, I conjured a mock API that returns an order from a list based on user input. The endpoint URL follows this arcane structure: /orders/{{orderNumber}}?zip={{zipCode}}.

### App Views

1. Sign In / User Input View:

- Here, users can inscribe an order number and a zip code.
- Should the order number be lost or the zip code incorrect, an error notification shall appear.

2. Order View:

- This realm displays the order details and shipping information after successful input.

### Mock API

I wielded the power of [msw](https://mswjs.io/) to create the mock API, ensuring the app fetched data as if from a true backend.

### Data Source

The mystical data for this project comes from orders.json, containing multiple entries with properties such as `_id`, `courier`, `created`, `updated`, `checkpoints`, `delivery_info`, `destination_country_iso3`, and `zip_code`.

### Setup Instructions

Follow these steps to set up and run the project in your own domain:

#### 1. Clone the Repository

```sh
git clone https://github.com/hcustovic1/challenge-frontend-engineer.git
cd parcelLab-frontend-quest
```

#### 2. Install Dependencies

```sh
pnpm install
```

or

```sh
npm install
```

or

```sh
yarn 
```

#### 3. Set the environment variables

Create a `.env` file in the root of the project and set the following value inside it:

```env
VITE_ORDERS_API_BASE_URL=https://api.prcl.dev
```

#### 4. Start the Development Server

```sh
pnpm dev
```

or

```sh
npm run dev
```

or

```sh
yarn dev
```

## Tech Stack

- **React**: *The foundation for building the user interface.*
- **TypeScript**: *Ensuring type-safe JavaScript.*
- **msw**: *The magic behind the mock API.*
- **Vitest**: *For testing the strength of the app.*
- **React Testing Library**: *For scrutinizing React components.*
- **CSS Modules**: *To style the app elegantly.*

## Running the App

- Venture to the Sign In view and input an order number and zip code.
- Upon successful submission, traverse to the Order View, displaying the order details and shipping information.
- If the order number or zip code is incorrect, an error message will guide you.

## Until we meet again...

Thank you for journeying with me through my solution to the parcelLab Frontend Engineer Quest. This quest has been a testament to my skills and dedication to creating outstanding user experiences. If you have any questions or feedback, feel free to send a raven!

<p align="center">
<img src="https://awoiaf.westeros.org/images/thumb/8/87/Aleksander-karcz-exchange-of-information.jpg/350px-Aleksander-karcz-exchange-of-information.jpg
" alt="raven" width="500"/>
</p>

May your code be bug-free and your tests always pass!

<p align="center">
<img src="https://img-9gag-fun.9cache.com/photo/aZMe6Zz_460s.jpg" alt="gandalf" width="500"/>
</p>
