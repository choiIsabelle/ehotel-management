import * as c from './CustomComponents'

export function RadioButton({radioTitle, options, radioCheck}){
    const radioChoices =[];
    options.forEach((o) => {
        radioChoices.push(
            <label key={o} htmlFor={o}>
                <input
                onClick={()=>radioCheck()}
                    type="radio"
                    value={o}
                    id={o}
                />
                {o}
            </label>
        );
    });

    return(
        <c.BasicContainer>
            <c.SubText>{radioTitle}</c.SubText>
        {radioChoices}
        </c.BasicContainer>
    )
} 
