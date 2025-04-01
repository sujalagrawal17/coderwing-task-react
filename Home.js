import React, { useState } from 'react';
import { Button, Typography, Box, Grid, Paper } from '@mui/material';

const Home = () => {
  const [cart, setCart] = useState([]);  // Cart state to hold added products

  // Sample products
  const products = [
    {
      name: 'Men\'s Running Shoes 1',
      description: 'Comfortable and stylish shoes for running and casual wear.',
      price: 100,
      image: 'https://www.jiomart.com/images/product/original/rvbwbngefk/campus-demo-wht-red-men-s-running-shoes-product-images-rvbwbngefk-0-202306022019.jpg?im=Resize=(75,94)',
    },
    {
      name: 'Men\'s Running Shoes 2',
      description: 'Durable shoes with great comfort for everyday wear.',
      price: 120,
      image: 'https://www.jiomart.com/images/product/original/rvbwbngefk/campus-demo-wht-red-men-s-running-shoes-product-images-rvbwbngefk-0-202306022019.jpg?im=Resize=(75,94)', 
    },
    {
      name: 'Men\'s Running Shoes 3',
      description: 'Lightweight shoes designed for runners.',
      price: 110,
      image: 'https://www.jiomart.com/images/product/original/rvbwbngefk/campus-demo-wht-red-men-s-running-shoes-product-images-rvbwbngefk-0-202306022019.jpg?im=Resize=(75,94)', 
    },
    
   
  ];

  // Function to add product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Box p={3}>
      <Typography variant="h3" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Welcome to the Home Page
      </Typography>
      
      {/* Products Grid */}
      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Product Image */}
              <img src={product.image} alt={product.name} width={200} height={200} />
              
              {/* Product Name */}
              <Typography variant="h6" mt={2} textAlign="center">
                {product.name}
              </Typography>
              
              {/* Product Description */}
              <Typography variant="body2" mt={1} color="textSecondary" textAlign="center">
                {product.description}
              </Typography>
              
              {/* Product Price */}
              <Typography variant="h6" mt={1}>
                ${product.price}
              </Typography>

              {/* Add to Cart Button */}
              <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)} sx={{ mt: 2 }}>
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box mt={3}>
        <Typography variant="h5">Your Cart</Typography>
        {cart.length === 0 ? (
          <Typography>No items in the cart</Typography>
        ) : (
          <Box>
            {cart.map((product, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <img src={product.image} alt={product.name} width={50} height={50} />
                <Typography ml={2} variant="body1">
                  {product.name} - ${product.price}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
