import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const url = "http://localhost:3001";

const initialState = []

export const fetchObjects = createAsyncThunk('productsSlice/fetchObjects', async () => {
  try {
    const response = await axios.get(`${url}/product`); // Hacer una solicitud GET al backend
    return response.data; // Devolver los datos obtenidos en la respuesta
  } catch (error) {
    throw new Error('Failed to fetch objects from backend.'); // Lanzar un error en caso de fallo
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      axios.get(`${url}/product`)
        .then(response => {
          state.push(response.data);
        }).catch(error => {
          console.log("LLEGO EL ERROR");
          console.log(error.message);
        })
    },
    createProduct: (state, action) => {
      const { product } = axios.post(`${url}/product`, action.payload)
      state.push(product);
    },
  },
  extraReducers: (builder) => {
    // Manejar la acción asincrónica fetchObjects
    builder
      .addCase(fetchObjects.pending, (state) => {
        // state.status = 'pending';
        state = {name:"shit pending"};
      })
      .addCase(fetchObjects.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        // state = action.payload;
        state = {name:"shit pending"};
      })
      .addCase(fetchObjects.rejected, (state, action) => {
        // state.status = 'rejected';
        // state.error = action.error.message;
        state = {name:"shit error"};
      });
  },
});

export const { getProducts, createProduct } = productsSlice.actions;

export default productsSlice.reducer;
