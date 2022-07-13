import React from "react";

export function AuthInput({ icon, ...props }) {
  return (
    <div className="auth__input">
      <div className="auth__input__icon">{icon}</div>
      <input className="auth__input__field" {...props} />
    </div>
  );
}
