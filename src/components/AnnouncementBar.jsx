
import { useState, useEffect } from "react";

const announcements = [
  "Closet Under Construction!",
  "Welcome to BAIRO – Premium Clothing",
  "New Collection Coming Soon!",
  "Stay Tuned for Exclusive Updates!"
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const previousAnnouncement = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  const nextAnnouncement = () => {
    setCurrentIndex((prev) =>
      prev === announcements.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextAnnouncement();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="announcement-bar"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      role="region"
      aria-label="Store announcements"
      aria-live="polite"
    >
      <button
        type="button"
        className="ticker-nav-btn ticker-prev"
        onClick={previousAnnouncement}
        aria-label="Previous announcement"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="announcement-content">
        <span key={currentIndex} className="announcement-text">
          {announcements[currentIndex]}
        </span>
      </div>

      <button
        type="button"
        className="ticker-nav-btn ticker-next"
        onClick={nextAnnouncement}
        aria-label="Next announcement"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
