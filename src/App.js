import logo from './logo.svg';
import firebaseConfig from './component/Firebase/firebaseSignIn';
import { ThemeProvider,createGlobalStyle } from 'styled-components';

import { Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import './styles.css'
import './index'
import PropDisplay from './component/Props/propDisplay'; 
import StyledButton, { FancyButton, SubmitButton } from './component/Button/Button';
import { AnimatedLogo, DarkButton } from './component/Button/Button.styled';
import ThemeDisplay from './component/themeComponents/ThemeDisplay';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product'; 
import Service from './pages/Service';
import About from './pages/About';
import Aboutus from './components/Aboutus';

const theme = {
  dark:{
    primary:'#000',
    text:'#fff',
  },
  light:{
    primary:'#fff',
    text:'#000',
  },
  fontFamily:'hello',
}
const GlobalStyle = createGlobalStyle`
button {  
  font-family: ${(props) =>props.theme.fontFamily};
}
`

// local declaration
const Title = styled.h1`
font-size:20px;
text-align:center;
color:green;
`

const Button = styled.button`
  color:${(props) => (props.danger ? "#CA0B00" : "white")};
  background-color:${(props) => (props.danger ? "white" : "#CA0B00")};
`

const CommentButton = styled(Button)`
  color:white;
  background-color:blue;
  border:2px solid transparent;
`

const Link = ({route, name, className}) =>(
  <a href={route} className='{className'>{name}</a>
);
const StyledLink = styled(Link)`
  color:white;
  background-color:purple;
`

const Form = styled.div`

  width:100%;
  background:#fff;
  padding:30px;
  max-width:450px;
  border-radius: 10px;
  box-shadow:rgba(3,3,3,0.1) 10px 0px 50px;
`

const Field = styled.div`
  margin-bottom:10px;
`
const Label = styled.div`
  margin-bottom: 10px;
  font-size:15px;
  font-weight:600;
  color: #000;
`

const Input = styled.input`
width: 100%;
padding:25px 15px;
border:0;
background:#f0f0f0;
border-radius:5px;
font-size:18px;
color:#555;
font-weight:500;
`

const Buttonn = styled.button`
  margin-top: 10px;
  width: 100%;
  background: #037ef3;
  color:#fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  padding:25px 15px;
  border:0;
  font-size:18px;


  &:hover{
    background: yellow;
  }
`

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about-us' element={<About/>} />
        
      </Routes>
    </div>
  //   <ThemeProvider theme={theme}>
    
  //  <ThemeDisplay />
  //   <PropDisplay />
  //   <firebaseConfig />
  //     <div className="App">
  //     <StyledLink route="/home" name="Style Link"></StyledLink>
      
  //     <Link route="/homepage" name="Some Link"></Link>

  //     <CommentButton>This is Comment Button</CommentButton>
  //     <Button>Button </Button>
  //     <Button danger>Button </Button>
  //     <br />
  //     <GlobalStyle />
  //       <AnimatedLogo src={logo} />
  //       <StyledButton type='submit'>
  //         Styled Component
  //       </StyledButton>
  //       <br />
  //       <StyledButton variant='outline'>
  //         Styled Component
  //       </StyledButton>
  //       <br />
  //       <FancyButton as='a'> fancy Button</FancyButton>  <br />
  //       <SubmitButton>Submit Button</SubmitButton>
  //       <DarkButton>DARK MODE</DarkButton>
  //        <Title>hello</Title>

  //     </div>
  //     <Form>
  //       <Field>
  //         <Label htmlFor="">Name</Label>
  //         <Input type="text" name="name" id="" />
  //       </Field>
  //       <Field>
  //         <Label>Email</Label>
  //         <Input type="text" name='email' />
  //       </Field>
  //       <Field>
  //         <Label>Password</Label>
  //         <Input type="text" name='password' />
  //       </Field>
  //       <Field>
  //         <Buttonn>Register</Buttonn>
  //       </Field>
  //     </Form>

  //   </ThemeProvider>
    
  );
}

export default App;
