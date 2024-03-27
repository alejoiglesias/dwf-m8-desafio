import React from "react";
import { Root } from "./router";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
