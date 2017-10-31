(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types', 'melon-core/classname/cxBuilder'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('melon-core/classname/cxBuilder'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.cxBuilder);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _propTypes, _cxBuilder) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var cx = (0, _cxBuilder.create)('FloatingActionButton');

    var FloatingActionButton = function (_PureComponent) {
        _inherits(FloatingActionButton, _PureComponent);

        function FloatingActionButton() {
            var _ref;

            _classCallCheck(this, FloatingActionButton);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = _possibleConstructorReturn(this, (_ref = FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).call.apply(_ref, [this].concat(args)));

            _this.state = {
                open: false
            };

            _this.onMouseEnter = _this.onMouseEnter.bind(_this);
            _this.onMouseLeave = _this.onMouseLeave.bind(_this);

            return _this;
        }

        _createClass(FloatingActionButton, [{
            key: 'onMouseEnter',
            value: function onMouseEnter() {
                this.setState({ open: true });
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave() {
                this.setState({ open: false });
            }
        }, {
            key: 'render',
            value: function render() {
                var _style;

                var _props = this.props,
                    children = _props.children,
                    position = _props.position,
                    offset = _props.offset,
                    variants = _props.variants,
                    states = _props.states,
                    size = _props.size;


                var onLeft = position.indexOf('l') >= 0;
                var onTop = position.indexOf('t') >= 0;
                var x = offset.x,
                    y = offset.y;


                var style = (_style = {}, _defineProperty(_style, onLeft ? 'left' : 'right', x), _defineProperty(_style, onTop ? 'top' : 'bottom', y), _style);

                var count = _react.Children.count(children);
                var open = this.state.open;

                children = _react.Children.toArray(children).filter(function (child) {
                    return !!child;
                }).map(function (child, index) {
                    var _child$props = child.props,
                        _child$props$title = _child$props.title,
                        title = _child$props$title === undefined ? '' : _child$props$title,
                        _child$props$variants = _child$props.variants,
                        variants = _child$props$variants === undefined ? [] : _child$props$variants;


                    child = (0, _react.cloneElement)(child, {
                        size: child.props.size || size,
                        variants: [].concat(_toConsumableArray(variants), ['icon', 'floating']),
                        title: null
                    });

                    var itemStyle = Object.keys(style).reduce(function (nextStyle, key) {

                        var dir = position.indexOf('t') > -1 ? 1 : -1;
                        var distance = open ? dir * index * 3 : 0;

                        nextStyle.transform = index > 0 ? 'translateY(' + distance + 'em)' : 'rotate(' + (open ? 360 : 0) + 'deg)';

                        nextStyle[key] = '0';

                        return nextStyle;
                    }, {
                        zIndex: count - index,
                        opacity: open || index === 0 ? 1 : 0
                    });

                    return _react2.default.createElement(
                        'li',
                        {
                            'data-title': index > 0 ? title : null,
                            key: index,
                            className: cx.getPartClassName('item'),
                            style: itemStyle },
                        child
                    );
                });

                var className = cx(this.props).addVariants(variants, position).addStates(states, { open: open }).build();

                return _react2.default.createElement(
                    'ul',
                    {
                        className: className,
                        style: style,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave },
                    children
                );
            }
        }]);

        return FloatingActionButton;
    }(_react.PureComponent);

    exports.default = FloatingActionButton;


    FloatingActionButton.propTypes = {
        position: _propTypes2.default.oneOf(['tl', 'tr', 'bl', 'br']),
        offset: _propTypes2.default.shape({
            x: _propTypes2.default.string.isRequired,
            y: _propTypes2.default.string.isRequired
        }).isRequired
    };

    FloatingActionButton.defaultProps = {
        position: 'br',
        offset: {
            x: '2rem',
            y: '2rem'
        }
    };
});
//# sourceMappingURL=index.js.map
