// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool');

// // GET all orders that have been placed, populate with data from the pizza collection
// router.get('/', (req, res) => {
//   // Find all orders and return them
//   pool
//     .query('SELECT * FROM "feedback";')
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log('Error GET /api/feedback', error);
//       res.sendStatus(500);
//     });
// });

// POST a new order
// router.post('/', async (req, res) => {
//   const client = await pool.connect();

// I NEED CLARIFICATION ON THIS STEP

//   try {
//     const {
//       feeling,
//       understanding,
//       support,
//       comments,
//       flagged,
//       feedbackSubmission,
//     } = req.body;
//     await client.query('BEGIN');
//     const orderInsertResults = await client.query(
//       `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
//         VALUES ($1, $2, $3, $4, $5)
//         RETURNING id;`,
//       [feeling, understanding, support, comments, flagged]
//     );
//     const orderId = orderInsertResults.rows[0].id;

// await Promise.all(
//   pizzas.map((pizza) => {
//     const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
//     const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
//     return client.query(insertLineItemText, insertLineItemValues);
//   })
// );

//     await client.query('COMMIT');
//     res.sendStatus(201);
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.log('Error POST /api/feedback', error);
//     res.sendStatus(500);
//   } finally {
//     client.release();
//   }
// });

// // DELETE a feedback submission
// router.delete('/:id', (req, res) => {
//   pool
//     .query('DELETE FROM "feedback" WHERE id=$1', [req.params.id])
//     .then((result) => {
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       console.log('Error DELETE /api/feedback', error);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;
