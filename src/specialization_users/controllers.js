import { SpecuserService } from "./services.js";

export const GetAllSpecuserController = async (req, res) => {
  try {
    const spec_user = await SpecuserService.getAll();
    res.status(200).json(spec_user);
  } catch (error) {
    console.error("Error en en el controller", error.message);
    res
      .status(500)
      .json({ message: "Error al obtener registros", error: error.message });
  }
};

export const CreateSpecuserController = async (req, res) => {
  try {
    const { id_user, id_specia } = req.body;

    if (!id_user || !id_specia) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    if (typeof id_user !== "number" || typeof id_specia !== "number") {
      return res.status(400).json({
        message: "Todos los campos deben ser números.",
      });
    }

    const result = await SpecuserService.create({ id_user, id_specia });
    res.status(201).json(result);
  } catch (error) {
    console.error("Error en controller:", error.message);
    res
      .status(500)
      .json({ message: "Error al crear id", error: error.message });
  }
};

export const DeleteSpecuserController = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return res
        .status(400)
        .json({
          message: "El campo id es obligatorio.",
        });
    }

    const result = await SpecuserService.delete(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error en controller:", error.message);
    res
      .status(500)
      .json({ message: "Error al eliminar los ids", error: error.message });
  }
};