import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserDeleteModal = ({ userID, handleDelete }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleConfirm = (userId) => {
    handleDelete(userId);
    setModal(false);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete User</ModalHeader>
        <ModalBody>Are you sure to delete user: {userID}?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleConfirm(userID)}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserDeleteModal;
