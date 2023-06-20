import React from "react";

export default function ContactList() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {/*  data */}
        </tbody>
      </table>
    </div>
  );
}
