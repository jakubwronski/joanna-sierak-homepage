import Image from "next/image";
// import BookingForm from "@/app/components/BookingForm";
import ServiceCard from "@/app/components/ServiceCard";
import ScrollButton from '@/app/components/ScrollButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff5f7]">
      {/* Hero Section */}
      <header className="relative h-[550px]">
        {/* Background Image */}
        <div className="fixed w-full h-[550px] top-0 left-0">
          <Image
            src="/peaceful-background8b.jpg"
            alt="Peaceful background"
            fill
            className="object-cover brightness-95 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col">
          <nav className="py-4">
            <h1 className="text-gray-800 text-1xl">
              <span className="font-semibold">Joanna Sierak</span> - gabinet psychologiczny
            </h1>
          </nav>
          
          <div className="flex items-center justify-center flex-grow">
            <div className="max-w-3xl text-center">
              <h2 className="font-playfair text-6xl font-extralight tracking-tight text-gray-800 mb-12 leading-tight">
                Bezpieczna przestrzeń <br/>
                <span className="font-light">dla Twoich myśli</span>
              </h2>
              <ScrollButton />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative bg-[#f8f2eb] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">O mnie</h2>
              <p className="text-gray-600 mb-4">
              Prowadzę konsultacje psychologiczne w formie online dla osób dorosłych. Ich celem jest przyjrzenie się Twojej aktualnej sytuacji i pomoc w wyborze odpowiedniej formy pomocy. <br /> <br />

              Zajmuję się udzielaniem wsparcia w mierzeniu się z codziennymi wyzwaniami. Towarzyszę w dążeniu do lepszego zrozumienia siebie. Do każdej osoby podchodzę indywidualnie i z empatią. Kluczowe dla mnie jest stworzenie bezpiecznej przestrzeni, w której rozmówcy mogą eksplorować swoje myśli i uczucia. Zależy mi na odpowiednim zrozumieniu Ciebie i Twojej sytuacji. Wierzę, że każdy zasługuje na wysłuchanie oraz uzyskanie odpowiedniej pomocy. <br /> <br />

              Zapraszam jeśli doświadczasz kryzysu i potrzebujesz wsparcia i/lub chcesz: <br />
              • lepiej zrozumieć siebie i swoją sytuację <br />
              • skuteczniej radzić sobie ze stresem i napięciem <br />
              • nauczyć się zarządzać emocjami <br />
              • nauczyć się asertywnego stawiania granic <br />
              • efektywniej komunikować się z innymi i budować zdrowe związki <br />
              • odkryć swoje mocne strony i przyjrzeć się obszarom wymagającym pracy. <br /> <br />

              Ukończyłam psychologię ze specjalnością psychoterapia na Uniwersytecie Warszawskim. Doświadczenie zawodowe zdobywałam m.in. w placówkach oświatowych, Akademickim Ośrodku Psychoterapii, Ośrodku Integracji Społecznej. Jestem po własnej psychoterapii.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/joanna-sierak3.png"
                alt="Zdjęcie psychologa"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="relative bg-[#cfdcd8] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Konsultacje psychologiczne"
              description="Konsultacja psychologiczna to spotkanie, podczas którego z troską i uwagą wsłuchuję się w Twoje potrzeby i trudności. Wspólnie zastanawiamy się nad możliwymi rozwiązaniami i celami oraz omawiamy, jak mogę Ci pomóc w ich osiągnięciu. "
              icon="personal"
            />
            <ServiceCard
              title="Sesje online"
              description="Zadbaj o odpowiednie warunki, aby rozmowa była dla Ciebie komfortowa: <br /> <br />
              • kamera, mikrofon i Internet <br />
              • prywatność (ciche miejsce do rozmowy) <br />
              • zarezerwowana odpowiednia ilość czasu"
              icon="online"
            />
            <ServiceCard
              title="Indywidualne podejście"
              description="Do każdej osoby podchodzę indywidualnie, <br /> z empatią i otwartością. Skupiam się na Twoich potrzebach, uważnie słuchając <br />i wspierając Cię bez oceniania. Zależy mi, byś czuł/a się zrozumiany/a i mógł/mogła swobodnie mówić o swoich trudnościach."
              icon="individual"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative bg-[#f8f2eb] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <h2 className="text-3xl font-light mb-8">Cennik</h2>
              <div className="flex justify-between items-center">
                <div className="flex-1 mr-4">
                  <h3 className="font-medium">Darmowa sesja próbna</h3>
                  <p className="text-sm text-gray-500">Próbna sesja - 15 minut bezpłatnej rozmowy online</p>
                </div>
                <span className="text-lg whitespace-nowrap">0 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex-1 mr-4">
                  <h3 className="font-medium">Konsultacja psychologiczna online</h3>
                  <p className="text-sm text-gray-500">Konsultacja psychologiczna online - 50 minut</p>
                </div>
                <span className="text-lg whitespace-nowrap">100 zł</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <h2 className="text-3xl font-light mb-8">Zapisy</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Umów konsultację online na platformie Sensly lub przez email:</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 justify-center">
                <a 
                  href="https://sensly.com/specjalista/joanna-sierak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-yellow-600/70 text-white px-8 py-3 rounded-md hover:bg-yellow-700/70 transition-colors text-center flex items-center justify-center"
                >
                  Umów wizytę na Sensly
                </a>
                <a 
                  href="mailto:kontakt.joanna.sierak@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-yellow-600/70 text-white px-8 py-3 rounded-md hover:bg-yellow-700/70 transition-colors text-center flex items-center justify-center"
                >
                  Napisz do mnie
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="relative bg-[#f8f2eb] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Porozmawiajmy</h2>
            <p className="text-gray-600 mb-8">
              Zapraszam do kontaktu. Możesz umówić się na wizytę bezpośrednio na platformie Sensly lub mailowo.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Joanna Sierak - psycholożka</p>
              <p>Email: kontakt.joanna.sierak@gmail.com</p>
              <p>Umawianie wizyt: <a href="https://sensly.com/specjalista/joanna-sierak" target="_blank" rel="noopener noreferrer" className="underline">https://sensly.com/specjalista/joanna-sierak</a></p>
              
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#f8f2eb] z-10">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>© 2024 Wszelkie prawa zastrzeżone | Joanna Sierak - gabinet psychologiczny</p>
        </div>
      </footer>
    </div>
  );
}
