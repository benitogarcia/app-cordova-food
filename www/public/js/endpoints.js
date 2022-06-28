const entorno = "qa"; // prod

const endpoints = {
	"qa": {
        domain: "https://my-json-server.typicode.com/benitogarcia/apifood",
        github: "https://raw.githubusercontent.com/benitogarcia/apifood/main/"
    },
    "prod": {
        domain: "",
        github: ""
    }
};

const apis = {
	"sucursal" : {
		"getAll": endpoints[entorno].domain + "/sucursales"
	},
	"promociones" : {
		"getSucursal": endpoints[entorno].domain + "/promociones?idsucursal="
	},
	"categoria" : {
		"getAll": endpoints[entorno].domain + "/categorias"
	},
	"producto": {
		"findBycategoria": endpoints[entorno].domain + "/productos?idcategoria="
	}
};