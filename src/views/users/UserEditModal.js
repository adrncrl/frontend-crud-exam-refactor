import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UserForm from "./UserForm";

const UserEditModal = ({ userID, handleEdit }) => {
  const [modal, setModal] = useState(false);

  
  const toggle = () => setModal(!modal);

  const handleConfirm = async (formData) => {
    console.log(handleEdit)
    await handleEdit(userID.id, formData); 
    setModal(false);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <UserForm
            user={userID}
            onSubmit={handleConfirm}
            mode="edit"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserEditModal;
