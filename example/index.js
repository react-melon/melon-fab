/**
 * @file melon form demo
 * @author leon <ludafa@outlook.com>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import MelonFloatingButton from '../src/index';
import Button from 'melon/Button';
import Icon from 'melon/Icon';

import './index.styl';

ReactDOM.render(
    <main>
        <MelonFloatingButton size="xxl" position="tl">
            <Button title="add" size="xxl" variants={['info']}>
                <Icon icon="add" />
            </Button>
            <Button title="alarm-on" size="m" variants={['info']}>
                <Icon icon="alarm-on" />
            </Button>
            <Button title="account-balance" size="s" variants={['info']}>
                <Icon icon="account-balance" />
            </Button>
        </MelonFloatingButton>
        <MelonFloatingButton size="xl" position="tr">
            <Button title="add" variants={['info']}>
                <Icon icon="add" />
            </Button>
            <Button title="alarm-on" variants={['info']}>
                <Icon icon="alarm-on" />
            </Button>
            <Button title="account-balance" variants={['info']}>
                <Icon icon="account-balance" />
            </Button>
        </MelonFloatingButton>
        <MelonFloatingButton size="xxs" position="bl" offset={{x: '10rem', y: '10rem'}}>
            <Button title="add" variants={['info']}>
                <Icon icon="add" />
            </Button>
            <Button title="alarm-on" variants={['info']}>
                <Icon icon="alarm-on" />
            </Button>
            <Button title="account-balance" variants={['info']}>
                <Icon icon="account-balance" />
            </Button>
        </MelonFloatingButton>
        <MelonFloatingButton size="xs" position="br">
            <Button title="add" variants={['info']}>
                <Icon icon="add" />
            </Button>
            <Button title="alarm-on" variants={['info']}>
                <Icon icon="alarm-on" />
            </Button>
            <Button title="account-balance" variants={['info']}>
                <Icon icon="account-balance" />
            </Button>
        </MelonFloatingButton>
    </main>,
    document.querySelector('#main')
);
