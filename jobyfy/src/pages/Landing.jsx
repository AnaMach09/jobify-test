import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from "react-router-dom";
import Logo from "../components/Logo";


const Landing = () => {
    return (
    <Wrapper>
       <nav>
        <Logo />
       </nav>
       <div className="container page">
        <div className="info">
            <h1>
                Job <span>tracking</span> app 
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit esse, omnis fuga officiis est quis! Velit illo in animi ullam aliquam quam reprehenderit quaerat suscipit, tenetur fugiat. Voluptatem, quod.
            </p>
            <Link to='/register' className='btn register-link'>Register</Link>
            <Link to='/login' className='btn register-link'>Login</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
       </div>
        
    </Wrapper>
    )
    
};
export default Landing;