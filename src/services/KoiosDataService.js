import http from "../http-common";

class KoiosDataService {
	getAllMeasurands() {
		return http.get("/measurands");
	}
}

export default new KoiosDataService();
