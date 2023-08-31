import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <br />
      <Image src="/guild-icon.png" width={60} height={60} alt="guild icon" />
      <p>© {new Date().getFullYear()} Enveus Gaming.</p>
      <br />
      <p>
        The Enveus logo and related logos are designed and owned by Enveus
        Gaming.
      </p>
      <br />
      <p>
        Ashes of Creation and all associated content and related logos belong to
        Intrepid Studios. All other trademarks or trade names are the property
        of their respective owners.
      </p>
      <br />
      <p> All Rights Reserved.</p>
      <br />
      <br />
    </footer>
  );
};

export default Footer;
