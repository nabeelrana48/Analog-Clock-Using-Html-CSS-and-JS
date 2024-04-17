setInterval ( ()=>{
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let hrotation = 30*hours + minutes/2;
    let mrotation = 6*minutes;
    let srotation = 6*seconds;
    hpin.style.transform = `rotate(${hrotation}deg)`;
    mpin.style.transform = `rotate(${mrotation}deg)`;
    spin.style.transform = `rotate(${srotation}deg)`;
    console.log(seconds)
}, 1000)