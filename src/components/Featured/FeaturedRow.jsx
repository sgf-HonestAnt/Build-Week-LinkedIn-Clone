import React from "react"
import { Row } from "react-bootstrap"
import "./featured.css"
import FeaturedCarousel from "./FeaturedCarousel"

export default function FeaturedRow() {
  return (
    <section className="featured-section">
      <div className="d-flex justify-content-between">
        <h5 className="">Featured</h5>
        <div className="d-flex">
          <button className="text-muted">
            <i className="fas fa-chevron-left"></i>
          </button>

          <button className="text-muted">
            <i className="fas fa-chevron-right"></i>
          </button>

          <button className="text-muted">
            <i className="fas fa-plus"></i>
          </button>

          <button className="text-muted">
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
      </div>
      <Row className="carousel justify-content-around">
        <FeaturedCarousel image="https://via.placeholder.com/150" title="Samuel-Github" description="Hello hoekkajdj" />
        <FeaturedCarousel image="https://via.placeholder.com/150" title="Samuel-Github" description="Hello hoekkajdj" />
        <FeaturedCarousel image="https://via.placeholder.com/150" title="Samuel-Github" description="Hello hoekkajdj" />
      </Row>
    </section>
  )
}
