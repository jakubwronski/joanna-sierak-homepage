'use client';

export default function ScrollButton() {
  return (
    <button 
      onClick={() => {
        document.getElementById('booking-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition-colors"
    >
      Umów wizytę online
    </button>
  );
}
