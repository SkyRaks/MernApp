import { Container, Box, TextField, Button, Typography, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { Snackbar, Alert } from "@mui/material";

const CreatePage = () => {

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" | "error" | "warning" | "info"
  });

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
    setSnackbar({
      open:true,
      message:message,
      severity:success ? "success" : "error",
    });
    if (success) {
      setNewProduct({name:"", price:"", image:""});
    };
    
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
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({...snackbar, open:false})}
        anchorOrigin={{vertical:"bottom", horizontal:"center"}}
      >
        <Alert
          onClose={() => setSnackbar({...snackbar, open:false})}
          severity={snackbar.severity}
          sx={{width: "100%"}}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreatePage;
