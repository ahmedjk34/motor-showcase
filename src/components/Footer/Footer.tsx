import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import footerLinks from "./footerData";
import Link from "next/link";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
        <div className={styles.logoHolder}>
          <Image src="/logo.png" alt="logo" width={200} height={45} />
          <p>
            Motor Showcase <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((link) => (
            <div key={link.title} className={styles.footerLink}>
              <h3>{link.title}</h3>
              {link.links.map((item, index) => (
                <Link href={item.url} key={item.title + index}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>@2025 Motor Showcase. All Rights Reserved</p>
        <div className={styles.copyrightLinks}>
          <Link href="/">Privacy Policy</Link>
          <Link href="/"> Terms of Use</Link>
          <Link href="https://www.linkedin.com/in/ahmedjk34/">
            My Linkedin (Ahmed Gharib)
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
