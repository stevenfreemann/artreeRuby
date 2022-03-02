import React from "react"
import PurchaseFailed from "./PurchaseFailed"
import PurchaseSuccess from "./PurchaseSuccess"
const errors = ["ERROR", "DECLINE"]
const Result = (transaction) => {
  const s = transaction?.status
  console.log('transaction', transaction)
  return (
    <div>
      {errors.includes(s) ?
        <PurchaseFailed />
        : <PurchaseSuccess />
      }
    </div>

  );
}

export default Result;