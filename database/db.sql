-- -- to create a new database
-- CREATE DATABASE customersdb;

-- -- to use database
-- use customersdb;

-- -- creating a new table
-- CREATE TABLE customer (
--   id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   address VARCHAR(100) NOT NULL,
--   phone VARCHAR(15)
-- );




-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(255) NOT NULL UNIQUE,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL
-- );




-- -- to show all tables
-- show tables;

-- -- to describe table
-- describe customer;




use EcomApi;
Categories Table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    availability INT DEFAULT 1,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);





-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);



-- Cart Table
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);




CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


 order Items Table
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    PRIMARY KEY (order_id, product_id)
);

select * from users;
select * from products;



-- SELECT
--     users.id AS user_id,
--     users.username,
--     users.email,
--     products.id AS product_id,
--     products.title,
--     products.price,
--     products.description,
--     products.availability,
--     categories.id AS category_id,
--     categories.name AS category_name,
--     cart.quantity,
--     orders.id AS order_id,
--     orders.order_date,
--     orders.status,
--     order_items.quantity AS order_item_quantity,
--     order_items.price AS order_item_price
-- FROM
--     users
-- LEFT JOIN
--     cart ON users.id = cart.user_id
-- LEFT JOIN
--     products ON cart.product_id = products.id
-- LEFT JOIN
--     categories ON products.category_id = categories.id
-- LEFT JOIN
--     orders ON users.id = orders.user_id
-- LEFT JOIN
--     order_items ON orders.id = order_items.order_id AND products.id = order_items.product_id;
-- for see the data  you can use