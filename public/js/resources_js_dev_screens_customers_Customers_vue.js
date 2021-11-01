"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_dev_screens_customers_Customers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon,
    ChevronRightIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon,
    ChevronLeftIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon
  },
  setup: function setup() {
    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_2__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)("$swal");
    var last_page = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var from = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var to = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var total = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var customers = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    function getCustomers() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/customers').then(function (_ref) {
        var data = _ref.data;
        customers.value = data;
        last_page.value = data.meta.last_page;
        from.value = data.meta.from;
        to.value = data.meta.to;
        total.value = data.meta.total;
      });
    }

    function deleteCustomer(id) {
      InjectDirectly.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]('/api/dev/customers/' + id).then(function (response) {
            getCustomers();
            InjectDirectly.fire("Deleted!", "Customer has been deleted.", "success");
          })["catch"](function (error) {
            InjectDirectly.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: ''
            });
          });
        }
      });
    }

    var query = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    function searchIt() {
      if (query.value !== '') {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/find-customer?page=1&q=e').then(function (_ref2) {
          var data = _ref2.data;
          customers.value = data;
          last_page.value = data.meta.last_page;
          from.value = data.meta.from;
          to.value = data.meta.to;
          total.value = data.meta.total;
        })["catch"](function (error) {
          InjectDirectly.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: ''
          });
        });
      } else {
        getCustomers();
      }
    }

    function goToPage(page) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(page).then(function (_ref3) {
        var data = _ref3.data;
        customers.value = data;
        last_page.value = data.meta.last_page;
        from.value = data.meta.from;
        to.value = data.meta.to;
        total.value = data.meta.total;
      });
    }

    function reloadCustomers() {
      getCustomers();
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      getCustomers();
    });
    return {
      customers: customers,
      last_page: last_page,
      reloadCustomers: reloadCustomers,
      deleteCustomer: deleteCustomer,
      query: query,
      searchIt: searchIt,
      goToPage: goToPage,
      from: from,
      to: to,
      total: total
    };
  },
  data: function data() {
    return {};
  },
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=template&id=345636eb&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=template&id=345636eb&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-345636eb"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "flex flex-col"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex justify-between items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-3xl text-gray-600 font-nunito font-semibold"
  }, " Customers "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex justify-center items-center space-x-3"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  "class": "mt-10 overflow-x-auto"
};
var _hoisted_4 = {
  "class": "min-w-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden"
};
var _hoisted_5 = {
  "class": "w-full"
};
var _hoisted_6 = {
  "class": "mt-10 flex items-center justify-start bg-gray-50 rounded-xl shadow border border-blue-300 w-full md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-3/12"
};
var _hoisted_7 = {
  "class": "bg-white shadow-md rounded my-6"
};
var _hoisted_8 = {
  "class": "w-full flex flex-row flex-no-wrap xl:bg-white rounded-lg overflow-hidden xl:shadow-xl"
};
var _hoisted_9 = {
  "class": "text-white"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "p-3 text-left xl:text-center"
  }, "SL", -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-12 xl:py-3 text-left xl:text-center"
  }, "Customer", -1
  /* HOISTED */
  );
});

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-12 xl:py-3 text-left xl:text-center"
  }, "Shop", -1
  /* HOISTED */
  );
});

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-2.5 xl:py-3 text-left xl:text-center"
  }, "Join Date", -1
  /* HOISTED */
  );
});

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 text-left xl:text-center custom-padding-action",
    width: "110px"
  }, "Actions", -1
  /* HOISTED */
  );
});

