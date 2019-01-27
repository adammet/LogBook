import $ from "jquery";

class LogBookService {

    static async callAPI(endpoint, data) {
        return new Promise((resolve, reject) => {
            let request = $.ajax({
                method: "POST",
                url: `http://localhost:3000/${endpoint}`,
                contentType: 'application/json',
                data: JSON.stringify(data)
            });

            request.done(response => {
                resolve(response)
            });

            request.fail((error) => {
                reject(error.responseJSON);
            });
        })

    }

}

export default LogBookService;