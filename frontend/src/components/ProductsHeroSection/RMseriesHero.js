import React from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContentWrapper,
  VideoWrapper,
  StyledVideo,
  HeroContent,
  HeroH1,
  HeroP,
} from "./ProductsHeroElements";
import Video from "../../videos/productsvid.mp4";

const RMSeriesHeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContentWrapper>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <HeroContent>
          <HeroH1>RM Series</HeroH1>
          <HeroP>
            The RM Series transformers are designed with a compact, low-profile
            shape for high-frequency applications requiring minimal PCB space
            and reduced electromagnetic interference. Commonly used in
            telecommunications, signal processing, and power modules. Models
            include:
            <br />
            <br />
            <strong>
              <Link
                to="/products/ferritetransformer/rmseries/rm4"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                RM 4:
              </Link>
            </strong>{" "}
            Ultra-compact core for miniature electronic circuits and
            space-limited layouts.
            <br />
            <strong>
              <Link
                to="/products/ferritetransformer/rmseries/rm5"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                RM 5:
              </Link>
            </strong>{" "}
            Small, efficient transformer for low-power signal and communication
            devices.
            <br />
            <strong>
              <Link
                to="/products/ferritetransformer/rmseries/rm6"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                RM 6:
              </Link>
            </strong>{" "}
            Balanced size for moderate isolation and compact power designs.
            <br />
            <strong>
              <Link
                to="/products/ferritetransformer/rmseries/rm8"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                RM 8:
              </Link>
            </strong>{" "}
            Medium core size offering higher power handling with EMI
            suppression.
            <br />
            <strong>
              <Link
                to="/products/ferritetransformer/rmseries/rm10"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                RM 10:
              </Link>
            </strong>{" "}
            Larger size transformer for industrial-grade filtering and energy
            transfer.
            <br />
            <strong>
              <Link
                to="/products/ferritetransformer/rmseries/rm12"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                RM 12:
              </Link>
            </strong>{" "}
            High-capacity core suitable for power modules and compact
            converters.
            <br />
            <br />
            <strong>Need something specific?</strong> We offer customized
            products designed to meet your exact requirements. Contact us today
            to discuss your unique needs and let us help you find the perfect
            solution.
            <br />
            <br />
            <Link
              to="/#quote"
              style={{ display: "inline-block", marginTop: "10px" }}
            >
              <button
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007BFF")
                }
              >
                Get a Custom Design Quote
              </button>
            </Link>
          </HeroP>
        </HeroContent>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default RMSeriesHeroSection;
