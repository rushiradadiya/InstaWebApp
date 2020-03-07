import {Card} from "react-bootstrap";
import ss from "./src/image/2.png";
import React from "react";

<div className='sectionContainer'>
    <Card className="text-lg-left">
        <Card.Header>
            <div className="articleHeader">
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                    }}>
                    <a href="#" className="headerLogoLink">
                        <img
                            src="https://instagram.fstv3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/81556492_1066620767023432_546830881029881856_n.jpg?_nc_ht=instagram.fstv3-1.fna.fbcdn.net&_nc_ohc=Aefg0UvV2d0AX_sdpWD&oh=e30540e6e4275dc819efcf44e2fab1d8&oe=5E98EF2F"
                            alt="React Bootstrap logo"
                            style={{width: "100%", height: "100%"}}
                        />
                    </a>
                </div>
                <div className="headerUserName">
                    <div className="headerUserNameLink">
                        <a> Test </a>

                    </div>
                    <div className="headerUserNameLink">
                        <button className="headerButton">
                            <svg aria-label="More options" className="_8-yf5 " fill="#262626"
                                 height="16" viewBox="0 0 48 48" width="16">
                                <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd"
                                        r="4.5">
                                </circle>
                                <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd"
                                        r="4.5">
                                </circle>
                                <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd"
                                        r="4.5">
                                </circle>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Card.Header>
        <Card.Body>
            <div style={{width: "100%", height: "100%"}}>
                <Card.Img variant="bottom" src={ss} style={{
                    width: "100%",
                    height: "100%",
                }}/>
            </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
</div>
