import React, { Component } from 'react'
import { Button, Form, FormControl, FormLabel } from 'react-bootstrap'

export default class UpdateEmployee extends Component {
    render() {
        return (
            <div>
                <h1>Update Employee</h1>
                <Form>
                    <FormLabel>First Name:</FormLabel>
                    <FormControl placeholder="Emanuel"></FormControl>
                </Form>
            </div>

        )
    }
}
