interface User {
  id: string;
  firstname: string;
  lastname: string;
  photo: string;
  email: string;
  created: string;
  phone: string;
  point_amount: number;
  upoint_number: number;
  order_edit_permission: number;
  ebazaar_token: string;
  businesses: [
    {
      customer_id: number;
      customer_name: string;
      an_name: null;
      register_no: string;
      created_date: string;
      type_id: 1;
      tradeshops: [
        {
          id: number;
          name: string;
          customer_id: number;
          city: string;
          district: string;
          horoo: string;
          address1: string;
          address2: string;
          phone: string;
          created: string;
          business_type_id: string;
          speacials: string;
          latitude: number;
          longitude: number;
          alcohol_sale: number;
          components: {};
          suppliers: [];
          deferredPayment: [string];
        }
      ];
    }
  ];
  tradeshop_codes: [];
}

export default User;
