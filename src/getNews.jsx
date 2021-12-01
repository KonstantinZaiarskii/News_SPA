import axios from "axios";

const getNewsList = () => {
	const options = {
		method: "GET",
		url: "https://free-news.p.rapidapi.com/v1/search",
		params: { q: "Elon Musk", lang: "en" },
		headers: {
			"x-rapidapi-host": "free-news.p.rapidapi.com",
			"x-rapidapi-key": "4b19d75054mshf1fe2dc10d33c02p138f3bjsn885c2e1b5495",
		},
	};

	return axios.request(options);
};

export default getNewsList;
