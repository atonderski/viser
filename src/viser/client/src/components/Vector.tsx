import * as React from "react";
import { GuiComponentContext } from "../ControlPanel/GuiComponentContext";
import { GuiAddVectorMessage } from "../WebsocketMessages";
import { VectorInput, ViserInputComponent } from "./common";

export default function VectorComponent({
  id,
  hint,
  label,
  visible,
  disabled,
  value,
  ...otherProps
}: GuiAddVectorMessage) {
  const { min, max, step, precision } = otherProps;
  const { setValue } = React.useContext(GuiComponentContext)!;
  const n = value ? value.length : 0;
  if (!visible) return <></>;
  return (
    <ViserInputComponent {...{ id, hint, label }}>
      <VectorInput
        id={id}
        n={n}
        value={value}
        onChange={(value: any) => setValue(id, value)}
        min={min}
        max={max}
        step={step}
        precision={precision}
        disabled={disabled}
      />
    </ViserInputComponent>
  );
}
