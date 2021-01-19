import React from "react";
import { FormattedMessage } from "react-intl";

export default [
  {
    id: 1,
    vendorCode: "03c35",
    comp: (
      <span>
        <span>
          <FormattedMessage id="pes" />
        </span>
        <span>100</span>
      </span>
    ),
    weight: (
      <span>
        <span>71 </span>
        <span>
          <FormattedMessage id="g/m²" />
        </span>
      </span>
    ),
  },
  {
    id: 2,
    vendorCode: "5c30",
    comp: (
      <span>
        <span>
          <FormattedMessage id="pes" />
        </span>
        <span>100</span>
      </span>
    ),
    weight: (
      <span>
        <span>143 </span>
        <span>
          <FormattedMessage id="g/m²" />
        </span>
      </span>
    ),
  },
];
