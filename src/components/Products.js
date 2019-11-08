import React from "react";
import Image from "../images/1.jpg";
import { FaPencilAlt } from "react-icons/fa";
import { Table, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from "@material-ui/core";

const columns = [
  { id: "edit", label: "Edit", minWidth: 170 },
  { id: "code", label: "Code", minWidth: 100 },
  {
    id: "sku",
    label: "SKU",
    minWidth: 170,
    align: "center"
  },
  {
    id: "model",
    label: "Model",
    minWidth: 170,
    align: "center"
  },
  {
    id: "manufacturer",
    label: "Manufacturer",
    minWidth: 170,
    align: "center"
  },
  {
    id: "photo",
    label: "Photo",
    minWidth: 170,
    align: "center"
  }
];

function createData(edit, code, sku, model, manufacturer, photo) {
  return {
    edit,
    code,
    sku,
    model,
    manufacturer,
    photo
  };
}

const rows = [
  createData(
    <FaPencilAlt />,
    "GPU1001",
    "112233",
    "GTX 1080 TI Gaming",
    "MSI",
    <img src={Image} alt="msi gtx 1080 ti" className="productimg" />
  ),
  createData(
    <FaPencilAlt />,
    "GPU1001",
    "112233",
    "GTX 1080 TI Gaming",
    "MSI",
    <img src={Image} alt="msi gtx 1080 ti" className="productimg" />
  ),
  createData(
    <FaPencilAlt />,
    "GPU1001",
    "112233",
    "GTX 1080 TI Gaming",
    "MSI",
    <img src={Image} alt="msi gtx 1080 ti" className="productimg" />
  ),
  createData(
    <FaPencilAlt />,
    "GPU1001",
    "112233",
    "GTX 1080 TI Gaming",
    "MSI",
    <img src={Image} alt="msi gtx 1080 ti" className="productimg" />
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
    <div>
      <Hidden mdUp>
        <h2 className="mobiletabname">Products</h2>
      </Hidden>
      <Paper className={classes.root}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
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
          rowsPerPageOptions={[10, 25, 100]}
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
    </div>
  );
}
