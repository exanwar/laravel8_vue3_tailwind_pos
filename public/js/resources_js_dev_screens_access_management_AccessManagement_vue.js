"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_dev_screens_access_management_AccessManagement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devs_AddDeveloper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devs/AddDeveloper */ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue");
/* harmony import */ var _devs_EditDeveloper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devs/EditDeveloper */ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");
/* harmony import */ var _roles_RolesModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles/RolesModal */ "./resources/js/dev/screens/access_management/roles/RolesModal.vue");
/* harmony import */ var _permissions_PermissionsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permissions/PermissionsModal */ "./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddDeveloper: _devs_AddDeveloper__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditDeveloper: _devs_EditDeveloper__WEBPACK_IMPORTED_MODULE_2__["default"],
    RolesModal: _roles_RolesModal__WEBPACK_IMPORTED_MODULE_5__["default"],
    PermissionsModal: _permissions_PermissionsModal__WEBPACK_IMPORTED_MODULE_6__["default"],
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__.SearchIcon,
    ChevronLeftIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon,
    ChevronRightIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon
  },
  setup: function setup() {
    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_4__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("$swal");
    var last_page = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var from = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var to = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var total = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var devs = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);

    function getDevs() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/devs').then(function (_ref) {
        var data = _ref.data;
        devs.value = data;
        last_page.value = data.meta.last_page;
        from.value = data.meta.from;
        to.value = data.meta.to;
        total.value = data.meta.total;
      });
    }

    var addDev = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);

    function reloadDevs() {
      getDevs();
    }

    var editDev = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var devId = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);

    function showEditDevModal(id) {
      editDev.value = true;
      devId.value = id;
    }

    function deleteDeveloper(id) {
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
          axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]('/api/dev/devs/' + id).then(function (response) {
            getDevs();
            InjectDirectly.fire("Deleted!", "Developer has been deleted.", "success");
          })["catch"](function (error) {
            var message = error.response.data.message;
            InjectDirectly.fire({
              icon: 'error',
              title: 'Oops...',
              text: message,
              footer: ''
            });
          });
        }
      });
    }

    var showRoleModal = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var showPermissionModal = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var query = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);

    function searchIt() {
      if (query.value !== '') {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/find-devs?page=1&q=' + query.value).then(function (_ref2) {
          var data = _ref2.data;
          devs.value = data;
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
        getDevs();
      }
    }

    function goToPage(page) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(page).then(function (_ref3) {
        var data = _ref3.data;
        devs.value = data;
        last_page.value = data.meta.last_page;
        from.value = data.meta.from;
        to.value = data.meta.to;
        total.value = data.meta.total;
      });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      getDevs();
    });
    return {
      devs: devs,
      getDevs: getDevs,
      addDev: addDev,
      editDev: editDev,
      devId: devId,
      showEditDevModal: showEditDevModal,
      deleteDeveloper: deleteDeveloper,
      reloadDevs: reloadDevs,
      showRoleModal: showRoleModal,
      showPermissionModal: showPermissionModal,
      query: query,
      searchIt: searchIt,
      last_page: last_page,
      from: from,
      to: to,
      total: total,
      goToPage: goToPage
    };
  },
  data: function data() {
    return {};
  },
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_1__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("$swal");
    var image = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);

    function uploadDevPhoto(e) {
      var file = e.target.files[0];
      var reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = function (file) {
          image.value = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        InjectDirectly.fire({
          icon: "error",
          title: "Oops..",
          text: "You are uploading a large image",
          footer: ""
        });
      }
    }

    var fb = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var twitter = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var linkedin = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var f_name = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var l_name = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var address_1 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var address_2 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var phone = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var e_phone = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var city = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var zip = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var u_name = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var nid = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var password = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var c_password = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);

    function successToast(message) {
      this.toast.success(message, {
        position: 'top-right',
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false
      });
    }

    return {
      toast: toast,
      uploadDevPhoto: uploadDevPhoto,
      image: image,
      fb: fb,
      twitter: twitter,
      linkedin: linkedin,
      f_name: f_name,
      l_name: l_name,
      address_1: address_1,
      address_2: address_2,
      phone: phone,
      e_phone: e_phone,
      city: city,
      zip: zip,
      email: email,
      u_name: u_name,
      nid: nid,
      password: password,
      c_password: c_password,
      InjectDirectly: InjectDirectly,
      successToast: successToast
    };
  },
  data: function data() {
    return {};
  },
  watch: {},
  methods: {
    submit: function submit() {
      var _this = this;

      var data = {
        avatar: this.image,
        roles: 1,
        facebook_url: this.fb,
        twitter_url: this.twitter,
        linkedin_url: this.linkedin,
        first_name: this.f_name,
        last_name: this.l_name,
        street_address_1: this.address_1,
        street_address_2: this.address_2,
        mobile_number: this.phone,
        emergency_contact: this.e_phone,
        email: this.email,
        pin_code: this.zip,
        city: this.city,
        username: this.u_name,
        nid_number: this.nid,
        password: this.password
      };

      if (this.password === '') {
        this.InjectDirectly.fire({
          icon: "error",
          title: "Oops..",
          text: "Password is empty",
          footer: ""
        });
      } else if (this.password === this.c_password) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/dev/devs', data).then(function (response) {
          _this.handleClose();

          _this.handleReload();

          _this.successToast('New Developer added successfully');
        })["catch"](function (error) {
          console.log(error.response);

          _this.InjectDirectly.fire({
            icon: "error",
            title: "Oops..",
            text: 'Fill all fields first',
            footer: ""
          });
        });
      } else {
        this.InjectDirectly.fire({
          icon: "error",
          title: "Oops..",
          text: "Password didn\'t match",
          footer: ""
        });
      }
    },
    handleClose: function handleClose() {
      this.$emit('close');
    },
    handleReload: function handleReload() {
      this.$emit('reloadDevs');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['dev'],
  setup: function setup(props) {
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_1__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("$swal");

    function getDeveloper() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/devs/' + props.dev).then(function (_ref) {
        var data = _ref.data;
        console.log(data.data[0]);
        var devData = data.data[0];
        image.value = devData.avatar;
        fb.value = devData.fb;
        twitter.value = devData.twitter;
        linkedin.value = devData.linkedin;
        f_name.value = devData.f_name;
        l_name.value = devData.l_name;
        address_1.value = devData.address_1;
        address_2.value = devData.address_2;
        phone.value = devData.phone;
        e_phone.value = devData.e_phone;
        city.value = devData.city;
        zip.value = devData.zip;
        email.value = devData.email;
        u_name.value = devData.username;
        nid.value = devData.nid;
      });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      getDeveloper();
    });
    var image = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var fb = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var twitter = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var linkedin = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var f_name = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var l_name = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var address_1 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var address_2 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var phone = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var e_phone = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var city = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var zip = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var u_name = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var nid = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);

    function successToast(message) {
      this.toast.success(message, {
        position: 'top-right',
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false
      });
    }

    return {
      toast: toast,
      image: image,
      fb: fb,
      twitter: twitter,
      linkedin: linkedin,
      f_name: f_name,
      l_name: l_name,
      address_1: address_1,
      address_2: address_2,
      phone: phone,
      e_phone: e_phone,
      city: city,
      zip: zip,
      email: email,
      u_name: u_name,
      nid: nid,
      InjectDirectly: InjectDirectly,
      successToast: successToast
    };
  },
  data: function data() {
    return {};
  },
  watch: {},
  methods: {
    update: function update() {
      var _this = this;

      var data = {
        roles: 1,
        facebook_url: this.fb,
        twitter_url: this.twitter,
        linkedin_url: this.linkedin,
        first_name: this.f_name,
        last_name: this.l_name,
        street_address_1: this.address_1,
        street_address_2: this.address_2,
        mobile_number: this.phone,
        emergency_contact: this.e_phone,
        pin_code: this.zip,
        city: this.city,
        nid_number: this.nid
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().put('/api/dev/devs/' + this.dev, data).then(function (response) {
        _this.handleClose();

        _this.handleReload();

        _this.successToast('Developer information has been updated!');
      })["catch"](function (error) {
        console.log(error.response);

        _this.InjectDirectly.fire({
          icon: "error",
          title: "Oops..",
          text: 'Something went wrong!',
          footer: ""
        });
      });
    },
    handleClose: function handleClose() {
      this.$emit('close');
    },
    handleReload: function handleReload() {
      this.$emit('reloadDevs');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon
  },
  setup: function setup() {
    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)("$swal");
    var permissionTitle = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    return {
      permissionTitle: permissionTitle,
      InjectDirectly: InjectDirectly
    };
  },
  data: function data() {
    return {
      devs: []
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/dev/permissions', {
        title: this.permissionTitle
      }).then(function (response) {
        _this.handleReload();

        _this.handleClose();
      })["catch"](function (error) {
        var message = error.response.data.errors.title[0];

        _this.InjectDirectly.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
          footer: ''
        });
      });
    },
    handleReload: function handleReload() {
      this.$emit('reload');
    },
    handleClose: function handleClose() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['permission'],
  components: {
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon
  },
  setup: function setup(props) {
    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)("$swal");
    var permissionTitle = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    function getPermission() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/permissions/' + props.permission).then(function (_ref) {
        var data = _ref.data;
        permissionTitle.value = data.title;
      });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      getPermission();
    });
    return {
      permissionTitle: permissionTitle,
      InjectDirectly: InjectDirectly
    };
  },
  data: function data() {
    return {
      devs: []
    };
  },
  methods: {
    update: function update() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().put('/api/dev/permissions/' + this.permission, {
        title: this.permissionTitle
      }).then(function (response) {
        _this.handleReload();

        _this.handleClose();
      })["catch"](function (error) {
        var message = error.response.data.errors.title[0];

        _this.InjectDirectly.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
          footer: ''
        });
      });
    },
    handleReload: function handleReload() {
      this.$emit('reload');
    },
    handleClose: function handleClose() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");
