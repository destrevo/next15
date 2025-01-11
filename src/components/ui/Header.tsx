import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellIcon } from "./common/icons";

export const PROFILE_IMAGE_MOCK =
  "https://s3-alpha-sig.figma.com/img/ddaf/d214/680dadd2835dc69a669d8ce023421b1c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7rU3o-8GFGJI4V7CfVpMkvzDiYVkJvsLbhGpkMLM~-Pz1~bWUeMFm3tQaA1P8~VrdmqrSMW059MkI9tzCW81yZPcFjdWnYheQgnbgm2v0Z1wwnA6YdOTG57SJoUp5zkZnYzKgWcOgP9VxL-B6iIYd-4n3m8xJJeyIsWiMDSt31YCdo67l7D1-z3SZgzCks61hfH8rYngzWRHgKLedNZtORENrqhEYeh486LPpYTYywpUSty9-0i~xhnDLyyJAEUHu7gUwA8hpl~3-H~yw0cmErPh-FG0z93cqhUy1sdpLj8g9f37xEIJGTbZkdTHFehSHGX4w4EhkMv4E3aMm~Xyw__";

/**
 * Header component that displays a notification bell, account name, and profile image.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC = (): JSX.Element => {
  return (
    <header className="flex justify-end h-[75px] w-full items-center p-[30px]">
      <div className="flex items-center mt-[30px]">
        <Link
          onClick={() => alert("bell")}
          href="/"
          className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#cda8ff]"
        >
          <BellIcon />
        </Link>
        <Link
          onClick={() => alert("account")}
          href="/"
          className="w-[133px] h-[40px] font-poppins font-normal text-[13px] leading-[20px] flex items-center justify-center tracking-[0.1px] text-white"
        >
          Account Name
        </Link>
        <Link
          onClick={() => alert("account")}
          href="/"
          className="w-[45px] h-[45px] rounded-full bg-[#cda8ff] border border-white flex items-center justify-center overflow-hidden"
        >
          <Image src={PROFILE_IMAGE_MOCK} alt="user" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
