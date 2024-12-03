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
    <div className="">
      <div className="flex py-[128px] ps-6 justify-around container mx-auto max-lg:flex-col gap-10">
        <div className="flex flex-col gap-[16px]">
          <h1 className="w-full font-poppins font-semibold text-[48px] leading-[64px] text-[#282938]">
            How we work
          </h1>
          <p className="font-poppins font-normal text-[#282938] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="w-full font-poppins text-[18px] text-[#2405F2]">
            <a href="#">Get in touch with us {"-->"}</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px] items-center max-sm:grid-cols-1">
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
            <h1 className="font-poppins text-[32px] text-[#282938]">Design</h1>
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

      <div className=" flex flex-col gap-[47px] items-center bg-slate-200">
        <div className="flex flex-col justify-center items-center pt-32">
          <span className="text-center">Features</span>
          <h1 className="w-full font-poppins font-semibold text-[48px] text-center text-[#282938] max-sm:text-[30px]">
            Design that solves problems, one product at a time
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-[30px] items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="max-w-[405px] flex flex-col gap-[12px]">
            <img src={humans} alt="humans" className="w-[32px] h-[27px]" />
            <h1 className="w-full font-poppins text-[24px] text-[#282938]">
              Uses Client First
            </h1>
            <p className="w-full font-poppins font-normal text-[#282938] opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="max-w-[405px] flex flex-col gap-[12px]">
            <img src={check} alt="check" className="w-[32px] h-[27px]" />
            <h1 className="w-full font-poppins text-[24px] text-[#282938]">
              Two Free Revision Round
            </h1>
            <p className="w-full font-poppins font-normal text-[#282938] opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="max-w-[405px] flex flex-col gap-[12px]">
            <img src={edit} alt="edit" className="w-[32px] h-[27px]" />
            <h1 className="w-full font-poppins text-[24px] text-[#282938]">
              Template Customization
            </h1>
            <p className="w-full font-poppins font-normal text-[#282938] opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="max-w-[405px] flex flex-col gap-[12px]">
            <img
              src={questions}
              alt="questions"
              className="w-[32px] h-[27px]"
            />
            <h1 className="w-full font-poppins text-[24px] text-[#282938]">
              24/7 Support
            </h1>
            <p className="w-full font-poppins font-normal text-[#282938] opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="max-w-[405px] flex flex-col gap-[12px]">
            <img src={cloack} alt="cloack" className="w-[32px] h-[27px]" />
            <h1 className="w-full font-poppins text-[24px] text-[#282938]">
              Quick Delivery
            </h1>
            <p className="w-full font-poppins font-normal text-[#282938] opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="max-w-[405px] flex flex-col gap-[12px]">
            <img src={note} alt="note" className="w-[32px] h-[27px]" />
            <h1 className="w-full font-poppins text-[24px] text-[#282938]">
              Hands-on approach
            </h1>
            <p className="w-full font-poppins font-normal text-[#282938] opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
