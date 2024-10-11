import { useEffect, useState } from "react";
import serialize from "form-serialize";

const useUserForm = (user, mode, onSubmit) => {
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

  const isSubmitDisabled = isCreateMode ? isFormEmpty : isFormUnchanged;

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
  };
};

export default useUserForm;
