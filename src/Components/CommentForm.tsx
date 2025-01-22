// Task 2
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Comment = {
    title: string,
    body: string,
}

const CommentForm: React.FC = () => {
    const [body, setBody] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const handleSubmit = () => {
        const comment: Comment = {
            title,
            body
        };
        localStorage.setItem('comment', JSON.stringify(comment));
        console.log("comment successful!")
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Blog Post Form</h1>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                 type="text"
                 id="title"
                 placeholder="Enter your post title"
                 onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control
                 as="textarea"
                 id="body"
                 rows={3}
                 placeholder="Enter the post body"
                 onChange={(e) => setBody(e.target.value)}
                />
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default CommentForm;