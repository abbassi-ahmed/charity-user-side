import React, { Suspense } from "react";
import { Col } from "react-bootstrap";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";
import Image from "next/image";
import {
  SkeletonCategoriesBoxItem,
  FuncfactLoader,
} from "../skeletonLoader/skeletonLoader";

const FunFactsItem = ({ fact = {} }) => {
  const { icon, count, text, loading } = fact;

  return (
    <Col lg={3} md={6}>
      {loading ? (
        <FuncfactLoader />
      ) : (
        <Suspense fallback={<SkeletonCategoriesBoxItem />}>
          <div className="fun-facts-item text-center">
            <div className="icon">
              <Image
                src={icon}
                alt=""
                layout="fill"
                objectFit="fill"
                className="rounded-circle"
              />
            </div>
            <br />
            <h4 className="title odometer">
              <VisibilityCountUp count={count} />
            </h4>
            <span>{text}</span>
          </div>
        </Suspense>
      )}
    </Col>
  );
};

export default FunFactsItem;
