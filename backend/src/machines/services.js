import { MachineRepository } from "./repositories.js";

export const MachineService = {
  getAll: async () => {
    return await MachineRepository.getAll();
  },

  create: async (data) => {
    return await MachineRepository.createMachine(data);
  },

  update: async (id, data) => {
    const updated = await MachineRepository.updateById(id, data);
    if (!updated) throw new Error("Máquina no encontrada para actualizar");
    return updated;
  },

  delete: async (id) => {
    const destroyed = await MachineRepository.deleteById(id);
    if (!destroyed) throw new Error("Máquina no encontrada para eliminar");
    return destroyed;
  },

};

export default MachineService;
