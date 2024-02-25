// import mysql from 'mysql2/promise';
import { pool } from "../db.js";

export const createUser = async (req, res) => {
  // const pool = mysql.createPool({ /* database configuration */ });

  try {
    const { username, email, cart, orders } = req.body;
    const newUser = { username, email };

    const connection = await pool.getConnection();
    console.log(newUser)
    try {
      await connection.beginTransaction();

      // Insert user
      const [userResult] = await connection.execute('INSERT INTO users SET ?', [newUser]);
      const userId = userResult.insertId;

      // Insert cart items
      for (const cartItem of cart) {
        cartItem.user_id = userId;
        await connection.query('INSERT INTO cart SET ?', [cartItem]);
      }

      // Insert orders and order items
      for (const order of orders) {
        order.user_id = userId;
        const [orderResult] = await connection.execute('INSERT INTO orders SET ?', [order]);
        const orderId = orderResult.insertId;

        for (const item of order.order_items) {
          item.order_id = orderId;
          await connection.execute('INSERT INTO order_items SET ?', [item]);
        }
      }

      await connection.commit();
      res.redirect('/');
    } catch (error) {
      console.log(error);
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
};



export const updateUser = async (req, res) => {
  const connection = await pool.getConnection();

  try {
    const { id, username, email } = req.body;
    const updatedUser = { username, email };

    const [result] = await connection.execute('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);

    if (result.affectedRows < 1) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
};



export const deleteUser = async (req, res) => {
  const connection = await pool.getConnection();

  try {
    const { id } = req.params;

    const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows < 1) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
};


export const getUser = async (req, res) => {
  const connection = await pool.getConnection();

  try {
    const { id } = req.params;

    const [users] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);

    if (users.length < 1) {
      res.sendStatus(404);
    } else {
      res.send(users[0]);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
};