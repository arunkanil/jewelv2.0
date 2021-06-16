import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Apollo, gql } from "apollo-angular";

const AgentsQuery = gql`
  query AgentsQuery {
    teleCallerContacts {
      id
      Name
      Contact_Number_1
      Contact_Number_2
      Contact_Number_3
      group {
        Name
        Description
      }
      Email
    }
  }
`;
const AgentsSingleQuery = gql`
  query ($id: ID!) {
    teleCallerContact(id: $id) {
      id
      Name
      Email
      group {
        Name
        Description
      }
      Contact_Number_1
      Contact_Number_2
      Contact_Number_3
      telecaller_remarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
          }
        }
      }
    }
  }
`;
const AddAgentMutation = gql`
  mutation (
    $name: String!
    $group: ID!
    $email: String!
    $phone1: Long!
    $phone2: Long!
    $phone3: Long!
  ) {
    createTeleCallerContact(
      input: {
        data: {
          Name: $name
          Email: $email
          Contact_Number_1: $phone1
          Contact_Number_2: $phone2
          Contact_Number_3: $phone3
          group: $group
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const GroupsQuery = gql`
  query GroupsQuery {
    groups {
      id
      Name
      Description
    }
  }
`;
const localitiesQuery = gql`
  query {
    localities {
      id
      Name
      post_office {
        Name
        id
        Pincode
      }
    }
  }
`;
const UpdateAgentMutation = gql`
  mutation (
    $id: ID!
    $name: String!
    $group: ID!
    $email: String!
    $phone1: Long!
    $phone2: Long!
    $phone3: Long!
  ) {
    updateTeleCallerContact(
      input: {
        where: { id: $id }
        data: {
          Name: $name
          Email: $email
          Contact_Number_1: $phone1
          Contact_Number_2: $phone2
          Contact_Number_3: $phone3
          group: $group
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const DeleteAgentMutation = gql`
  mutation ($id: ID!) {
    deleteTeleCallerContact(input: { where: { id: $id } }) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const AddCommentMutation = gql`
  mutation ($id: ID!, $remarks: String!, $date: DateTime!) {
    updateTeleCallerContact(
      input: {
        where: { id: $id }
        data: {
          telecaller_remarks: {
            RemarksText: $remarks
            CallHistory: { event_date_time: $date }
          }
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Email
        group {
          Name
          Description
        }
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        telecaller_remarks {
          RemarksText
          CallHistory {
            event_date_time
            users_permissions_user {
              username
            }
          }
        }
      }
    }
  }
`;
const CustomersQuery = gql`
  query {
    customers {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      MarriageMonth
      kp_caller_assigned {
        email
        username
      }
      tele_caller_contact {
        Name
        id
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
        }
      }
    }
  }
`;
const CustomersFilterQuery = gql`
  query (
    $is_verified: Boolean
    $kp_caller_assigned_null: Boolean
    $kp_id: ID
    $MarriageMonth_null: Boolean
    $MarriageDate_null: Boolean
  ) {
    customers(
      where: {
        is_verified: $is_verified
        kp_caller_assigned_null: $kp_caller_assigned_null
        kp_caller_assigned: $kp_id
        MarriageDate_null: $MarriageDate_null
        MarriageMonth_null: $MarriageMonth_null
      }
    ) {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      MarriageMonth
      kp_caller_assigned {
        email
        username
      }
      tele_caller_contact {
        Name
        id
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
        }
      }
    }
  }
`;
const CustomerSingleQuery = gql`
  query ($id: ID!) {
    customer(id: $id) {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      MarriageMonth
      tele_caller_contact {
        Name
        id
      }
      kp_caller_assigned {
        email
        username
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
        }
      }
      TelecallerRemarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
            email
          }
        }
      }
    }
  }
`;
const AddCustomerMutation = gql`
  mutation (
    $NameOfBride: String!
    $NameOfFather: String!
    $NameOfMother: String!
    $MarriageDate: Date!
    $MarriageMonth: Int!
    $tele_caller_contact: ID!
    $HouseName: String!
    $Landmark: String!
    $locality: ID!
  ) {
    createCustomer(
      input: {
        data: {
          NameOfBride: $NameOfBride
          NameOfFather: $NameOfFather
          NameOfMother: $NameOfMother
          MarriageDate: $MarriageDate
          MarriageMonth: $MarriageMonth
          tele_caller_contact: $tele_caller_contact
          Address: {
            HouseName: $HouseName
            Landmark: $Landmark
            locality: $locality
          }
        }
      }
    ) {
      customer {
        id
        NameOfBride
        NameOfFather
        NameOfMother
        MarriageDate
        MarriageMonth
        tele_caller_contact {
          Name
          id
        }
        created_at
        Address {
          id
          HouseName
          Landmark
          locality {
            Name
          }
          post_office {
            Name
            Pincode
            district {
              Name
            }
          }
          GeoLocation {
            Latitude
            Longitude
            GoogleMapURL
          }
        }
      }
    }
  }
