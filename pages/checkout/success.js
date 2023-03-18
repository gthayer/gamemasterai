import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SuccessPage() {

  const router = useRouter();
  const { session_id } = router.query;

  const [data, setData] = useState(null);

useEffect(() => {
  async function fetchData() {

    if (!session_id) {
      return;
    }

    await fetch(`/api/checkout_sessions/${session_id}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
  }
  fetchData();
}, [session_id]);

  // TODO: Check status of session and display appropriate message
  // TODO: Display order details
  // TODO: Display link to return to home page
  // TODO: Update transaction database
  // TODO: Update token balance

  console.log(data);

  return <div>Checkout out successfully</div>;
}