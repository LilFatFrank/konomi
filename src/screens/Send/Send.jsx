import { Button, Form, Input, notification, Typography } from "antd";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import global from "../../styles/app.module.scss";

const Send = () => {
  const ethereum = window.ethereum;
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(null);

  const [form] = Form.useForm();
  const formValues = {
    ether: "",
    addr: "",
    remember: true
  };

  const { Title } = Typography;

  useEffect(() => {
    if (ethereum) {
      ethereum.on("chainChanged", (data) => setChainId(data));
    }
  }, []);

  const connectWallet = async () => {
    if (ethereum) {
      const account = await ethereum.request({ method: "eth_accounts" });
      const chainId = await ethereum.request({ method: "eth_chainId" });
      setConnected(account ? true : false);
      setChainId(chainId);
    } else {
      notification.open("Please install Metamask!");
    }
  };

  const startPayment = async ({ ether, addr }) => {
    try {
      if (!ethereum) throw new Error("No wallet found!");
      await ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log(tx);
    } catch (error) {
      console.log(error.message);
    }
  };

  return connected ? (
    chainId && chainId === "0x2a" ? (
      <>
        <Form
          form={form}
          initialValues={formValues}
          onFinish={startPayment}
        >
          <Form.Item
            name={"addr"}
            label={"Recipient Address"}
            rules={[{ required: true, message: "Required Field" }]}
            style={{ margin: "0 0 10px" }}
          >
            <Input placeholder="0x11...789" style={{ color: "var(--black)" }} />
          </Form.Item>
          <Form.Item
            name={"ether"}
            label={"Token Amount"}
            rules={[{ required: true, message: "Required Field" }]}
            style={{ margin: "0 0 10px" }}
          >
            <Input placeholder="0.07" style={{ color: "var(--black)" }} />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              style={{
                background: "var(--card-bg)",
                border: "none",
                cursor: "pointer"
              }}
            >
              Transfer
            </Button>
          </Form.Item>
        </Form>
      </>
    ) : (
      <Title level={3} className={global["font-secondary"]}>
        Please switch to Kovan Test Network
      </Title>
    )
  ) : (
    <Button
      style={{
        background: "var(--card-bg)",
        border: "none",
        cursor: "pointer"
      }}
      onClick={connectWallet}
    >
      Connect Wallet
    </Button>
  );
};

export default Send;
