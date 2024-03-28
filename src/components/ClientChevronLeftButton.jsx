import ChevronLeftIcon from './icons/ChevronLeftIcon'
const buttonStyle={
    backgroundColor: '#d7d7d7'
}

export const ClientGoBackChevronButton=({handleClick})=>{
    return(
    <button onClick={()=>handleClick()} style={buttonStyle}><ChevronLeftIcon/></button>
    );
}