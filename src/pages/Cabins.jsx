import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <img
          src="https://wvbkbmtotxxgmmmatrsq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
          alt=""
        /> */}
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
