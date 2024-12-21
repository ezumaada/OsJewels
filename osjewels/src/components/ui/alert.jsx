// components/ui/alert.js
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export const Alert = ({ variant = "info", children }) => {
  const baseStyles = "p-4 rounded-md mb-4";
  const variantStyles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    destructive: "bg-red-100 text-red-800",
  };

  return (
    <div className={clsx(baseStyles, variantStyles[variant])}>
      {children}
    </div>
  );
};

export const AlertDescription = ({ children, ...props }) => (
  <p className="text-sm" {...props}>
    {children}
  </p>
);

Alert.propTypes = {
  variant: PropTypes.oneOf(["info", "success", "warning", "destructive"]),
  children: PropTypes.node.isRequired,
};
