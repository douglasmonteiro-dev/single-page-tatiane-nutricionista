import Head from '../../src/components/Head'
import styled from 'styled-components'
import Cabecalho from '../../src/components/Cabecalho'
import Rodape from '../../src/components/Rodape'
import { Button, Link, Spacer, Grid, Input } from '@geist-ui/react'
import Send from '@geist-ui/react-icons/send'
import { useState } from 'react'
import axios from 'axios'

import { Page } from '@geist-ui/react'



export default function Ebook() {
  const [data, setData] = useState({ name: '', email: '', sent: false, buttonText: 'Enviar', err: '' })

  const handleChange = (data) => {
    if (data.name) {
      setData(prevState => ({
        ...prevState,
        name: data.name
      }))
    }
    if (data.email) {
      setData(prevState => ({
        ...prevState,
        email: data.email
      }))
    }
  }
  const formSubmit = async (e) => {
    if (data.email.includes('@')) {
      e.preventDefault();

      setData({
        ...data,
        buttonText: 'Enviando...'
      })
      await axios.post('/api/sendmail', data)
        .then(res => {
          console.log(res)
          if (res.status !== 200) {
            setData({
              ...data,
              buttonText: 'Erro ${res.statusText}',
              sent: false,
              err: 'fail'
            })
            setTimeout(() => {
              resetForm()
            }, 6000)
          } else {
            setData({
              ...data,
              sent: true,
              buttonText: 'Enviado',
              err: 'success'
            })
            setTimeout(() => {
              resetForm();
            }, 6000)
          }
        }).catch((err) => {
          setData({
            ...data,
            buttonText: `Erro ${err.response.status}`,
            err: 'fail'
          })
        })
    }



  }
  const resetForm = () => {
    setData({
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Enviar',
      err: ''
    });
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
            <Input clearable onClearClick={resetForm} value={data.name} onChange={(event) => handleChange({ name: event.target.value })} placeholder="Nome Completo" status="success" />
          </Grid>
          <Grid xs={24} alignContent="center">
            <Input clearable onClearClick={resetForm} value={data.email} onChange={(event) => handleChange({ email: event.target.value })} placeholder="E-mail" status="success" />
          </Grid>
          <Grid xs={24}>
            <Button type="secondary" onClick={formSubmit} disabled={data.name == '' || data.email == ''} ghost>
              <Send /><Spacer x={0.5} />{data.buttonText}
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
