
import LittleCard from "./LittleCard"
import { IoIosTabletPortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineVideogameAsset } from "react-icons/md";
import Top from "./Top";

const Category = () => {
  return (
    <>
    <Top p1={"Categories"} p2={"Browse By Category"} />

    <div className="w-[1170px] h-[145px] grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-[30px] ml-[135px] mt-[160px]">
    <LittleCard paragraph={"Phones"} icon={<IoIosTabletPortrait className="w-[36px] h-[39px]"/> }/>
    <LittleCard paragraph={"Computers"} icon={<HiOutlineComputerDesktop  className="w-[36px] h-[39px]"/>}/>
    <LittleCard paragraph={"StopWatch"} icon={<BsSmartwatch className="w-[36px] h-[39px]" />}/>
    <LittleCard paragraph={"Camera"} icon={<IoCameraOutline className="w-[36px] h-[39px]" />}/>
    <LittleCard paragraph={"HeadPhones"} icon={<CiHeadphones className="w-[36px] h-[39px]" />}/>
    <LittleCard paragraph={"Gaming"} icon={<MdOutlineVideogameAsset className="w-[36px] h-[39px]" />}/>

    </div>

    </>
  )
}

export default Category