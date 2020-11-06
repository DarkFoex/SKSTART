(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let date = "Dec 31, 2020 23:59:59",
      countDown = new Date(date).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          document.getElementById("days").style.color = "red";
          document.getElementById("hours").style.color = "red";
          document.getElementById("minutes").style.color = "red";
          document.getElementById("seconds").style.color = "red";
          
        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "Мы открыли офис в Екатерибурге";
          countdown.style.display = "none";
          content.style.display = "block";


          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
