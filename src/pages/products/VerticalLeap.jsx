function VerticalLeap() {
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "https://createcheckoutsession-lxhget5tfq-uc.a.run.app", // Your Firebase Function URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: "vertical", // use your internal ID
          }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Stripe session failed", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Purchase error:", error);
      alert("An error occurred during checkout.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-extrabold text-platinum mb-6">Vertical Leap Unleashed</h2>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Jump higher. Explode faster. Build elite lower-body strength with this progressive jump training program for serious athletes.
      </p>
      <button
        onClick={handleCheckout}
        className="bg-platinum text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
        Buy Now – $29.99
      </button>

    </div>
  );
}

export default VerticalLeap;
