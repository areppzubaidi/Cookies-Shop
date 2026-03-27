const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ordersFile = path.join(__dirname, 'orders.json');
let orders = [];

if (fs.existsSync(ordersFile)) {
    orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
}

app.post('/api/orders', (req, res) => {
    const { items, total } = req.body;
    if (!items || !items.length) {
        return res.status(400).json({ message: 'No items in order' });
    }

    const newOrder = {
        id: orders.length + 1,
        items,
        total,
        date: new Date().toISOString()
    };
    orders.push(newOrder);
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
    res.json({ message: `Order placed! Total: $${total.toFixed(2)}` });
});

app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
