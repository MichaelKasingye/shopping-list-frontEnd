import React, {Component} from 'react';

import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component{
state = {
    isOpen: false
}

toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
render(){
    return(
        <div>
        <Navbar color="dark" dark expand="sm" className="mb-s">
            <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem  href="https://github.com/EK0MIKE">Github</NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    );
   
}
}

export default AppNavBar;