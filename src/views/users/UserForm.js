import React, { useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import serialize from "form-serialize";

const UserForm = ({ user, onSubmit, mode }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return false;
    }
    const formData = serialize(event.target, { hash: true });
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={user?.first_name || ""}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={user?.last_name || ""}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          defaultValue={user?.email || ""}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="avatar">Avatar URL</Label>
        <Input
          type="text"
          name="avatar"
          id="avatar"
          defaultValue={user?.avatar || ""}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        {mode === "edit" ? "Update User" : "Create User"}
      </Button>
    </form>
  );
};

export default UserForm;
