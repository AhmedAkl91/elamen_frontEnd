import { URL_IMAGE } from 'src/config';

import { Iconify } from 'src/components/iconify';

export default function TestimonialsItem({ testimonial: { awards, image, job_title, name } }) {
  return (
    <div className="w-full mx-auto mb-5 group max-sm:mb-2">
      {/* testimonial box */}
      <div className="pr-[20px]">
        <div className="relative border border-[1px] border-[rgba(187,187,187,0.24)] rounded-xl ">
          <Iconify
            icon="fa:quote-left"
            width={60}
            className=" text-[#D3D3D3] group-hover:text-[var(--thm-base)] group-hover:fill-[var(--thm-base)] transition-colors duration-300 mb-6 absolute left-[20%]  top-[-30px] z-15"
          />

          {/* Shadow box */}
          <div className="absolute top-[12%] left-[12%] w-[92%] h-[92%] bg-[#D3D3D3] rounded-2xl group-hover:bg-[var(--thm-base)] transition-all duration-300 max-sm:hidden" />

          {/* Main card */}
          <div className="relative bg-white rounded-2xl p-5 pt-10 shadow-lg z-10 max-sm:p-3">
            <div
              className="text-sm leading-relaxed font-medium  mb-6 text-[#7a7a7a] text-justify max-sm:text-sm max-sm:mt-5 line-clamp-3"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: awards }}
            />
          </div>

          {/* Triangle pointer */}
          <div className="absolute left-[20%] bottom-[-56px] z-1 w-0 h-0 border-l-[32px] border-r-[32px] border-t-[28px] border-b-[28px] border-l-transparent border-b-transparent border-t-[#D3D3D3] border-r-[#D3D3D3] group-hover:border-r-[var(--thm-base)] group-hover:border-t-[var(--thm-base)] transition-all duration-300" />
        </div>
      </div>

      {/* Author info */}
      <div className="flex items-center mt-10 ml-[calc(20%+60px)] relative z-1">
        <img
          src={`${URL_IMAGE}/${image}`}
          alt={name}
          className="w-8 h-8 rounded-full object-cover mr-4 shadow-lg border-2 border-white"
        />
        <div>
          <h4 className="font-bold text-cyan-500 text-base">{name}</h4>
          <p className="text-gray-500 text-sm">{job_title}</p>
        </div>
      </div>
    </div>
  );
}
