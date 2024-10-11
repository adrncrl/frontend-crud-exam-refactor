import React, { useEffect, useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import serialize from "form-serialize";
import styles from "./styles.module.scss";

const UserForm = ({ user, onSubmit, mode, toggle }) => {
  const [formData, setFormData] = useState({
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email || "",
  });

  useEffect(() => {
    setFormData({
      firstName: user?.first_name || "",
      lastName: user?.last_name || "",
      email: user?.email || "",
    });
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return false;
    }
    const serializedData = serialize(form, { hash: true });
    onSubmit(serializedData);
  };

  const isCreateMode = mode === "create";
  const isFormEmpty = Object.values(formData).every((value) => !value);
  const isFormUnchanged = !isCreateMode && (
    formData.firstName === user?.first_name &&
    formData.lastName === user?.last_name &&
    formData.email === user?.email
  );

  const isSubmitDisabled = isCreateMode ? (isFormEmpty) : isFormUnchanged;

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
