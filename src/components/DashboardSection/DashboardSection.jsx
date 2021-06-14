import { Row, Col } from 'react-bootstrap'

import "./DashboardSection.css";

const DashboardSection = () => {
    return (
        <>
        <Row className="dashboard pb-3">
            <Col sm={12}>
                <h4 className="title">Your Dashboard</h4>
                <div className="subtitle">Private to you</div>
                <Row className="stats my-3 mx-3">
                    <Col sm={4} className="stats-inner">
                        18
                        <span className="stats-details">Who viewed your profile</span>
                    </Col>
                    <Col sm={4} className="stats-inner">
                        26
                        <span className="stats-details">Post views</span>
                    </Col>
                    <Col sm={4}>
                        1
                        <span className="stats-details">Search appearance</span>
                    </Col>
                </Row>
            </Col>
            <Col sm={12}>
                <Row className="modes mx-3">
                    <Col sm={2}>
                        <i class="fas fa-satellite-dish"></i>
                    </Col>
                    <Col sm={10} className="mode-inner">
                        Creator mode: Off
                    </Col>
                    <Col sm={2}>
                        <i class="fas fa-satellite-dish"></i>
                    </Col>
                    <Col sm={10} className="mode-inner">
                        Creator mode: Off
                    </Col>
                    <Col sm={2}>
                        <i class="fas fa-satellite-dish"></i>
                    </Col>
                    <Col sm={10} className="mode-inner">
                        Creator mode: Off
                    </Col>
                    <Col sm={2}>
                        <i class="fas fa-satellite-dish"></i>
                    </Col>
                    <Col sm={10} className="mode-inner">
                        Creator mode: Off
                    </Col>
                            {/* <Col sm={12} className="mode-inner">
                                <i class="fas fa-users"></i>My Network
                            </Col>
                            <Col sm={12} className="mode-inner">
                                <i class="far fa-money-bill-alt"></i>Salary insights
                            </Col>
                            <Col sm={12} className="mode-inner-last">
                                <i class="fas fa-bookmark"></i>My items
                            </Col> */}
                        {/* </Row>
                    </Col> */}
                </Row>
            </Col>
        </Row>
        </>
    )
}

export default DashboardSection