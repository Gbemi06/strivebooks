import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert variant="success">
    <p>{props.message}</p>
  </Alert>
);

export default WarningSign;
