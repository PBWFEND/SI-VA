public class Film {
    // Atribut
    String judul;
    String genre;
    int durasi;
    int tahunRilis;

    // Procedure → menampilkan data film
    void tampilFilm() {
        System.out.println("Judul: " + judul);
        System.out.println("Genre: " + genre);
        System.out.println("Durasi: " + durasi + " menit");
        System.out.println("Tahun Rilis: " + tahunRilis);
    }

    // Function → mengembalikan lama film dalam jam
    double getDurasiJam() {
        return durasi / 60.0;
    }

    // Main program
    public static void main(String[] args) {
        Film f1 = new Film();
        f1.judul = "Inception";
        f1.genre = "Sci-Fi";
        f1.durasi = 148;
        f1.tahunRilis = 2010;

        Film f2 = new Film();
        f2.judul = "Avengers: Endgame";
        f2.genre = "Action";
        f2.durasi = 181;
        f2.tahunRilis = 2019;

        // Tampilkan data film pertama
        f1.tampilFilm();
        System.out.println("Durasi dalam jam: " + f1.getDurasiJam());
        System.out.println();

        // Tampilkan data film kedua
        f2.tampilFilm();
        System.out.println("Durasi dalam jam: " + f2.getDurasiJam());
    }
}
