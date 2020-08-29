import React from 'react';
import Input from './Input';
import Center from '../center/Center'

export default {
    title: 'My Test/Input',
    Component: Input,
    decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input variant='small' placeholderText='small' />
export const Medium = () => <Input variant='medium' placeholderText='medium' />
export const Large = () => <Input variant='large' placeholderText='large' />