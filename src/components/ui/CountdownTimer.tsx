import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate, eventTitle }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const timeRemaining = new Date(targetDate).getTime() - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Initial call to display time immediately on load
    calculateTimeRemaining();

    // Update the countdown every second
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    // Cleanup interval on component unmount or when targetDate changes
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeRemaining;

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return <div>Countdown finished!</div>;
  }

  return (
    <div className="container is-fullhd">
      <section className="hero event-banner is-medium is-fullwidth mb-6">
        <div className="hero-body countdown-div">
          <div className="container has-text-centered ">
            <div className="title">
              <div className="section">
                <h1 className="title is-1">{eventTitle} Starts in:</h1>
                <div className="columns is-centered countdown-items">
                  <div className="column countdown-item is-2">
                    <div className="box blur ">
                      <div>
                        <p className="title is-2 countdown-text">{days}</p>
                      </div>
                      <p className="subtitle is-6 countdown-text">Days</p>
                    </div>
                  </div>
                  <div className="column countdown-item is-2">
                    <div className="box blur ">
                      <div>
                        <p className="title is-2 countdown-text">{hours}</p>
                      </div>
                      <p className="subtitle is-6 countdown-text">Hours</p>
                    </div>
                  </div>
                  <div className="column countdown-item is-2">
                    <div className="box blur">
                      <div>
                        <p className="title is-2 countdown-text">{minutes}</p>
                      </div>
                      <p className="subtitle is-6 countdown-text">Minutes</p>
                    </div>
                  </div>
                  <div className="column countdown-item is-2">
                    <div className="box blur">
                      <div>
                        <p className="title is-2 countdown-text">{seconds}</p>
                      </div>
                      <p className="subtitle is-6 countdown-text">Seconds</p>
                    </div>
                  </div>
                </div>
                <div className="is-flex is-flex-direction-column is-align-items-center">
                  <h3 className="title is-4">Hosted By: Isaac</h3>
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountdownTimer;
