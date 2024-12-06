
interface IDot {
    h: string;
    w: string
    bg: string
    opacity?: string;
}

const Dot = (props: IDot) => {
    const {h, w, bg, opacity} = props
  return (
    <div className={`${w} ${h} ${bg} ${opacity} rounded-full`}>

    </div>
  )
}

export default Dot