var _hoisted_15 = [_hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14];
var _hoisted_16 = {
  "class": "flex-1 xl:flex-none"
};
var _hoisted_17 = {
  "class": "border-grey-light border hover:bg-gray-100 p-3 xl:text-center"
};
var _hoisted_18 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 truncate"
};
var _hoisted_19 = {
  "class": "flex items-center"
};
var _hoisted_20 = {
  "class": "h-20 w-20 hidden md:block"
};
var _hoisted_21 = ["src", "alt"];
var _hoisted_22 = {
  "class": "flex flex-col justify-start md:ml-4"
};
var _hoisted_23 = {
  "class": "font-bold text-lg"
};
var _hoisted_24 = {
  "class": "mb-0 font-semibold text-sm"
};
var _hoisted_25 = {
  "class": "mb-0 font-semibold text-sm"
};
var _hoisted_26 = {
  "class": "mb-0 italic font-medium text-xs"
};
var _hoisted_27 = {
  "class": "mb-0 italic font-medium text-xs"
};
var _hoisted_28 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 truncate"
};
var _hoisted_29 = {
  "class": "flex items-center"
};
var _hoisted_30 = {
  "class": "h-20 w-20 hidden md:block"
};
var _hoisted_31 = ["src", "alt"];
var _hoisted_32 = {
  "class": "flex flex-col justify-start md:ml-4"
};
var _hoisted_33 = {
  "class": "font-bold text-lg"
};
var _hoisted_34 = {
  "class": "mb-0 font-semibold text-sm"
};
var _hoisted_35 = {
  "class": "mb-0 font-semibold text-sm"
};
var _hoisted_36 = {
  "class": "mb-0 italic font-medium text-xs"
};
var _hoisted_37 = {
  "class": "mb-0 italic font-medium text-xs"
};
var _hoisted_38 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 xl:text-center"
};
var _hoisted_39 = {
  "class": "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold"
};
var _hoisted_40 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
};
var _hoisted_41 = {
  "class": "flex item-center xl:justify-center space-x-2"
};
var _hoisted_42 = ["onClick"];

var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "class": "h-4 w-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_44 = [_hoisted_43];
var _hoisted_45 = ["onClick"];

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "class": "h-4 w-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_47 = [_hoisted_46];
var _hoisted_48 = {
  "class": "bg-white shadow-md rounded my-6 flex flex-col md:flex-row justify-between items-center my-10 mb-10"
};
var _hoisted_49 = {
  key: 0,
  "class": "text-gray-500 flex items-center space-x-4 justify-center py-3 px-10"
};
var _hoisted_50 = ["onClick"];
var _hoisted_51 = ["onClick"];
var _hoisted_52 = ["onClick"];
var _hoisted_53 = {
  "class": "px-5 text-gray-500 italic text-sm py-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SearchIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchIcon");

  var _component_chevron_left_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-left-icon");

  var _component_chevron_right_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-right-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" component "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Search Customer..",
    "class": "w-full px-4 py-3 rounded-xl text-gray-700 tracking-wide focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.query = $event;
    }),
    onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    }, ["enter"]))
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.query]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer",
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchIcon, {
    "class": "h-4 w-4 xl:h-7 xl:w-7 text-gray-700 mr-4"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.customers.data, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "bg-dashboard-blue flex flex-col flex-no-wrap xl:table-row rounded-l-lg xl:rounded-none mb-2 xl:mb-0",
      key: index
    }, _hoisted_15);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.customers.data, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "flex flex-col flex-no wrap xl:table-row mb-2 xl:mb-0",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.from + index), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-full w-full rounded-full",
      src: item.avatar ? item.avatar : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png',
      alt: item.name
    }, null, 8
    /* PROPS */
    , _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.f_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.l_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.phone), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.address_1), 1
    /* TEXT */
    )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-full w-full rounded-full",
      src: item.shop[0] ? item.shop[0].logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png',
      alt: item.shop[0].name
    }, null, 8
    /* PROPS */
    , _hoisted_31)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0].name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_34, "Shop#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].shop_no : null) + ", Road#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].road_no : null), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].area_name : null), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].city : null) + ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].district : null), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].division : null) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.shop[0] ? item.shop[0].zip : null), 1
    /* TEXT */
    )])])], 512
    /* NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, item.shop[0]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDate(item.join_date)), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: function onClick($event) {
        return _ctx.showEditDevModal(item.id);
      }
    }, _hoisted_44, 8
    /* PROPS */
    , _hoisted_42), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteCustomer(item.id);
      }, ["prevent"])
    }, _hoisted_47, 8
    /* PROPS */
    , _hoisted_45)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [$setup.last_page > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.customers.meta.links, function (link, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [link.label.includes('Previous') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-1 rounded-md bg-gray-300", link.url ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed']),
      onClick: function onClick($event) {
        return $setup.goToPage(link.url);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_chevron_left_icon, {
      "class": "h-5 w-5"
    })], 10
    /* CLASS, PROPS */
    , _hoisted_50)) : link.label.includes('Next') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-1 rounded-md bg-gray-300", link.url ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed']),
      onClick: function onClick($event) {
        return $setup.goToPage(link.url);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_chevron_right_icon, {
      "class": "h-5 w-5"
    })], 10
    /* CLASS, PROPS */
    , _hoisted_51)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 2,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-2 transform duration-700 rounded-md text-xl cursor-pointer flex justify-center items-center", [link.active ? 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rotate-45 text-gray-100' : 'bg-gray-300 hover:bg-gray-700 hover:text-gray-100', link.url ? '' : 'opacity-50 cursor-not-allowed']]),
      onClick: function onClick($event) {
        return $setup.goToPage(link.url);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(link.active ? 'transform -rotate-45' : '')
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 3
    /* TEXT, CLASS */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_52))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total) + " employees ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <div class=\"bg-white shadow-md rounded my-6\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <div class=\"\" v-show=\"last_page > 1\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <VueTailwindPagination"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                :current=\"current\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                :total=\"total\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                :per-page=\"per_page\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                @page-changed=\"onPageClick($event)\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            />"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    </div>")])])])]);
}