/* harmony import */ var _AddPermission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddPermission */ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue");
/* harmony import */ var _EditPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditPermission */ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon,
    AddPermission: _AddPermission__WEBPACK_IMPORTED_MODULE_4__["default"],
    EditPermission: _EditPermission__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  setup: function setup() {
    var addPermissionModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var permissionId = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var editPermissionModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var permissions = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    function getPermissions() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/permissions').then(function (_ref) {
        var data = _ref.data;
        permissions.value = data.data;
      });
    }

    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)("$swal");
    var query = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    function searchIt() {
      if (query.value !== '') {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/find-permission?q=' + this.query).then(function (_ref2) {
          var data = _ref2.data;
          permissions.value = data.data;
        })["catch"](function (error) {
          InjectDirectly.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: ''
          });
        });
      } else {
        getPermissions();
      }
    }

    function openEditModal(id) {
      editPermissionModal.value = true;
      permissionId.value = id;
    }

    function deletePermission(id) {
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
          axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]('/api/dev/permissions/' + id).then(function (response) {
            getPermissions();
            InjectDirectly.fire("Deleted!", "Permission has been deleted.", "success");
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

    function reloadPermissions() {
      getPermissions();
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      getPermissions();
    });
    return {
      addPermissionModal: addPermissionModal,
      permissionId: permissionId,
      editPermissionModal: editPermissionModal,
      permissions: permissions,
      query: query,
      searchIt: searchIt,
      reloadPermissions: reloadPermissions,
      openEditModal: openEditModal,
      deletePermission: deletePermission
    };
  },
  data: function data() {
    return {};
  },
  watch: {},
  methods: {
    submit: function submit() {},
    handleClose: function handleClose() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../useVueSweetAlert2 */ "./resources/js/dev/useVueSweetAlert2.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role'],
  components: {
    SearchIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon
  },
  setup: function setup(props) {
    var role = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var roleId = props.role;
    var roleTitle = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var selectedPermissions = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    function getRole() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/roles/' + props.role).then(function (_ref) {
        var data = _ref.data;
        role.value = data.data[0];
        roleTitle.value = data.data[0].title;
        selectedPermissions.value = data.data[0].permissions.map(function (item) {
          return item.id;
        });
      });
    }

    var permissions = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    function getPermission() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/permissions').then(function (_ref2) {
        var data = _ref2.data;
        permissions.value = data.data;
      });
    }

    var access = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return selectedPermissions.value.map(function (item) {
        return item;
      });
    });

    function isInSelectedPermissions(id) {
      return access.value.includes(id);
    }

    var $swal = (0,_useVueSweetAlert2__WEBPACK_IMPORTED_MODULE_3__.useVueSweetAlert2)();
    var InjectDirectly = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)("$swal");
    var query = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    function searchIt() {
      if (query.value !== '') {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/find-permission?q=' + this.query).then(function (_ref3) {
          var data = _ref3.data;
          permissions.value = data.data;
        })["catch"](function (error) {
          InjectDirectly.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: ''
          });
        });
      } else {
        getPermission();
      }
    }

    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_4__.useToast)();

    function successToast(message) {
      this.toast.success(message, {
        position: 'top-right',
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false
      });
    }

    function errorToast(message) {
      this.toast.error(message, {
        position: 'top-right',
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false
      });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      getRole();
      getPermission();
    });
    return {
      roleId: roleId,
      role: role,
      permissions: permissions,
      roleTitle: roleTitle,
      selectedPermissions: selectedPermissions,
      isInSelectedPermissions: isInSelectedPermissions,
      query: query,
      searchIt: searchIt,
      errorToast: errorToast,
      successToast: successToast,
      InjectDirectly: InjectDirectly
    };
  },
  data: function data() {
    return {
      devs: []
    };
  },
  watch: {},
  methods: {
    update: function update() {
      var _this = this;

      var data = {
        role: this.roleTitle,
        permissions: this.selectedPermissions
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().put('/api/dev/roles/' + this.roleId, data).then(function (response) {
        _this.handleReload();

        _this.handleClose();

        _this.successToast('Role\'s permissions have been updated!');
      });
    },
    handleClose: function handleClose() {
      this.$emit('close');
    },
    handleReload: function handleReload() {
      this.$emit('reload');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _EditRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditRole */ "./resources/js/dev/screens/access_management/roles/EditRole.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    EditRole: _EditRole__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var roles = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    function getRoles() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/dev/roles').then(function (_ref) {
        var data = _ref.data;
        roles.value = data.data;
      });
    }

    var editRoleModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var editRoleId = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    function openEditModal(id) {
      editRoleModal.value = true;
      editRoleId.value = id;
    }

    function reload() {
      getRoles();
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      getRoles();
    });
    return {
      roles: roles,
      editRoleModal: editRoleModal,
      editRoleId: editRoleId,
      openEditModal: openEditModal,
      reload: reload
    };
  },
  data: function data() {
    return {
      devs: []
    };
  },
  watch: {},
  methods: {
    submit: function submit() {},
    handleClose: function handleClose() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=template&id=2440c598&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=template&id=2440c598&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2440c598"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "flex flex-col"
};
var _hoisted_2 = {
  "class": "flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-3xl text-gray-600 font-nunito font-semibold"
  }, " Developers ", -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "flex justify-center items-center space-x-3"
};
var _hoisted_5 = {
  "class": "mt-10 overflow-x-auto"
};
var _hoisted_6 = {
  "class": "min-w-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden"
};
var _hoisted_7 = {
  "class": "w-full"
};
var _hoisted_8 = {
  "class": "flex items-center justify-start bg-gray-50 rounded-xl shadow border border-blue-300 w-full md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-3/12"
};
var _hoisted_9 = {
  "class": "bg-white shadow-md rounded my-6"
};
var _hoisted_10 = {
  "class": "w-full flex flex-row flex-no-wrap lg:bg-white rounded-lg overflow-hidden lg:shadow-xl"
};
var _hoisted_11 = {
  "class": "text-white"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "p-3 text-left lg:text-center"
  }, "SL", -1
  /* HOISTED */
  );
});

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-12 lg:py-3 text-left lg:text-center"
  }, "Developer", -1
  /* HOISTED */
  );
});

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-2.5 lg:py-3 text-left lg:text-center"
  }, "Role", -1
  /* HOISTED */
  );
});

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-2.5 lg:py-3 text-left lg:text-center"
  }, "Join Date", -1
  /* HOISTED */
  );
});

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-3 py-4 lg:py-3 text-left lg:text-center",
    width: "110px"
  }, "Actions", -1
  /* HOISTED */
  );
});

