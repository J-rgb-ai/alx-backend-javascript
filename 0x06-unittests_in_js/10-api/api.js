app.get('/available_payments', (req, res) => {
    res.json({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
  
  app.post('/login', (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
  });
  
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
  
  module.exports = app;