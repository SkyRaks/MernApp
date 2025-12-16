import { Container, Box, TextField, Button, Typography, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    console.log("Success: ", success);
    console.log("Message: ", message);
  };

  return (
    <Container maxWidth="sm">
      <Stack spacing={4} mt={4}>
        <Typography variant="h4" textAlign="center">
          Create New Product
        </Typography>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <TextField
              label="Product Name"
              fullWidth
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <TextField
              label="Price"
              type="number"
              fullWidth
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <TextField
              label="Image URL"
              fullWidth
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button
              variant="contained"
              fullWidth
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};
export default CreatePage;
