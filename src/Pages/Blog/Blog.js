import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-5'>
            <Card className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>What is CORS and why it is used?</Card.Header>
          <Card.Body>
            <Card.Text>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>Why we use Firebase? Authentication options in Firebase.</Card.Header>
          <Card.Body>
            <Card.Text>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>How does the Private-Route work in React?</Card.Header>
          <Card.Body>
            <Card.Text>
            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>What is Node.js?</Card.Header>
          <Card.Body>
            <Card.Text>
            Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications. Node.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
};

export default Blog;