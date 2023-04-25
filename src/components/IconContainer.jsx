import React from 'react';

const IconContainer = ({ width = 32, height = 32, className, ...rest }) => <div className={className} style={{ width, height }} {...rest} />;

export default IconContainer;
