import { Box, Container, Grid, Link as MuiLink, Stack, Typography, } from '@mui/material';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from '../compotents/ProductCard';
import { useUserStore } from '../store/user';

const HomePage = () => {
  const user = useUserStore((state) => state.user)
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container>
      <Stack spacing={4} mt={4} alignItems={"center"}>
        {user !== null ? (
          <>

        <Typography 
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Current Products
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products.map((product) => (

              <Grid Item key={product.id} size={4}>
                <ProductCard product={product}/>
              </Grid>

            ))}    
          </Grid>
        </Box>

        {products.length === 0 && (
        <Typography
          variant='h6'
          textAlign={"center"}
          fontWeight={"bold"}
          color='text.secondary'
        >
          No products found, try to {" "}
          <MuiLink 
            component={Link}
            to="/create"
            sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            create a product
          </MuiLink>
        </Typography>
        )}
        </>
        ) : (
          <Typography
          variant='h6'
          textAlign={"center"}
          fontWeight={"bold"}
          color='text.secondary'
        >
          You are not logged in, {" "}
          <MuiLink 
            component={Link}
            to="/login"
            sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            log in
          </MuiLink>
        </Typography>
        )}

      </Stack>

    </Container>
  )
}

export default HomePage