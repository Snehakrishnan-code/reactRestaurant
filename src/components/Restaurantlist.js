import React from 'react';
import { useState, useEffect } from 'react';
import RestCard from './RestCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {

    //create state
    const [allrestaurant, setallrestaurant] = useState([])

    //function to api call for datas inside json file
    const getrestaurantdata = async () => {
        await fetch('/restaurants.json')
            .then(data => {
                data.json().then(result =>    //.json() will convert this json data to format where it is called (i.e. javascript in this case)
                {
                    setallrestaurant(result.restaurants)    // store data
                })
            })
    }

    // console.log(allrestaurant); 

    useEffect(() => {
        getrestaurantdata()
    }, [])     //[] this empty arguement is given so that the data is not loaded repeatedly on page loading

    return (
        <Row>
            {
                allrestaurant.map(item => (
                    <RestCard data={item} />      // to reduce the component length.. we shall design the cards in different component
                ))
            }
        </Row>
    )
}

export default Restaurantlist