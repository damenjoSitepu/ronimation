# RONIMATION DOCUMENTATION

### Menjalankan *Package*
```js
import Ronimation from 'ronimation';

Ronimation.watchOutside({ size: "1px", color: "blue", style: "solid" }, false).run();
```

#### Catatan:

- *Method* `watchOutside()` adalah opsional. Jika anda mengatur parameter kedua-nya menjadi `True`, maka anda dapat melihat sesuatu yang menarik di belakang layar.

### Pengenalan Awal
- Menerapkan *class* bernama `Ronimation` akan membuat  button anda mengikuti *default style* yang telah kami tanamkan di dalamnya. 

#### Contoh Penerapan
```html
<button class="Ronimation">Hello, Damenjo</button>
```

### Padding Property

#### Catatan:
- Jika anda memiliki *style property* `Padding` yang ditanamkan ke dalam button yang telah ditambahkan kelas `Aurora`, selama anda tidak memiliki `data-attribute` berjenis `Padding` yang ditambahkan ke dalamnya, maka *style property* `Padding` itulah yang akan digunakan. 

- Semua jenis properti yang berhubungan langsung dengan size memiliki mekanisme yang sama dengan `Padding Property` ini.

- Anda dapat mengukuran satuan `Unit` seperti `Css Unit` pada umumnya seperti: *cm, mm, in, px, pt, pc, em, ex, ch, rem, vw, vh, vmin, vmax, %*.

- Default properti `Padding` adalah semua sisi bernilai `10` dengan satuan *unit* `px`. Anda bebas melakukan kustomisasi dengan semua `data-attribute` yang akan kami jabarkan di bawah ini. 

#### Contoh Penerapan 1 
```html
<!-- Semua sisi padding bernilai 25px -->
<button class="Ronimation" data-p="25">Hello, Damenjo</button>

<button class="Ronimation" data-p="25px">Hello, Damenjo</button>

<button class="Ronimation" data-p="25em">Hello, Damenjo</button>
```

<!-- ### RONIMATION CLASS

#### Ronimation.run()
- Menjalankan seluruh *package* yang terkandung di dalamnya.

```js
Ronimation.run();
```

#### Ronimation.watchOutside()
- Saat diaktifkan, *border dan overflow* ( untuk melihat *outter width & height* ) akan muncul.

- CATATAN: 
  *Parameter pertama* adalah objek yang menyimpan kustomisasi *style border* yang akan digunakan sebagai batas untuk melihat bagian terluar button ( *outter width & height* ).

  *Parameter kedua* wajib di-set `true` bila fitur ini ingin bekerja dengan baik.

```js
Ronimation.watchOutside({ size: "1px", color: "blue", style: "solid" }, true).run();
```

### MAIN CLASS

#### Main.startPackage()
- Menjalankan seluruh *package* yang terkandung di dalamnya (*Mirip seperti Run()*).

- CATATAN
  Method ini akan mencari seluruh element `<button>` (*harapannya*) yang telah ditambahkan dengan class `Ronimation`, kemudian menambahkan style sesuai dengan kustom `data-attribute` yang telah dimasukkan ke dalam setiap `<button>` yang ada.

```js
Main.startPackage();
```

### MAGIC CLASS

#### Magic.changeEverything()
- Bersiap melakukan perubahan styling berdasarkan setiap kustom `data-attribute` yang dimasukkan user ke dalam button.

- CATATAN
  *parameter pertama* adalah representasi dari tiap-tiap button dengan nama kelas `Ronimation`.

  `this.ronimationElement()` berisikan `document.getElementsByClassName('Ronimation')`.

```js
Array.from(this.RonimationElement()).forEach((Ronimation) => {
    Magic.changeEverything(Ronimation);
});
```

### CONFIGURE CLASS

#### Configure.configure()
- Memisahkan setiap fungsionalitas *style property* yang ada berdasarkan kelompoknya ( partial )

- CATATAN 
  *parameter pertama* adalah representasi dari tiap-tiap button dengan nama kelas `Ronimation`.

  *parameter kedua* adalah tiap-tiap value dari *style property* yang sudah diisikan dan ditampung sementara ke dalam class `ButtonSetting`.

```js
Configure.configure(ronimationEL, buttonValue);
```

### MESSAGE CLASS

#### Message.displayPackageMessageIsSuccesfullyRun()
- Pesan di konsol setelah *package* berhasil dijalankan

- CATATAN
  *parameter pertama* wajib di-set `true` bila fitur ini ingin bekerja dengan baik.

```js
Message.displayPackageMessageIsSuccesfullyRun(true); // parameter tidak wajib diisi
```

### DEFAULT STYLE CLASS

#### DefaultStyle.changeStyle()
- Menambahkan default style khas bawaan *Ronimation Package* 

```js
DefaultStyle.changeStyle();
``` -->






