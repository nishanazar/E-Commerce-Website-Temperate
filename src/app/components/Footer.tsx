import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-[440px] bg-[#000000] text-[#FAFAFA]">
      <div className="w-[1170px] pt-[80px] pl-[135px] flex gap-[87px]">
        {/* Exclusive Section */}
        <div className="w-[217px] h-[48px] flex flex-col gap-4">
          <h2 className="font-bold text-[24px] leading-[24px] tracking-[3%]">Exclusive</h2>
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%]">Subscribe</h3>
          <p className="font-normal text-[16px]">Get 10% off your first order</p>
          <div>
          <input
            className="w-[217px] h-[48px] rounded px-3 text-[16px] border-[2px] border-[#FAFAFA] bg-transparent"
            type="text"
            placeholder="Enter your email"
            
          />
          <AiOutlineSend className="h-[24px] w-[24px] relative bottom-[38px] left-[164px]" />
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-[176px]">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] pb-2">Subscribe</h3>
          <ul className="text-[16px] space-y-3">
            <li className="w-[175px] h-[48px]">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="w-[123px]">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] pb-1">Account</h3>
          <ul className="space-y-3 text-[16px]">
            <li>My Account</li>
            <li className="h-[24px] w-[123px]">Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="w-[109px] h-[196px]">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] w-[101px] h-[28px] pb-2 ">Quick Link</h3>
          <ul className="space-y-3 text-[16px]">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="w-[198px] h-[210px] flex flex-col gap-4">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] w-[148px] h-[20px]">Download App</h3>
          <p className="font-normal text-[12px] w-[194px] h-[18px]">Save $.3 with App - New User Only</p>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-[2.5px]"
              src="/qrcode.png"
              alt="QR Code"
              width={76}
              height={76}
            />
            <div>
              <Image
                src="/googleapp.png"
                alt="Google App"
                width={110}
                height={40}
              />
              <Image
                src="/app.png"
                alt="App"
                width={110}
                height={40}
              />
            </div>
            
          </div>
          <div className="w-[168px] h-[24px] flex gap-[24px]"><LuFacebook className="w-[24px] h-[24px]" />
            <FiTwitter  className="w-[27.6px] h-[24px]"/>
            <IoLogoInstagram className="w-[24px] h-[24px]" />
            <FaLinkedinIn  className="w-[24px] h-[24px]"/></div>
        </div>
  
      </div>
      <hr className=" mt-[70px] opacity-20"/>
      <div className="w-[337px] h-[24px] text-[16px] text-center mt-4 opacity-50 mx-auto">&copy; Copyright Rimel 2022. All right reserved</div>
    </div>
  );
};

export default Footer;
