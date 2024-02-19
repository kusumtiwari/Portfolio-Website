import { useRef, useEffect } from "react";

interface ThankyouProps {
  onPopupSwitch: () => void;
}

const ThankyouPopup: React.FC<ThankyouProps> = ({ onPopupSwitch }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onPopupSwitch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onPopupSwitch]);

  const handleClose = () => {
    onPopupSwitch();
  };

  return (
    <div className="fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm z-40 overflow-y-auto">
      <div
        className="rounded h-[80vh] relative w-[95%] md:w-[75%] lg:w-[70%] xl:w-[60%] bg-white mx-auto my-16 flex justify-end"
        ref={popupRef}
      >
        {/* bug: this is not working */}
        <h1
          className="text-2xl font-bold curosr-pointer absolute top-2 right-2"
          onClick={handleClose}
        >
          X
        </h1>
        {/* Adjust the width of the image and its position */}
        <img
          src="/images/ThankyouBg.png"
          alt="thanks"
          className="h-full w-4/5 absolute top-0 right-0"
        />
        <h1 className="text-primary-headingColor text-4xl md:text-5xl lg:text-6xl font-bold font-sourceSerifPro  absolute w-fit h-fit text-center translate-x-[-50%] top-52">
          Thank you for your <br></br> Contribution!
        </h1>
      </div>
    </div>
  );
};
export default ThankyouPopup;
