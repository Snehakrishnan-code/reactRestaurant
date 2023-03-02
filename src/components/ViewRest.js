import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Reviews from './Reviews';
import { useDispatch, useSelector } from 'react-redux';


function ViewRest() {

    const params = useParams()
    // // console.log(params); //check- you will get the params in this component path.. then take params.id
    // // console.log(params.id);



    // //create state
    // const [allrestaurant, setallrestaurant] = useState([])

    // //function to api call for datas inside json file
    // const getrestaurantdata = async () => {
    //     await fetch('/restaurants.json')
    //         .then(data => {
    //             data.json().then(result =>    //.json() will convert this json data to format where it is called (i.e. javascript in this case)
    //             {
    //                 setallrestaurant(result.restaurants)    // store data
    //             })
    //         })
    // }

    // // console.log(allrestaurant); 

 

    useEffect(() => {
        // getrestaurantdata()
    }, [])     //[] this empty arguement is given so that the data is not loaded repeatedly on page loading

    const result=useSelector(state=>state.restaurantReducer)   // call the key in store to get data
    const {restaurantList}=result  


    const restData=restaurantList.find(item=>item.id==params.id)
    console.log(restData);

    return (
        <>
            {restData?(
                <Row>
                    <Col>
                    <Image className='p-5' src={restData.photograph} fluid/>
                    </Col>
                    <Col className='mt-5'>
                    <h1><u>{restData.name}</u></h1>
                    <h2>Neighbourhood: {restData.neighborhood}</h2>
                    <h3>Cuisine Type: {restData.cuisine_type}</h3>
                    <h3>Address: {restData.address}</h3>

                    <Operatingtime timedata={restData.operating_hours}>
                    </Operatingtime> <br/><br/>

                    <Reviews reviewData={restData.reviews}>
                    </Reviews>

                    </Col>
                </Row>
            ):'null'}

        </>
    )
}

export default ViewRest