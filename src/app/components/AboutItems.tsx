
interface IAboutItems{
    paragraph:string;
    icon: React.ReactNode;
    h4: string
}
const  AboutItems= (props: IAboutItems) => {
    const {paragraph, icon, h4}= props
  return (
    <div className="w-[270px] h-[230px] rounded border-[1px] border-[#0000004D] hover:bg-[#DB4444] hover:text-white ">
<div className="w-[169px] h-[170px] relative top-[30px] left-[50px]  space-y-3">
    <div className="w-[80px] h-[80px] rounded-full border-gray-400 border-[10px] bg-black text-white ml-10"> <div className="ml-3 mt-2 w-[40px] h-[40px]">{icon}</div></div>
    <h4 className="w-[92px] h-[30px] text-[32px] leading-[30px] font-bold tracking-[4%] ml-10">{h4}</h4>

<p className="w-[213px] h-[24px] text-[16px] leading-[24px] text-center ">{paragraph}</p>
    </div>
    </div>
  )
}

export default AboutItems