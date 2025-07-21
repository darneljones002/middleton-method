function VerticalLeap() {
  const handlePurchase = () => {
    window.location.href = 'https://buy.stripe.com/test_dR6cNp1qX7Kz3zW5kk'; // Replace with your Stripe checkout link
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-extrabold text-platinum mb-6">Vertical Leap Unleashed</h2>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Jump higher. Explode faster. Build elite lower-body strength with this progressive jump training program for serious athletes.
      </p>
      <button
        onClick={handlePurchase}
        className="bg-platinum text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Purchase & Access
      </button>
    </div>
  );
}

export default VerticalLeap;
