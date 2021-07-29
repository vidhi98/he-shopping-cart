import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const CartSummary = () => {
  return (
    <Box border="1px solid lightgray" maxWidth={300}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Total</Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography variant="subtitle1">Items</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="center">
              7
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography variant="subtitle1">Discount</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="center">
              7
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography variant="subtitle1">Type Discount</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="center">
              7
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mt={2} bgcolor="lightgray">
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Typography>Order Total</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" align="center">
              $1254.0
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CartSummary;
