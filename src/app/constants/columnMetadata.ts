import { ActionRenderer } from "../utils/StatusRenderer";

export const Months = [
  { id: 1, Name: "January" },
  { id: 2, Name: "February" },
  { id: 3, Name: "March" },
  { id: 4, Name: "April" },
  { id: 5, Name: "May" },
  { id: 6, Name: "June" },
  { id: 7, Name: "July" },
  { id: 8, Name: "August" },
  { id: 9, Name: "September" },
  { id: 10, Name: "October" },
  { id: 11, Name: "November" },
  { id: 12, Name: "December" },
];
export const AgentsColumn = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "Name",
    headerName: "Name",
    minWidth: 150,
  },
  {
    field: "group.Name",
    headerName: "Group",
    minWidth: 150,
  },
  {
    field: "Email",
    headerName: "E-mail",
    // width : "auto"
  },
  {
    field: "Contact_Number_1",
    headerName: "Contact Number 1",
    minWidth: 150,
  },
  {
    field: "Contact_Number_2",
    headerName: "Contact Number 2",
    minWidth: 150,
  },
  {
    field: "Contact_Number_3",
    headerName: "Contact Number 3",
    minWidth: 150,
  },
  // {
  //   headerName: "Actions",
  //   field: "actions",
  //   sortable: false,
  //   editable: false,
  //   resizable: true,
  //   width: 100,
  //   cellRenderer: ActionRenderer,
  // },
];
export const customersColumn = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "NameOfBride",
    headerName: "Name Of Bride",
    minWidth: 150,
  },
  {
    field: "MarriageDate",
    headerName: "Marriage Date",
    minWidth: 150,
  },
  {
    field: "NameOfFather",
    headerName: "Name of Father",
    // width : "auto"
  },
  {
    field: "NameOfMother",
    headerName: "Name of Mother",
    minWidth: 150,
  },
  {
    field: "tele_caller_contact.Name",
    headerName: "Agent",
    minWidth: 150,
  },
  {
    field: "Address.locality.Name",
    headerName: "Locality",
    minWidth: 150,
  },
];
