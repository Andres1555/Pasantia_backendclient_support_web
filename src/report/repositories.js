import { Report } from "../schemas/schemas.js";

async function getAll() {
  return await Report.findAll();
}

async function getById(id) {
  if (id === undefined || id === null) return null;
  const byPk = await Report.findByPk(id);
  if (byPk) return byPk;
  return null;
}

async function createReport(data) {
  const payload = {
    caso: data.caso,
    id_maquina: data.id_maquina,
    area: data.area,
    estado: data.estado,
    descripcion: data.descripcion,
    nombre_natural: data.nombre_natural,
    clave_natural: data.clave_natural,
    clave_win: data.clave_win,
    fecha: data.fecha,
  };
  return await Report.create(payload);
}

async function updateById(id, data) {
  const report = await Report.findByPk(id);
  if (!report) return null;
  await report.update(data);
  return report;
}

async function deleteById(id) {
  if (id === undefined || id === null) return 0;
  const destroyed = await Report.destroy({ where: { id } });
  return destroyed;
}

export const ReportRepository = {
  getAll,
  getById,
  createReport,
  updateById,
  deleteById,
};
