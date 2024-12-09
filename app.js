require('dotenv').config(); // لتحميل متغيرات البيئة
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');


// إنشاء تطبيق Express
const app = express();

// Middleware لتحليل JSON
app.use(express.json());

// إعداد اتصال MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// Routes الأساسية
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/users', userRoutes);


// إعداد السيرفر للاستماع
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
