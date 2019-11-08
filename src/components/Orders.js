import React from "react";
import "../App.css";
import { FaPencilAlt } from "react-icons/fa";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Grid,
  Hidden
} from "@material-ui/core";

const columns = [
  { id: "edit", label: "Edit", minWidth: 170 },
  { id: "code", label: "Code", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center"
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 170,
    align: "center"
  },
  {
    id: "payment",
    label: "Payment",
    minWidth: 170,
    align: "center"
  },
  {
    id: "shipping",
    label: "Shipping",
    minWidth: 170,
    align: "center"
  },
  {
    id: "customer",
    label: "Customer",
    minWidth: 170,
    align: "center"
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "center"
  },
  {
    id: "submitted",
    label: "Submitted",
    minWidth: 170,
    align: "center"
  }
];

function createData(
  edit,
  code,
  status,
  amount,
  payment,
  shipping,
  customer,
  phone,
  submitted
) {
  return {
    edit,
    code,
    status,
    amount,
    payment,
    shipping,
    customer,
    phone,
    submitted
  };
}

const rows = [
  createData(
    <FaPencilAlt />,
    "1001",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "3/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1002",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "3/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1003",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "3/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1004",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "3/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1005",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "3/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1006",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "3/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1007",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "2/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1008",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "2/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1009",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "2/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1010",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "2/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1011",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "1/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1012",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "1/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1013",
    "Paid",
    "130€",
    "Bank",
    "Pick Up",
    "Μακης Γκουτζελουδης",
    6984588656,
    "1/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1014",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "1/11/2019"
  ),
  createData(
    <FaPencilAlt />,
    "1015",
    "Paid",
    "130€",
    "Bank",
    "Courier",
    "Μακης Γκουτζελουδης",
    6984588656,
    "1/11/2019"
  )
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: "auto",
    overflow: "auto"
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid smUp={12} smDown={12}>
      <Hidden mdUp>
        <h2 className="mobiletabname">Orders</h2>
      </Hidden>

      <Paper className={classes.root}>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
}
