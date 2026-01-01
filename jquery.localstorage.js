/*
 * jQuery Local Storage Plugin v1.0.0
 */
(function ($) {
  var localStorage = window.localStorage;
  $.support.localStorage = localStorage ? true : false;

  var remove = $.removeLocalStorage = function (key) {
    if (localStorage) localStorage.removeItem(key);
    return;
  };

  function allStorage () {
    return localStorage ? localStorage : undefined;
  }

  var config = $.localStorage = function (key, value) {
    // All Read
    if (arguments.length === 0 ) return allStorage(key);

    // Write
    if (value !== undefined) {
      if (localStorage) localStorage.setItem(key, value);
    }

    // Read
    var result;
    if (localStorage) {
      var lsValue = localStorage.getItem(key);
      if (lsValue !== null) result = lsValue;
    }
    return result;
  };

  var io = $.localStorage.io = function (key) {
    return {read : function () {
      return config(key);
    }, write : function (value) {
      return config(key, value);
    }, remove : function () {
      return remove(key);
    }, key : key
    };
  };

})(jQuery);
