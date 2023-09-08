import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

const SecondPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ADMIN APPROVAL</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is your second page.</CardText>
        <CardText>
          We have recorded your details and have sent it to the admin for
          approval. You will be notified regarding the status of approval
          shortly. Thank you for registering with Piombo!!
        </CardText>
      </CardBody>
    </Card>
  );
};

export default SecondPage;
