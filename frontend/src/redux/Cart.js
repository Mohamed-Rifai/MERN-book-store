import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cartList:[],
    cartCount:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action)=> {
      
              
              state.cartList.push({
                  ...action.payload,
                  count:1,
              })
        
        },
        increment: (state,action)=> {
           const productID =  action.payload;
           state.cartList.forEach(item => {

           if( item?._id === productID ){
                   item.count++
           }            
           })
            
        },
        decrement: (state,action)=> {
             const productID =  action.payload;
           state.cartList.forEach((item,index) => {
            if(item?._id === productID){
               item.count-- ;
                   if(!item.count > 0){
                    state.cartList.splice(index, 1);
                   }
            }
            
           })

        },
    }
       
    

})

export const {addToCart,increment,decrement} = cartSlice.actions

export default cartSlice.reducer