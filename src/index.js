/**
 * @file Melon Floating Button
 * @author leon <ludafa@outlook.com>
 */

import React, {PureComponent, cloneElement, Children} from 'react';
import PropTypes from 'prop-types';
import {create} from 'melon-core/classname/cxBuilder';

const cx = create('FloatingActionButton');

export default class FloatingActionButton extends PureComponent {

    constructor(...args) {

        super(...args);

        this.state = {
            open: false
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

    }

    onMouseEnter() {
        this.setState({open: true});
    }

    onMouseLeave() {
        this.setState({open: false});
    }

    render() {

        let {
            children,
            position,
            offset,
            variants,
            states,
            size
        } = this.props;

        let onLeft = position.indexOf('l') >= 0;
        let onTop = position.indexOf('t') >= 0;
        let {x, y} = offset;

        let style = {
            [onLeft ? 'left' : 'right']: x,
            [onTop ? 'top' : 'bottom']: y
        };

        let count = Children.count(children);
        let open = this.state.open;

        children = Children
            .toArray(children)
            .filter(child => !!child)
            .map((child, index) => {

                let {
                    title = '',
                    variants = []
                } = child.props;

                child = cloneElement(child, {
                    size: child.props.size || size,
                    variants: [
                        ...variants,
                        'icon', 'floating'
                    ],
                    title: null
                });

                let itemStyle = Object.keys(style).reduce((nextStyle, key) => {

                    let dir = position.indexOf('t') > -1 ? 1 : -1;
                    let distance = open ? dir * index * 3 : 0;

                    nextStyle.transform = index > 0
                        ? `translateY(${distance}em)`
                        : `rotate(${open ? 360 : 0}deg)`;

                    nextStyle[key] = '0';

                    return nextStyle;

                }, {
                    zIndex: count - index,
                    opacity: open || index === 0 ? 1 : 0
                });

                return (
                    <li
                        data-title={index > 0 ? title : null}
                        key={index}
                        className={cx.getPartClassName('item')}
                        style={itemStyle}>
                        {child}
                    </li>
                );

            });

        let className = cx(this.props)
            .addVariants(variants, position)
            .addStates(states, {open})
            .build();

        return (
            <ul
                className={className}
                style={style}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}>
                {children}
            </ul>
        );

    }

}

FloatingActionButton.propTypes = {
    position: PropTypes.oneOf([
        'tl',
        'tr',
        'bl',
        'br'
    ]),
    offset: PropTypes.shape({
        x: PropTypes.string.isRequired,
        y: PropTypes.string.isRequired
    }).isRequired
};

FloatingActionButton.defaultProps = {
    position: 'br',
    offset: {
        x: '2rem',
        y: '2rem'
    }
};
