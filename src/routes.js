var app = require("express")
var router = app.Router();

const { poolPromise } = require("./factory-pool")

router.get("/apara/:chave", async (req , res) => {
  try {
      const pool = await poolPromise 
      const result = await pool.request().query("Select * from AparasDetail where Codigo = '"+req.params.chave+"' ")  
      res.json(result.recordset)
    } catch (err) {
      res.status(500) 
      res.send(err.message) 
    }
}); 
  

module.exports = router; 