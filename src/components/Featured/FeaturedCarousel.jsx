import React from 'react'
import {Carousel,Card} from 'react-bootstrap'


export default function FeaturedCarousel({image, title, description}) {
    return (
    <Carousel className ='carousel mt-3 mx-2'>
  <Carousel.Item>
  <Card>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
</Card>
  </Carousel.Item>
 
</Carousel>
    )
}
