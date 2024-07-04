import { useStore } from '../store';

const slides = [
  {
    title: "Lessons and insights from 8 years",
    description: "Experience and insights gathered over 8 years of practice.",
    image: "/images/slide1.jpg",
  },
  {
    title: "Slide 2 Title",
    description: "Slide 2 Description",
    image: "/images/slide2.jpg",
  },
  {
    title: "Slide 3 Title",
    description: "Slide 3 Description",
    image: "/images/slide3.jpg",
  },
];

const Carousel = () => {
  const currentSlide = useStore(state => state.currentSlide);
  const setCurrentSlide = useStore(state => state.setCurrentSlide);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-96" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}>
            <div className="bg-black bg-opacity-50 text-white p-6">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md">
        Prev
      </button>
      <button onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md">
        Next
      </button>
    </div>
  );
};

export default Carousel;
