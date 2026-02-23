import { Iconify } from 'src/components/iconify';

const Card = ({ className = '', icon, title, description }) => (
  <div className={`rounded-[30px] bg-white py-2 flex items-center justify-center ${className}`}>
    <div className="flex items-center gap-3">
      {/* أيقونة مع حدود */}
      <div className="border-2 border-gray-400 rounded-full p-1 flex items-center justify-center w-4 h-4 bg-white/30">
        <Iconify icon={icon} width={25} color="white" />
      </div>

      {/* النصوص */}
      <div>
        <h2 className="text-lg md:text-sm font-light">{title}</h2>
        <p className="text-lg md:text-xl font-bold gap-2 ">{description}</p>
      </div>
    </div>
  </div>
);

export default Card;
