import { FC } from 'react';

interface ITechStackDescriptionCard {
  description: String;
}

const TechStackDescriptionCard: FC<ITechStackDescriptionCard> = ({ description }) => {
  return (
    <p 
    className="max-sm:text-[8px] text-xs opacity-50 text-center"
  >
    {description}
  </p>
  )
}

export default TechStackDescriptionCard;