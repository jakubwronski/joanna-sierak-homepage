'use client';

export default function ScrollButton() {
  return (
    <button 
      onClick={() => {
        document.getElementById('booking-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      className="bg-[#ba814f] text-white px-8 py-3 rounded-md hover:bg-[#885e39] transition-colors"
    >
      Umów wizytę online
    </button>
  );
}
//#c48958
//#b8997d
