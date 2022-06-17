import React, { useState } from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";


export default function AddField(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleUpdate(e) {
        setName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col lg={8}>
                    <Form.Control
                        type="text"
                        id="new-todo-input"
                        name="text"
                        autoComplete="off"
                        value={name}
                        onChange={handleUpdate}
                    />
                </Col>
                <Col lg={4}>
                    <Button variant={"primary"} className={"w-100"} type="submit">
                        Add
                    </Button>
                </Col>
            </Row>
        </form>
    );
}