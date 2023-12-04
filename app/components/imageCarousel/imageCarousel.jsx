// components/ImageCarousel.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const ImageCarousel = ({ images, gapNum }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-1/2 pb-4 mx-auto">
      <div className="sm:hidden">
        {/* Carousel for small screens */}
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="mx-auto w-1/2"
              width={200}
              height={200}
            />
          ))}
        </Slider>
      </div>
      {gapNum === 3 ? (
        <div className="hidden sm:grid grid-cols-3 gap-10">
          {/* Grid layout for larger screens */}
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="max-w-1/5 mx-auto"
              width={200}
              height={200}
            />
          ))}
        </div>
      ) : (
        <div className="hidden sm:grid grid-cols-5 gap-10">
          {/* Grid layout for larger screens */}
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="max-w-1/5 mx-auto"
              width={200}
              height={200}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
