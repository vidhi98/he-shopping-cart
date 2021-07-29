import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useCartDataContext from "../CartDataProvider/useCartDataContext";

const CartSummary = () => {
  const { itemsTotal, discountTotal, cartTotal, itemsCount, typeDiscountTotal } =
    useCartDataContext();
  return (
    <Box border="1px solid lightgray" maxWidth={300}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Total</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Items ({itemsCount})</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1" align="center">
              $ {itemsTotal}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Discount</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1" align="center">
             - $ {discountTotal}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Type Discount</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1" align="center">
             - $ {typeDiscountTotal}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mt={2} bgcolor="lightgray">
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography>Order Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="center">
              $ {cartTotal}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CartSummary;
