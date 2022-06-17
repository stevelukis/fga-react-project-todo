import React, { useState } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    function handleUpdate(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editView = (
        <form
            onSubmit={handleSubmit}>
            <Row>
                <Form.Control
                    id={props.id}
                    className="todo-text"
                    type="text"
                    value={newName}
                    onChange={handleUpdate}
                />
            </Row>
            <Row>
                <Button variant={"danger"} type="button"
                        onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </Button>
                <Button variant={"primary"} type="submit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </Button>
            </Row>
        </form>
    );
    const dataView = (
        <Card.Body className={"text-start"}>
            <Row>
                <Col lg={8}>
                    <input
                        className={"form-check-input"}
                        id={props.id}
                        type="checkbox"
                        defaultChecked={props.completed}
                        onChange={() => props.toggleTaskCompleted(props.id)}
                    />
                    <label className="form-check-label ms-5 h4" htmlFor={props.id}>
                        {props.name}
                    </label>
                </Col>
                <Col lg={2}>
                    <Button className={"w-100"}
                            variant={"primary"}
                            type="button"
                            onClick={() => {
                                setEditing(true);
                                setNewName(props.name)
                            }}>
                        Edit <span className="visually-hidden">{props.name}</span>
                    </Button>
                </Col>
                <Col lg={2}>
                    <Button className={"w-100"}
                            variant={"danger"}
                            type="button"
                            onClick={() => props.deleteTask(props.id)}>
                        Delete <span className="visually-hidden">{props.name}</span>
                    </Button>
                </Col>
            </Row>
        </Card.Body>
    );

    return (
        <Card className={"p-5"}>
            {isEditing ? editView : dataView}
        </Card>
    );
}