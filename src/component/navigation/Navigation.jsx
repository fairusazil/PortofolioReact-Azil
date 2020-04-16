import React from 'react'
import { Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Profile from '../Profile/Profile'
import Skills from '../Skills/Skills'
import Portofolio from '../Portofolio/Portofolio'
import Contact from '../Contact/Contact'

export default function Navigation() {
    return (
        <Router>
            <div class='container'>
                <Nav fill variant="tabs" defaultActiveKey="/Profile">
                    <Nav.Item>
                        <Link to='/'>
                            <Nav.Link href="/Profile">Profile</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/Skills'>
                            <Nav.Link href="/Skills">Skills</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/Portofolio'>
                            <Nav.Link href="/Portofolio">Portofolio</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/Contact'>
                            <Nav.Link href="/Contact" >Contact</Nav.Link>
                        </Link>
                    </Nav.Item>
                </Nav>

                <Switch>
                    <Route exact path='/'>
                        <Profile />
                    </Route>
                    <Route path='/Skills'>
                        <Skills />
                    </Route>
                    <Route path='/Portofolio'>
                        <Portofolio />
                    </Route>
                    <Route path='/Contact'>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
// function Profile() {
//     return Profile
// }
// function Skills() {
//     return Skills
// }
// function Portofolio() {
//     return Portofolio
// }
// function Contact() {
//     return Contact
// }
