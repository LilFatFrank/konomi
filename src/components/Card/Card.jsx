import { Card as AntdCard, Typography } from "antd";
import { Sprite } from "..";
import classes from "./Card.module.scss";

const Card = () => {
  const { Title } = Typography;

  return (
    <>
      <AntdCard className={classes.card}>
        <div className={classes.head}>
          <div className={classes.coin}>
            <Title level={3} style={{ color: "var(--white)" }}>
              BLA
            </Title>
          </div>
          <div className={classes.slant} />
          <div className={classes.status}>
            <Sprite id="active" width={18} height={18} />
            <Title level={3} style={{ color: "var(--green)" }}>
              Active
            </Title>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes["coin-symbol"]}>
            <Sprite id="coin-symbol-wrapper" width={70} height={70} />
            <Sprite
              id="coin-symbol"
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
              End: 08/Sept/2022 16:00
            </Title>
          </div>
        </div>
      </AntdCard>
    </>
  );
};

export default Card;
