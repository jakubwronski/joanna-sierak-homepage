'use client';

export default function ScrollButton() {
  return (
    <button 
      onClick={() => {
        document.getElementById('booking-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      
      className="bg-[#967860] text-white p-8 py-3 rounded-md hover:bg-[#61422E] transition-colors"
      // className="bg-[#806551] text-white px-8 py-3 rounded-md hover:bg-[#61422E] transition-colors"
    >
      Umów wizytę online
    </button>
  );
}
//#c48958
//#b8997d
