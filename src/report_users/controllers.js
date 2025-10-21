import { ReportUserService } from "./services.js";

export const GetAllReportuserController = async (req, res) => {
  try {
    const report_user = await ReportUserService.getAll();
    res.status(200).json(report_user);
  } catch (error) {
    console.error("Error en en el controller", error.message);
    res
      .status(500)
      .json({ message: "Error al obtener registros", error: error.message });
  }
};

export const CreateReportuserController = async (req, res) => {
  try {
    const { id_user, id_report } = req.body;

    if (!id_user || !id_report) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    if (typeof id_user !== "number" || typeof id_report !== "number") {
      return res.status(400).json({
        message: "Todos los campos deben ser números.",
      });
    }

    const result = await ReportUserService.create({ id_user, id_report });
    res.status(201).json(result);
  } catch (error) {
    console.error("Error en controller:", error.message);
    res
      .status(500)
      .json({ message: "Error al crear id", error: error.message });
  }
};

export const DeleteReportuserController = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return res
        .status(400)
        .json({
          message: "El campo id es obligatorio.",
        });
    }

    const result = await ReportUserService.delete(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error en controller:", error.message);
    res
      .status(500)
      .json({ message: "Error al eliminar los ids", error: error.message });
  }
};