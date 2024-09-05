import React, { useState, useRef } from "react";
import Question from "../assets/question.svg";
import Box from "../assets/box.svg";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";

const SecondWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://i.pinimg.com/736x/87/71/91/877191dcf0649897bc81c2f6ca11904c.jpg",
    "https://i.pinimg.com/736x/93/69/1e/93691e82745e0015c27dbebe3539ab41.jpg",
    "https://i.pinimg.com/736x/e6/96/2a/e6962aef079db80f58630e00e432eceb.jpg",
    "https://i.pinimg.com/564x/7c/19/22/7c192215b047705227495417cb412170.jpg",
  ]);

  const fileInputRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[50%] w-[100%] bg-[#363C43] rounded-[27px] shadow-lg shadow-black">
      <div className="p-4 flex gap-4">
        <div>
          <img src={Question} className="" alt="" />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <button
              className="h-[90%] bg-[#171717] px-8 py-3 rounded-2xl text-white text-lg
                                        shadow-inner shadow-black font-medium"
            >
              Gallery
            </button>
          </div>
          <div>
            <div className="flex gap-4 px-4">
              <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
                <button
                  className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                                flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
                  onClick={() => fileInputRef.current.click()}
                >
                  <FaPlus className="w-[10px] mb-[1.4px]" /> ADD IMAGE
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="flex gap-3 text-[#6F787C] px-2">
                <div
                  className="rounded-full
                                                shadow-[0px_0px_20px_6px_#6a8897]
                                                active:scale-[0.8] z-0"
                >
                  <button
                    className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                                                    shadow-[2px_8px_22px_5px_black]"
                    onClick={handlePrev}
                  >
                    <FaArrowLeft />
                  </button>
                </div>
                <div
                  className="rounded-full
                                                shadow-[0px_0px_20px_6px_#6a8897]
                                                active:scale-[0.8] z-0"
                >
                  <button
                    className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                                                    shadow-[2px_8px_22px_5px_black]"
                    onClick={handleNext}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-2 ml-2.5">
        <div className="mt-5 w-[19px]">
          <img src={Box} alt="" />
        </div>
        <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 
                                transform hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondWidget;
