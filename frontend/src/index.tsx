import React from "react";
import ReactDOM from 'react-dom/client';
import {Header, RegisterBox, Page, SliderTest, ButtonStackSample} from "./components/Index";
import { Button } from "@mui/material";

const rootElemnt = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(rootElemnt);

// ここでuseStateを宣言すると実行時エラーなる

root.render(
  <React.StrictMode>
    <Header />
    <ButtonStackSample />
    <SliderTest />
    <Page />
    {/**適当にMaterialUIのサンプルをはっつける */}
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <RegisterBox />

  </React.StrictMode>
);