import type { FC } from 'react';
import type { IconType } from 'react-icons';

interface ILinkCard {
  Icon: IconType;
  link: string;
  name: string;
}

const LinkCard: FC<ILinkCard> = ({
  Icon,
  link,
  name
}) => {
  return (
    <div 
      className="hover:ring-2 hover:ring-[#4b5563] px-4 py-2 rounded-4xl w-full flex flex-row items-center gap-2 bg-[#111827] cursor-pointer justify-center"
    >
      <Icon className="w-4 h-4" />
      <a 
        href={link}
        target="_blank" 
        className="text-white text-sm tracking-wider"
      >
        {name}
      </a>
    </div>
  )
}

export default LinkCard;