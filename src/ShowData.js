import React from "react";
import { connect } from "react-redux";
import { fetchAPIdata } from "./action";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/styles";

const styles = {
  UserDetailsTable: {
    width: "100%",
    textAlign: "center",
  },

  UserDetailsTableHead: {
    backgroundColor: "black",

    "& th": {
      color: "white",
      fontWeight: "bold",
    },
  },

  UserDetailsRows: {
    padding: "10px",

    "&:hover": {
      background: "#efefef",
      cursor: "pointer",
    },
  },
};

const ShowData = (props) => {
  const { classes, apiData } = props;
  return (
    <div>
      <Table className={classes.UserDetailsTable}>
        <TableHead className={classes.UserDetailsTableHead}>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.apiData &&
            apiData.map((data) => (
              <TableRow key={data.id} className={classes.UserDetailsRows}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.username}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.website}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  apiData: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAPIdata: () => dispatch(fetchAPIdata()),
});
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ShowData)
);