var _hoisted_17 = [_hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16];
var _hoisted_18 = {
  "class": "flex-1 lg:flex-none"
};
var _hoisted_19 = {
  "class": "border-grey-light border hover:bg-gray-100 p-3 lg:text-center"
};
var _hoisted_20 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 truncate"
};
var _hoisted_21 = {
  "class": "flex items-center"
};
var _hoisted_22 = {
  "class": "h-20 w-20 hidden md:block"
};
var _hoisted_23 = ["src", "alt"];
var _hoisted_24 = {
  "class": "flex flex-col justify-start md:ml-4"
};
var _hoisted_25 = {
  "class": "font-bold text-lg"
};
var _hoisted_26 = {
  "class": "mb-0 font-semibold text-sm"
};
var _hoisted_27 = {
  "class": "mb-0 font-semibold text-sm"
};
var _hoisted_28 = {
  "class": "mb-0 italic font-medium text-xs"
};
var _hoisted_29 = {
  "class": "mb-0 italic font-medium text-xs"
};
var _hoisted_30 = {
  "class": "border-grey-light border hover:bg-gray-100 p-3 lg:text-center"
};
var _hoisted_31 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 lg:text-center"
};
var _hoisted_32 = {
  "class": "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold"
};
var _hoisted_33 = {
  "class": "border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
};
var _hoisted_34 = {
  "class": "flex item-center lg:justify-center space-x-2"
};
var _hoisted_35 = ["onClick"];

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
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

var _hoisted_37 = [_hoisted_36];
var _hoisted_38 = ["onClick"];

var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
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

var _hoisted_40 = [_hoisted_39];
var _hoisted_41 = {
  "class": "bg-white shadow-md rounded my-6 flex flex-col md:flex-row justify-between items-center my-10 mb-10"
};
var _hoisted_42 = {
  key: 0,
  "class": "text-gray-500 flex items-center space-x-4 justify-center py-3 px-10"
};
var _hoisted_43 = ["onClick"];
var _hoisted_44 = ["onClick"];
var _hoisted_45 = ["onClick"];
var _hoisted_46 = {
  "class": "px-5 text-gray-500 italic text-sm py-3"
};

