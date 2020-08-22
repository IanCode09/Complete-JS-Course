var Mahasiswa = function(nama, npm, tahunLahir, jurusan, semester) {
    this.nama = nama,
    this.npm = npm,
    this.tahunLahir = tahunLahir,
    this.jurusan = jurusan,
    this.semester = semester
}

Mahasiswa.prototype.umur = function() {
    console.log(2020 - this.tahunLahir);
}

var ian = new Mahasiswa('Ian Lombu', 65115344, 1995, 'Ilmu Komputer', 8)
var saduk = new Mahasiswa('Fritz Saduk', 65115340, 1997, 'Ilmu Komputer', 10)

ian.umur()
saduk.umur()