import express from "express";
import {
  addTransaction,
  deleteTransactionController,
  editTransactionController,
  getAllTransaction,
} from "../controller/transactionController.js";

//* router object
const router = express.Router();

// * POST || all transactions || /api/v1/transaction/getAllTransaction
router.post("/add-transaction", addTransaction);
// * POST || edit transactions || /api/v1/transaction/getAllTransaction
router.post("/edit-transaction", editTransactionController);
// * POST || delete transactions || /api/v1/transaction/getAllTransaction
router.post("/delete-transaction", deleteTransactionController);

// * POST || get transactions || /api/v1/transaction/get-transaction
router.post("/get-transaction", getAllTransaction);

//* routers

export default router;
