import React from 'react'
import {Carousel,Card} from 'react-bootstrap'


export default function FeaturedCarousel({image, title, description}) {
    return (
  <Card className = 'ml-5 mt-3 carousel-images'>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
</Card>
    )
}
