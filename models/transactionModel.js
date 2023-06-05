import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount"],
    },
    type: {
      type: String,
      required: [true, "please enter type"],
    },
    category: {
      type: String,
      required: [true, "Please enter category"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please enter description"],
    },
    date: {
      type: Date,
      required: [true, "Please enter date"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);
export default transactionModel;
