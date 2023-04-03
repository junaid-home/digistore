import cls from "@digistore/scss/lib/templates/Auth-model.module.css";

import * as React from "react";

import Image from "next/image";

import { Input, Button } from "@digistore/react-components";

import Tabs from "react-best-tabs";
import { Tab } from "react-best-tabs";
import { Modal } from "react-responsive-modal";

function SocialLinks() {
  return (
    <div className={cls.social_icons}>
      <Image
        className="tm-md rm-sm"
        src="/facebook.png"
        alt="PCI"
        width={45}
        height={45}
      />
      <Image
        className="tm-md rm-sm"
        src="/whatsapp.png"
        alt="PCI"
        width={45}
        height={45}
      />
      <Image
        className="tm-md rm-sm"
        src="/instagram.png"
        alt="PCI"
        width={45}
        height={45}
      />
      <Image
        className="tm-md rm-sm"
        src="/twitter.png"
        alt="PCI"
        width={45}
        height={45}
      />
    </div>
  );
}

function AuthModel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      styles={{
        modal: { maxWidth: 350, width: "100%", outline: "solid" },
      }}
    >
      <Tabs ulClassName="model-tabs">
        <Tab title="Sign In">
          <form className={cls.login_container}>
            <div className="tm-sm">
              <Input placeholder="Email Address" fullWidth />
            </div>
            <div className="tm-sm">
              <Input placeholder="Password" type="password" fullWidth />
            </div>
            <div className="tm-sm">
              <Button color="secondary" fullWidth>
                Login
              </Button>
            </div>
          </form>
          <SocialLinks />
        </Tab>
        <Tab title="Register">
          <form className={cls.register_container}>
            <div className="tm-sm">
              <Input placeholder="Full Name" fullWidth />
            </div>
            <div className="tm-sm">
              <Input placeholder="Email Address" fullWidth />
            </div>
            <div className="tm-sm">
              <Input placeholder="Residential Address" fullWidth />
            </div>
            <div className="tm-sm">
              <Input placeholder="City" fullWidth />
            </div>
            <div className="tm-sm">
              <Input placeholder="Password" type="password" fullWidth />
            </div>
            <div className="tm-sm">
              <Button color="secondary" fullWidth>
                Register
              </Button>
            </div>
          </form>
        </Tab>
      </Tabs>
    </Modal>
  );
}

export default AuthModel;
