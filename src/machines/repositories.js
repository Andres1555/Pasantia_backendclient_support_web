import { Machine } from "../schemas/schemas.js";

async function getAll() {
  return await Machine.findAll();
}

async function getById(id) {
  if (id === undefined || id === null) return null;
  const byPk = await Machine.findByPk(id);
  if (byPk) return byPk;
  return null;
}

async function createMachine(data) {
  const payload = {
    id_user: data.id_user,
    nro_maquina: data.nro_maquina,
  };
  return await Machine.create(payload);
}

async function updateById(id, data) {
  const machine = await Machine.findByPk(id);
  if (!machine) return null;
  const payload = {
    id_user: data.id_user !== undefined ? data.id_user : machine.id_user,
    nro_maquina: data.nro_maquina !== undefined ? data.nro_maquina : machine.nro_maquina,
  };
  await machine.update(payload);
  return machine;
}

async function deleteById(id) {
  if (id === undefined || id === null) return 0;
  const destroyed = await Machine.destroy({ where: { id } });
  return destroyed;
}

async function deleteByNro(nro) {
  if (nro === undefined || nro === null) return 0;
  const destroyed = await Machine.destroy({ where: { nro_maquina: nro } });
  return destroyed;
}

export const MachineRepository = {
  getAll,
  getById,
  createMachine,
  updateById,
  deleteById,
  deleteByNro,
};
