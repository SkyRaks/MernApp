import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Stack, TextField} from "@mui/material";
import { useProductStore } from "../store/product";
import {Modal} from "@mui/material";
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductCard = ({product}) => {

    const {deleteProduct} = useProductStore();
    const [updatedProduct, setUpdatedProduct] = React.useState(product);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteProduct = async(pid) => {
        const {success, message} = await deleteProduct(pid);
        console.log("success: ", success);
        console.log("message: ", message);
    }

    const {updateProduct} = useProductStore();
    const handleUpdateProduct = async(pid, updatedProduct) => {
        updateProduct(pid, updatedProduct);
        handleClose();
    }

  return (
    <Card sx={{ 
        maxWidth: 345,
        borderRadius: 2,
        overflow:"hidden",
        transition: "all 0.3s",
        "&:hover":{
            transform: "translateY(-5px)",
        },
    }}>
      <CardMedia
        component="img"
        sx={{ height: 192 }}
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {product.name}
        </Typography>

        <Typography variant="h5" fontWeight="bold" sx={{ color: 'text.secondary' }} mb={2}>
            ${product.price}
        </Typography>

        <CardActions>
            <Button size="small" onClick={handleOpen}>Update</Button>
            <Button size="small" onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
        </CardActions>

      </CardContent>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"}>
            Update Product
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <Box elevation={3} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <TextField
              placeholder="Product Name"
              fullWidth
              value={updatedProduct.name}
              onChange={(e) => setUpdatedProduct({...updateProduct, name: e.target.value})}
            />

            <TextField
              placeholder="Price"
              type="number"
              fullWidth
              value={updatedProduct.price}
              onChange={(e) => setUpdatedProduct({...updateProduct, price: e.target.value})}
            />

            <TextField
              placeholder="Image URL"
              fullWidth
              value={updatedProduct.image}
              onChange={(e) => setUpdatedProduct({...updateProduct, image: e.target.value})}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update Product
            </Button>

          </Stack>
        </Box>
            
          </Typography>
        </Box>
      </Modal>
    </Card>
  )
};
export default ProductCard