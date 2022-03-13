import React from 'react';

import { SkeletronContainer } from './styles';

interface ISkeletron{
    width: string;
    height: string;
}

const Skeletron: React.FC<ISkeletron> = ({height,width}) => {
  return (
      <SkeletronContainer width={width} height={height} />
  )
}

export default Skeletron;