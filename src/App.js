import { useState, useEffect } from 'react'

import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  Typography
} from '@mui/material'
import NumberFormat from 'react-number-format'

function App() {
  // ** store value
  const [input, setInput] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [d, setD] = useState(0)
  const [total, setTotal] = useState(0)

  const getOne = (i) => {
    const result = (i / 100) * 2.5
    setA(Math.round(result))
  }

  const getTwo = (i, a) => {
    const result = ((i - a) / 100) * 12.5
    setB(Math.round(result))
  }

  const getThree = (i, a) => {
    const result = ((i - a) / 100) * 2.5
    setC(Math.round(result))
  }

  const getFour = (i, a) => {
    const result = ((i - a) / 100) * 2.5
    setD(Math.round(result))
  }

  const getTotal = (a, b, c, d) => {
    const result = a + b + c + d
    setTotal(result)
  }

  useEffect(() => {
    getOne(input)
    getTwo(input, a)
    getThree(input, a)
    getFour(input, a)
    getTotal(a, b, c, d)
  }, [input, a, b, c, d])

  return (
    <Container>
      <Grid
        container
        paddingY={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
        className='form-wrapper'
      >
        <Grid item sm={4} xs={12} textAlign='center'>
          <Card className='card'>
            <CardContent>
              <Typography variant='h3'>Calculator</Typography>
              <Grid container marginY={3}>
                <NumberFormat
                  id='calculator'
                  thousandSeparator
                  className='input-number'
                  onValueChange={(data) => {
                    const { value } = data
                    setInput(value)
                  }}
                />
              </Grid>
              <Grid container item justifyContent='flex-start'>
                <Typography variant='h5' marginBottom={2}>
                  Details
                </Typography>
              </Grid>
              <Divider />
              <Grid
                container
                justifyContent='flex-start'
                marginBottom={1}
                marginTop={2}
              >
                <Box item xs={12}>
                  1.{' '}
                  <NumberFormat
                    value={a}
                    displayType='text'
                    thousandSeparator
                  />
                </Box>
              </Grid>
              <Grid container marginBottom={1}>
                <Box item xs={12}>
                  2.{' '}
                  <NumberFormat
                    value={b}
                    displayType='text'
                    thousandSeparator
                  />
                </Box>
              </Grid>
              <Grid container marginBottom={1}>
                <Box item xs={12}>
                  3.{' '}
                  <NumberFormat
                    value={c}
                    displayType='text'
                    thousandSeparator
                  />
                </Box>
              </Grid>
              <Grid container marginBottom={2}>
                <Box item xs={12}>
                  4.{' '}
                  <NumberFormat
                    value={d}
                    displayType='text'
                    thousandSeparator
                  />
                </Box>
              </Grid>
              <Divider />
              <Grid container marginY={2}>
                <Box item xs={12}>
                  <Typography variant='h5'>
                    Total:{' '}
                    <NumberFormat
                      value={total}
                      displayType='text'
                      thousandSeparator
                    />
                  </Typography>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
