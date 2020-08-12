import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./NavigationBurgerMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";

function NavigationBurgerMenu({ data, location }) {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);

  function handleClickOutside(event) {
    if (wrapperRef && !wrapperRef.current.contains(event.target) && isOpen) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={wrapperRef} className={styles.dropdown}>
      <FontAwesomeIcon
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        data-test="icon"
        size="2x"
        icon="bars"
        aria-hidden="true"
      />
      <div
        className={styles.dropdowncontent}
        id={isOpen ? "open" : "closed"}
        style={isOpen ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <div className={styles.dropdownbody}>
          {data.map((element, outerIndex) => {
            return (
              <div key={element.title + outerIndex}>
                <div className={styles.headTitle}>{element.title}</div>
                {element.menuItems.map((item, index) => {
                  return (
                    <Link
                      key={index++}
                      to={item.link}
                      className={
                        location.pathname.includes(item.absolutePath)
                          ? styles.selected
                          : ""
                      }
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.footer} />
      </div>
    </div>
  );
}

NavigationBurgerMenu.propTypes = {
  data: PropTypes.array.isRequired,
};

export default withRouter(NavigationBurgerMenu);
