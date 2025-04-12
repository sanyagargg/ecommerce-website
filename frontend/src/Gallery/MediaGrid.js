export default function MediaGrid({ items, type }) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {items.map((item, index) =>
          type === "image" ? (
            <img
              key={index}
              src={item}
              alt={`media-${index}`}
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
          ) : (
            <video
              key={index}
              src={item}
              controls
              style={{ width: "100%", borderRadius: "8px" }}
            />
          )
        )}
      </div>
    );
  }