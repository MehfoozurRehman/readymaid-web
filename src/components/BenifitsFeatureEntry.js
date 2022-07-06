import React from "react";
import { Fade, Zoom } from "react-reveal";

export function BenifitsFeatureEntry({ feature }) {
  return (
    <div className="benefits__features__entry">
      <Zoom>
        <div className="benefits__features__entry__icon">{feature.icon}</div>
      </Zoom>
      <Fade>
        <div className="benefits__features__entry__heading">
          {feature.title}
        </div>
      </Fade>
      <Fade>
        <div className="benefits__features__entry__info">{feature.info}</div>
      </Fade>
    </div>
  );
}
