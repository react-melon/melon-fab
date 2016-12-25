(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'classnames'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('classnames'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.classnames);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _classnames) {
    'use strict';

    exports.__esModule = true;

    var _react2 = _interopRequireDefault(_react);

    var _classnames2 = _interopRequireDefault(_classnames);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

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

    var FloatingButton = function (_Component) {
        _inherits(FloatingButton, _Component);

        function FloatingButton() {
            _classCallCheck(this, FloatingButton);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.state = {
                open: false
            };
            return _this;
        }

        FloatingButton.prototype.render = function render() {
            var _style,
                _this2 = this;

            var _props = this.props,
                children = _props.children,
                position = _props.position,
                offset = _props.offset;


            var onLeft = position.indexOf('l') >= 0;
            var onTop = position.indexOf('t') >= 0;
            var x = offset.x,
                y = offset.y;


            var style = (_style = {}, _style[onLeft ? 'left' : 'right'] = x, _style[onTop ? 'top' : 'bottom'] = y, _style);

            var count = _react.Children.count(children);
            var open = this.state.open;

            children = _react.Children.toArray(children).map(function (child, index) {
                var _child$props = child.props,
                    _child$props$title = _child$props.title,
                    title = _child$props$title === undefined ? '' : _child$props$title,
                    _child$props$variants = _child$props.variants,
                    variants = _child$props$variants === undefined ? [] : _child$props$variants;


                child = (0, _react.cloneElement)(child, {
                    variants: [].concat(variants, ['icon', 'floating']),
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

                return _react2['default'].createElement(
                    'li',
                    {
                        'data-title': index > 0 ? title : null,
                        key: index,
                        className: 'ui-floating-action-button-item',
                        style: itemStyle },
                    child
                );
            });

            var className = (0, _classnames2['default'])('ui-floating-action-button', 'variants-' + position, open ? 'state-open' : '');

            return _react2['default'].createElement(
                'ul',
                {
                    className: className,
                    style: style,
                    onMouseEnter: function onMouseEnter(e) {
                        return _this2.setState({ open: true });
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        return _this2.setState({ open: false });
                    } },
                children
            );
        };

        return FloatingButton;
    }(_react.Component);

    exports['default'] = FloatingButton;


    FloatingButton.propTypes = {
        position: _react.PropTypes.oneOf(['tl', 'tr', 'bl', 'br']),
        offset: _react.PropTypes.shape({
            x: _react.PropTypes.string.isRequired,
            y: _react.PropTypes.string.isRequired
        }).isRequired
    };

    FloatingButton.defaultProps = {
        position: 'br',
        offset: {
            x: '2rem',
            y: '2rem'
        }
    };
});
//# sourceMappingURL=index.js.map
