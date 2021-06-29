import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, ImgWrap, Img } from './SigninElements'
import Logo from '../../images/UpgradeLogoDark.png';

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <ImgWrap>
                                <Img src={Logo} alt='Upgrade Llc logo' />
                            </ImgWrap>
                        </Icon>
                    <FormContent>
                        <Form acrion="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin;
