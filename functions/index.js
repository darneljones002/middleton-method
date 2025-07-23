require("dotenv").config();
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.createCheckoutSession = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { productId } = req.body;

    const redirectMap = {
      "vertical-leap": "https://middletonmethod.glide.page/",
      agility: "https://middletonmethod.glide.page/",
      mentality: "https://middletonmethod.glide.page/",
    };

    const productNameMap = {
      "vertical-leap": "Vertical Leap Unleashed",
      agility: "Speed and Agility Unleashed",
      mentality: "Middleton Mentality Program",
    };

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: 0.1, // price in cents
              product_data: {
                name: productNameMap[productId],
              },
            },
            quantity: 1,
          },
        ],
        success_url: redirectMap[productId],
        cancel_url: "http://localhost:3000/products",
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      console.error("Error creating checkout:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});
