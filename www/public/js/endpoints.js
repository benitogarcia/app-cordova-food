const entorno = "qa"; // prod

const endpoints = {
	"qa": {
        domain: "http://192.168.0.103:3000"
    },
    "prod": {
        domain: "http://192.168.0.103:3000"
    }
};

const apis = {
	"categoria" : {
		"getAll": endpoints[entorno].domain + "/categorias"
	},
	"producto": {
		"findBycategoria": endpoints[entorno].domain + "/productos?idcategoria="
	}
};