import { SpecuserRepository } from "./repositories.js";

export const SpecuserService = {
  getAll: async () => {
    return await SpecuserRepository.getAll();
  },

  create: async (data) => {
    return await SpecuserRepository.create(data);
  },

  update: async (id, data) => {
    const updated = await SpecuserRepository.updateById(id, data);
    if (!updated) throw new Error("Registro no encontrado para actualizar");
    return updated;
  },

  delete: async (id) => {
    const destroyed = await SpecuserRepository.deleteById(id);
    if (!destroyed) throw new Error("Registro no encontrado para eliminar");
    return destroyed;
  },
};

export default SpecuserService;
