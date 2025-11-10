import { ReportUserRepository } from "./repositories.js";

export const ReportUserService = {
  getAll: async () => {
    return await ReportUserRepository.getAll();
  },

  create: async (data) => {
    return await ReportUserRepository.create(data);
  },

  delete: async (id) => {
    const destroyed = await ReportUserRepository.deleteById(id);
    if (!destroyed) throw new Error("Registro no encontrado para eliminar");
    return destroyed;
  },
};

export default ReportUserService;
