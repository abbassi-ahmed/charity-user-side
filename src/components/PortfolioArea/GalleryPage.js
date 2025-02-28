import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Badge,
  Spinner,
  Pagination,
} from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";
import noData from "../../assets/svgs/noData.svg";
import Image from "next/image";
import axios from "axios";

const GalleryPage = () => {
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const rowsPerPage = 20;

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        `https://api.olympiquemnihla.com/gallerie/find-tags`
      );
      setAllTags(response.data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const fetchImages = async () => {
    try {
      setLoader(true);
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: rowsPerPage.toString(),
      });
      const response = await axios.post(
        `https://api.olympiquemnihla.com/gallerie/filter-by-tags?${params.toString()}`,
        {
          tags: selectedTags,
        }
      );
      setImages(response.data.data);
      setTotalPages(Math.ceil(response.data.total / rowsPerPage));
      setLoader(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page, selectedTags]);

  useEffect(() => {
    fetchTags();
  }, []);

  const handleTagFilter = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setPage(1);
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      />
    );

    if (startPage > 1) {
      items.push(
        <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
          1
        </Pagination.Item>
      );
      if (startPage > 2) {
        items.push(<Pagination.Ellipsis key="ellipsis1" />);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="ellipsis2" />);
      }
      items.push(
        <Pagination.Item
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    // Next button
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      />
    );

    return (
      <Pagination className="justify-content-center mt-4">{items}</Pagination>
    );
  };

  if (loader) {
    return (
      <div className="loader-container">
        <Spinner animation="border" role="status" variant="primary" />
        <h3 className="mt-3">Chargement...</h3>
      </div>
    );
  }

  return (
    <div className="gallery-page-area">
      <Container>
        <div className="gallery-header">
          <h2 className="gallery-title">Galerie d&apos;images</h2>
          <p className="gallery-subtitle">
            Explorez notre collection d&apos;images
          </p>
        </div>

        <div className="tags-container">
          <div className="tags-header">
            <h5>Filtrer par tags:</h5>
            {selectedTags.length > 0 && (
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={handleClearFilters}
                className="clear-filters-btn"
              >
                Effacer les filtres
              </Button>
            )}
          </div>
          <div className="tags-list">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                bg={selectedTags.includes(tag) ? "primary" : "light"}
                text={selectedTags.includes(tag) ? "white" : "dark"}
                className="tag-badge"
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {!images.length ? (
          <div className="no-data-container">
            <Image
              src={noData || "/placeholder.svg"}
              alt="No Data Found"
              width={200}
              height={200}
            />
            <h3 className="mt-3">Aucune image trouvée</h3>
            {selectedTags.length > 0 && (
              <Button
                variant="primary"
                className="mt-3"
                onClick={handleClearFilters}
              >
                Effacer les filtres
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="gallery-info">
              <p>
                Affichage de {images.length} images sur{" "}
                {rowsPerPage * totalPages}
              </p>
            </div>
            <Row className="gallery-grid">
              {images.map((portfolio) => (
                <Col
                  key={portfolio.id}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  className="gallery-item-col"
                >
                  <PortfolioItem portfolio={portfolio} />
                </Col>
              ))}
            </Row>
            {totalPages > 1 && renderPagination()}
          </>
        )}
      </Container>
    </div>
  );
};

export default GalleryPage;
