import { ReportRepository } from "./repositories.js";

export const ReportService = {
  getAll: async () => {
    return await ReportRepository.getAll();
  },

  create: async (data) => {
    return await ReportRepository.createReport(data);
  },

  update: async (id, data) => {
    const updated = await ReportRepository.updateById(id, data);
    if (!updated) throw new Error("Reporte no encontrado para actualizar");
    return updated;
  },

  delete: async (id) => {
    const destroyed = await ReportRepository.deleteById(id);
    if (!destroyed) throw new Error("Reporte no encontrado para eliminar");
    return destroyed;
  },
};

export default ReportService;
