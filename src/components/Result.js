import React from "react";
import { Progress } from "antd";

const Result = props => (
  <Progress type="circle" percent={props.grade} width={80} />
);

export default Result;
