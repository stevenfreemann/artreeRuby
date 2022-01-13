import React from 'react'
import PurchaseFailed from './PurchaseFailed'
import PurchaseSuccess from './PurchaseSuccess'


const Transaction = ({info}) => {
  return(
  <div> 
    { info.status === "DECLINED"?
      <PurchaseFailed/>:<PurchaseSuccess/>
    } 
  </div>
  )
}

export default Transaction