var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "h-24 w-24 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-plus-circle text-dashboard-blue"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_48 = [_hoisted_47];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SearchIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchIcon");

  var _component_chevron_left_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-left-icon");

  var _component_chevron_right_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-right-icon");

  var _component_AddDeveloper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddDeveloper");

  var _component_EditDeveloper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditDeveloper");

  var _component_RolesModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RolesModal");

  var _component_PermissionsModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PermissionsModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "blue-button text-xs font-semibold",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.showPermissionModal = true;
    })
  }, " Permissions "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "blue-button text-xs font-semibold",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.showRoleModal = true;
    })
  }, " Roles ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" component "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Search Developer..",
    "class": "w-full px-4 py-3 rounded-xl text-gray-700 tracking-wide focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.query = $event;
    }),
    onKeyup: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    }, ["enter"]))
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.query]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer",
    onClick: _cache[4] || (_cache[4] = function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchIcon, {
    "class": "h-4 w-4 xl:h-7 xl:w-7 text-gray-700 mr-4"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.devs.data, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "bg-dashboard-blue flex flex-col flex-no-wrap lg:table-row rounded-l-lg lg:rounded-none mb-2 lg:mb-0",
      key: index
    }, _hoisted_17);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.devs.data, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "flex flex-col flex-no wrap lg:table-row mb-2 lg:mb-0",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.from + index), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-full w-full rounded-full",
      src: item.avatar ? item.avatar : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png',
      alt: item.name
    }, null, 8
    /* PROPS */
    , _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.f_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.l_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.phone), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.address_1), 1
    /* TEXT */
    )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.roles, function (role, index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        "class": "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold",
        key: index
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(role.title), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.formatDate(item.join_date)), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: function onClick($event) {
        return $setup.showEditDevModal(item.id);
      }
    }, _hoisted_37, 8
    /* PROPS */
    , _hoisted_35), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteDeveloper(item.id);
      }, ["prevent"])
    }, _hoisted_40, 8
    /* PROPS */
    , _hoisted_38)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [$setup.last_page > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.devs.meta.links, function (link, index) {
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
    , _hoisted_43)) : link.label.includes('Next') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-1 rounded-md bg-gray-300", link.url ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed']),
      onClick: function onClick($event) {
        return $setup.goToPage(link.url);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_chevron_right_icon, {
      "class": "h-5 w-5"
    })], 10
    /* CLASS, PROPS */
    , _hoisted_44)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
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
    , _hoisted_45))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total) + " employees ", 1
  /* TEXT */
  )])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute bottom-0 right-0 text-9xl transform -translate-x-20 -translate-y-20 cursor-pointer shadow-2xl",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.addDev = true;
    }, ["prevent"]))
  }, _hoisted_48), $setup.addDev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AddDeveloper, {
    key: 0,
    onClose: _cache[6] || (_cache[6] = function ($event) {
      return $setup.addDev = false;
    }),
    onReloadDevs: $setup.reloadDevs
  }, null, 8
  /* PROPS */
  , ["onReloadDevs"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.editDev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_EditDeveloper, {
    key: 1,
    dev: $setup.devId,
    onClose: _cache[7] || (_cache[7] = function ($event) {
      return $setup.editDev = false;
    }),
    onReloadDevs: $setup.reloadDevs
  }, null, 8
  /* PROPS */
  , ["dev", "onReloadDevs"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.showRoleModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RolesModal, {
    key: 2,
    onClose: _cache[8] || (_cache[8] = function ($event) {
      return $setup.showRoleModal = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.showPermissionModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PermissionsModal, {
    key: 3,
    onClose: _cache[9] || (_cache[9] = function ($event) {
      return $setup.showPermissionModal = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9d41fa4e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "80rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "min-height": "35rem",
    "max-height": "55rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-gray-200 uppercase font-nunito tracking-wide"
  }, " Add Developer ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "flex flex-col lg:flex-row"
};
var _hoisted_8 = {
  "class": "flex w-full lg:w-80 flex-col space-y-4 px-3 py-3"
};
var _hoisted_9 = {
  "class": "px-3 py-5 rounded-lg flex flex-1 flex-col"
};
var _hoisted_10 = {
  "class": "flex flex-col justify-center items-center"
};
var _hoisted_11 = {
  "class": "relative"
};
var _hoisted_12 = {
  "class": "flex flex-col"
};
var _hoisted_13 = {
  "class": "h-40 w-40"
};
var _hoisted_14 = ["src"];
var _hoisted_15 = ["value"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"absolute right-5 bottom-1\" data-v-9d41fa4e><div class=\"bg-gray-400 border border-gray-100 rounded-full p-1\" data-v-9d41fa4e><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 text-gray-700\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" data-v-9d41fa4e><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z\" data-v-9d41fa4e></path><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 13a3 3 0 11-6 0 3 3 0 016 0z\" data-v-9d41fa4e></path></svg></div></div>", 1);

var _hoisted_17 = {
  "class": "absolute left-0 top-0"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "img-extension mt-3 text-gray-400 font-nunito italic"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-inline-block align-items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Only"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, ".jpg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, ".png"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, ".jpeg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " allowed")])], -1
  /* HOISTED */
  );
});

var _hoisted_19 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_20 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Facebook Url : ", -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_23 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Twitter Url : ", -1
  /* HOISTED */
  );
});

var _hoisted_25 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_26 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Linkedin Url : ", -1
  /* HOISTED */
  );
});

var _hoisted_28 = {
  "class": "flex w-full lg:flex-1 w-ful flex-col space-y-4 px-3 py-3"
};
var _hoisted_29 = {
  "class": "px-3 lg:py-5 rounded-lg flex flex-1 flex-col"
};

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-4 flex flex-col space-y-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-lg"
  }, " New Developer Information ")])], -1
  /* HOISTED */
  );
});

var _hoisted_31 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_32 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " First Name : ", -1
  /* HOISTED */
  );
});

var _hoisted_34 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Last name : ", -1
  /* HOISTED */
  );
});

var _hoisted_36 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_37 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Street Address 1 : ", -1
  /* HOISTED */
  );
});

var _hoisted_39 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_40 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Street Address 2 : ", -1
  /* HOISTED */
  );
});

var _hoisted_42 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_43 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_44 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Town/City : ", -1
  /* HOISTED */
  );
});

var _hoisted_45 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Pin Code : ", -1
  /* HOISTED */
  );
});

var _hoisted_47 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_48 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Mobile Number : ", -1
  /* HOISTED */
  );
});

var _hoisted_50 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Emergency Contact : ", -1
  /* HOISTED */
  );
});

var _hoisted_52 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_53 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Email : ", -1
  /* HOISTED */
  );
});

var _hoisted_55 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Username : ", -1
  /* HOISTED */
  );
});

var _hoisted_57 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_58 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " National ID : ", -1
  /* HOISTED */
  );
});

var _hoisted_60 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_61 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Password : ", -1
  /* HOISTED */
  );
});

var _hoisted_63 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Confirm Password : ", -1
  /* HOISTED */
  );
});

var _hoisted_65 = {
  "class": "pt-5 flex justify-end items-center space-x-3"
};

