import React from "react"

type TExample = {
    nome: string;
    sobrenome: string;
}

export const Example = ({ nome, sobrenome }: TExample) => {
    return (
        <div>
            {nome} - {sobrenome}
        </div>
    )
}