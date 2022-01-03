import React, { ReactNode, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {

    children?: ReactNode;

    label?: string | number;
    type?: 'outlined' | 'fill' | 'transparent';
}

const Button = ({type, label, ...props}: Props) => {

    return(
        <button {...props} className={

            type == "outlined" ? `hover: rounded-md border-2 border-slate-400 text-slate-400 bg-transparent font-bold mx-2 px-2 py-1` :
            type == "fill" ? `hover: rounded-md border-0 text-white bg-slate-600 font-bold mx-2 px-2 py-1` :
            type == "transparent" ? `hover:text-white text-slate-400 font-bold mx-2 px-2 py-1` :

            // DEFAULT STYLE = transparent
            `hover:text-white text-slate-400 font-bold mx-2 mx-2 px-2 py-1`
        }>
            {label || "DefaultLabel"}
        </button>
    )
}   

export default Button;