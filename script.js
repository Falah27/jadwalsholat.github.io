
const getDate = new Date();
const year = getDate.getFullYear();
const month = getDate.getMonth() + 1;
const day = getDate.getDate();

function bulan(){
    if(month<10){
        bulan = `0${month}`;
    } else{
        bulan = month;
    }
    return bulan;
}

function hari(){
    if(day<10){
        hari = `0${day}`;
    } else{
        hari = day;
    }
    return hari;
}

const tanggal = `${year}-${bulan()}-${hari()}`;

console.log(tanggal);



function getJadwalSholat(){
    fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/775/tanggal/2022-04-24')
    .then(response => response.json())
    .then(data => {
        const jadwal = data.jadwal.data;
        document.querySelector('.imsyak').textContent = jadwal.imsak;
        document.querySelector('.subuh').textContent = jadwal.subuh;
        document.querySelector('.terbit').textContent = jadwal.terbit;
        document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
        document.querySelector('.ashar').textContent = jadwal.ashar;
        document.querySelector('.maghrib').textContent = jadwal.maghrib;
        document.querySelector('.isya').textContent = jadwal.isya;
        document.querySelector('.tanggal').textContent = jadwal.tanggal;
    });
}

getJadwalSholat();