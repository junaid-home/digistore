import cls from "@digistore/scss/lib/organisms/Footer.module.css";

import * as React from "react";

import Image from "next/image";

import { Typography } from "../../atoms";

import { PaymentCard } from "../../molecules";

import { LogoIcon } from "../../atoms/Icons";

import DropDown from "./drop-down";

function Footer({
  language,
  color = "white",
}: {
  language: { value: string; label: string }[];
  color?: string;
}) {
  const [lang, setLang] = React.useState(language[0]);

  return (
    <div className={cls.wrapper} style={{ background: color }}>
      <div className="container">
        <div className={cls.container}>
          <div className={cls.section}>
            <LogoIcon />
            <Typography className={cls.link} variant="body2" color="greyDark">
              Privacy Policy
            </Typography>
            <Typography className={cls.link} variant="body2" color="greyDark">
              Terms & Conditions
            </Typography>
            <Typography className={cls.link} variant="body2" color="greyDark">
              Feedback
            </Typography>
            <Typography className={cls.link} variant="body2" color="greyDark">
              Sitemap
            </Typography>
            <Typography className={cls.link} variant="body2" color="greyDark">
              Help Center
            </Typography>
          </div>
          <div className={cls.section}>
            <Typography variant="h3">Payment Methods</Typography>
            <div className={cls.flex}>
              <PaymentCard className="rm-sm tm-md" imgSrc="/master.png" />
              <PaymentCard className="rm-sm tm-md" imgSrc="/visa.png" />
              <PaymentCard className="rm-sm tm-md" imgSrc="/paypal.png" />
              <PaymentCard className="rm-sm tm-md" imgSrc="/ae.png" />
              <PaymentCard className="rm-sm tm-md" imgSrc="/maestro.png" />
            </div>
          </div>

          <div className={cls.section}>
            <Typography variant="h3">Verified By</Typography>
            <div className="tm-md">
              <Image src="/pci.png" alt="PCI" width={250} height={79} />
            </div>
            <Typography variant="h3" className="tm-md">
              Follow Us
            </Typography>
            <div>
              <Image
                className="tm-md rm-sm"
                src="/facebook.png"
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
                src="/whatsapp.png"
                alt="PCI"
                width={45}
                height={45}
              />
              <Image
                className="tm-md rm-sm"
                src="/youtube.png"
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
          </div>
          <div className={cls.section}>
            <Typography variant="h3">Language</Typography>
            <div className="tm-md">
              <DropDown
                placeholder="English"
                options={language}
                defaultValue={lang}
                onChange={setLang}
              />
            </div>
            <Typography className="tm-lg" variant="h3">
              Currency
            </Typography>
            <div className="tm-md">
              <DropDown
                placeholder="English"
                options={language}
                defaultValue={lang}
                onChange={setLang}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
