import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        <div>
          <Button onClick={() => setShowForm((prev) => !prev)}>
            Add new cabin
          </Button>
        </div>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
