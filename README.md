# ronimation
<!-- Ronimation API Reference Guide -->

## RONIMATION CLASS
## ———————————————————————————

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

## MAIN CLASS
## ———————————————————————————

#### Main.startPackage()
- Menjalankan seluruh *package* yang terkandung di dalamnya (*Mirip seperti Run()*).

- CATATAN
  Method ini akan mencari seluruh element `<button>` (*harapannya*) yang telah ditambahkan dengan class `Ronimation`, kemudian menambahkan style sesuai dengan kustom `data-attribute` yang telah dimasukkan ke dalam setiap `<button>` yang ada.

```js
Main.startPackage();
```

## MAGIC CLASS
## ———————————————————————————

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

## CONFIGURE CLASS
## ———————————————————————————

#### Configure.configure()
- Memisahkan setiap fungsionalitas *style property* yang ada berdasarkan kelompoknya ( partial )

- CATATAN 
  *parameter pertama* adalah representasi dari tiap-tiap button dengan nama kelas `Ronimation`.

  *parameter kedua* adalah tiap-tiap value dari *style property* yang sudah diisikan dan ditampung sementara ke dalam class `ButtonSetting`.

```js
Configure.configure(ronimationEL, buttonValue);
```

## MESSAGE CLASS
## ———————————————————————————

#### Message.displayPackageMessageIsSuccesfullyRun()
- Pesan di konsol setelah *package* berhasil dijalankan

- CATATAN
  *parameter pertama* wajib di-set `true` bila fitur ini ingin bekerja dengan baik.

```js
Message.displayPackageMessageIsSuccesfullyRun(true); // parameter tidak wajib diisi
```

## DEFAULT STYLE CLASS
## ———————————————————————————

#### DefaultStyle.changeStyle()
- Menambahkan default style khas bawaan *Ronimation Package* 

```js
DefaultStyle.changeStyle();
```






