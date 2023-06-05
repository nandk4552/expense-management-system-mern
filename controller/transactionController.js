import transactionModel from "../models/transactionModel.js";
import moment from "moment";
export const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getAllTransaction = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              //* convert frequency to date and subtract from current date to get the date to filter
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// edit transaction controller callback

export const editTransactionController = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send("Transaction updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// delete transaction controller callback
export const deleteTransactionController = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
    res.status(200).send("Transaction deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
