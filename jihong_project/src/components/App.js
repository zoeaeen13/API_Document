import { Fragment, useState } from "react";
import Banner from "./Banner";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { PortfolioList } from "../data/Info";

function App() {
  const [carouselList, setCarouselList] = useState(
    PortfolioList.carouselList[0]
  );
  const [coverIndex, setCoverIndex] = useState(0);

  const handleChangeImage = (num) => {
    const index = Number(num);
    setCarouselList(PortfolioList.carouselList[index]);
    setCoverIndex(index);
  };

  return (
    <Fragment>
      <Banner />
      <Service />
      <Portfolio
        coverIndex={coverIndex}
        coverList={PortfolioList.coverList}
        carouselList={carouselList}
        handleChangeImage={handleChangeImage}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
