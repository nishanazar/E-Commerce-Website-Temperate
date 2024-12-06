interface ICircle {
  bgColor: string;
  border: string
}

const Circle = (props: ICircle) => {
  const {bgColor, border} = props
  return (
    <div className="w-[48px] h-[20px] flex gap-2">
      <div className={`w-[20px] h-[20px] gap-2 ${bgColor} ${border} rounded-full border-2 `}></div>
      <div className="w-[20px] h-[20px] gap-2 bg-[#FB1314] rounded-full" ></div>
    </div>
  )
}

export default Circle