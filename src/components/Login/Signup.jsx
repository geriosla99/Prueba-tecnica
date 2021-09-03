import React from 'react'
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap'

const SignUp = () => {
    return (
        <>
            <Container>
                <Card>
                    <Card.Header as="h5">Registrate</Card.Header>
                    <Card.Body>                    
                        <Card.Text>
                            <Form.Group className='mb-3' controlId='formName'>
                                <FloatingLabel controlId='floatingName' label='Nombres y Apellidos'>
                                <Form.Control
                                    type='text'
                                    placeholder='Nombres y Apellidos'
                                    name='name'
                                    required
                                    // value={name}
                                    // onChange={handleInputChange}
                                />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <FloatingLabel controlId='floatingEmail' label='Correo electrónico'>
                                <Form.Control
                                    type='email'
                                    placeholder='Correo electrónico'
                                    name='email'
                                    required
                                    // value={email}
                                    // onChange={handleInputChange}
                                />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <FloatingLabel controlId='floatingPassword' label='Contraseña'>
                                <Form.Control
                                    type='password'
                                    placeholder='Contraseña'
                                    name='password'
                                    required
                                    // value={password}
                                    // onChange={handleInputChange}
                                />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <FloatingLabel
                                controlId='floatingPassword2'
                                label='Confirmar Contraseña'
                                >
                                <Form.Control
                                    type='password'
                                    placeholder='Confirmar Contraseña'
                                    name='password2'
                                    required
                                    // value={password2}
                                    // onChange={handleInputChange}
                                />
                                </FloatingLabel>
                        </Form.Group> 
                        </Card.Text>
                        <Button variant="primary">Ya estas registrado? Inicia sesión aquí</Button>
                    </Card.Body>
                </Card>
            </Container>           
        </>
    )
}

export default SignUp
