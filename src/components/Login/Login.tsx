import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

interface LoginProps {
  login: (name: string) => void;
}

const Login: FC<LoginProps> = ({ login }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!inputValue) {
      login(inputValue);
      setInputValue("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Card className="p-3">
        <Card.Title className="text-white">Enter your name</Card.Title>
        <Form className="d-flex w-100 align-items-center" onSubmit={onSubmit}>
          <Form.Group className=" me-3 flex-grow-1" controlId="message">
            <Form.Control
              type="text"
              placeholder="Enter message"
              autoComplete="none"
              value={inputValue}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
