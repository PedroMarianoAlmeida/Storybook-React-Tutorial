import React from 'react';
import Input from './Input';

export default {
    title: 'Input',
    Component: Input,
}

export const Small = () => <Input variant='small' placeholderText='small' />
export const Medium = () => <Input variant='medium' placeholderText='medium' />
export const Large = () => <Input variant='large' placeholderText='large' />