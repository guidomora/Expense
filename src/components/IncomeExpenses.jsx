import { Grid, Typography, colors } from "@mui/material"
import { useSelector } from 'react-redux'

const IncomeExpenses = () => {
  const { transactions } = useSelector(state => state.value)

  const amounts = transactions.map(transaction => (transaction.amount))
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)

  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  return (
    <>
      <Grid width={260}>
        <Grid display="flex" justifyContent="space-between" mb={2}>
          <Grid>
            <Typography sx={{fontWeight:"bold"}}>Income</Typography>
          </Grid>
          <Grid>
            <Typography>${income}</Typography>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="space-between">
          <Grid>
            <Typography sx={{fontWeight:"bold"}}>Expense</Typography>
          </Grid>
          <Grid>
            <Typography color={"#ff0831"}>${expense}</Typography>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default IncomeExpenses