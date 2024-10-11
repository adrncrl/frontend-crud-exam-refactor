import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import useUserForm from "./useUserForm"; // Import the custom hook
import styles from "./styles.module.scss";

const UserForm = ({ user, onSubmit, mode, toggle }) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
  } = useUserForm(user, mode, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter First name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Enter E-mail"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <div className={styles["action-wrapper"]}>
        <Button type="submit" color="primary" disabled={isSubmitDisabled}>
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
