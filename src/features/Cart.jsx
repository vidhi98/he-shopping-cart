import { Typography, Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CartDataProvider from "./CartDataProvider";
import CartSummary from "./CartSummary";
import ItemList from "./ItemsList";

const useStyles = makeStyles((theme) => ({
  outerGrid: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));

const CartPage = () => {
  const classes = useStyles();
  return (
    <CartDataProvider>
      <div style={{ padding: "5%" }}>
        <Typography variant="h4">Order Summary</Typography>
        <Box pt={2} />
        <Grid container spacing={2} className={classes.outerGrid}>
          <Grid item xs={12} md={9}>
            <ItemList />
          </Grid>
          <Grid item xs={12} md={3}>
            <CartSummary />
          </Grid>
        </Grid>
      </div>
    </CartDataProvider>
  );
};

export default CartPage;