var _hoisted_66 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 h-12 w-12 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "far fa-times-circle"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_67 = [_hoisted_66];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.image ? $setup.image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png',
    alt: "profile-pic",
    "class": "h-full w-full rounded-full"
  }, null, 8
  /* PROPS */
  , _hoisted_14)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: $setup.image ? $setup.image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'
  }, null, 8
  /* PROPS */
  , _hoisted_15)]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    accept: ".jpeg, .png, .jpg",
    "class": "absolute h-40 w-40",
    style: {
      "opacity": "0"
    },
    onChange: _cache[0] || (_cache[0] = function () {
      return $setup.uploadDevPhoto && $setup.uploadDevPhoto.apply($setup, arguments);
    })
  }, null, 32
  /* HYDRATE_EVENTS */
  )])]), _hoisted_18]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    placeholder: "Facebook Url",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.fb = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.fb]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    placeholder: "Twitter Url",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.twitter = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.twitter]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    placeholder: "Linkedin Url",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.linkedin = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.linkedin]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "First Name",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.f_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.f_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Last name",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.l_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.l_name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Street Address 1",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.address_1 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.address_1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Street Address 2",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.address_2 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.address_2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Town/City",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.city = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.city]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "Pin Code",
    min: "4",
    max: "5",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.zip = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.zip]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "Mobile Number",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.phone = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.phone, void 0, {
    number: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "Emergency Contact",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.e_phone = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.e_phone, void 0, {
    number: true
  }]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    placeholder: "Email",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.email = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Username",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.u_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.u_name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "123 123 1234",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    min: "10",
    max: "17",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.nid = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.nid]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    placeholder: "Password",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.password = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    placeholder: "Confirm Password",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.c_password = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.c_password]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-100 text-red-600 px-3 py-2 rounded-lg transform duration-700 hover:bg-red-600 hover:text-red-100",
    onClick: _cache[17] || (_cache[17] = function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    })
  }, " Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-3 py-2 rounded-lg transform duration-700 bg-green-100 text-green-600 hover:bg-green-600 hover:text-green-100 disabled:opacity-50",
    onClick: _cache[18] || (_cache[18] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, " Submit ")])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_67)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4bab7c40"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "80rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "min-height": "35rem",
    "max-height": "55rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-gray-200 uppercase font-nunito tracking-wide"
  }, " Add Developer ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "flex flex-col lg:flex-row"
};
var _hoisted_8 = {
  "class": "flex w-full lg:w-80 flex-col space-y-4 px-3 py-3"
};
var _hoisted_9 = {
  "class": "px-3 py-5 rounded-lg flex flex-1 flex-col"
};
var _hoisted_10 = {
  "class": "flex flex-col justify-center items-center"
};
var _hoisted_11 = {
  "class": "h-40 w-40"
};
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_14 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Facebook Url : ", -1
  /* HOISTED */
  );
});

var _hoisted_16 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_17 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Twitter Url : ", -1
  /* HOISTED */
  );
});

var _hoisted_19 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_20 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Linkedin Url : ", -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "flex w-full lg:flex-1 w-ful flex-col space-y-4 px-3 py-3"
};
var _hoisted_23 = {
  "class": "px-3 lg:py-5 rounded-lg flex flex-1 flex-col"
};

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-4 flex flex-col space-y-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-lg"
  }, " New Developer Information ")])], -1
  /* HOISTED */
  );
});

var _hoisted_25 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_26 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " First Name : ", -1
  /* HOISTED */
  );
});

var _hoisted_28 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Last name : ", -1
  /* HOISTED */
  );
});

var _hoisted_30 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_31 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Street Address 1 : ", -1
  /* HOISTED */
  );
});

var _hoisted_33 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_34 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Street Address 2 : ", -1
  /* HOISTED */
  );
});

var _hoisted_36 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_37 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Town/City : ", -1
  /* HOISTED */
  );
});

var _hoisted_39 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Pin Code : ", -1
  /* HOISTED */
  );
});

var _hoisted_41 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_42 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Mobile Number : ", -1
  /* HOISTED */
  );
});

var _hoisted_44 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Emergency Contact : ", -1
  /* HOISTED */
  );
});

var _hoisted_46 = {
  "class": "grid grid-cols-1 lg:grid-cols-2 gap-3"
};
var _hoisted_47 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Email : ", -1
  /* HOISTED */
  );
});

var _hoisted_49 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Username : ", -1
  /* HOISTED */
  );
});

var _hoisted_51 = {
  "class": "grid grid-cols-1 gap-3"
};
var _hoisted_52 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " National ID : ", -1
  /* HOISTED */
  );
});

var _hoisted_54 = {
  "class": "pt-5 flex justify-end items-center space-x-3"
};

var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 h-12 w-12 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "far fa-times-circle"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_56 = [_hoisted_55];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.image ? $setup.image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png',
    alt: "profile-pic",
    "class": "h-full w-full rounded-full"
  }, null, 8
  /* PROPS */
  , _hoisted_12)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    placeholder: "Facebook Url",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.fb = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.fb]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    placeholder: "Twitter Url",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.twitter = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.twitter]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    placeholder: "Linkedin Url",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.linkedin = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.linkedin]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "First Name",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.f_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.f_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Last name",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.l_name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.l_name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Street Address 1",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.address_1 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.address_1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Street Address 2",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.address_2 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.address_2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Town/City",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.city = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.city]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "Pin Code",
    min: "4",
    max: "5",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.zip = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.zip]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "Mobile Number",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.phone = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.phone, void 0, {
    number: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "Emergency Contact",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.e_phone = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.e_phone, void 0, {
    number: true
  }]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    placeholder: "Email",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-600 bg-gray-300 cursor-not-allowed leading-tight focus:outline-none",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.email = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Username",
    "class": "shadow border rounded-lg w-full py-4 px-5 leading-tight text-gray-600 bg-gray-300 cursor-not-allowed focus:outline-none",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.u_name = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.u_name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    placeholder: "123 123 1234",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    min: "10",
    max: "17",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.nid = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.nid]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-100 text-red-600 px-3 py-2 rounded-lg transform duration-700 hover:bg-red-600 hover:text-red-100",
    onClick: _cache[14] || (_cache[14] = function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    })
  }, " Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-3 py-2 rounded-lg transform duration-700 bg-green-100 text-green-600 hover:bg-green-600 hover:text-green-100 disabled:opacity-50",
    onClick: _cache[15] || (_cache[15] = function () {
      return $options.update && $options.update.apply($options, arguments);
    })
  }, " Update ")])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_56)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1faa6d84"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "55rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "height": "18rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-gray-200 uppercase font-nunito tracking-wide"
  }, " Add New Permission ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "w-full px-2"
};
var _hoisted_8 = {
  "class": "grid grid-cols-1"
};
var _hoisted_9 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Permission Title : ", -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "py-5 flex justify-end items-center space-x-3"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 h-12 w-12 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "far fa-times-circle"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Title",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.permissionTitle = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.permissionTitle]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-100 text-red-600 px-3 py-2 rounded-lg transform duration-700 hover:bg-red-600 hover:text-red-100",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    })
  }, " Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-3 py-2 rounded-lg transform duration-700 bg-green-100 text-green-600 hover:bg-green-600 hover:text-green-100 disabled:opacity-50",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, " Submit ")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_13)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=template&id=14732f75&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=template&id=14732f75&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-14732f75"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "55rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "height": "18rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-gray-200 uppercase font-nunito tracking-wide"
  }, " Edit Permission ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "w-full px-2"
};
var _hoisted_8 = {
  "class": "grid grid-cols-1"
};
var _hoisted_9 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Permission Title : ", -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "py-5 flex justify-end items-center space-x-3"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 h-12 w-12 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "far fa-times-circle"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Title",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.permissionTitle = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.permissionTitle]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-100 text-red-600 px-3 py-2 rounded-lg transform duration-700 hover:bg-red-600 hover:text-red-100",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    })
  }, " Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-3 py-2 rounded-lg transform duration-700 bg-green-100 text-green-600 hover:bg-green-600 hover:text-green-100 disabled:opacity-50",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.update && $options.update.apply($options, arguments);
    })
  }, " Update ")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_13)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=template&id=b1bc08f6":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=template&id=b1bc08f6 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "55rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "min-height": "35rem",
    "max-height": "55rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};
