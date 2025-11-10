import { SpecializationRepository } from "./repositories.js";

export const SpecializationseService = {
  getAll: async () => {
    return await SpecializationRepository.getAll();
  },

  getById: async (id) => {
    const spec = await SpecializationRepository.getById(id);
    if (!spec) throw new Error("Especializacion no encontrada");
    return spec;
  },

  create: async (data) => {
    return await SpecializationRepository.createSpecialization(data);
  },

  update: async (id, data) => {
    const updated = await SpecializationRepository.updateById(id, data);
    if (!updated) throw new Error("Especializacion no encontrada para actualizar");
    return updated;
  },

  delete: async (id) => {
    const destroyed = await SpecializationRepository.deleteById(id);
    if (!destroyed) throw new Error("Especializacion no encontrada para eliminar");
    return destroyed;
  },
};
