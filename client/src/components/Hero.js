import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <>
      <div className="relative h-56 mb-20 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
