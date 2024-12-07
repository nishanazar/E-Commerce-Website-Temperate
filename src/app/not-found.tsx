import Botton from "./components/Botton"

const Error = () => {
  return (
    <div className=" my-[200px] text-[#000000] mx-auto flex flex-col items-center gap-10"><h1 className="w-[829px] h-[115px] font-medium text-[110px] leading-[115px] tracking-[3%]">404 Not Found</h1>
    <p className="w-[425px] h-[24px] text-[16px] leading-[24px] mb-5">Your visited page not found. You may go home page.</p>
    <Botton bgColor={"bg-[#DB4444]"} text={"Back to home page"} width={"w-[254px]"}/>
    </div>
  )
}

export default Error