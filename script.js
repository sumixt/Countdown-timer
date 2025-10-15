const startBtn = document.getElementById("startBtn");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");
    const message = document.getElementById("message");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    let countdownInterval;

    startBtn.addEventListener("click", () => {
      const dateVal = dateInput.value;
      const timeVal = timeInput.value;

      if (!dateVal || !timeVal) {
        alert("Please select both date and time!");
        return;
      }

      const targetTime = new Date(`${dateVal}T${timeVal}:00`).getTime();

      clearInterval(countdownInterval);
      message.style.display = "none";

      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = targetTime - now;

        if (diff <= 0) {
          clearInterval(countdownInterval);
          message.style.display = "block";
          daysEl.textContent = "00";
          hoursEl.textContent = "00";
          minutesEl.textContent = "00";
          secondsEl.textContent = "00";
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, "0");
        hoursEl.textContent = hours.toString().padStart(2, "0");
        minutesEl.textContent = minutes.toString().padStart(2, "0");
        secondsEl.textContent = seconds.toString().padStart(2, "0");
      }, 1000);
    });