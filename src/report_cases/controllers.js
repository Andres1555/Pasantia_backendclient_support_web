import {ReportcaseService} from "./services.js";


export const GetallReportcaseController = async (req, res) => {
  try {
	const report = await ReportcaseService.getAll();
	res.status(200).json(users);
  } catch (error) {
	console.error("Error en el controlador", error.message);
	res
	  .status(500)
	  .json({ message: "Error al obtener al obtener todos los reportes", error: error.message });
  }
};

export const CreateReportcaseController = async (req, res) => {
  try {
	const { } = req.body;

	if (!caso ) {
	  return res.status(400).json({
		message:
		  "Todos los campos son obligatorios",
	  });
	}

	if (
	  typeof caso !== "string" ||typeof estado !== "string" ||typeof descripcion !== "string" ||typeof nombre_natural !== "string" ||typeof clave_natural !== "string"||typeof clave_win !== "string") {
	  return res.status(400).json({
		message:
		  "los campos tienen que ser un tipo de dato valido",
	  });
	}

	await ReportcaseService.create({ });
	res.status(201).json({ message: "reporte creado correctamente" });
  } catch (error) {
	console.error("Error:", error.message);
	res
	  .status(500)
	  .json({ message: "Error al crear el reporte", error: error.message });
  }
};
export const UpdateReportcaseController= async (req, res) => {
  try {
	
	const { id_user,id_report,caso_tecnico,resolucion,tiempo} = req.body;

	if (!id_user||!id_report||!caso_tecnico||!resolucion||!tiempo) {
	  return res.status(400).json({
		message:
		  "Todos los campos son obligatorios",
	  });
	}

	if (
	 typeof id_user !== "number"||typeof id_report !== "number"||typeof caso_tecnico !== "string"||typeof resolucion !== "string"||typeof tiempo !== "time" ) {
	  return res.status(400).json({
		message:
		  "los campos tienen que ser un tipo de dato valido",
	  });
	}

	await ReportcaseService.update({});
	res.status(200).json({ message: "reporte actualizado correctamente" });
  } catch (error) {
	console.error("Error en el controlador:", error.message);
	res
	  .status(500)
	  .json({
		message: "Error al actualizar el reporte",
		error: error.message,
	  });
  }
};
export const DeleteReportcaseController= async (req, res) => {
  try {
	const { id } = req.params;

	if (!id) {
	  return res.status(400).json({ message: "El campo es obligatorio" });
	}

	const idnumber = Number(id);

	if (isNaN(idnumber)) {
	  return res
		.status(400)
		.json({ message: "id no valida" });
	}

	await ReportcaseService.delete(idnumber);
	res.status(200).json({ message: "" });
  } catch (error) {
	console.error("Error:", error.message);
	res
	  .status(500)
	  .json({ message: "Error no se pudo eliminar el reporte", error: error.message });
  }
};