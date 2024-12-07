import Top from "./Top"

const NewArrival = () => {
  return (
  <>
  <div><Top p1={"Featured"} p2={"New Arrival"}/></div>
  {/* main div */}
  <div className="w-[1170px] h-[600px] gap-[50px] text-[#FAFAFA]  ml-[135px] mt-[150px] flex">
  {/* first pic */}
  <div className="h-[600px] w-[570px] rounded  bg-[#000000] flex ">
  <div className="relative left-[29px] top-[89px] bg-[url('/play.png')] bg-center bg-no-repeat h-[511px] w-[511px]">
  <div className="w-[242px] h-[122px] gap-[16px] mt-[350px] ml-[32px] flex flex-col">
  <h4 className="w-[162px] h-[24px] font-semibold text-[24px] lrading-[24px] tracking-[3%]">PlayStation 5</h4>
  <p className="text-[14px] leading-[21px] h-[42px]">Black and White version of the PS5 coming out on sale.</p>
  <p className='w-[68px] h-[24px] font-semibold underline leading-[24px] '>ShopNow</p>
  </div>       
  </div>
  </div>

   {/* section 2 */}
  <div className="h-[600px] w-[570px] ">
  <div className="h-[284px] w-[570px] rounded  bg-[#000000] ">
  <div className="relative ml-[40px]  bg-[url('/lady.png')] bg-center bg-no-repeat h-[286px] w-[432px]">
  <div className="w-[255px] h-[122px] gap-[16px] pt-[140px] flex flex-col">
  <h4 className="w-[255px] h-[24px] font-semibold text-[24px] lrading-[24px] tracking-[3%]">Women’s Collections</h4>
  <p className="text-[14px] leading-[21px] w-[255px] h-[42px]">Featured woman collections that give you another vibe.</p>
  <p className='w-[68px] h-[24px] font-semibold underline leading-[24px] '>ShopNow</p>
  </div>   
  </div>   
  </div>
   
  <div className="w-[570px] h-[284px] flex gap-6 mt-[20px]">
  <div className="h-[284px] w-[270px] rounded  bg-[#000000] ">
  <div className="relative mt-[60px] ml-5  bg-[url('/speaker.png')] bg-center bg-no-repeat h-[221px] w-[199px]">
  <div className="w-[191px] h-[85px] gap-[8px] pt-[110px] flex flex-col">
  <h4 className="w-[114px] h-[24px] font-semibold text-[24px] lrading-[24px] tracking-[3%]">Speakers</h4>
  <p className="text-[14px] leading-[21px] w-[191px] h-[21px]">Amazon wireless speakers</p>
  <p className='w-[81px] h-[24px] font-semibold underline leading-[24px] '>ShopNow</p>
  </div>   
  </div>  
  </div>
  <div className="h-[284px] w-[270px] rounded  bg-[#000000] ">
  <div className="relative mt-[60px] ml-5 bg-[url('/perfum.png')] bg-center bg-no-repeat h-[201px] w-[203px]">
  <div className="w-[191px] h-[85px] gap-[8px] pl-[15px] pt-[110px] flex flex-col">
  <h4 className="w-[114px] h-[24px] font-semibold text-[24px] leading-[24px] tracking-[3%]">Perfume</h4>
  <p className="text-[14px] leading-[21px] w-[191px] h-[21px]">GUCCI INTENSE OUD EDP</p>
  <p className='w-[81px] h-[24px] font-semibold underline leading-[24px] '>ShopNow</p>
  </div>   
  </div>  
  </div>
  </div>
  </div>
   </div>
   
    </>
  )
}

export default NewArrival