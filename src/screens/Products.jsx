import React, { useEffect } from "react";
import productIcon1 from "../assets/become_a_resource.png";
import productIcon2 from "../assets/hire__a__resource.png";
import productIcon3 from "../assets/readymaind_for_businesses.png";
import { NavLink, Outlet } from "react-router-dom";

function Products() {
  const [isbecomeResource, setIsbecomeResource] = React.useState(false);
  console.log(window.location.pathname);
  useEffect(() => {
    setIsbecomeResource(window.location.pathname === "/products/");
  }, [window.location.pathname]);

  return (
    <div className="products__main__container">
      <div className="products__jumbotron">
        <div className="products__jumbotron__content">
          <div className="products__jumbotron__content__box">
            <h1 className="products__jumbotron__title">Products</h1>
            <p className="products__jumbotron__para">
              Different lucrative options to be provided
            </p>
          </div>
          <div className="products__jumbotron__cards">
            <NavLink
              activeClassName="active"
              to="/products/"
              className="products__jumbotron__card">
              <div className="products__jumbotron__card__icon">
                <img src={productIcon2} alt="productIcon3" />
              </div>
              <div className="products__jumbotron__card__title">
                Hire a <div>Resource</div>
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/products/become_a_resource"
              className="products__jumbotron__card">
              <div className="products__jumbotron__card__icon">
                {isbecomeResource ? (
                  <img src={productIcon2} alt="productIcon3" />
                ) : (
                  <img src={productIcon1} alt="productIcon3" />
                )}
              </div>
              <div className="products__jumbotron__card__title">
                Become a <div>Resource</div>
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/products/readymaind_for_businesses"
              className="products__jumbotron__card">
              <div className="products__jumbotron__card__icon">
                <img src={productIcon3} alt="productIcon3" />
              </div>
              <div className="products__jumbotron__card__title">
                Readymaid for <div>Bussiness</div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Products;
