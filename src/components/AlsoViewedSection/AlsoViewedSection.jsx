import AlsoViewedItem from "./AlsoViewedItem"

import "./AlsoViewedSection.css"

const AlsoViewed = () => {
  return (
    <section className="also-viewed-section d-flex flex-wrap">
      <p className="font-weight-bold">People also viewed</p>
      <AlsoViewedItem />
      <AlsoViewedItem />
      <AlsoViewedItem />
      <AlsoViewedItem />
      <AlsoViewedItem />
    </section>
  )
}

export default AlsoViewed
