function validate () {
    let result = true

    let nama_lengkap = document.getElementById('txtnama').value
    let email = document.getElementById('txtemail').value
    let phone = document.getElementById('txtphone').value
    let address = document.getElementById('txtaddress').value
    let genderM = document.getElementById('radiogenderM')
    let genderF = document.getElementById('radiogenderF')
    let password = document.getElementById('password').value

    let errnama = document.getElementById('errnama')
    let erremail = document.getElementById('erremail')
    let errphone = document.getElementById('errphone')
    let erraddress = document.getElementById('erraddress')
    let errgender = document.getElementById('errgender')
    let errpass = document.getElementById('errpass')

    if (nama_lengkap.length <= 3){
        errnama.innerHTML = "   Nama harus lebih panjang dari 3 huruf!"
        result = false
    }
    else {errnama.innerHTML = ""}

    if (email.length<10){
        erremail.innerHTML = "Email harus diisi dengan benar!"
        result = false
    }
    else {erremail.innerHTML = ""}

    if (phone.match(Number)){
        errphone.innerHTML = "  Harus diisi dengan Angka!"
        result = false
    }
    if (phone==null||phone==""){
        errphone.innerHTML = "  Nomor handphone harus diisi!"
        result = false}
    else if (phone.length<12||phone.length>12){
        errphone.innerHTML = "  Nomor handphone tidak boleh diatas 12 atau dibawah 12 angka!"
        result = false}
    else {errphone.innerHTML = ""}

    if (address==0){
        erraddress.innerHTML = "    Address harus diisi"
        result = false
    }
    else {erraddress.innerHTML = ""}

    if (!genderM.checked && !genderF.checked){
        errgender.innerHTML = " Gender harus dipilih!"
        result = false
    }
    else {errgender.innerHTML = ""}

    if (password.length > 1 && length < 8 ){
        errpass.innerHTML = "   password harus diatas 8 huruf!"
        result = false
    }
    else if (password == 0){
        errpass.innerHTML = "   password harus diisi!"
        result = false
    }
    else {errpass.innerHTML = ""}

    if(result){
        alert('succesfully register')}
        return result

}