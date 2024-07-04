import Header from '../components/Header';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="p-4">
        <section>
          <Carousel />
        </section>
        <section className="py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Clients</h2>
            <p className="mt-2">Some of our valuable clients.</p>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            {/* Add client logos here */}
          </div>
        </section>
        <section className="py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Manage your entire community in a single system</h2>
            <p className="mt-2">Some description about the system.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add feature descriptions here */}
          </div>
        </section>
      </main>
    </div>
  );
}
