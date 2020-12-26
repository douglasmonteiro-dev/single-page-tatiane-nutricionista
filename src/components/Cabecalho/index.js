import React from 'react'
import { Text, Image } from '@geist-ui/react'

function Cabecalho({title, subtitle}){
    return (
            <header>
                      <Image width={100} height={100} src="/images/logo.png" />
                      <Image width={200} src="/images/letreiro.png" />
            </header>
    );
}

export default  Cabecalho;