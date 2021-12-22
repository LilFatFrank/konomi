import { Typography } from "antd";
import { Sprite } from "..";
import classes from "./Header.module.scss";
import global from "../../styles/app.module.scss";

const Header = () => {
  const { Title } = Typography;

  return (
    <div className={classes.header}>
      <Sprite id="oracle-icon" width={26} height={26} />
      <Title level={2} className={global["font-secondary"]}>
        Oracle
      </Title>
    </div>
  );
};

export default Header;
