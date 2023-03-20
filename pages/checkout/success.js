import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";

export default function SuccessPage() {

  const router = useRouter();
  const { session_id } = router.query;

  const [data, setData] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {

    // Fetch the session from Stripe.
    async function maybeWriteTransaction() {

      if (!session_id) {
        return;
      }

      const response = await fetch(`/api/transactions/${data.id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          transactionObject: data,
        }),
      });

      return response;
    }

    maybeWriteTransaction();
  }, [session_id]);

if (!data) {
  return <div>Loading...</div>;
}

  // TODO: Check status of session and display appropriate message
  // TODO: Display order details
  // TODO: Display link to return to home page
  // TODO: Update transaction database
  // TODO: Update token balance

  return <div>Checkout out successfully</div>;
}