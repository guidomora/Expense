import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useValueStore from '../hooks/useValueStore'
import { Grid, Typography } from '@mui/material'

const Balance = () => {
  const { transactions, balance } = useSelector(state => state.value)
  const { doBalance } = useValueStore()


  useEffect(() => {
    doBalance()
  }, [transactions])



  return (
    <Grid mt={2} width={260} borderBottom={"solid 2px #595959"} pb={1}>
      <Grid display={'flex'} flexDirection={"row"} justifyContent={'space-between'}>
        <Grid display={'flex'} alignItems={'end'}>
          <Typography variant='h1' fontSize={20} sx={{fontWeight:"bold"}}>Your Balance:</Typography>
        </Grid>
        <Grid border={"solid 2px #ff9100"} borderRadius={3} height={30}
        display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1}>
          <Typography>${balance.total}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Balance