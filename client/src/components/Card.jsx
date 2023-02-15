/* eslint-disable react/prop-types */
import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img src={photo} alt={prompt} className="w-full h-auto object-cover rounded-xl" />

  </div>
);

export default Card;
