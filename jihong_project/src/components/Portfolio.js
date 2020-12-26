import styled from "styled-components";
import PropTypes from "prop-types";
import { MEDIA_QUERY_MD } from "../constants/style";

const PorfolioWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4vw;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  height: 0;
  padding-bottom: 30%;
  margin: 5px 0;
  cursor: pointer;

  ${MEDIA_QUERY_MD} {
    width: 15vw;
    height: 5vh;
    padding-bottom: 0;
    margin: 5px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.isCurrent ? "rgba(0,0,0,0.45)" : "transparent"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.5s all ease;
  }

  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.45);
    }
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const CarouselWrapper = styled.div`
  width: 60vw;

  ${MEDIA_QUERY_MD} {
    width: 80vw;
  }
  img {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;

    ${MEDIA_QUERY_MD} {
      max-height: 20vh;
    }
  }
`;

const ImageList = ({ coverIndex, coverList, handleChangeImage }) => {
  const handleClick = (e) => {
    handleChangeImage(e.target.firstChild.alt);
  };
  return (
    <ListWrapper>
      {coverList &&
        coverList.map((item, index) => (
          <ImageWrapper
            key={index}
            isCurrent={coverIndex === index}
            onClick={handleClick}
          >
            <img src={coverList[index]} alt={index} />
          </ImageWrapper>
        ))}
    </ListWrapper>
  );
};
ImageList.propTypes = {
  coverList: PropTypes.array,
  handleChangeImage: PropTypes.func,
  coverIndex: PropTypes.number,
};

const Carousel = ({ carouselList }) => {
  return (
    <CarouselWrapper
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carouselList ? carouselList[0] : ""}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselList ? carouselList[1] : ""}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselList ? carouselList[2] : ""}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselList ? carouselList[3] : ""}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselList ? carouselList[4] : ""}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  carouselList: PropTypes.array,
};

function Portfolio({ coverIndex, coverList, carouselList, handleChangeImage }) {
  return (
    <PorfolioWrapper id="portfolio">
      <ImageList
        coverIndex={coverIndex}
        coverList={coverList}
        handleChangeImage={handleChangeImage}
      />
      <Carousel carouselList={carouselList} />
    </PorfolioWrapper>
  );
}

Portfolio.propTypes = {
  coverIndex: PropTypes.number,
  coverList: PropTypes.array,
  carouselList: PropTypes.array,
  handleChangeImage: PropTypes.func,
};

export default Portfolio;
