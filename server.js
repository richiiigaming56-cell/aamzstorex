const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'dummy_key');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from current directory
app.use(express.static(__dirname));

// List of actual item prices to calculate total securely on server (to prevent cheating)
const PRICES = {
  // Bots
  'bot-league': 7,
  'bot-payment': 6,
  'bot-ai': 4,
  'bot-custom': 9,
  'bot-hosting-lifetime': 4,
  'bot-hosting-1month': 2,
  'bot-host-us-1month': 3,
  'bot-host-us-lifetime': 5,
  
  // Discord Servers
  'srv-full': 17,
  'srv-roles': 5,
  'srv-custom': 3,

  // Murder Vs Sheriff items
  'mvs-willow-case': 20,
  'mvs-blue-willow-set': 25,
  'mvs-blue-willow-gun': 23,
  'mvs-blue-willow-knife': 5,
  'mvs-purple-willow-set': 20,
  'mvs-purple-willow-gun': 19,
  'mvs-purple-willow-knife': 5,
  'mvs-red-willow-set': 14,
  'mvs-red-willow-gun': 11,
  'mvs-red-willow-knife': 4,
  'mvs-green-willow-set': 11,
  'mvs-green-willow-gun': 10,
  'mvs-green-willow-knife': 4,

  'mvs-purple-strife-set': 22,
  'mvs-purple-strife-gun': 22,
  'mvs-purple-strife-knife': 4,
  'mvs-red-strife-set': 15,
  'mvs-red-strife-gun': 13,
  'mvs-red-strife-knife': 3,
  'mvs-green-strife-set': 14,
  'mvs-green-strife-gun': 13,
  'mvs-green-strife-knife': 3,
  'mvs-yellow-strife-set': 12,
  'mvs-yellow-strife-gun': 11,
  'mvs-yellow-strife-knife': 3,
  'mvs-white-gold-strife-gun': 40,

  'mvs-green-fang-gun': 20,
  'mvs-gray-fang-gun': 20,

  'mvs-green-peppermint-set': 16,
  'mvs-purple-peppermint-set': 10,
  'mvs-blue-peppermint-set': 6,
  'mvs-red-peppermint-set': 6,

  'mvs-purple-dragonfire-bundle': 16,
  'mvs-purple-dragonfire-sniper': 6,
  'mvs-purple-dragonfire-set': 15,
  'mvs-black-dragonfire-bundle': 12,
  'mvs-black-dragonfire-sniper': 6,
  'mvs-black-dragonfire-set': 10,
  'mvs-blue-dragonfire-bundle': 10,
  'mvs-blue-dragonfire-sniper': 6,
  'mvs-blue-dragonfire-set': 8,
  'mvs-red-dragonfire-bundle': 10,
  'mvs-red-dragonfire-sniper': 12,
  'mvs-red-dragonfire-set': 8,

  'mvs-reef-set': 15,
  'mvs-reef-gun': 13,
  'mvs-rosethorn-set': 8,
  'mvs-angel-set': 8,
  'mvs-pink-flutter-gun': 20,
  'mvs-pink-nebula-set': 25,
  'mvs-frostbite-bundle': 30,
};

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const lineItems = [];
    for (const cartItem of items) {
      let unitAmount = 0;
      let name = cartItem.name;

      if (cartItem.id === 'robux-gamepass') {
        const robux = parseInt(cartItem.qty, 10) || 0;
        unitAmount = Math.round((robux / 200) * 100); // 200 Robux = $1 USD ($0.005 per Robux)
        name = `Roblox Gamepass - ${robux.toLocaleString()} Robux`;
      } else {
        // Retrieve price from client cart to support dynamic admin pricing in local mode
        const itemPrice = parseFloat(cartItem.price) || 0;
        unitAmount = Math.round(itemPrice * 100); // in cents
      }

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: name,
            description: cartItem.description || '',
          },
          unit_amount: unitAmount,
        },
        quantity: cartItem.quantity || 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.SUCCESS_URL || 'http://localhost:3000/success.html'}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.CANCEL_URL || 'http://localhost:3000/index.html',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
