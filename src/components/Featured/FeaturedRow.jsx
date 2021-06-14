import React from 'react'
import {Row,Col, Container, NavDropdown} from 'react-bootstrap'
import './featured.css'
import FeaturedCarousel from './FeaturedCarousel'

export default function FeaturedRow() {
    return (<>
    <Container>
        <Row>
        <Col md={10}>
        <div>
            <h4><span className='text-muted'>Featured</span></h4>
        </div>
        </Col>
        <Col md={2} className='d-flex featured-row'>
        <div className='mx-3' >
        <button className='text-muted'><i class="fas fa-chevron-left"></i></button>
        </div>
        <div className='mx-3'>
            <button className='text-muted'><i class="fas fa-chevron-right"></i></button>
        </div>
        <div className='mx-3'>
        <button className='text-muted'> <i class="fas fa-plus"></i></button>
        </div>
        <div className='mx-3'>
        <button className='text-muted'>   <i class="fas fa-pencil-alt"></i></button>
        </div>
        </Col>
        </Row>
        <Row className = 'carousel'>
            <FeaturedCarousel image = 'https://via.placeholder.com/150'  title = 'Samuel-Github' description  = 'Hello hoekkajdj'/>
            <FeaturedCarousel image = 'https://via.placeholder.com/150' title = 'Samuel-Github' description  = 'Hello hoekkajdj'/>
            <FeaturedCarousel image = 'https://via.placeholder.com/150' title = 'Samuel-Github' description  = 'Hello hoekkajdj'/>
            
        </Row>
    </Container>
    
        
    </>)
}
