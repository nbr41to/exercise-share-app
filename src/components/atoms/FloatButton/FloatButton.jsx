import React from 'react';
import StyledButton from "./FloatButton.styled"

export default function Button({
    value,
    type,
    color,
    onClick,
}) {
    return (
        <StyledButton type={type} color={color} onClick={onClick}>
            {value}
        </StyledButton>
    );
}

