import React from 'react';
import HeaderComponent from './component/HeaderComponent';
import CustomerGroups from './component/CustomerGroups';
import ClientHead from './component/ClientHead';
import CustomerList from './component/CustomerList';

const ClientsPage = (props) => {
  return (
    <div>
      <div className="headerComponent">
        <HeaderComponent />
    
        <CustomerGroups/>
    
         <ClientHead />
          
          <CustomerList/>

      </div>
    </div>
  );
};

export default ClientsPage;