import { memo, ReactNode, VFC } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="ジャケえ" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value="ジャケえ　田中" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value="ジャケえ" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value="ジャケえ" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
