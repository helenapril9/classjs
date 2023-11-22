"use strict";

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Character = /*#__PURE__*/function () {
  function Character(name, type, health, level, attack, defence) {
    _classCallCheck(this, Character);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
  _createClass(Character, [{
    key: "checkType",
    value: function checkType(type) {
      var arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (arr.includes(type) == false) {
        throw new Error("Нет такого типа");
      }
    }
  }, {
    key: "checkName",
    value: function checkName(name) {
      if (typeof name !== 'string') {
        throw new Error("Не строка");
      }
      if (name.length < 2 || name.length > 10) {
        throw new Error("Количество символов в имени должно быть от 2 до 10 ");
      }
    }
  }]);
  return Character;
}();
var Daemon = /*#__PURE__*/function (_Character) {
  _inherits(Daemon, _Character);
  var _super = _createSuper(Daemon);
  function Daemon(name, type, health, level, attack, defence) {
    var _thisSuper, _thisSuper2, _this;
    _classCallCheck(this, Daemon);
    _this = _super.call(this, name, type, health, level, attack, defence);
    _this.attack = 10;
    _this.defence = 40;
    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Daemon.prototype)), "checkType", _thisSuper).call(_thisSuper, type);
    _get((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(Daemon.prototype)), "checkName", _thisSuper2).call(_thisSuper2, name);
    return _this;
  }
  return _createClass(Daemon);
}(Character);
var Bowman = /*#__PURE__*/function (_Character2) {
  _inherits(Bowman, _Character2);
  var _super2 = _createSuper(Bowman);
  function Bowman(name, type, health, level, attack, defence) {
    var _thisSuper3, _thisSuper4, _this2;
    _classCallCheck(this, Bowman);
    _this2 = _super2.call(this, name, type, health, level, attack, defence);
    _this2.attack = 25;
    _this2.defence = 25;
    _get((_thisSuper3 = _assertThisInitialized(_this2), _getPrototypeOf(Bowman.prototype)), "checkType", _thisSuper3).call(_thisSuper3, type);
    _get((_thisSuper4 = _assertThisInitialized(_this2), _getPrototypeOf(Bowman.prototype)), "checkName", _thisSuper4).call(_thisSuper4, name);
    return _this2;
  }
  return _createClass(Bowman);
}(Character);
var Swordsman = /*#__PURE__*/function (_Character3) {
  _inherits(Swordsman, _Character3);
  var _super3 = _createSuper(Swordsman);
  function Swordsman(name, type, health, level, attack, defence) {
    var _thisSuper5, _thisSuper6, _this3;
    _classCallCheck(this, Swordsman);
    _this3 = _super3.call(this, name, type, health, level, attack, defence);
    _this3.attack = 40;
    _this3.defence = 10;
    _get((_thisSuper5 = _assertThisInitialized(_this3), _getPrototypeOf(Swordsman.prototype)), "checkType", _thisSuper5).call(_thisSuper5, type);
    _get((_thisSuper6 = _assertThisInitialized(_this3), _getPrototypeOf(Swordsman.prototype)), "checkName", _thisSuper6).call(_thisSuper6, name);
    return _this3;
  }
  return _createClass(Swordsman);
}(Character);
var Magician = /*#__PURE__*/function (_Character4) {
  _inherits(Magician, _Character4);
  var _super4 = _createSuper(Magician);
  function Magician(name, type, health, level, attack, defence) {
    var _thisSuper7, _thisSuper8, _this4;
    _classCallCheck(this, Magician);
    _this4 = _super4.call(this, name, type, health, level, attack, defence);
    _this4.attack = 10;
    _this4.defence = 40;
    _get((_thisSuper7 = _assertThisInitialized(_this4), _getPrototypeOf(Magician.prototype)), "checkType", _thisSuper7).call(_thisSuper7, type);
    _get((_thisSuper8 = _assertThisInitialized(_this4), _getPrototypeOf(Magician.prototype)), "checkName", _thisSuper8).call(_thisSuper8, name);
    return _this4;
  }
  return _createClass(Magician);
}(Character);
var Undead = /*#__PURE__*/function (_Character5) {
  _inherits(Undead, _Character5);
  var _super5 = _createSuper(Undead);
  function Undead(name, type, health, level, attack, defence) {
    var _thisSuper9, _thisSuper10, _this5;
    _classCallCheck(this, Undead);
    _this5 = _super5.call(this, name, type, health, level, attack, defence);
    _this5.attack = 25;
    _this5.defence = 25;
    _get((_thisSuper9 = _assertThisInitialized(_this5), _getPrototypeOf(Undead.prototype)), "checkType", _thisSuper9).call(_thisSuper9, type);
    _get((_thisSuper10 = _assertThisInitialized(_this5), _getPrototypeOf(Undead.prototype)), "checkName", _thisSuper10).call(_thisSuper10, name);
    return _this5;
  }
  return _createClass(Undead);
}(Character);
var Zombie = /*#__PURE__*/function (_Character6) {
  _inherits(Zombie, _Character6);
  var _super6 = _createSuper(Zombie);
  function Zombie(name, type, health, level, attack, defence) {
    var _thisSuper11, _thisSuper12, _this6;
    _classCallCheck(this, Zombie);
    _this6 = _super6.call(this, name, type, health, level, attack, defence);
    _this6.attack = 40;
    _this6.defence = 10;
    _get((_thisSuper11 = _assertThisInitialized(_this6), _getPrototypeOf(Zombie.prototype)), "checkType", _thisSuper11).call(_thisSuper11, type);
    _get((_thisSuper12 = _assertThisInitialized(_this6), _getPrototypeOf(Zombie.prototype)), "checkName", _thisSuper12).call(_thisSuper12, name);
    return _this6;
  }
  return _createClass(Zombie);
}(Character);