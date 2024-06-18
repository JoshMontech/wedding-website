
const Divider = ({height, width, rounded=false, color='white'} : {height: number, width: number, rounded?: boolean, color?: string}) => {
  return (
    <div className="flex items-center">
        <div className="bg-black" style={{width: width, height: height, borderRadius: rounded ? '50px' :'0px', backgroundColor: color}}/>
    </div>
  )
}

export default Divider