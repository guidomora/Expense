
import "../../styles/form.css"
import useForm from '../../hooks/useForm'
import useValueStore from "../../hooks/useValueStore"
import { Grid, Typography } from "@mui/material"


const TransactionForm = () => {
  const { addTransaction } = useValueStore()
  const { description, amount, inputChange, onReset } = useForm({
    description: "",
    amount: ""
  })


  const onSubmit = (event) => {
    event.preventDefault()
    onReset()
    const id = window.crypto.randomUUID()
    addTransaction(description, amount, id)
  }

  return (
    <Grid sx={{ height: 250, width: 300, marginTop: 5 }}>
      <form onSubmit={onSubmit}>
        <Grid sx={{ height: 300, width: 300 }}>
          <Grid>
            <Grid sx={{ height: 200, width: 300 }}>
              <Typography fontSize={20} sx={{fontWeight:"bold"}}>Expense Tracker</Typography>
              <Grid className="field">
                <input type="text" onChange={inputChange} name="description" className="input-field" value={description} placeholder="Enter a Description" autoComplete="off" />
              </Grid>
              <Grid className="field">
                <input type="number" onChange={inputChange} name="amount" className="input-field" value={amount} placeholder="00.00" step="0.01" autoComplete="off" />
              </Grid>
              <Grid mt={4} display="flex" justifyContent="center" flexDirection="column"
              alignItems="center">
                <button className="button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span> Add Tansaction
                </button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export default TransactionForm