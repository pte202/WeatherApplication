import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styles from "./NavigationLinksBar.module.css";
import NavigationBurgerMenu from "./NavigationBurgerMenu";

const NavigationLinksBar = ({
  menuItems,
  burgerData,
  location,
  style,
  className,
}) => {
  useEffect(() => {}, [location.pathname]);
  return (
    <div className={styles.linksBar + " " + className} style={style}>
      <div className={styles.links}>
        {menuItems.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index++}
              className={
                location.pathname.includes(item.absolutePath)
                  ? styles.selected
                  : undefined
              }
            >
              {item.text}
            </Link>
          );
        })}
      </div>
      {burgerData ? (
        <div className={styles.burger}>
          <div className={styles.burgerPosition}>
            <NavigationBurgerMenu data={burgerData} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

NavigationLinksBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  burgerData: PropTypes.array,
  location: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default withRouter(NavigationLinksBar);
