window.onload=function(){
    var i = 0;
    var txt = 'My Dearest Zena,As Valentines Day approaches, I find myself overwhelmed with love for you. Your intelligence is a beacon, illuminating my world with insight and understanding.Remembering the night we danced to "Hal Endak Shak" by Kadim Al Sahir, am filled with warmth. Even then, your presence captivated me, and in your arms, I found solace and joy.am endlessly grateful for you. Happy Valentin s Day, my love. With all my heart.'; /* The text */
    var speed = 60; /* The speed/duration of the effect in milliseconds */
    
    document.getElementById("mybutton").addEventListener("click", typeWriter);
    document.getElementById("mybutton").addEventListener("click", changeButtonText);
    function changeButtonText (){
        document.getElementById("mybutton").textContent = "Hamza is typing ..."; 
    }
    async function typeWriter() {
      if (i < txt.length) {
        if (txt[i] === '.') {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          await delay(1000); // Wait for 1 second
          setTimeout(typeWriter, speed);
        } else if (txt[i] === ',') {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          await delay(400);
          setTimeout(typeWriter, speed);
        } else {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
    }
    
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const yesBtn = document.getElementById("yes");
    
    const noBtn = document.getElementById("no");
    
    const yayText = document.getElementById("yay")
    
    const yayText1 = document.getElementById("yay1");
    const noText = document.getElementById("notext");
    const no1 = document.getElementById("no1");
    
    const can1 = document.getElementById("can1")
    
    const can = document.getElementById("can")
    
    document.getElementById("no").addEventListener("click", () => {
    
      noBtn.style.display = "none";
      noText.style.display = "block";
    
      no1.style.display = "block";
    
      can.style.display = "none";
    
      can1.style.display = "none";
    
    });
    
    yesBtn.addEventListener("click", () => {
    
      yayText.style.display = "block";
    
      yayText1.style.display = "block";
    
      can.style.display = "none";
    
      can1.style.display = "none";

      noBtn.style.display = "none";
      yesBtn.style.display = "none";

      noText.style.display = "none";
    
      no1.style.display = "none";
    
    });
  }

