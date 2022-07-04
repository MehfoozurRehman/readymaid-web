import React from "react";

export function BenifitsFeatureEntry({ feature }) {
  return (
    <div className="benefits__features__entry">
      <div className="benefits__features__entry__icon">{feature.icon}</div>
      <div className="benefits__features__entry__heading">{feature.title}</div>
      <div className="benefits__features__entry__info">{feature.info}</div>
    </div>
  );
}