var _hoisted_6 = {
  "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-gray-200 uppercase font-nunito tracking-wide"
}, " Permissions ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-plus"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Add Permission", -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_8, _hoisted_9];
var _hoisted_11 = {
  "class": "w-full px-2"
};
var _hoisted_12 = {
  "class": "mt-10 flex items-center justify-start bg-gray-50 rounded-xl shadow border border-blue-300 w-6/12"
};
var _hoisted_13 = {
  "class": "bg-white shadow-md rounded my-6"
};
var _hoisted_14 = {
  "class": "w-full table-auto"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-gray-500 text-gray-50 uppercase text-sm leading-normal w-full"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-6 py-3 text-center"
}, "Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-6 py-3 text-center"
}, "Slug"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-6 py-3 text-center"
}, "Actions")])], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "text-gray-600 text-sm font-light"
};
var _hoisted_17 = {
  "class": "px-6 py-3 text-gray-600 font-lg font-semibold text-center"
};
var _hoisted_18 = {
  "class": "text-center"
};
var _hoisted_19 = {
  "class": "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold"
};
var _hoisted_20 = {
  "class": "py-3 px-6 text-center"
};
var _hoisted_21 = {
  "class": "flex item-center justify-center space-x-2"
};
var _hoisted_22 = ["onClick"];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = ["onClick"];

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_27 = [_hoisted_26];

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-gray-200 h-12 w-12 rounded-full"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-times-circle"
})])], -1
/* HOISTED */
);

var _hoisted_29 = [_hoisted_28];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SearchIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchIcon");

  var _component_AddPermission = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddPermission");

  var _component_EditPermission = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditPermission");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "blue-button text-xs font-semibold",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.addPermissionModal = true;
    })
  }, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Search permission..",
    "class": "w-full px-4 py-3 rounded-xl text-gray-700 tracking-wide focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.query = $event;
    }),
    onKeyup: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    }, ["enter"]))
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.query]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer",
    onClick: _cache[3] || (_cache[3] = function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchIcon, {
    "class": "h-4 w-4 xl:h-7 xl:w-7 text-gray-700 mr-4"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.permissions, function (permission, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index,
      "class": "border-b border-gray-200 transform duration-700 cursor-pointer hover:bg-blue-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission.slug), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.openEditModal(permission.id);
      }, ["prevent"])
    }, _hoisted_24, 8
    /* PROPS */
    , _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deletePermission(permission.id);
      }, ["prevent"])
    }, _hoisted_27, 8
    /* PROPS */
    , _hoisted_25)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_29)])]), $setup.addPermissionModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AddPermission, {
    key: 0,
    onClose: _cache[5] || (_cache[5] = function ($event) {
      return $setup.addPermissionModal = false;
    }),
    onReload: $setup.reloadPermissions
  }, null, 8
  /* PROPS */
  , ["onReload"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.editPermissionModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_EditPermission, {
    key: 1,
    permission: $setup.permissionId,
    onClose: _cache[6] || (_cache[6] = function ($event) {
      return $setup.editPermissionModal = false;
    }),
    onReload: $setup.reloadPermissions
  }, null, 8
  /* PROPS */
  , ["permission", "onReload"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=template&id=7f425243&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=template&id=7f425243&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7f425243"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "55rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "min-height": "35rem",
    "max-height": "55rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};
var _hoisted_6 = {
  "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
};
var _hoisted_7 = {
  "class": "text-gray-200 uppercase font-nunito tracking-wide"
};
var _hoisted_8 = {
  "class": "w-full px-2"
};
var _hoisted_9 = {
  "class": "grid grid-cols-1"
};
var _hoisted_10 = {
  "class": "mt-4 flex flex-col space-y-1"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "ml-2 text-gray-700 font-nunito text-md"
  }, " Role Title : ", -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "mt-10 flex items-center justify-start bg-gray-50 rounded-xl shadow border border-blue-300 w-6/12"
};
var _hoisted_13 = {
  "class": "bg-white shadow-md rounded my-6"
};
var _hoisted_14 = {
  "class": "w-full table-auto"
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-gray-500 text-gray-50 uppercase text-sm leading-normal w-full"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-6 py-3 text-center"
  }, "Permissions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-6 py-3 text-center"
  }, "Allow/Deny")])], -1
  /* HOISTED */
  );
});

var _hoisted_16 = {
  "class": "text-gray-600 text-sm font-light"
};
var _hoisted_17 = {
  "class": "px-6 py-3 text-gray-600 font-lg font-semibold"
};
var _hoisted_18 = {
  "class": "text-center"
};
var _hoisted_19 = ["value", "id"];
var _hoisted_20 = ["value", "id"];
var _hoisted_21 = {
  "class": "py-5 flex justify-end items-center space-x-3"
};

