import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../lib/types/search";

interface OtherNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
}

export default function OtherNavbar(props: OtherNavbarProps){

    const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;

    const authMember = true;

    return <div className="other-navbar">
        <Container className="navbar-container">
            <Stack className="menu">
                <Box>
                    <NavLink to="/">
                        <img className="brand-logo" src="/icons/burak.svg" />

                    </NavLink>
                </Box>
                <Stack className="links">
                <Box className={"hover-line"}>
                    <NavLink to="/">Home</NavLink>
                </Box>
                <Box className={"hover-line"}>
                    <NavLink to="/products" activeClassName={"underline"}>Products</NavLink>
                </Box>
                {authMember ? ( <Box className={"hover-line"}>
                    <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                </Box>) : null}

                {authMember ? ( <Box className={"hover-line"}>
                    <NavLink to="/member-page" activeClassName={"underline"}>My page</NavLink>
                </Box>) : null}

                <Box className={"hover-line"}>
                    <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
                </Box>
              
                {/* Basket */}

                <Basket cartItems={cartItems} 
                    onAdd={onAdd} 
                    onRemove={onRemove}
                    onDelete={onDelete} 
                    onDeleteAll={onDeleteAll}
                />

                {!authMember ? (<Box><Button variant="contained" className="login-button">Login</Button></Box>) : (<img className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
                />)}

                </Stack>
            </Stack>
        </Container>
    </div>;


}