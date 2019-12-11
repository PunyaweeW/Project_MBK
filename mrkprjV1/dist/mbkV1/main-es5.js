function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddItemAddItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \n<h2>เพิ่มอะไหล่ใหม่</h2>\n<p>กรุณากรอกข้อมูลอะไหล่สำหรับอะไหล่ใหม่ในคลังอะไหล่</p>\n \n<div class=\"container\">\n<!-- sparepart registeration form     -->\n  <form   #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" ngNativeValidate>\n  <!-- choose group for sparepart-->\n  <div id=\"row\">\n    <div id=\"col-25\" class=\"form-group\">\n      <label for=\"group\">กลุ่มอะไหล่</label>\n    </div>\n  \n      <select id=\"group\" name=\"group\" class=\"form-control\" ngModel>\n        <option value=\"01\" id =\"internals\">อะไหล่ภายใน</option>\n        <option value=\"02\" id = \"electrics\">ระบบไฟฟ้า</option>\n        <option value=\"03\" id = \"externals\">อะไหล่ภายนอก</option>\n        <option value=\"04\" id =  \"generals\">อะไหล่ทั่วไป</option>\n      </select>    \n \n  </div>\n  <!--enter name of sparepart-->\n  <div id=\"row\" class=\"form-group\">\n  \n      <label for=\"name\">ชื่ออะไหล่</label>\n \n      <input type=\"text\" id=\"name\" name=\"name\"  class=\"form-control\" placeholder=\"ชื่ออะไหล่ เช่น ยางนอก ยางใน กระจกหน้า\" (change)=\"updateDropdown()\"ngModel  required>\n  \n  </div>\n\n  <!--enter brand of sparepart-->\n  <div id=\"row\" class=\"form-group\" >\n     \n      <label  >ยี่ห้อ</label> \n      <label for=\"normalbrand\">ทั่วไป</label>\n      <input type=\"radio\"  name=\"brand\" value=\"normal\" (click)=\"setNormalBrand()\"  checked>\n      <select id=\"normalBrand\"  name=\"normalBrand\" class=\"form-control\" [disabled]=\"notCustomBrand\"  ngModel>\n          <option [value]=\"brand.code\" *ngFor=\"let brand of brandList\">{{brand[\"brand\"]}}</option>\n      </select>\n          \n     <label for=\"customBrand\">อื่น ๆ</label><input type=\"radio\" name=\"brand\" value=\"normal\" (click)=\"setCustomBrand()\"  >\n     <input type=\"text\" id= \"customBrand\" name =\"customBrand\" class=\"form-control\" [disabled]=\"customBrand\" ngModel>\n       \n   \n  </div>\n\n  <!--enter version of sparepart-->\n  <div id=\"row\" class=\"form-group\">\n  \n      <label for=\"version\">รุ่น (รุ่นของรถ/อะไหล่)</label>\n      <label>รุ่นปกติ</label>\n      <input type=\"radio\"  name=\"vers\" value=\"normal\" (click)=\"setNormalVersion()\"  checked>\n      <select id=\"normalVersion\" name =\"normalVersion\"class=\"form-control\" [disabled]=\"notCustomVersion\" ngModel>\n        <option [value]=\"version.code\" *ngFor=\"let version of versionList\">{{version.name}}</option>\n    </select>\n    <label>รุ่นอื่นๆ</label>\n      <input type=\"radio\"  name=\"vers\" value=\"custom\" (click)=\"setCustomVersion()\">   \n    <input type=\"text\" id=\"customVersion\" name=\"customVersion\" class=\"form-control\" [disabled]=\"customVersion\" ngModel placeholder=\"ระบุรุ่นของอะไหล่\">\n   \n     <label>ข้อมูลจำเพาะ</label>\n     <label for=\"version\">รุ่น (รุ่นของรถ/อะไหล่)</label>\n     <label>ปกติ</label>\n     <input type=\"radio\"  name=\"specs\" value=\"normal\" (click)=\"setNormalSpecs()\"  checked>\n     <select id=\"normalSpecs\" name =\"normalSpecs\"class=\"form-control\" [disabled]=\"notCustomSpecs\" ngModel>\n       <option [value]=\"specs.code\" *ngFor=\"let specs of specificList\">{{specs.name}}</option>\n   </select>\n   <label>อื่น ๆ</label>\n     <input type=\"radio\"  name=\"specs\" value=\"custom\" (click)=\"setCustomSpecs()\">   \n   <input type=\"text\" id=\"customSpecs\" name=\"customSpecs\" class=\"form-control\" [disabled]=\"customSpecs\" ngModel placeholder=\"ระบุข้อมูลจำเพาะ\">\n \n  </div>\n\n  <!--enter sparepart barcode(optional)-->\n  <div id=\"row\" class=\"form-group\">\n \n      <label for=\"barcode\">รหัสแท่ง</label>\n      <input type=\"text\" id=\"barcode\" name=\"barcode\" class=\"form-control\" ngModel placeholder=\"ระบุรหัสแท่งของอะไหล่\">\n \n  </div>\n\n  <!--enter purchase price of sparepart-->\n  <div id=\"row\" class=\"form-group\">\n \n      <label for=\"purchase\">ราคาซื้อ</label>\n \n      <input type=\"text\" id=\"purchase\" name=\"purchase\" class=\"form-control\"placeholder=\"ระบุราคาซื้อ (บาท)\" ngModel required>\n   \n  </div>\n\n  <!--enter price for sale of the sparepart-->\n  <div class=\"row\" class=\"form-group\">\n \n      <label for=\"price\">ราคาขาย</label>\n \n      <input type=\"text\" id=\"price\" name=\"price\" class=\"form-control\" placeholder=\"ระบุราคาขาย (บาท)\" ngModel required>\n \n  </div>\n  <!--enter initial number of that sparepart-->\n  <div id=\"row\" class=\"form-group\">\n    \n      <label for=\"numberOf\">จำนวน</label>\n   \n      <input type=\"text\" id=\"numberOf\" name=\"numberOf\" class=\"form-control\" ngModel placeholder=\"จำนวนสำหรับการเพิ่มครั้งแรก\">\n \n  </div>\n  <!--submit the form-->\n     <br>\n    <input type=\"submit\" value=\"บันทึก\"  >\n \n  </form>\n\n  <!--(click)=\"addItem()\"-->\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n \n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  </div>\n <app-side-nav></app-side-nav>\n\n \n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChildChildComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>child works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>รายการล่าสุดรายวัน</h3>\n\n<div class=\"container\">\n    \n<div class=\"card-box\">\n<!--updating function for increasing  the number of specific sparepart -->   \n<form id=\"updateForm\">\n<h5>Update</h5>\nกลุ่มอะไหล่ <select id=\"pgroup\" name=\"pgroup\">\n            <option value=\"00\">internals</option>\n            <option value=\"03\">externals</option>\n            <option value=\"02\">electrics</option>\n            <option value=\"04\">generals</option>\n         </select>\n<br>      \nรหัสอะไหล่  <input  type=\"text\" id=\"part_code\" (change)=\"checkCode()\">    \n<br>\nจำนวน    <input  type=\"text\" id=\"amount\">\n<br>\n<input type=\"button\" (click)=\"updateAmount()\" value=\"update\">\n</form>\n</div>\n\n<!--sales function for sale sparepart(s)-->\n<div class=\"card-box\">   \n    <form id=\"updateForm\">\n    <h5>Sale</h5>\n    กลุ่มอะไหล่ <select id=\"sale_group\" name=\"pgroup\">\n                    <option value=\"00\">internals</option>\n                    <option value=\"03\">externals</option>\n                    <option value=\"02\">electrics</option>\n                    <option value=\"04\">generals</option>\n    </select>\n    <br>      \n    รหัสอะไหล่  <input  type=\"text\" id=\"sale_code\">\n    <br>    \n    จำนวน    <input  type=\"text\" id=\"sale_amount\">\n    <br>\n    <input type=\"button\" (click)=\"salePart()\" value=\"sale\">\n     </form>\n</div>\n<div class=\"card-box\" id=\"partInfomation\">ข้อมูลอะไหล่\n   <div id=\"partInfo\"></div> \n</div>\n<div class=\"card-box\" id=\"report\">รายงานข้อมูล\n    <div id=\"reportGenerator\"><button>report</button></div> \n </div>\n \n</div>\n  <div class=\"container\">\n    <div id=\"chart\"class=\"card-box\">\n        <chart [type]=\"typeExternalsChart\" [data]=\"externalsChart\" [options]=\"optionsExternalsChart\"></chart>\n    </div>\n    <div id=\"chart\"class=\"card-box\">\n        <chart [type]=\"typeExternalsChart\" [data]=\"internalsChart\" [options]=\"optionsExternalsChart\"></chart>\n    </div>\n    <div id=\"chart\"class=\"card-box\">\n        <chart [type]=\"typeExternalsChart\" [data]=\"electricsChart\" [options]=\"optionsExternalsChart\"></chart>\n    </div>\n    <div id=\"chart\"class=\"card-box\">\n        <chart [type]=\"typeExternalsChart\" [data]=\"generalsChart\" [options]=\"optionsExternalsChart\"></chart>\n    </div>\n</div>\n \n<!-- <div class=bottom>\n<mat-card>ผ้าดิสเบรคหน้า AMTEX WAVE 125 ยอดขาย 50 ชิ้น</mat-card>\n<mat-card>แบตเตอรรี่แห้ง LEO YTZ 5 ยอดขาย 40 ชิ้น</mat-card>\n<mat-card>โซ่ดำพระอาทิตย์ ยอดขาย 30 ชิ้น</mat-card>\n\n</div> -->\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/log/log.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log/log.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w3-container\">\n        <h2>ประวัติ</h2>\n        <ejs-grid #gridView [dataSource]='logging' textAlign='Left' height='273px' [searchSettings]='searchSetting' [toolbar]='toolbar' [allowSorting]='true'>\n         <e-columns>\n           \n             <e-column id=\"code\" field='timestamp' headerText='วันและเวลา'   width=90></e-column>\n             <e-column id=\"code\" field='action' headerText='การดำเนินการ' width=90></e-column>\n             \n           \n           </e-columns>\n         </ejs-grid>\n</div>\n      \n\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>แจ้งเตือนอะไหล่ใกล้หมด</h3>\n<!--Show notifications for part that less than 3 units -->\n<div class=\"notify\" >\n     <mat-card *ngFor=\"let notification of notifications\" [ngClass]=\"{orange: notification.numberOf == 3, yellow: notification.numberOf == 2 , red: notification.numberOf ==1}\">\n     ชื่ออะไหล่: {{notification.name}}<br> ยี่ห้อ: {{notification.brand}} <br> รุ่น: {{notification.version}}  <br> คงเหลือ: {{notification.numberOf}}  <br>\n    <button  class=\"closebtn\" (click)='clearNotification(notification)' onclick=\"var card = this.parentElement\n    card.style.opacity = '0'; \n    setTimeout(function(){ card.style.display = 'none'; }, 600);\n  \n    \"  >x</button>\n    </mat-card>\n    \n</div>\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n\n<div class=\"tab\">\n    <button class=\"tablinks\" onclick=\"openCity(event, 'รายงานตามเวลา')\">จำนวนขายสูงสุด</button>\n    <button class=\"tablinks\" onclick=\"openCity(event, 'รายงานยอดขาย')\">รายงานยอดขาย</button>\n    <button class=\"tablinks\" onclick=\"openCity(event, 'นำออก')\">นำออก</button>\n</div>\n\n<div id=\"รายงานตามเวลา\" class=\"tabcontent\">\n    <h3>รายงานตามเวลา</h3>\n    \n  </div>\n  \n  <div id=\"รายงานยอดขาย\" class=\"tabcontent\">\n    <h3>รายงานยอดขาย</h3>\n   </div>\n  \n  <div id=\"นำออก\" class=\"tabcontent\">\n    <h3>นำออก</h3>\n   </div>\n  <div>\n    \n  </div>\n\n \n    <h3>ยอดขายสูงสุด</h3>\n     \n \n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\" igxLayout>\n  <igx-nav-drawer id=\"navigation\" [isOpen]=\"drawerState.open\" [(pin)]=\"drawerState.pin\">\n    <ng-template igxDrawer>\n   \n          <ul class=\"nav\">\n                <li class=\"menuItem\"routerLinkActive=\"active\" *ngFor=\"let item of navItems\" [ngSwitch]=\"item.text\">\n                  <a [routerLink]=\"[item.path]\">\n                       {{item.text}} \n                       <mat-icon matBadge=\"{{ null }}\"matBadgeOverlap=\"false\"*ngSwitchDefault  >{{item.icon}}</mat-icon> \n\n                       <mat-icon [id]=\"[item.text]\"   matBadge=\"{{ notifyNO > 0 ? notifyNO : null }}\"matBadgeOverlap=\"false\"  *ngSwitchCase=\"'Notification'\"  >{{item.icon}}</mat-icon> \n                  </a>\n                </li>\n              </ul>  \n        \n         \n \n    <!--  \n        <igx-switch (ngModelChange)=\"drawer.toggle()\"  [(ngModel)]=\"drawerState.miniTemplate\">\n            Mini variant\n        </igx-switch> -->\n     <!-- <app-child></app-child> -->\n    \n    <!-- <button (click)=\"show()\">show</button>-->\n\n     </ng-template>\n\n   <!--  <ng-template igxDrawerMini *ngIf=\"drawerState.miniTemplate\">\n        <nav>\n            <ul class=\"nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let item of navItems\">\n                  <a [routerLink]=\"[item.path]\">\n                    }<mat-icon>{{item.icon}}</mat-icon>\n                  </a>\n                </li>\n              </ul>\n          \n          <igx-switch (ngModelChange)=\"drawer.toggle()\"  [(ngModel)]=\"drawerState.miniTemplate\">\n         </igx-switch>\n      </nav>\n     \n      </ng-template>\n       -->\n   </igx-nav-drawer>\n  <!--hidden side navigation bar-->\n  <main igxFlex [class.mini-padding]=\"!drawerState.pin && drawerState.miniTemplate\">\n    <span igxButton=\"icon\" igxToggleAction=\"navigation\" (click)=\"show()\">\n      <igx-icon fontSet=\"material\">menu</igx-icon>\n    </span>  \n    <router-outlet></router-outlet>\n  </main>\n \n</div>\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stockpage/stockpage.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stockpage/stockpage.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStockpageStockpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>รายการอะไหล่ในคลัง</h2>\n\n<!-- <div class=\"tab\">\n  <button class=\"tablinks\" onclick=\"openCity(event, 'externals')\">อะไหล่ภายนอก</button>\n  <button class=\"tablinks\" onclick=\"openCity(event, 'internals')\">อะไหล่ภายใน</button>\n  <button class=\"tablinks\" onclick=\"openCity(event, 'electrics')\">ระบบไฟฟ้า</button>\n  <button class=\"tablinks\" onclick=\"openCity(event, 'generals')\">อุปกรณ์ทั่วไป</button>\n</div> -->\n\n<!--Externals part-->\n<!-- <div id=\"externals\" class=\"tabcontent\">\n  <h3>อะไหล่ภายนอก</h3>\n \n    <ejs-grid #gridView [dataSource]='partData' [searchSettings]='searchSettings'  [allowSorting]='true' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>\n      <e-columns>\n          <e-column id=\"code\" field='code' headerText='รหัส' textAlign='Right' width=90></e-column>\n          <e-column id=\"code\" field='name' headerText='ชื่อ' width=90></e-column>\n          <e-column id=\"code\" field='brand' headerText='ยี่ห้อ' textAlign='Right' format='C2' width=90></e-column>\n          <e-column id=\"code\" field='version' headerText='รุ่น' textAlign='Right' format='yMd' width=90></e-column>\n          <e-column id=\"code\" field='purchase' headerText='ราคาซื้อ' textAlign='Right' format='yMd' width=90></e-column>\n          <e-column id=\"code\" field='price' headerText='ราคาขาย' textAlign='Right' format='yMd' width=90></e-column>\n          <e-column id=\"code\" field='number_of' headerText='จำนวน' textAlign='Right' format='yMd' width=90></e-column>      \n          <e-column id=\"code\" field='sales' headerText='ยอดขาย' textAlign='Right' format='yMd' width=90></e-column>      \n         </e-columns>\n      </ejs-grid>\n      <div><button (click)=\"save()\">Save</button></div>\n    </div>\n\n<div id=\"internals\" class=\"tabcontent\">\n    <h3>อะไหล่ภายใน</h3>\n    <ejs-grid #gridView [dataSource]='internals' [searchSettings]='searchSettings'  [allowSorting]='true' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>\n      <e-columns>\n          <e-column id=\"code\" field='code' headerText='รหัส' textAlign='Right' width=90></e-column>\n          <e-column id=\"code\" field='name' headerText='ชื่อ' width=90></e-column>\n          <e-column id=\"code\" field='brand' headerText='ยี่ห้อ' textAlign='Right' format='C2' width=90></e-column>\n          <e-column id=\"code\" field='version' headerText='รุ่น' textAlign='Right' format='yMd' width=90></e-column>\n          <e-column id=\"code\" field='purchase' headerText='ราคาซื้อ' textAlign='Right' format='yMd' width=90></e-column>\n          <e-column id=\"code\" field='price' headerText='ราคาขาย' textAlign='Right' format='yMd' width=90></e-column>\n          <e-column id=\"code\" field='number_of' headerText='จำนวน' textAlign='Right' format='yMd' width=90></e-column>      \n          <e-column id=\"code\" field='sales' headerText='ยอดขาย' textAlign='Right' format='yMd' width=90></e-column>      \n         </e-columns>\n      </ejs-grid>\n      <div><button (click)=\"save()\">Save</button></div>\n\n  </div>\n   -->\n\n\n<!--specify the group of sparepart-->\n<div>\n  <form>\n    เลือกหมวดหมู่อะไหล่:\n    <select id=\"group\" (change)=\"chooseData()\">\n      <option value=\"internals\">อะไหล่ภายใน</option>\n      <option value=\"electrics\">ระบบไฟฟ้า</option>\n      <option value=\"externals\">อะไหล่ภายนอก</option>\n      <option value=\"generals\">อะไหล่ทั่วไป</option>\n    </select>\n  </form>\n\n</div>\n  <!--table of sparepart data--> \n<div id=\"tableGrid\">\n  <ejs-grid #gridView [dataSource]='partData' [searchSettings]='searchSettings'  (rowSelected)='save($event)'  [allowSorting]='true' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>\n    <e-columns>\n      \n        <e-column id=\"code\" field='code' headerText='รหัส' textAlign='Center' width=90></e-column>\n        <e-column id=\"code\" field='name' headerText='ชื่อ' width=90></e-column>\n        <e-column id=\"code\" field='brand' headerText='ยี่ห้อ' textAlign='Center' format='C2' width=90></e-column>\n        <e-column id=\"code\" field='version' headerText='รุ่น' textAlign='Center' format='yMd' width=90></e-column>\n        <e-column id=\"code\" field='purchase' headerText='ราคาซื้อ' textAlign='Center'  width=90></e-column>\n        <e-column id=\"code\" field='price' headerText='ราคาขาย' textAlign='Center'   width=90></e-column>\n        <e-column id=\"code\" field='numberOf' headerText='จำนวน' textAlign='Center'   width=90></e-column>      \n        <e-column id=\"code\" field='sales' headerText='ยอดขาย' textAlign='Center'  width=90></e-column>      \n        <!--<e-column headerText='Commands' width=140 [commands]='commands'></e-column>--> \n      \n      </e-columns>\n    </ejs-grid>\n    <div><button id=\"saveButton\"(click)=\"update()\">Save</button></div>\n</div>\n<!--(rowSelected)='update($event)'-->\n \n ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/add-item/add-item.component.css":
  /*!*************************************************!*\
    !*** ./src/app/add-item/add-item.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddItemAddItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    box-sizing: border-box;\r\n    font-size: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n  p{\r\n    font-size: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n  input[type=text], select, textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 10px;\r\n  resize: vertical;\r\n}\r\n  label {\r\n  padding: 12px 12px 12px 0;\r\n  display: inline-block;\r\n}\r\n  input[type=submit] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n  input[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n  .container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n  height: 500px;\r\n  overflow: scroll;\r\n}\r\n  #col-25 {\r\n  float: left;\r\n  width: 25%;\r\n  margin-top: 6px;\r\n}\r\n  #col-75 {\r\n  float: left;\r\n  width: 75%;\r\n  margin-top: 6px;\r\n}\r\n  /* Clear floats after the columns */\r\n  #row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n  @media screen and (max-width: 600px) {\r\n  .col-25, .col-75, input[type=submit] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0VBQ0Y7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0VBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7RUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtFQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0VBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7QUFDakI7RUFFQSxtQ0FBbUM7RUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtFQUVBLCtJQUErSTtFQUMvSTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4jY29sLTI1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuI2NvbC03NSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4jcm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29sLTI1LCAuY29sLTc1LCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-item/add-item.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add-item/add-item.component.ts ***!
    \************************************************/

  /*! exports provided: AddItemComponent */

  /***/
  function srcAppAddItemAddItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemComponent", function () {
      return AddItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ts-md5/dist/md5 */
    "./node_modules/ts-md5/dist/md5.js");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _assets_versionList_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../assets/versionList.json */
    "./src/assets/versionList.json");

    var _assets_versionList_json__WEBPACK_IMPORTED_MODULE_4___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/versionList.json */
    "./src/assets/versionList.json", 1);
    /* harmony import */


    var _assets_nameList_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../assets/nameList.json */
    "./src/assets/nameList.json");

    var _assets_nameList_json__WEBPACK_IMPORTED_MODULE_5___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/nameList.json */
    "./src/assets/nameList.json", 1);
    /* harmony import */


    var _assets_brandList_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../assets/brandList.json */
    "./src/assets/brandList.json");

    var _assets_brandList_json__WEBPACK_IMPORTED_MODULE_6___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../assets/brandList.json */
    "./src/assets/brandList.json", 1); //import version list json
    // import name list json
    // import brand list  json


    var AddItemComponent =
    /*#__PURE__*/
    function () {
      function AddItemComponent(apiService) {
        _classCallCheck(this, AddItemComponent);

        this.apiService = apiService;
        this.newPart = {
          gid: null,
          code: null,
          pname: null,
          brand: null,
          vers: null,
          purchase: null
        };
        this.brandList = _assets_brandList_json__WEBPACK_IMPORTED_MODULE_6__["brandList"];
        this.nameList = _assets_nameList_json__WEBPACK_IMPORTED_MODULE_5__["nameList"]; /////////////////////////////

        this.notCustomSpecs = false;
        this.customSpecs = true;
        this.notCustomVersion = false;
        this.customVersion = true;
        this.notCustomBrand = false;
        this.customBrand = true; //for check if user want to input other brand
      } //initialization of the page


      _createClass(AddItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //submited the form 

      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form.value);
          var hashCode;
          var hashBarcode;
          this.partToAdd = form.value;
          this.group = this.partToAdd["group"];
          this.name = this.partToAdd["name"];
          this.purchase = this.partToAdd["purchase"];
          this.price = this.partToAdd["price"];
          this.numberOf = this.partToAdd["numberOf"]; //check brand

          if (this.partToAdd["normalBrand"] == null) {
            this.brand = this.partToAdd["customBrand"];
          } else if (this.partToAdd["customBrand"] == null) {
            this.brand = this.partToAdd["normalBrand"];
          } //check version


          if (this.partToAdd["normalVersion"] == null) {
            this.version = this.partToAdd["customVersion"];
          } else if (this.partToAdd["customBrand"] == null) {
            this.version = this.partToAdd["normalVersion"];
          } //check specification


          if (this.partToAdd["normalSpecs"] == null) {
            this.specific = this.partToAdd["customSpecs"];
          } else if (this.partToAdd["customSpecs"] == null) {
            this.specific = this.partToAdd["normalSpecs"];
          } //save registered information to temp variable


          var barcode = this.partToAdd["barcode"];
          var purchase = this.partToAdd["purchase"];
          var price = this.partToAdd["price"];
          var numberOf = this.partToAdd["numberOf"];
          var refCode = "";
          refCode = this.refCodeGenerator();

          if (barcode == "") {
            barcode = this.barcodeGenarator(refCode);
          } else {
            barcode = barcode;
          }

          hashCode = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(refCode);
          hashBarcode = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(barcode);
          console.log(refCode.charCodeAt(0));
          console.log(hashCode);
          console.log(hashBarcode); //checking is   part to be added is exist ?

          var chekingRes = this.apiService.readAPart(this.group, refCode);

          if (chekingRes.length == 0) {
            //add new part 
            //first add to suitable table 
            this.apiService.createPart(this.group, refCode, this.name, this.brand, this.version + this.specific, this.purchase, this.price, this.numberOf); //second add log info
            //some code will be added soon
            //third add barcode with its hash and ref. code with its hash to hash database table 
            //some code will be added soon 
          } else if (chekingRes.length != 0) {
            alert("อะไหล่ชิ้นนี้อยู่ในคลังเรียบร้อยแล้ว");
          }
        } //update checking custom brand variable

      }, {
        key: "setCustomBrand",
        value: function setCustomBrand() {
          this.notCustomBrand = true;
          this.customBrand = false;
        }
      }, {
        key: "setNormalBrand",
        value: function setNormalBrand() {
          this.notCustomBrand = false;
          this.customBrand = true;
        } //update checking custom version

      }, {
        key: "setCustomVersion",
        value: function setCustomVersion() {
          this.notCustomVersion = true;
          this.customVersion = false;
        }
      }, {
        key: "setNormalVersion",
        value: function setNormalVersion() {
          this.notCustomVersion = false;
          this.customVersion = true;
        } //update checking custon specification

      }, {
        key: "setCustomSpecs",
        value: function setCustomSpecs() {
          this.notCustomSpecs = true;
          this.customSpecs = false;
        }
      }, {
        key: "setNormalSpecs",
        value: function setNormalSpecs() {
          this.notCustomSpecs = false;
          this.customSpecs = true;
        } //generate barcode if the input is empty 

      }, {
        key: "barcodeGenarator",
        value: function barcodeGenarator(code) {
          var code = code;

          for (var i = 0; i < code.length; i++) {
            var str = code[i];
            code[i] = str.charCodeAt(0);
          }
        } ////
        //adding new part to stock 

      }, {
        key: "addItem",
        value: function addItem() {} // generate reference code

      }, {
        key: "refCodeGenerator",
        value: function refCodeGenerator() {
          var code = "";
          var groupRef = ""; //length = 2

          var nameRef = ""; //length = 3

          var brandRef = ""; //length =3

          var versionRef = ""; //length =3

          var specificRef = ""; // length = 3
          //total length of referene code = 15 characters
          //map group with ref. code
          //->automatically map from registeration 

          groupRef = this.group; //map name 

          nameRef = this.name;
          var nameObj = this.nameList.find(function (x) {
            return x.name === nameRef;
          });
          nameRef = nameObj.code;
          console.log(nameObj); //map brand

          brandRef = this.brand; //version map

          versionRef = this.version; //specific map

          specificRef = this.specific;
          code = groupRef + nameRef + brandRef + versionRef + specificRef;
          return code;
        }
      }, {
        key: "updateDropdown",
        value: function updateDropdown() {
          var inName = document.getElementById("name");
          var input = inName.value;
          var nameList = ["ยาง", "ล้อ", "่โซ่", "ซี่", "ผ้าเบรค", "เบรค"];
          var generalList = ["กรอบ", "ป้าย", "หมวก", "พรบ"];

          for (var i = 0; i < nameList.length; i++) {
            if (input.startsWith(nameList[i])) {
              this.specificList = _assets_versionList_json__WEBPACK_IMPORTED_MODULE_4__["specificList"]["wheel"];
              this.versionList = _assets_versionList_json__WEBPACK_IMPORTED_MODULE_4__["versionList"]["bike"];
            }
          }

          for (var i = 0; i < generalList.length; i++) {
            if (input.startsWith(generalList[i])) {
              this.specificList = _assets_versionList_json__WEBPACK_IMPORTED_MODULE_4__["specificList"]["generic"];
              this.versionList = _assets_versionList_json__WEBPACK_IMPORTED_MODULE_4__["versionList"]["generals"];
            }
          }
        }
      }]);

      return AddItemComponent;
    }();

    AddItemComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-item.component.css */
      "./src/app/add-item/add-item.component.css")).default]
    })], AddItemComponent);
    /***/
  },

  /***/
  "./src/app/angular-material/angular-material.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/angular-material/angular-material.module.ts ***!
    \*************************************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = "http://127.0.0.1:3000";
      }

      _createClass(ApiService, [{
        key: "readParts",
        value: function readParts() {
          return this.httpClient.get('http://127.0.0.1:3000/parts');
        }
      }, {
        key: "readAPart",
        value: function readAPart(groupId, code) {
          var url = 'http://127.0.0.1:3000/part' + groupId + code;
          return this.httpClient.get(url);
        }
      }, {
        key: "readSales",
        value: function readSales() {
          return this.httpClient.get('http://127.0.0.1:3000/parts');
        }
      }, {
        key: "readAmount",
        value: function readAmount() {
          return this.httpClient.get('http://127.0.0.1:3000/parts');
        }
      }, {
        key: "createPart",
        value: function createPart(groupId, code, name, brand, version, purchase, price, numberOf) {
          //var param = "table="+table+"&"+"groupId="+gid+"&"+"code="+pid+"&"+"name="+name+"&"+"brand="+brand+"&"+"version="+version+"&"+"purchase="+purchase+"&"+"price="+price+"&"+"amount="+amount;
          //var request = new XMLHttpRequest();
          //request.open("POST", 'http://127.0.0.1:8000/api/create.php?'+param, true);
          //request.send(null);
          //console.log('http://127.0.0.1:8000/api/create.php?'+param);
          var newPart = {
            "groupId": groupId,
            "code": code,
            "name": name,
            "brand": brand,
            "version": version,
            "purchase": purchase,
            "price": price,
            "numberOf": numberOf,
            "sales": 0
          };
          return this.httpClient.post('http://127.0.0.1:3000/part/' + groupId, newPart);
        }
      }, {
        key: "updateAmount",
        value: function updateAmount(group, code, amount) {
          var group = group;
          var code = code;
          var amount = amount;
          var param = "table=" + group + "&" + "pid=" + code + "&" + "numberOf=" + amount;
          var url = 'http://127.0.0.1:8000/api/update.php?&func=update&';
          var request = new XMLHttpRequest();
          console.log(url + param);
          request.open("POST", url + param, true);
          request.send(null);
        }
      }, {
        key: "updatePart",
        value: function updatePart(groupId, code, name, brand, version, purchase, price, numberOf, sales) {
          var group = groupId;
          var code = code;
          var amount = amount;
          var groupMap = [{
            data: "03",
            code: "externals"
          }, {
            data: "00",
            code: "internals"
          }, {
            data: "02",
            code: "electrics"
          }, {
            data: "04",
            code: "generals"
          }];

          for (var i = 0; i < groupMap.length; i++) {
            if (groupMap[i].data == group) {
              group = groupMap[i].code;
            }
          }

          var partToUpdate = {
            "groupId": groupId,
            "code": code,
            "name": name,
            "brand": brand,
            "version": version,
            "purchase": purchase,
            "price": price,
            "numberOf": numberOf,
            "sales": sales
          };
          var param = groupId + "/" + code + "/" + name + "/" + brand + "/" + version + "/" + purchase + "/" + price + "/" + numberOf + "/" + sales;
          var url = 'http://127.0.0.1:3000/part/' + groupId + '/' + code;
          var request = new XMLHttpRequest();
          request.open("PUT", url);
          request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          request.send(JSON.stringify(partToUpdate));
        }
      }, {
        key: "readLog",
        value: function readLog() {
          return this.httpClient.get('http://127.0.0.1:3000/log');
        }
      }, {
        key: "createLog",
        value: function createLog() {}
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n     margin: 0 auto;\r\n     \r\n  }\r\n  \r\n.content {\r\n    width: 100%;\r\n  }\r\n  \r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\nh1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    margin: 8px 0;\r\n  }\r\n  \r\np {\r\n    margin: 0;\r\n  }\r\n  \r\n.spacer {\r\n    flex: 1;\r\n  }\r\n  \r\n.toolbar {\r\n    height: 60px;\r\n    margin: -8px;\r\n    display: flex;\r\n    align-items: center;\r\n \r\n    color: white;\r\n    font-weight: 600;\r\n    background-color: teal;\r\n  }\r\n  \r\n.toolbar img {\r\n    margin: 0 16px;\r\n  }\r\n  \r\n.toolbar #twitter-logo {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n  \r\n.toolbar #twitter-logo:hover {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n.content {\r\n    display: flex;\r\n    margin: 32px auto;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  \r\nsvg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n  \r\nsvg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n  \r\n.card svg.material-icons path {\r\n    fill: #888;\r\n  }\r\n  \r\n.card-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n  }\r\n  \r\n.card {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n  \r\n.card-container .card:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n  \r\n.card.card-small {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n  \r\n.card-container .card:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n  \r\n.card-container .card:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(black, 0.35);\r\n  }\r\n  \r\n.card-container .card:not(.highlight-card):hover .material-icons path {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n  \r\n.card.highlight-card {\r\n    background-color: #33C4FF;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n  \r\n.card.card.highlight-card span {\r\n    margin-left: 60px;\r\n  }\r\n  \r\nsvg#rocket {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n  }\r\n  \r\nsvg#rocket-smoke {\r\n    height: 100vh;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n  }\r\n  \r\na,\r\n  a:visited,\r\n  a:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n  \r\na:hover {\r\n    color: #125699;\r\n  }\r\n  \r\n.terminal {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n  \r\n.terminal::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n  \r\n.terminal pre {\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n  \r\n.circle-link {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n  \r\n.circle-link:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\nfooter {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n  \r\nfooter a {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n.github-star-badge {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27,31,35,.2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n  }\r\n  \r\n.github-star-badge:hover {\r\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n    border-color: rgba(27,31,35,.35);\r\n    background-position: -.5em;\r\n  }\r\n  \r\n.github-star-badge .material-icons {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n  }\r\n  \r\nsvg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n  \r\n/* Responsive Styles */\r\n  \r\n@media screen and (max-width: 767px) {\r\n\r\n    .card-container > *:not(.circle-link) ,\r\n    .terminal {\r\n      width: 100%;\r\n    }\r\n\r\n    .card:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card span {\r\n      margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke {\r\n      right: 120px;\r\n      transform: rotate(-5deg);\r\n    }\r\n  }\r\n  \r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxjQUFjOztFQUVqQjs7QUFFRjtJQUNJLFdBQVc7RUFDYjs7QUFDQTtJQUNFLDBKQUEwSjtJQUMxSixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0VBQ3BDOztBQUVBOzs7Ozs7SUFNRSxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxTQUFTO0VBQ1g7O0FBRUE7SUFDRSxPQUFPO0VBQ1Q7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHdDQUF3QztFQUMxQzs7QUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0FBRUE7OztJQUdFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usb0VBQW9FO0lBQ3BFLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztFQUNYOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdFQUF3RTtJQUN4RSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsMkNBQTJDO0VBQzdDOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrSUFBa0k7RUFDcEk7O0FBRUE7SUFDRSw4REFBOEQ7SUFDOUQsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7RUFDZjs7QUFHQSxzQkFBc0I7O0FBQ3RCOztJQUVFOztNQUVFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxZQUFZO01BQ1osd0JBQXdCO0lBQzFCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgXHJcbiAgfVxyXG4gIFxyXG4uY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAtOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDNEZGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI0MjkyZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mbkV1';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/side-nav/side-nav.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _stockpage_stockpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./stockpage/stockpage.component */
    "./src/app/stockpage/stockpage.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular2-chartjs */
    "./node_modules/angular2-chartjs/dist/index.js");
    /* harmony import */


    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! chart.piecelabel.js */
    "./node_modules/chart.piecelabel.js/src/Chart.PieceLabel.js");
    /* harmony import */


    var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-grids */
    "./node_modules/@syncfusion/ej2-angular-grids/@syncfusion/ej2-angular-grids.js");
    /* harmony import */


    var igniteui_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! igniteui-angular */
    "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/report/report.component.ts");
    /* harmony import */


    var _log_log_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./log/log.component */
    "./src/app/log/log.component.ts");
    /* harmony import */


    var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./add-item/add-item.component */
    "./src/app/add-item/add-item.component.ts");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/notification/notification.component.ts");
    /* harmony import */


    var _child_child_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./child/child.component */
    "./src/app/child/child.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__["SideNavComponent"], _stockpage_stockpage_component__WEBPACK_IMPORTED_MODULE_8__["StockpageComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_21__["ReportComponent"], _log_log_component__WEBPACK_IMPORTED_MODULE_22__["LogComponent"], _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_23__["AddItemComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_24__["NotificationComponent"], _child_child_component__WEBPACK_IMPORTED_MODULE_25__["ChildComponent"]],
      imports: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__["GridModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_15__["ChartModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__["AngularMaterialModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxButtonModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxIconModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxLayoutModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxNavigationDrawerModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxRadioModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxRippleModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxSwitchModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_19__["IgxToggleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]],
      providers: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__["EditService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__["ToolbarService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__["SortService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__["CommandColumnService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _stockpage_stockpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./stockpage/stockpage.component */
    "./src/app/stockpage/stockpage.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/report/report.component.ts");
    /* harmony import */


    var _log_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./log/log.component */
    "./src/app/log/log.component.ts");
    /* harmony import */


    var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-item/add-item.component */
    "./src/app/add-item/add-item.component.ts");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/notification/notification.component.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/side-nav/side-nav.component.ts");

    var appRoutes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'stock',
      component: _stockpage_stockpage_component__WEBPACK_IMPORTED_MODULE_2__["StockpageComponent"]
    }, {
      path: 'report',
      component: _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]
    }, {
      path: 'log',
      component: _log_log_component__WEBPACK_IMPORTED_MODULE_5__["LogComponent"]
    }, {
      path: 'additem',
      component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__["AddItemComponent"]
    }, {
      path: 'notify',
      component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"]
    }, {
      path: 'sideNav',
      component: _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/child/child.component.css":
  /*!*******************************************!*\
    !*** ./src/app/child/child.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppChildChildComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaWxkL2NoaWxkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/child/child.component.ts":
  /*!******************************************!*\
    !*** ./src/app/child/child.component.ts ***!
    \******************************************/

  /*! exports provided: ChildComponent */

  /***/
  function srcAppChildChildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _Object;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildComponent", function () {
      return ChildComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var ChildComponent =
    /*#__PURE__*/
    function () {
      function ChildComponent(_data) {
        _classCallCheck(this, ChildComponent);

        this._data = _data;
      }

      _createClass(ChildComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChildComponent;
    }();

    ChildComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])((_Object = {
      selector: 'app-child',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./child.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html")).default,
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]]
    }, _defineProperty(_Object, "template", '{{message}}'), _defineProperty(_Object, "styles", [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
    /*! ./child.component.css */
    "./src/app/child/child.component.css")).default]), _Object))], ChildComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\r\n    background-color: lightgrey;\r\n    width: 70%;\r\n    height: 50%;\r\n    margin: 5%;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n.bottom{\r\n   position: fixed;\r\n   display: grid;\r\n   grid-template-columns: auto auto auto;\r\n   background-color: darkgrey;\r\n   bottom: 0;\r\n   width: 100%;\r\n   text-align: center;\r\n   \r\n  \r\n }\r\n.recents{\r\n    overflow: scroll;\r\n    height: 55%;\r\n    margin-bottom: 5%;\r\n    text-align: center;\r\n }\r\n.card-box{\r\n   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n   transition: 0.3s;\r\n   max-width: 100em ;\r\n   max-height: 55em;\r\n   border-radius: 10px;\r\n   padding: 10px;\r\n   margin: 10px;\r\n   text-align: center;\r\n   flex-wrap: wraps;\r\n }\r\ninput{\r\n   width: 100%;\r\n   padding: 12px;\r\n   border: 1px solid #ccc;\r\n   border-radius: 4px;\r\n   resize: vertical;\r\n    }\r\n.container{\r\n   display: flex;\r\n   overflow-x: scroll;\r\n\r\n}\r\nchart{\r\n   height: 25em;\r\n   width: 20em;\r\n    position: initial;\r\n \r\n}\r\n::-webkit-scrollbar {\r\n   width: 10px;\r\n }\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n   background: #f1f1f1; \r\n   border-radius: 10px;\r\n\r\n }\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n   background: rgb(155, 154, 154); \r\n   border-radius: 10px;\r\n\r\n }\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n   background: rgb(155, 154, 154); \r\n   border-radius: 10px;\r\n }\r\n#partInfomation{\r\n    width: 100fr;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtHQUNHLGVBQWU7R0FDZixhQUFhO0dBQ2IscUNBQXFDO0dBQ3JDLDBCQUEwQjtHQUMxQixTQUFTO0dBQ1QsV0FBVztHQUNYLGtCQUFrQjs7O0NBR3BCO0FBQ0E7SUFDRyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFDQTtHQUNFLHVDQUF1QztHQUN2QyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsZ0JBQWdCO0NBQ2xCO0FBQ0E7R0FDRSxXQUFXO0dBQ1gsYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixrQkFBa0I7R0FDbEIsZ0JBQWdCO0lBQ2Y7QUFDSjtHQUNHLGFBQWE7R0FDYixrQkFBa0I7O0FBRXJCO0FBQ0E7R0FDRyxZQUFZO0dBQ1osV0FBVztJQUNWLGlCQUFpQjs7QUFFckI7QUFDQTtHQUNHLFdBQVc7Q0FDYjtBQUVBLFVBQVU7QUFDVjtHQUNFLG1CQUFtQjtHQUNuQixtQkFBbUI7O0NBRXJCO0FBRUEsV0FBVztBQUNYO0dBQ0UsOEJBQThCO0dBQzlCLG1CQUFtQjs7Q0FFckI7QUFFQSxvQkFBb0I7QUFDcEI7R0FDRSw4QkFBOEI7R0FDOUIsbUJBQW1CO0NBQ3JCO0FBQ0E7SUFDRyxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvdHRvbXtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBkaXNwbGF5OiBncmlkO1xyXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxuICAgYm90dG9tOiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICBcclxuIH1cclxuIC5yZWNlbnRze1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAuY2FyZC1ib3h7XHJcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgbWF4LXdpZHRoOiAxMDBlbSA7XHJcbiAgIG1heC1oZWlnaHQ6IDU1ZW07XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIG1hcmdpbjogMTBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmbGV4LXdyYXA6IHdyYXBzO1xyXG4gfVxyXG4gaW5wdXR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBwYWRkaW5nOiAxMnB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICB9XHJcbi5jb250YWluZXJ7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHJcbn1cclxuY2hhcnR7XHJcbiAgIGhlaWdodDogMjVlbTtcclxuICAgd2lkdGg6IDIwZW07XHJcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuIFxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICB3aWR0aDogMTBweDtcclxuIH1cclxuIFxyXG4gLyogVHJhY2sgKi9cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiB9XHJcbiAgXHJcbiAvKiBIYW5kbGUgKi9cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICBiYWNrZ3JvdW5kOiByZ2IoMTU1LCAxNTQsIDE1NCk7IFxyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuIH1cclxuIFxyXG4gLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogcmdiKDE1NSwgMTU0LCAxNTQpOyBcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIH1cclxuICNwYXJ0SW5mb21hdGlvbntcclxuICAgIHdpZHRoOiAxMDBmcjtcclxuIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(apiService) {
        _classCallCheck(this, DashboardComponent);

        this.apiService = apiService;
        this.externals = [];
        this.internals = [];
        this.electrics = [];
        this.generals = [];
        this.logging = [];
        this.todayLogging = [];
        this.date = " ";
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.readLog().subscribe(function (logging) {
            _this.logging = logging;
            console.log(_this.logging[0]);
            var i = 0;

            for (i; i < _this.logging.length; i++) {
              _this.date = _this.logging[i].timestamp;
              /* var temp = this.date.substring(0,10);
              var dateComp = []
              dateComp = temp.split('-');
              var today = new Date();
              let year = Number(dateComp[0]) - Number(today.getFullYear());
              let mount = Number(dateComp[0]) - Number((today.getMonth()+1));
              let day = Number(dateComp[0]) - Number(today.getDate());
              if(year == 0 && mount ==0 &&day ==0 ){
               this.todayLogging.push(this.logging[i]);
              } */
            }
          });
          this.apiService.readSales().subscribe(function (sales) {
            _this.sales = sales;
            console.log(_this.sales[1]['code']);
            var i = 0;

            for (i; i < _this.sales.length; i++) {
              if (_this.sales[i]['group'] == "03") {
                _this.externals.push(_this.sales[i]);
              }

              if (_this.sales[i]['group'] == "00") {
                _this.internals.push(_this.sales[i]);
              }

              if (_this.sales[i]['group'] == "02") {
                _this.electrics.push(_this.sales[i]);
              }

              if (_this.sales[i]['group'] == "04") {
                _this.generals.push(_this.sales[i]);
              }
            }

            console.log(_this.internals);
            _this.typeExternalsChart = 'bar';
            _this.externalsChart = {
              labels: [_this.externals[0].name + _this.externals[0].brand + _this.externals[0].version, _this.externals[1].name + _this.externals[1].brand + _this.externals[1].version, _this.externals[2].name + _this.externals[2].brand + _this.externals[2].version, _this.externals[3].name + _this.externals[3].brand + _this.externals[3].version, _this.externals[4].name + _this.externals[4].brand + _this.externals[4].version],
              datasets: [{
                label: "อะไหล่ภายนอก",
                data: [_this.externals[0].sales, _this.externals[1].sales, _this.externals[2].sales, _this.externals[3].sales, _this.externals[4].sales],
                backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
              }]
            };
            _this.internalsChart = {
              labels: [_this.internals[0].name + _this.internals[0].brand + _this.internals[0].version, _this.internals[1].name + _this.internals[1].brand + _this.internals[1].version, _this.internals[2].name + _this.internals[2].brand + _this.internals[2].version, _this.internals[2].name + _this.internals[3].brand + _this.internals[3].version, _this.internals[4].name + _this.internals[4].brand + _this.internals[4].version],
              datasets: [{
                label: "อะไหล่ภายใน",
                data: [_this.internals[0].sales, _this.internals[1].sales, _this.internals[2].sales, _this.internals[3].sales, _this.internals[4].sales],
                backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
              }]
            };
            _this.electricsChart = {
              labels: [_this.electrics[0].name + _this.electrics[0].brand + _this.electrics[0].version, _this.electrics[1].name + _this.electrics[1].brand + _this.electrics[1].version, _this.electrics[2].name + _this.electrics[2].brand + _this.electrics[2].version, _this.electrics[2].name + _this.electrics[3].brand + _this.electrics[3].version, _this.electrics[4].name + _this.electrics[4].brand + _this.electrics[4].version],
              datasets: [{
                label: "ระบบไฟฟ้า",
                data: [_this.electrics[0].sales, _this.electrics[1].sales, _this.electrics[2].sales, _this.electrics[3].sales, _this.electrics[4].sales],
                backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
              }]
            };
            _this.generalsChart = {
              labels: [_this.generals[0].name + _this.generals[0].brand + _this.generals[0].version, _this.generals[1].name + _this.generals[1].brand + _this.generals[1].version, _this.generals[2].name + _this.generals[2].brand + _this.generals[2].version, _this.generals[3].name + _this.generals[3].brand + _this.generals[3].version, _this.generals[4].name + _this.generals[4].brand + _this.generals[4].version],
              datasets: [{
                label: "อุปกรณ์ทั่วไป",
                data: [_this.generals[0].sales, _this.generals[1].sales, _this.generals[2].sales, _this.generals[3].sales, _this.generals[4].sales],
                backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
              }]
            };
            _this.optionsExternalsChart = {
              responsive: true,
              maintainAspectRatio: false,
              pieceLabel: {
                render: 'value',
                fontSize: 20,
                fontStyle: 'bold',
                fontColor: '#FFF',
                fontFamily: '"db_heaventmed_cond"'
              }
            };
          });
        }
      }, {
        key: "checkCode",
        value: function checkCode() {
          var inputCode = document.getElementById('part_code');
          var partInfo = document.getElementById('partInfo');
          var partCode = inputCode.value;
          var found = 0;
          var newline = "<br />";
          console.log(partCode);

          for (var i = 0; i < this.sales.length; i++) {
            if (this.sales[i]['code'] == partCode) {
              this.interestedPart = this.sales[i]; //get specific part from stock

              partInfo.innerHTML = this.sales[i]['name'] + "<br /> ยี่ห้อ" + this.sales[i]['brand'] + ' รุ่น' + this.sales[i]['version'];
              partInfo.innerHTML += "<br /> ราคาขาย " + this.sales[i]['price'] + " บาท";
              partInfo.innerHTML += "<br /> ยอดคงเหลือ " + this.sales[i]['amount'] + " ชื้น";
              found = 1;
            }
          }

          if (found != 1) {
            partInfo.textContent = "ไม่พบ";
          }
        }
      }, {
        key: "salePart",
        value: function salePart() {
          var groupId;
          var amount = document.getElementById('amount');
          var updateVal;
          groupId = this.interestedPart['code'].substr(0, 2); //var sel = group.selectedIndex;
          ///var selOpt = group.options[sel];

          updateVal = Number(this.interestedPart['numberOf']) - Number(amount.value); // this.sales[i]['amount']=updateVal;
          /// console.log(amount.value);
          //  console.log(updateVal);

          this.apiService.updateAmount(groupId, this.interestedPart['code'], updateVal);
        }
      }, {
        key: "updateAmount",
        value: function updateAmount() {
          //var group = <HTMLSelectElement>document.getElementById('pgroup'); 
          var groupId;
          var amount = document.getElementById('amount');
          var updateVal;
          groupId = this.interestedPart['code'].substr(0, 2); //var sel = group.selectedIndex;
          ///var selOpt = group.options[sel];

          updateVal = Number(this.interestedPart['numberOf']) + Number(amount.value); // this.sales[i]['amount']=updateVal;
          /// console.log(amount.value);
          //  console.log(updateVal);

          this.apiService.updateAmount(groupId, this.interestedPart['code'], updateVal);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(DataService, [{
        key: "sendMessage",
        value: function sendMessage(message) {
          console.log("new massage", message);
          this.subject.next(message);
        }
      }, {
        key: "clearMessages",
        value: function clearMessages() {
          this.subject.next();
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          console.log("update");
          return this.subject.asObservable();
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/log/log.component.css":
  /*!***************************************!*\
    !*** ./src/app/log/log.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogLogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    overflow:auto;\r\n    max-height: 600px;\r\n    font-size: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1; \r\n    border-radius: 10px;\r\n\r\n  }\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(155, 154, 154); \r\n    border-radius: 10px;\r\n\r\n  }\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(155, 154, 154); \r\n    border-radius: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nL2xvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxXQUFXO0VBQ2I7QUFFQSxVQUFVO0FBQ1Y7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1COztFQUVyQjtBQUVBLFdBQVc7QUFDWDtJQUNFLDhCQUE4QjtJQUM5QixtQkFBbUI7O0VBRXJCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZy9sb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhY2sgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgfVxyXG4gICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTUsIDE1NCwgMTU0KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU1LCAxNTQsIDE1NCk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/log/log.component.ts":
  /*!**************************************!*\
    !*** ./src/app/log/log.component.ts ***!
    \**************************************/

  /*! exports provided: LogComponent */

  /***/
  function srcAppLogLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogComponent", function () {
      return LogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var LogComponent =
    /*#__PURE__*/
    function () {
      function LogComponent(apiService) {
        _classCallCheck(this, LogComponent);

        this.apiService = apiService;
      }

      _createClass(LogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.apiService.readLog().subscribe(function (logging) {
            _this2.logging = logging;
            console.log(_this2.logging);
          });
          this.sortSetting = {
            columns: [{
              field: 'timestamp',
              direction: 'Ascending'
            }]
          };
          this.toolbar = ['Search'];
          this.searchSetting = {
            fields: ['timestamp']
          };
        }
      }]);

      return LogComponent;
    }();

    LogComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-log',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/log/log.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./log.component.css */
      "./src/app/log/log.component.css")).default]
    })], LogComponent);
    /***/
  },

  /***/
  "./src/app/notification/notification.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/notification/notification.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationNotificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notify{\r\n  overflow: scroll;\r\n    height: 75%;  \r\n}\r\nmat-card{\r\n    margin: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: 20px;\r\n    text-align: center;\r\n \r\n    box-shadow: 10px 20px 30px rgba(0,0,0,0.2);\r\n    transition: 3s;\r\n    border-radius: 10px;\r\n }\r\n.orange{\r\n  background-color: orange;\r\n  color: black;\r\n\r\n}\r\n.red{\r\n  background-color: crimson;\r\n\r\n}\r\n.yellow{\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\nbutton{\r\n  background-color: grey; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 5px 5px 5px 5px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n  border-radius: 10px;\r\n\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(155, 154, 154); \r\n  border-radius: 10px;\r\n\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(155, 154, 154); \r\n  border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixrQkFBa0I7O0lBRWxCLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCLEVBQUUsVUFBVTtFQUNsQyxZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7O0FBRXJCO0FBRUEsV0FBVztBQUNYO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjs7QUFFckI7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmeXtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiA3NSU7ICBcclxufVxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFxyXG4gICAgYm94LXNoYWRvdzogMTBweCAyMHB4IDMwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogM3M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG4ub3Jhbmdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcbi5yZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuXHJcbn0gXHJcbi55ZWxsb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuIFxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE1NSwgMTU0LCAxNTQpOyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNTUsIDE1NCwgMTU0KTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/notification/notification.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/notification/notification.component.ts ***!
    \********************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NotificationComponent =
    /*#__PURE__*/
    function () {
      function NotificationComponent(apiService, dataService, router) {
        _classCallCheck(this, NotificationComponent);

        this.apiService = apiService;
        this.dataService = dataService;
        this.router = router;
      } //message:string;
      //sideNavComponent : SideNavComponent = new SideNavComponent(  this.apiService   ,  this.dataService   );


      _createClass(NotificationComponent, [{
        key: "getnotifications",
        value: function getnotifications() {
          return this.notifications;
        }
      }, {
        key: "setnotifications",
        value: function setnotifications(value) {
          this.notifications = value;
        } //clear notification
        //delete selected notification  

      }, {
        key: "clearNotification",
        value: function clearNotification(notification) {
          var i = 0;
          this.notifications = JSON.parse(localStorage.getItem("NotiList"));

          for (i; i < this.notifications.length; i++) {
            if (this.notifications[i].code == notification.code) {
              this.notifications.splice(i, 1); //delete from notification array
            }
          }

          console.log(this.notifications);
          localStorage.setItem("NotiList", JSON.stringify(this.notifications));
          var numberOfNoti = this.notifications.length;
          localStorage.setItem("NotifyNO", numberOfNoti.toString());
        } //end of clearNotification()
        // on initialization get notiofication list from local storage

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var notification = JSON.parse(localStorage.getItem("NotiList"));
          console.log(notification);
          this.notifications = notification;
        } //generate notification list

      }, {
        key: "notify",
        value: function notify() {
          /*   let notifications = [];
            var i =0;
          for(i = 0 ; i< this.amounts.length;i++){
          if(!notifications.includes(this.amounts[i].code)){
            if(this.amounts[i].amount <= 3){
              var code = this.amounts[i].code
             
              notifications.push( {"code":code ,
                                  "amount":this.amounts[i].amount});
          
            }
           }
          
          }
          console.log(notifications);
          return notifications; */
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html")).default,
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.component.css */
      "./src/app/notification/notification.component.css")).default]
    })], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/report/report.component.css":
  /*!*********************************************!*\
    !*** ./src/app/report/report.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    box-sizing: border-box;\r\n  }\r\ninput[type=text], select, textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  resize: vertical;\r\n}\r\nlabel {\r\n  padding: 12px 12px 12px 0;\r\n  display: inline-block;\r\n}\r\ninput[type=submit] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n}\r\n.col-25 {\r\n  float: left;\r\n  width: 25%;\r\n  margin-top: 6px;\r\n}\r\n.col-75 {\r\n  float: left;\r\n  width: 75%;\r\n  margin-top: 6px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 600px) {\r\n  .col-25, .col-75, input[type=submit] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\nchart{\r\n  width: 50%;\r\n  height: 50%;\r\n}\r\n.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border: 1px solid #ccc;\r\n  border-top: none;\r\n}\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQSwrSUFBK0k7QUFDL0k7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY29sLTI1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLmNvbC03NSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29sLTI1LCAuY29sLTc1LCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5jaGFydHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbi50YWJjb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4udGFiIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cclxuLnRhYiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xyXG4udGFiIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuLnRhYiBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/report/report.component.ts":
  /*!********************************************!*\
    !*** ./src/app/report/report.component.ts ***!
    \********************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var ReportComponent =
    /*#__PURE__*/
    function () {
      function ReportComponent(apiService) {
        _classCallCheck(this, ReportComponent);

        this.apiService = apiService;
        this.externals = ["externals"];
        this.internals = [];
        this.electrics = [];
        this.generals = [];
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.apiService.readSales().subscribe(function (amounts) {
            _this3.amounts = amounts;
            _this3.externals = amounts;
            console.log("amount", _this3.amounts);
          });
          console.log("ext", this.externals);
          this.typeChart = 'pie';
          this.externalsChart = {
            labels: ["ยางนอก YAMAHA FINO", "โซ่ดำพระอาทิตย์ 428-100", "ผ้าดิสเบรคหน้า AMTEX WAVE 125", "ยางนอก CHEETEAH 70/90-14", "แบตเตอรี่แห้ง LEO YTZ 5"],
            datasets: [{
              label: "My Stats Chart",
              data: [10, 30, 50, 30, 40],
              backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
            }]
          };
          this.optionsChart = {
            responsive: true,
            maintainAspectRatio: false,
            pieceLabel: {
              render: 'value',
              fontSize: 10,
              fontStyle: 'bold',
              fontColor: '#FFF',
              fontFamily: '"db_heaventmed_cond"'
            }
          };
        }
      }]);

      return ReportComponent;
    }();

    ReportComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report.component.css */
      "./src/app/report/report.component.css")).default]
    })], ReportComponent);
    /***/
  },

  /***/
  "./src/app/side-nav/side-nav.component.css":
  /*!*************************************************!*\
    !*** ./src/app/side-nav/side-nav.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideNavSideNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n }\r\n\r\nmain {\r\n    padding: 1rem 2rem;\r\n  \r\n}\r\n\r\nmain.mini-padding {\r\n    padding: 1rem calc(1rem + 60px);\r\n}\r\n\r\n.setting-title {\r\n    margin-bottom: 0;\r\n    color: rgba(228, 28, 119, 0.8) /*#e41c77cc*/  \r\n}\r\n\r\n.setting-note {\r\n    font-size: 14px;\r\n     margin: 4px 0;\r\n     background-color: rgb(46, 42, 42);\r\n}\r\n\r\n.igx-nav-drawer{\r\n    background-color: rgb(46, 42, 42);\r\n\r\n}\r\n\r\n.igx-nav-drawer__aside::-webkit-scrollbar {\r\n    width: 3px;\r\n    display: none;\r\n}\r\n\r\n.igx-nav-drawer__aside::-webkit-scrollbar-thumb {\r\n    border-radius: 0;\r\n    display: none;\r\n    height: 100%;\r\n}\r\n\r\n.igx-icon{\r\n    size: 100px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(46, 42, 42);\r\n    padding-top: 50px;\r\n   }\r\n\r\n.igxDrawer{\r\n    background-color: rgb(46, 42, 42);\r\n   }\r\n\r\n.menuItem{\r\n    text-align: justify;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    border: 2px solid black;\r\n    border-radius: 12px;\r\n    color: pink;\r\n}\r\n\r\n.menuItem:hover{\r\n    background-color: grey;\r\n   \r\n}\r\n\r\nmat-icon{\r\n     right:5px;\r\n    padding-left: 10px;\r\n    margin-right: 10px;\r\n    position: absolute;\r\n\r\n}\r\n\r\na:hover{\r\n    color: white;\r\n}\r\n\r\n.menuItem a :hover{\r\n    color: black;\r\n}\r\n\r\nli a{\r\n     color:white;\r\n    text-decoration: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 6px 8px 6px 16px;\r\n   font-size: 20px;\r\n   display: block;\r\n  }\r\n\r\na{\r\n \r\n      padding-left: 10px;\r\n      padding-top: 5px;\r\n      text-align: justify;\r\n   \r\n  }\r\n\r\n/* Change the link color on hover */\r\n\r\nmat-icon{\r\n      padding-right: 100px;\r\n  }\r\n\r\n.mat-badge-medium.mat-badge-above .mat-badge-content {\r\n    top: -3px;\r\n    padding: 0;\r\n}\r\n\r\n#Notification{\r\n    vertical-align: middle;\r\n}\r\n\r\n#menuHead{\r\n      padding-top: 15px 15px 15px 15px;\r\n      height: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkIsRUFBRSxZQUFZO0FBQy9DOztBQUVBO0lBQ0ksZUFBZTtLQUNkLGFBQWE7S0FDYixpQ0FBaUM7QUFDdEM7O0FBQ0E7SUFDSSxpQ0FBaUM7O0FBRXJDOztBQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsaUJBQWlCO0dBQ2xCOztBQUNIO0lBQ0ksaUNBQWlDO0dBQ2xDOztBQUNIO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUNBO0tBQ0ssU0FBUztJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNFO0tBQ0csV0FBVztJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtHQUMxQixlQUFlO0dBQ2YsY0FBYztFQUNmOztBQUNBOztNQUVJLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsbUJBQW1COztFQUV2Qjs7QUFFQSxtQ0FBbUM7O0FBR25DO01BQ0ksb0JBQW9CO0VBQ3hCOztBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFDRTtJQUNFLHNCQUFzQjtBQUMxQjs7QUFDRTtNQUNJLGdDQUFnQztNQUNoQyxZQUFZO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiB9XHJcblxyXG5tYWluIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBcclxufVxyXG5cclxubWFpbi5taW5pLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMXJlbSBjYWxjKDFyZW0gKyA2MHB4KTtcclxufVxyXG5cclxuLnNldHRpbmctdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGNvbG9yOiByZ2JhKDIyOCwgMjgsIDExOSwgMC44KSAvKiNlNDFjNzdjYyovICBcclxufVxyXG5cclxuLnNldHRpbmctbm90ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQyLCA0Mik7XHJcbn1cclxuLmlneC1uYXYtZHJhd2Vye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0MiwgNDIpO1xyXG5cclxufVxyXG4gIC5pZ3gtbmF2LWRyYXdlcl9fYXNpZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaWd4LW5hdi1kcmF3ZXJfX2FzaWRlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSAgXHJcbiBcclxuLmlneC1pY29ue1xyXG4gICAgc2l6ZTogMTAwcHg7XHJcbn1cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQyLCA0Mik7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgfVxyXG4uaWd4RHJhd2Vye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0MiwgNDIpO1xyXG4gICB9XHJcbi5tZW51SXRlbXtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGNvbG9yOiBwaW5rO1xyXG59XHJcbi5tZW51SXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgIFxyXG59XHJcbm1hdC1pY29ue1xyXG4gICAgIHJpZ2h0OjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuYTpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWVudUl0ZW0gYSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuICBsaSBhe1xyXG4gICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBhe1xyXG4gXHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgbGluayBjb2xvciBvbiBob3ZlciAqL1xyXG4gXHJcblxyXG4gIG1hdC1pY29ue1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbiAgI05vdGlmaWNhdGlvbntcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuICAjbWVudUhlYWR7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/side-nav/side-nav.component.ts":
  /*!************************************************!*\
    !*** ./src/app/side-nav/side-nav.component.ts ***!
    \************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var SideNavComponent =
    /*#__PURE__*/
    function () {
      function SideNavComponent(apiService, dataService) {
        _classCallCheck(this, SideNavComponent);

        /*  this.route.queryParams.subscribe(params=>{
           if(this.router.getCurrentNavigation().extras.state != null){
             this.data = this.router.getCurrentNavigation().extras.state.numNotify;
           }
         }); */
        this.apiService = apiService;
        this.dataService = dataService; //item infomation for side nav 

        this.navItems = [{
          name: "account_circle",
          text: "Dashboard",
          path: '',
          icon: "dashboard"
        }, {
          name: "error",
          text: "Notification",
          path: "/notify",
          icon: "notification_important"
        }, {
          name: "group_work",
          text: "Stock",
          path: "/stock",
          icon: "list"
        }, {
          name: "home",
          text: "Log",
          path: "/log",
          icon: "history"
        }, {
          name: "view_carousel",
          text: "Add",
          path: "/additem",
          icon: "add_circle"
        }]; //controlling navigation side bar 
        //define navigation side bar component 

        this.selected = "Avatar"; //define state of navigation side bar 

        this.drawerState = {
          miniTemplate: false,
          open: true,
          pin: true
        };
      } //myTimer = setInterval(this.ngAfterViewInit, 5000);


      _createClass(SideNavComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "documentClick",
        value: function documentClick(event) {
          this.show();
        } //global click event 
        //on initialization 

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.notifyNO = localStorage.getItem("NotifyNO"); //get number of notifications form local storage 

          var notifications = [];
          var remains = [];
          this.apiService.readParts().subscribe(function (numberOf) {
            remains = numberOf; //check if number of sparepart is less than 3 and not have been notified before 

            console.log(remains);
            var i = 0;

            for (var j = 0; j < 4; j++) {
              for (i = 0; i < remains[j].length; i++) {
                if (!notifications.includes(remains[j][i]['code'])) {
                  if (remains[j][i]['numberOf'] <= 3) {
                    notifications.push({
                      "code": remains[j][i]['code'],
                      "name": remains[j][i]['name'],
                      "brand": remains[j][i]['brand'],
                      "version": remains[j][i]['version'],
                      "numberOf": remains[j][i]['numberOf']
                    });
                  }
                }
              }
            }

            console.log(JSON.stringify(notifications));
            localStorage.setItem("NotiList", JSON.stringify(notifications));
            console.log(JSON.stringify(notifications));
            localStorage.setItem("NotifyNO", notifications.length.toString());
          });
        } //to get and show current number of notifications

      }, {
        key: "show",
        value: function show() {
          this.notifyNO = Number(localStorage.getItem("NotifyNO"));
        } //hidden and open side navigation bar

      }, {
        key: "navigate",
        value: function navigate(item) {
          var workSpace = document.querySelector('.workSpace');
          var links = document.getElementsByClassName("linking");
          this.selected = item.text;

          if (this.drawer.pin) {
            this.drawer.open();
          }
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('Notification')], SideNavComponent.prototype, "noti", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], SideNavComponent.prototype, "documentClick", null);
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      selector: 'app-side-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html")).default,
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-nav.component.css */
      "./src/app/side-nav/side-nav.component.css")).default]
    })], SideNavComponent);
    /***/
  },

  /***/
  "./src/app/stockpage/stockpage.component.css":
  /*!***************************************************!*\
    !*** ./src/app/stockpage/stockpage.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStockpageStockpageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stockpane{\r\n    overflow: scroll;\r\n    height: 500px;\r\n }\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-gap: 10px;\r\n    background-color: #2196F3;\r\n    padding: 10px;\r\n    font: 100px;\r\n  }\r\n\r\n.panel{\r\n    overflow: scroll;\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n     \r\n    padding: 10px;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.menuDisplay{\r\n  display: inline-block;\r\n}\r\n\r\nmat-card{\r\n    margin: 5px 5px 5px 5px;\r\n}\r\n\r\nsection{\r\n    background-color: rgb(12, 73, 122);\r\n    width: 100%;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n  }\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n\r\n/* Style the buttons */\r\n\r\n.btn {\r\n    border: none;\r\n    outline: none;\r\n    padding: 12px 16px;\r\n    background-color: #f1f1f1;\r\n    cursor: pointer;\r\n  }\r\n\r\n.btn:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n.btn.active {\r\n    background-color: #666;\r\n    color: white;\r\n  }\r\n\r\n.tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n  }\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n  }\r\n\r\n/* Style the buttons inside the tab */\r\n\r\n.tab button {\r\n    background-color: inherit;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n    font-size: 17px;\r\n  }\r\n\r\n/* Change background color of buttons on hover */\r\n\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n/* Create an active/current tablink class */\r\n\r\n.tab button.active {\r\n    background-color: #ccc;\r\n  }\r\n\r\nbutton{\r\n    size: 10px;\r\n  }\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1; \r\n    border-radius: 10px;\r\n\r\n  }\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgb(155, 154, 154); \r\n    border-radius: 10px;\r\n\r\n  }\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(155, 154, 154); \r\n    border-radius: 10px;\r\n  }\r\n\r\nejs-grid ejs-columns ejs-column{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: 25px;\r\n   max-height: 500px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2twYWdlL3N0b2NrcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUNBQXFDOztJQUVyQyxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUNBO0lBQ0ksc0JBQXNCO0VBQ3hCOztBQUVBLDREQUE0RDs7QUFDNUQ7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7RUFDZjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0FBQ0Esc0JBQXNCOztBQUN0QjtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0VBQzNCOztBQUVBLHFDQUFxQzs7QUFDckM7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0lBQ0Usc0JBQXNCO0VBQ3hCOztBQUVBLDJDQUEyQzs7QUFDM0M7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxXQUFXO0VBQ2I7O0FBRUEsVUFBVTs7QUFDVjtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7O0VBRXJCOztBQUVBLFdBQVc7O0FBQ1g7SUFDRSw4QkFBOEI7SUFDOUIsbUJBQW1COztFQUVyQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0lBQ0UsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLGdEQUFnRDtJQUNoRCxlQUFlO0dBQ2hCLGlCQUFpQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrcGFnZS9zdG9ja3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9ja3BhbmV7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuIH1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbi5wYW5lbHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tZW51RGlzcGxheXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA3MywgMTIyKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgKi9cclxuICAuYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgfVxyXG4gIC5idG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gXHJcbiAgLnRhYmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgfVxyXG4gIC50YWIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYnV0dG9ucyBpbnNpZGUgdGhlIHRhYiAqL1xyXG4gIC50YWIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXHJcbiAgLnRhYiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuICAudGFiIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgc2l6ZTogMTBweDtcclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhY2sgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgfVxyXG4gICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTUsIDE1NCwgMTU0KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU1LCAxNTQsIDE1NCk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgZWpzLWdyaWQgZWpzLWNvbHVtbnMgZWpzLWNvbHVtbntcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/stockpage/stockpage.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/stockpage/stockpage.component.ts ***!
    \**************************************************/

  /*! exports provided: StockpageComponent */

  /***/
  function srcAppStockpageStockpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockpageComponent", function () {
      return StockpageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @syncfusion/ej2-base */
    "./node_modules/@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js");

    var StockpageComponent =
    /*#__PURE__*/
    function () {
      function StockpageComponent(apiService) {
        _classCallCheck(this, StockpageComponent);

        this.apiService = apiService;
        this.externals = [];
        this.internals = [];
        this.electrics = [];
        this.generals = [];
        this.selectedPart = {
          gid: null,
          code: null,
          pname: null,
          brand: null,
          vers: null,
          purchase: null
        };
        this.cardItems = [{
          name: "account_circle",
          text: "Dashboard",
          path: "/",
          icon: "dashboard"
        }, {
          name: "error",
          text: "Notification",
          path: "/",
          icon: "notification_important"
        }, {
          name: "group_work",
          text: "Stock",
          path: "/stock",
          icon: "list"
        }, {
          name: "home",
          text: "Log",
          path: "/",
          icon: "history"
        }, {
          name: "view_carousel",
          text: "Add",
          path: "/",
          icon: "add_circle"
        }, {
          name: "poll",
          text: "Report",
          path: "/",
          icon: "receipt"
        }];
      } ////////////////////////////


      _createClass(StockpageComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.isLoading = false;
          var saveButton = document.getElementById("saveButton");
          this.save.bind(saveButton);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          //initial grid table// 
          this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true
          }; // edit setting

          this.searchSettings = {
            fields: ['code', 'name', 'brand']
          }; // search setting

          this.commands = [{
            buttonOption: {
              content: 'Details',
              cssClass: 'e-flat',
              click: this.save.bind(this)
            }
          }]; //individual command not use , remove later

          this.sortOptions = {
            columns: [{
              field: 'code',
              direction: 'Descending'
            }, {
              field: 'name',
              direction: 'Descending'
            }, {
              field: 'brand',
              direction: 'Descending'
            }, {
              field: 'version',
              direction: 'Descending'
            }, {
              field: 'purchase',
              direction: 'Descending'
            }, {
              field: 'price',
              direction: 'Descending'
            }, {
              field: 'number_of',
              direction: 'Descending'
            }, {
              field: 'sales',
              direction: 'Descending'
            }]
          };
          this.toolbar = ['Update', 'Cancel', 'Search']; // toolbar
          //get sparepart information

          this.apiService.readParts().subscribe(function (parts) {
            _this4.parts = parts;
            _this4.internals = _this4.parts[0];
            _this4.electrics = _this4.parts[1];
            _this4.externals = _this4.parts[2];
            _this4.generals = _this4.parts[3]; //console.log(this.parts);

            console.log(_this4.externals);
            console.log(_this4.internals);
            console.log(_this4.electrics);
            console.log(_this4.generals);
            _this4.partData = _this4.internals;
            console.log(_this4.partData);
          });
          /*   let grid: Grid = new Grid({
              dataSource: this.partData,
              searchSettings: this.searchSettings,
              allowSorting: true,
              editSettings: this.editSettings,
              toolbar: this.toolbar,
              selectionSettings: {type: 'Single'},
              columns: [
                  { field: 'code', headerText: 'รหัสอะไหล่', textAlign: 'Right', width: 90 },
                  { field: 'name', headerText: 'ชื่ออะไหล่', width: 90 },
                  { field: 'brand', headerText: 'ยี่ห้อ', width: 90 },
                  { field: 'version', headerText: 'รุ่น', width: 90 },
                  { field: 'purchase', headerText: 'ราคาซื้อ', width: 90 },
                  { field: 'price', headerText: 'ราคาขาย', width: 90 },
                  { field: 'numberOf', headerText: 'ยอดคงเหลือ', width: 90 },
                  { field: 'sales', headerText: 'ยอดขาย', width: 90 }
                        ],
              height: 315,
              rowSelected: this.update
          }); */
          //grid.appendTo('#tableGrid');
        } //update amount

      }, {
        key: "update",
        value: function update() {
          /* let selectedrowindex: number[] = this.gridView.getSelectedRowIndexes();  // get the selected row indexes.
          let selectedIndex = selectedrowindex[0]
          let selectedrecords: Element[] = this.gridView.getSelectedRows();
          let selectedrecord = selectedrecords[0];
          let selectedData = this.gridView.getRowByIndex(0);
          let data = this.gridView.getRowObjectFromUID("grid-row 11"); */
          var data = this.selectedRow;
          alert(JSON.stringify(data));
          alert(data["groupId"]);
          this.apiService.updatePart(data["groupId"], data["code"], data["name"], data["brand"], data["version"], data["purchase"], data["price"], data["numberOf"], data["sales"]); // get the selected records.  
        }
      }, {
        key: "save",
        value: function save(args) {
          console.log(args.target);

          try {
            var rowObj = this.gridView.getRowObjectFromUID(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__["closest"])(args.target, '.e-row').getAttribute('data-uid'));
            var data = rowObj.data;
            this.selectedRow = data;
          } catch (err) {} //this.apiService.updatePart(data["group"],data["code"],data["name"],data["brand"],data["version"],data["purchase"],data["price"],data["number_of"],data["sales"]);

        }
      }, {
        key: "chooseData",
        value: function chooseData() {
          var group = document.getElementById("group");
          var sel = group.selectedIndex;
          var selOpt = group.options[sel];
          var selGroup = selOpt.value;

          switch (selGroup) {
            case "externals":
              this.partData = this.externals;
              break;

            case "internals":
              this.partData = this.internals;
              break;

            case "electrics":
              this.partData = this.electrics;
              break;

            case "generals":
              this.partData = this.generals;
              break;

            default:
              this.partData = this.externals;
            //break;
          }
        }
      }]);

      return StockpageComponent;
    }();

    StockpageComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridView', {
      static: false
    })], StockpageComponent.prototype, "gridView", void 0);
    StockpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stockpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stockpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stockpage/stockpage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stockpage.component.css */
      "./src/app/stockpage/stockpage.component.css")).default]
    })], StockpageComponent);
    /***/
  },

  /***/
  "./src/assets/brandList.json":
  /*!***********************************!*\
    !*** ./src/assets/brandList.json ***!
    \***********************************/

  /*! exports provided: brandList, default */

  /***/
  function srcAssetsBrandListJson(module) {
    module.exports = JSON.parse("{\"brandList\":[{\"brand\":\"HONDA\",\"code\":\"HON\"},{\"brand\":\"YAMAHA\",\"code\":\"YAM\"},{\"brand\":\"พระอาทิตย์\",\"code\":\"SUN\"},{\"brand\":\"พระจันทร์\",\"code\":\"MON\"},{\"brand\":\"SUZUKI\",\"code\":\"SUZ\"},{\"brand\":\"CHEETAH\",\"code\":\"CHE\"},{\"brand\":\"CHIKADA\",\"code\":\"CKD\"},{\"brand\":\"VEERUBBER\",\"code\":\"VRB\"},{\"brand\":\"CHEETAH\",\"code\":\"CHE\"},{\"brand\":\"VEERUBBER\",\"code\":\"VRB\"},{\"brand\":\"OSAKI\",\"code\":\"OSK\"},{\"brand\":\"YOSHI\",\"code\":\"YSH\"},{\"brand\":\"CHAMPION\",\"code\":\"CHM\"},{\"brand\":\"SUN\",\"code\":\"SUN\"},{\"brand\":\"PROFIT\",\"code\":\"PFT\"},{\"brand\":\"WIND\",\"code\":\"WND\"},{\"brand\":\"สมอ\",\"code\":\"ANC\"},{\"brand\":\"MC\",\"code\":\"MCB\"},{\"brand\":\"AMTEX\",\"code\":\"AMT\"},{\"brand\":\"KRYON\",\"code\":\"KRY\"},{\"brand\":\"NGK\",\"code\":\"NGK\"},{\"brand\":\"MAGNUM\",\"code\":\"MGN\"},{\"brand\":\"LOCKTE\",\"code\":\"LCK\"},{\"brand\":\"HERO\",\"code\":\"HRO\"},{\"brand\":\"KOO\",\"code\":\"KOO\"},{\"brand\":\"ACTIV\",\"code\":\"ACT\"},{\"brand\":\"POWER\",\"code\":\"PWR\"},{\"brand\":\"SHAMPOO\",\"code\":\"SMP\"},{\"brand\":\"3M\",\"code\":\"3MB\"},{\"brand\":\"GO\",\"code\":\"GOB\"},{\"brand\":\"SPACE CROWN\",\"code\":\"SPC\"}]}");
    /***/
  },

  /***/
  "./src/assets/nameList.json":
  /*!**********************************!*\
    !*** ./src/assets/nameList.json ***!
    \**********************************/

  /*! exports provided: nameList, default */

  /***/
  function srcAssetsNameListJson(module) {
    module.exports = JSON.parse("{\"nameList\":[{\"name\":\"สายคันเร่ง\",\"code\":\"ACC\"},{\"name\":\"ลูกปืน\",\"code\":\"BRN\"},{\"name\":\"ชุดซ่อมคาบู\",\"code\":\"CBK\"},{\"name\":\"เฟืองไดร์สตาร์ตปลายทุ่น\",\"code\":\"CST\"},{\"name\":\"ผ้าเบรคดั๊ม\",\"code\":\"DMB\"},{\"name\":\"สายเบรคหน้า\",\"code\":\"FBK\"},{\"name\":\"ผ้าเบรคดั๊ม\",\"code\":\"DMB\"},{\"name\":\"ผ้าดิสเบรคหน้า\",\"code\":\"FDP\"},{\"name\":\"สเตอร์หน้า\",\"code\":\"FST\"},{\"name\":\"สเตอร์หลัง\",\"code\":\"RST\"},{\"name\":\"หัวเทียน\",\"code\":\"SPK\"},{\"name\":\"กระปุกไมล์\",\"code\":\"MLC\"},{\"name\":\"สายไมล์\",\"code\":\"MLS\"},{\"name\":\"ไส้กรองอากาศเดิม\",\"code\":\"OAF\"},{\"name\":\"ชุดซ่อมปั๊มบน\",\"code\":\"HPK\"},{\"name\":\"คอท่อ\",\"code\":\"PPN\"},{\"name\":\"ยางพักเท้า\",\"code\":\"RFR\"},{\"name\":\"ยางพักหลัง\",\"code\":\"RRR\"},{\"name\":\"หัวนกกระจอก\",\"code\":\"SPP\"},{\"name\":\"หมอนรองเบรคหลัง\",\"code\":\"SRB\"},{\"name\":\"สต็อบเบรคหน้า-หลัง\",\"code\":\"SBB\"},{\"name\":\"หางปลา\",\"code\":\"TNN\"},{\"name\":\"ถ่านไดร์สตาร์ท\",\"code\":\"CHD\"},{\"name\":\"แบตเตอรี่แห้ง\",\"code\":\"DBT\"},{\"name\":\"ขั้วไฟหน้าเดิม\",\"code\":\"FLP\"},{\"name\":\"สวิตช์ไฟสูง-ต่ำ\",\"code\":\"SHL\"},{\"name\":\"หลอดไฟเลี้ยว\",\"code\":\"TLM\"},{\"name\":\"หลอดไฟท้าย\",\"code\":\"RLM\"},{\"name\":\"รีเลย์ไฟเลี้ยว\",\"code\":\"RTL\"},{\"name\":\"สวิตช์ไฟเลี้ยว\",\"code\":\"STL\"},{\"name\":\"ยางนอก\",\"code\":\"EWH\"},{\"name\":\"ยางใน\",\"code\":\"IWH\"},{\"name\":\"ยางเรเดี้ยน\",\"code\":\"RWH\"},{\"name\":\"โซ่ดำ\",\"code\":\"BCH\"},{\"name\":\"สายพาน\",\"code\":\"BLT\"},{\"name\":\"ตะกร้า\",\"code\":\"BSK\"},{\"name\":\"สะพานโซ่\",\"code\":\"CHB\"},{\"name\":\"ตัวตั้งโซ่\",\"code\":\"CHS\"},{\"name\":\"โซ่ราวลิ้น\",\"code\":\"CHC\"},{\"name\":\"ซี่\",\"code\":\"WCK\"},{\"name\":\"มือเบรค\",\"code\":\"BRK\"},{\"name\":\"ขาตั้ง\",\"code\":\"STD\"},{\"name\":\"ล้อโล\",\"code\":\"WMT\"},{\"name\":\"กระจกเดิม\",\"code\":\"MRO\"},{\"name\":\"กระบอกดันโซ่\",\"code\":\"PPC\"},{\"name\":\"กันลาย\",\"code\":\"PRT\"},{\"name\":\"ยางดุม\",\"code\":\"RBB\"},{\"name\":\"ยางกลิ้งโซ่\",\"code\":\"RWH\"},{\"name\":\"ยางอุดกระบอกดันโซ่\",\"code\":\"RBH\"},{\"name\":\"ยางกดโซ่\",\"code\":\"RBP\"},{\"name\":\"ซีลแกนเกียร์\",\"code\":\"ZGR\"},{\"name\":\"ซีลแกนสตาร์ท\",\"code\":\"ZST\"},{\"name\":\"ซีลสเตอร์\",\"code\":\"ZTR\"},{\"name\":\"สปริงกระบอกดันโซ่\",\"code\":\"PPS\"},{\"name\":\"ยางนอก\",\"code\":\"EWH\"},{\"name\":\"ยางใน\",\"code\":\"IWH\"},{\"name\":\"น็อตฝาวาว์ล\",\"code\":\"NTL\"},{\"name\":\"กรอบ พ.ร.บ\",\"code\":\"FCA\"},{\"name\":\"น้ำมัน\",\"code\":\"FLS\"},{\"name\":\"กรองน้ำมัน\",\"code\":\"FLF\"},{\"name\":\"สเปรย์หล่อลื่น\",\"code\":\"GSP\"},{\"name\":\"หมวกกันน็อค\",\"code\":\"HLM\"},{\"name\":\"ปลอกแฮนด์\",\"code\":\"HDC\"},{\"name\":\"กรอบป้ายทะเบียน\",\"code\":\"FRM\"}]}");
    /***/
  },

  /***/
  "./src/assets/versionList.json":
  /*!*************************************!*\
    !*** ./src/assets/versionList.json ***!
    \*************************************/

  /*! exports provided: versionList, specificList, default */

  /***/
  function srcAssetsVersionListJson(module) {
    module.exports = JSON.parse("{\"versionList\":{\"bike\":[{\"name\":\"RC\",\"code\":\"V00\"},{\"name\":\"RX\",\"code\":\"V01\"},{\"name\":\"PCS\",\"code\":\"V02\"},{\"name\":\"PCX\",\"code\":\"V03\"},{\"name\":\"CBR\",\"code\":\"V04\"},{\"name\":\"SMASH\",\"code\":\"V05\"},{\"name\":\"DREAM\",\"code\":\"V06\"},{\"name\":\"WAVE\",\"code\":\"V08\"},{\"name\":\"WAVE 100\",\"code\":\"V09\"},{\"name\":\"WAVE 100S\",\"code\":\"V10\"},{\"name\":\"WAVE 110I\",\"code\":\"V11\"},{\"name\":\"WAVE 125\",\"code\":\"V12\"},{\"name\":\"SCOOPY I\",\"code\":\"V13\"},{\"name\":\"SCOOPY I 125 NE 2012\",\"code\":\"V14\"},{\"name\":\"CLICK\",\"code\":\"V15\"},{\"name\":\"CLICK 125I\",\"code\":\"V16\"},{\"name\":\"MIO\",\"code\":\"V17\"},{\"name\":\"MIO 115I\",\"code\":\"V18\"},{\"name\":\"12N5 MIO\",\"code\":\"V19\"},{\"name\":\"MSX\",\"code\":\"V20\"},{\"name\":\"RX\",\"code\":\"V21\"},{\"name\":\"FILANO\",\"code\":\"V22\"},{\"name\":\"FIORE\",\"code\":\"V23\"},{\"name\":\"NINJA\",\"code\":\"V24\"},{\"name\":\"NOUVO\",\"code\":\"V25\"},{\"name\":\"NOVA\",\"code\":\"V26\"},{\"name\":\"RX\",\"code\":\"V27\"},{\"name\":\"TEENA\",\"code\":\"V28\"},{\"name\":\"TTX\",\"code\":\"V29\"},{\"name\":\"YTZ\",\"code\":\"V30\"},{\"name\":\"TZ5S\",\"code\":\"V31\"},{\"name\":\"ZOOMER-X\",\"code\":\"V32\"},{\"name\":\"ZM NEW\",\"code\":\"V33\"},{\"name\":\"RX\",\"code\":\"V34\"},{\"name\":\"ทั่วไป\",\"code\":\"V35\"}],\"generals\":[{\"name\":\"แคปซูล การ์ตูน\",\"code\":\"G00\"},{\"name\":\"แคปซูล บาง\",\"code\":\"G01\"},{\"name\":\"ลายคาด\",\"code\":\"G02\"},{\"name\":\"AUTO 0.92 ลิตร + น้ำมันเฟืองท้าย\",\"code\":\"G03\"},{\"name\":\"2T\",\"code\":\"G04\"},{\"name\":\"0.8 ลิตร\",\"code\":\"G05\"},{\"name\":\"1.0 ลิตร\",\"code\":\"G06\"},{\"name\":\"1 0.8 ลิตร\",\"code\":\"G07\"},{\"name\":\"1 1.0 ลิตร\",\"code\":\"G08\"},{\"name\":\"ธรรมดา\",\"code\":\"G09\"},{\"name\":\"เล็ก\",\"code\":\"G10\"},{\"name\":\"กลาง\",\"code\":\"G11\"},{\"name\":\"ใหญ่\",\"code\":\"G12\"},{\"name\":\"การ์ตูน กรอบเหล็ก\",\"code\":\"G13\"},{\"name\":\"ธรรมดา\",\"code\":\"G14\"},{\"name\":\"1 RACING 10W-40 4T\",\"code\":\"G15\"},{\"name\":\"1 RACING 10W-50 4T\",\"code\":\"G16\"}]},\"specificList\":{\"generic\":[{\"name\":\"เกรด AAA\",\"code\":\"GD0\"}],\"chain\":[{\"name\":\"428-100\",\"code\":\"CH0\"},{\"name\":\"428-104\",\"code\":\"CH1\"},{\"name\":\"428-106\",\"code\":\"CH2\"},{\"name\":\"428-112\",\"code\":\"CH3\"},{\"name\":\"428-120\",\"code\":\"CH4\"}],\"wheel\":[{\"name\":\"100/90-12\",\"code\":\"W00\"},{\"name\":\"100/90-14\",\"code\":\"W01\"},{\"name\":\"200-17\",\"code\":\"W02\"},{\"name\":\"225-17\",\"code\":\"W03\"},{\"name\":\"250-17\",\"code\":\"W04\"},{\"name\":\"275-17\",\"code\":\"W05\"},{\"name\":\"70/90-14\",\"code\":\"W06\"},{\"name\":\"80/90-14\",\"code\":\"W07\"},{\"name\":\"90/90-14\",\"code\":\"W08\"},{\"name\":\"70/90-16\",\"code\":\"W09\"},{\"name\":\"140-17 ทองเข้ม\",\"code\":\"W0A\"},{\"name\":\"140-17 ทองอ่อน\",\"code\":\"W0B\"},{\"name\":\"140-17 น้ำเงิน\",\"code\":\"W0C\"}],\"ster\":[{\"name\":\"428 35T\",\"code\":\"S00\"},{\"name\":\"428 14T\",\"code\":\"S01\"}],\"bearing\":[{\"name\":\"6001\",\"code\":\"B00\"},{\"name\":\"6200\",\"code\":\"B01\"},{\"name\":\"6201\",\"code\":\"B02\"},{\"name\":\"6203\",\"code\":\"B03\"},{\"name\":\"6301\",\"code\":\"B04\"}],\"break\":[{\"name\":\"DRUM\",\"code\":\"BK0\"},{\"name\":\"DISC\",\"code\":\"BK1\"},{\"name\":\"แพ็ค 5 คู่\",\"code\":\"BK2\"},{\"name\":\"เดี๋ยว+สปริง\",\"code\":\"BK3\"}]}}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\mrkprjV1\mbkV1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map