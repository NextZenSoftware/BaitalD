import { useState, useEffect, useRef } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Mrs Ava Thompson",
      text: "Fantastic service by Bait Al Tahzeeb! The team was highly professional, arrived on time, and left my home looking immaculate. Every detail was taken care of, and the results exceeded my expectations. I’ll definitely be using their services again!",
      image: "/images/avt1.jpeg",
      rating: 5,
    },
    {
      name: "Mr Ethan Patel",
      text: "Bait Al Tahzeeb is giving Very good service! The team was professional and did a thorough job. A couple of small areas were overlooked, but overall, I’m happy with the outcome and would hire them again.",
      image: "/images/avt2.jpg",
      rating: 4,
    },
    {
      name: "Miss Olivia Harris",
      text: "Absolutely amazing work done by Bait Al Tahzeeb! The cleaning team was friendly, thorough, and efficient. They made my place look brand new and even took care of areas I thought were impossible to clean. Highly recommended!",
      image: "/images/avt4.jpg",
      rating: 5,
    },
    {
      name: "Mr Liam Robinson",
      text: "The service was okay but not outstanding. While the team cleaned most areas decently, they missed some corners and didn’t spend enough time on deep cleaning. It felt a bit rushed.",
      image: "/images/avt3.jpg",
      rating: 3,
    },
    {
      name: "Mrs Mia Clark",
      text: "Excellent service from start to finish! The team was efficient, respectful, and left my home sparkling clean. They paid close attention to detail, and I couldn’t be happier with the results. Will definitely use their service again!",
      image: "/images/avt5.jpg",
      rating: 5,
    },
    {
      name: "Mr Noah Johnson",
      text: "Great experience! The cleaning was done well, and the staff was polite and hardworking. A bit more attention to detail in certain spots would have made it perfect, but I’m satisfied with the service.",
      image: "/images/avt.jpg",
      rating: 4,
    },
    // {
    //   name: "Sophia Williams",
    //   text: "Very disappointing. The cleaning was subpar, with several areas left untouched. The team seemed unprepared and lacked professionalism. I had to hire another company to finish the job properly. Would not recommend.",
    //   image: "/images/cleaning1.jpg",
    //   rating: 1,
    // },

    // Add more testimonials here
    // baitaltahzeeb offers excellent cleaning services at affordable prices. They always ensure each area is meticulously cleaned, providing great satisfaction every time. Highly recommended for deep cleaning needs.
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 2000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      className="relative w-full px-4 py-8 mx-auto mt-16 max-w-7xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="mb-6 text-xl font-semibold text-center sm:text-2xl md:text-3xl">
        What Clients Say <span className="text-green-600">About Us</span>
      </h2>
      {/* Carousel for Desktop */}
      <div className="hidden overflow-hidden md:flex">
        {[0, 1, 2].map((offset) => {
          const index = (currentIndex + offset) % testimonials.length;
          return (
            <div
              key={index}
              className="w-1/3 px-4 transition-transform duration-500 transform"
            >
              <div className="p-6 rounded-lg shadow-lg bg-slate-100 h-[300px]">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {testimonials[index].name}
                    </h3>
                    <div className="flex">
                      {renderStars(testimonials[index].rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonials[index].text}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Carousel for Mobile */}
      <div className="md:hidden">
        <div className="px-4">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <div className="flex">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{testimonials[currentIndex].text}</p>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 transform bg-green-600 rounded-full shadow-lg lg:-left-3 top-1/2 lg:translate-y-1/3 hover:bg-green-700"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>     
        
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 p-2 transform bg-green-600 rounded-full shadow-lg lg:-right-3 top-1/2 lg:translate-y-1/3 hover:bg-green-700"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      </div>
    
  );
};

export default TestimonialCarousel;
