import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { VictoryPie, VictoryLabel, VictoryTooltip } from 'victory'

const ExpenseChart = () => {
    const { transactions } = useSelector(state => state.value)

    const amounts = transactions.map(transaction => (transaction.amount))
    const totalIncome = amounts.filter(item => item > 0).reduce((acc, item) =>
        (acc += item), 0);

    const totalExpense = amounts.filter(item => item < 0).reduce((acc, item) =>
        (acc += item), 0) * -1;

    const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100)
    const totalIncomePercentage = 100 - totalExpensePercentage

    const valor1 = totalIncomePercentage ? totalIncomePercentage : 50
    const valor2 = totalExpensePercentage ? totalExpensePercentage : 50

    return (
        <Grid>
            <VictoryPie
                // El primer color es para x y el segundo para y
                colorScale={["#509724", "#ff0831"]}
                data={[
                    { x: "Income", y: valor1 },
                     { x: "Expenses", y: valor2 }
                ]}
                animate={{
                    duration: 200
                }}
                // para que figuren los porcentajes
                labels={({datum}) => `${datum.y}$`}
                labelComponent={
                    <VictoryLabel
                        angle={45}
                        style={{
                            fontSize:"22px",
                            fill: "white"
                        }}
                    />
                }
            />

        </Grid>
    )
}

export default ExpenseChart