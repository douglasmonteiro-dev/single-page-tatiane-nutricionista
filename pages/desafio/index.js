import Head from '../../src/components/Head'
import styled from 'styled-components'
import Cabecalho from '../../src/components/Cabecalho'
import Rodape from '../../src/components/Rodape'
import { Button, Link, Spacer, Grid, Text } from '@geist-ui/react'
import Check from '@geist-ui/react-icons/check'
import { useState } from 'react'
import axios from 'axios'

import { Page } from '@geist-ui/react'



export default function Desafio() {

  return (
    <Page>
      <Head title="Desafio - Tatiane Nutricionista" />
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
              Não perca tempo, clique no botão abaixo e se inscreva.
            </Text>
          </Grid>
          <Grid xs={24}>
          <Link href="https://forms.gle/VNmiUGbG9mS5y68u6"> 
            <Button type="secondary" ghost>
              <Check /><Spacer x={0.5} />Inscrição Individual
            </Button>
            </Link>
          </Grid>
          <Grid xs={24}>
          <Link href="/promocao"> 
            <Button type="secondary" ghost>
              <Check /><Spacer x={0.5} />Inscrição Casadinha
            </Button>
            </Link>
          </Grid>
        </Grid.Container>


      </Page.Content>
      <Page.Footer>
        <Rodape />
      </Page.Footer>
    </Page>
  )
}
