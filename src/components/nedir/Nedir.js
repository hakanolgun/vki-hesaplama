import React from 'react'
import styles from './stylenedir.module.css'

function Nedir() {
    return (
        <div className={styles.nedirDisDiv}>
            <div className={styles.nedirIcDiv}>
                <h2>Vücut Kitle Endeksi Nedir?</h2>
            <p>Vücut kitle endeksi, uluslararası düzeyde kabul gören, vücudun boy ve kilosu ile hesaplanan bir endekstir. Sağlıklı bir yaşam için bu endeksin belirli aralıklarda bulunması gerekir.</p>
            <p>Endeks, boy uzunluğunun cm cinsinden kendisiyle ile çarpılıp, kilonun çıkan bu sonuca bölünmesi ile elde edilir. Örneğin, 1,70cm boyunda ve 70 kg gelen bir kişinin endeksi şu şekilde hesaplanır;
1,70 X 1,70=2,89 70kg:2,89=24,2214... Bu kişinin vücut kitle endeksi 24,2214'tür. </p>
            <p>Genel olarak bu endeks 20,00 ile 25,00 arası sağlıklı kabul edilir. İlerleyen yaşlarda sağlıklı endeks aralığının biraz yukarıya doğru çıkması normaldir. Örneğin 19-24 yaş aralığı için ideal olan endeks 19,00-24,00 iken, 25-34 yaş aralığında bu endeks 20,00-25,00 ve 35-44 yaş aralığında 21,00-26,00 olabilir.</p>
            <p>Endeks değerinin, olması gereken aralığın altında olması, o kişinin zayıf olduğunu anlamına gelir. 25 yaş endeksinin 20,00-25,00 arasında olması gerekirken, 20,00'dan küçük ise bu kişi zayıf, 20,00-25,00 arasında ise normal, 26,00-30,00 arasında ise hafif şişman, 31,00-35,00 arasında ise şişman, 36,00-45,00 arasında ise sağlık açısından riskli, 46,00-50,00 arasında ise aşırı şişmandır. 50,00 ve yukarısı ise de ölümcül endekstir. Değerlerin normal limitlerin çok altına inmesi (zayıflık) veya çok üstüne (aşırı şişmalık) çıkması durumunda vücudunuz alarm veriyor demektir. Bu durumda uzman kişilerden yardım alınması hayati önem taşımaktadır. Bazen cerrahî müdahale, bazen de diyetlerle sonuca gidilebilir. Aksi takdirde bu endeksle yaşama devam etmek, telafisi mümkün olmayan olumsuzluklara sebebiyet verebilir.</p>           
            <a href="https://www.vucut.gen.tr/vucut-kitle-endeksi.html">Detaylı Bilgi İçin Tıklayınız</a>
            </div>
        </div>
    )
}

export default Nedir
