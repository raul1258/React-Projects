const hour=document.getElementById('hour');
const minute =document.getElementById('minute');
const seccond = document.getElementById('second');

// hour.style.transform = 'rotate(90deg)';
// minute.style.transform = 'rotate(180deg)';
// second.style.transform = 'rotate(270deg)';

setInterval(() => {
    d = new Date();
    const hr = d.getHours();
    const min=d.getMinutes();
    const sec = d.getSeconds();

    const hr_rotation = 30*hr + 0.5* min;
    const min_rotation = 6*min;
    const sec_rotation = 6*sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`
    hour.style.transform = `rotate(${min_rotation}deg)`
    hour.style.transform = `rotate(${sec_rotation}deg)`


})
