import useScroll from "@/hooks/useScroll";
import React from "react";
import Link from "../Reuseable/Link";

const DonateScroll = () => {
  const { scrollTop } = useScroll(100);

  return (
    <Link
      smooth="true"
      href="/donate"
      duration={500}
      className="go-top-area-don d-inline cursor-pointer"
    >
      <div className="go-top-wrap-don">
        <div className="go-top-btn-wrap">
          <div
            className={`go-top-don go-top-btn${
              scrollTop ? " active" : ""
            } d-flex align-items-center justify-content-center`}
          >
            <p
              style={{
                color: "white",
              }}
            >
              Faire Un Don
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonateScroll;
