import { SpecializationUsers } from "../schemas/schemas.js";

async function getAll() {
  return await SpecializationUsers.findAll();
}

async function getById(id) {
  if (id === undefined || id === null) return null;
  const byPk = await SpecializationUsers.findByPk(id);
  if (byPk) return byPk;
  return null;
}

async function create(data) {
  const payload = {
    id_user: data.id_user,
    id_specia: data.id_specia,
  };
  return await SpecializationUsers.create(payload);
}

async function updateById(id, data) {
  const item = await SpecializationUsers.findByPk(id);
  if (!item) return null;
  await item.update(data);
  return item;
}

async function deleteById(id) {
  if (id === undefined || id === null) return 0;
  const destroyed = await SpecializationUsers.destroy({ where: { id } });
  return destroyed;
}

export const SpecuserRepository = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
