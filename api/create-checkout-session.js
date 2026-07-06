const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'dummy_key');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { items, discount } = req.body;
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

    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    const baseUrl = `${protocol}://${host}`;

    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/index.html`,
    };

    const session = await stripe.checkout.sessions.create(sessionConfig);
    res.status(200).json({ id: session.id });

  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error);
    res.status(500).json({ error: error.message });
  }
};