/***/ }),

/***/ "./resources/js/dev/useVueSweetAlert2.js":
/*!***********************************************!*\
  !*** ./resources/js/dev/useVueSweetAlert2.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVueSweetAlert2": () => (/* binding */ useVueSweetAlert2)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function useVueSweetAlert2() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$swal");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1280px) {\ntable[data-v-345636eb] {\n    display: inline-table !important;\n}\nthead tr[data-v-345636eb]:not(:first-child) {\n    display: none;\n}\n.custom-padding-action[data-v-345636eb] {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n}\n.custom-padding-action[data-v-345636eb] {\n  padding-top: 0.813rem;\n  padding-bottom: 0.813rem;\n}\ntd[data-v-345636eb]:not(:last-child) {\n  border-bottom: 0;\n}\nth[data-v-345636eb]:not(:last-child) {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_style_index_0_id_345636eb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_style_index_0_id_345636eb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_style_index_0_id_345636eb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/dev/screens/customers/Customers.vue":
/*!**********************************************************!*\
  !*** ./resources/js/dev/screens/customers/Customers.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Customers_vue_vue_type_template_id_345636eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=345636eb&scoped=true */ "./resources/js/dev/screens/customers/Customers.vue?vue&type=template&id=345636eb&scoped=true");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/customers/Customers.vue?vue&type=script&lang=js");
/* harmony import */ var _Customers_vue_vue_type_style_index_0_id_345636eb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true */ "./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Customers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Customers_vue_vue_type_template_id_345636eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-345636eb"],['__file',"resources/js/dev/screens/customers/Customers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/customers/Customers.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/dev/screens/customers/Customers.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Customers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/customers/Customers.vue?vue&type=template&id=345636eb&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/dev/screens/customers/Customers.vue?vue&type=template&id=345636eb&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_template_id_345636eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_template_id_345636eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Customers.vue?vue&type=template&id=345636eb&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=template&id=345636eb&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customers_vue_vue_type_style_index_0_id_345636eb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/customers/Customers.vue?vue&type=style&index=0&id=345636eb&lang=scss&scoped=true");


/***/ })

}]);