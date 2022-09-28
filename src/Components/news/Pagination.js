import Pagination from 'react-bootstrap/Pagination';
import "./News.css";
import {BsArrowRightShort} from "react-icons/bs"

function AdvancedExample() {
  return (
    <Pagination>
      
      {/* <Pagination.Prev /> */}
      <Pagination.Item>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item>{2}</Pagination.Item>
      
      <Pagination.Item>{3}</Pagination.Item>
      
      <Pagination.Ellipsis />
      <Pagination.Item >{10}</Pagination.Item>
    
      <Pagination.Next  ><BsArrowRightShort style={{fontSize:"30px"}}/></Pagination.Next>
     
    </Pagination>
  );
}

export default AdvancedExample;
