import React from 'react';
import { LinkProps } from '../../interfaces/headerTypes';
import * as L from './styles';


export default function CustomLink({ href, text }: LinkProps) {
    return <L.Links href={href}>{text}</L.Links>;
};