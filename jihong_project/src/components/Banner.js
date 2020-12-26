import styled from "styled-components";
import imgCover from "../images/cover.jpg";
import logo from "../images/logo_white.png";
import slogan from "../images/slogan.png";

const HomeSection = styled.section`
  display: relative;
  width: 100%;
  height: 100vh;
`;

const HomeBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imgCover});
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;

const HomeSlogan = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 5;

  img:first-child {
    width: 40%;
  }

  img + img {
    width: 100%;
  }
`;

const NavWrapper = styled.nav`
display: flex;
position absolute;
right: 5vw;
top: 5vh;
padding: 2px;
z-index: 10;

a {
  border: 1px solid transparent;
  padding: 5px 8px;
  color: #d1d1d1;
  font-size: 14px;
  text-decoration: none;
  transition: ease-out .2s all;
  margin-left: 5px;

  &:hover {
    color: #fff;
    font-weight: bold;
    border-color: #fff;
    border-radius: 3px;
  }
}
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <a href="#service">服務內容</a>
      <a href="#portfolio">作品集</a>
      <a href="#contact">聯繫</a>
    </NavWrapper>
  );
};

function Banner() {
  return (
    <HomeSection>
      <Navbar />
      <HomeBackground>
        <HomeSlogan>
          <img src={logo} alt="logo" />
          <img src={slogan} alt="slogan" />
        </HomeSlogan>
      </HomeBackground>
    </HomeSection>
  );
}

export default Banner;
