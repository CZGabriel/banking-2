import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { auth, logOut } from '../utils/fir-login';
function NavBar() {
    const handleLogout = async () => {
        await logOut();
    };

    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand data-tip data-for="homeTip" href="/"> 
                    <img src="./bank_logo.png" height="32px" alt="Bank Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="ms-auto" defaultActiveKey="/" >
                    { !auth.currentUser ? (<>
                        <Nav.Link data-tip data-for="createAccTip" className="nav-link" to="/createAccount" as={Link} href="/createAccount" > Create Account</Nav.Link>
                        <Nav.Link data-tip data-for="existAccTip"  className="nav-link" to="/login" as={Link} href="/login" > Login</Nav.Link>
                        </>) : (<> 
                            <Nav.Link data-tip data-for="allDataTip"  className="nav-link inactive" to="/accountsummary" as={Link} href="/accountsummary" > Landing</Nav.Link>
                            <Nav.Link data-tip data-for="depositTip" className="nav-link" to="/deposit" as={Link} href="/deposit" > Deposit</Nav.Link>
                            <Nav.Link data-tip data-for="withdrawTip" className="nav-link" to="/withdraw" as={Link} href="/withdraw" > Withdrawal</Nav.Link>
                            <Nav.Link data-tip data-for="transferTip" className="nav-link" to="/transfer" as={Link} href="/transfer" > Transfer</Nav.Link>
                            <Nav.Link data-tip data-for="allDataTip" className="nav-link" to="/allData" as={Link} href="/allData" > All data</Nav.Link>
                            <Nav.Link data-tip data-for="wipTip" className="nav-link" to="/products" as={Link} href="/products" > Other Products</Nav.Link>
                            <Nav.Link data-tip data-for="logoutTip"  className="nav-link" to="/logout" as={Link} href="/logout" onClick={handleLogout}> Logout</Nav.Link>
                            </>)
                        }
                        <Nav.Link data-tip data-for="aboutTip" className="nav-link" to="/about" as={Link} href="/about" > About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
