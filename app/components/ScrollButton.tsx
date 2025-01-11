'use client';

export default function ScrollButton() {
  return (
    <button 
      onClick={() => {
        document.getElementById('booking-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      className="bg-[#c48958] text-white px-8 py-3 rounded-md hover:bg-[#a9754b] transition-colors"
    >
      Umów wizytę online
    </button>
  );
}
