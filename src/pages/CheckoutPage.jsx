import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
const CheckoutPage = () => {
  const {totalAmount,shippingFee} = useCartContext();
  return <main>
    <PageHero title='Checkout'/>
    <Wrapper className='page section section-center '>
        <div className='checkout'>
        <h4>Total</h4>
        <p>{formatPrice(totalAmount + shippingFee)}</p>
        <button className='btn'>Pay</button>
        </div>
    </Wrapper>
  </main>
}
const Wrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
.checkout{
  padding:3rem 10rem;
  background-color: var(--clr-primary-1);
  border-radius: 0.43rem;
  box-shadow: 0 0 3px rgba(0,0,0,.6);
}
`
export default CheckoutPage
