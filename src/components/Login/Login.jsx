import React, { useState } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import Signup from './Signup';

const Login = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(true);
      };
    
    return (
        <>
            <Container className='my-3'>
               {!show ? (
                <Card>
                    <Card.Header as="h5">Iniciar sesión</Card.Header>
                    <Card.Body>
                        <Card.Title>Inicia sesión con Google</Card.Title>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                            placeholder='Correo electrónico'
                            type='email'
                            name='email'
                            // value={email}
                            // onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                            placeholder='Contraseña'
                            type='password'
                            name='password'
                            // value={password}
                            // onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Card.Text>
                            <img
                            className='google-icon'
                            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                            alt='googlebutton'
                            />
                        </Card.Text>
                        <Button variant="primary">Inicia sesión</Button>
                        <Button variant="primary" onClick={handleClick}>¿Aun no tienes cuenta? Registrate aquí!</Button>
                    </Card.Body>
                </Card>) : (<Signup/>)}
            </Container>
        </>
    )
}

export default Login
