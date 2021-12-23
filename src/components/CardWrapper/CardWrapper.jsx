import { useState } from "react";
import { Card } from "..";
import classes from "./CardWrapper.module.scss";

const CardWrapper = ({ cards }) => {
  const [highlightCard, setHighlightCard] = useState();

  return (
    <div className={classes["card-wrapper"]}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          symbol={card.symbol}
          createdTimeStamp={card.createdTimestamp}
          leaseEnd={card.leaseEnd}
          blockNumber={card.blockNumber}
          highlighted={highlightCard === card.id}
          status={card.status}
          onClick={(val) =>
            /* this little logic to remove the highlight on clicking on the highlighted card */
            setHighlightCard(val === highlightCard ? undefined : val)
          }
        />
      ))}
    </div>
  );
};

export default CardWrapper;
