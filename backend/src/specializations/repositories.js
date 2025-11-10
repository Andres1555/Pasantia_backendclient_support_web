import { Specialization } from "../schemas/schemas.js";

async function getAll() {
  return await Specialization.findAll();
}

async function getById(id) {
  if (id === undefined || id === null) return null;
  const byPk = await Specialization.findByPk(id);
  if (byPk) return byPk;
  return null;
}

async function createSpecialization(data) {
  const payload = {
    nombre: data.nombre,
  };
  return await Specialization.create(payload);
}

async function updateById(id, data) {
  const specialization = await Specialization.findByPk(id);
  if (!specialization) return null;
  await specialization.update({ nombre: data.nombre });
  return specialization;
}

async function deleteById(id) {
  if (id === undefined || id === null) return 0;
  const destroyed = await Specialization.destroy({ where: { id } });
  return destroyed;
}

export const SpecializationRepository = {
  getAll,
  getById,
  createSpecialization,
  updateById,
  deleteById,
};
