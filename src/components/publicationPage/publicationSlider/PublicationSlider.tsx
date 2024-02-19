import { ArrowLeft, ArrowRight } from 'lucide-react';
import AliceCarousel from 'react-alice-carousel';

const PublicationSlider = ({ data }) => {
  const responsive = {
    0: { items: 1 },
    800: { items: 2 },
    1024: { items: 4 },
  };
  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto relative px-10 my-16">
        <AliceCarousel
          disableDotsControls
          responsive={responsive}
          mouseTracking
          renderPrevButton={() => (
            <div className="absolute -left-12 lg:-left-20 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg bg-white">
              <ArrowLeft className="text-primary-btnColor cursor-pointer" />
            </div>
          )}
          renderNextButton={() => (
            <div className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg bg-white">
              <ArrowRight className="text-primary-btnColor cursor-pointer" />
            </div>
          )}
        >
          {data.map((item) => (
            <div className="lg:w-[15rem] h-full mx-auto">
              <img
                className="w-full h-full object-contain"
                src={item.image}
                alt="img"
              />
            </div>
          ))}
        </AliceCarousel>
      </div>

      {/* <div className="flex">
        <div>
          <img src="/images/common/Publication.png" alt="img" />
        </div>

        <div>
          <img src="/images/common/Publication.png" alt="img" />
        </div>

        <div>
          <img src="/images/common/Publication.png" alt="img" />
        </div>

        <div>
          <img src="/images/common/Publication.png" alt="img" />
        </div>
      </div> */}
    </>
  );
};

export default PublicationSlider;
