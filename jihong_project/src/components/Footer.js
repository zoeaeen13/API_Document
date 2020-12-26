import styled from "styled-components";
import logo from "../images/logo_white.png";
import code from "../images/QRcode.jpg";
import { FooterData } from "../data/Info";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../constants/style";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 5vh;
  color: white;
  background: #444444;

  ${MEDIA_QUERY_LG} {
    padding: 10px;
  }
`;

const FooterLogo = styled.div`
  margin-left: 10vw;
  width: 140px;
  height: 140px;

  img {
    width: 100%;
    height: 100%;
  }

  ${MEDIA_QUERY_LG} {
    margin-left: 10px;
  }

  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 2vw;
  }

  h5 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;

    ${MEDIA_QUERY_MD} {
      font-size: 1rem;
    }
  }

  h6 {
    font-size: 14px;
    margin-bottom: 2px;
    font-weight: normal;

    ${MEDIA_QUERY_MD} {
      font-size: 0.8rem;
    }
  }
  p {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 8px;

    ${MEDIA_QUERY_MD} {
      font-size: 0.8rem;
    }
  }
`;

const QRCodeWrapper = styled.div`
  margin: 0 20px;
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterWrapper id="contact">
      <FooterLogo>
        <img src={logo} alt="logo" />
      </FooterLogo>
      <FooterInfo>
        <div>
          <h5>{FooterData.address.title}</h5>
          <h6>{FooterData.address.location}</h6>
          <h6>{FooterData.address.address}</h6>
        </div>
        <div>
          <h5>{FooterData.contact.title}</h5>
          <p>{FooterData.contact.phone}</p>
          <p>{FooterData.contact.mail}</p>
        </div>
        <div>
          <h5>{FooterData.certification.title}</h5>
          <p>{FooterData.certification.value}</p>
        </div>
        <QRCodeWrapper>
          <img src={code} alt="LineQRcode" />
        </QRCodeWrapper>
      </FooterInfo>
    </FooterWrapper>
  );
}

export default Footer;
