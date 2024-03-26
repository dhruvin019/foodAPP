
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get('reference');
    console.log({referenceNum: referenceNum})
  return (
    <>
    <h1>Payment Success</h1>
    <h2>Reference No. : {referenceNum}</h2>
    </>
  )
}

export default PaymentSuccess;

