import React, { useState, useRef } from "react";
import Question from "../assets/question.svg";
import Box from "../assets/box.svg";

const FirstWidget = () => {
  const [isActive, setIsActive] = useState("aboutme");
  const grayButtonRefs = useRef([]);

  const handleClick = (e, active) => {
    setIsActive(active);
  };

  return (
    <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
      <div className="p-4 flex gap-4">
        <div>
          <img src={Question} className="" alt="" />
        </div>
        <div className="flex-1">
          <div className="h-[56px] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
            <button
              onClick={(e) => handleClick(e, "aboutme")}
              ref={(el) => (grayButtonRefs.current[0] = el)}
              data-active={isActive === "aboutme"}
              className={`rounded-xl px-[55px] h-[40px] ${
                isActive === "aboutme"
                  ? "bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]"
                  : "text-[#b4aeae]"
              } flex justify-center items-center ml-2 hover:cursor-pointer ${
                isActive !== "aboutme" &&
                "hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
              }`}
              aria-label="About Me Section"
            >
              About
            </button>

            <button
              onClick={(e) => handleClick(e, "exp")}
              ref={(el) => (grayButtonRefs.current[1] = el)}
              data-active={isActive === "exp"}
              className={`rounded-xl px-[54px] h-[40px] ${
                isActive === "exp"
                  ? "bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]"
                  : "text-[#b4aeae]"
              } flex justify-center items-center ml-2 hover:cursor-pointer   
                ${
                  isActive !== "exp" &&
                  "hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
              aria-label="Experiences Section"
            >
              Experiences
            </button>
            <button
              onClick={(e) => handleClick(e, "rec")}
              ref={(el) => (grayButtonRefs.current[2] = el)}
              data-active={isActive === "rec"}
              className={`rounded-xl px-[48px] h-[40px] ${
                isActive === "rec"
                  ? "bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]"
                  : "text-[#b4aeae]"
              } flex justify-center items-center ml-2 mr-2 hover:cursor-pointer
                ${
                  isActive !== "rec" &&
                  "hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
              aria-label="Recommended Section"
            >
              Recommended
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 p-2 ml-2.5">
        <div className="mt-5">
          <img src={Box} alt="Box Icon" className="h-12 w-12" />
        </div>
        <div className="w-full overflow-hidden">
          <p className="text-[#969696] leading-6">
            {isActive === "aboutme" && (
              <>
                I am Nukul Sharma, a final-year student at LNMIIT and a
                full-stack developer. I have worked on diverse projects, including
                a 3D SWAT T-shirt design and a frontend design for Flying Pigeon
                Solutions, which will be live soon. My focus is on creating
                impactful and innovative web solutions.
              </>
            )}
            {isActive === "exp" && (
              <>
                Throughout my development journey, I have engaged in various
                projects that emphasize my skills in both frontend and backend
                technologies. My experience spans creating interactive designs
                and implementing functional, user-friendly interfaces.
              </>
            )}
            {isActive === "rec" && (
              <>
                I am recognized for my ability to deliver high-quality work, my
                dedication to meeting project deadlines, and my knack for
                problem-solving. These qualities have been highlighted by peers
                and mentors throughout my academic and professional endeavors.
              </>
            )}
          </p>
        </div>
        <div>
          <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
        </div>
      </div>
    </div>
  );
};

export default FirstWidget;
