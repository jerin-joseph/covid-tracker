import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header(){

        return(
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Covid-19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="nav-link" to="/india">India</Link>
              <Link className="nav-link" to="/world">Global</Link>
            </Nav>
          </Navbar>
        )
}
