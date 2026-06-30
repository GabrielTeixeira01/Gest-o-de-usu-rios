const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");

const app = express();       
const PORT = 3000;           

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'gestao_usuarios',
});

app.post("/api/funcionarios", async (req, res) => {
  try {
    const { id, nome, cpf, cargo, dataNascimento, endereco, salario, dataAdmissao, data, hora } = req.body;
    const [result] = await pool.query(
      "INSERT INTO funcionarios (id, nome, cpf, cargo, dataNascimento, endereco, salario, dataAdmissao, data, hora) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [id, nome, cpf, cargo, dataNascimento || null, endereco || null, salario || null, dataAdmissao || null, data, hora]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "CPF já cadastrado." });
    }
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar funcionário." });
  }
});

app.put("/api/funcionarios/:id", async (req, res) => {
  try {
    const { nome, cpf, cargo, dataNascimento, endereco, salario, dataAdmissao } = req.body;
    await pool.query(
      `UPDATE funcionarios SET nome=?, cpf=?, cargo=?, dataNascimento=?, endereco=?, salario=?, dataAdmissao=? WHERE id=?`,
      [nome, cpf, cargo, dataNascimento || null, endereco || null, salario || null, dataAdmissao || null, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "CPF já cadastrado." });
    }
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar funcionário." });
  }
});

app.delete("/api/funcionarios/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM funcionarios WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao excluir funcionário." });
  }
});

app.get("/api/funcionarios", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM funcionarios ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar funcionários." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});