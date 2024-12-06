interface IBotton {
  bgColor: string;
  text: string;
  width: string;
}

const Botton = (props: IBotton) => {
  const {bgColor, text , width} = props
  return (
   <button className={`${width} h-[56px] rounded ${bgColor} py-[16px] px-[48px] text-[16px] leading-[24px] font-medium text-white text-center`}>{text}</button>
  )
}

export default Botton