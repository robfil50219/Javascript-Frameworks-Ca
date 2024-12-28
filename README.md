# ShopSphere - JavaScript Frameworks CA

## Overview

ShopSphere is an e-commerce platform built using React, aimed at providing a seamless shopping experience. It integrates several features, including product listing, cart functionality, checkout process, and a contact page. The website fetches product data from an external API and allows users to search and filter products, add items to the cart, and complete their purchases.

## Features

- **Home Page**: Displays a list of products, allowing users to browse through and search for items.
- **Product Page**: Shows detailed information about a product when clicked.
- **Cart**: Users can add products to the cart, view the items, change quantities, and proceed to checkout.
- **Checkout**: A form to enter billing information and complete the order.
- **Contact Page**: A simple form to get in touch with customer service.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for handling routing and navigation.
- **LocalStorage**: Used to persist the cart items across page reloads.
- **CSS**: Custom CSS styles for the layout and design.
- **External API**: Fetches product data from the Noroff API ([https://v2.api.noroff.dev/online-shop]).

## Folder Structure

```
/public
  /index.html
/src
  /components
    - Header.jsx
    - Layout.jsx
    - Footer.jsx
  /pages
    - Homepage.jsx
    - ProductPage.jsx
    - CartPage.jsx
    - CheckoutSuccessPage.jsx
    - ContactPage.jsx
  /App.js
  /App.css
  /index.js
/assets
  - logo.png
/data
  - products.json
```

## Setup Instructions

To get the project up and running, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/robfil50219/Javascript-Frameworks-Ca.git
   cd Javascript-Frameworks-Ca
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The application should be available at `http://localhost:3000`.

## Development

This project is built using React and React Router. All the components are designed to be modular and reusable. Here's a brief description of the key components:

- **Header.jsx**:
  Displays the logo, cart icon, and navigation menu. Handles routing using React Router.

- **Layout.jsx**:
  A wrapper component that includes the Header, Footer, and dynamically loads the main content (children) of each page.

- **CartPage.jsx/CheckoutPage**:
  -Displays the user's cart, allowing them to change item quantities, remove products, and proceed to checkout.
  -A simple form that allows users to enter billing information and place an order.

- **CheckoutSuccessPage.jsx**:
  Displays a success message after an order is placed, confirming the successful transaction.

- **Homepage.jsx**:
  Displays a list of products, allowing users to filter and view product details.

- **ProductPage.jsx**:
  Displays detailed information for each product, including an image, price, and description.

- **ContactPage.jsx**:
  A contact form allowing users to send a message to the customer support team.

## Future Enhancements

- **User Authentication**: Implement login and registration functionality for users to track their orders.
- **Payment Gateway Integration**: Add payment gateway support to complete transactions securely.
- **Order History**: Allow users to view past orders after logging in.
- **Advanced Search Filters**: Add more filters for sorting products by price, category, etc.
- **Dark Mode**: Implement dark mode for better accessibility.

## Contributing

We welcome contributions to improve the ShopSphere platform. Please fork the repository and submit a pull request for any enhancements or bug fixes.

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

ShopSphere - 2024\
Created by Robert Filep
