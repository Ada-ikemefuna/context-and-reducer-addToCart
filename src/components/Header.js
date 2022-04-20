
import { Container, Dropdown, FormControl, Badge, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { CartState } from '../context/CartContext';



const Header = () => {
    const {state: {cart},
        dispatch,
        productDispatch} = CartState();
    

    
  return (
    <div className="header">
        <Navbar bg="dark" variant="dark" style={{height: "60px"}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping</Link>
                </Navbar.Brand>

                <Navbar.Text className='search'>
                    <FormControl 
                    style={{width: "30rem"}} 
                    placeholder= 'search a product' 
                    className='m-auto'
                    onChange={ (e) =>
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                        })
                    }/>
                </Navbar.Text>
                
                <Nav>
                    <Dropdown>
                            <Dropdown.Toggle variant="success" >
                                <FaShoppingCart style={{fontSize: "25px"}}/>
                                <Badge>{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    cart.length > 0 ? (
                                        <>
                                           {cart.map((prod) => (
                                               <span className="cart_item" key={prod.id}>
                                                   <img 
                                                   src={prod.image} 
                                                   className="cart_itemImg"
                                                   alt={prod.name} 
                                                   />
                                                   <div className="cart_itemDetail">
                                                       <span>{prod.name}</span>
                                                       <span>$ {prod.price.split(".")[0]} </span>
                                                   </div>
                                                   <FaTrashAlt
                                                    fontSize="20px"
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => 
                                                        dispatch({
                                                          type: "REMOVE_FROM_CART",
                                                          payload: prod,                    
                                                        })
                                                      }
                                                    />
                                               </span>
                                           ))}
                                                <Link to="/cart">
                                                        <Button style={{width: "95%", margin: "0 10px"}}>
                                                            Go to Cart
                                                        </Button>
                                                </Link>
                                        </>
                                    ): (
                                        <span style={{padding: "10px"}}>Cart is Empty</span>
                                    )
                                }

                                
                            </Dropdown.Menu>
                        </Dropdown>
                </Nav>
            </Container>
        </Navbar>
   </div>
  )
}

export default Header;