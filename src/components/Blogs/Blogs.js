import React from 'react';
import { Container, ListGroup, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <div className='mb-5'>
                <h3 className='fw-bold fs-4 mb-3 section-title'>Difference between Authorization and Authentication.</h3>
                <p className='description'>Authentication is a process where user's identity is checked. On the other hand, Authorization is the process of giving assess of the resources.</p>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='w-50'>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>It's a pre process of Authorization</td>
                            <td>After Authentication it's started</td>
                        </tr>
                        <tr>
                            <td>Check the identity of user</td>
                            <td>Determines the accessible files/resources for a user</td>
                        </tr>
                        <tr>
                            <td>Users are verified by this process</td>
                            <td>A valid user can get access to particular resources in this process</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mb-5'>
                <h3 className='fw-bold fs-4 section-title'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='description'>I am using firebase for implement authentication in website. Firebase authentication system makes life easy for developers. We can easily build a secure authentication system by firebase. Firebase provides Email and password authentication, phone authentication, as well as Google, Facebook, GitHub, Twitter login, and more.</p>
                <p className='description'>The alternatives or other options are: Auth0, MongoDB, Passport, Okta, Amazon Cognito etc.</p>
            </div>
            <div className='mb-5'>
                <h3 className='fw-bold fs-4 section-title'>What other services does firebase provide other than authentication?</h3>
                <p className='description mb-1'>Firebase's other services besides authentication are:</p>
                <ul className='description'>
                    <li>Host Website</li>
                    <li>Provide Analytics by Google</li>
                    <li>Real-time Database Helps to Store and Synchronize Data</li>
                    <li>Crash Reporting for Swift Bugs Fixing</li>
                    <li>Cloud Messaging</li>
                    <li>Test Lab Service</li>
                </ul>
            </div>
        </Container>
    );
};

export default Blogs;