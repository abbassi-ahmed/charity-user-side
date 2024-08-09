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

export function FuncfactLoader() {
  return (
    <div className="skeleton-loader mb-60 d-flex flex-column align-items-center justify-content-center">
      <div className="skeleton skeleton-thumb mb-10"></div>
      <div className="skeleton skeleton-text skeleton-signature"></div>
      <div className="skeleton skeleton-text skeleton-signature"></div>
    </div>
  );
}

export function SkeletonWhyChooseItem() {
  return (
    <div>
      <Row className="skeleton-layout w-100">
        <Col lg={6}>
          <Row className="skeleton-left g-3">
            <Col lg={6} className="d-flex flex-column gap-3">
              <div className="skeleton-thumb" />
              <div className="skeleton-thumb" />
            </Col>
            <Col lg={6}>
              <div className="skeleton-image h-100" />
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <div className="skeleton-right">
            <div className="skeleton-text-large"></div>
            <div className="skeleton-bullets">
              <div className="skeleton-bullet">
                <div className="skeleton-icon"></div>
                <div className="skeleton-text-small"></div>
              </div>
              <div className="skeleton-bullet">
                <div className="skeleton-icon"></div>
                <div className="skeleton-text-small"></div>
              </div>
              <div className="skeleton-bullet">
                <div className="skeleton-icon"></div>
                <div className="skeleton-text-small"></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
