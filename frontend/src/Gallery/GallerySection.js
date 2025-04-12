import MediaGrid from "./MediaGrid";

export default function GallerySection({ title, items, type }) {
  return (
    <section style={{ marginBottom: "60px", textAlign: "center" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#010529" }}>{title}</h2>
      <MediaGrid items={items} type={type} />
    </section>
  );
}