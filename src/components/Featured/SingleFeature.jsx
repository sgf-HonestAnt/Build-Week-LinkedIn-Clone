import React from 'react'
import {Card} from 'react-bootstrap'


export default function SingleFeature({image, title, description}) {
    return (
    <Card>
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
