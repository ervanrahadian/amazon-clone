import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="Amazon-Home"
        />
        <div className="home_row">
          <Product
            id="1111"
            title="Samsung Galaxy S20 Ultra 128GB / 8GB: Samsung Galaxy S20 Ultra merupakan sebuah smartphone yang mempunyai layar Dynamic AMOLED dengan resolusi 1440 x 3200 pixels."
            price={18500000}
            image="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/5/10041447/10041447_1827d8a7-b52d-482b-8e00-3dddd85a48cb_600_600"
            alt="S20-Ultra"
            rating={4}
          />
          <Product
            id="1112"
            title="Apple iPhone 11 Pro Max 64GB / 4GB: Apple iphone 11 Pro Max adalah produk keluaran terbaru apple yang versi lanjutan dari iphone Xs Max."
            price={26000000}
            image="https://static.bmdstatic.com/pk/product/large/5de4ad01138b2.jpg"
            alt="11-Pro-Max"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="1117"
            title="MSI MAG CH120 Gaming Chair: Warna Hitam, Kapasitas Beban 150KG, Bahan Kulit Sintetis."
            price={3100000}
            image="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/1/385465/385465_99a37f37-e1a7-4a2e-ba85-875f6352221b_480_480.jpg"
            alt="MSI-MAG-CH120"
            rating={5}
          />
          <Product
            id="1116"
            title="MSI Optix G27c4: 27-inch, Full HD, 1ms Response Time, 165Hz, Warna Hitam."
            price={4580000}
            image="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/27/314325/314325_1b6cc431-1aa7-4ba5-8f81-267f3f6a89de_1024_1024"
            alt="MSI-Optix"
            rating={4}
          />
          <Product
            id="1115"
            title="SteelSeries Apex Pro: Keyboard gaming mekanik 87 tombol Dengan display OLED + kabel USB."
            price={3220000}
            image="https://images-na.ssl-images-amazon.com/images/I/81yOuAUQAiL._AC_SY355_.jpg"
            alt="Apex-Pro"
            rating={5}
          />
        </div>
        <div className="home_rowLast">
          <Product
            id="1113"
            title="MSI GL65 Leopard 10SDR-217ID: Intel Core i7-10750H, 8GB DDR4, 512GB SSD, Nvidia GTX 1660 Ti 6GB."
            price={19999000}
            image="https://www.itgaleri.com/wp-content/uploads/2019/10/MSI-GL65-9SEK-231ID-2.jpg"
            alt="MSI-GL65"
            rating={5}
          />
          <Product
            id="1114"
            title="Razer Kraken Pro V2: Razer Kraken Pro V2 merupakan sebuah headset gaming untuk Para Profesional eSports."
            price={3375000}
            image="https://s3.bukalapak.com/img/3688159228/original/Razer_Kraken_Pro_V2_Analog_Gaming_Headset_Headphone.jpg"
            alt="Razer-Kraken-Pro"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
