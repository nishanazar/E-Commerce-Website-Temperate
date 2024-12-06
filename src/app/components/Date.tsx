interface IDate {
  day: string;
  date: string;
}

const Date = (props:IDate) => {
  const {day, date} = props
  return (
    <div className="w-[46px] h-[50px]">
     
            
            <p className="w-[31px] h-[18px] text-[12px] leading-[18px] font-medium">{day}</p>
            <p className="text-[32px] leading-[30px] font-bold tracking-[2px]">{date}</p>
            </div>
  )
}

export default Date