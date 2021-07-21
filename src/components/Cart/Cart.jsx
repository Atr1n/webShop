import React from 'react'
import { Container, Typography } from '@material-ui/core'
import EmptyCart from './EmptyCart'
import FilledCart from './FilledCart'

import useStyles from './styles'

const Cart = ({ cart }) => {

    const isEmpty = !cart.line_items.length

    const classes = useStyles()

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} varaint="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart/> : <FilledCart cart={cart} /> }
        </Container>
    )
}

export default Cart
