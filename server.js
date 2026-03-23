const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // Bulut sunucusu için kritik ayar

app.use(express.json());

// Ana Sayfa Mesajı
app.get('/', (req, res) => {
    res.send('<h1>Triplinx AI Canlıda!</h1><p>Seyahat planı için /api/plan rotasını kullanın.</p>');
});

// Seyahat Planlama API'si
app.get('/api/plan', (req, res) => {
    const { destination, budget } = req.query;

    
    const plan = {
        hedef: destination || "İstanbul",
        butce: budget || 5000,
        havaDurumu: "22°C, Güneşli (Seyahat için ideal)",
        konaklama: budget > 7000 ? "Merkezi 4 Yıldızlı Otel" : "Ekonomik Butik Otel",
        ulasim: "THY - En Uygun Saat Opsiyonu (Uçak)",
        oneriler: [
            "Sabah: Tarihi yarımada gezisi",
            "Öğle: Yerel lezzet durakları (Maliyet Optimizasyonlu)",
            "Akşam: Deniz kenarı yürüyüşü"
        ],
        mesaj: "Triplinx AI: Bütçenize göre en verimli rota oluşturuldu."
    };

    res.json(plan);
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
