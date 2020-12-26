import React from 'react'
import { Link, Image } from '@geist-ui/react'

function Cabecalho({ title, subtitle }) {
    return (
        <header>
            <Link href="/">
                <Image width={100} height={100} src="/images/logo.png" />
            </Link>
            <Link href="/">
                <Image width={200} src="/images/letreiro.png" />
            </Link>
        </header>
    );
}

export default Cabecalho;