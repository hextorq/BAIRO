
const messages = [
  "DISCOVER OUR REGULAR FIT T-SHIRTS – 6 COLOURS",
  "OVERSIZED T-SHIRTS – AVAILABLE IN 10 COLOURS",
  "CLASSIC POLO T-SHIRTS – 5 COLOURS AVAILABLE",
  "EXPLORE OUR COMFORTABLE HOODIE COLLECTION",
  "AVAILABLE IN S TO 2XL – FIND YOUR PERFECT FIT",
  "YOUR STYLE, YOUR COLOUR – EXPLORE BAIRO",
  "REGULAR FIT • OVERSIZED • POLO • HOODIES",
  "FOUR STYLES. MULTIPLE COLOURS. ONE BAIRO."
];

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {[...messages, ...messages].map((message, index) => (
          <span className="announcement-item" key={index}>
            {message}
             <span className="announcement-separator"> | </span>
             </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
