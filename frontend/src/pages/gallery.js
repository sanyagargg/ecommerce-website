import ContactNavbar from "../components/ContactNavbar";
import Footer from "../components/Footer";
import GallerySection from "../Gallery/GallerySection";

const imageItems = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
];

const videoItems = [
  "/gallery/video1.mp4",
  "/gallery/video2.mp4",
  "/gallery/video3.mp4",
];

export default function Gallery() {
  return (
    <>
    <ContactNavbar />
    <div style={{ padding: "40px 20px" }}>
      <GallerySection title="Our Images" items={imageItems} type="image" />
      <GallerySection title="Our Videos" items={videoItems} type="video" />
    </div>
    <Footer />
    </>
  );
}