
interface IList {
paragraphy : string;
width: string;
height: string;
}
const List = ( props :IList) => {
  const {paragraphy, width, height} = props
    
  return (
<div className="w-[217px] h-[24px]">
<p className={`${width} ${height}`}>{paragraphy}</p> 

</div>
  )
}

export default List