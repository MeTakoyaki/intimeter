// Fungsi Cari
function cari(){
    //mendapatkan nilai dari input dengan id="cari"
    const x = document.getElementById("cari").value;

    //Membangun alamat yang dicari
    const apiUrl ='https://sheetdb.io/api/v1/11nb0x58ubple/search?nomor%20meter%20lama=';
    const url=apiUrl+x;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // untuk debug melalui console log
        // console.log(data);

        document.getElementById('hasil0').innerHTML=data[0]['id pel'];
        document.getElementById('hasil1').innerHTML=data[0]['nama'];
        document.getElementById('hasil2').innerHTML=data[0]['alamat'];
        document.getElementById('hasil3').innerHTML=data[0]['merk meter lama'];
        document.getElementById('hasil4').innerHTML=data[0]['tipe meter lama'];
        document.getElementById('hasil5').innerHTML=data[0]['nomor meter lama'];
        document.getElementById('hasil6').innerHTML=data[0]['merk meter baru'];
        document.getElementById('hasil7').innerHTML=data[0]['tipe meter baru'];
        document.getElementById('hasil8').innerHTML=data[0]['nomor meter baru'];
        document.getElementById('hasil9').innerHTML=data[0]['jenis kendala'];
        document.getElementById('hasil10').innerHTML=data[0]['petugas'];
        document.getElementById('hasil11').innerHTML=data[0]['kontak petugas'];
        }); 
};