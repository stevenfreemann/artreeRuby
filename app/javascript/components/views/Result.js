import React from "react"
import PurchaseFailed from "./PurchaseFailed"
import PurchaseSuccess from "./PurchaseSuccess"
const errors = ["ERROR", "DECLINED"]

const Result = ({transaction}) => {
  const s = transaction.status
  console.log('transaction', transaction)
  return (
    <div>
      {errors.includes(s) ?
        <PurchaseFailed info = {transaction}/>
        : <PurchaseSuccess info = {transaction}/>
      }
    </div>

  );
}

export default Result;