import ChevronLeftIcon from './icons/ChevronLeftIcon'
const buttonStyle={
    backgroundColor: '#d7d7d7',
    marginTop:'1rem',
    marginBottom:'1rem'
}

export const ClientGoBackChevronButton=({handleClick})=>{
    return(
    <button onClick={()=>handleClick()} style={buttonStyle}><ChevronLeftIcon/></button>
    );
}