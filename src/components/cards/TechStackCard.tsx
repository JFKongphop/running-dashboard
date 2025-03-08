import type { FC, ReactNode} from 'react';

interface ITechStackCard {
  children: ReactNode;
}

const TechStackCard: FC<ITechStackCard> = ({ children }) => {
  return (
    <div 
      className="border h-20 border-bright-shade rounded-lg hover:border-white flex flex-col justify-center items-center p-2 gap-1"
    >
      {children}
    </div>
  )
}

export default TechStackCard;