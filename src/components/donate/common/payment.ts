import Stripe from 'stripe';
// import axios from 'axios';

const stripe = new Stripe(
  'sk_test_51LFzV6FljwlD6eGWBGA0sniYpWHT2aFJQedDePHYwMqUlK0WsmJ1Ky3UcHQgMd4vlXHWDr71oaINSSHrvDgWscmB00RwVSwiFI',
  {
    apiVersion: '2020-08-27',
  },
);

export const createPaymentLink = async () => {
  // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
  //   const persons = res.data;
  //   console.log('person axios', persons);
  // });

  await stripe.products
    .create({
      name: 'Gold Special',
    })
    .then((_product: any) => {
      console.log('stripe project', _product);
    });
  console.log('call payment methods _func');
};
