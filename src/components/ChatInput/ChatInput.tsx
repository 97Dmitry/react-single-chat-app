import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Message } from "types/common";

interface ChatInputProps {
  userId: string;
  userName: string;
  addMessage: (message: Message) => void;
}

const ChatInput: FC<ChatInputProps> = ({ userId, userName, addMessage }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage({ senderId: userId, senderName: userName, message: inputValue });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Form className="d-flex w-100 align-items-center" onSubmit={onSubmit}>
      <Form.Group className=" me-3 flex-grow-1" controlId="message">
        <Form.Control type="text" placeholder="Enter message" autoComplete="none" onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ChatInput;
