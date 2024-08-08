import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export function SkeletonLoader() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton skeleton-text skeleton-title"></div>
      <div className="skeleton skeleton-text skeleton-description"></div>
      <div className="skeleton skeleton-thumb"></div>
      <div className="skeleton skeleton-text skeleton-signature"></div>
    </div>
  );
}

export function SkeletonCategoriesBoxItem() {
  return (
    <div className="skeleton-categories-box">
      <div className="skeleton skeleton-box-item"></div>
      <div className="skeleton skeleton-box-item"></div>
      <div className="skeleton skeleton-box-item"></div>
    </div>
  );
}
