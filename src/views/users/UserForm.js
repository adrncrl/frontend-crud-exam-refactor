import React, { useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import serialize from "form-serialize";
import styles from './styles.module.scss'

const UserForm = ({ user, onSubmit, mode, toggle }) => {
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
      <div className={styles['action-wrapper']}>
        <Button type="submit" color="primary">
          {mode === "edit" ? "Update User" : "Create User"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