var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 h-12 w-12 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "far fa-times-circle"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_23 = [_hoisted_22];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SearchIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_7, " Edit Role# " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.role.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Title",
    "class": "shadow border rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.roleTitle = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.roleTitle]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Search permission..",
    "class": "w-full px-4 py-3 rounded-xl text-gray-700 tracking-wide focus:outline-none focus:border-blue-300",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.query = $event;
    }),
    onKeyup: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    }, ["enter"]))
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.query]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer",
    onClick: _cache[3] || (_cache[3] = function () {
      return $setup.searchIt && $setup.searchIt.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchIcon, {
    "class": "h-4 w-4 xl:h-7 xl:w-7 text-gray-700 mr-4"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.permissions, function (permission, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index,
      "class": "border-b border-gray-200 transform duration-700 cursor-pointer hover:bg-blue-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [!$setup.isInSelectedPermissions(permission.id) ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
      key: 0,
      type: "checkbox",
      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
        return $setup.selectedPermissions = $event;
      }),
      value: permission.id,
      id: index
    }, null, 8
    /* PROPS */
    , _hoisted_19)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.selectedPermissions]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
      key: 1,
      type: "checkbox",
      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
        return $setup.selectedPermissions = $event;
      }),
      value: permission.id,
      id: index,
      checked: ""
    }, null, 8
    /* PROPS */
    , _hoisted_20)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.selectedPermissions]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-100 text-red-600 px-3 py-2 rounded-lg transform duration-700 hover:bg-red-600 hover:text-red-100",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    })
  }, " Cancel "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-3 py-2 rounded-lg transform duration-700 bg-green-100 text-green-600 hover:bg-green-600 hover:text-green-100 disabled:opacity-50",
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.update && $options.update.apply($options, arguments);
    })
  }, " Update ")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_23)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=template&id=19fba05a&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=template&id=19fba05a&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-19fba05a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "fixed inset-0 w-full h-screen flex items-center justify-center z-50 bg-dashboard-modal"
};
var _hoisted_2 = {
  "class": "relative",
  style: {
    "min-width": "30rem",
    "max-width": "55rem"
  }
};
var _hoisted_3 = {
  "class": "bg-gray-200 rounded-xl shadow-2xl shadow-child-nav-active p-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-dashboard-scroll-stick scrollbar-track-gray-200",
  style: {
    "min-height": "35rem",
    "max-height": "55rem"
  }
};
var _hoisted_4 = {
  "class": "grid grid-cols-1 gap-6"
};
var _hoisted_5 = {
  "class": "bg-white rounded-lg overflow-hidden"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-900 px-5 py-5 flex justify-between items-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-gray-200 uppercase font-nunito tracking-wide"
  }, " Roles ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "w-full px-2"
};
var _hoisted_8 = {
  "class": "bg-white shadow-md rounded my-6"
};
var _hoisted_9 = {
  "class": "w-full table-fixed"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-gray-500 text-gray-50 uppercase text-sm leading-normal w-full"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-2 text-center",
    style: {
      "width": "7%"
    }
  }, "SL#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-6 py-3 text-left",
    style: {
      "width": "15%"
    }
  }, "Role"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-6 py-3 text-center",
    style: {
      "width": "65%"
    }
  }, "Permissions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "px-6 py-3 text-center",
    style: {
      "width": "13%"
    }
  }, "Actions")])], -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "text-gray-600 text-sm font-light"
};
var _hoisted_12 = {
  "class": "text-center font-bold text-xl"
};
var _hoisted_13 = {
  "class": "py-3 px-6 text-center"
};
var _hoisted_14 = {
  "class": "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold"
};
var _hoisted_15 = {
  "class": "px-6 py-3 text-left"
};
var _hoisted_16 = {
  "class": "grid grid-cols-3 gap-1"
};
var _hoisted_17 = {
  "class": "py-3 px-6 text-center"
};
var _hoisted_18 = {
  "class": "flex item-center justify-center space-x-2"
};
var _hoisted_19 = ["onClick"];

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
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

var _hoisted_21 = [_hoisted_20];

