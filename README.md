# E-Commerce API

## Description
This project aims to develop a set of API endpoints for managing an e-commerce platform. The APIs facilitate functionalities such as retrieving product information, managing carts, placing orders, and handling user authentication.

## Endpoints

1. **Category Listing**
   - **Endpoint:** `/api/categories`
   - **Method:** GET
   - **Description:** Retrieves a list of categories available in the e-commerce platform.

2. **Product Listing**
   - **Endpoint:** `/api/products?category={category_id}`
   - **Method:** GET
   - **Description:** Retrieves a list of products based on the provided category ID. Returns essential details such as title, price, description, and availability.

3. **Product Details**
   - **Endpoint:** `/api/products/{product_id}`
   - **Method:** GET
   - **Description:** Fetches detailed information about a specific product identified by its ID.

4. **Cart Management**
   - **Endpoint:** 
     - Add Product: `/api/cart/add`
     - View Cart: `/api/cart/view`
     - Update Quantity: `/api/cart/update`
     - Remove Item: `/api/cart/remove`
   - **Methods:** 
     - Add Product: POST
     - View Cart: GET
     - Update Quantity: PUT
     - Remove Item: DELETE
   - **Description:** Allows users to manage their shopping cart by adding products, viewing the cart, updating quantities, and removing items.

5. **Order Placement**
   - **Endpoint:** `/api/orders/place`
   - **Method:** POST
   - **Description:** Handles the placement of orders, allowing users to finalize their purchases with products from their cart.

6. **Order History**
   - **Endpoint:** `/api/orders/history`
   - **Method:** GET
   - **Description:** Retrieves the order history for authenticated users, displaying a list of their past orders.

7. **Order Details**
   - **Endpoint:** `/api/orders/{order_id}`
   - **Method:** GET
   - **Description:** Retrieves detailed information about a specific order identified by its ID.

8. **User Registration and Login**
   - **Endpoints:** 
     - Registration: `/api/auth/register`
     - Login: `/api/auth/login`
   - **Methods:** 
     - Registration: POST
     - Login: POST
   - **Description:** Allows users to register for an account and authenticate via login.

## Authentication
Authentication for this API is solely based on remote API endpoints. Here's how it works:
- Users register by providing their details via the `/api/auth/register` endpoint.
- Upon successful registration, users can log in via the `/api/auth/login` endpoint.
- After successful login, the server issues a JSON Web Token (JWT), which the client includes in the Authorization header of subsequent requests.
- Protected endpoints, such as those for cart management and order placement, verify the JWT to authenticate and authorize the user.

## Technologies Used
- Node.js
- Express.js
- MongoDB (or any other preferred database)
- JSON Web Tokens (JWT) for authentication

## Security Considerations
- User passwords are securely hashed before storing them in the database.
- Input validation is implemented to prevent injection attacks.
- HTTPS is enforced to ensure secure communication between the client and server.

## How to Run
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your environment variables (e.g., database connection string, JWT secret).
4. Run the server using `npm start`.

## Contributors
- [Manish Chandrakar](https://github.com/manishchandrakar/)

## License
This project is licensed under the [MIT License](LICENSE).
