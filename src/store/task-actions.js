import { uiActions } from "./fetch-slice";
import { taskActions } from "./task-slice";

export const getInitialTasks = () => {
    
}

// export const getInitialCart = () => {
//     return async (dispatch) => {
//         const response = await fetch('https://manifest-welder-335315-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
        
//         if (!response.ok){
//             dispatch(uiActions.set({
//                 status: 'error',
//                 title: 'Fail!',
//                 message: 'Cannot get cart detail. Check your network and try again!',
//             }))
//             return 
//         }

//         const data = await response.json()
//         dispatch(cartActions.replace(data || []))
//     }
// }

// export const sendCart = (cart) => {
//     return async (dispatch) => {
//       const sendRequest = async () => {
//         dispatch(uiActions.set({
//           status: 'pending',
//           title: 'Sending...',
//           message: 'Sending your cart to firebase!',
//         }))
    
//         const response = await fetch('https://manifest-welder-335315-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify(cart),
//         })

//         if (!response.ok){
//           throw new Error('Something went wrong!')
//         }

//         dispatch(uiActions.set({
//           status: 'success',
//           title: 'Successfully!',
//           message: 'Your cart is sent to firebase.',
//         }))
//       }
  
//       sendRequest().catch(error => {
//         dispatch(uiActions.set({
//           status: 'error',
//           title: 'Fail!',
//           message: error.message,
//         }))
//       }) 
//     }
//   }