`;
const AddCustomerCommentMutation = gql`
  mutation (
    $id: ID!
    $remarks: String!
    $date: DateTime!
    $is_verified: Boolean
  ) {
    updateCustomer(
      input: {
        where: { id: $id }
        data: {
          TelecallerRemarks: {
            RemarksText: $remarks
            CallHistory: { event_date_time: $date }
          }
          is_verified: $is_verified
        }
      }
    ) {
      customer {
        id
        is_verified
        NameOfBride
        NameOfFather
        NameOfMother
        MarriageDate
        MarriageMonth
        tele_caller_contact {
          Name
          id
        }
        created_at
        Address {
          id
          HouseName
          Landmark
          locality {
            Name
          }
          post_office {
            Name
            Pincode
            district {
              Name
            }
          }
          GeoLocation {
            Latitude
            Longitude
            GoogleMapURL
          }
        }
      }
    }
  }
`;
const SetKpCallerMutation = gql`
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(input: { where: { id: $id }, data: { kp_customer: $cust_id } }) {
      user {
        id
        kp_customer {
          id
          NameOfBride
          NameOfFather
        }
      }
    }
  }
`;
const SetFieldAgentMutation = gql`
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(input: { where: { id: $id }, data: { customers: $cust_id } }) {
      user {
        id
        customers {
          NameOfBride
          id
          NameOfFather
          MarriageDate
        }
      }
    }
  }
`;
const UsersQuery = gql`
  query ($type: String!) {
    users(where: { UserType: $type }) {
      id
      username
      email
      role {
        id
        name
        type
      }
      UserType
    }
  }
`;
@Injectable({
  providedIn: "root",
})
export class DataService {
  baseURL = environment.apiUrl;
  params: URLSearchParams = new URLSearchParams();

  constructor(private http: HttpClient, private apollo: Apollo) {}

  Login(data): Observable<any> {
    const httpOptions1: Object = {
      observe: "response",
    };
    return this.http.post(this.baseURL + `auth/login/`, data, httpOptions1);
  }
  getOrders() {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      }),
      observe: "response",
    };
    return this.http.get(this.baseURL + "order/1/shop/", httpOptions);
  }

  getAgents() {
    return this.apollo.watchQuery({
      query: AgentsQuery,
    });
  }
  getSingleAgent(id) {
    return this.apollo.watchQuery({
      query: AgentsSingleQuery,
      variables: {
        id: id,
      },
    });
  }
  AddAgent(agent) {
    return this.apollo.mutate({
      mutation: AddAgentMutation,
      variables: {
        name: agent.name,
        email: agent.email,
        group: agent.group,
        phone1: agent.phone1,
        phone2: agent.phone2,
        phone3: agent.phone3,
      },
      errorPolicy: "all",
    });
  }
  EditAgent(id, agent) {
    return this.apollo.mutate({
      mutation: UpdateAgentMutation,
      variables: {
        id: id,
        name: agent.name,
        email: agent.email,
        group: agent.group,
        phone1: agent.phone1,
        phone2: agent.phone2,
        phone3: agent.phone3,
      },
      errorPolicy: "all",
    });
  }
  AddComment(id, agent) {
    return this.apollo.mutate({
      mutation: AddCommentMutation,
      variables: {
        id: id,
        remarks: agent.RemarksText,
        date: agent.event_date_time + ":00.000Z",
      },
      errorPolicy: "all",
    });
  }
  DeleteAgent(id) {
    return this.apollo.mutate({
      mutation: DeleteAgentMutation,
      variables: {
        id: id,
      },
      errorPolicy: "all",
    });
  }
  getGroups() {
    return this.apollo.watchQuery({
      query: GroupsQuery,
    });
  }
  getLocalities() {
    return this.apollo.watchQuery({
      query: localitiesQuery,
    });
  }
  getCustomers() {
    return this.apollo.watchQuery({
      query: CustomersQuery,
    });
  }
  getUsers(type) {
    return this.apollo.watchQuery({
      query: UsersQuery,
      variables: { type: type },
    });
  }
  getCustomersFilter(verified) {
    return this.apollo.watchQuery({
      query: CustomersFilterQuery,
      variables: verified,
    });
  }
  getSingleCustomer(id) {
    return this.apollo.watchQuery({
      query: CustomerSingleQuery,
      variables: {
        id: id,
      },
    });
  }
  Addcustomer(Customer) {
    return this.apollo.mutate({
      mutation: AddCustomerMutation,
      variables: {
        NameOfBride: Customer.NameOfBride,
        NameOfFather: Customer.NameOfFather,
        NameOfMother: Customer.NameOfMother,
        MarriageDate: Customer.MarriageDate,
        MarriageMonth: parseInt(Customer.MarriageMonth),
        tele_caller_contact: Customer.tele_caller_contact,
        HouseName: Customer.HouseName,
        Landmark: Customer.Landmark,
        locality: Customer.locality,
      },
      errorPolicy: "all",
    });
  }
  AddCustomerComment(id, agent) {
    return this.apollo.mutate({
      mutation: AddCustomerCommentMutation,
      variables: {
        id: id,
        remarks: agent.RemarksText,
        date: agent.event_date_time + ":00.000Z",
        is_verified: agent.is_verified,
      },
      errorPolicy: "all",
    });
  }
  SetKpCaller(id, cust_id) {
    return this.apollo.mutate({
      mutation: SetKpCallerMutation,
      variables: {
        id: id,
        cust_id: cust_id,
      },
      errorPolicy: "all",
    });
  }
  SetFieldAgent(id, cust_id) {
    return this.apollo.mutate({
      mutation: SetFieldAgentMutation,
      variables: {
        id: id,
        cust_id: cust_id,
      },
      errorPolicy: "all",
    });
  }
}
