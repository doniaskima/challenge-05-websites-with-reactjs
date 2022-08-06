import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {uiActions} from "./store/ui-slice"
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
function App() {
  let isFirstRender = true;
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendRequest = async () => {
      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sending Request",
        type: "Warning"
      }))
      const res = await fetch('https://redux-70d1f-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );
      const data = await res.json();
      //send state as Request is successful 
      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sent Request To Databases Succeffulyy",
        type: "success"
      }))
    };
    sendRequest().catch(err => {
      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sending Request Failed",
        type: "error"
      }))
    })
  }, [cart]);
  return (
    <div className="App">
      
   
    
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}

    </div>
  );
}

export default App;
