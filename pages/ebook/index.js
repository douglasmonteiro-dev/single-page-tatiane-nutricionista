import Head from '../../src/components/Head'
import styled from 'styled-components'
import Cabecalho from '../../src/components/Cabecalho'
import Rodape from '../../src/components/Rodape'
import { Button, Link, Spacer, Grid, Input } from '@geist-ui/react'
import Send from '@geist-ui/react-icons/send'
import {useState} from 'react'

import { Page } from '@geist-ui/react'



export default function Ebook() {
  const [emailValue, setEmailValue] = useState()
  const [nameValue, setNameValue] = useState()
  const emailHandler = (e) => {
    setEmailValue(e.target.value)
  }
  const nameHandler = (e) => {
    setNameValue(e.target.value)
  }
  
  return (
    <Page>
      <Head title="Ebook - Tatiane Nutricionista" />
      <Page.Header>
        <Cabecalho title="Tatiane Ribeiro" subtitle="Nutricionista" />
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} alignContent="center">
            <Input clearable value={nameValue} onChange={nameHandler} placeholder="Nome Completo" status="success" />
          </Grid>
          <Grid xs={24} alignContent="center">
            <Input clearable value={emailValue} onChange={emailHandler} placeholder="E-mail" status="success" />
          </Grid>
          <Grid xs={24}>
              <Button type="secondary" ghost>
                <Send /><Spacer x={0.5}/>Enviar
            </Button>

          </Grid>
        </Grid.Container>


      </Page.Content>
      <Page.Footer>
        <Rodape />
      </Page.Footer>
    </Page>
  )
}
