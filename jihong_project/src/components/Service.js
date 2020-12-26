import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../constants/style";

const Section = styled.section`
  padding: 5vh 5vw;
  background: #f6f9f9;
`;

const SectionTitle = styled.h2`
  margin-left: 10vw;
  font-weight: bold;
  font-size: 2rem;
  padding-left: 1rem;
  border-left: 1rem solid #9dd3a8;
  color: #222222;
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 6px;
  padding: 50px;
  background: white;
  transition: ease-in 0.2s all;
  box-shadow: 0px 2px 23px -4px #e0e0e0;
  cursor: pointer;

  ${MEDIA_QUERY_LG} {
    width: 45%;
  }

  ${MEDIA_QUERY_MD} {
    width: 75%;
  }

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.03);
  }

  h5 {
    font-weight: bold;
    font-size: 20px;
    color: #222222;
  }

  p {
    font-size: 14px;
    color: #4a4a4a;
  }
`;

function Service() {
  return (
    <Section id="service">
      <SectionTitle>服務項目</SectionTitle>
      <ServiceWrapper>
        <ServiceCard>
          <h5>室內設計</h5>
          <p>空間規劃、設計、3D 建模</p>
        </ServiceCard>
        <ServiceCard>
          <h5>室內裝修</h5>
          <p>新屋裝修、木工、舊屋修繕</p>
        </ServiceCard>
      </ServiceWrapper>
    </Section>
  );
}

export default Service;
