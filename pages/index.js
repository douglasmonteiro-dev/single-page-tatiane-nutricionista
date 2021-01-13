import Head from '../src/components/Head'
import styled from 'styled-components'
import Cabecalho from '../src/components/Cabecalho'
import Rodape from '../src/components/Rodape'
import { Button, Link, Spacer, Grid, Avatar } from '@geist-ui/react'
import Facebook from '@geist-ui/react-icons/facebook'
import Calendar from '@geist-ui/react-icons/calendar'
import Book from '@geist-ui/react-icons/book'
import Instagram from '@geist-ui/react-icons/instagram'
import Activity from '@geist-ui/react-icons/activity'
import { Page } from '@geist-ui/react'




export default function Home() {
  const url ='/images/avatar.png'
  return (
    <Page>
      <Head title="Home - Tatiane Nutricionista" />
      <Page.Header>
        <Cabecalho title="Tatiane Ribeiro" subtitle="Nutricionista" />
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2} justify="center">
        <Grid xs={24}>
            <Avatar src={url} size="large" isSquare />
          </Grid>
          <Grid xs={24} alignContent="center">
            <Link href="https://api.whatsapp.com/send?phone=5511959948414">
              <Button type="secondary" ghost>
                <Calendar /><Spacer x={0.5} />Agendamento
             </Button>
            </Link>


          </Grid>
          <Grid xs={24}>
            <Link href="https://www.facebook.com/NutriTatianeRibeiro">
              <Button type="secondary" ghost>
                <Facebook /><Spacer x={0.5} />Facebook
            </Button>
            </Link>

          </Grid>
          <Grid xs={24}>
            <Link href="https://www.instagram.com/nutri.tatiane">
              <Button type="secondary" ghost>
                <Instagram /><Spacer x={0.5} />Instagram
            </Button>
            </Link>

          </Grid>
          {/* <Grid xs={24}>
            <Link href="/ebook">
              <Button type="secondary" ghost>
                <Book /><Spacer x={0.5} />E-book
            </Button>
            </Link>

          </Grid> */}
          <Grid xs={24}>
            <Link href="/desafio">
              <Button type="secondary" ghost>
                <Activity /><Spacer x={0.5} />Sob Medidas
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
