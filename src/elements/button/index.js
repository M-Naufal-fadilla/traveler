import React from 'react';
import { Link } from "react-router-dom";
import propTypes from "prop-types";
//import { isDisabled } from '@testing-library/user-event/dist/utils';

export default function Button(props) {
  const className = [props.className]
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick()
  };

  if (props.isDisabled || props.isloading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isloading ? (<> 
            <span className="spinner-border.spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
  ):(props.childern)
  }
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopner noreferrer" : undefined}>
          {props.childern}
        </a>
      );
    } else {
      return (
        <Link to={props.href}
          className={className.join(" ")}
          style={props.style} onClick={onClick}>
          {props.childern}
        </Link>
      );
    }
  }


  return (
    <Button className={className.join(" ")}
      style={props.style} onClick={onClick}>
      {props.childern}
    </Button>
  );
}



Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onclick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isloading: propTypes.bool,
  isExternal: propTypes.bool,
  isSmall: propTypes.bool,
  islarge: propTypes.bool,
  hasShadow: propTypes.bool,
}