import React from 'react';
import { useState, useEffect } from 'react';
import RestCard from './RestCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {

    const dispatch=useDispatch()    //hook used to dispatch actions in components

    const result=useSelector(state=>state.restaurantReducer)   // call the key in store to get data
    const {restaurantList}=result



    useEffect(() => {
        dispatch(RestaurantListAction())
        // getrestaurantdata()
    }, [])     //[] this empty arguement is given so that the data is not loaded repeatedly on page loading

    return (
        <Row>
            {
                restaurantList.map(item => (
                    <RestCard data={item} />      // to reduce the component length.. we shall design the cards in different component
                ))
            }
        </Row>
    )
}

export default Restaurantlist