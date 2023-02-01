import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import LogoBinar from "./images/Binar.png"
//css impor


export default function NavbarComponent() {

    const router = useRouter();
    const currentRoute = router.pathname;

    const handleLogout = () => {
        localStorage.removeItem('accesstoken')
       }   

    return(
        <div className="fixed-top">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                <Image
                    src={LogoBinar.src}
                    alt="Binar Academy"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/>{''}
                    Binar Game Library
                </Navbar.Brand>
                {/* <Navbar.Brand className="">Binar Game Library</Navbar.Brand> */}
                <Nav className="d-flex justify-content-end">
                    <Nav.Link 
                    href="/home"
                    className={currentRoute === '/Home' ? styles.active : styles.nonActive}>
                        Home
                    </Nav.Link>
                    <Nav.Link 
                    href="/profile"
                    className={currentRoute === '/Profile' ? styles.active : styles.nonActive}>
                        Profile
                    </Nav.Link>
                    <Nav.Link 
                    href="/"
                    onClick={handleLogout}
                    className="text-danger">
                        Logout
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div> 
    )
}