import { useEffect, useState, type FormEvent } from "react";
import type { ApiClient, Plantilla, Registro } from "@flowsort/shared";
import { DynamicFields } from "../components/DynamicFields";
import { QuickInsights, StatsStrip } from "../components/StatsStrip";

export function Registros({
  api,
  monitoreo = false,
  kanban = false,
}: {
  api: ApiClient;
  monitoreo?: boolean;
  kanban?: boolean;
}) {
  const [items, setItems] = useState<(Registro & { plantilla: Plantilla })[]>(
    [],
  );
  const [cargando, setCargando] = useState(true),
    [error, setError] = useState("");
  const [plantillas, setPlantillas] = useState<Plantilla[]>([]);
  const [nuevo, setNuevo] = useState(false),
    [paso, setPaso] = useState(1),
    [base, setBase] = useState<Record<string, string>>({});
  const [campos, setCampos] = useState<Record<string, unknown>>({}),
    [buscar, setBuscar] = useState("");
  const [filtroPrioridad, setFiltroPrioridad] = useState("TODAS");
  const [filtroEstado, setFiltroEstado] = useState("TODOS");
  const [plantillaId, setPlantillaId] = useState("");
  async function cargar() {
    setCargando(true);
    setError("");
    try {
      const p = await api.request<Plantilla[]>("/plantillas?soloDefault=true");
      setPlantillas(p);
      setPlantillaId((x) => x || p[0]?.id || "");
      const r = await api.request<any>(
        `${monitoreo ? "/monitoreo/registros" : "/registros"}?busqueda=${encodeURIComponent(buscar)}`,
      );
      setItems((Array.isArray(r) ? r : (r.items ?? [])).filter(Boolean));
    } catch {
      setError("No se pudieron cargar los registros.");
    } finally {
      setCargando(false);
    }
  }
  useEffect(() => {
    void cargar();
  }, [monitoreo]);
  function cerrar() {
    setNuevo(false);
    setPaso(1);
    setCampos({});
    setBase({});
  }
  async function borrar(id: string) {
    if (!window.confirm("¿Quitar este registro?")) return;
    try {
      await api.request(`/registros/${id}`, { method: "DELETE" });
      await cargar();
    } catch {
      setError("No se pudo quitar el registro. Intenta nuevamente.");
    }
  }
  async function guardar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await api.request("/registros", {
        method: "POST",
        body: JSON.stringify({ ...d, especificaciones: campos }),
      });
      cerrar();
      await cargar();
    } catch {
      setError("No se pudo guardar el registro. Revisa los campos.");
    }
  }
  async function exportar() {
    const data = await api.download("/monitoreo/registros/exportar");
    await window.flowSort.saveFile("flowsort-registros.xlsx", data);
  }
  const actual = plantillas.find((p) => p.id === plantillaId);
  const visibles = items.filter((r) => (filtroPrioridad === "TODAS" || r.prioridad === filtroPrioridad) && (filtroEstado === "TODOS" || r.estado === filtroEstado));
  const slaVencidos = items.filter((r) => r.prioridad === "SUPER_ALTA" && r.estado === "PENDIENTE" && Date.now() - new Date(r.fechaRegistro).getTime() > 4 * 60 * 60 * 1000).length;
  return (
    <>
      <header>
        <div>
          <h1>{monitoreo ? "Monitoreo" : "Registros"}</h1>
          <span>{cargando ? "Cargando…" : ` resultados`}</span>
        </div>
        <div className="actions">
          <input
            placeholder="Buscar cliente"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && void cargar()}
          />
          {monitoreo && <button onClick={exportar}>Exportar Excel</button>}
          <button disabled={cargando}
            onClick={() => {
              setNuevo(true);
              setPaso(1);
            }}
          >
            + Nuevo registro
          </button>
        </div>
      </header>
      <StatsStrip items={items} />
      {slaVencidos > 0 && <div className="notice error-state">SLA vencido: {slaVencidos} urgente(s) llevan más de 4 horas pendientes.</div>}
      {error && (
        <div className="notice error-state">
          {error}
          <button className="secondary" onClick={() => void cargar()}>
            Reintentar
          </button>
        </div>
      )}
      <div className="dashboard-content">
        {kanban ? (
          <div className="kanban-board">
            {["PENDIENTE", "EN_PROCESO", "COMPLETADO"].map((col) => (
              <section
                className="kanban-column"
                key={col}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const id = e.dataTransfer.getData("id");
                  if (id) {
                    void api
                      .request(`/registros/${id}/estado`, {
                        method: "PATCH",
                        body: JSON.stringify({ estado: col }),
                      })
                      .then(cargar);
                  }
                }}
              >
                <header>
                  <strong>{col.replace("_", " ")}</strong>
                  <span>{items.filter((r) => r.estado === col).length}</span>
                </header>
                {visibles
                  .filter((r) => r.estado === col)
                  .map((r) => (
                    <article
                      className="kanban-card"
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData("id", r.id)}
                      key={r.id}
                    >
                  <small>{r.plantilla?.nombre ?? "Registro"}</small>
                      <b>{r.nombreCliente}</b>
                      <em>{r.prioridad.replace("_", " ")}</em>
                    </article>
                  ))}
              </section>
            ))}
          </div>
        ) : (
          <>
            <section className="panel">
              <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Plantilla</th>
                    <th>Prioridad</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cargando ? <tr><td colSpan={6} className="table-loading">Cargando registros…</td></tr> : items.length === 0 ? <tr><td colSpan={6} className="table-empty">No hay registros todavía.</td></tr> : items.map((r) => (
                    <tr key={r.id}>
                      <td>
                        {r.nombreCliente}
                        <small>{r.contacto}</small>
                      </td>
                    <td>{r.plantilla?.nombre ?? "Registro"}</td>
                      <td>
                        <span className={`badge ${r.prioridad}`}>
                          {r.prioridad.replace("_", " ")}
                        </span>
                      </td>
                      <td>{r.estado.replace("_", " ")}</td>
                      <td>{new Date(r.fechaRegistro).toLocaleString()}</td>
                      <td>
                        <button
                          className="row-remove"
                          onClick={() => void borrar(r.id)}
                        >
                          Quitar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <QuickInsights items={items} />
          </>
        )}
      </div>
      {nuevo && (
        <div className="overlay">
          <form className="modal record-wizard" onSubmit={guardar}>
            <div className="wizard-head">
              <div>
                <small>PASO {paso} DE 2</small>
                <h2>
                  {paso === 1 ? "Cuéntanos lo básico" : "Completa los detalles"}
                </h2>
                <p>
                  {paso === 1
                    ? "Solo lo esencial para empezar."
                    : `Campos de ${actual?.nombre ?? "tu plantilla"}.`}
                </p>
              </div>
              <button type="button" className="close-wizard" onClick={cerrar}>
                ×
              </button>
            </div>
            <div className="wizard-progress">
              <i className={paso >= 1 ? "done" : ""} />
              <i className={paso >= 2 ? "done" : ""} />
            </div>
            {paso === 1 ? (
              <div className="wizard-fields">
                <label>
                  Nombre del cliente
                  <input
                    name="nombreCliente"
                    autoFocus
                    placeholder="Ej. María González"
                    required
                  />
                </label>
                <label>
                  Contacto <span className="optional">Opcional</span>
                  <input name="contacto" placeholder="Teléfono o email" />
                </label>
                <label>
                  ¿Qué tipo de registro es?
                  <select
                    name="plantillaId"
                    required
                    value={plantillaId}
                    onChange={(e) => {
                      setPlantillaId(e.target.value);
                      setCampos({});
                    }}
                  >
                    {plantillas.map((p) => (
                      <option value={p.id} key={p.id}>
                        {p.nombre}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="row">
                  <label>
                    Prioridad
                    <select name="prioridad">
                      <option value="PREDETERMINADA">Normal</option>
                      <option value="BAJA">Baja</option>
                      <option value="ALTA">Alta</option>
                      <option value="SUPER_ALTA">Urgente</option>
                    </select>
                  </label>
                  <label>
                    Estado
                    <select name="estado">
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="EN_PROCESO">En proceso</option>
                      <option value="COMPLETADO">Completado</option>
                    </select>
                  </label>
                </div>
              </div>
            ) : (
              <>
                <input
                  type="hidden"
                  name="nombreCliente"
                  value={base.nombreCliente ?? ""}
                />
                <input
                  type="hidden"
                  name="contacto"
                  value={base.contacto ?? ""}
                />
                <input
                  type="hidden"
                  name="plantillaId"
                  value={base.plantillaId ?? plantillaId}
                />
                <input
                  type="hidden"
                  name="prioridad"
                  value={base.prioridad ?? "PREDETERMINADA"}
                />
                <input
                  type="hidden"
                  name="estado"
                  value={base.estado ?? "PENDIENTE"}
                />
                <div className="wizard-fields">
                  <DynamicFields
                    campos={actual?.campos ?? []}
                    valores={campos}
                    onChange={setCampos}
                  />
                </div>
              </>
            )}
            <div className="wizard-actions">
              {paso === 2 && (
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setPaso(1)}
                >
                  Atrás
                </button>
              )}
              <button type="button" className="secondary" onClick={cerrar}>
                Cancelar
              </button>
              {paso === 1 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    const d = Object.fromEntries(
                      new FormData(
                        (e.currentTarget as HTMLButtonElement).form!,
                      ),
                    );
                    setBase(d as Record<string, string>);
                    setPaso(2);
                  }}
                >
                  Siguiente <span>→</span>
                </button>
              ) : (
                <button>
                  Guardar registro <span>✓</span>
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
