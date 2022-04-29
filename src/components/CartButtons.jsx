import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const {closeSidebar} = useProductsContext()
  const {totalItems} = useCartContext();
  const {loginWithRedirect,logout,appUser} = useUserContext()
  return <Wrapper className="cart-btn-wrapper">
    <Link to='/cart' className="cart-btn" onClick={closeSidebar}>
      <span className="cart-container">
        <FaShoppingCart/>
        <span className="cart-value">{totalItems}</span>
      </span>
    </Link>
  {
    appUser ?

    <button type="button" className="auth-btn logout" onClick={()=>logout({
      returnTo:window.location.origin
    })}> Logout</button> : 
    
    <button type="button" className="auth-btn" onClick={loginWithRedirect}>
      Login
    </button>
  }
    
  </Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .cart-btn {
    color: var(--clr-primary-3);
    font-size: 1.3rem;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-2);
    display: flex;

    align-items: center;
    margin:0 .5rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.4rem;
     
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-3);
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    justify-content:center;
    background: var(--clr-primary-3);
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    padding:.1rem 1rem;
    border-radius:.3rem;
    margin:0 0.5rem;
    svg {
      margin-left: 5px;
    }
    
  }
  .logout{
    background-color: var(--clr-red-dark);
  }
`;
export default CartButtons;
