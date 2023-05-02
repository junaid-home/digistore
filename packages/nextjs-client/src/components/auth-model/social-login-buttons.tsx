import cls from "@digistore/scss/lib/templates/Auth-model.module.css";

import * as React from "react";

import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

function SocialLoginButtons() {
  return (
    <div className={cls.social_login}>
      <div className={cls.separator}>
        <div>&nbsp;</div>
        <span>OR</span>
        <div>&nbsp;</div>
      </div>
      <div className="tm-md">
        <GithubLoginButton
          onClick={() => {}}
          iconSize={"20"}
          className={cls.social_button}
          style={{ width: "100%", height: 40, fontSize: "1.6rem", margin: 0 }}
        />
        <GoogleLoginButton
          onClick={() => {}}
          iconSize={"20"}
          className={cls.social_button}
          style={{ width: "100%", height: 40, fontSize: "1.6rem", margin: 0 }}
        />
      </div>
    </div>
  );
}

export default SocialLoginButtons;
