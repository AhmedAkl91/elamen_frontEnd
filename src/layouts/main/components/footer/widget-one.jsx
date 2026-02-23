import Link from 'next/link';

import { URL_IMAGE } from 'src/config';

export default function WidgetOne({ dataImage, AboutCurrent }) {
  return (
    <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-start ">
      <div className="font-bold">
        <Link href="/">
          <img
            src={`${URL_IMAGE}/${dataImage?.logo_admin_footer}`}
            alt=" Logo"
            className="w-40 h-auto md:w-auto"
          />
        </Link>

        <p className=" mt-1 text-gray-400 text-sm leading-3 mb-3 text-justify">
          {AboutCurrent?.description2}
        </p>
      </div>
    </div>
  );
}
