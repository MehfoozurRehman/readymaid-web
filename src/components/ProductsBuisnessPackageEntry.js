import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";

export function ProductsBuisnessPackageEntry({ title, info, price }) {
  return (
    <div className="products__buisness__packages__entry">
      <div className="products__buisness__packages__entry__heading">
        {title}
      </div>
      <div className="products__buisness__packages__entry__info">{info}</div>
      <div className="products__buisness__packages__entry__price">
        {price}/month
      </div>
      <Link to="/" className="products__buisness__packages__entry__link">
        Go for this <ChevronRight size={20} color="currentColor" />
      </Link>
    </div>
  );
}
