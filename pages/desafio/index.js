import Head from '../../src/components/Head'
import styled from 'styled-components'
import Cabecalho from '../../src/components/Cabecalho'
import Rodape from '../../src/components/Rodape'
import { Button, Link, Spacer, Grid, Text } from '@geist-ui/react'
import Check from '@geist-ui/react-icons/check'
import { useState } from 'react'
import axios from 'axios'

import { Page } from '@geist-ui/react'



export default function Ebook() {
  const [data, setData] = useState({ name: '', email: '', sent: false, buttonText: 'Inscreva-se', err: '' })


  return (
    <Page>
      <Head title="Ebook - Tatiane Nutricionista" />
      <Page.Header>
        <Cabecalho title="Tatiane Ribeiro" subtitle="Nutricionista" />
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} alignContent="center">
            <Text h3>Desafio Sob Medidas</Text>
          </Grid>
          <Grid xs={14} alignContent="center">
            <Text p>Já pensou em trabalhar sua alimentação + condicionamento físico e emagrecer de forma prática e sem sair de casa?🍛💪</Text>
          </Grid>
          <Grid xs={14} alignContent="center">
            <Text blockquote>
              Aguarde pois em breve teremos informações sobre as inscrições.
            </Text>
          </Grid>
          <Grid xs={24}>
          {/* <Link href="https://pag.ae/7WJyRvb14">  */}
            <Button type="secondary" disabled={data.name == '' || data.email == ''} ghost>
              <Check /><Spacer x={0.5} />{data.buttonText}
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid.Container>


      </Page.Content>
      <Page.Footer>
        <Rodape />
      </Page.Footer>
    </Page>
  )
}
