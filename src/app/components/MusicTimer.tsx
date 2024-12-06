interface ITimer {
  num: string;
  text: string
}

const MusicTimer = (props: ITimer) => {
  const {num, text} = props
  return (
    <div className="h-[62px] w-[62px] bg-[#FFFFFF] rounded-full ">
      <div className="relative left-[10px] top-2">
          <p className="w-[19] h-[20px] font-semibold ml-3">{num}</p>
          <p className="w-[32] h-[18px] text-[12px]">{text}</p>
          </div>
           </div>
  )
}

export default MusicTimer