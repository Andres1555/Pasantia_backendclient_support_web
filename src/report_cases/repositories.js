import { ReportCase } from "../schemas/schemas.js";

async function getAll() {
  return await ReportCase.findAll();
}

async function getById(id) {
  if (id === undefined || id === null) return null;
  const byPk = await ReportCase.findByPk(id);
  if (byPk) return byPk;
  return null;
}

async function createReportCase(data) {
  const payload = {
    id_user: data.id_user,
    id_report: data.id_report,
    caso_tecnico: data.caso_tecnico,
    resolucion: data.resolucion,
    tiempo: data.tiempo,
  };
  return await ReportCase.create(payload);
}

async function updateById(id, data) {
  const rc = await ReportCase.findByPk(id);
  if (!rc) return null;
  await rc.update(data);
  return rc;
}

async function deleteById(id) {
  if (id === undefined || id === null) return 0;
  const destroyed = await ReportCase.destroy({ where: { id } });
  return destroyed;
}

export const ReportCaseRepository = {
  getAll,
  getById,
  createReportCase,
  updateById,
  deleteById,
};
