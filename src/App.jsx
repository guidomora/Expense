import { Grid } from "@mui/material"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionForm from "./components/transactions/TransactionForm"
import { TransactionList } from "./components/transactions/TransactionList"
import ExpenseChart from "./components/ExpenseChart"


function App() {

  return (
    <Grid display="flex" justifyContent="center" alignItems="center"
      height="100vh">
      <div className="card">
        <Grid display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"}
        alignItems={"baseline"}>
          <Grid width={300}>
            <Grid display="flex" justifyContent="center"
              flexDirection="column" flexWrap="wrap" p={2}>
              <TransactionForm />
              <IncomeExpenses />
              <TransactionList />
            </Grid>
          </Grid>
          <Grid ml={2} width={300}>
            <Balance />
            <ExpenseChart />
          </Grid>
        </Grid>

      </div>
    </Grid>


  )
}

export default App
