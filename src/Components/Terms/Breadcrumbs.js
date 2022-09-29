import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active className='BREAD-ITEM' href="#" style={{color:" #EE0979"}}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active  className='BREAD-ITEM' href=""  style={{color:" #555555"}}>
       Terms and Conditions
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active className='BREAD-ITEM'>Data</Breadcrumb.Item> */}
    </Breadcrumb>
  );
}

export default BreadcrumbExample;
