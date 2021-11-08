import React,{ useEffect, useState } from 'react'
import { useRef } from 'react';
import { useHistory } from 'react-router';

export default function PayPal(props) {
    const history=useHistory();
    const handleBack=()=>{
        history.push('/profile')
    }
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Starter Packege",
                    amount: {
                      currency_code: "USD",
                      value: 500.0,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaid(true);
              console.log(order);
            },
            onError: (err) => {
              setError(err);
              console.error(err);
            },
          })
          .render(paypalRef.current);
      }, []);
    return (
        <div >
            <div onClick={handleBack}>x</div>
            <div ref={paypalRef}></div>
        </div>
    )
}

