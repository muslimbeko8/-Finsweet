import rasm from "../assets/rasm.png";
import rasm1 from "../assets/rasm1.svg";
import rasm2 from "../assets/rasm2.svg";
import rasm3 from "../assets/rasm3.svg";
import rasm4 from "../assets/rasm4.svg";
import humans from "../assets/humans.svg";
import check from "../assets/check.svg";
import edit from "../assets/edit.svg";
import questions from "../assets/questions.svg";
import cloack from "../assets/cloack.svg";
import note from "../assets/note.svg";

export default function Mainnn() {
  return (
    <div class="bg-[#1B1C31] h-[670px]">
      <div className="container mx-auto">
        <div className="text-white flex justify-around py-[126px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="w-[582px] h-[222px] font-poppins font-semibold text-[54px] leading-[74px]">
              Building stellar websites for early startups
            </h1>
            <p className="w-[562px] h-[56px] font-poppins font-normal text-[16px] leading-[28px] opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex gap-[40px]">
              <div className="w-[230px] h-[64px] bg-[#FCD980] rounded-[41px] flex items-center justify-center">
                <button className="w-[118px] h-[32px] font-manrope font-semibold  text-[#1B1C2B]">
                  View our work
                </button>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                View Pricing {"-->"} <i className="fa-arrow-right fa"></i>
              </a>
            </div>
          </div>

          <div>
            <img src={rasm} alt="rasm" className="max-w-[638px] h-[361px]" />
          </div>
        </div>

        <div className="flex py-[128px] justify-around container mx-auto">
          <div className="flex flex-col gap-[16px]">
            <h1 className="w-[405px] h-[64px] font-poppins font-semibold text-[48px] leading-[64px] text-[#282938] ">
              How we work
            </h1>
            <p className="font-poppins font-normal text-[#282938] opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="w-[244px] font-poppins text-[18px] text-[#2405F2]">
              <a href="#">Get in touch with us {"-->"}</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <img src={rasm1} alt="logo1" className="w-[50px] h-[50px]" />
              <h1 className="font-poppins text-[32px] text-[#282938]">
                Strategy
              </h1>
              <p className=" font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={rasm2} alt="logo2" className="w-[50px] h-[50px]" />
              <h1 className="font-poppins text-[32px] text-[#282938]">
                Wireframing
              </h1>
              <p className="font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={rasm3} alt="logo3" className="w-[50px] h-[50px]" />
              <h1 className="font-poppins text-[32px] text-[#282938]">
                Design
              </h1>
              <p className="font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <img src={rasm4} alt="logo3" className="w-[50px] h-[50px]" />
              <h1 className="font-poppins text-[32px] text-[#282938]">
                Development
              </h1>
              <p className="font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[47px]">
          <div className="flex flex-col justify-center items-center">
            <span className="bg-[#F4F6FC] text-center">Features</span>
            <h1 className="w-[630px] font-poppins font-semibold text-[48px] text-center text-[#282938]">
              Design that solves problems, one product at a time
            </h1>
          </div>
          <div className="flex flex-wrap gap-[16px] justify-center">
            <div className="w-[405px] h-[316px] flex flex-col gap-[12px]">
              <img src={humans} alt="humans" className="w-[32px] h-[27px]" />
              <h1 className="w-[314.75px] font-poppins text-[24px] text-[#282938]">
                Uses Client First
              </h1>
              <p className="w-[324px] font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="w-[405px] h-[316px] flex flex-col gap-[12px]">
              <img src={check} alt="check" className="w-[32px] h-[27px]" />
              <h1 className="w-[314.75px] font-poppins text-[24px] text-[#282938]">
                Two Free Revision Round
              </h1>
              <p className="w-[324px] font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="w-[405px] h-[316px] flex flex-col gap-[12px]">
              <img src={edit} alt="edit" className="w-[32px] h-[27px]" />
              <h1 className="w-[314.75px] font-poppins text-[24px] text-[#282938]">
                Template Customization
              </h1>
              <p className="w-[324px] font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="w-[405px] h-[316px] flex flex-col gap-[12px]">
              <img
                src={questions}
                alt="questions"
                className="w-[32px] h-[27px]"
              />
              <h1 className="w-[314.75px] font-poppins text-[24px] text-[#282938]">
                24/7 Support
              </h1>
              <p className="w-[324px] font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="w-[405px] h-[316px] flex flex-col gap-[12px]">
              <img src={cloack} alt="cloack" className="w-[32px] h-[27px]" />
              <h1 className="w-[314.75px] font-poppins text-[24px] text-[#282938]">
                Quick Delivery
              </h1>
              <p className="w-[324px] font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="w-[405px] h-[316px] flex flex-col gap-[12px]">
              <img src={note} alt="note" className="w-[32px] h-[27px]" />
              <h1 className="w-[314.75px] font-poppins text-[24px] text-[#282938]">
                Hands-on approach
              </h1>
              <p className="w-[324px] font-poppins font-normal text-[#282938] opacity-70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
