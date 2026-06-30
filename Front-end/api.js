async function fetchFuncionarios() {
  try {
    const r = await fetch("/api/funcionarios");
    if (!r.ok) throw new Error("Falha ao buscar funcionários"); 
    state.funcionarios = await r.json();
  } catch { state.funcionarios = []; }
}

async function handleSubmit() {
  const errs = validateForm();
  state.errors = errs;
  if (Object.keys(errs).length > 0) { render(); return; }

  const payload = {
    id: Date.now(),
    nome: state.form.nome.trim(),
    cpf: state.form.cpf,
    cargo: state.form.cargo,
    dataNascimento: state.form.dataNascimento,
    endereco: state.form.endereco.trim(),
    salario: state.form.salario,
    dataAdmissao: state.form.dataAdmissao,
    data: new Date().toLocaleDateString("pt-BR"),
    hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  };

  try {
    const r = await fetch("/api/funcionarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      const errData = await r.json();
      if (r.status === 409) {
        state.errors.cpf = errData.error;
        render();
        return;
      }
      throw new Error(errData.error);
    }
    await fetchFuncionarios();
    state.submitted = payload;
    state.form = { nome: "", cpf: "", cargo: "", dataNascimento: "", endereco: "", salario: "", dataAdmissao: "" };
    state.errors = {};
    render();
  } catch (err) {
    alert("Erro ao cadastrar: " + err.message);
  }
}

async function handleUpdate(id, data) {
  try {
    const r = await fetch("/api/funcionarios/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!r.ok) {
      const errData = await r.json();
      if (r.status === 409) throw new Error(errData.error);
      throw new Error(errData.error || "Erro ao atualizar");
    }
    await fetchFuncionarios();
    return true;
  } catch (err) {
    alert("Erro ao atualizar: " + err.message);
    return false;
  }
}

async function handleDelete(id) {
  if (!confirm("Tem certeza que deseja excluir este funcionário?")) return;  // ✅ Fix #3
  try {
    const r = await fetch("/api/funcionarios/" + id, { method: "DELETE" });  // ✅ Fix #1
    if (!r.ok) {
      const errData = await r.json();
      throw new Error(errData.error || "Erro desconhecido");
    }
    await fetchFuncionarios();
    render();
  } catch (err) {
    alert("Erro ao excluir: " + err.message);
  }
}