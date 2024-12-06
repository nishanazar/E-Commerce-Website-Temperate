import Image from "next/image"


const NewArrivalItem = () => {
  return (
    <div className="h-[600px] w-[570px] rounded text-[#FAFAFA]">
      <Image src={"/play.png"} alt={"play"}/>  
      <div className="w-[242px] h-[122px] gap-[16px] ml-[32px]">
        <h4 className="w-[162px] h-[24px] font-semibold text-[24px] lrading-[24px] tracking-[3%]"></h4>
        <p className="text-[14px] leading-[21px]"></p>
        </div>       
    </div>
  )
}

export default NewArrivalItem