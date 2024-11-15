import * as React from "react";
import "./roadmaps.module.scss";

export default function DividerText({ text = "" }) {
  return (
    <div className="flex w-full flex-col py-7">
      <div className="divider">{text}</div>

      {/* <div className="divider divider-primary">{text}</div> */}
    </div>
  );
}
