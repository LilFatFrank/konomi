import { Typography, Button } from "antd";
import { Sprite } from "..";
import classes from "./Header.module.scss";
import global from "../../styles/app.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <Sprite id="oracle-icon" width={26} height={26} />
        <Title level={2} className={global["font-secondary"]}>
          Oracle
        </Title>
      </div>
      <Button onClick={() => navigate("/send")} className={classes.button}>
        Send Assets
      </Button>
    </div>
  );
};

export default Header;
