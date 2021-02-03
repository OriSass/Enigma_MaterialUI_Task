import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableContainer = withStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.common.black,
  }
}))(TableContainer);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 13,
    padding : 4

  },
  body: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    padding: 4    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(tradeDate, side, product, quantity, price, counterparty, providerPrice, salesPl, type, execution, status) {
  return { tradeDate, side, product, quantity, price, counterparty, providerPrice, salesPl, type, execution, status };
}

const rows = [
  createData('2021-01-06 01:55:20', "Buy", "BTC-USD", 0.016, "1,978.600","Cumberland", 0.226, 0.920, "hedge", "Rest API", "green"),
  createData('2021-01-06 01:55:20', "Sell","BTC-USD", 0.016, "1,978.600","Cumberland", 0.226, 0.920, "hedge", "Rest API", "green"),
  createData('2021-01-06 01:55:20', "Sell","BTC-USD", 0.016, "1,978.600","Cumberland", 0.226, 0.920, "hedge", "Rest API", "green"),
  createData('2021-01-06 01:55:20', "Buy", "BTC-USD", 0.016, "1,978.600","Cumberland", 0.226, 0.920, "hedge", "Rest API", "green"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function TradeTable() {
  const classes = useStyles();

  return (
    <StyledTableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell key="Trade Date" align="center">Trade Date</StyledTableCell>
            <StyledTableCell key="Side" align="center">Side</StyledTableCell>
            <StyledTableCell key="Product" align="center">Product</StyledTableCell>
            <StyledTableCell key="Quantity" align="center">Quantity</StyledTableCell>
            <StyledTableCell key="Price" align="center">Price</StyledTableCell>
            <StyledTableCell key="Counterparty" align="center">Counterparty</StyledTableCell>
            <StyledTableCell key="Provider" align="center">Provider Price</StyledTableCell>
            <StyledTableCell key="Sales" align="center">Sales PL</StyledTableCell>
            <StyledTableCell key="Type" align="center">Type</StyledTableCell>
            <StyledTableCell key="Execution" align="center">Execution</StyledTableCell>
            <StyledTableCell key="Status" align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.tradeDate}>
              <StyledTableCell component="th" scope="row">
                {row.tradeDate}
              </StyledTableCell> 
              <StyledTableCell  >{row.side}</StyledTableCell>
              <StyledTableCell key="1" color="orange">{row.product}</StyledTableCell>
              <StyledTableCell key="1" color="orange">{row.quantity}</StyledTableCell>
              <StyledTableCell key="1" color="orange">{row.price}</StyledTableCell>
              <StyledTableCell key="1" color="orange">{row.counterparty}</StyledTableCell>
              <StyledTableCell key="1" >{row.providerPrice}</StyledTableCell>
              <StyledTableCell key="1" >{row.salesPl}</StyledTableCell>
              <StyledTableCell key="1" >{row.type}</StyledTableCell>
              <StyledTableCell key="1" >{row.execution}</StyledTableCell>
              <StyledTableCell key="1" color="green">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
export default TradeTable;
