import React from 'react';

import { URL_IMAGE } from 'src/config';

export default function Logo({ ImagesCurrent }) {
  return (
    <a id="logoLink" className="transition-all duration-300" href="#">
      <img src={`${URL_IMAGE}/${ImagesCurrent?.logo_dark}`} alt="Logo" className="w-[200px]  " />
    </a>
  );
}
