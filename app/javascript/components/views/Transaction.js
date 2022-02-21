import React from 'react'
import PurchaseFailed from './PurchaseFailed'
import PurchaseSuccess from './PurchaseSuccess'

const validateError = ["DECLINED", "ERROR"]
const Transaction = (info) => {
  return (
    <div>
      {validateError.includes(info.status) ?
        <PurchaseFailed {...{ info }} />
        :
        <PurchaseSuccess {...{ info }} />
      }
    </div>
  )
}

export default Transaction