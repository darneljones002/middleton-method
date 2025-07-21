function Agility() {
  const handlePurchase = () => {
    window.location.href = 'https://buy.stripe.com/test_bIY8zJ2Qoc4P9OwfYY'; // Replace with your Stripe checkout link
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-extrabold text-platinum mb-6">Agility Unleashed</h2>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Improve reaction time, cutting, acceleration and body control. Ideal for athletes in football, basketball, soccer, and more.
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

export default Agility;
