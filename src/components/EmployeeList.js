import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import 'react-bootstrap'
import 'bootstrap'

export default class EmployeeList extends Component {

    render() {
        return (
            <div>
                <table cellPadding='10' border='2'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Emanuel</td>
                            <td>Ko</td>
                            <td>emanuel.ko@gbc.ca</td>
                            <td>
                                <Button color="blue">Update</Button>
                                <Button color="red">Delete</Button>
                                <Button color="blue">View</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
