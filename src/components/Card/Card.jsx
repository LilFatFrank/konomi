import { Card as AntdCard, Typography } from "antd";
import { Sprite } from "..";
import classes from "./Card.module.scss";
import { getEndDate } from "src/utils/Utility";

const Card = ({
  id,
  symbol,
  highlighted,
  createdTimeStamp,
  leaseEnd,
  blockNumber,
  status,
  onClick
}) => {
  const { Title } = Typography;

  return (
    <AntdCard
      className={`${classes.card} ${highlighted ? classes.highlight : ""}`}
      onClick={() => onClick(id)}
    >
      <div className={classes.head}>
        <div className={classes.coin}>
          <Title level={3} style={{ color: "var(--white)" }}>
            {symbol.toUpperCase()}
          </Title>
        </div>
        <div className={classes.slant} />
        <div className={classes.status}>
          <Sprite id={status.toLowerCase()} width={18} height={18} />
          <Title
            level={3}
            style={{
              color:
                status === "Active"
                  ? "var(--green)"
                  : status === "Terminated"
                  ? "var(--red)"
                  : "var(--yellow)"
            }}
          >
            {status}
          </Title>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes["coin-symbol"]}>
          <Sprite id="coin-symbol-wrapper" width={70} height={70} />
          <Sprite
            id={symbol}
            width={30}
            height={30}
            style={{ position: "absolute", top: "30%", left: "30%" }}
          />
        </div>
        <div className={classes.details}>
          <Title level={2} style={{ color: "var(--white)" }}>
            $3,412,025.12
          </Title>
          <Title level={5} style={{ color: "var(--white)" }}>
            End: {getEndDate(createdTimeStamp, leaseEnd, blockNumber)}
          </Title>
        </div>
      </div>
    </AntdCard>
  );
};

export default Card;
