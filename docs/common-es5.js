(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "7nfi":
    /*!*********************************************!*\
      !*** ./src/app/constants/columnMetadata.ts ***!
      \*********************************************/

    /*! exports provided: filterParams, Months, AgentsColumn, customersColumn */

    /***/
    function nfi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterParams", function () {
        return filterParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Months", function () {
        return Months;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentsColumn", function () {
        return AgentsColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customersColumn", function () {
        return customersColumn;
      });

      var filterParams = {
        suppressAndOrCondition: true,
        comparator: function comparator(filterLocalDateAtMidnight, cellValue) {
          var dateAsString = new Date(cellValue).toLocaleDateString("en-IN");
          if (dateAsString == null) return -1;
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
        buttons: ['reset']
      };
      var Months = [{
        id: 1,
        Name: "January"
      }, {
        id: 2,
        Name: "February"
      }, {
        id: 3,
        Name: "March"
      }, {
        id: 4,
        Name: "April"
      }, {
        id: 5,
        Name: "May"
      }, {
        id: 6,
        Name: "June"
      }, {
        id: 7,
        Name: "July"
      }, {
        id: 8,
        Name: "August"
      }, {
        id: 9,
        Name: "September"
      }, {
        id: 10,
        Name: "October"
      }, {
        id: 11,
        Name: "November"
      }, {
        id: 12,
        Name: "December"
      }];
      var AgentsColumn = [{
        field: "id",
        headerName: "ID",
        resizable: true,
        sortable: true
      }, {
        field: "Name",
        headerName: "Name",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "group.Name",
        headerName: "Group",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "Email",
        headerName: "E-mail",
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "Contact_Number_1",
        headerName: "Contact Number 1",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "Contact_Number_2",
        headerName: "Contact Number 2",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "Contact_Number_3",
        headerName: "Contact Number 3",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }];
      var customersColumn = [{
        field: "id",
        headerName: "ID",
        resizable: true,
        sortable: true
      }, {
        field: "NameOfBride",
        headerName: "Name Of Bride",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "MarriageDate",
        headerName: "Marriage Date",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agDateColumnFilter',
        filterParams: filterParams
      }, {
        field: "NameOfFather",
        headerName: "Name of Father",
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "NameOfMother",
        headerName: "Name of Mother",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "tele_caller_contact.Name",
        headerName: "Agent",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }, {
        field: "Address.locality.Name",
        headerName: "Locality",
        minWidth: 150,
        resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          buttons: ['reset']
        }
      }];
      /***/
    },

    /***/
    "H++W":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
      \************************************************************************************************/

    /*! no static exports found */

    /***/
    function HW(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';
        /**
         * --------------------------------------------------------------------------
         * CoreUI Plugins - Custom Tooltips for Chart.js (v1.3.1): custom-tooltips.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        function CustomTooltips(tooltipModel) {
          var _this = this; // Add unique id if not exist


          var _setCanvasId = function _setCanvasId() {
            var _idMaker = function _idMaker() {
              var _hex = 16;
              var _multiplier = 0x10000;
              return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
            };

            var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

            _this._chart.canvas.id = _canvasId;
            return _canvasId;
          };

          var ClassName = {
            ABOVE: 'above',
            BELOW: 'below',
            CHARTJS_TOOLTIP: 'chartjs-tooltip',
            NO_TRANSFORM: 'no-transform',
            TOOLTIP_BODY: 'tooltip-body',
            TOOLTIP_BODY_ITEM: 'tooltip-body-item',
            TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
            TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
            TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
            TOOLTIP_HEADER: 'tooltip-header',
            TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
          };
          var Selector = {
            DIV: 'div',
            SPAN: 'span',
            TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
          };
          var tooltip = document.getElementById(Selector.TOOLTIP);

          if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = Selector.TOOLTIP;
            tooltip.className = ClassName.CHARTJS_TOOLTIP;

            this._chart.canvas.parentNode.appendChild(tooltip);
          } // Hide if no tooltip


          if (tooltipModel.opacity === 0) {
            tooltip.style.opacity = 0;
            return;
          } // Set caret Position


          tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

          if (tooltipModel.yAlign) {
            tooltip.classList.add(tooltipModel.yAlign);
          } else {
            tooltip.classList.add(ClassName.NO_TRANSFORM);
          } // Set Text


          if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var tooltipHeader = document.createElement(Selector.DIV);
            tooltipHeader.className = ClassName.TOOLTIP_HEADER;
            titleLines.forEach(function (title) {
              var tooltipHeaderTitle = document.createElement(Selector.DIV);
              tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
              tooltipHeaderTitle.innerHTML = title;
              tooltipHeader.appendChild(tooltipHeaderTitle);
            });
            var tooltipBody = document.createElement(Selector.DIV);
            tooltipBody.className = ClassName.TOOLTIP_BODY;
            var tooltipBodyItems = tooltipModel.body.map(function (item) {
              return item.lines;
            });
            tooltipBodyItems.forEach(function (item, i) {
              var tooltipBodyItem = document.createElement(Selector.DIV);
              tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
              var colors = tooltipModel.labelColors[i];
              var tooltipBodyItemColor = document.createElement(Selector.SPAN);
              tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
              tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
              tooltipBodyItem.appendChild(tooltipBodyItemColor);

              if (item[0].split(':').length > 1) {
                var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
                tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
                tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
                tooltipBodyItem.appendChild(tooltipBodyItemLabel);
                var tooltipBodyItemValue = document.createElement(Selector.SPAN);
                tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
                tooltipBodyItem.appendChild(tooltipBodyItemValue);
              } else {
                var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

                _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                _tooltipBodyItemValue.innerHTML = item[0];
                tooltipBodyItem.appendChild(_tooltipBodyItemValue);
              }

              tooltipBody.appendChild(tooltipBodyItem);
            });
            tooltip.innerHTML = '';
            tooltip.appendChild(tooltipHeader);
            tooltip.appendChild(tooltipBody);
          }

          var position = this._chart.canvas.getBoundingClientRect();

          var positionY = this._chart.canvas.offsetTop;
          var positionX = this._chart.canvas.offsetLeft;
          var positionLeft = positionX + tooltipModel.caretX;
          var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

          var halfWidth = tooltipModel.width / 2;

          if (positionLeft + halfWidth > position.width) {
            positionLeft -= halfWidth;
          } else if (positionLeft < halfWidth) {
            positionLeft += halfWidth;
          } // Display, position, and set styles for font


          tooltip.style.opacity = 1;
          tooltip.style.left = positionLeft + "px";
          tooltip.style.top = positionTop + "px";
        }

        var customTooltips = CustomTooltips; // TODO: camel-case

        exports.CustomTooltips = CustomTooltips;
        exports.customTooltips = customTooltips;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      }); //# sourceMappingURL=custom-tooltips.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map