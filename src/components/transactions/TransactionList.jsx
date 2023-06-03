import React from 'react'
import "../../styles/lista.css"
import { useSelector } from 'react-redux'
import useValueStore from '../../hooks/useValueStore'
import { Grid, Typography } from '@mui/material'


export const TransactionList = () => {
    const { transactions } = useSelector(state => state.value)
    const { deleteTransaction } = useValueStore()



    return (
        <Grid>
            {transactions.map(transaction => (
                <Grid key={transaction.id} display={'flex'} justifyContent={'space-between'}
                    alignItems={'center'} width={300} mt={2} pb={1} borderBottom={"solid 2px #595959"}>
                    <Grid>
                        <Typography>{transaction.description}</Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'}>
                        <Typography mr={1}>${transaction.amount}</Typography>
                        <button className='button2' onClick={() => deleteTransaction(transaction.id)}>
                            Delete
                        </button>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}
