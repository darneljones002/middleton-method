/* eslint-disable max-len */

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const Stripe = require("stripe");

// Define the secret
const stripeSecret = defineSecret("STRIPE_SECRET_KEY");

exports.createCheckoutSession = onRequest(
  { secrets: [stripeSecret] },
  async (req, res) => {
    const stripe = new Stripe(stripeSecret.value()); // Initialize Stripe WITHIN the function

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Vertical Leap Program" },
              unit_amount: 2999, // $29.99
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url:
          "https://your-glide-app-url.com?session_id={CHECKOUT_SESSION_ID}",

        cancel_url: "https://your-site.com/cancel",
      });

      res.json({ url: session.url });
    } catch (err) {
      console.error("Error creating checkout:", err);
      res.status(500).json({ error: "Failed to create session" });
    }
  }
);
