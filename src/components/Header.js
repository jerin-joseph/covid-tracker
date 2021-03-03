import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header(){

        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://cdn.pixabay.com/photo/2020/04/29/08/24/coronavirus-5107804_960_720.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Covid-19 Tracker
            </Navbar.Brand>
            
            <Nav className="mr-auto">
              <Link className="nav-link" to="/india">India</Link>
              <Link className="nav-link" to="/world">Global</Link>
            </Nav>
          </Navbar>
        )
}
