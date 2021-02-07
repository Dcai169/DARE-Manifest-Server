const express = require("express");
const app = express();
const port = process.env.PORT || 80;

const d1_locales = ['en', 'fr', 'es', 'de', 'it', 'ja', 'pt-br'];

app.get('/', (req, res) => {
    res.redirect('https://github.com/Dcai169/DARE-Manifest-Server');
});

app.get('/manifest', (req, res) => {
    let locale = req.query.locale;

    if (!d1_locales.includes(locale)) {
        locale = 'en';
    }

    res.sendFile(`./manifests/d1/${locale}.json`);
});

app.listen(port, () => { console.log(`Server running on port ${port}`) });
