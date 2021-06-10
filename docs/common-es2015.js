(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "7nfi":
/*!*********************************************!*\
  !*** ./src/app/constants/columnMetadata.ts ***!
  \*********************************************/
/*! exports provided: filterParams, Months, AgentsColumn, customersColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterParams", function() { return filterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Months", function() { return Months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsColumn", function() { return AgentsColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersColumn", function() { return customersColumn; });
var filterParams = {
    suppressAndOrCondition: true,
    comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = new Date(cellValue).toLocaleDateString("en-IN");
        if (dateAsString == null)
            return -1;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
        console.log(cellValue, "ddd", cellDate, "ddd", filterLocalDateAtMidnight);
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
    },
    browserDatePicker: true,
    buttons: ['reset'],
};
const Months = [
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
const AgentsColumn = [
    {
        field: "id",
        headerName: "ID",
        resizable: true,
        sortable: true,
    },
    {
        field: "Name",
        headerName: "Name",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "group.Name",
        headerName: "Group",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "Email",
        headerName: "E-mail",
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "Contact_Number_1",
        headerName: "Contact Number 1",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "Contact_Number_2",
        headerName: "Contact Number 2",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "Contact_Number_3",
        headerName: "Contact Number 3",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
];
const customersColumn = [
    {
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true,
    },
    {
        field: "NameOfBride",
        headerName: "Name Of Bride",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "MarriageDate",
        headerName: "Marriage Date",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agDateColumnFilter',
        filterParams: filterParams,
    },
    {
        field: "NameOfFather",
        headerName: "Name of Father",
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "NameOfMother",
        headerName: "Name of Mother",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "tele_caller_contact.Name",
        headerName: "Agent",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
    {
        field: "Address.locality.Name",
        headerName: "Locality",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: ['contains'],
            buttons: ['reset'],
        },
    },
];


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map