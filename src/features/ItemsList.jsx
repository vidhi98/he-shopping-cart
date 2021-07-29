import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useCartDataContext from "./CartDataProvider/useCartDataContext";

const ItemList = () => {
  const {
    addQuantity,
    cartData,
    removeQuantity,
    itemsCount,
    removeItem,
    reloadData,
  } = useCartDataContext();
  return (
    <>
      <Box
        py={2}
        mb={4}
        borderTop="solid 1px lightgray"
        borderBottom="solid 1px lightgray"
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>Items ({itemsCount})</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">Qty</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">Price</Typography>
          </Grid>
        </Grid>
      </Box>

      {cartData.length > 0 &&
        cartData.map((item) => (
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            key={item.id}
          >
            <Grid item xs={6} lg={7}>
              <Box border="solid 1px lightgray" p={1}>
                <Grid container item spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <img src={item.img_url} alt="img" />
                  </Grid>
                  <Grid item xs={3} sm={7} lg>
                    <Typography>{item.name}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      size="medium"
                      color="default"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4} lg={3} container>
              <Grid item xs="auto">
                <Button size="large" onClick={() => removeQuantity(item.id)}>
                  -
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Box px={2.5} border="solid 1px lightgray" py={1.5}>
                  <Typography variant="h6" border={4}>
                    {item.quantity}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Button size="large" onClick={() => addQuantity(item.id)}>
                  +
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" align="center">
                ${item.price}
              </Typography>
            </Grid>
          </Grid>
        ))}
      {cartData.length === 0 && (
        <Box minHeight={100}>
          <Button
            size="large"
            fullWidth
            color="primary"
            variant="contained"
            onClick={reloadData}
          >
            Reload
          </Button>
        </Box>
      )}
    </>
  );
};

export default ItemList;
