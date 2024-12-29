import Image from "next/image";
import BookingForm from "@/app/components/BookingForm";
import ServiceCard from "@/app/components/ServiceCard";
import ScrollButton from '@/app/components/ScrollButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff5f7]">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        {/* Background Image */}
        <div className="fixed w-full h-[600px] top-0 left-0">
          <Image
            src="/peaceful-background2.jpg"
            alt="Peaceful background"
            fill
            className="object-cover brightness-100 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-yellow-800/35"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-8">
          <nav className="mb-12">
            <h1 className="text-gray-800 text-2xl">
              <span className="font-semibold">Joanna Sierak</span> - gabinet psychologiczny
            </h1>
          </nav>
          
          <div className="flex items-center justify-center py-16">
            <div className="max-w-3xl text-center">
              <h2 className="font-playfair text-7xl font-extralight tracking-tight text-gray-800 mb-8 leading-tight">
                Rozpocznij swoją <br/>
                <span className="font-light">drogę do zdrowia.</span>
              </h2>
              <ScrollButton />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative bg-[#efebe7] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">O mnie</h2>
              <p className="text-gray-600 mb-4">
                Tu zaczyna się Twój tekst. Możesz kliknąć tutaj i zacznąć pisać. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/joanna-sierak2.png"
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
      <section className="relative bg-[#cad0ce] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Indywidualne podejście"
              description="Kliknij tutaj i zacznij pisać. Ut rhoncus venam quis nostrum exercitation ulam corporis suscipit laboriosam nisi."
              icon="individual"
            />
            <ServiceCard
              title="Konsultacje osobiste"
              description="Kliknij tutaj i zacznij pisać. Rum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eros et accumsan et."
              icon="personal"
            />
            <ServiceCard
              title="Sesje online"
              description="Kliknij tutaj i zacznij pisać. Ex commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit."
              icon="online"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative bg-[#efebe7] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <h2 className="text-3xl font-light mb-8">Cennik</h2>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Darmowa sesja próbna</h3>
                  <p className="text-sm text-gray-500">Próbna sesja - 15 minut bezpłatnej rozmowy online</p>
                </div>
                <span className="text-lg">0 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Konsultacja psychologiczna online</h3>
                  <p className="text-sm text-gray-500">Konsultacja psychologiczna online - 50 minut</p>
                </div>
                <span className="text-lg">100 zł</span>
              </div>
            </div>

            <a 
              href="https://sensly.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-sm space-y-6 transition-colors hover:bg-yellow-800/35 cursor-pointer"
            >
              <h2 className="text-3xl font-light mb-8">Zapisy</h2>
              <div className="flex justify-between items-center">
                <div>
                  {/* <h3 className="font-medium">Umów konsultację online na platformie Sensly:</h3> */}
                  <p className="text-sm text-gray-500">Umów konsultację online na platformie Sensly:</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/sensly.png"
                  alt="Sensly"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            </a>
            
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="relative bg-[#efebe7] z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Porozmawiajmy</h2>
            <p className="text-gray-600 mb-8">
              Zapraszam do kontaktu. Możesz umówić się na wizytę bezpośrednio na platformie Sensly lub mailowo.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Joanna Sierak - psycholożka</p>
              <p>Email: kontakt.joanna.sierak@gmail.com</p>
              <p>Umawianie wizyt: https://sensly.com/specjalista/joanna-sierak</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#efebe7] z-10">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>© 2024 Wszelkie prawa zastrzeżone | Joanna Sierak - gabinet psychologiczny</p>
        </div>
      </footer>
    </div>
  );
}
