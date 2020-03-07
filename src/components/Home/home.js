import React, {Component, useState} from 'react';
import HeaderComponent from '../comman/Header/HeaderComponent.js';
import {Button, Card, Navbar, FormControl, Nav, Form, NavDropdown} from 'react-bootstrap'
import './home.css'
// import "../comman/Header/HeaderComponent.css"
import img1 from '../../image/n1.jpg'
import img2 from '../../image/n3.jpeg'
import hearts from "../../image/hearts.png";

const Home = props => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <div style={{position:"absolute",width:"100%",overflow:'hidden'}}>
                <Navbar style={{
                    borderBottom: "1px solid #dbdbdb",
                }}>
                    <Navbar.Brand href="#home"
                                  style={{
                                      display: 'flex',
                                      justifyContent: 'flex-end',
                                      alignItems: 'center',
                                      width: "40%"
                                  }}>
                        <nav className="justify-content-center align-content-center flex-grow-1 flex-lg-wrap" style={{
                            display: "flex"
                            , width: "100%"
                        }}>
                            <a href="#">
                                <img
                                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </a>
                        </nav>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <nav style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: "20%",
                        height: "40px"
                    }}>
                        <input name="search" type="text" placeholder={"Search..."}
                               value={search}
                               className="inputText"
                               onChange={(value) => {
                                   setSearch(value.target.value)
                               }
                               }/>
                    </nav>
                    <Navbar.Collapse className="justify-content-start">
                        <nav className="rightOptionContainer">
                            <div className='rightInnerContainer'>
                                <a href="#home" className='nav-link'>
                                    <svg aria-label="Find People" className="_8-yf5 " fill="#262626" height="22"
                                         viewBox="0 0 48 48" width="22">
                                        <path
                                            d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
                                        </path>
                                    </svg>
                                </a>
                                <a href="#home" className='nav-link'>
                                    <svg aria-label="Find People" className="_8-yf5 " fill="#262626" height="22"
                                         viewBox="0 0 48 48" width="22">
                                        <path clip-rule="evenodd"
                                              d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
                                              fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </a>
                                <a href="#home" className='nav-link'>
                                    <svg aria-label="Find People" className="_8-yf5 " fill="#262626" height="22"
                                         viewBox="0 0 48 48" width="22">
                                        <path clip-rule="evenodd"
                                              d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                                              fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </a>
                                <a href="#home" className='profileContainer' style={{width: "22px", height: "22px"}}>
                                    <img alt="rushi_1628's profile picture" style={{
                                        height: "100%",
                                        width: "100%"
                                    }}
                                         src={hearts}/>
                                </a>
                            </div>
                        </nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="mainHomeContainer">
                <section className="sectionContainer">
                    <div className="aaa">
                        <div className="postContainer">
                            <Card className="text-lg-left shadow overflow-hidden shadow-lg border-0">
                                <Card.Header style={{backgroundColor: '#fcfcfc', padding: "0"}}>
                                    <Navbar>
                                        <Navbar.Brand href="#home">
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
                                        </Navbar.Brand>
                                        <Navbar.Toggle/>
                                        <nav>
                                            <div className="headerUserNameLink">
                                                <a> Test </a>
                                            </div>
                                        </nav>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Button variant="link">
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
                                            </Button>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Card.Header>
                                <Card.Body style={{backgroundColor: "#e8ceff", padding: 0,}}>
                                    <Card.Img src={img1} mode="cover" style={{height: "400px"}}/>
                                </Card.Body>
                                <Card.Footer className="text-muted" style={{padding: 0}}>
                                    <Card style={{padding: 0}}  className="text-lg-left  border-0">
                                        <Card.Header as="h5"
                                                     style={{padding: 1, backgroundColor: "#fff", borderBottom: 0}}>
                                            <Navbar style={{padding: 0}}>
                                                <Navbar.Brand href="#home">

                                                    <svg aria-label="Like" className="_8-yf5 " fill="#262626"
                                                         height="24"
                                                         viewBox="0 0 48 48" width="24" style={{margin: 5}}>
                                                        <path clip-rule="evenodd"
                                                              d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                                                              fill-rule="evenodd">
                                                        </path>
                                                    </svg>
                                                    <svg aria-label="Comment" className="_8-yf5 " fill="#262626"
                                                         height="24"
                                                         viewBox="0 0 48 48" width="24" style={{margin: 5}}>
                                                        <path clip-rule="evenodd"
                                                              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                                              fill-rule="evenodd">

                                                        </path>
                                                    </svg>

                                                </Navbar.Brand>
                                                <Navbar.Toggle/>
                                                <Navbar.Collapse className="justify-content-end">
                                                    <Button variant="link">
                                                        <svg aria-label="Save" className="_8-yf5 " fill="#262626"
                                                             height="24"
                                                             viewBox="0 0 48 48" width="24">
                                                            <path
                                                                d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
                                                            </path>
                                                        </svg>
                                                    </Button>
                                                </Navbar.Collapse>
                                            </Navbar></Card.Header>
                                        <nav style={{paddingLeft: 10, backgroundColor: "#f9ffe2"}}>50 Likes</nav>
                                        <Card.Body style={{paddingLeft: 10}}>
                                            <Card.Text style={{margin: 0}}>
                                                {"Test 🥰😍😘"}
                                            </Card.Text>
                                            <Card.Text style={{margin: 0}}>View all 6 comments
                                            </Card.Text>
                                            <Card.Text style={{margin: 0}}>Test
                                            </Card.Text>
                                            <Card.Text style={{margin: 0}}>V3 HOURS AGO
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>


                                </Card.Footer>
                            </Card></div>
                        <div className="postContainer">
                            <Card className="text-lg-left shadow overflow-hidden shadow-lg border-0">
                            <Card.Header style={{backgroundColor: '#fcfcfc', padding: "0"}}>
                                <Navbar>
                                    <Navbar.Brand href="#home">
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
                                    </Navbar.Brand>
                                    <Navbar.Toggle/>
                                    <nav>
                                        <div className="headerUserNameLink">
                                            <a> Test </a>
                                        </div>
                                    </nav>
                                    <Navbar.Collapse className="justify-content-end">
                                        <Button variant="link">
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
                                        </Button>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Card.Header>
                            <Card.Body style={{backgroundColor: "#e8ceff", padding: 0}}>
                                <Card.Img src={img2} mode="cover" style={{height: "400px"}}/>

                            </Card.Body>
                            <Card.Footer className="text-muted" style={{padding: 0}}>
                                <Card style={{padding: 0}} className="text-lg-left  border-0">
                                    <Card.Header as="h5" style={{padding: 1, backgroundColor: "#fff", borderBottom: 0}}>
                                        <Navbar style={{padding: 0}}>
                                            <Navbar.Brand href="#home">

                                                <svg aria-label="Like" className="_8-yf5 " fill="#262626" height="24"
                                                     viewBox="0 0 48 48" width="24" style={{margin: 5}}>
                                                    <path clip-rule="evenodd"
                                                          d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                                                          fill-rule="evenodd">
                                                    </path>
                                                </svg>
                                                <svg aria-label="Comment" className="_8-yf5 " fill="#262626" height="24"
                                                     viewBox="0 0 48 48" width="24" style={{margin: 5}}>
                                                    <path clip-rule="evenodd"
                                                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                                          fill-rule="evenodd">

                                                    </path>
                                                </svg>

                                            </Navbar.Brand>
                                            <Navbar.Toggle/>
                                            <Navbar.Collapse className="justify-content-end">
                                                <Button variant="link">
                                                    <svg aria-label="Save" className="_8-yf5 " fill="#262626"
                                                         height="24"
                                                         viewBox="0 0 48 48" width="24">
                                                        <path
                                                            d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
                                                        </path>
                                                    </svg>
                                                </Button>
                                            </Navbar.Collapse>
                                        </Navbar></Card.Header>
                                    <nav style={{paddingLeft: 10, backgroundColor: "#f9ffe2"}}>50 Likes</nav>
                                    <Card.Body style={{paddingLeft: 10}}>
                                        <Card.Text style={{margin: 0}}>
                                            {"Test 🥰😍😘"}
                                        </Card.Text>
                                        <Card.Text style={{margin: 0}}>View all 6 comments
                                        </Card.Text>
                                        <Card.Text style={{margin: 0}}>Test
                                        </Card.Text>
                                        <Card.Text style={{margin: 0}}>V3 HOURS AGO
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                            </Card.Footer>
                        </Card></div>
                    </div>
                    <div className="rightSideContainer">
                        <div className="rightSideInnerContainer">

                            <div className="rightSideProfileView">
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

                            </div>
                            <div className="_0v2O4">
                                <div className="SKguc"><a className="gmFkV" href="test/">Test</a></div>
                                <div className="f5Yes oL_O8">Test.. 😊</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>)
}
export default (Home)