var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "relative"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 h-12 w-12 rounded-full"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "far fa-times-circle"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_23 = [_hoisted_22];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_EditRole = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditRole");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.roles, function (role, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index,
      "class": "border-b border-gray-200 transform duration-700 cursor-pointer hover:bg-blue-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(role.title), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(role.permissions, function (permission, index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        "class": "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold text-center",
        key: index
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission.slug), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.openEditModal(role.id);
      }, ["prevent"])
    }, _hoisted_21, 8
    /* PROPS */
    , _hoisted_19)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 right-0 text-4xl transform -translate-y-2.5 translate-x-1.5 cursor-pointer text-gray-900",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleClose && $options.handleClose.apply($options, arguments);
    }, ["prevent"]))
  }, _hoisted_23)])]), $setup.editRoleModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_EditRole, {
    key: 0,
    role: $setup.editRoleId,
    onReload: $setup.reload,
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return $setup.editRoleModal = false;
    })
  }, null, 8
  /* PROPS */
  , ["role", "onReload"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1024px) {\ntable[data-v-2440c598] {\n    display: inline-table !important;\n}\nthead tr[data-v-2440c598]:not(:first-child) {\n    display: none;\n}\n.custom-padding-action[data-v-2440c598] {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n}\n.custom-padding-action[data-v-2440c598] {\n  padding-top: 0.813rem;\n  padding-bottom: 0.813rem;\n}\ntd[data-v-2440c598]:not(:last-child) {\n  border-bottom: 0;\n}\nth[data-v-2440c598]:not(:last-child) {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[data-v-9d41fa4e]::-webkit-outer-spin-button,\ninput[data-v-9d41fa4e]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.choose_file[data-v-9d41fa4e] {\n  position: relative;\n  display: inline-block;\n  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;\n  color: #7f7f7f;\n  margin-top: 2px;\n  background: white;\n}\n.choose_file input[type=file][data-v-9d41fa4e] {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[data-v-4bab7c40]::-webkit-outer-spin-button,\ninput[data-v-4bab7c40]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.choose_file[data-v-4bab7c40] {\n  position: relative;\n  display: inline-block;\n  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;\n  color: #7f7f7f;\n  margin-top: 2px;\n  background: white;\n}\n.choose_file input[type=file][data-v-4bab7c40] {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[data-v-1faa6d84]::-webkit-outer-spin-button,\ninput[data-v-1faa6d84]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.choose_file[data-v-1faa6d84] {\n  position: relative;\n  display: inline-block;\n  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;\n  color: #7f7f7f;\n  margin-top: 2px;\n  background: white;\n}\n.choose_file input[type=file][data-v-1faa6d84] {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[data-v-14732f75]::-webkit-outer-spin-button,\ninput[data-v-14732f75]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.choose_file[data-v-14732f75] {\n  position: relative;\n  display: inline-block;\n  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;\n  color: #7f7f7f;\n  margin-top: 2px;\n  background: white;\n}\n.choose_file input[type=file][data-v-14732f75] {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[data-v-7f425243]::-webkit-outer-spin-button,\ninput[data-v-7f425243]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.choose_file[data-v-7f425243] {\n  position: relative;\n  display: inline-block;\n  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;\n  color: #7f7f7f;\n  margin-top: 2px;\n  background: white;\n}\n.choose_file input[type=file][data-v-7f425243] {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[data-v-19fba05a]::-webkit-outer-spin-button,\ninput[data-v-19fba05a]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.choose_file[data-v-19fba05a] {\n  position: relative;\n  display: inline-block;\n  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;\n  color: #7f7f7f;\n  margin-top: 2px;\n  background: white;\n}\n.choose_file input[type=file][data-v-19fba05a] {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_style_index_0_id_2440c598_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_style_index_0_id_2440c598_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_style_index_0_id_2440c598_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_style_index_0_id_9d41fa4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_style_index_0_id_9d41fa4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_style_index_0_id_9d41fa4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_style_index_0_id_4bab7c40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_style_index_0_id_4bab7c40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_style_index_0_id_4bab7c40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_style_index_0_id_1faa6d84_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_style_index_0_id_1faa6d84_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_style_index_0_id_1faa6d84_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_style_index_0_id_14732f75_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_style_index_0_id_14732f75_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_style_index_0_id_14732f75_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_style_index_0_id_7f425243_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_style_index_0_id_7f425243_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_style_index_0_id_7f425243_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_style_index_0_id_19fba05a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_style_index_0_id_19fba05a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_style_index_0_id_19fba05a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/dev/screens/access_management/AccessManagement.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/AccessManagement.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccessManagement_vue_vue_type_template_id_2440c598_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessManagement.vue?vue&type=template&id=2440c598&scoped=true */ "./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=template&id=2440c598&scoped=true");
/* harmony import */ var _AccessManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessManagement.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=script&lang=js");
/* harmony import */ var _AccessManagement_vue_vue_type_style_index_0_id_2440c598_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AccessManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AccessManagement_vue_vue_type_template_id_2440c598_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2440c598"],['__file',"resources/js/dev/screens/access_management/AccessManagement.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/AddDeveloper.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDeveloper_vue_vue_type_template_id_9d41fa4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true */ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true");
/* harmony import */ var _AddDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeveloper.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=script&lang=js");
/* harmony import */ var _AddDeveloper_vue_vue_type_style_index_0_id_9d41fa4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AddDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddDeveloper_vue_vue_type_template_id_9d41fa4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9d41fa4e"],['__file',"resources/js/dev/screens/access_management/devs/AddDeveloper.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/EditDeveloper.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditDeveloper_vue_vue_type_template_id_4bab7c40_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true */ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true");
/* harmony import */ var _EditDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDeveloper.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=script&lang=js");
/* harmony import */ var _EditDeveloper_vue_vue_type_style_index_0_id_4bab7c40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EditDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditDeveloper_vue_vue_type_template_id_4bab7c40_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4bab7c40"],['__file',"resources/js/dev/screens/access_management/devs/EditDeveloper.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/AddPermission.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddPermission_vue_vue_type_template_id_1faa6d84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true */ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true");
/* harmony import */ var _AddPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPermission.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=script&lang=js");
/* harmony import */ var _AddPermission_vue_vue_type_style_index_0_id_1faa6d84_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AddPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddPermission_vue_vue_type_template_id_1faa6d84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1faa6d84"],['__file',"resources/js/dev/screens/access_management/permissions/AddPermission.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/EditPermission.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditPermission_vue_vue_type_template_id_14732f75_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPermission.vue?vue&type=template&id=14732f75&scoped=true */ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=template&id=14732f75&scoped=true");
/* harmony import */ var _EditPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPermission.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=script&lang=js");
/* harmony import */ var _EditPermission_vue_vue_type_style_index_0_id_14732f75_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EditPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditPermission_vue_vue_type_template_id_14732f75_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-14732f75"],['__file',"resources/js/dev/screens/access_management/permissions/EditPermission.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermissionsModal_vue_vue_type_template_id_b1bc08f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionsModal.vue?vue&type=template&id=b1bc08f6 */ "./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=template&id=b1bc08f6");
/* harmony import */ var _PermissionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionsModal.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PermissionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PermissionsModal_vue_vue_type_template_id_b1bc08f6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/dev/screens/access_management/permissions/PermissionsModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/EditRole.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/EditRole.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditRole_vue_vue_type_template_id_7f425243_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditRole.vue?vue&type=template&id=7f425243&scoped=true */ "./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=template&id=7f425243&scoped=true");
/* harmony import */ var _EditRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRole.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=script&lang=js");
/* harmony import */ var _EditRole_vue_vue_type_style_index_0_id_7f425243_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EditRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditRole_vue_vue_type_template_id_7f425243_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7f425243"],['__file',"resources/js/dev/screens/access_management/roles/EditRole.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/RolesModal.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/RolesModal.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RolesModal_vue_vue_type_template_id_19fba05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolesModal.vue?vue&type=template&id=19fba05a&scoped=true */ "./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=template&id=19fba05a&scoped=true");
/* harmony import */ var _RolesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolesModal.vue?vue&type=script&lang=js */ "./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=script&lang=js");
/* harmony import */ var _RolesModal_vue_vue_type_style_index_0_id_19fba05a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true */ "./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_RolesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RolesModal_vue_vue_type_template_id_19fba05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-19fba05a"],['__file',"resources/js/dev/screens/access_management/roles/RolesModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccessManagement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeveloper.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditDeveloper.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddPermission.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditPermission.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PermissionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PermissionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PermissionsModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditRole.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RolesModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=template&id=2440c598&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=template&id=2440c598&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_template_id_2440c598_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_template_id_2440c598_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccessManagement.vue?vue&type=template&id=2440c598&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=template&id=2440c598&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_template_id_9d41fa4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_template_id_9d41fa4e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=template&id=9d41fa4e&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_template_id_4bab7c40_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_template_id_4bab7c40_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=template&id=4bab7c40&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_template_id_1faa6d84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_template_id_1faa6d84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=template&id=1faa6d84&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=template&id=14732f75&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=template&id=14732f75&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_template_id_14732f75_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_template_id_14732f75_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditPermission.vue?vue&type=template&id=14732f75&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=template&id=14732f75&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=template&id=b1bc08f6":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=template&id=b1bc08f6 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PermissionsModal_vue_vue_type_template_id_b1bc08f6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PermissionsModal_vue_vue_type_template_id_b1bc08f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PermissionsModal.vue?vue&type=template&id=b1bc08f6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/PermissionsModal.vue?vue&type=template&id=b1bc08f6");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=template&id=7f425243&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=template&id=7f425243&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_template_id_7f425243_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_template_id_7f425243_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditRole.vue?vue&type=template&id=7f425243&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=template&id=7f425243&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=template&id=19fba05a&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=template&id=19fba05a&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_template_id_19fba05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_template_id_19fba05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RolesModal.vue?vue&type=template&id=19fba05a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=template&id=19fba05a&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccessManagement_vue_vue_type_style_index_0_id_2440c598_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/AccessManagement.vue?vue&type=style&index=0&id=2440c598&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddDeveloper_vue_vue_type_style_index_0_id_9d41fa4e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/AddDeveloper.vue?vue&type=style&index=0&id=9d41fa4e&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditDeveloper_vue_vue_type_style_index_0_id_4bab7c40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/devs/EditDeveloper.vue?vue&type=style&index=0&id=4bab7c40&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddPermission_vue_vue_type_style_index_0_id_1faa6d84_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/AddPermission.vue?vue&type=style&index=0&id=1faa6d84&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditPermission_vue_vue_type_style_index_0_id_14732f75_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/permissions/EditPermission.vue?vue&type=style&index=0&id=14732f75&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditRole_vue_vue_type_style_index_0_id_7f425243_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/EditRole.vue?vue&type=style&index=0&id=7f425243&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesModal_vue_vue_type_style_index_0_id_19fba05a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/dev/screens/access_management/roles/RolesModal.vue?vue&type=style&index=0&id=19fba05a&lang=scss&scoped=true");


/***/ })

}]);