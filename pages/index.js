import Head from '../src/components/Head'
import styled from 'styled-components'
import Cabecalho from '../src/components/Cabecalho'
import Rodape from '../src/components/Rodape'
import { Button, Link, Spacer, Grid } from '@geist-ui/react'
import Facebook from '@geist-ui/react-icons/facebook'
import MessageCircle from '@geist-ui/react-icons/messageCircle'
import Book from '@geist-ui/react-icons/book'
import Instagram from '@geist-ui/react-icons/instagram'

import { Page } from '@geist-ui/react'




export default function Home() {
  return (
    <Page>
      <Head title="Home - Tatiane Nutricionista" />
      <Page.Header>
        <Cabecalho title="Tatiane Ribeiro" subtitle="Nutricionista" />
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} alignContent="center">
            <Link href="https://api.whatsapp.com/send?phone=551199948414">
              <Button type="secondary" ghost>
                <MessageCircle /><Spacer x={0.5}/>Whatsapp
             </Button>
            </Link>


          </Grid>
          <Grid xs={24}>
            <Link href="https://www.facebook.com/NutriTatianeRibeiro">
              <Button type="secondary" ghost>
                <Facebook /><Spacer x={0.5}/>Facebook
            </Button>
            </Link>

          </Grid>
          <Grid xs={24}>
            <Link href="https://www.instagram.com/nutri.tatiane">
              <Button type="secondary" ghost>
                <Instagram /><Spacer x={0.5}/>Instagram
            </Button>
            </Link>

          </Grid>
          <Grid xs={24}>
          <Link href="#"> 
          <Button type="secondary" ghost>
            <Book /><Spacer x={0.5}/>E-book
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
