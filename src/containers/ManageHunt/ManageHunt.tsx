import React from "react";
import { Card } from "antd";
import { AuthContext } from "../../context/AuthContext";
import { useApi } from "../../utils/api";

interface IManageHunt {}

const ManageHunt: React.FC<IManageHunt> = () => {
  const { name } = React.useContext(AuthContext);
  const { api } = useApi("helloWorld");

  console.log(api);
  if (!name) return <div>Du er ikke logget inn!</div>;
  return <Card title="Din påskejakt">Hunt manage</Card>;
};

export default ManageHunt;
