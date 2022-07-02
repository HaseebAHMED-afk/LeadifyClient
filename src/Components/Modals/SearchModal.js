import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { Input } from "antd";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <InputGroup size="lg">
          <InputLeftAddon children={<BsSearch />} />
          <Input placeholder="Search" />
          <InputRightAddon children={<AiOutlineArrowRight />} />
        </InputGroup>
      </ModalContent>
    </Modal>
  );
};


export default SearchModal